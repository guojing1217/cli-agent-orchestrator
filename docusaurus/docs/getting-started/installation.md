---
sidebar_position: 1
---

# Installation

## Prerequisites

- Python 3.10+
- tmux 3.0+ ([installation guide](https://github.com/awslabs/cli-agent-orchestrator/blob/main/tmux-install.sh))
- [uv](https://docs.astral.sh/uv/) (recommended) or pip
- At least one supported AI CLI agent installed (e.g., Claude Code, Kiro CLI, Amazon Q Developer)

## Install via uv (recommended)

```bash
uv tool install cao
```

## Install via pip

```bash
pip install cao
```

## Install from source

```bash
git clone https://github.com/awslabs/cli-agent-orchestrator.git
cd cli-agent-orchestrator
uv tool install .
```

## Verify Installation

```bash
cao --version
cao --help
```

## Install tmux (if needed)

CAO requires tmux for session management. If tmux is not installed:

```bash
# macOS
brew install tmux

# Ubuntu/Debian
sudo apt-get install tmux

# Amazon Linux / RHEL
sudo yum install tmux
```

Or use the provided install script:

```bash
./tmux-install.sh
```
