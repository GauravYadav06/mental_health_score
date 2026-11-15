import React from 'react';
import {
  ArrowRight,
  Sparkles,
  Smartphone,
  Moon,
  Activity,
  BookOpen,
  Heart,
  BarChart3,
  ShieldCheck,
  Compass,
  Cpu,
  Layers,
  CheckCircle2,
  TrendingUp,
  Smile,
  ChevronRight
} from 'lucide-react';
import { SAMPLE_PRESETS } from '../constants/features';

export default function Home({ onStartAssessment, onLoadPreset }) {
  // 6 Floating Wellness Cards configured around the 3D Brain
  const floatingCards = [
    {
      id: 'sleep',
      icon: Moon,
      label: 'Sleep Quality',
      status: 'Restorative Rest',
      accent: 'lavender',
      position: 'top-2 -left-6 sm:-left-10',
      animation: 'animate-float-card1',
      progressWidth: '82%',
      progressColor: 'from-lavender-primary to-lavender-deep',
    },
    {
      id: 'digital',
      icon: Smartphone,
      label: 'Screen Balance',
      status: 'Mindful Usage',
      accent: 'mint',
      position: 'top-6 -right-6 sm:-right-8',
      animation: 'animate-float-card2',
      progressWidth: '68%',
      progressColor: 'from-mint-accent to-mint-deep',
    },
    {
      id: 'activity',
      icon: Activity,
      label: 'Physical Activity',
      status: 'Active Movement',
      accent: 'lavender',
      position: 'top-36 -left-8 sm:-left-14',
      animation: 'animate-float-card3',
      progressWidth: '75%',
      progressColor: 'from-lavender-primary to-mint-accent',
    },
    {
      id: 'study',
      icon: BookOpen,
      label: 'Study Hours',
      status: 'Deep Focus',
      accent: 'mint',
      position: 'top-40 -right-8 sm:-right-12',
      animation: 'animate-float-card1',
      progressWidth: '80%',
      progressColor: 'from-mint-accent to-mint-deep',
    },
    {
      id: 'stress',
      icon: Heart,
      label: 'Stress Index',
      status: 'Regulated Equilibrium',
      accent: 'lavender',
      position: 'bottom-8 -left-4 sm:-left-8',
      animation: 'animate-float-card2',
      progressWidth: '70%',
      progressColor: 'from-lavender-primary to-lavender-deep',
    },
    {
      id: 'score',
      icon: BarChart3,
      label: 'Wellness Score',
      status: 'Ensemble ML Output',
      accent: 'mint',
      position: 'bottom-4 -right-4 sm:-right-6',
      animation: 'animate-float-card3',
      progressWidth: '86%',
      progressColor: 'from-mint-accent to-lavender-deep',
    },
  ];

  return (
    <div className="space-y-28 pb-24 overflow-hidden">
      {/* =========================================================================
          HERO SECTION: 3D Translucent Brain + Orbital Rings + 6 Floating Cards
         ========================================================================= */}
      <section className="relative pt-12 sm:pt-20 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-hero-gradient border-b border-surface-border">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-lavender-primary/15 rounded-full blur-[140px] pointer-events-none animate-glow-pulse" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-mint-accent/20 rounded-full blur-[130px] pointer-events-none animate-glow-pulse" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-6 space-y-7 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-pill text-xs font-heading font-semibold text-lavender-deep shadow-soft">
              <Sparkles className="w-3.5 h-3.5 text-lavender-primary animate-pulse" />
              <span>AI-Powered Wellness Insights</span>
            </div>

            {/* Large Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-surface-text leading-[1.12]">
              Understand your mind.{' '}
              <span className="block text-gradient-auramind">
                Find your balance.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-surface-muted max-w-xl leading-relaxed">
              Explore how your everyday habits relate to your mental wellness through a personalized, machine-learning-powered assessment.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onStartAssessment}
                className="btn-primary flex items-center justify-center gap-2.5 text-base px-8 py-4 shadow-glow-lavender group"
              >
                <span>Start Your Assessment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#how-it-works"
                className="btn-secondary flex items-center justify-center text-base px-7 py-4"
              >
                How It Works
              </a>
            </div>

            {/* Key Feature Trust Indicators */}
            <div className="pt-6 flex flex-wrap items-center gap-5 text-xs text-surface-muted border-t border-surface-border/70">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-mint-deep" />
                200-Tree Random Forest
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-mint-deep" />
                12 Behavioral Features
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-mint-deep" />
                Private & Non-Diagnostic
              </span>
            </div>
          </div>

          {/* Right Column: Floating 3D Brain Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-8 sm:pt-0">
            {/* 3D Visual Stage Container */}
            <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
              {/* Layer 1: Ambient Background Glow Sphere */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-lavender-soft via-white/80 to-mint-soft blur-2xl opacity-80" />

              {/* Layer 2: 3D Orbital Rings circling the brain */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Outer Ring */}
                <div className="w-[380px] h-[380px] rounded-full border border-lavender-300/50 border-dashed animate-orbit-ring" />
                {/* Inner Reverse Ring */}
                <div className="absolute w-[320px] h-[320px] rounded-full border border-mint-300/60 border-t-transparent border-b-transparent animate-orbit-ring-rev" />
              </div>

              {/* Layer 3: Minimal Floating Isometric Platform beneath the brain */}
              <div className="absolute bottom-2 sm:bottom-4 w-[280px] sm:w-[320px] opacity-85 pointer-events-none">
                <img
                  src="/images/floating_platform.png"
                  alt="AuraMind floating platform pedestal"
                  className="w-full h-auto drop-shadow-xl"
                />
              </div>

              {/* Layer 4: The 3D Translucent Glowing Brain Image */}
              <div className="relative z-10 w-[270px] sm:w-[310px] animate-float-slow transition-transform">
                <div className="relative">
                  <img
                    src="/images/3d_brain.jpg"
                    alt="AuraMind 3D Translucent Glowing Brain with Neural Pathways"
                    className="w-full h-auto object-contain mix-blend-multiply drop-shadow-2xl select-none"
                    loading="eager"
                  />
                  {/* Subtle inner light reflection */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-lavender-500/10 via-transparent to-mint-300/15 pointer-events-none" />
                </div>
              </div>

              {/* Layer 5: The 6 Floating Glassmorphism Cards positioned around the Brain (Desktop/Tablet) */}
              <div className="hidden sm:block absolute inset-0 pointer-events-none">
                {floatingCards.map((card) => {
                  const Icon = card.icon;
                  const isMint = card.accent === 'mint';

                  return (
                    <div
                      key={card.id}
                      className={`absolute ${card.position} ${card.animation} pointer-events-auto transition-transform hover:scale-105 duration-300`}
                    >
                      <div className="glass-card px-3.5 py-2.5 flex items-center gap-2.5 shadow-glass border-white/90 hover:border-lavender-300/80">
                        {/* Icon Badge */}
                        <div
                          className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
                            isMint
                              ? 'bg-mint-soft text-mint-deep'
                              : 'bg-lavender-soft text-lavender-deep'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>

                        {/* Text & Decorative Mini Progress Bar */}
                        <div className="text-left space-y-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[11px] font-heading font-bold text-surface-text leading-none">
                              {card.label}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[9px] font-medium text-surface-muted leading-none">
                              {card.status}
                            </span>
                            <div className="w-8 h-1 rounded-full bg-surface-bg overflow-hidden">
                              <div
                                className={`h-full rounded-full bg-gradient-to-r ${card.progressColor}`}
                                style={{ width: card.progressWidth }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile-only compact pill grid below the brain */}
            <div className="sm:hidden grid grid-cols-2 gap-2 w-full pt-4">
              {floatingCards.slice(0, 4).map((card) => {
                const Icon = card.icon;
                return (
                  <div key={card.id} className="glass-card p-2.5 flex items-center gap-2 text-left">
                    <div className="w-6 h-6 rounded-lg bg-lavender-soft text-lavender-deep flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-surface-text">{card.label}</span>
                      <span className="block text-[9px] text-surface-muted">{card.status}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: How AuraMind Works (3 Visually Rich Cards with Connectors)
         ========================================================================= */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-lavender-deep bg-lavender-soft px-3.5 py-1 rounded-full border border-lavender-200">
            How AuraMind Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-surface-text tracking-tight">
            Three Thoughtful Steps to Self-Awareness
          </h2>
          <p className="text-sm text-surface-muted max-w-xl mx-auto">
            A frictionless, scientifically grounded assessment that translates everyday habits into actionable self-insight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Card 1: Share Your Habits */}
          <div className="glass-card-hover p-8 text-left space-y-5 flex flex-col justify-between relative group">
            <div className="space-y-4">
              {/* Circular Pastel Icon Background */}
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-lavender-soft via-white to-lavender-100 text-lavender-deep flex items-center justify-center shadow-soft border border-lavender-200/80 group-hover:scale-105 transition-transform duration-300">
                <Compass className="w-8 h-8 text-lavender-primary" />
              </div>
              <span className="text-xs font-mono font-bold text-lavender-deep tracking-wider block">
                Step 01
              </span>
              <h3 className="text-xl font-heading font-bold text-surface-text">
                Share Your Habits
              </h3>
              <p className="text-xs text-surface-muted leading-relaxed">
                Enter your daily lifestyle inputs: study hours, smartphone unlocks, sleep duration, physical activity, and subjective stress.
              </p>
            </div>
            <div className="pt-4 border-t border-surface-border text-xs font-semibold text-lavender-deep flex items-center justify-between">
              <span>Guided 4-step wizard</span>
              <ArrowRight className="w-3.5 h-3.5 text-lavender-primary group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Desktop Connector Arrow between Card 1 and Card 2 */}
            <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 z-20 text-lavender-300 pointer-events-none">
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </div>
          </div>

          {/* Card 2: AI-Powered Analysis */}
          <div className="glass-card-hover p-8 text-left space-y-5 flex flex-col justify-between relative group">
            <div className="space-y-4">
              {/* Circular Pastel Icon Background */}
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-mint-soft via-white to-mint-100 text-mint-deep flex items-center justify-center shadow-soft border border-mint-200/80 group-hover:scale-105 transition-transform duration-300">
                <Cpu className="w-8 h-8 text-mint-deep" />
              </div>
              <span className="text-xs font-mono font-bold text-mint-deep tracking-wider block">
                Step 02
              </span>
              <h3 className="text-xl font-heading font-bold text-surface-text">
                AI-Powered Analysis
              </h3>
              <p className="text-xs text-surface-muted leading-relaxed">
                FastAPI validates your inputs and executes the pre-fitted Scikit-Learn ColumnTransformer and 200-tree Random Forest pipeline.
              </p>
            </div>
            <div className="pt-4 border-t border-surface-border text-xs font-semibold text-mint-deep flex items-center justify-between">
              <span>Log1p & StandardScaler transforms</span>
              <ArrowRight className="w-3.5 h-3.5 text-mint-deep group-hover:translate-x-1 transition-transform" />
            </div>

            {/* Desktop Connector Arrow between Card 2 and Card 3 */}
            <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 z-20 text-mint-300 pointer-events-none">
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </div>
          </div>

          {/* Card 3: Explore Your Insights */}
          <div className="glass-card-hover p-8 text-left space-y-5 flex flex-col justify-between relative group">
            <div className="space-y-4">
              {/* Circular Pastel Icon Background */}
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-lavender-soft via-white to-mint-soft text-lavender-deep flex items-center justify-center shadow-soft border border-lavender-200/80 group-hover:scale-105 transition-transform duration-300">
                <Layers className="w-8 h-8 text-lavender-primary" />
              </div>
              <span className="text-xs font-mono font-bold text-lavender-deep tracking-wider block">
                Step 03
              </span>
              <h3 className="text-xl font-heading font-bold text-surface-text">
                Explore Your Insights
              </h3>
              <p className="text-xs text-surface-muted leading-relaxed">
                Review your predicted score, examine how your habits compare, and explore tailored lifestyle recommendations.
              </p>
            </div>
            <div className="pt-4 border-t border-surface-border text-xs font-semibold text-lavender-deep flex items-center justify-between">
              <span>Transparent, non-diagnostic results</span>
              <ArrowRight className="w-3.5 h-3.5 text-lavender-primary group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: Wellness Illustration Section (Designed Around Your Wellbeing)
         ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-14 border-surface-border overflow-hidden relative">
          {/* Ambient background bloom */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-mint-accent/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-lavender-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left: 3D Peaceful Person Meditation Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-[340px] aspect-square rounded-4xl bg-gradient-to-b from-lavender-soft/70 via-white to-mint-soft/60 p-4 border border-white/80 shadow-glass flex items-center justify-center">
                <img
                  src="/images/3d_meditation_wellness.jpg"
                  alt="3D peaceful wellness person in meditation surrounded by lavender petals and mint botanical elements"
                  className="w-full h-full object-contain mix-blend-multiply drop-shadow-md select-none rounded-3xl"
                  loading="lazy"
                />
                {/* Floating pill badge on illustration */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-card px-3.5 py-1.5 flex items-center gap-2 shadow-soft">
                  <Smile className="w-3.5 h-3.5 text-mint-deep" />
                  <span className="text-[11px] font-heading font-semibold text-surface-text whitespace-nowrap">
                    Mindful Harmony
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Layout & 4 Supporting Feature Cards */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-mint-deep">
                  Mindfulness & Habit Science
                </span>
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-surface-text tracking-tight">
                  Designed Around Your Wellbeing
                </h2>
                <p className="text-xs sm:text-sm text-surface-muted leading-relaxed">
                  Every feature in AuraMind is shaped to foster calm self-reflection without clinical pressure, commercial noise, or judgment.
                </p>
              </div>

              {/* 4 Supporting Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/70 border border-surface-border space-y-1.5 shadow-2xs hover:border-lavender-200 transition-colors">
                  <div className="flex items-center gap-2 text-lavender-deep font-bold text-xs font-heading">
                    <Activity className="w-4 h-4 text-lavender-primary" />
                    <span>Lifestyle Awareness</span>
                  </div>
                  <p className="text-[11px] text-surface-muted leading-relaxed">
                    Surfacing tangible daily choices like phone unlock frequency, motion, and restorative sleep.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/70 border border-surface-border space-y-1.5 shadow-2xs hover:border-mint-200 transition-colors">
                  <div className="flex items-center gap-2 text-mint-deep font-bold text-xs font-heading">
                    <Sparkles className="w-4 h-4 text-mint-deep" />
                    <span>Personalized Assessment</span>
                  </div>
                  <p className="text-[11px] text-surface-muted leading-relaxed">
                    12 model inputs evaluated simultaneously through our fitted ensemble regressor.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/70 border border-surface-border space-y-1.5 shadow-2xs hover:border-lavender-200 transition-colors">
                  <div className="flex items-center gap-2 text-lavender-deep font-bold text-xs font-heading">
                    <TrendingUp className="w-4 h-4 text-lavender-primary" />
                    <span>Understandable Results</span>
                  </div>
                  <p className="text-[11px] text-surface-muted leading-relaxed">
                    Standardized on a clean 10.0 scale with plain-language, non-diagnostic observations.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/70 border border-surface-border space-y-1.5 shadow-2xs hover:border-mint-200 transition-colors">
                  <div className="flex items-center gap-2 text-mint-deep font-bold text-xs font-heading">
                    <ShieldCheck className="w-4 h-4 text-mint-deep" />
                    <span>Privacy-Conscious</span>
                  </div>
                  <p className="text-[11px] text-surface-muted leading-relaxed">
                    Ephemeral in-memory evaluation with zero third-party telemetry, accounts, or cookies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE DEMO PRESETS
         ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-lavender-deep">
            Interactive Test Profiles
          </span>
          <h2 className="text-2xl font-heading font-bold text-surface-text">
            Test Pre-Configured Lifestyle Profiles
          </h2>
          <p className="text-xs text-surface-muted max-w-md mx-auto">
            Experience how different daily habits alter the ML model's prediction score.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_PRESETS.map((preset, idx) => (
            <div
              key={idx}
              className="glass-card-hover p-6 text-left flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-lavender-deep uppercase tracking-wider">
                  Preset #{idx + 1}
                </span>
                <h3 className="text-base font-heading font-bold text-surface-text">{preset.name}</h3>
                <p className="text-xs text-surface-muted leading-relaxed">{preset.description}</p>
                <div className="pt-2 text-[11px] text-surface-muted font-mono space-y-1">
                  <div>Sleep: {preset.data.Sleep_Hours_Per_Night}h • Screen: {preset.data.Avg_Daily_Usage_Hours}h</div>
                  <div>Stress: {preset.data.Stress_Level} • Platform: {preset.data.Most_Used_Platform}</div>
                </div>
              </div>
              <button
                onClick={() => onLoadPreset(preset.data)}
                className="mt-5 w-full py-2.5 rounded-xl bg-surface-bg hover:bg-lavender-soft hover:text-lavender-deep text-surface-text text-xs font-semibold border border-surface-border transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Load Profile into Wizard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: Final Call-To-Action (Lavender Mountain Landscape Banner)
         ========================================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl p-10 sm:p-16 text-center space-y-6 relative overflow-hidden border border-lavender-200/80 shadow-glass">
          {/* Panoramic Lavender Mountain Landscape Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/lavender_wellness_landscape.jpg"
              alt="Panoramic soft lavender mountain landscape with gentle mint atmospheric glow"
              className="w-full h-full object-cover opacity-60 mix-blend-multiply"
            />
            {/* Soft overlay gradient for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent" />
          </div>

          {/* Banner Content */}
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 glass-pill text-[11px] font-semibold text-lavender-deep mb-2">
              <Sparkles className="w-3.5 h-3.5 text-lavender-primary" />
              <span>Begin Your Wellness Assessment</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-surface-text tracking-tight">
              Your journey to better self-awareness starts here.
            </h2>
            <p className="text-sm text-surface-muted max-w-lg mx-auto leading-relaxed">
              Take 2 minutes to complete your guided assessment and receive your model-computed wellness score.
            </p>
          </div>

          <div className="pt-2 relative z-10">
            <button
              onClick={onStartAssessment}
              className="btn-primary text-base px-9 py-4 shadow-glow-lavender inline-flex items-center gap-2 group"
            >
              <span>Begin Assessment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
