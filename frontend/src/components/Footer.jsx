import React from 'react';
import { ShieldAlert, Sparkles, Heart, ArrowUpRight } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (page) => {
    setActivePage(page);
    scrollToTop();
  };

  return (
    <footer className="mt-auto border-t border-surface-border bg-white/70 backdrop-blur-sm text-surface-muted">
      {/* Non-Diagnostic Medical Disclaimer Ribbon */}
      <div className="bg-gradient-to-r from-lavender-soft/60 via-white to-mint-soft/60 border-b border-surface-border py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-start sm:items-center gap-3">
          <ShieldAlert className="w-4 h-4 text-lavender-primary shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs text-surface-muted leading-relaxed">
            <strong className="text-surface-text font-semibold">Educational & Wellness Notice:</strong>{' '}
            AuraMind provides machine-learning-assisted self-awareness estimates using a regression model trained on lifestyle data. It is not an assessment of psychiatric disorders and does not provide clinical diagnoses or medical treatment plans. For medical concerns, always consult a qualified healthcare provider.
          </p>
        </div>
      </div>

      {/* Main Footer Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-lavender-primary to-mint-accent flex items-center justify-center shadow-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
              <span className="text-lg font-heading font-extrabold text-surface-text tracking-tight">
                Aura<span className="text-lavender-primary">Mind</span>
              </span>
            </div>
            <p className="text-xs text-surface-muted max-w-sm leading-relaxed">
              Understand your mind. Nurture your balance. A calm, intelligent interface exploring the interaction between digital habits, rest patterns, and daily psychological wellbeing.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[11px] px-2.5 py-1 rounded-lg bg-lavender-soft text-lavender-deep font-mono font-medium">
                Random Forest Regressor
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-lg bg-mint-soft text-mint-deep font-mono font-medium">
                FastAPI 0.115+
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-lg bg-surface-bg border border-surface-border text-surface-text font-mono font-medium">
                React 19 & Tailwind
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-heading font-bold text-surface-text uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('home')}
                  className="hover:text-lavender-deep transition-colors"
                >
                  Overview & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('assessment')}
                  className="hover:text-lavender-deep transition-colors"
                >
                  Assessment Wizard (12 Features)
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('insights')}
                  className="hover:text-lavender-deep transition-colors"
                >
                  Insights & Habit Metrics
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-lavender-deep transition-colors"
                >
                  Model Methodology & Transparency
                </button>
              </li>
            </ul>
          </div>

          {/* Model Transparency Specs Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-heading font-bold text-surface-text uppercase tracking-wider">
              Architecture Metrics
            </h4>
            <div className="p-4 rounded-2xl bg-surface-bg/80 border border-surface-border space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span>Ensemble Size:</span>
                <span className="font-mono font-semibold text-surface-text">200 Estimators</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Model $R^2$ Accuracy:</span>
                <span className="font-mono font-semibold text-mint-deep">0.865</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Pipeline Preprocessing:</span>
                <span className="font-mono font-semibold text-surface-text">ColumnTransformer</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Input Contract:</span>
                <span className="font-mono font-semibold text-lavender-deep">12 Behavioral Features</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} AuraMind. Designed with calm intention for personal self-awareness.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigateTo('about')}
              className="hover:text-surface-text transition-colors"
            >
              Privacy & Safeguards
            </button>
            <span className="text-surface-border">•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-surface-text transition-colors flex items-center gap-1"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
