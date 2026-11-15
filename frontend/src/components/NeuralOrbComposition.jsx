import React from 'react';

export default function NeuralOrbComposition() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square flex items-center justify-center select-none pointer-events-none">
      {/* Background Radial Ambient Glow */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-lavender-primary/20 via-white/40 to-mint-accent/25 blur-3xl pointer-events-none" />

      <svg
        className="w-full h-full relative z-10 overflow-visible"
        viewBox="0 0 340 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Analytics Orb Shaders */}
          <radialGradient id="orbCoreGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#C4B5FD" stopOpacity="0.8" />
            <stop offset="65%" stopColor="#8B7CF6" stopOpacity="0.5" />
            <stop offset="95%" stopColor="#5EEAD4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.2" />
          </radialGradient>

          <linearGradient id="orbRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#DDD6FE" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7EDCC3" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="curvedSynapse" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B7CF6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0.65" />
          </linearGradient>

          {/* Node 3D Spheres */}
          <radialGradient id="nodeLavender" cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#6D28D9" />
          </radialGradient>

          <radialGradient id="nodeMint" cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#5EEAD4" />
            <stop offset="100%" stopColor="#0F766E" />
          </radialGradient>

          {/* Glow filter */}
          <filter id="orbBloom" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Equatorial Orbital Ring around the Analytics Orb */}
        <g className="animate-orbit-ring" style={{ transformOrigin: '170px 170px' }}>
          <ellipse
            cx="170"
            cy="170"
            rx="110"
            ry="38"
            stroke="#8B7CF6"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            fill="none"
          />
        </g>

        {/* Thin Curved Synaptic Connections with Animated Flow */}
        <g className="animate-data-flow">
          {/* Curve 1: Upper-left node to Orb */}
          <path
            d="M 65 95 Q 115 110 145 150"
            stroke="url(#curvedSynapse)"
            strokeWidth="1.8"
            strokeDasharray="6 6"
            fill="none"
          />
          {/* Curve 2: Top-right node to Orb */}
          <path
            d="M 270 85 Q 235 125 195 155"
            stroke="url(#curvedSynapse)"
            strokeWidth="1.8"
            strokeDasharray="6 6"
            fill="none"
          />
          {/* Curve 3: Lower-left node to Orb */}
          <path
            d="M 75 245 Q 110 220 150 190"
            stroke="url(#curvedSynapse)"
            strokeWidth="1.8"
            strokeDasharray="6 6"
            fill="none"
          />
          {/* Curve 4: Lower-right node to Orb */}
          <path
            d="M 275 235 Q 230 225 190 185"
            stroke="url(#curvedSynapse)"
            strokeWidth="1.8"
            strokeDasharray="6 6"
            fill="none"
          />
          {/* Curve 5: Cross-node link top to right */}
          <path
            d="M 270 85 Q 295 160 275 235"
            stroke="#5EEAD4"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            strokeDasharray="3 5"
            fill="none"
          />
          {/* Curve 6: Cross-node link left */}
          <path
            d="M 65 95 Q 40 170 75 245"
            stroke="#8B7CF6"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            strokeDasharray="3 5"
            fill="none"
          />
        </g>

        {/* Outer 3D Connected Glowing Spheres (Nodes) */}
        {/* Node 1: Top-Left */}
        <g className="animate-float-card1" style={{ transformOrigin: '65px 95px' }}>
          <circle cx="65" cy="95" r="11" fill="url(#nodeLavender)" filter="url(#orbBloom)" />
          <circle cx="62" cy="92" r="3" fill="#FFFFFF" opacity="0.8" />
        </g>

        {/* Node 2: Top-Right */}
        <g className="animate-float-card2" style={{ transformOrigin: '270px 85px' }}>
          <circle cx="270" cy="85" r="13" fill="url(#nodeMint)" filter="url(#orbBloom)" />
          <circle cx="266" cy="81" r="3.5" fill="#FFFFFF" opacity="0.85" />
        </g>

        {/* Node 3: Bottom-Left */}
        <g className="animate-float-card3" style={{ transformOrigin: '75px 245px' }}>
          <circle cx="75" cy="245" r="12" fill="url(#nodeMint)" filter="url(#orbBloom)" />
          <circle cx="71" cy="241" r="3" fill="#FFFFFF" opacity="0.85" />
        </g>

        {/* Node 4: Bottom-Right */}
        <g className="animate-float-card1" style={{ transformOrigin: '275px 235px' }}>
          <circle cx="275" cy="235" r="10" fill="url(#nodeLavender)" filter="url(#orbBloom)" />
          <circle cx="272" cy="232" r="2.5" fill="#FFFFFF" opacity="0.8" />
        </g>

        {/* Node 5: Top Accent */}
        <g className="animate-float-slow" style={{ transformOrigin: '170px 50px' }}>
          <circle cx="170" cy="50" r="7" fill="url(#nodeLavender)" />
          <line x1="170" y1="50" x2="170" y2="120" stroke="#8B7CF6" strokeOpacity="0.25" strokeDasharray="2 4" />
        </g>

        {/* Central Floating Translucent Analytics Orb */}
        <g className="animate-float-slow" style={{ transformOrigin: '170px 170px' }}>
          {/* Soft Outer Halo */}
          <circle cx="170" cy="170" r="54" fill="#8B7CF6" fillOpacity="0.12" filter="url(#orbBloom)" />

          {/* Translucent Sphere Core with 3D Depth */}
          <circle
            cx="170"
            cy="170"
            r="48"
            fill="url(#orbCoreGrad)"
            stroke="url(#orbRimGrad)"
            strokeWidth="1.8"
          />

          {/* Inner Glowing Data Matrix Lines */}
          <ellipse cx="170" cy="170" rx="36" ry="14" stroke="#FFFFFF" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 3" />
          <ellipse cx="170" cy="170" rx="14" ry="36" stroke="#FFFFFF" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 3" />

          {/* Glowing Center Nucleus */}
          <circle cx="170" cy="170" r="10" fill="#FFFFFF" fillOpacity="0.9" filter="url(#orbBloom)" />

          {/* Specular Light Crescent Reflection */}
          <path
            d="M 142 144 A 42 42 0 0 1 188 132"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.85"
          />
        </g>

        {/* Floating Particles */}
        <circle cx="120" cy="120" r="2" fill="#8B7CF6" className="animate-pulse" opacity="0.8" />
        <circle cx="215" cy="130" r="2.5" fill="#5EEAD4" className="animate-pulse" opacity="0.9" />
        <circle cx="135" cy="225" r="2" fill="#7EDCC3" opacity="0.75" />
        <circle cx="210" cy="210" r="2" fill="#C4B5FD" opacity="0.7" />
      </svg>
    </div>
  );
}
