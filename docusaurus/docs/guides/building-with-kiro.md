---
sidebar_position: 2
---

# Building with Kiro CLI

This guide covers how to use CAO with Kiro CLI as your AI agent.

## Prerequisites

- [Kiro CLI](https://kiro.dev/docs/cli) installed and authenticated
- CAO installed (`uv tool install cao`)

## Setup

```bash
cao session start --provider kiro-cli --name my-agent
```

## Multi-Agent with Kiro

```bash
cao session start --role supervisor --name main --provider kiro-cli
cao assign --to worker-1 --task "Analyze the codebase architecture"
```
