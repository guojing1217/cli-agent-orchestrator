---
sidebar_position: 1
---

# Building with Claude Code

This guide covers how to use CAO with Claude Code as your primary AI agent.

## Prerequisites

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed and authenticated
- CAO installed (`uv tool install cao`)

## Setup

Claude Code is the default provider in CAO. Start a session:

```bash
cao session start --provider claude-code --name my-agent
```

## Multi-Agent with Claude Code

```bash
# Supervisor using Claude Code
cao session start --role supervisor --name main --provider claude-code

# Workers also using Claude Code (separate context windows)
cao assign --to worker-1 --task "Implement feature X"
cao assign --to worker-2 --task "Write tests for feature X"
```

## Sub-Agent Integration

Claude Code's built-in sub-agent capabilities can be combined with CAO's orchestration for deeper multi-agent workflows.
