---
sidebar_position: 1
---

# CLI Commands

Complete reference for all CAO CLI commands.

## Global Options

```bash
cao [command] --help    # Show help for a command
cao --version           # Show version
```

## Session Management

| Command | Description |
|---------|-------------|
| `cao session start` | Start a new agent session |
| `cao session stop` | Stop an agent session |
| `cao session list` | List all active sessions |
| `cao session logs` | View session output |
| `cao status` | Show status of all sessions |

## Orchestration

| Command | Description |
|---------|-------------|
| `cao handoff` | Synchronous task delegation |
| `cao assign` | Asynchronous task delegation |
| `cao send` | Send message to an agent |

## Flows

| Command | Description |
|---------|-------------|
| `cao flow list` | List scheduled flows |
| `cao flow run` | Run a flow manually |
| `cao flow stop` | Stop a running flow |

## Profiles

| Command | Description |
|---------|-------------|
| `cao profile find` | Discover available profiles |
| `cao profile list` | List configured profiles |

## Server

| Command | Description |
|---------|-------------|
| `cao server` | Start the web UI server |
| `cao-mcp-server` | Start the MCP server |
