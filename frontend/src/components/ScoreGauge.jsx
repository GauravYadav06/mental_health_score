import React from 'react';

export default function ScoreGauge({ score = 6.5, maxScore = 10.0 }) {
  // Normalize score between 0 and 10
  const numericScore = Number(score) || 0;
  const clampedScore = Math.max(0, Math.min(10, numericScore));
  const percentage = (clampedScore / maxScore) * 100;

  // Arc calculation for SVG gauge (260 degree arc)
  const radius = 94;
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
    <div className="flex flex-col items-center justify-center p-8 glass-card">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* SVG Circular Gauge with Lavender to Mint Gradient */}
        <svg className="w-full h-full transform -rotate-135" viewBox="0 0 230 230">
          <defs>
            <linearGradient id="auramindGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B7CF6" />
              <stop offset="60%" stopColor="#6757D6" />
              <stop offset="100%" stopColor="#7EDCC3" />
            </linearGradient>
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Track Arc */}
          <circle
            cx="115"
            cy="115"
            r={radius}
            fill="transparent"
            stroke="#F1EEFF"
            strokeWidth="14"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeLinecap="round"
          />

          {/* Foreground Animated Progress Arc */}
          <circle
            cx="115"
            cy="115"
            r={radius}
            fill="transparent"
            stroke="url(#auramindGradient)"
            strokeWidth="14"
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            filter="url(#softGlow)"
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Center Display Badge */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pt-2">
          <span className="text-xs font-heading font-bold text-surface-muted tracking-widest uppercase mb-1">
            Predicted Score
          </span>
          <span className="text-5xl font-heading font-extrabold tracking-tight text-surface-text font-mono">
            {clampedScore.toFixed(2)}
          </span>
          <span className="text-xs font-semibold text-surface-muted mt-1">
            Index on 10.0 Scale
          </span>
          <div className={`mt-3 px-3 py-1 rounded-full text-[11px] font-semibold border ${badgeStyle} shadow-2xs`}>
            {contextualNote}
          </div>
        </div>
      </div>

      <p className="mt-5 text-xs text-surface-muted text-center max-w-xs leading-relaxed">
        Estimated by the 200-tree Random Forest pipeline based on your combined sleep, activity, unlock, and stress inputs.
      </p>
    </div>
  );
}
