---
sidebar_position: 3
---

# Building with Amazon Q Developer

This guide covers how to use CAO with Amazon Q Developer CLI as your AI agent.

## Prerequisites

- [Amazon Q Developer CLI](https://aws.amazon.com/q/developer/) installed and authenticated
- CAO installed (`uv tool install cao`)

## Setup

```bash
cao session start --provider q-developer --name my-agent
```

## Multi-Agent with Q Developer

```bash
cao session start --role supervisor --name main --provider q-developer
cao assign --to worker-1 --task "Review CloudFormation templates"
```
