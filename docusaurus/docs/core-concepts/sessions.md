---
sidebar_position: 2
---

# Sessions

Sessions are the fundamental unit of work in CAO. Each session represents an isolated tmux terminal running an AI agent.

## Session Lifecycle

1. **Create** — A new tmux session is spawned with the configured provider
2. **Active** — The agent is running and can receive tasks
3. **Complete** — The agent has finished its work
4. **Terminated** — The session has been explicitly stopped

## Session Management

```bash
# List all active sessions
cao session list

# Start a new session
cao session start --name my-worker --provider claude-code

# Stop a session
cao session stop --name my-worker

# View session output
cao session logs --name my-worker
```

## Session Roles

- **Supervisor** — Coordinates other agents, delegates tasks
- **Worker** — Executes tasks assigned by the supervisor
