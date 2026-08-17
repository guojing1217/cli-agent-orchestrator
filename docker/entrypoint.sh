#!/usr/bin/env bash
# cao-entrypoint — start one CAO node inside a container.
#
# In the k8s one-agent-per-pod topology (k8s/), the same entrypoint serves two
# roles distinguished purely by env: the SUPERVISOR pod (code_supervisor
# profile, CAO_ADVERTISED_URL set, no terminal cap) delegates work to WORKER
# pods (worker profile, CAO_MAX_TERMINALS=1 — exactly one agent per pod) via
# the assign/handoff `target_host` parameter.
#
# Env:
#   CAO_BIND_HOST         bind address for cao-server (default 0.0.0.0 —
#                         container networking is expected to gate access;
#                         see the security note below)
#   CAO_API_PORT          server port (default 9889)
#   CAO_ALLOWED_HOSTS     comma-separated extra Host-header values (set this to
#                         the container/pod DNS name peers will use to reach it)
#   CAO_INSTALL_PROFILES  optional space-separated "profile:provider" pairs to
#                         install before the server starts,
#                         e.g. "code_supervisor:kiro_cli developer:claude_code".
#                         The provider is also pinned into each installed
#                         profile's frontmatter — see the comment at the loop
#                         below for why that is load-bearing.
#   CAO_HOME_DIR          CAO's state tree (DB, logs, installed profiles). The
#                         image sets it to /home/cao/.cao, the declared VOLUME,
#                         so state persists; leaving it unset would put state on
#                         the ephemeral overlay instead.
#   CAO_MAX_TERMINALS     optional cap on live terminals this node will host
#                         (unset = unlimited). Worker pods set 1 so each pod
#                         hosts exactly one agent; extra placements get HTTP 429.
#   CAO_ADVERTISED_URL    base URL at which PEERS can reach this node's
#                         cao-server (e.g. http://cao-supervisor:9889). Set on
#                         the supervisor pod so remote workers' send_message
#                         callbacks can route results back cross-pod.
#
# SECURITY: cao-server has no per-request auth by default. Anyone who can reach
# the port can launch agents (command execution) in this container. Restrict
# reachability with Docker networks / k8s NetworkPolicy, or enable CAO's OAuth
# layer (AUTH0_DOMAIN / CAO_AUTH_JWKS_URI).
set -euo pipefail

BIND_HOST="${CAO_BIND_HOST:-0.0.0.0}"
PORT="${CAO_API_PORT:-9889}"

echo "[cao-entrypoint] initializing CAO state"
cao init || true

if [ -n "${CAO_INSTALL_PROFILES:-}" ]; then
  for spec in ${CAO_INSTALL_PROFILES}; do
    # Require the documented profile:provider form. Without this, a bare
    # "developer" parses to profile=developer AND provider=developer (both
    # expansions fall back to the whole string), which fails later as an
    # unknown provider rather than here as a typo.
    case "${spec}" in
      *:*) ;;
      *)
        echo "[cao-entrypoint] WARN: skipping '${spec}' — CAO_INSTALL_PROFILES entries must be profile:provider"
        continue
        ;;
    esac

    profile="${spec%%:*}"
    provider="${spec##*:}"

    # Both values are identifiers; reject anything else before it reaches either
    # `cao install` or the YAML frontmatter write below. A value containing a
    # newline would otherwise inject arbitrary keys into the installed profile's
    # frontmatter — the same class of issue upstream closed for flow creation.
    # These come from the pod spec, so an attacker who can set them can already
    # execute code here: this is hygiene, not a privilege boundary.
    valid=1
    case "${profile}" in ''|*[!A-Za-z0-9_-]*) valid=0 ;; esac
    case "${provider}" in ''|*[!A-Za-z0-9_-]*) valid=0 ;; esac
    if [ "${valid}" -ne 1 ]; then
      echo "[cao-entrypoint] WARN: skipping '${spec}' — profile and provider must each match [A-Za-z0-9_-]+"
      continue
    fi

    echo "[cao-entrypoint] installing profile '${profile}' for provider '${provider}'"
    cao install "${profile}" --provider "${provider}" \
      || echo "[cao-entrypoint] WARN: install ${spec} failed (continuing)"

    # Pin the provider into the installed profile's frontmatter.
    #
    # WHY THIS IS REQUIRED, not belt-and-braces: `cao install --provider X`
    # applies X to that install but does NOT record it in the installed profile.
    # At session-creation time the server resolves the provider as
    #   explicit `provider` param  >  profile frontmatter `provider:`  >
    #   DEFAULT_PROVIDER (kiro_cli)
    # and a cross-pod delegation deliberately sends NO provider — the remote node
    # is meant to resolve it from its own profile store. So without this key a
    # delegated worker falls back to kiro_cli, which this image does not ship, and
    # every cross-pod assign/handoff fails with HTTP 400 "'kiro-cli' was not
    # found". Reproduced on EKS: the fleet comes up perfectly healthy and then
    # cannot place a single remote agent.
    python3 - "${profile}" "${provider}" <<'PY' || echo "[cao-entrypoint] WARN: could not pin provider for ${spec} (continuing)"
import os, pathlib, re, sys

profile, provider = sys.argv[1], sys.argv[2]
# Re-checked here, not just in the caller, so this block cannot write a
# frontmatter key from an unvalidated value if it is ever reused elsewhere.
for label, value in (("profile", profile), ("provider", provider)):
    if not re.fullmatch(r"[A-Za-z0-9_-]+", value):
        raise SystemExit(f"refusing to pin malformed {label} {value!r}")
# Mirror constants.py: CAO_HOME_DIR wins, else ~/.aws/cli-agent-orchestrator.
home = os.environ.get("CAO_HOME_DIR", "").strip() or os.path.join(
    os.path.expanduser("~"), ".aws", "cli-agent-orchestrator"
)
path = pathlib.Path(home).expanduser() / "agent-context" / f"{profile}.md"
text = path.read_text()
if not text.startswith("---\n"):
    raise SystemExit(f"{path}: no YAML frontmatter to pin a provider into")
head, sep, body = text[4:].partition("\n---")
if not sep:
    raise SystemExit(f"{path}: unterminated YAML frontmatter")
lines = head.splitlines()
for i, line in enumerate(lines):
    if re.match(r"\s*provider\s*:", line):
        lines[i] = f"provider: {provider}"
        break
else:
    lines.append(f"provider: {provider}")
path.write_text("---\n" + "\n".join(lines) + sep + body)
print(f"[cao-entrypoint] pinned provider '{provider}' in {path}")
PY
  done
fi

echo "[cao-entrypoint] starting cao-server on ${BIND_HOST}:${PORT}"
exec cao-server --host "${BIND_HOST}" --port "${PORT}"
