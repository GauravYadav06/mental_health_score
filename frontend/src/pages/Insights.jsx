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
  Brain,
  RotateCcw
} from 'lucide-react';

export default function Insights({ prediction, inputData, onStartAssessment }) {
  // Empty state if user arrives before completing an assessment
  if (!inputData || prediction === null) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-mint-soft text-mint-deep flex items-center justify-center mx-auto shadow-soft">
          <Compass className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-heading font-bold text-surface-text">
            No Active Assessment Data
          </h2>
          <p className="text-xs text-surface-muted max-w-sm mx-auto leading-relaxed">
            The Insights dashboard visualizes metrics derived from your assessment. Complete the assessment wizard to inspect your habit allocations.
          </p>
        </div>
        <button
          onClick={onStartAssessment}
          className="btn-primary text-xs px-6 py-3"
        >
          Begin Assessment
        </button>
      </div>
    );
  }

  const score = Number(prediction);
  const sleepHours = Number(inputData.Sleep_Hours_Per_Night);
  const screenHours = Number(inputData.Avg_Daily_Usage_Hours);
  const studyHours = Number(inputData.Study_Hours);
  const exerciseHours = Number(inputData.Physical_Activity_Hours);

  // Calculate actual ratios from user input
  const totalRecordedHours = sleepHours + screenHours + studyHours + exerciseHours;
  const sleepPercentage = totalRecordedHours > 0 ? Math.round((sleepHours / totalRecordedHours) * 100) : 0;
  const screenPercentage = totalRecordedHours > 0 ? Math.round((screenHours / totalRecordedHours) * 100) : 0;
  const studyPercentage = totalRecordedHours > 0 ? Math.round((studyHours / totalRecordedHours) * 100) : 0;
  const exercisePercentage = totalRecordedHours > 0 ? Math.round((exerciseHours / totalRecordedHours) * 100) : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 text-left">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-surface-border">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender-soft border border-lavender-200 text-lavender-deep text-[11px] font-semibold">
            <Compass className="w-3.5 h-3.5 text-lavender-primary" />
            <span>Behavioral Habit Insights</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-surface-text tracking-tight">
            Habit Breakdown & Education
          </h1>
          <p className="text-xs text-surface-muted">
            Analyzing your reported inputs alongside scientific wellness context.
          </p>
        </div>

        <button
          onClick={onStartAssessment}
          className="btn-secondary px-4 py-2.5 text-xs flex items-center gap-1.5 self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5 text-lavender-primary" />
          <span>New Assessment</span>
        </button>
      </div>

      {/* Habit Time Distribution (Real Data) */}
      <div className="glass-card p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-surface-border">
          <div>
            <h3 className="text-lg font-heading font-bold text-surface-text">
              Relative Allocation of Recorded Daily Hours
            </h3>
            <p className="text-xs text-surface-muted">
              Proportion of your day accounted for by sleep, screen time, study, and exercise ({totalRecordedHours.toFixed(1)} recorded hours total)
            </p>
          </div>
          <span className="text-[10px] text-lavender-deep bg-lavender-soft px-2.5 py-0.5 rounded-full font-semibold">
            Real Input Breakdown
          </span>
        </div>

        {/* Stacked Proportional Bar */}
        <div className="space-y-2">
          <div className="h-5 w-full rounded-full overflow-hidden flex bg-surface-bg border border-surface-border">
            <div
              style={{ width: `${sleepPercentage}%` }}
              className="bg-lavender-primary h-full transition-all"
              title={`Sleep: ${sleepHours}h (${sleepPercentage}%)`}
            />
            <div
              style={{ width: `${screenPercentage}%` }}
              className="bg-mint-accent h-full transition-all"
              title={`Screen: ${screenHours}h (${screenPercentage}%)`}
            />
            <div
              style={{ width: `${studyPercentage}%` }}
              className="bg-lavender-deep h-full transition-all"
              title={`Study: ${studyHours}h (${studyPercentage}%)`}
            />
            <div
              style={{ width: `${exercisePercentage}%` }}
              className="bg-mint-deep h-full transition-all"
              title={`Exercise: ${exerciseHours}h (${exercisePercentage}%)`}
            />
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-md bg-lavender-primary shrink-0" />
              <span>Sleep: <strong>{sleepPercentage}%</strong> ({sleepHours}h)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-md bg-mint-accent shrink-0" />
              <span>Screen: <strong>{screenPercentage}%</strong> ({screenHours}h)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-md bg-lavender-deep shrink-0" />
              <span>Study: <strong>{studyPercentage}%</strong> ({studyHours}h)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-md bg-mint-deep shrink-0" />
              <span>Exercise: <strong>{exercisePercentage}%</strong> ({exerciseHours}h)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Habit Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6 space-y-3">
          <div className="w-9 h-9 rounded-xl bg-lavender-soft text-lavender-deep flex items-center justify-center">
            <Moon className="w-5 h-5" />
          </div>
          <h3 className="text-base font-heading font-bold text-surface-text">
            Sleep Duration & Recovery
          </h3>
          <p className="text-xs text-surface-muted leading-relaxed">
            In wellness research, sleeping between 7 and 9 hours per night strongly correlates with cellular repair, emotional regulation, and academic focus. Your submitted sleep is <strong>{sleepHours} hours</strong>.
          </p>
        </div>

        <div className="glass-card p-6 space-y-3">
          <div className="w-9 h-9 rounded-xl bg-mint-soft text-mint-deep flex items-center justify-center">
            <Unlock className="w-5 h-5" />
          </div>
          <h3 className="text-base font-heading font-bold text-surface-text">
            Digital Fragmentation & Phone Unlocks
          </h3>
          <p className="text-xs text-surface-muted leading-relaxed">
            Frequent unlocks (reported at <strong>{inputData.Daily_Unlocks} unlocks</strong> daily) introduce micro-interruptions that fracture concentration and increase baseline cognitive friction.
          </p>
        </div>

        <div className="glass-card p-6 space-y-3">
          <div className="w-9 h-9 rounded-xl bg-mint-soft text-mint-deep flex items-center justify-center">
            <Activity className="w-5 h-5" />
          </div>
          <h3 className="text-base font-heading font-bold text-surface-text">
            Physical Activity as a Buffer
          </h3>
          <p className="text-xs text-surface-muted leading-relaxed">
            Daily moderate physical activity (reported at <strong>{exerciseHours} hours</strong>) serves as an effective buffer against study-induced fatigue and perceived stress levels.
          </p>
        </div>

        <div className="glass-card p-6 space-y-3">
          <div className="w-9 h-9 rounded-xl bg-lavender-soft text-lavender-deep flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-base font-heading font-bold text-surface-text">
            Balanced Study & Purposeful Engagement
          </h3>
          <p className="text-xs text-surface-muted leading-relaxed">
            Using social media for <strong>{inputData.Purpose_Of_Use}</strong> on <strong>{inputData.Most_Used_Platform}</strong> with structured rest periods helps prevent digital burnout.
          </p>
        </div>
      </div>

      {/* Re-assessment Prompt */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-lavender-soft/60 via-white to-mint-soft/60 border border-surface-border text-center space-y-4">
        <h3 className="text-xl font-heading font-bold text-surface-text">
          Want to test how adjusting your daily routine changes your score?
        </h3>
        <p className="text-xs text-surface-muted max-w-md mx-auto">
          Simulate modifying your daily sleep duration or screen time in the assessment wizard to see the model's response.
        </p>
        <button
          onClick={onStartAssessment}
          className="btn-primary text-xs px-6 py-3 inline-flex items-center gap-1.5"
        >
          <span>Retake Assessment Wizard</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
