import React, { useState } from 'react';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, hasResults, apiStatus }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'assessment', label: 'Assessment' },
    { id: 'insights', label: 'Insights', badge: hasResults ? 'Available' : null },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Minimal Mark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-left transition-transform active:scale-98"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-lavender-soft via-white to-mint-soft border border-lavender-200/60 flex items-center justify-center shadow-soft group-hover:shadow-glow-lavender transition-all duration-300">
              <div className="relative">
                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-lavender-primary to-mint-accent animate-pulse" />
                <div className="absolute inset-0 w-3.5 h-3.5 rounded-full bg-lavender-primary/30 blur-[2px]" />
              </div>
            </div>
            <div>
              <span className="text-xl font-heading font-extrabold tracking-tight text-surface-text flex items-center gap-1">
                Aura<span className="text-lavender-primary">Mind</span>
              </span>
              <span className="block text-[11px] font-medium text-surface-muted tracking-tight -mt-0.5">
                AI Wellness Platform
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-surface-bg/80 p-1.5 rounded-2xl border border-surface-border shadow-xs">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-white text-lavender-deep shadow-soft font-bold'
                      : 'text-surface-muted hover:text-surface-text hover:bg-white/60'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-mint-soft text-mint-deep border border-mint-200">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action & API Status */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-surface-border text-xs font-medium text-surface-muted shadow-2xs">
              <span
                className={`w-2 h-2 rounded-full transition-colors ${
                  apiStatus === 'connected'
                    ? 'bg-mint-deep shadow-[0_0_8px_rgba(53,185,154,0.6)]'
                    : apiStatus === 'checking'
                    ? 'bg-amber-400 animate-pulse'
                    : 'bg-rose-400'
                }`}
              />
              <span className="text-[11px] font-mono text-surface-muted">
                {apiStatus === 'connected' ? 'FastAPI Ready' : apiStatus === 'checking' ? 'Connecting...' : 'API Offline'}
              </span>
            </div>

            <button
              onClick={() => handleNavClick('assessment')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-lavender-primary to-lavender-deep text-white text-xs font-semibold shadow-soft hover:shadow-glow-lavender hover:opacity-95 transition-all duration-200 active:scale-98 flex items-center gap-1.5"
            >
              <span>Start Assessment</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-90" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white border border-surface-border text-surface-muted hover:text-surface-text shadow-xs"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-surface-border px-5 pt-3 pb-6 space-y-2 shadow-lg">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-lavender-soft text-lavender-deep'
                    : 'text-surface-muted hover:bg-surface-bg'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-mint-soft text-mint-deep font-bold border border-mint-200">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
          <div className="pt-4 border-t border-surface-border flex items-center justify-between text-xs text-surface-muted">
            <span className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${apiStatus === 'connected' ? 'bg-mint-deep' : 'bg-rose-400'}`} />
              Model Service: {apiStatus === 'connected' ? 'Online' : 'Offline'}
            </span>
            <button
              onClick={() => handleNavClick('assessment')}
              className="px-4 py-2 rounded-xl bg-lavender-primary text-white text-xs font-semibold"
            >
              Start
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
