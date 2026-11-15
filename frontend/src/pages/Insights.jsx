import React from 'react';
import {
  Compass,
  Sparkles,
  BookOpen,
  Smartphone,
  Activity,
  Moon,
  Unlock,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  RotateCcw,
  Clock,
  Layers,
  Heart,
  BarChart3,
  CheckCircle2
} from 'lucide-react';
import NeuralOrbComposition from '../components/NeuralOrbComposition';

export default function Insights({ prediction, inputData, onStartAssessment }) {
  // Empty state if user arrives before completing an assessment
  if (!inputData || prediction === null || prediction === undefined) {
    return (
      <div className="relative overflow-hidden min-h-[calc(100vh-140px)] flex items-center justify-center py-16 px-4">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-lavender-primary/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mint-accent/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-lg w-full text-center space-y-6 glass-card p-8 sm:p-12 shadow-glass border-white/90">
          {/* 3D Analytics Orb Preview Stage */}
          <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
            <NeuralOrbComposition />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender-soft text-lavender-deep text-[11px] font-semibold border border-lavender-200">
              <Compass className="w-3.5 h-3.5 text-lavender-primary" />
              <span>Awaiting Behavioral Profile</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-surface-text">
              No Active Assessment Data
            </h2>
            <p className="text-xs sm:text-sm text-surface-muted max-w-sm mx-auto leading-relaxed">
              The Insights dashboard visualizes habit allocations derived from your 12 assessment inputs. Complete the assessment wizard to inspect your daily lifestyle distributions.
            </p>
          </div>

          <button
            onClick={onStartAssessment}
            className="btn-primary text-xs px-7 py-3.5 inline-flex items-center gap-2 shadow-glow-lavender"
          >
            <span>Begin Assessment Wizard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  const score = Number(prediction);
  const sleepHours = Number(inputData.Sleep_Hours_Per_Night) || 0;
  const screenHours = Number(inputData.Avg_Daily_Usage_Hours) || 0;
  const studyHours = Number(inputData.Study_Hours) || 0;
  const exerciseHours = Number(inputData.Physical_Activity_Hours) || 0;

  // Calculate actual ratios from user input
  const totalRecordedHours = sleepHours + screenHours + studyHours + exerciseHours;
  const sleepPercentage = totalRecordedHours > 0 ? Math.round((sleepHours / totalRecordedHours) * 100) : 0;
  const screenPercentage = totalRecordedHours > 0 ? Math.round((screenHours / totalRecordedHours) * 100) : 0;
  const studyPercentage = totalRecordedHours > 0 ? Math.round((studyHours / totalRecordedHours) * 100) : 0;
  const exercisePercentage = totalRecordedHours > 0 ? Math.round((exerciseHours / totalRecordedHours) * 100) : 0;

  return (
    <div className="relative overflow-hidden min-h-[calc(100vh-140px)] py-10 px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-0 right-10 w-[450px] h-[450px] bg-gradient-to-br from-lavender-primary/15 via-lavender-soft/25 to-mint-accent/20 rounded-full blur-[130px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-12 left-10 w-[400px] h-[400px] bg-mint-accent/15 rounded-full blur-[120px] pointer-events-none animate-glow-pulse" />

      <div className="max-w-5xl mx-auto space-y-9 text-left relative z-10 animate-fade-in">
        {/* PROMINENT INSIGHTS HERO SECTION */}
        <div className="glass-card p-6 sm:p-10 relative overflow-hidden shadow-soft border-white/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Headline & Metadata */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lavender-soft/80 border border-lavender-200 text-lavender-deep text-xs font-semibold shadow-2xs">
                <Compass className="w-3.5 h-3.5 text-lavender-primary" />
                <span>Behavioral Analytics • Scikit-Learn Model</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-surface-text tracking-tight leading-[1.15]">
                Habit Allocation & Lifestyle Balance
              </h1>

              <p className="text-xs sm:text-sm text-surface-muted leading-relaxed">
                Analyzing your actual recorded routine dimensions alongside established wellness literature. All proportions and metrics are computed strictly from your submitted assessment inputs.
              </p>

              {/* Quick Metadata Stats */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-surface-bg/80 border border-surface-border">
                  <span className="text-[10px] uppercase font-semibold text-surface-muted block">Model Score</span>
                  <strong className="text-base font-heading font-extrabold text-surface-text font-mono">
                    {score.toFixed(2)}
                  </strong>
                </div>
                <div className="p-3 rounded-2xl bg-surface-bg/80 border border-surface-border">
                  <span className="text-[10px] uppercase font-semibold text-surface-muted block">Recorded Day</span>
                  <strong className="text-base font-heading font-extrabold text-surface-text font-mono">
                    {totalRecordedHours.toFixed(1)}h
                  </strong>
                </div>
                <div className="p-3 rounded-2xl bg-surface-bg/80 border border-surface-border">
                  <span className="text-[10px] uppercase font-semibold text-surface-muted block">Stress Level</span>
                  <strong className="text-base font-heading font-extrabold text-lavender-deep">
                    {inputData.Stress_Level || 'Standard'}
                  </strong>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Connected Node Sculpture & Analytics Orb */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <NeuralOrbComposition />
            </div>
          </div>
        </div>

        {/* 1 PROMINENT INSIGHTS CARD: Stacked Proportional Bar Visualizer */}
        <div className="glass-card p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-soft border-white/90">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-surface-border gap-2">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-lavender-deep bg-lavender-soft/80 px-2.5 py-0.5 rounded-full border border-lavender-200/60">
                  Daily Proportions
                </span>
                <span className="text-xs font-mono text-surface-muted">
                  {totalRecordedHours.toFixed(1)} Total Tracked Hours
                </span>
              </div>
              <h3 className="text-xl font-heading font-bold text-surface-text">
                Relative Distribution of Daily Behavioral Hours
              </h3>
              <p className="text-xs text-surface-muted">
                Calculated strictly from your submitted sleep, screen, study, and physical exercise metrics.
              </p>
            </div>
            <span className="text-[11px] text-mint-deep bg-mint-soft px-3 py-1 rounded-full font-semibold border border-mint-200 self-start sm:self-auto shrink-0">
              Verified Input Data
            </span>
          </div>

          {/* Stacked Proportional Bar */}
          <div className="space-y-3 pt-1">
            <div className="h-6 w-full rounded-2xl overflow-hidden flex bg-surface-bg border border-surface-border p-0.5 shadow-inner">
              <div
                style={{ width: `${sleepPercentage}%` }}
                className="bg-gradient-to-r from-lavender-primary to-lavender-deep h-full rounded-l-xl transition-all duration-700 ease-out"
                title={`Sleep: ${sleepHours}h (${sleepPercentage}%)`}
              />
              <div
                style={{ width: `${screenPercentage}%` }}
                className="bg-gradient-to-r from-mint-accent to-mint-deep h-full transition-all duration-700 ease-out"
                title={`Screen: ${screenHours}h (${screenPercentage}%)`}
              />
              <div
                style={{ width: `${studyPercentage}%` }}
                className="bg-gradient-to-r from-lavender-deep to-lavender-400 h-full transition-all duration-700 ease-out"
                title={`Study: ${studyHours}h (${studyPercentage}%)`}
              />
              <div
                style={{ width: `${exercisePercentage}%` }}
                className="bg-gradient-to-r from-teal-500 to-mint-deep h-full rounded-r-xl transition-all duration-700 ease-out"
                title={`Exercise: ${exerciseHours}h (${exercisePercentage}%)`}
              />
            </div>

            {/* Legend & Exact Proportions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
              <div className="p-3.5 rounded-2xl bg-surface-bg/80 border border-surface-border flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-lg bg-lavender-primary shrink-0 shadow-2xs" />
                <div>
                  <span className="text-[10px] text-surface-muted uppercase block font-medium">Sleep</span>
                  <span className="font-semibold text-surface-text">{sleepPercentage}% <span className="font-normal text-surface-muted font-mono">({sleepHours}h)</span></span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-surface-bg/80 border border-surface-border flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-lg bg-mint-accent shrink-0 shadow-2xs" />
                <div>
                  <span className="text-[10px] text-surface-muted uppercase block font-medium">Screen Time</span>
                  <span className="font-semibold text-surface-text">{screenPercentage}% <span className="font-normal text-surface-muted font-mono">({screenHours}h)</span></span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-surface-bg/80 border border-surface-border flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-lg bg-lavender-deep shrink-0 shadow-2xs" />
                <div>
                  <span className="text-[10px] text-surface-muted uppercase block font-medium">Study Focus</span>
                  <span className="font-semibold text-surface-text">{studyPercentage}% <span className="font-normal text-surface-muted font-mono">({studyHours}h)</span></span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-surface-bg/80 border border-surface-border flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-lg bg-mint-deep shrink-0 shadow-2xs" />
                <div>
                  <span className="text-[10px] text-surface-muted uppercase block font-medium">Exercise</span>
                  <span className="font-semibold text-surface-text">{exercisePercentage}% <span className="font-normal text-surface-muted font-mono">({exerciseHours}h)</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* REFINED LIFESTYLE METRIC CARDS (4 Dimensions) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Sleep */}
          <div className="glass-card p-6 sm:p-7 space-y-3.5 relative overflow-hidden group hover:border-lavender-200 transition-all shadow-soft border-white/90">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-lavender-soft text-lavender-deep flex items-center justify-center shadow-2xs">
                <Moon className="w-5 h-5 text-lavender-primary" />
              </div>
              <span className="text-xs font-mono font-bold text-surface-text bg-surface-bg px-2.5 py-1 rounded-xl border border-surface-border">
                {sleepHours} hrs/night
              </span>
            </div>
            <div>
              <h3 className="text-base font-heading font-bold text-surface-text">
                Sleep Duration & Restorative Recovery
              </h3>
              <p className="text-xs text-surface-muted leading-relaxed mt-1">
                In behavioral wellness research, sleeping between 7 and 9 hours per night supports cellular repair, emotion regulation, and academic resilience. Your submitted schedule accounts for <strong>{sleepHours} hours</strong> of nightly rest.
              </p>
            </div>
          </div>

          {/* Card 2: Phone Unlocks & Fragmentation */}
          <div className="glass-card p-6 sm:p-7 space-y-3.5 relative overflow-hidden group hover:border-mint-200 transition-all shadow-soft border-white/90">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-mint-soft text-mint-deep flex items-center justify-center shadow-2xs">
                <Unlock className="w-5 h-5 text-mint-deep" />
              </div>
              <span className="text-xs font-mono font-bold text-surface-text bg-surface-bg px-2.5 py-1 rounded-xl border border-surface-border">
                {inputData.Daily_Unlocks} unlocks/day
              </span>
            </div>
            <div>
              <h3 className="text-base font-heading font-bold text-surface-text">
                Digital Fragmentation & Attentional Shifts
              </h3>
              <p className="text-xs text-surface-muted leading-relaxed mt-1">
                Frequent unlocks introduce micro-interruptions that fragment sustained focus and elevate cognitive overhead. You recorded <strong>{inputData.Daily_Unlocks} unlocks daily</strong> alongside <strong>{screenHours} hours</strong> of daily screen usage.
              </p>
            </div>
          </div>

          {/* Card 3: Physical Activity Buffer */}
          <div className="glass-card p-6 sm:p-7 space-y-3.5 relative overflow-hidden group hover:border-mint-200 transition-all shadow-soft border-white/90">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-mint-soft text-mint-deep flex items-center justify-center shadow-2xs">
                <Activity className="w-5 h-5 text-mint-deep" />
              </div>
              <span className="text-xs font-mono font-bold text-surface-text bg-surface-bg px-2.5 py-1 rounded-xl border border-surface-border">
                {exerciseHours} hrs/day
              </span>
            </div>
            <div>
              <h3 className="text-base font-heading font-bold text-surface-text">
                Physical Movement as a Resilience Buffer
              </h3>
              <p className="text-xs text-surface-muted leading-relaxed mt-1">
                Daily moderate movement acts as a physiological buffer against fatigue and perceived stress. Your submitted routine includes <strong>{exerciseHours} hours</strong> of daily exercise.
              </p>
            </div>
          </div>

          {/* Card 4: Purposeful Engagement */}
          <div className="glass-card p-6 sm:p-7 space-y-3.5 relative overflow-hidden group hover:border-lavender-200 transition-all shadow-soft border-white/90">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-lavender-soft text-lavender-deep flex items-center justify-center shadow-2xs">
                <BookOpen className="w-5 h-5 text-lavender-primary" />
              </div>
              <span className="text-xs font-heading font-semibold text-surface-text bg-surface-bg px-2.5 py-1 rounded-xl border border-surface-border truncate max-w-[150px]">
                {inputData.Most_Used_Platform}
              </span>
            </div>
            <div>
              <h3 className="text-base font-heading font-bold text-surface-text">
                Academic Dedication & Platform Purpose
              </h3>
              <p className="text-xs text-surface-muted leading-relaxed mt-1">
                Engaging primarily for <strong>{inputData.Purpose_Of_Use}</strong> on <strong>{inputData.Most_Used_Platform}</strong> with <strong>{studyHours} hours</strong> of study maintains deliberate alignment between academic responsibilities and digital leisure.
              </p>
            </div>
          </div>
        </div>

        {/* RETAKE / SIMULATION CTA BANNER */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-lavender-soft/80 via-white to-mint-soft/80 border border-surface-border text-center space-y-4 shadow-soft relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-40 h-40 bg-lavender-primary/10 rounded-full blur-2xl pointer-events-none" />

          <h3 className="text-xl sm:text-2xl font-heading font-bold text-surface-text">
            Simulate routine adjustments in the assessment wizard
          </h3>
          <p className="text-xs sm:text-sm text-surface-muted max-w-md mx-auto leading-relaxed">
            Modify your sleep hours, screen time, or daily unlocks to observe how the trained Random Forest model's prediction responds.
          </p>
          <button
            onClick={onStartAssessment}
            className="btn-primary text-xs px-7 py-3.5 inline-flex items-center gap-2 shadow-glow-lavender"
          >
            <span>Retake Assessment Wizard</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
