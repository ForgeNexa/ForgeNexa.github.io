# ForgeNexa — Official Public Website

[![Deploy ForgeNexa Website to GitHub Pages](https://github.com/ForgeNexa/ForgeNexa.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/ForgeNexa/ForgeNexa.github.io/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live%20Website-forgenexa.github.io-success?style=flat-square)](https://forgenexa.github.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

Official public website and ecosystem directory for **ForgeNexa** (`https://forgenexa.github.io/`).

---

## 🌟 Ecosystem Directory
- **Forge IDE:** Fast, Go-powered code editor with 22-language LSP and local AI autocomplete.
- **Forge API:** Modern API client supporting REST, GraphQL, WebSocket, SSE, and gRPC with Keychain security.
- **Forge Terminal:** Modern multi-pane terminal shell with operating system PTY supervisor.
- **Forge Git:** Visual Git client with interactive commit graph, staging, and 3-way merge conflict editor.
- **Forge Hub:** Unified launcher and workspace manager for the ForgeNexa developer tools suite.

---

## 🛠 Local Development
```bash
# 1. Install dependencies using Bun
bun install

# 2. Run unit tests
bun test

# 3. Start development server with HMR
bun run dev

# 4. Compile production assets
bun run build
```

---

## 🚀 Deployment
Automatically deployed to **GitHub Pages** on every push to `main` via `.github/workflows/deploy.yml`.
