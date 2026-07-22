---
sidebar_position: 1
---

# Architecture

CAO uses a hierarchical multi-agent architecture where a supervisor agent coordinates specialized worker agents through isolated tmux sessions.

```
┌─────────────────────────────────────┐
│           Supervisor Agent           │
│         (orchestration logic)        │
└──────┬──────────┬──────────┬────────┘
       │          │          │
       ▼          ▼          ▼
┌──────────┐ ┌──────────┐ ┌──────────┐
│ Worker 1 │ │ Worker 2 │ │ Worker N │
│  (tmux)  │ │  (tmux)  │ │  (tmux)  │
└──────────┘ └──────────┘ └──────────┘
```

## Key Design Principles

- **Session isolation** — Each agent runs in its own tmux session, preventing context cross-contamination
- **Provider agnostic** — Any CLI-based AI agent can be orchestrated
- **Pattern-based communication** — Three well-defined orchestration patterns (handoff, assign, send message)
- **Local-first** — Runs entirely on your machine with no external dependencies

## Components

- **CAO CLI** — The main command-line interface for managing sessions and workflows
- **MCP Server** — Exposes orchestration capabilities via the Model Context Protocol
- **Web UI** — Browser-based dashboard for monitoring sessions
- **Profile System** — Dynamic discovery and configuration of agent profiles
