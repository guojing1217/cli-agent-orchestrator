---
sidebar_position: 1
---

# Multi-Provider Support

CAO supports orchestrating multiple AI CLI agents simultaneously, regardless of provider.

## Supported Providers

| Provider | CLI Command | Status |
|----------|-------------|--------|
| Claude Code | `claude` | Supported |
| Kiro CLI | `kiro-cli` | Supported |
| Amazon Q Developer | `q` | Supported |
| Gemini CLI | `gemini` | Supported |
| Codex CLI | `codex` | Supported |
| Kimi CLI | `kimi` | Supported |
| GitHub Copilot CLI | `gh copilot` | Supported |

## Configuration

Set the default provider in your CAO configuration:

```yaml
default_provider: claude-code
```

Or specify per-session:

```bash
cao session start --provider kiro-cli --name research-agent
cao session start --provider claude-code --name coding-agent
```
