---
sidebar_position: 1
---

# Handoff Pattern

The Handoff pattern provides synchronous task delegation. The supervisor waits for the worker to complete before continuing.

## Usage

```bash
cao handoff --to worker-1 --task "Refactor the database module"
```

## Behavior

1. Supervisor sends task to the target worker
2. Supervisor **blocks** until the worker completes
3. Worker result is returned to the supervisor
4. Supervisor continues execution

## When to Use

- Tasks with sequential dependencies
- When the supervisor needs the result before proceeding
- Code review workflows where output feeds the next step
