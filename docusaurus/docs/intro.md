---
sidebar_position: 1
---

# CLI Agent Orchestrator

CLI Agent Orchestrator (CAO) is a lightweight orchestration system for managing multiple AI agent sessions in tmux terminals. It enables hierarchical multi-agent collaboration through supervisor and worker agent patterns.

## Why CAO?

- **Session isolation** — Each agent runs in its own tmux session with full context separation
- **Multiple orchestration patterns** — Handoff (synchronous), Assign (asynchronous), Send Message (direct communication)
- **Multi-provider support** — Works with Claude Code, Kiro CLI, Amazon Q Developer, Gemini CLI, Codex CLI, Kimi CLI, and GitHub Copilot CLI
- **Scheduled flows** — Cron-like task scheduling for automated workflows
- **MCP Server** — Expose orchestration capabilities to any MCP-compatible client
- **Web UI** — Monitor and manage agent sessions from a browser dashboard
- **Profile system** — Discover and configure agent profiles dynamically

## Quick Links

- [Installation](/docs/getting-started/installation)
- [Quick Start](/docs/getting-started/quick-start)
- [Orchestration Patterns](/docs/patterns/handoff)
- [CLI Reference](/docs/reference/cli-commands)
- [GitHub Repository](https://github.com/awslabs/cli-agent-orchestrator)
