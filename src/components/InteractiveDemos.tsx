import React, { useState } from 'react';
import { Play, RotateCcw, Send, Split, Terminal, CheckCircle } from 'lucide-react';

export const IdeDemo: React.FC = () => {
  const [activeFile, setActiveFile] = useState('main.go');
  const [code, setCode] = useState(
`package main

import (
    "fmt"
    "github.com/forgenexa/forge/pkg/workspace"
)

func main() {
    idx := workspace.NewIndexer()
    stats, _ := idx.Index()
    fmt.Printf("Indexed %d files in %v\\n", stats.TotalFiles, stats.Duration)
}`
  );
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    '[forge-daemon] loopback server running on 127.0.0.1:61033',
    '[lsp] 22 language servers registered in PATH',
    'Ready. Type or run your code above.'
  ]);

  const handleRun = () => {
    setTerminalOutput(prev => [
      ...prev,
      `$ go run ${activeFile}`,
      '[runtime] Compilation started...',
      'Indexed 5,210 files in 5.03ms',
      '[exit] Process finished with exit code 0'
    ]);
  };

  return (
    <div className="rounded-xl border border-forge-border bg-forge-panel overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2 bg-[#0D0F12] border-b border-forge-border text-xs text-forge-muted">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          <span className="ml-2 font-mono text-forge-text">Interactive Forge IDE Demo</span>
        </div>
        <button
          onClick={handleRun}
          className="flex items-center space-x-1 px-3 py-1 bg-green-600 hover:bg-green-500 text-white font-medium rounded text-xs transition"
        >
          <Play size={12} />
          <span>Run</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 min-h-[360px]">
        {/* Explorer */}
        <div className="bg-[#0F1115] p-3 border-r border-forge-border font-sans text-xs">
          <div className="text-[10px] uppercase font-bold text-forge-muted tracking-wider mb-2">Explorer</div>
          {['main.go', 'server.go', 'go.mod', 'README.md'].map(file => (
            <div
              key={file}
              onClick={() => setActiveFile(file)}
              className={`px-2 py-1.5 rounded cursor-pointer transition mb-1 ${
                activeFile === file ? 'bg-forge-hover text-forge-accent font-medium' : 'text-forge-text hover:bg-forge-panel'
              }`}
            >
              {file}
            </div>
          ))}
        </div>

        {/* Code Editor */}
        <div className="md:col-span-3 flex flex-col bg-[#121418]">
          <div className="flex items-center bg-[#0D0F12] px-3 py-1 border-b border-forge-border text-xs text-forge-muted">
            <span className="text-forge-text font-mono font-medium">{activeFile}</span>
          </div>
          <textarea
            value={code}
            onChange={e => setCode(e.target.value)}
            className="flex-1 w-full bg-transparent p-4 font-mono text-xs text-forge-text resize-none focus:outline-none"
            rows={12}
            spellCheck={false}
          />
        </div>
      </div>

      {/* Docked Terminal */}
      <div className="bg-[#0A0C0E] border-t border-forge-border p-3 font-mono text-xs">
        <div className="flex items-center justify-between text-forge-muted mb-2 text-[11px]">
          <span className="text-forge-accent font-bold flex items-center space-x-1">
            <Terminal size={12} className="inline mr-1" /> Bottom Tool Window: Terminal (Session 1)
          </span>
          <button onClick={() => setTerminalOutput(['[terminal] cleared'])} className="hover:text-forge-text">Clear</button>
        </div>
        <div className="space-y-1 max-h-32 overflow-y-auto">
          {terminalOutput.map((line, i) => (
            <div key={i} className={line.startsWith('$') ? 'text-green-400 font-bold' : 'text-forge-text'}>{line}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ApiDemo: React.FC = () => {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('https://api.forgenexa.dev/v1/workspaces');
  const [response, setResponse] = useState<any>({
    status: 200,
    timeMs: 14,
    sizeBytes: 840,
    body: {
      success: true,
      data: [
        { id: "ws-1", name: "Production Gateway", status: "online", latency: "1.2ms" },
        { id: "ws-2", name: "Telemetry Engine", status: "online", latency: "0.8ms" }
      ]
    }
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setResponse({
        status: 200,
        timeMs: Math.floor(Math.random() * 20) + 5,
        sizeBytes: 840,
        body: {
          success: true,
          method,
          endpoint: url,
          timestamp: new Date().toISOString(),
          data: [
            { id: "ws-1", name: "Production Gateway", status: "online", latency: "1.2ms" },
            { id: "ws-2", name: "Telemetry Engine", status: "online", latency: "0.8ms" }
          ]
        }
      });
    }, 300);
  };

  return (
    <div className="rounded-xl border border-forge-border bg-forge-panel overflow-hidden shadow-2xl">
      <div className="p-4 border-b border-forge-border bg-[#0D0F12] flex flex-col md:flex-row items-center gap-3">
        <select
          value={method}
          onChange={e => setMethod(e.target.value)}
          className="bg-forge-hover border border-forge-border rounded px-3 py-2 text-xs font-mono font-bold text-forge-accent"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          className="flex-1 bg-forge-hover border border-forge-border rounded px-3 py-2 text-xs font-mono text-forge-text focus:outline-none focus:border-forge-accent"
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="flex items-center space-x-1 px-4 py-2 bg-forge-accent hover:bg-blue-600 text-white font-medium rounded text-xs transition"
        >
          <Send size={12} />
          <span>{isLoading ? 'Sending...' : 'Send'}</span>
        </button>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Request Config */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-forge-muted uppercase tracking-wider">Request Headers</div>
          <div className="bg-[#0F1115] border border-forge-border p-3 rounded font-mono text-xs space-y-1">
            <div><span className="text-forge-muted">Accept:</span> application/json</div>
            <div><span className="text-forge-muted">Authorization:</span> Bearer eyJhbGci... <span className="text-green-400 text-[10px]">(OS Keychain)</span></div>
          </div>
        </div>

        {/* Response View */}
        <div>
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-bold text-green-400 flex items-center space-x-1">
              <CheckCircle size={12} className="inline mr-1" /> {response.status} OK
            </span>
            <span className="text-forge-muted font-mono">{response.timeMs}ms · {response.sizeBytes} B</span>
          </div>
          <pre className="bg-[#0A0C0E] border border-forge-border p-3 rounded font-mono text-xs text-forge-text max-h-64 overflow-y-auto">
            {JSON.stringify(response.body, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export const TerminalDemo: React.FC = () => {
  const [commands, setCommands] = useState<{ cmd: string; out: string }[]>([
    { cmd: 'uname -a', out: 'Darwin Forge-Kernel 27.0.1 ARM64' },
    { cmd: 'forge-daemon --status', out: 'Daemon Active: 127.0.0.1:61033 | 0 goroutine leaks' }
  ]);
  const [input, setInput] = useState('');

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const trimmed = input.trim();
    let out = `Executed: ${trimmed}`;
    if (trimmed === 'help') {
      out = 'Available simulated commands: help, status, bench, clear, git';
    } else if (trimmed === 'status') {
      out = 'Forge Terminal: 2 split panes active, PTY worker healthy';
    } else if (trimmed === 'bench') {
      out = 'Rendering throughput: 120 FPS on Apple Silicon Metal WebGL';
    } else if (trimmed === 'clear') {
      setCommands([]);
      setInput('');
      return;
    }
    setCommands(prev => [...prev, { cmd: trimmed, out }]);
    setInput('');
  };

  return (
    <div className="rounded-xl border border-forge-border bg-[#0A0C0E] overflow-hidden shadow-2xl p-4 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-forge-border pb-3 mb-3 text-forge-muted">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
          <span className="text-forge-text ml-2">zsh: local ~/forgenexa (demo session)</span>
        </div>
        <div className="flex items-center space-x-2 text-[10px]">
          <span className="px-2 py-0.5 rounded bg-forge-hover border border-forge-border">Split Pane (Cmd+D)</span>
        </div>
      </div>

      <div className="space-y-3 min-h-[220px]">
        {commands.map((c, i) => (
          <div key={i} className="space-y-1">
            <div className="text-green-400 font-bold">➜ forgenexa git:(main) {c.cmd}</div>
            <div className="text-forge-text pl-2 border-l border-forge-border">{c.out}</div>
          </div>
        ))}

        <form onSubmit={handleCommand} className="flex items-center space-x-2 pt-2">
          <span className="text-green-400 font-bold">➜ forgenexa git:(main)</span>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type 'status', 'bench', 'help', or 'clear'..."
            className="flex-1 bg-transparent border-none text-forge-text focus:outline-none"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export const GitDemo: React.FC = () => {
  const [selectedCommit, setSelectedCommit] = useState('cf938eb');

  const commits = [
    { sha: 'cf938eb', msg: 'docs: establish master architecture specification for ForgeNexa', author: 'manish-npx', date: 'Just now' },
    { sha: 'bf415d6', msg: 'docs: update README with Go-first architecture', author: 'manish-npx', date: '30 mins ago' },
    { sha: '9e4cf08', msg: 'feat(backend): implement Go-first backend modules', author: 'manish-npx', date: '2 hours ago' },
    { sha: 'cddd534', msg: 'feat(git): native Go porcelain parser & branch resolver', author: 'manish-npx', date: 'Yesterday' }
  ];

  return (
    <div className="rounded-xl border border-forge-border bg-forge-panel overflow-hidden shadow-2xl">
      <div className="p-3 bg-[#0D0F12] border-b border-forge-border flex items-center justify-between text-xs">
        <span className="font-bold text-forge-text">Interactive Visual Git Graph</span>
        <span className="text-forge-muted font-mono">Branch: main (Clean)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-forge-border min-h-[280px]">
        {/* Graph & Commit List */}
        <div className="p-3 space-y-2 bg-[#0F1115]">
          <div className="text-[10px] font-bold text-forge-muted uppercase tracking-wider mb-2">Commit Topology</div>
          {commits.map(c => (
            <div
              key={c.sha}
              onClick={() => setSelectedCommit(c.sha)}
              className={`p-2 rounded cursor-pointer transition text-xs flex items-center justify-between ${
                selectedCommit === c.sha ? 'bg-forge-hover border border-forge-accent text-forge-text' : 'hover:bg-forge-panel text-forge-muted'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-forge-accent inline-block" />
                <span className="font-medium truncate max-w-[200px] text-forge-text">{c.msg}</span>
              </div>
              <span className="font-mono text-[10px] text-forge-accent">{c.sha}</span>
            </div>
          ))}
        </div>

        {/* Commit Details & Diff */}
        <div className="p-4 bg-[#121418] font-mono text-xs space-y-3">
          <div className="text-forge-muted text-[11px] pb-2 border-b border-forge-border">
            Commit: <span className="text-forge-accent font-bold">{selectedCommit}</span> · Author: manish-npx
          </div>
          <div className="text-green-400">+ 138 lines added, 0 deletions</div>
          <div className="p-3 rounded bg-[#0A0C0E] border border-forge-border space-y-1">
            <div className="text-forge-muted">diff --git a/docs/ARCHITECTURE.md b/docs/ARCHITECTURE.md</div>
            <div className="text-green-400">+ # ForgeNexa — Master Architecture Specification</div>
            <div className="text-green-400">+ 1. Executive Vision & Ecosystem Strategy</div>
            <div className="text-green-400">+ 2. Product Portfolio Specifications</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HubDemo: React.FC = () => {
  return (
    <div className="rounded-xl border border-forge-border bg-[#0F1115] overflow-hidden shadow-2xl p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-forge-text">Forge Hub Launcher</h3>
            <p className="text-xs text-forge-muted">Your centralized launchpad for all ForgeNexa engineering tools.</p>
          </div>
          <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] font-bold">
            All Systems Healthy
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-forge-panel border border-forge-border hover:border-forge-accent transition space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-forge-text text-sm">Forge IDE</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-mono">v0.2.1</span>
            </div>
            <p className="text-xs text-forge-muted">Open fast code editor with 22-language LSP.</p>
            <button className="w-full mt-2 py-1.5 rounded bg-forge-accent hover:bg-blue-600 text-white text-xs font-semibold transition">
              Launch Workspace
            </button>
          </div>

          <div className="p-4 rounded-lg bg-forge-panel border border-forge-border hover:border-forge-accent transition space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-forge-text text-sm">Forge API</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400 font-mono">In Dev</span>
            </div>
            <p className="text-xs text-forge-muted">REST, GraphQL, and WebSocket API client.</p>
            <button className="w-full mt-2 py-1.5 rounded bg-forge-hover hover:bg-forge-border text-forge-text text-xs font-semibold transition">
              View Preview
            </button>
          </div>

          <div className="p-4 rounded-lg bg-forge-panel border border-forge-border hover:border-forge-accent transition space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-forge-text text-sm">Forge Terminal</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400 font-mono">In Dev</span>
            </div>
            <p className="text-xs text-forge-muted">Modern multi-pane shell with PTY supervisor.</p>
            <button className="w-full mt-2 py-1.5 rounded bg-forge-hover hover:bg-forge-border text-forge-text text-xs font-semibold transition">
              View Preview
            </button>
          </div>

          <div className="p-4 rounded-lg bg-forge-panel border border-forge-border hover:border-forge-accent transition space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-forge-text text-sm">Forge Git</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-yellow-500/10 text-yellow-400 font-mono">In Dev</span>
            </div>
            <p className="text-xs text-forge-muted">Interactive Git commit graph & conflict solver.</p>
            <button className="w-full mt-2 py-1.5 rounded bg-forge-hover hover:bg-forge-border text-forge-text text-xs font-semibold transition">
              View Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
