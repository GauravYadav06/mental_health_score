import React from 'react';

export default function OrbitalSphereComposition() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none -z-0 overflow-visible">
      {/* Subtle Radial Ambient Glow Sphere */}
      <div className="w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] rounded-full bg-gradient-to-tr from-lavender-primary/18 via-white/50 to-mint-accent/22 blur-3xl pointer-events-none" />

      {/* SVG Translucent Orbital Ring System with Floating 3D Spheres */}
      <svg
        className="absolute w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] overflow-visible"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="orbitRingGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B7CF6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#C4B5FD" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#7EDCC3" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id="orbitRingGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#8B7CF6" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.5" />
          </linearGradient>

          {/* Sphere 1: Lavender Glass Sphere */}
          <radialGradient id="sphereLavender" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#DDD6FE" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#8B7CF6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.4" />
          </radialGradient>

          {/* Sphere 2: Mint Glass Sphere */}
          <radialGradient id="sphereMint" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#CCFBF1" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#2DD4BF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0F766E" stopOpacity="0.4" />
          </radialGradient>

          <filter id="sphereGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Primary Tilted Orbital Ring Track */}
        <g className="animate-orbit-ring" style={{ transformOrigin: '200px 200px' }}>
          <ellipse
            cx="200"
            cy="200"
            rx="160"
            ry="64"
            stroke="url(#orbitRingGrad1)"
            strokeWidth="1.8"
            strokeDasharray="5 7"
            fill="none"
          />
        </g>

        {/* Secondary Counter-Tilted Orbital Ring Track */}
        <g className="animate-orbit-ring-rev" style={{ transformOrigin: '200px 200px' }}>
          <ellipse
            cx="200"
            cy="200"
            rx="135"
            ry="50"
            stroke="url(#orbitRingGrad2)"
            strokeWidth="1.4"
            fill="none"
          />
        </g>

        {/* Sphere 1: Floating Translucent Lavender Glass Sphere on Outer Orbit */}
        <g className="animate-float-card1" style={{ transformOrigin: '330px 175px' }}>
          <circle
            cx="330"
            cy="175"
            r="16"
            fill="url(#sphereLavender)"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeOpacity="0.8"
            filter="url(#sphereGlow)"
          />
          {/* Specular Highlight Arc */}
          <path
            d="M 322 168 A 10 10 0 0 1 334 165"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.9"
          />
          {/* Subtle Outer Ring Halo */}
          <circle cx="330" cy="175" r="22" stroke="#8B7CF6" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="2 3" />
        </g>

        {/* Sphere 2: Floating Translucent Mint Glass Sphere on Inner Orbit */}
        <g className="animate-float-card2" style={{ transformOrigin: '70px 225px' }}>
          <circle
            cx="70"
            cy="225"
            r="12"
            fill="url(#sphereMint)"
            stroke="#FFFFFF"
            strokeWidth="0.9"
            strokeOpacity="0.85"
            filter="url(#sphereGlow)"
          />
          {/* Specular Highlight */}
          <circle cx="67" cy="221" r="3" fill="#FFFFFF" opacity="0.9" />
          <circle cx="70" cy="225" r="17" stroke="#2DD4BF" strokeOpacity="0.3" strokeWidth="0.8" strokeDasharray="2 2" />
        </g>
      </svg>
    </div>
  );
}
