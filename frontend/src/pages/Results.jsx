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
  ShieldAlert
} from 'lucide-react';
import ScoreGauge from '../components/ScoreGauge';

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
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 rounded-3xl bg-lavender-soft text-lavender-deep flex items-center justify-center mx-auto shadow-soft">
          <Sparkles className="w-8 h-8 text-lavender-primary" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-heading font-bold text-surface-text">
            No Assessment Completed Yet
          </h2>
          <p className="text-xs text-surface-muted max-w-sm mx-auto leading-relaxed">
            Please complete the 4-step assessment wizard to receive your personalized machine-learning wellness score.
          </p>
        </div>
        <button
          onClick={onRetakeAssessment}
          className="btn-primary text-xs px-6 py-3"
        >
          Start Assessment Now
        </button>
      </div>
    );
  }

  const score = Number(prediction);

  // Lifestyle comparison metrics
  const sleepHours = inputData?.Sleep_Hours_Per_Night ?? 7;
  const screenHours = inputData?.Avg_Daily_Usage_Hours ?? 4;
  const studyHours = inputData?.Study_Hours ?? 3;
  const exerciseHours = inputData?.Physical_Activity_Hours ?? 1.5;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Top Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-surface-border text-left">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint-soft border border-mint-200 text-mint-deep text-[11px] font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Assessment Completed • Verified Machine Learning Inference</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-surface-text tracking-tight">
            Your Wellness Insights
          </h1>
          <p className="text-xs text-surface-muted">
            Computed by the AuraMind Random Forest pipeline using your 12 submitted behavioral factors.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onRetakeAssessment}
            className="btn-secondary px-4 py-2.5 text-xs flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5 text-lavender-primary" />
            <span>Retake Assessment</span>
          </button>
          <button
            onClick={onGoInsights}
            className="btn-primary px-4 py-2.5 text-xs flex items-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Detailed Habits</span>
          </button>
        </div>
      </div>

      {/* Main Prediction & Gauge Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Score Gauge Card */}
        <div className="lg:col-span-5">
          <ScoreGauge score={score} maxScore={10.0} />
        </div>

        {/* Narrative & Lifestyle Balance Synthesis */}
        <div className="lg:col-span-7 glass-card p-6 sm:p-8 flex flex-col justify-between space-y-6 text-left">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-surface-border">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-lavender-deep">
                Statistical Score Synthesis
              </span>
              <span className="text-[11px] text-surface-muted font-mono">
                Model: 200 Estimators
              </span>
            </div>

            <h2 className="text-2xl font-heading font-bold text-surface-text">
              {score >= 7.0
                ? 'Healthy Restorative & Behavioral Balance'
                : score >= 5.5
                ? 'Moderate Equilibrium with Habit Optimization Opportunities'
                : 'Elevated Behavioral Strain Across Routine Dimensions'}
            </h2>

            <p className="text-xs sm:text-sm text-surface-muted leading-relaxed">
              Based on your assessment, your predicted Mental Health Score is{' '}
              <strong className="text-surface-text font-bold font-mono">{score.toFixed(2)}</strong>{' '}
              on a 10.0 scale. In our trained dataset, higher scores strongly correlate with consistent sleep durations, daily active movement, and disciplined screen engagement.
            </p>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-surface-bg border border-surface-border">
                <span className="text-[10px] font-semibold text-surface-muted block uppercase">
                  Sleep Hours
                </span>
                <span className="text-base font-heading font-bold text-surface-text font-mono">
                  {sleepHours}h
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-surface-bg border border-surface-border">
                <span className="text-[10px] font-semibold text-surface-muted block uppercase">
                  Screen Time
                </span>
                <span className="text-base font-heading font-bold text-surface-text font-mono">
                  {screenHours}h
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-surface-bg border border-surface-border">
                <span className="text-[10px] font-semibold text-surface-muted block uppercase">
                  Phone Unlocks
                </span>
                <span className="text-base font-heading font-bold text-surface-text font-mono">
                  {inputData?.Daily_Unlocks ?? 140}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-surface-bg border border-surface-border">
                <span className="text-[10px] font-semibold text-surface-muted block uppercase">
                  Stress Level
                </span>
                <span className="text-base font-heading font-bold text-surface-text">
                  {inputData?.Stress_Level ?? 'Medium'}
                </span>
              </div>
            </div>
          </div>

          {/* Gentle Wellness Information Notice */}
          <div className="p-4 rounded-2xl bg-lavender-soft/60 border border-lavender-200/60 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-lavender-primary shrink-0 mt-0.5" />
            <p className="text-[11px] text-lavender-deep leading-relaxed">
              <strong>Reflective Insight:</strong> Maintaining adequate rest and establishing intentional limits around screen time support sustainable long-term emotional vitality.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Lifestyle Habits Summary (Real User Data) */}
      <div className="glass-card p-6 sm:p-8 space-y-6 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-surface-border gap-2">
          <div>
            <h3 className="text-lg font-heading font-bold text-surface-text">
              Your Daily Time Allocation
            </h3>
            <p className="text-xs text-surface-muted">
              Visualizing the actual lifestyle hours you provided in your assessment
            </p>
          </div>
          <span className="text-[11px] text-surface-muted font-mono">
            User-Provided Measurements
          </span>
        </div>

        {/* Horizontal Bar Visualizer */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-surface-text flex items-center gap-1.5">
                <Moon className="w-3.5 h-3.5 text-lavender-primary" />
                Sleep Duration
              </span>
              <span className="font-mono text-surface-muted">{sleepHours} hrs / night</span>
            </div>
            <div className="h-2.5 rounded-full bg-surface-bg overflow-hidden border border-surface-border/60">
              <div
                className="h-full rounded-full bg-gradient-to-r from-lavender-primary to-lavender-deep"
                style={{ width: `${Math.min(100, (sleepHours / 12) * 100)}%` }}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-surface-text flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-mint-deep" />
                Screen & Device Usage
              </span>
              <span className="font-mono text-surface-muted">{screenHours} hrs / day</span>
            </div>
            <div className="h-2.5 rounded-full bg-surface-bg overflow-hidden border border-surface-border/60">
              <div
                className="h-full rounded-full bg-gradient-to-r from-mint-accent to-mint-deep"
                style={{ width: `${Math.min(100, (screenHours / 12) * 100)}%` }}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-surface-text flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-lavender-primary" />
                Study & Academic Focus
              </span>
              <span className="font-mono text-surface-muted">{studyHours} hrs / day</span>
            </div>
            <div className="h-2.5 rounded-full bg-surface-bg overflow-hidden border border-surface-border/60">
              <div
                className="h-full rounded-full bg-gradient-to-r from-lavender-primary to-mint-accent"
                style={{ width: `${Math.min(100, (studyHours / 12) * 100)}%` }}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-surface-text flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-mint-deep" />
                Physical Activity
              </span>
              <span className="font-mono text-surface-muted">{exerciseHours} hrs / day</span>
            </div>
            <div className="h-2.5 rounded-full bg-surface-bg overflow-hidden border border-surface-border/60">
              <div
                className="h-full rounded-full bg-gradient-to-r from-mint-accent to-lavender-deep"
                style={{ width: `${Math.min(100, (exerciseHours / 6) * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submitted Parameters Verification Grid */}
      {inputData && (
        <div className="glass-card p-6 sm:p-8 space-y-4 text-left">
          <div className="flex items-center justify-between pb-3 border-b border-surface-border">
            <h3 className="text-sm font-heading font-bold text-surface-text">
              12 Evaluation Features Submitted to Model
            </h3>
            <span className="text-[10px] text-mint-deep bg-mint-soft px-2 py-0.5 rounded-full font-semibold">
              Processed by Scikit-Learn
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-surface-muted">
            <div className="p-2.5 rounded-xl bg-surface-bg">Study: <strong className="text-surface-text font-mono">{inputData.Study_Hours}h</strong></div>
            <div className="p-2.5 rounded-xl bg-surface-bg">Screen Time: <strong className="text-surface-text font-mono">{inputData.Avg_Daily_Usage_Hours}h</strong></div>
            <div className="p-2.5 rounded-xl bg-surface-bg">Unlocks: <strong className="text-surface-text font-mono">{inputData.Daily_Unlocks}</strong></div>
            <div className="p-2.5 rounded-xl bg-surface-bg">Exercise: <strong className="text-surface-text font-mono">{inputData.Physical_Activity_Hours}h</strong></div>
            <div className="p-2.5 rounded-xl bg-surface-bg">Sleep: <strong className="text-surface-text font-mono">{inputData.Sleep_Hours_Per_Night}h</strong></div>
            <div className="p-2.5 rounded-xl bg-surface-bg">Stress: <strong className="text-surface-text">{inputData.Stress_Level}</strong></div>
            <div className="p-2.5 rounded-xl bg-surface-bg">Platform: <strong className="text-surface-text">{inputData.Most_Used_Platform}</strong></div>
            <div className="p-2.5 rounded-xl bg-surface-bg">Purpose: <strong className="text-surface-text">{inputData.Purpose_Of_Use}</strong></div>
            <div className="p-2.5 rounded-xl bg-surface-bg">Age: <strong className="text-surface-text font-mono">{inputData.Age}</strong></div>
            <div className="p-2.5 rounded-xl bg-surface-bg">Gender: <strong className="text-surface-text">{inputData.Gender}</strong></div>
            <div className="p-2.5 rounded-xl bg-surface-bg">Academic: <strong className="text-surface-text">{inputData.Academic_Level}</strong></div>
            <div className="p-2.5 rounded-xl bg-surface-bg">Country: <strong className="text-surface-text">{inputData.Grouped_Country}</strong></div>
          </div>
        </div>
      )}

      {/* Medical Disclaimer Callout */}
      <div className="p-4 rounded-2xl bg-white border border-surface-border text-center text-xs text-surface-muted max-w-2xl mx-auto">
        <p>
          <strong className="text-surface-text">AuraMind Notice:</strong> AuraMind provides educational, machine-learning-based estimates and is not a medical diagnosis or a substitute for professional care.
        </p>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          onClick={onRetakeAssessment}
          className="btn-secondary px-6 py-3 text-xs w-full sm:w-auto"
        >
          Take Another Assessment
        </button>
        <button
          onClick={onGoHome}
          className="btn-secondary px-6 py-3 text-xs w-full sm:w-auto"
        >
          Back to Home
        </button>
        <button
          onClick={onGoInsights}
          className="btn-primary px-6 py-3 text-xs w-full sm:w-auto flex items-center justify-center gap-1.5"
        >
          <span>Explore Habits & Insights</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
