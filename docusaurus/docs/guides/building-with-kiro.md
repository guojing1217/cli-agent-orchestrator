---
sidebar_position: 2
---

# Building with Kiro CLI

This guide covers how to use CAO with Kiro CLI, the default provider. Kiro CLI is an AI-powered coding assistant that operates through agent-based conversations with customizable profiles.

## Prerequisites

1. **AWS Credentials** -- Kiro CLI authenticates via AWS:
   ```bash
   aws configure
   # Or use SSO, IAM Identity Center, environment variables, etc.
   ```
2. **Kiro CLI** installed:
   ```bash
   npm install -g @anthropic-ai/kiro-cli
   kiro-cli --version
   ```
3. **CAO** installed with `cao-server` running.

## Launching a Kiro CLI Session

Kiro CLI is the default provider, so no `--provider` flag is needed:

```bash
# Start the server
cao-server

# Launch (kiro_cli is the default)
cao launch --agents code_supervisor
```

Explicitly specifying the provider:

```bash
cao launch --agents code_supervisor --provider kiro_cli
```

:::note
Kiro CLI **requires** an agent profile -- it cannot be launched without one. Always use `--agents <profile>`.
:::

## Dual UI Mode

Kiro CLI supports two UI modes, and CAO auto-detects which is active:

### New TUI (default)

The latest Kiro CLI uses a rich terminal UI with:
- Agent name and model displayed in a header bar
- `ask a question, or describe a task` idle prompt
- `Credits:` completion markers
- Progress indicators and credit tracking

### Legacy UI

Older versions or `--legacy-ui` flag show:
- `[profile_name] >` prompt format
- Green arrow (`>`) response markers
- ANSI-colored output

CAO's status detection and message extraction work with both modes seamlessly. The provider tries legacy extraction first; if no green arrows are found, it falls back to TUI extraction.

## Profile Requirement

Unlike Claude Code (which can run without a profile), Kiro CLI always needs a profile. CAO sends the profile name to Kiro CLI's `--agent` flag, pointing to the corresponding file in `~/.kiro/agents/`.

When you `cao install developer`, CAO places the agent markdown file in the configured Kiro agents directory (default `~/.kiro/agents/`).

## Custom Agent Directory

Change where Kiro CLI agent profiles are stored:

```bash
# Via settings.json
cao config set agents.dirs.kiro_cli /path/to/my/agents

# Via environment variable
export CAO_AGENTS_DIR=/path/to/my/agents
```

## Skill Delivery

CAO skills are delivered to Kiro CLI via native `skill://` resources. When the server starts, built-in skills are auto-seeded, and any managed skills you add become available to Kiro sessions without explicit `load_skill` calls.

## Cross-Provider Supervisor on Kiro

A common pattern: use Kiro CLI as the supervisor (leveraging its AWS integration) while delegating to Claude Code or Codex workers for implementation:

```markdown
---
name: aws_supervisor
description: AWS-aware orchestrator
provider: kiro_cli
role: supervisor
---

You are a supervisor agent with AWS expertise. Delegate coding tasks to the
`developer` agent (runs on Claude Code) and review tasks to `reviewer`.
```

## Status Detection

The Kiro CLI provider detects terminal states:

| Status | Indicator |
|--------|-----------|
| IDLE | Agent prompt visible (`ask a question, or describe a task` or `[profile] >`) |
| PROCESSING | No idle prompt found (agent is generating) |
| COMPLETED | Response marker present + idle prompt after it |
| WAITING_USER_ANSWER | Permission prompt (`Allow this action? [y/n/t]:`) |
| ERROR | Known error indicators (e.g., "Kiro is having trouble responding") |

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "No agent profile" error | Kiro CLI requires a profile. Ensure you use `--agents <name>` and the profile is installed in `~/.kiro/agents/`. |
| AWS auth failure | Verify credentials: `aws sts get-caller-identity`. Check that your session/role is valid. |
| Status stuck on PROCESSING | The TUI may have changed format. Update Kiro CLI and CAO to latest versions. Attach to tmux to inspect output. |
| Profile not found | Run `cao profile list` to see available profiles. Check `cao config get agents.dirs.kiro_cli` for the scan directory. |
| Permission prompt blocking | Attach to tmux (`tmux attach -t cao-<session>`) and respond to the prompt manually, or use `--yolo` mode. |
