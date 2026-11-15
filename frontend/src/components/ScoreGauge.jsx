import React from 'react';
import { Sparkles, Activity } from 'lucide-react';

export default function ScoreGauge({ score = 6.5, maxScore = 10.0 }) {
  // Normalize score between 0 and 10
  const numericScore = Number(score) || 0;
  const clampedScore = Math.max(0, Math.min(10, numericScore));
  const percentage = (clampedScore / maxScore) * 100;

  // Arc calculation for SVG gauge (260 degree arc)
  const radius = 102;
  const circumference = 2 * Math.PI * radius;
  const arcLength = circumference * 0.74;
  const strokeDashoffset = arcLength - (arcLength * percentage) / 100;

  // Non-diagnostic, statistical context based on the 10-point scale
  let contextualNote = 'Balanced Behavioral Indicator';
  let badgeStyle = 'bg-lavender-soft text-lavender-deep border-lavender-200';

  if (clampedScore >= 7.2) {
    contextualNote = 'Higher Well-being Affinity';
    badgeStyle = 'bg-mint-soft text-mint-deep border-mint-200';
  } else if (clampedScore <= 5.2) {
    contextualNote = 'Elevated Strain Affinity';
    badgeStyle = 'bg-amber-50 text-amber-700 border-amber-200';
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 sm:p-9 glass-card relative overflow-hidden shadow-soft border-white/90">
      {/* Background Ambient Radial Glow */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-lavender-primary/20 via-white/80 to-mint-accent/25 blur-2xl opacity-80 pointer-events-none" />

      {/* Decorative Outer Concentric Orbital Track */}
      <div className="absolute w-[310px] h-[310px] rounded-full border border-lavender-300/35 border-dashed animate-orbit-ring pointer-events-none" />
      <div className="absolute w-[265px] h-[265px] rounded-full border border-mint-300/40 border-t-transparent border-b-transparent animate-orbit-ring-rev pointer-events-none" />

      <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center z-10">
        {/* SVG Circular Gauge with Lavender to Mint Gradient */}
        <svg className="w-full h-full transform -rotate-135" viewBox="0 0 250 250">
          <defs>
            <linearGradient id="auramindScoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B7CF6" />
              <stop offset="50%" stopColor="#6757D6" />
              <stop offset="100%" stopColor="#7EDCC3" />
            </linearGradient>
            <filter id="scoreBloom" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Track Arc */}
          <circle
            cx="125"
            cy="125"
            r={radius}
            fill="transparent"
            stroke="#F1EEFF"
            strokeWidth="15"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeLinecap="round"
          />

          {/* Inner Accent Ring Track */}
          <circle
            cx="125"
            cy="125"
            r={radius - 18}
            fill="transparent"
            stroke="#EAE6FD"
            strokeWidth="1.5"
            strokeDasharray="3 6"
            strokeOpacity="0.75"
          />

          {/* Foreground Animated Progress Arc */}
          <circle
            cx="125"
            cy="125"
            r={radius}
            fill="transparent"
            stroke="url(#auramindScoreGrad)"
            strokeWidth="15"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            filter="url(#scoreBloom)"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Center Display Badge */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-2 select-none">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-heading font-bold text-surface-muted tracking-widest uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5 text-lavender-primary" />
            <span>Predicted Score</span>
          </div>

          <span className="text-6xl sm:text-7xl font-heading font-extrabold tracking-tight text-surface-text font-mono drop-shadow-xs">
            {clampedScore.toFixed(2)}
          </span>

          <span className="text-xs font-semibold text-surface-muted mt-1 font-mono">
            Continuous 0.0 – {maxScore.toFixed(1)} Scale
          </span>

          <div className={`mt-3 px-3.5 py-1 rounded-full text-[11px] font-semibold border ${badgeStyle} shadow-2xs`}>
            {contextualNote}
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-4 text-center max-w-xs space-y-1">
        <span className="text-[11px] font-medium text-surface-muted leading-relaxed block">
          Computed by the 200-tree Random Forest regression pipeline from your 12 submitted behavioral factors.
        </span>
      </div>
    </div>
  );
}
