---
sidebar_position: 2
---

# Quick Start

This guide walks you through running your first multi-agent workflow with CAO.

## Start a session

```bash
# Start CAO with the default provider (claude-code)
cao session start

# Start with a specific provider
cao session start --provider kiro-cli
```

## Run a multi-agent workflow

```bash
# Start a supervisor session
cao session start --role supervisor --name main

# Assign a task to a worker agent
cao assign --to worker-1 --task "Implement the authentication module"

# Hand off a task (synchronous - waits for completion)
cao handoff --to worker-2 --task "Write unit tests for auth module"

# Check status of all sessions
cao status
```

## Use orchestration patterns

CAO supports three orchestration patterns:

| Pattern | Behavior | Use Case |
|---------|----------|----------|
| **Handoff** | Synchronous — waits for completion | Sequential tasks with dependencies |
| **Assign** | Asynchronous — fire and forget | Independent parallel tasks |
| **Send Message** | Direct communication via MCP inbox | Inter-agent coordination |

## Next steps

- Learn about the [Architecture](/docs/core-concepts/architecture)
- Explore [Orchestration Patterns](/docs/patterns/handoff) in depth
- Set up [Scheduled Flows](/docs/features/scheduled-flows) for automation
