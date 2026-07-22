---
sidebar_position: 2
---

# Assign Pattern

The Assign pattern provides asynchronous task delegation. The supervisor dispatches a task and continues without waiting.

## Usage

```bash
cao assign --to worker-1 --task "Run integration tests"
cao assign --to worker-2 --task "Update documentation"
```

## Behavior

1. Supervisor sends task to the target worker
2. Supervisor **continues immediately** without waiting
3. Workers execute independently in parallel
4. Results can be checked later via `cao status`

## When to Use

- Independent tasks that can run in parallel
- Long-running operations where blocking is undesirable
- Fan-out workflows (one supervisor, many workers)
