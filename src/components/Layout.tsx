import React from 'react';
import { 
  Code, Globe, Terminal, GitBranch, Layers, Shield, Cpu, 
  ArrowRight, Download, ExternalLink, Check, Sun, Moon, Sparkles 
} from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { IdeArtwork, ApiArtwork, TerminalArtwork, GitArtwork, HubArtwork } from './Artworks';
import { IdeDemo, ApiDemo, TerminalDemo, GitDemo, HubDemo } from './InteractiveDemos';

interface AppProps {
  currentRoute: string;
  navigate: (route: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<AppProps> = ({ currentRoute, navigate, isDark, toggleTheme }) => (
  <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0F1115]/80 border-b border-forge-border px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      {/* Brand */}
      <div 
        onClick={() => navigate('home')} 
        className="flex items-center space-x-3 cursor-pointer group"
      >
        <div className="w-8 h-8 rounded-lg bg-forge-accent/20 border border-forge-accent/40 flex items-center justify-center text-forge-accent group-hover:scale-105 transition">
          <Sparkles size={18} />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg tracking-tight text-white flex items-center">
            ForgeNexa
          </span>
          <span className="text-[10px] text-forge-muted font-mono tracking-wider -mt-1">
            OPEN ECOSYSTEM
          </span>
        </div>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-forge-muted">
        <button 
          onClick={() => navigate('products')} 
          className={`hover:text-forge-text transition ${currentRoute === 'products' ? 'text-forge-accent font-bold' : ''}`}
        >
          Products
        </button>
        <button 
          onClick={() => navigate('ide')} 
          className={`hover:text-forge-text transition ${currentRoute === 'ide' ? 'text-forge-accent font-bold' : ''}`}
        >
          Forge IDE
        </button>
        <button 
          onClick={() => navigate('api')} 
          className={`hover:text-forge-text transition ${currentRoute === 'api' ? 'text-forge-accent font-bold' : ''}`}
        >
          Forge API
        </button>
        <button 
          onClick={() => navigate('terminal')} 
          className={`hover:text-forge-text transition ${currentRoute === 'terminal' ? 'text-forge-accent font-bold' : ''}`}
        >
          Terminal
        </button>
        <button 
          onClick={() => navigate('git')} 
          className={`hover:text-forge-text transition ${currentRoute === 'git' ? 'text-forge-accent font-bold' : ''}`}
        >
          Git
        </button>
        <button 
          onClick={() => navigate('docs')} 
          className={`hover:text-forge-text transition ${currentRoute === 'docs' ? 'text-forge-accent font-bold' : ''}`}
        >
          Docs
        </button>
        <button 
          onClick={() => navigate('changelog')} 
          className={`hover:text-forge-text transition ${currentRoute === 'changelog' ? 'text-forge-accent font-bold' : ''}`}
        >
          Changelog
        </button>
      </div>

      {/* Action / Theme / GitHub */}
      <div className="flex items-center space-x-3">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-forge-hover border border-forge-border text-forge-muted hover:text-white transition"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <a
          href="https://github.com/ForgeNexa"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-forge-hover border border-forge-border hover:border-forge-accent text-xs font-semibold text-white transition"
        >
          <ExternalLink size={14} />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </nav>
);

export const Footer: React.FC<{ navigate: (route: string) => void }> = ({ navigate }) => (
  <footer className="border-t border-forge-border bg-[#0A0C0E] py-12 px-6 text-xs text-forge-muted">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
      <div className="col-span-2 space-y-3">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded bg-forge-accent/20 border border-forge-accent/40 flex items-center justify-center text-forge-accent">
            <Sparkles size={14} />
          </div>
          <span className="font-bold text-base text-white">ForgeNexa</span>
        </div>
        <p className="max-w-sm text-forge-muted">
          A modern, high-performance developer tools ecosystem. Open-source, local-first, and powered by Go and Web standards.
        </p>
        <div className="text-[11px] text-forge-muted font-mono">
          © 2026 ForgeNexa. MIT License.
        </div>
      </div>

      <div>
        <div className="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">Products</div>
        <ul className="space-y-2">
          <li><button onClick={() => navigate('ide')} className="hover:text-forge-accent transition">Forge IDE</button></li>
          <li><button onClick={() => navigate('api')} className="hover:text-forge-accent transition">Forge API</button></li>
          <li><button onClick={() => navigate('terminal')} className="hover:text-forge-accent transition">Forge Terminal</button></li>
          <li><button onClick={() => navigate('git')} className="hover:text-forge-accent transition">Forge Git</button></li>
          <li><button onClick={() => navigate('hub')} className="hover:text-forge-accent transition">Forge Hub</button></li>
        </ul>
      </div>

      <div>
        <div className="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">Resources</div>
        <ul className="space-y-2">
          <li><button onClick={() => navigate('docs')} className="hover:text-forge-accent transition">Documentation</button></li>
          <li><button onClick={() => navigate('downloads')} className="hover:text-forge-accent transition">Downloads</button></li>
          <li><button onClick={() => navigate('changelog')} className="hover:text-forge-accent transition">Changelog</button></li>
          <li><button onClick={() => navigate('security')} className="hover:text-forge-accent transition">Security Policy</button></li>
        </ul>
      </div>

      <div>
        <div className="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">Community</div>
        <ul className="space-y-2">
          <li><a href="https://github.com/ForgeNexa" target="_blank" rel="noreferrer" className="hover:text-forge-accent transition">GitHub Org</a></li>
          <li><button onClick={() => navigate('about')} className="hover:text-forge-accent transition">About ForgeNexa</button></li>
          <li><a href="https://github.com/ForgeNexa/forge/issues" target="_blank" rel="noreferrer" className="hover:text-forge-accent transition">Issue Tracker</a></li>
        </ul>
      </div>
    </div>
  </footer>
);

export const ProductHero: React.FC<{ 
  product: Product; 
  onDemoClick: () => void;
  artwork: React.ReactNode;
}> = ({ product, onDemoClick, artwork }) => (
  <div className="space-y-8">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="space-y-2 max-w-2xl">
        <div className="flex items-center space-x-3">
          <span className="text-3xl font-extrabold text-white tracking-tight">{product.name}</span>
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
            product.status === 'Available' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
            product.status === 'In Development' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
            'bg-blue-500/10 text-blue-400 border border-blue-500/20'
          }`}>
            {product.status} {product.version ? `v${product.version}` : ''}
          </span>
        </div>
        <p className="text-base text-forge-accent font-medium">{product.tagline}</p>
        <p className="text-sm text-forge-muted">{product.description}</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={onDemoClick}
          className="px-5 py-2.5 rounded-lg bg-forge-accent hover:bg-blue-600 text-white font-semibold text-xs transition shadow-lg flex items-center space-x-2"
        >
          <Sparkles size={14} />
          <span>View Live Demo</span>
        </button>
        {product.downloads && (
          <a
            href={product.downloads[0].url}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-lg bg-forge-panel hover:bg-forge-hover border border-forge-border text-white font-semibold text-xs transition flex items-center space-x-2"
          >
            <Download size={14} />
            <span>Download</span>
          </a>
        )}
        <a
          href={product.repo}
          target="_blank"
          rel="noreferrer"
          className="p-2.5 rounded-lg bg-forge-panel hover:bg-forge-hover border border-forge-border text-forge-muted hover:text-white transition"
          aria-label="Repository"
        >
          <ExternalLink size={16} />
        </a>
      </div>
    </div>

    {/* Artwork Container */}
    <div className="p-2 rounded-2xl bg-gradient-to-b from-forge-border/40 to-transparent border border-forge-border/60 shadow-2xl">
      {artwork}
    </div>

    {/* Feature Highlights Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {product.features.map((feat, i) => (
        <div key={i} className="p-4 rounded-xl bg-forge-panel border border-forge-border flex items-start space-x-3">
          <div className="p-1.5 rounded-md bg-forge-accent/10 text-forge-accent mt-0.5">
            <Check size={14} />
          </div>
          <span className="text-xs text-forge-text leading-relaxed">{feat}</span>
        </div>
      ))}
    </div>
  </div>
);
