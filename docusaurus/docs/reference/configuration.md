---
sidebar_position: 2
---

# Configuration

CAO can be configured via a YAML configuration file or environment variables.

## Configuration File

The default configuration file is located at `~/.config/cao/config.yaml`.

```yaml
default_provider: claude-code
web_ui_port: 8080
mcp_server_port: 3000
session_timeout: 3600
```

## Provider Configuration

```yaml
providers:
  claude-code:
    command: claude
    args: ["--dangerously-skip-permissions"]
  kiro-cli:
    command: kiro-cli
    args: ["chat"]
  q-developer:
    command: q
    args: ["chat"]
```

## Session Defaults

```yaml
sessions:
  default_role: worker
  max_concurrent: 10
  working_directory: "."
```
