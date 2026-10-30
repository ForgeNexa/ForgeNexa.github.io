export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'Available' | 'In Development' | 'Planned';
  version?: string;
  repo: string;
  docsUrl: string;
  features: string[];
  techStack: string[];
  downloads?: { platform: string; label: string; url: string; ext: string }[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'ide',
    name: 'Forge IDE',
    tagline: 'Fast, Go-Powered Developer Workspace',
    description: 'An open-source, local-first code editor and IDE combining Monaco Editor ergonomics, an authentic 2026 Dark Theme, an IntelliJ-style bottom tool window, and a concurrent Go daemon offloading Git, LSP, and background tasks.',
    status: 'Available',
    version: '0.2.1',
    repo: 'https://github.com/ForgeNexa/forge-ide',
    docsUrl: '#/docs/ide',
    features: [
      'Monaco Editor with multi-tab & split editor groups (◫ Split)',
      'Concurrent Go daemon (forge-daemon) executing sub-millisecond Git and indexing',
      '22-language LSP lexical symbol extraction & toolchain diagnostics (go vet, tsc)',
      'IntelliJ-style docked bottom tool window with multi-session terminal tabs',
      'Local-first private AI autocomplete using Ollama (Qwen2.5-Coder FIM)',
      'Image viewer (.png, .svg), binary guard, and live rendered Markdown preview',
      'Non-destructive autosave engine with unsaved changes buffer protection'
    ],
    techStack: ['Electron 45', 'TypeScript 7', 'React 19', 'Monaco Editor', 'Go 1.26/1.27', 'xterm.js'],
    downloads: [
      { platform: 'macOS', label: 'macOS Apple Silicon (ARM64)', url: 'https://github.com/ForgeNexa/forge-ide/releases/tag/v0.2.0', ext: '.dmg / .zip' },
      { platform: 'Windows', label: 'Windows x64 Installer', url: 'https://github.com/ForgeNexa/forge-ide/releases/tag/v0.2.0', ext: '.exe' },
      { platform: 'Linux', label: 'Linux x64 AppImage & Tarball', url: 'https://github.com/ForgeNexa/forge-ide/releases/tag/v0.2.0', ext: '.AppImage / .tar.gz' }
    ]
  },
  {
    id: 'api',
    name: 'Forge API',
    tagline: 'Modern, High-Speed API Development & Testing Client',
    description: 'A free, lightweight alternative to Postman built for developers. Design, debug, and test REST, GraphQL, WebSocket, SSE, and gRPC endpoints with local collections and OS-level secure credential isolation.',
    status: 'In Development',
    repo: 'https://github.com/ForgeNexa/forge-ide-api',
    docsUrl: '#/docs/api',
    features: [
      'Multi-protocol request engine: HTTP/1.1, HTTP/2, GraphQL, WebSocket, SSE & gRPC',
      'Context-aware query/path params, headers, and form-data/raw/multipart body editors',
      'Local collections with nested folders, environments (Dev/Stage/Prod), and variable syntax',
      'Pre-request scripts and post-response assertion test suites with instant execution reports',
      'Zero plaintext token storage; OS Keychain & Secret Service API integration',
      'One-click cURL and OpenAPI 3.0 import/export'
    ],
    techStack: ['React 19', 'TypeScript 7', 'Vite', 'Tailwind CSS', 'Go API Engine']
  },
  {
    id: 'terminal',
    name: 'Forge Terminal',
    tagline: 'Modern Multi-Pane Terminal for Productive Engineering',
    description: 'A dedicated, high-performance desktop terminal application powered by real operating system PTY supervisors, rich split-panes, session restoration, and deep shell integrations.',
    status: 'In Development',
    repo: 'https://github.com/ForgeNexa/forge-ide-terminal',
    docsUrl: '#/docs/terminal',
    features: [
      'Real POSIX / Windows PTY execution (Zsh, Bash, sh, PowerShell, cmd.exe)',
      'Horizontal and vertical split panes with keyboard focus navigation',
      'Multi-session tab bar with custom color accents and process status indicators',
      'Searchable 100,000-line scrollback buffer and clickable hyperlinks',
      'Built-in SSH profile manager with secure key storage',
      'Configurable typography with programming ligatures (JetBrains Mono, Fira Code)'
    ],
    techStack: ['xterm.js v6', 'node-pty', 'Go Supervisor', 'TypeScript 7', 'Electron']
  },
  {
    id: 'git',
    name: 'Forge Git',
    tagline: 'Visual Git Workspace & Interactive Graph Visualizer',
    description: 'An interactive, visual Git client alternative to GitKraken. Inspect repository topology, stage hunks, review side-by-side diffs, and resolve three-way merge conflicts with clear safety safeguards.',
    status: 'In Development',
    repo: 'https://github.com/ForgeNexa/forge-ide-git',
    docsUrl: '#/docs/git',
    features: [
      'Color-coded topological commit graph and interactive branch visualizer',
      'Hunk-level and line-level staging/unstaging with instant diff previews',
      'Three-way visual merge conflict editor (Ours, Base, Theirs, Result)',
      'Commit creation, amend, cherry-pick, revert, and stash management',
      'Strict safety checks preventing accidental force-pushes or unrecoverable resets',
      'Direct integration with local Git binary; zero proprietary repository locks'
    ],
    techStack: ['React 19', 'Go pkg/git', 'Canvas Graph Engine', 'Monaco Diff Editor']
  },
  {
    id: 'hub',
    name: 'Forge Hub',
    tagline: 'Unified Developer Workspace & Ecosystem Launcher',
    description: 'A central launcher for all ForgeNexa desktop applications, unifying project discovery, shared theme presets, keybinding synchronizations, and quick workspace navigation.',
    status: 'Planned',
    repo: 'https://github.com/ForgeNexa/forge-ide-hub',
    docsUrl: '#/docs/hub',
    features: [
      'Central launcher detecting installed Forge IDE, API, Terminal, and Git applications',
      'Recent projects browser with quick-open across any ForgeNexa tool',
      'Unified preferences for color themes, UI density, and font families',
      'Offline-first architecture; every product remains 100% independently usable'
    ],
    techStack: ['React 19', 'TypeScript 7', 'Local IPC', 'Tailwind CSS']
  }
];
