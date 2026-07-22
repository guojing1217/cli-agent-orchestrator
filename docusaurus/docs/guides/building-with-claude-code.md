---
sidebar_position: 1
---

# Building with Claude Code

This guide covers how to use CAO with Claude Code as your AI agent provider, including its unique features like permission modes, eager inbox delivery, and native agent routing.

## Prerequisites

1. **Claude Code CLI** installed:
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```
2. **Authentication** -- either an Anthropic API key or a Claude subscription:
   ```bash
   claude setup-token
   # Or set ANTHROPIC_API_KEY in your environment
   ```
3. **CAO** installed with `cao-server` running.

## Launching a Claude Code Session

```bash
# Start the server
cao-server

# Launch with Claude Code as the provider
cao launch --agents code_supervisor --provider claude_code
```

Or pin the provider in the profile:

```markdown
---
name: my_supervisor
description: Claude Code Supervisor
provider: claude_code
role: supervisor
---

You orchestrate developer and reviewer agents.
```

## Permission Modes

By default, CAO launches Claude Code with `--dangerously-skip-permissions` so worker agents spawned via handoff/assign do not block on permission prompts.

For finer control, set `permissionMode` in the profile:

```markdown
---
name: careful_reviewer
description: Reviewer with auto permission mode
provider: claude_code
permissionMode: auto
---

You review code for quality. You cannot make edits without approval.
```

| Mode | Behavior |
|------|----------|
| `default` | Normal Claude Code permission prompts |
| `acceptEdits` | Auto-accept file edits, prompt for commands |
| `plan` | Read-only, no tool execution |
| `auto` | Claude's built-in permission classifier decides |
| `bypassPermissions` | Skip all prompts (equivalent to `--dangerously-skip-permissions`) |

`permissionMode` always takes priority over `--yolo`.

## Eager Inbox Delivery

Claude Code's Ink TUI buffers pasted input even while the agent is processing. CAO can exploit this to deliver queued inbox messages immediately, eliminating inter-turn latency.

```bash
export CAO_EAGER_INBOX_DELIVERY=true
cao-server
```

With eager delivery enabled, messages are delivered to Claude Code terminals even during PROCESSING or WAITING_USER_ANSWER states, so the agent picks them up the instant it finishes its current turn.

## Native Agent Routing

If you already have agents defined in Claude Code's native store (`~/.claude/agents/`), you can reference them directly from a CAO profile without duplicating their configuration:

```markdown
---
name: my-wrapper
description: Thin wrapper for native Claude Code agent
provider: claude_code
native_agent: my-native-agent
---
```

When `native_agent` is set, CAO passes `--agent <name>` to Claude Code and skips system prompt / MCP config decomposition. Claude Code handles all configuration (model, MCP servers, hooks, tools) from its native agent definition.

If no CAO profile is found for a given agent name, the provider also falls back to checking the native store.

## Profile Integration Details

When launched with a CAO agent profile, the Claude Code provider:

1. Loads the profile and extracts the markdown body as the system prompt.
2. Passes it via `--append-system-prompt` (newlines escaped for tmux compatibility).
3. Injects any `mcpServers` defined in the profile via `--mcp-config` JSON.
4. Applies `allowedTools` restrictions through CAO's tool vocabulary (the MCP server gates access).

## Combining with Claude Code Sub-Agents

Claude Code's native [sub-agent](https://docs.claude.com/en/docs/claude-code/sub-agents) feature works inside CAO. A CAO worker running Claude Code can internally spawn its own sub-agents for focused tasks. This gives you two layers of delegation:

- **CAO layer** -- supervisor delegates to isolated tmux workers (cross-provider, full session isolation)
- **Claude Code layer** -- within a single worker, Claude Code spawns lightweight sub-agents (same process, shared context)

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Trust dialog blocking worker startup | Verify `--dangerously-skip-permissions` is being passed (default behavior). Check with `tmux attach`. |
| Status stuck on PROCESSING | Update Claude Code CLI (`npm update -g @anthropic-ai/claude-code`). Newer versions may use different spinner formats. |
| Authentication failures | Run `claude setup-token` or export `ANTHROPIC_API_KEY`. |
| Status stuck on ERROR | Attach to the tmux session and check the terminal output directly. |
