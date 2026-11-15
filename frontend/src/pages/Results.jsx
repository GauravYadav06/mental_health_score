import React from 'react';
import {
  ArrowLeft,
  RotateCcw,
  Sparkles,
  BookOpen,
  Smartphone,
  Activity,
  Moon,
  Unlock,
  CheckCircle2,
  Compass,
  ArrowRight,
  ShieldCheck,
  Layers,
  Heart
} from 'lucide-react';
import ScoreGauge from '../components/ScoreGauge';
import OrbitalSphereComposition from '../components/OrbitalSphereComposition';

export default function Results({
  prediction,
  inputData,
  onRetakeAssessment,
  onGoHome,
  onGoInsights
}) {
  // Empty state if accessed without assessment
  if (prediction === null || prediction === undefined) {
    return (
      <div className="relative overflow-hidden min-h-[calc(100vh-140px)] flex items-center justify-center py-16 px-4">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-lavender-primary/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mint-accent/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-lg w-full text-center space-y-6 glass-card p-8 sm:p-12 shadow-glass border-white/90">
          <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-lavender-300/40 border-dashed animate-orbit-ring" />
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-lavender-soft to-mint-soft text-lavender-deep flex items-center justify-center shadow-soft">
              <Sparkles className="w-8 h-8 text-lavender-primary animate-pulse" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender-soft text-lavender-deep text-[11px] font-semibold border border-lavender-200">
              <Layers className="w-3.5 h-3.5" />
              <span>Assessment Required</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-surface-text">
              No Assessment Completed Yet
            </h2>
            <p className="text-xs sm:text-sm text-surface-muted max-w-sm mx-auto leading-relaxed">
              Please complete the 4-step assessment wizard to receive your personalized machine-learning mental wellness prediction.
            </p>
          </div>

          <button
            onClick={onRetakeAssessment}
            className="btn-primary text-xs px-7 py-3.5 inline-flex items-center gap-2 shadow-glow-lavender"
          >
            <span>Start Assessment Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  const score = Number(prediction);

  // Lifestyle comparison metrics from submitted data
  const sleepHours = inputData?.Sleep_Hours_Per_Night ?? 7;
  const screenHours = inputData?.Avg_Daily_Usage_Hours ?? 4;
  const studyHours = inputData?.Study_Hours ?? 3;
  const exerciseHours = inputData?.Physical_Activity_Hours ?? 1.5;

  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-140px)] py-10 px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Lavender & Mint Light Effects */}
      <div className="absolute top-6 left-1/4 w-[450px] h-[450px] bg-lavender-primary/15 rounded-full blur-[140px] pointer-events-none animate-glow-pulse" />
      <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-mint-accent/20 rounded-full blur-[130px] pointer-events-none animate-glow-pulse" />

      <div className="max-w-5xl mx-auto space-y-10 relative z-10 animate-fade-in">
        {/* Top Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-surface-border text-left">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-mint-soft border border-mint-200 text-mint-deep text-[11px] font-semibold shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Assessment Completed • Verified Machine Learning Inference</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-surface-text tracking-tight">
              Your Wellness Insights & Score
            </h1>
            <p className="text-xs sm:text-sm text-surface-muted max-w-xl leading-relaxed">
              Inferred by the trained Random Forest pipeline from your 12 submitted behavioral factors.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={onRetakeAssessment}
              className="btn-secondary px-4 py-2.5 text-xs flex items-center gap-1.5 shadow-2xs"
            >
              <RotateCcw className="w-3.5 h-3.5 text-lavender-primary" />
              <span>Retake Assessment</span>
            </button>
            <button
              onClick={onGoInsights}
              className="btn-primary px-4 py-2.5 text-xs flex items-center gap-1.5 shadow-soft"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Detailed Habits</span>
            </button>
          </div>
        </div>

        {/* Main Prediction & Gauge Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Score Gauge Card with Glowing 3D Orbital Spheres Backdrop */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[360px]">
            {/* Glowing 3D Orbital Ring System with 2 Floating Glass Spheres */}
            <OrbitalSphereComposition />

            <div className="w-full relative z-10">
              <ScoreGauge score={score} maxScore={10.0} />
            </div>
          </div>

          {/* Narrative & Lifestyle Balance Synthesis */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left relative overflow-hidden shadow-soft border-white/90">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-surface-border">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-lavender-deep bg-lavender-soft/80 px-2.5 py-0.5 rounded-full border border-lavender-200/60">
                  Statistical Score Synthesis
                </span>
                <span className="text-[11px] text-surface-muted font-mono flex items-center gap-1">
                  <Layers className="w-3 h-3 text-lavender-primary" />
                  Model: 200 Estimators
                </span>
              </div>

              <h2 className="text-2xl font-heading font-bold text-surface-text leading-snug">
                {score >= 7.0
                  ? 'Healthy Restorative & Behavioral Balance'
                  : score >= 5.5
                  ? 'Moderate Equilibrium with Habit Optimization Opportunities'
                  : 'Elevated Behavioral Strain Across Routine Dimensions'}
              </h2>

              <p className="text-xs sm:text-sm text-surface-muted leading-relaxed">
                Based on your assessment, your predicted Mental Health Score is{' '}
                <strong className="text-surface-text font-bold font-mono text-base">{score.toFixed(2)}</strong>{' '}
                on a continuous 10.0 scale. In our training dataset, higher scores strongly correlate with consistent sleep durations, daily active movement, and disciplined screen engagement.
              </p>

              {/* Quick Stat Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-surface-bg/80 border border-surface-border shadow-2xs">
                  <span className="text-[10px] font-semibold text-surface-muted block uppercase tracking-wider">
                    Sleep Hours
                  </span>
                  <span className="text-base font-heading font-bold text-surface-text font-mono mt-0.5 block">
                    {sleepHours}h
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-surface-bg/80 border border-surface-border shadow-2xs">
                  <span className="text-[10px] font-semibold text-surface-muted block uppercase tracking-wider">
                    Screen Time
                  </span>
                  <span className="text-base font-heading font-bold text-surface-text font-mono mt-0.5 block">
                    {screenHours}h
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-surface-bg/80 border border-surface-border shadow-2xs">
                  <span className="text-[10px] font-semibold text-surface-muted block uppercase tracking-wider">
                    Phone Unlocks
                  </span>
                  <span className="text-base font-heading font-bold text-surface-text font-mono mt-0.5 block">
                    {inputData?.Daily_Unlocks ?? 140}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-surface-bg/80 border border-surface-border shadow-2xs">
                  <span className="text-[10px] font-semibold text-surface-muted block uppercase tracking-wider">
                    Stress Level
                  </span>
                  <span className="text-base font-heading font-bold text-surface-text mt-0.5 block">
                    {inputData?.Stress_Level ?? 'Medium'}
                  </span>
                </div>
              </div>
            </div>

            {/* Gentle Wellness Information Notice */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-lavender-soft/70 to-mint-soft/70 border border-lavender-200/60 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-lavender-primary shrink-0 mt-0.5" />
              <p className="text-[11px] text-lavender-deep leading-relaxed">
                <strong>Reflective Insight:</strong> Maintaining adequate rest and establishing intentional limits around screen time support sustainable long-term emotional vitality.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Lifestyle Habits Summary (Real User Data) */}
        <div className="glass-card p-6 sm:p-8 space-y-6 text-left shadow-soft border-white/90">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-surface-border gap-2">
            <div>
              <h3 className="text-lg font-heading font-bold text-surface-text">
                Your Daily Time Allocation
              </h3>
              <p className="text-xs text-surface-muted">
                Visualizing the actual lifestyle hours you provided in your assessment
              </p>
            </div>
            <span className="text-[11px] text-surface-muted font-mono bg-surface-bg px-2.5 py-1 rounded-xl border border-surface-border self-start sm:self-auto">
              User-Provided Measurements
            </span>
          </div>

          {/* Horizontal Bar Visualizers */}
          <div className="space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-surface-text flex items-center gap-1.5">
                  <Moon className="w-3.5 h-3.5 text-lavender-primary" />
                  <span>Sleep Duration</span>
                </span>
                <span className="font-mono text-surface-muted font-semibold">{sleepHours} hrs / night</span>
              </div>
              <div className="h-3 rounded-full bg-surface-bg overflow-hidden border border-surface-border/70 p-0.5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-lavender-primary to-lavender-deep transition-all duration-700 ease-out"
                  style={{ width: `${Math.min(100, (sleepHours / 12) * 100)}%` }}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-surface-text flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-mint-deep" />
                  <span>Screen & Device Usage</span>
                </span>
                <span className="font-mono text-surface-muted font-semibold">{screenHours} hrs / day</span>
              </div>
              <div className="h-3 rounded-full bg-surface-bg overflow-hidden border border-surface-border/70 p-0.5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-mint-accent to-mint-deep transition-all duration-700 ease-out"
                  style={{ width: `${Math.min(100, (screenHours / 12) * 100)}%` }}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-surface-text flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-lavender-primary" />
                  <span>Study & Academic Focus</span>
                </span>
                <span className="font-mono text-surface-muted font-semibold">{studyHours} hrs / day</span>
              </div>
              <div className="h-3 rounded-full bg-surface-bg overflow-hidden border border-surface-border/70 p-0.5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-lavender-primary to-mint-accent transition-all duration-700 ease-out"
                  style={{ width: `${Math.min(100, (studyHours / 12) * 100)}%` }}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-surface-text flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-mint-deep" />
                  <span>Physical Activity</span>
                </span>
                <span className="font-mono text-surface-muted font-semibold">{exerciseHours} hrs / day</span>
              </div>
              <div className="h-3 rounded-full bg-surface-bg overflow-hidden border border-surface-border/70 p-0.5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-mint-accent to-lavender-deep transition-all duration-700 ease-out"
                  style={{ width: `${Math.min(100, (exerciseHours / 6) * 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submitted Parameters Verification Grid */}
        {inputData && (
          <div className="glass-card p-6 sm:p-8 space-y-4 text-left shadow-soft border-white/90">
            <div className="flex items-center justify-between pb-3 border-b border-surface-border">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-mint-deep" />
                <h3 className="text-sm font-heading font-bold text-surface-text">
                  All 12 Evaluation Features Processed by Scikit-Learn Model
                </h3>
              </div>
              <span className="text-[10px] text-mint-deep bg-mint-soft px-2.5 py-0.5 rounded-full font-semibold border border-mint-200">
                12 Features Verified
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-surface-muted">
              <div className="p-3 rounded-xl bg-surface-bg/80 border border-surface-border">
                <span className="block text-[10px] uppercase font-semibold text-surface-muted">Study Hours</span>
                <strong className="text-surface-text font-mono text-sm">{inputData.Study_Hours}h</strong>
              </div>
              <div className="p-3 rounded-xl bg-surface-bg/80 border border-surface-border">
                <span className="block text-[10px] uppercase font-semibold text-surface-muted">Screen Time</span>
                <strong className="text-surface-text font-mono text-sm">{inputData.Avg_Daily_Usage_Hours}h</strong>
              </div>
              <div className="p-3 rounded-xl bg-surface-bg/80 border border-surface-border">
                <span className="block text-[10px] uppercase font-semibold text-surface-muted">Daily Unlocks</span>
                <strong className="text-surface-text font-mono text-sm">{inputData.Daily_Unlocks}</strong>
              </div>
              <div className="p-3 rounded-xl bg-surface-bg/80 border border-surface-border">
                <span className="block text-[10px] uppercase font-semibold text-surface-muted">Exercise</span>
                <strong className="text-surface-text font-mono text-sm">{inputData.Physical_Activity_Hours}h</strong>
              </div>
              <div className="p-3 rounded-xl bg-surface-bg/80 border border-surface-border">
                <span className="block text-[10px] uppercase font-semibold text-surface-muted">Sleep</span>
                <strong className="text-surface-text font-mono text-sm">{inputData.Sleep_Hours_Per_Night}h</strong>
              </div>
              <div className="p-3 rounded-xl bg-surface-bg/80 border border-surface-border">
                <span className="block text-[10px] uppercase font-semibold text-surface-muted">Stress Level</span>
                <strong className="text-lavender-deep font-bold text-sm">{inputData.Stress_Level}</strong>
              </div>
              <div className="p-3 rounded-xl bg-surface-bg/80 border border-surface-border">
                <span className="block text-[10px] uppercase font-semibold text-surface-muted">Social Platform</span>
                <strong className="text-surface-text text-sm truncate block">{inputData.Most_Used_Platform}</strong>
              </div>
              <div className="p-3 rounded-xl bg-surface-bg/80 border border-surface-border">
                <span className="block text-[10px] uppercase font-semibold text-surface-muted">Usage Purpose</span>
                <strong className="text-surface-text text-sm truncate block">{inputData.Purpose_Of_Use}</strong>
              </div>
              <div className="p-3 rounded-xl bg-surface-bg/80 border border-surface-border">
                <span className="block text-[10px] uppercase font-semibold text-surface-muted">Age</span>
                <strong className="text-surface-text font-mono text-sm">{inputData.Age} yrs</strong>
              </div>
              <div className="p-3 rounded-xl bg-surface-bg/80 border border-surface-border">
                <span className="block text-[10px] uppercase font-semibold text-surface-muted">Gender</span>
                <strong className="text-surface-text text-sm">{inputData.Gender}</strong>
              </div>
              <div className="p-3 rounded-xl bg-surface-bg/80 border border-surface-border">
                <span className="block text-[10px] uppercase font-semibold text-surface-muted">Academic Level</span>
                <strong className="text-surface-text text-sm">{inputData.Academic_Level}</strong>
              </div>
              <div className="p-3 rounded-xl bg-surface-bg/80 border border-surface-border">
                <span className="block text-[10px] uppercase font-semibold text-surface-muted">Country Cluster</span>
                <strong className="text-surface-text text-sm truncate block">{inputData.Grouped_Country}</strong>
              </div>
            </div>
          </div>
        )}

        {/* Medical Disclaimer Callout */}
        <div className="p-4 rounded-2xl bg-white/80 border border-surface-border text-center text-xs text-surface-muted max-w-2xl mx-auto shadow-2xs">
          <p>
            <strong className="text-surface-text font-semibold">AuraMind Notice:</strong> AuraMind provides educational, machine-learning-based estimates and is not a medical diagnosis or a substitute for clinical psychological care.
          </p>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={onRetakeAssessment}
            className="btn-secondary px-6 py-3.5 text-xs w-full sm:w-auto shadow-2xs"
          >
            Take Another Assessment
          </button>
          <button
            onClick={onGoHome}
            className="btn-secondary px-6 py-3.5 text-xs w-full sm:w-auto shadow-2xs"
          >
            Back to Home
          </button>
          <button
            onClick={onGoInsights}
            className="btn-primary px-7 py-3.5 text-xs w-full sm:w-auto flex items-center justify-center gap-2 shadow-glow-lavender"
          >
            <span>Explore Habits & Insights</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
