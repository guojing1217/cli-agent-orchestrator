---
sidebar_position: 3
---

# Send Message Pattern

The Send Message pattern enables direct inter-agent communication through MCP inbox queues.

## Usage

```bash
cao send --to worker-1 --message "Please prioritize the auth module"
```

## Behavior

1. Sender posts a message to the target agent's MCP inbox
2. Target agent receives the message in its context
3. No task delegation occurs — purely informational

## When to Use

- Coordination between peer agents
- Providing context or updates without delegating work
- Real-time communication between running sessions
