---
sidebar_position: 2
---

# MCP Server

CAO includes a built-in MCP (Model Context Protocol) server that exposes orchestration capabilities to any MCP-compatible client.

## Starting the MCP Server

```bash
cao-mcp-server
```

## Capabilities

The MCP server exposes tools for:

- Starting and stopping agent sessions
- Sending tasks via handoff/assign patterns
- Querying session status
- Inter-agent messaging via inbox

## Integration

Any MCP-compatible client (Claude Code, Kiro CLI, Amazon Q Developer) can connect to the CAO MCP server and orchestrate agents programmatically.
