import React from 'react';
import {
  ShieldAlert,
  Brain,
  Cpu,
  Layers,
  Database,
  Lock,
  GitBranch,
  ArrowRight,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

export default function About({ onStartAssessment }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-left">
      {/* Editorial Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 glass-pill text-xs font-semibold text-lavender-deep">
          <Brain className="w-3.5 h-3.5 text-lavender-primary" />
          <span>Platform Documentation & Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-surface-text tracking-tight">
          About AuraMind & Machine Learning
        </h1>
        <p className="text-xs sm:text-sm text-surface-muted max-w-lg mx-auto leading-relaxed">
          The scientific philosophy, machine learning engineering, and ethical boundaries that power our wellness platform.
        </p>
      </div>

      {/* Prominent Medical Disclaimer */}
      <div className="rounded-3xl border-2 border-lavender-200 bg-lavender-soft/70 p-6 sm:p-8 space-y-3 shadow-soft">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-2xl bg-white text-lavender-deep flex items-center justify-center shrink-0 shadow-xs">
            <ShieldAlert className="w-5 h-5 text-lavender-primary" />
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-heading font-bold text-surface-text">
              Not a Medical Diagnosis or Clinical Evaluation
            </h2>
            <p className="text-xs sm:text-sm text-surface-muted leading-relaxed">
              AuraMind is an educational self-awareness platform and data science demonstration. The output score is generated solely by a statistical ensemble of decision trees (<code className="font-mono bg-white/80 px-1 py-0.5 rounded text-lavender-deep font-semibold">RandomForestRegressor</code>) trained on cross-sectional survey data.
            </p>
            <p className="text-xs text-surface-muted leading-relaxed">
              The platform does <strong>not</strong> substitute for clinical therapy, psychiatric diagnostic criteria, psychiatric medication management, or emergency crisis support. If you are experiencing mental distress or symptoms of clinical anxiety or depression, please consult licensed healthcare practitioners.
            </p>
          </div>
        </div>
      </div>

      {/* The AuraMind Philosophy */}
      <div className="glass-card p-6 sm:p-10 space-y-6">
        <div className="space-y-2 pb-4 border-b border-surface-border">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-lavender-deep">
            Philosophy
          </span>
          <h2 className="text-2xl font-heading font-bold text-surface-text">
            Understanding the Interaction Between Tech and Rest
          </h2>
          <p className="text-xs sm:text-sm text-surface-muted leading-relaxed">
            In our modern hyperconnected environment, mental wellbeing is not an isolated state—it is deeply intertwined with how we sleep, how often we interrupt our attention with device unlocks, and the academic or professional stress we carry. AuraMind helps quantify these subtle behavioral trade-offs.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
          <div className="p-4 rounded-2xl bg-surface-bg border border-surface-border space-y-1.5">
            <span className="text-xs font-heading font-bold text-surface-text flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-mint-deep" />
              Empirical Basis
            </span>
            <p className="text-[11px] text-surface-muted leading-relaxed">
              Trained on real respondents evaluating daily academic, demographic, and screen-time factors.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-surface-bg border border-surface-border space-y-1.5">
            <span className="text-xs font-heading font-bold text-surface-text flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-mint-deep" />
              Non-Linear Learning
            </span>
            <p className="text-[11px] text-surface-muted leading-relaxed">
              Random Forest ensembles capture complex thresholds, such as how screen usage impacts well-being differently when combined with low sleep.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-surface-bg border border-surface-border space-y-1.5">
            <span className="text-xs font-heading font-bold text-surface-text flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-mint-deep" />
              Pre-fitted Pipeline
            </span>
            <p className="text-[11px] text-surface-muted leading-relaxed">
              StandardScaler, Log1p, OrdinalEncoder, and OneHotEncoder execute without runtime data leakage.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-surface-bg border border-surface-border space-y-1.5">
            <span className="text-xs font-heading font-bold text-surface-text flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-mint-deep" />
              Ephemeral Privacy
            </span>
            <p className="text-[11px] text-surface-muted leading-relaxed">
              Assessment payloads are evaluated in-memory by FastAPI and discarded immediately after prediction.
            </p>
          </div>
        </div>
      </div>

      {/* Model Architecture Specifications */}
      <div className="glass-card p-6 sm:p-10 space-y-6">
        <div className="pb-4 border-b border-surface-border">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-mint-deep">
            Technical Architecture
          </span>
          <h2 className="text-2xl font-heading font-bold text-surface-text mt-0.5">
            Machine Learning Pipeline Specifications
          </h2>
          <p className="text-xs text-surface-muted mt-1">
            How the FastAPI backend and Scikit-Learn model collaborate to compute predictions.
          </p>
        </div>

        <div className="border border-surface-border rounded-2xl overflow-hidden divide-y divide-surface-border text-xs">
          <div className="grid grid-cols-2 p-3.5 bg-surface-bg font-semibold text-surface-text">
            <span>Parameter</span>
            <span>Specification</span>
          </div>
          <div className="grid grid-cols-2 p-3.5">
            <span className="text-surface-muted">Model Estimator</span>
            <span className="font-mono font-medium text-surface-text">RandomForestRegressor (Scikit-Learn)</span>
          </div>
          <div className="grid grid-cols-2 p-3.5">
            <span className="text-surface-muted">Ensemble Trees</span>
            <span className="font-mono font-medium text-surface-text">200 Estimators</span>
          </div>
          <div className="grid grid-cols-2 p-3.5">
            <span className="text-surface-muted">Max Depth / Min Samples Split</span>
            <span className="font-mono font-medium text-surface-text">15 depth / 5 split / 2 leaf</span>
          </div>
          <div className="grid grid-cols-2 p-3.5">
            <span className="text-surface-muted">Model Accuracy ($R^2$ Score)</span>
            <span className="font-mono font-medium text-mint-deep">0.865 (86.5% explained variance)</span>
          </div>
          <div className="grid grid-cols-2 p-3.5">
            <span className="text-surface-muted">Mean Absolute Error (MAE)</span>
            <span className="font-mono font-medium text-lavender-deep">0.368 points on 10.0 scale</span>
          </div>
          <div className="grid grid-cols-2 p-3.5">
            <span className="text-surface-muted">Input Dimensions</span>
            <span className="font-mono font-medium text-surface-text">12 Behavioral & Demographic Variables</span>
          </div>
          <div className="grid grid-cols-2 p-3.5">
            <span className="text-surface-muted">Target Variable</span>
            <span className="font-mono font-medium text-lavender-deep">Mental_Health_Score (Continuous 3.6 – 9.4)</span>
          </div>
        </div>

        {/* Why Grouped_Country */}
        <div className="p-4 rounded-2xl bg-surface-bg border border-surface-border space-y-2">
          <h4 className="text-xs font-heading font-bold text-surface-text">
            Why `Grouped_Country` instead of raw country?
          </h4>
          <p className="text-xs text-surface-muted leading-relaxed">
            The raw training dataset contained over 111 distinct countries, creating high sparsity where over 90 countries had fewer than 15 respondents each. To prevent the model from overfitting to sparse categories, the training pipeline grouped all countries outside the top 9 clusters (India, USA, Canada, Australia, UK, Germany, Mexico, Turkey, France) into a single <code>Other</code> category.
          </p>
        </div>
      </div>

      {/* Start Assessment CTA */}
      <div className="text-center pt-4">
        <button
          onClick={onStartAssessment}
          className="btn-primary text-sm px-8 py-3.5 inline-flex items-center gap-2 shadow-glow-lavender"
        >
          <span>Take the Assessment</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
