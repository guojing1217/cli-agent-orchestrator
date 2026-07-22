---
sidebar_position: 3
---

# Orchestration Patterns

CAO provides three orchestration patterns for inter-agent communication and task delegation.

## Overview

| Pattern | Type | Blocks? | Use Case |
|---------|------|---------|----------|
| [Handoff](/docs/patterns/handoff) | Synchronous | Yes | Sequential tasks with dependencies |
| [Assign](/docs/patterns/assign) | Asynchronous | No | Independent parallel tasks |
| [Send Message](/docs/patterns/send-message) | Direct | No | Inter-agent communication |

## Choosing a Pattern

- Use **Handoff** when the next step depends on the result of the current step
- Use **Assign** when tasks can run independently in parallel
- Use **Send Message** when agents need to coordinate without task delegation
