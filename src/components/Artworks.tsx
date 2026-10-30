import React from 'react';

export const IdeArtwork: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 800 480" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Editor Window Container */}
    <rect width="800" height="480" rx="12" fill="#121418" stroke="#242933" strokeWidth="2"/>
    
    {/* Titlebar */}
    <path d="M0 12C0 5.37258 5.37258 0 12 0H788C794.627 0 800 5.37258 800 12V36H0V12Z" fill="#0D0F12"/>
    <circle cx="20" cy="18" r="5" fill="#ED6A5E"/>
    <circle cx="36" cy="18" r="5" fill="#F4BF4F"/>
    <circle cx="52" cy="18" r="5" fill="#61C554"/>
    <text x="400" y="22" fill="#8B949E" fontSize="11" fontFamily="sans-serif" textAnchor="middle">forge — main.go — ForgeNexa</text>

    {/* Activity Bar */}
    <rect x="0" y="36" width="48" height="444" fill="#0A0C0E" stroke="#1E222B" strokeWidth="1"/>
    <circle cx="24" cy="60" r="10" fill="#388BFD" fillOpacity="0.2"/>
    <rect x="18" y="54" width="12" height="12" rx="2" fill="#388BFD"/>
    <circle cx="24" cy="96" r="6" stroke="#8B949E" strokeWidth="1.5"/>
    <path d="M24 126L21 138H27L24 126Z" fill="#8B949E"/>
    <circle cx="24" cy="168" r="5" stroke="#8B949E" strokeWidth="1.5"/>
    <circle cx="24" cy="444" r="7" stroke="#8B949E" strokeWidth="1.5"/>

    {/* Sidebar File Explorer */}
    <rect x="48" y="36" width="180" height="444" fill="#0F1115" stroke="#1E222B" strokeWidth="1"/>
    <text x="64" y="60" fill="#8B949E" fontSize="10" fontFamily="sans-serif" fontWeight="bold">EXPLORER: FORGE</text>
    <path d="M64 78L70 84L76 78" stroke="#8B949E" strokeWidth="1.5"/>
    <text x="82" y="84" fill="#C9D1D9" fontSize="11" fontFamily="sans-serif">services/forge-daemon</text>
    <text x="96" y="106" fill="#79C0FF" fontSize="11" fontFamily="sans-serif">pkg/git</text>
    <text x="96" y="126" fill="#79C0FF" fontSize="11" fontFamily="sans-serif">pkg/lsp</text>
    <text x="96" y="146" fill="#79C0FF" fontSize="11" fontFamily="sans-serif">pkg/tasks</text>
    <text x="96" y="166" fill="#79C0FF" fontSize="11" fontFamily="sans-serif">pkg/api</text>
    <text x="96" y="186" fill="#7EE787" fontSize="11" fontFamily="sans-serif">main.go</text>
    <text x="96" y="206" fill="#8B949E" fontSize="11" fontFamily="sans-serif">go.mod</text>

    {/* Editor Tab Strip */}
    <rect x="228" y="36" width="572" height="34" fill="#0D0F12"/>
    <rect x="228" y="36" width="140" height="34" fill="#161920" stroke="#242933" strokeWidth="1"/>
    <text x="246" y="58" fill="#7EE787" fontSize="11" fontFamily="sans-serif">main.go</text>
    <rect x="368" y="36" width="140" height="34" fill="#0D0F12" stroke="#1E222B" strokeWidth="1"/>
    <text x="386" y="58" fill="#8B949E" fontSize="11" fontFamily="sans-serif">server.go</text>

    {/* Monaco Code Surface */}
    <rect x="228" y="70" width="572" height="270" fill="#121418"/>
    {/* Line numbers */}
    <text x="248" y="100" fill="#484F58" fontSize="11" fontFamily="monospace">1</text>
    <text x="248" y="120" fill="#484F58" fontSize="11" fontFamily="monospace">2</text>
    <text x="248" y="140" fill="#484F58" fontSize="11" fontFamily="monospace">3</text>
    <text x="248" y="160" fill="#484F58" fontSize="11" fontFamily="monospace">4</text>
    <text x="248" y="180" fill="#484F58" fontSize="11" fontFamily="monospace">5</text>
    <text x="248" y="200" fill="#484F58" fontSize="11" fontFamily="monospace">6</text>
    <text x="248" y="220" fill="#484F58" fontSize="11" fontFamily="monospace">7</text>
    <text x="248" y="240" fill="#484F58" fontSize="11" fontFamily="monospace">8</text>

    {/* Syntax Code */}
    <text x="276" y="100" fill="#FF7B72" fontSize="11" fontFamily="monospace">package <tspan fill="#C9D1D9">main</tspan></text>
    <text x="276" y="120" fill="#FF7B72" fontSize="11" fontFamily="monospace">import <tspan fill="#A5D6FF">"github.com/forgenexa/my-forge/pkg/server"</tspan></text>
    <text x="276" y="160" fill="#FF7B72" fontSize="11" fontFamily="monospace">func <tspan fill="#D2A8FF">main</tspan>() &#123;</text>
    <text x="296" y="180" fill="#C9D1D9" fontSize="11" fontFamily="monospace">srv := server.<tspan fill="#79C0FF">NewServer</tspan>()</text>
    <text x="296" y="200" fill="#C9D1D9" fontSize="11" fontFamily="monospace">srv.<tspan fill="#79C0FF">Serve</tspan>(os.Stdin, os.Stdout)</text>
    <text x="276" y="220" fill="#C9D1D9" fontSize="11" fontFamily="monospace">&#125;</text>

    {/* Inline Ghost AI Suggestion */}
    <text x="296" y="240" fill="#484F58" fontSize="11" fontFamily="monospace">// Tab to complete: srv.ListenLoopbackHTTP(61033)</text>
    <rect x="580" y="228" width="16" height="14" rx="2" fill="#388BFD" fillOpacity="0.2"/>
    <text x="584" y="239" fill="#388BFD" fontSize="9" fontFamily="sans-serif">Tab</text>

    {/* IntelliJ Bottom Tool Window */}
    <rect x="228" y="340" width="572" height="140" fill="#0D0F12" stroke="#242933" strokeWidth="1"/>
    <rect x="228" y="340" width="572" height="26" fill="#161920" stroke="#1E222B" strokeWidth="1"/>
    <text x="244" y="357" fill="#388BFD" fontSize="10" fontFamily="sans-serif" fontWeight="bold">TERMINAL: Session 1</text>
    <text x="370" y="357" fill="#8B949E" fontSize="10" fontFamily="sans-serif">PROBLEMS (0)</text>
    <text x="460" y="357" fill="#8B949E" fontSize="10" fontFamily="sans-serif">OUTPUT</text>
    <text x="530" y="357" fill="#8B949E" fontSize="10" fontFamily="sans-serif">DAEMON HEALTH</text>
    
    {/* Terminal Content */}
    <text x="244" y="385" fill="#7EE787" fontSize="11" fontFamily="monospace">$ forge-daemon status</text>
    <text x="244" y="405" fill="#C9D1D9" fontSize="11" fontFamily="monospace">[daemon] 127.0.0.1:61033 loopback HTTP active | 0 data races (-race)</text>
    <text x="244" y="425" fill="#79C0FF" fontSize="11" fontFamily="monospace">[lsp] 22 languages registered | 5,000 files indexed in 5.03ms</text>
    <text x="244" y="445" fill="#7EE787" fontSize="11" fontFamily="monospace">$ <tspan fill="#388BFD">▋</tspan></text>
  </svg>
);

export const ApiArtwork: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 800 480" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="800" height="480" rx="12" fill="#121418" stroke="#242933" strokeWidth="2"/>
    {/* Titlebar */}
    <path d="M0 12C0 5.37258 5.37258 0 12 0H788C794.627 0 800 5.37258 800 12V36H0V12Z" fill="#0D0F12"/>
    <circle cx="20" cy="18" r="5" fill="#ED6A5E"/>
    <circle cx="36" cy="18" r="5" fill="#F4BF4F"/>
    <circle cx="52" cy="18" r="5" fill="#61C554"/>
    <text x="400" y="22" fill="#8B949E" fontSize="11" fontFamily="sans-serif" textAnchor="middle">Forge API Client — Production Workspace</text>

    {/* Sidebar Collections */}
    <rect x="0" y="36" width="220" height="444" fill="#0F1115" stroke="#1E222B" strokeWidth="1"/>
    <text x="20" y="62" fill="#8B949E" fontSize="10" fontFamily="sans-serif" fontWeight="bold">COLLECTIONS</text>
    <rect x="14" y="78" width="192" height="28" rx="4" fill="#1E232E"/>
    <text x="28" y="96" fill="#388BFD" fontSize="10" fontFamily="monospace" fontWeight="bold">GET</text>
    <text x="60" y="96" fill="#C9D1D9" fontSize="11" fontFamily="sans-serif">/api/v1/workspaces</text>
    
    <text x="28" y="126" fill="#7EE787" fontSize="10" fontFamily="monospace" fontWeight="bold">POST</text>
    <text x="64" y="126" fill="#8B949E" fontSize="11" fontFamily="sans-serif">/api/v1/deploy</text>

    <text x="28" y="156" fill="#F4BF4F" fontSize="10" fontFamily="monospace" fontWeight="bold">PUT</text>
    <text x="60" y="156" fill="#8B949E" fontSize="11" fontFamily="sans-serif">/api/v1/settings</text>

    {/* Request URL Bar */}
    <rect x="236" y="50" width="548" height="40" rx="6" fill="#161920" stroke="#242933" strokeWidth="1"/>
    <rect x="242" y="55" width="60" height="30" rx="4" fill="#388BFD"/>
    <text x="258" y="74" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="bold">GET</text>
    <text x="314" y="75" fill="#C9D1D9" fontSize="12" fontFamily="monospace">https://api.forgenexa.dev/v1/workspaces?limit=50</text>
    <rect x="712" y="55" width="64" height="30" rx="4" fill="#238636"/>
    <text x="730" y="74" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="bold">SEND</text>

    {/* Request / Response Split Grid */}
    {/* Request Details */}
    <rect x="236" y="104" width="548" height="150" fill="#121418" stroke="#1E222B" strokeWidth="1"/>
    <text x="252" y="126" fill="#388BFD" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Params</text>
    <text x="312" y="126" fill="#8B949E" fontSize="11" fontFamily="sans-serif">Headers (4)</text>
    <text x="392" y="126" fill="#8B949E" fontSize="11" fontFamily="sans-serif">Auth [Bearer]</text>
    <text x="476" y="126" fill="#8B949E" fontSize="11" fontFamily="sans-serif">Body [JSON]</text>
    <text x="560" y="126" fill="#8B949E" fontSize="11" fontFamily="sans-serif">Tests (3)</text>
    
    <text x="252" y="156" fill="#8B949E" fontSize="11" fontFamily="monospace">limit: <tspan fill="#C9D1D9">50</tspan></text>
    <text x="252" y="176" fill="#8B949E" fontSize="11" fontFamily="monospace">Authorization: <tspan fill="#A5D6FF">Bearer eyJhbGciOi... [Encrypted in Keychain]</tspan></text>

    {/* Response View */}
    <rect x="236" y="266" width="548" height="200" fill="#0D0F12" stroke="#242933" strokeWidth="1"/>
    <rect x="236" y="266" width="548" height="30" fill="#161920"/>
    <text x="252" y="286" fill="#7EE787" fontSize="11" fontFamily="monospace" fontWeight="bold">200 OK</text>
    <text x="320" y="286" fill="#8B949E" fontSize="11" fontFamily="monospace">Time: 18ms</text>
    <text x="410" y="286" fill="#8B949E" fontSize="11" fontFamily="monospace">Size: 1.24 KB</text>
    <text x="500" y="286" fill="#7EE787" fontSize="11" fontFamily="sans-serif">✔ PASS 3/3 Tests</text>

    {/* JSON Response Body */}
    <text x="252" y="320" fill="#C9D1D9" fontSize="11" fontFamily="monospace">&#123;</text>
    <text x="268" y="340" fill="#79C0FF" fontSize="11" fontFamily="monospace">"status": <tspan fill="#A5D6FF">"success"</tspan>,</text>
    <text x="268" y="360" fill="#79C0FF" fontSize="11" fontFamily="monospace">"count": <tspan fill="#79C0FF">2</tspan>,</text>
    <text x="268" y="380" fill="#79C0FF" fontSize="11" fontFamily="monospace">"items": <tspan fill="#C9D1D9">[</tspan></text>
    <text x="288" y="400" fill="#C9D1D9" fontSize="11" fontFamily="monospace">&#123; <tspan fill="#79C0FF">"id"</tspan>: <tspan fill="#A5D6FF">"workspace-alpha"</tspan>, <tspan fill="#79C0FF">"status"</tspan>: <tspan fill="#7EE787">"active"</tspan> &#125;</text>
    <text x="268" y="420" fill="#C9D1D9" fontSize="11" fontFamily="monospace">]</text>
    <text x="252" y="440" fill="#C9D1D9" fontSize="11" fontFamily="monospace">&#125;</text>
  </svg>
);

export const TerminalArtwork: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 800 480" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="800" height="480" rx="12" fill="#0A0C0E" stroke="#242933" strokeWidth="2"/>
    <path d="M0 12C0 5.37258 5.37258 0 12 0H788C794.627 0 800 5.37258 800 12V36H0V12Z" fill="#121418"/>
    <circle cx="20" cy="18" r="5" fill="#ED6A5E"/>
    <circle cx="36" cy="18" r="5" fill="#F4BF4F"/>
    <circle cx="52" cy="18" r="5" fill="#61C554"/>
    <text x="400" y="22" fill="#8B949E" fontSize="11" fontFamily="sans-serif" textAnchor="middle">Forge Terminal — Multi-Pane PTY Shell</text>

    {/* Split Pane 1 (Left) */}
    <rect x="12" y="48" width="380" height="420" fill="#0E1014" stroke="#1E222B" strokeWidth="1"/>
    <rect x="12" y="48" width="380" height="24" fill="#161920"/>
    <text x="24" y="64" fill="#388BFD" fontSize="10" fontFamily="sans-serif" fontWeight="bold">zsh: local ~/forge (pid 4182)</text>
    <text x="24" y="96" fill="#7EE787" fontSize="11" fontFamily="monospace">➜ forge git:(main) bun run build</text>
    <text x="24" y="116" fill="#C9D1D9" fontSize="11" fontFamily="monospace">vite v6.4.5 building for production...</text>
    <text x="24" y="136" fill="#7EE787" fontSize="11" fontFamily="monospace">✓ 63 modules transformed.</text>
    <text x="24" y="156" fill="#C9D1D9" fontSize="11" fontFamily="monospace">dist/index.html   6.16 kB</text>
    <text x="24" y="176" fill="#C9D1D9" fontSize="11" fontFamily="monospace">dist/assets/index.js 313.65 kB</text>
    <text x="24" y="206" fill="#7EE787" fontSize="11" fontFamily="monospace">➜ forge git:(main) <tspan fill="#388BFD">▋</tspan></text>

    {/* Split Pane 2 (Right) */}
    <rect x="408" y="48" width="380" height="420" fill="#0E1014" stroke="#1E222B" strokeWidth="1"/>
    <rect x="408" y="48" width="380" height="24" fill="#161920"/>
    <text x="420" y="64" fill="#7EE787" fontSize="10" fontFamily="sans-serif" fontWeight="bold">ssh: prod-cluster-us-east</text>
    <text x="420" y="96" fill="#8B949E" fontSize="11" fontFamily="monospace">Authenticated with ed25519 (Keychain)</text>
    <text x="420" y="116" fill="#7EE787" fontSize="11" fontFamily="monospace">ubuntu@node-01:~$ htop</text>
    <text x="420" y="136" fill="#79C0FF" fontSize="11" fontFamily="monospace">Tasks: 182, 492 thr; 1 running</text>
    <text x="420" y="156" fill="#79C0FF" fontSize="11" fontFamily="monospace">Load average: 0.12 0.08 0.04</text>
    <text x="420" y="176" fill="#7EE787" fontSize="11" fontFamily="monospace">Mem[||||||||||||||    2.1G/16.0G]</text>
    <text x="420" y="196" fill="#7EE787" fontSize="11" fontFamily="monospace">CPU[||                 4.2%]</text>
  </svg>
);

export const GitArtwork: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 800 480" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="800" height="480" rx="12" fill="#121418" stroke="#242933" strokeWidth="2"/>
    <path d="M0 12C0 5.37258 5.37258 0 12 0H788C794.627 0 800 5.37258 800 12V36H0V12Z" fill="#0D0F12"/>
    <circle cx="20" cy="18" r="5" fill="#ED6A5E"/>
    <circle cx="36" cy="18" r="5" fill="#F4BF4F"/>
    <circle cx="52" cy="18" r="5" fill="#61C554"/>
    <text x="400" y="22" fill="#8B949E" fontSize="11" fontFamily="sans-serif" textAnchor="middle">Forge Git — Topological Commit Graph & Conflict Solver</text>

    {/* Graph Canvas */}
    <rect x="16" y="50" width="360" height="414" fill="#0F1115" stroke="#1E222B" strokeWidth="1"/>
    {/* Graph Branch Lines */}
    <line x1="40" y1="80" x2="40" y2="440" stroke="#388BFD" strokeWidth="3"/>
    <line x1="70" y1="140" x2="70" y2="340" stroke="#7EE787" strokeWidth="3"/>
    <path d="M40 140 Q 55 140 70 170" stroke="#7EE787" strokeWidth="3" fill="none"/>
    <path d="M70 340 Q 55 370 40 370" stroke="#7EE787" strokeWidth="3" fill="none"/>

    {/* Commit Nodes */}
    <circle cx="40" cy="90" r="7" fill="#388BFD"/>
    <text x="60" y="94" fill="#C9D1D9" fontSize="11" fontFamily="sans-serif" fontWeight="bold">feat: release v0.2.1</text>
    <text x="270" y="94" fill="#8B949E" fontSize="10" fontFamily="monospace">cf938eb</text>

    <circle cx="70" cy="190" r="6" fill="#7EE787"/>
    <text x="88" y="194" fill="#C9D1D9" fontSize="11" fontFamily="sans-serif">feat(lsp): 22-language AST</text>
    <text x="270" y="194" fill="#8B949E" fontSize="10" fontFamily="monospace">9e4cf08</text>

    <circle cx="70" cy="250" r="6" fill="#7EE787"/>
    <text x="88" y="254" fill="#C9D1D9" fontSize="11" fontFamily="sans-serif">feat(git): native Go git parser</text>
    <text x="270" y="254" fill="#8B949E" fontSize="10" fontFamily="monospace">cddd534</text>

    <circle cx="40" cy="370" r="7" fill="#388BFD"/>
    <text x="60" y="374" fill="#C9D1D9" fontSize="11" fontFamily="sans-serif" fontWeight="bold">merge branch 'feat/backend'</text>

    {/* Diff & Staging Panel */}
    <rect x="390" y="50" width="394" height="414" fill="#14171D" stroke="#1E222B" strokeWidth="1"/>
    <rect x="390" y="50" width="394" height="30" fill="#1B1F27"/>
    <text x="406" y="70" fill="#C9D1D9" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Diff: services/forge-daemon/pkg/git.go</text>
    <text x="406" y="106" fill="#484F58" fontSize="11" fontFamily="monospace">@@ -14,6 +14,8 @@</text>
    <rect x="396" y="116" width="382" height="20" fill="#238636" fillOpacity="0.15"/>
    <text x="406" y="130" fill="#7EE787" fontSize="11" fontFamily="monospace">+ func (m *Manager) GetStatus() (*GitStatus, error) &#123;</text>
    <rect x="396" y="136" width="382" height="20" fill="#238636" fillOpacity="0.15"/>
    <text x="406" y="150" fill="#7EE787" fontSize="11" fontFamily="monospace">+   m.mu.Lock(); defer m.mu.Unlock()</text>
    <text x="406" y="170" fill="#C9D1D9" fontSize="11" fontFamily="monospace">    cmd := exec.Command("git", "status", "--porcelain")</text>
  </svg>
);

export const HubArtwork: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 800 480" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="800" height="480" rx="12" fill="#0F1115" stroke="#242933" strokeWidth="2"/>
    <path d="M0 12C0 5.37258 5.37258 0 12 0H788C794.627 0 800 5.37258 800 12V36H0V12Z" fill="#161920"/>
    <circle cx="20" cy="18" r="5" fill="#ED6A5E"/>
    <circle cx="36" cy="18" r="5" fill="#F4BF4F"/>
    <circle cx="52" cy="18" r="5" fill="#61C554"/>
    <text x="400" y="22" fill="#8B949E" fontSize="11" fontFamily="sans-serif" textAnchor="middle">Forge Hub — Unified Launcher</text>

    {/* Center Grid of Products */}
    <rect x="100" y="80" width="280" height="160" rx="8" fill="#161920" stroke="#388BFD" strokeWidth="2"/>
    <text x="120" y="112" fill="#388BFD" fontSize="16" fontFamily="sans-serif" fontWeight="bold">Forge IDE</text>
    <text x="120" y="134" fill="#C9D1D9" fontSize="11" fontFamily="sans-serif">Code Editor & Language Intelligence</text>
    <text x="120" y="180" fill="#7EE787" fontSize="11" fontFamily="sans-serif">● Installed v0.2.1</text>
    <rect x="120" y="196" width="80" height="26" rx="4" fill="#388BFD"/>
    <text x="140" y="213" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Launch</text>

    <rect x="420" y="80" width="280" height="160" rx="8" fill="#161920" stroke="#242933" strokeWidth="1"/>
    <text x="440" y="112" fill="#7EE787" fontSize="16" fontFamily="sans-serif" fontWeight="bold">Forge API</text>
    <text x="440" y="134" fill="#C9D1D9" fontSize="11" fontFamily="sans-serif">REST, GraphQL, WebSocket Testing</text>
    <text x="440" y="180" fill="#F4BF4F" fontSize="11" fontFamily="sans-serif">● In Development</text>
    <rect x="440" y="196" width="80" height="26" rx="4" fill="#242933"/>
    <text x="456" y="213" fill="#C9D1D9" fontSize="11" fontFamily="sans-serif">Preview</text>

    <rect x="100" y="260" width="280" height="160" rx="8" fill="#161920" stroke="#242933" strokeWidth="1"/>
    <text x="120" y="292" fill="#E3B341" fontSize="16" fontFamily="sans-serif" fontWeight="bold">Forge Terminal</text>
    <text x="120" y="314" fill="#C9D1D9" fontSize="11" fontFamily="sans-serif">Multi-Pane Shell with PTY Supervision</text>
    <text x="120" y="360" fill="#F4BF4F" fontSize="11" fontFamily="sans-serif">● In Development</text>

    <rect x="420" y="260" width="280" height="160" rx="8" fill="#161920" stroke="#242933" strokeWidth="1"/>
    <text x="440" y="292" fill="#D2A8FF" fontSize="16" fontFamily="sans-serif" fontWeight="bold">Forge Git</text>
    <text x="440" y="314" fill="#C9D1D9" fontSize="11" fontFamily="sans-serif">Visual Commit Graph & Merge Solver</text>
    <text x="440" y="360" fill="#F4BF4F" fontSize="11" fontFamily="sans-serif">● In Development</text>
  </svg>
);
