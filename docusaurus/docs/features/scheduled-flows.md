---
sidebar_position: 4
---

# Scheduled Flows

CAO supports cron-like scheduling for automated multi-agent workflows.

## Defining a Flow

Flows are defined in YAML and can be scheduled to run at specific intervals.

```yaml
name: nightly-review
schedule: "0 2 * * *"
steps:
  - assign: worker-1
    task: "Run linting and type checks"
  - assign: worker-2
    task: "Check for dependency updates"
  - handoff: worker-3
    task: "Generate summary report"
```

## Managing Flows

```bash
# List scheduled flows
cao flow list

# Start a flow manually
cao flow run --name nightly-review

# Stop a flow
cao flow stop --name nightly-review
```
