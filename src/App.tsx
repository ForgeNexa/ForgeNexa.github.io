import React, { useState, useEffect } from 'react';
import { 
  Code, Globe, Terminal, GitBranch, Layers, Shield, Cpu, 
  ArrowRight, Download, ExternalLink, Check, Sparkles, BookOpen 
} from 'lucide-react';
import { PRODUCTS } from './data/products';
import { Navbar, Footer, ProductHero } from './components/Layout';
import { IdeArtwork, ApiArtwork, TerminalArtwork, GitArtwork, HubArtwork } from './components/Artworks';
import { IdeDemo, ApiDemo, TerminalDemo, GitDemo, HubDemo } from './components/InteractiveDemos';

export const App: React.FC = () => {
  const [route, setRoute] = useState<string>('home');
  const [isDark, setIsDark] = useState<boolean>(true);
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash) setRoute(hash);
      else setRoute('home');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigate = (newRoute: string) => {
    window.location.hash = `#/${newRoute}`;
    setRoute(newRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ideProduct = PRODUCTS.find(p => p.id === 'ide')!;
  const apiProduct = PRODUCTS.find(p => p.id === 'api')!;
  const terminalProduct = PRODUCTS.find(p => p.id === 'terminal')!;
  const gitProduct = PRODUCTS.find(p => p.id === 'git')!;
  const hubProduct = PRODUCTS.find(p => p.id === 'hub')!;

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-[#0F1115] text-[#C9D1D9]' : 'bg-[#F6F8FA] text-[#24292F]'}`}>
      <Navbar currentRoute={route} navigate={navigate} isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-10">
        {/* Route: Home */}
        {route === 'home' && (
          <div className="space-y-20">
            {/* Hero Section */}
            <div className="text-center space-y-6 pt-10 pb-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-forge-accent/10 border border-forge-accent/20 text-forge-accent text-xs font-semibold">
                <Sparkles size={14} />
                <span>Next-Generation Open Developer Tools</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Software craftsmanship, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">
                  accelerated by Go & Web.
                </span>
              </h1>
              <p className="text-base md:text-lg text-forge-muted leading-relaxed">
                ForgeNexa builds an open-source, local-first ecosystem of independent desktop developer tools. From the Monaco-powered Forge IDE to our API client, terminal, and visual Git graph.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => navigate('ide')}
                  className="px-6 py-3 rounded-lg bg-forge-accent hover:bg-blue-600 text-white font-semibold text-sm transition shadow-xl flex items-center space-x-2"
                >
                  <span>Explore Forge IDE</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => navigate('products')}
                  className="px-6 py-3 rounded-lg bg-forge-panel hover:bg-forge-hover border border-forge-border text-white font-semibold text-sm transition"
                >
                  View Product Directory
                </button>
              </div>
            </div>

            {/* Featured Product Preview: Forge IDE */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">Flagship Product: Forge IDE</h2>
                  <p className="text-xs text-forge-muted">Available now · Version 0.2.1 · Go-First Backend Architecture</p>
                </div>
                <button
                  onClick={() => navigate('ide')}
                  className="text-xs text-forge-accent hover:underline flex items-center space-x-1"
                >
                  <span>Product Details</span>
                  <ArrowRight size={14} />
                </button>
              </div>
              <IdeArtwork className="w-full shadow-2xl rounded-2xl" />
            </div>

            {/* Product Directory Cards */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white">The ForgeNexa Ecosystem</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTS.map(p => (
                  <div
                    key={p.id}
                    onClick={() => navigate(p.id)}
                    className="p-5 rounded-xl bg-forge-panel border border-forge-border hover:border-forge-accent cursor-pointer transition flex flex-col justify-between group space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-base group-hover:text-forge-accent transition">{p.name}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                          p.status === 'Available' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                        }`}>
                          {p.status}
                        </span>
                      </div>
                      <p className="text-xs text-forge-muted leading-relaxed line-clamp-3">{p.description}</p>
                    </div>
                    <div className="pt-2 flex items-center justify-between text-xs text-forge-accent font-medium">
                      <span>Learn more</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Invariants & Trust */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="p-6 rounded-xl bg-forge-panel border border-forge-border space-y-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Cpu size={20} />
                </div>
                <h3 className="font-bold text-white text-base">Go-First Concurrency</h3>
                <p className="text-xs text-forge-muted leading-relaxed">
                  Heavy computational operations (recursive file indexing, Git status checks, and process management) run in pure, multi-threaded Go daemons, preserving 60 FPS editor fluidity.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-forge-panel border border-forge-border space-y-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                  <Shield size={20} />
                </div>
                <h3 className="font-bold text-white text-base">Local-First & Zero Telemetry</h3>
                <p className="text-xs text-forge-muted leading-relaxed">
                  Credentials, private keys, and tokens are stored in your operating system's native keychain. AI code autocomplete executes entirely locally via Ollama with zero server telemetry.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-forge-panel border border-forge-border space-y-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Layers size={20} />
                </div>
                <h3 className="font-bold text-white text-base">Independent Standalone Tools</h3>
                <p className="text-xs text-forge-muted leading-relaxed">
                  No monolithic dependencies. Every product in the ForgeNexa suite installs and runs independently, sharing design tokens and optional launcher integrations without bloated daemons.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Route: Products Directory */}
        {route === 'products' && (
          <div className="space-y-12">
            <div>
              <h1 className="text-3xl font-extrabold text-white">ForgeNexa Product Directory</h1>
              <p className="text-sm text-forge-muted mt-1">Independent, high-performance developer tools engineered for modern teams.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PRODUCTS.map(p => (
                <div key={p.id} className="p-6 rounded-2xl bg-forge-panel border border-forge-border flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-white">{p.name}</h2>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                        p.status === 'Available' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                        p.status === 'In Development' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                        'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}>
                        {p.status}
                      </span>
                    </div>
                    <p className="text-xs text-forge-accent font-medium">{p.tagline}</p>
                    <p className="text-xs text-forge-muted leading-relaxed">{p.description}</p>
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {p.techStack.map(t => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-[#0A0C0E] border border-forge-border font-mono text-forge-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 pt-2">
                    <button
                      onClick={() => navigate(p.id)}
                      className="px-4 py-2 rounded-lg bg-forge-accent hover:bg-blue-600 text-white font-semibold text-xs transition"
                    >
                      View Details & Demo
                    </button>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-[#0F1115] hover:bg-forge-hover border border-forge-border text-forge-muted hover:text-white transition"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Route: Forge IDE */}
        {route === 'ide' && (
          <div className="space-y-12">
            <ProductHero 
              product={ideProduct} 
              onDemoClick={() => setActiveDemo(activeDemo === 'ide' ? null : 'ide')}
              artwork={<IdeArtwork className="w-full" />}
            />
            {activeDemo === 'ide' && (
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Sparkles size={16} className="text-forge-accent" />
                  <span>Live Interactive Forge IDE Browser Demo</span>
                </h3>
                <IdeDemo />
              </div>
            )}
          </div>
        )}

        {/* Route: Forge API */}
        {route === 'api' && (
          <div className="space-y-12">
            <ProductHero 
              product={apiProduct} 
              onDemoClick={() => setActiveDemo(activeDemo === 'api' ? null : 'api')}
              artwork={<ApiArtwork className="w-full" />}
            />
            {activeDemo === 'api' && (
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Sparkles size={16} className="text-forge-accent" />
                  <span>Live Interactive Forge API Client Demo</span>
                </h3>
                <ApiDemo />
              </div>
            )}
          </div>
        )}

        {/* Route: Forge Terminal */}
        {route === 'terminal' && (
          <div className="space-y-12">
            <ProductHero 
              product={terminalProduct} 
              onDemoClick={() => setActiveDemo(activeDemo === 'terminal' ? null : 'terminal')}
              artwork={<TerminalArtwork className="w-full" />}
            />
            {activeDemo === 'terminal' && (
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Sparkles size={16} className="text-forge-accent" />
                  <span>Live Interactive Terminal Shell Demo</span>
                </h3>
                <TerminalDemo />
              </div>
            )}
          </div>
        )}

        {/* Route: Forge Git */}
        {route === 'git' && (
          <div className="space-y-12">
            <ProductHero 
              product={gitProduct} 
              onDemoClick={() => setActiveDemo(activeDemo === 'git' ? null : 'git')}
              artwork={<GitArtwork className="w-full" />}
            />
            {activeDemo === 'git' && (
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Sparkles size={16} className="text-forge-accent" />
                  <span>Live Interactive Git Commit Graph & Conflict Solver</span>
                </h3>
                <GitDemo />
              </div>
            )}
          </div>
        )}

        {/* Route: Forge Hub */}
        {route === 'hub' && (
          <div className="space-y-12">
            <ProductHero 
              product={hubProduct} 
              onDemoClick={() => setActiveDemo(activeDemo === 'hub' ? null : 'hub')}
              artwork={<HubArtwork className="w-full" />}
            />
            {activeDemo === 'hub' && (
              <div className="space-y-3 pt-4">
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Sparkles size={16} className="text-forge-accent" />
                  <span>Live Interactive Forge Hub Launcher Demo</span>
                </h3>
                <HubDemo />
              </div>
            )}
          </div>
        )}

        {/* Route: Downloads */}
        {route === 'downloads' && (
          <div className="space-y-8 max-w-4xl">
            <div>
              <h1 className="text-3xl font-extrabold text-white">Downloads & Releases</h1>
              <p className="text-sm text-forge-muted mt-1">Official standalone binaries and installers published via GitHub Releases.</p>
            </div>

            <div className="p-6 rounded-2xl bg-forge-panel border border-forge-border space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">Forge IDE v0.2.1</h2>
                  <p className="text-xs text-forge-muted font-mono">Latest Stable Release · Verified SHA256 Checksums</p>
                </div>
                <span className="px-3 py-1 rounded bg-green-500/10 text-green-400 font-semibold text-xs border border-green-500/20">
                  Ready
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {ideProduct.downloads?.map(d => (
                  <a
                    key={d.platform}
                    href={d.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-xl bg-[#0F1115] border border-forge-border hover:border-forge-accent transition flex flex-col justify-between space-y-2 group"
                  >
                    <div className="space-y-1">
                      <span className="font-bold text-white text-sm group-hover:text-forge-accent transition">{d.platform}</span>
                      <p className="text-xs text-forge-muted">{d.label}</p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-forge-accent font-mono pt-2">
                      <span>{d.ext}</span>
                      <Download size={14} />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-forge-panel border border-forge-border space-y-2">
              <h3 className="font-bold text-white text-base">Other Products (API, Terminal, Git)</h3>
              <p className="text-xs text-forge-muted leading-relaxed">
                Forge API, Forge Terminal, and Forge Git are currently under active development. Standalone binary builds will be published to their respective GitHub Releases as milestone readiness criteria are met. You can preview their workflows via their interactive demos.
              </p>
            </div>
          </div>
        )}

        {/* Route: Docs */}
        {route === 'docs' && (
          <div className="space-y-8 max-w-4xl">
            <div>
              <h1 className="text-3xl font-extrabold text-white">ForgeNexa Documentation</h1>
              <p className="text-sm text-forge-muted mt-1">Architectural guides, toolchain specs, and developer resources.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://github.com/ForgeNexa/forge/blob/main/docs/ARCHITECTURE.md"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-xl bg-forge-panel border border-forge-border hover:border-forge-accent transition space-y-2"
              >
                <div className="flex items-center space-x-2 text-forge-accent font-bold text-sm">
                  <BookOpen size={16} />
                  <span>Master Architecture Spec</span>
                </div>
                <p className="text-xs text-forge-muted">Ecosystem blueprint, Go-First backend design, and module boundaries.</p>
              </a>

              <a
                href="https://github.com/ForgeNexa/forge/blob/main/docs/CONCURRENCY_DESIGN.md"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-xl bg-forge-panel border border-forge-border hover:border-forge-accent transition space-y-2"
              >
                <div className="flex items-center space-x-2 text-forge-accent font-bold text-sm">
                  <BookOpen size={16} />
                  <span>Concurrency & Parallelism</span>
                </div>
                <p className="text-xs text-forge-muted">Goroutines, semaphore channels, bounded worker pools, and race detector invariants.</p>
              </a>

              <a
                href="https://github.com/ForgeNexa/forge/blob/main/docs/DEPENDENCY_UPGRADE_AUDIT.md"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-xl bg-forge-panel border border-forge-border hover:border-forge-accent transition space-y-2"
              >
                <div className="flex items-center space-x-2 text-forge-accent font-bold text-sm">
                  <BookOpen size={16} />
                  <span>Dependency & Toolchain Audit</span>
                </div>
                <p className="text-xs text-forge-muted">Verified audit of TypeScript 7.0.2, Electron 45.1.0, and Go 1.26.4 / 1.27.3.</p>
              </a>

              <a
                href="https://github.com/ForgeNexa/forge/blob/main/docs/PERFORMANCE_BENCHMARKS.md"
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-xl bg-forge-panel border border-forge-border hover:border-forge-accent transition space-y-2"
              >
                <div className="flex items-center space-x-2 text-forge-accent font-bold text-sm">
                  <BookOpen size={16} />
                  <span>Empirical Performance Benchmarks</span>
                </div>
                <p className="text-xs text-forge-muted">Empirical latency, memory footprint, and CPU metrics on Apple Silicon ARM64.</p>
              </a>
            </div>
          </div>
        )}

        {/* Route: Changelog */}
        {route === 'changelog' && (
          <div className="space-y-8 max-w-4xl">
            <div>
              <h1 className="text-3xl font-extrabold text-white">Changelog & Releases</h1>
              <p className="text-sm text-forge-muted mt-1">Continuous updates across the ForgeNexa developer ecosystem.</p>
            </div>

            <div className="border-l-2 border-forge-border pl-6 space-y-10">
              <div className="space-y-3 relative">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-forge-accent" />
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-bold text-white">v0.2.1 — Go-First Backend Architecture</span>
                  <span className="text-xs text-forge-muted font-mono">2026-10-30</span>
                </div>
                <ul className="text-xs text-forge-muted space-y-1.5 list-disc list-inside">
                  <li>Migrated Git, LSP, tasks, and settings to concurrent Go modules inside <code className="text-forge-text">services/forge-daemon</code>.</li>
                  <li>Integrated Gin loopback HTTP REST engine on <code className="text-forge-text">127.0.0.1</code> with random hex bearer token authentication.</li>
                  <li>Reconciled toolchain versions: TypeScript 7.0.2, Electron 45.1.0, Go 1.26.4 / 1.27.3, and React 19.</li>
                  <li>100% PASS with 0 data races under the Go race detector (<code className="text-forge-text">go test -race ./...</code>).</li>
                </ul>
              </div>

              <div className="space-y-3 relative">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-forge-border" />
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-bold text-white">v0.2.0 — IntelliJ Bottom Tool Window & Settings</span>
                  <span className="text-xs text-forge-muted font-mono">2026-10-28</span>
                </div>
                <ul className="text-xs text-forge-muted space-y-1.5 list-disc list-inside">
                  <li>Docked bottom tool window supporting multi-session terminals, shell profiles, and split canvas.</li>
                  <li>Categories A through J Settings dialog with raw JSON editor and atomic configuration persistence.</li>
                  <li>Image preview, binary file protection, and live rendered Markdown preview.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Route: Security */}
        {route === 'security' && (
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-3xl font-extrabold text-white">Security & Privacy Invariants</h1>
            <p className="text-sm text-forge-muted leading-relaxed">
              ForgeNexa is built from the ground up on local-first principles. We believe developer tools should never leak intellectual property, source code, or private authentication tokens.
            </p>
            <div className="p-6 rounded-2xl bg-forge-panel border border-forge-border space-y-4 text-xs text-forge-muted leading-relaxed">
              <h3 className="font-bold text-white text-base">Key Guarantees:</h3>
              <p>● <strong className="text-white">Zero Plaintext Tokens:</strong> All sensitive credentials (API keys, OAuth tokens, SSH keys) are stored via native OS Keychain APIs.</p>
              <p>● <strong className="text-white">Strict AI Privacy:</strong> Local AI autocomplete executes on your own hardware via Ollama models. No code is transmitted to third-party AI services without explicit user consent.</p>
              <p>● <strong className="text-white">Process Isolation:</strong> All terminal and runner subprocesses are isolated and monitored with strict bounds on concurrency and memory.</p>
            </div>
          </div>
        )}

        {/* Route: About */}
        {route === 'about' && (
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-3xl font-extrabold text-white">About ForgeNexa</h1>
            <p className="text-sm text-forge-muted leading-relaxed">
              ForgeNexa was founded by <strong className="text-white">Manish Yadav (manish-npx)</strong> and the Yantra Works engineering team. Our goal is to craft high-quality, lightweight, independent alternatives to monolithic developer software.
            </p>
            <div className="p-6 rounded-2xl bg-forge-panel border border-forge-border space-y-3 text-xs text-forge-muted">
              <h3 className="font-bold text-white text-base">Get in touch:</h3>
              <p>GitHub Organization: <a href="https://github.com/ForgeNexa" target="_blank" rel="noreferrer" className="text-forge-accent hover:underline">github.com/ForgeNexa</a></p>
              <p>Personal Profile: <a href="https://github.com/manish-npx" target="_blank" rel="noreferrer" className="text-forge-accent hover:underline">github.com/manish-npx</a></p>
            </div>
          </div>
        )}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
};
