import React from 'react';
import { Sparkles } from 'lucide-react';

export default function FloatingGlassCubes() {
  return (
    <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center select-none pointer-events-none">
      {/* Soft Ambient Radial Glow Behind the Cubes */}
      <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-lavender-primary/20 via-white/40 to-mint-accent/25 blur-3xl pointer-events-none" />

      {/* SVG 3D Isometric Glass Composition */}
      <svg
        className="w-full h-full relative z-10 overflow-visible"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Lavender Glass Shaders */}
          <linearGradient id="lavenderTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#EDE9FE" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="lavenderLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#8B7CF6" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="lavenderRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.4" />
          </linearGradient>

          {/* Mint Glass Shaders */}
          <linearGradient id="mintTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#E6FFFA" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#CCFBF1" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="mintLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#99F6E4" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="mintRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0D9488" stopOpacity="0.4" />
          </linearGradient>

          {/* Small Crystal Cube Shaders */}
          <linearGradient id="crystalTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#F1EEFF" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="crystalLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="crystalRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#67E8F9" stopOpacity="0.45" />
          </linearGradient>

          {/* Glow Filters */}
          <filter id="softGlowCube" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Delicate Orbital Ring in 3D Perspective */}
        <g className="animate-orbit-ring" style={{ transformOrigin: '160px 160px' }}>
          <ellipse
            cx="160"
            cy="160"
            rx="125"
            ry="45"
            stroke="#8B7CF6"
            strokeOpacity="0.3"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            fill="none"
          />
        </g>
        <g className="animate-orbit-ring-rev" style={{ transformOrigin: '160px 160px' }}>
          <ellipse
            cx="160"
            cy="160"
            rx="105"
            ry="36"
            stroke="#5EEAD4"
            strokeOpacity="0.35"
            strokeWidth="1.2"
            fill="none"
          />
        </g>

        {/* CUBE 1: Main Translucent Lavender Glass Cube (Isometric Center) */}
        <g className="animate-float-slow" style={{ transformOrigin: '145px 160px' }}>
          {/* Internal Refraction Wireframe (Back edges visible through glass) */}
          <path
            d="M 145 155 L 145 195 M 145 195 L 110 175 M 145 195 L 180 175"
            stroke="#C4B5FD"
            strokeWidth="1"
            strokeDasharray="2 3"
            strokeOpacity="0.4"
          />

          {/* Left Face */}
          <path
            d="M 110 135 L 145 155 L 145 205 L 110 185 Z"
            fill="url(#lavenderLeft)"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeOpacity="0.6"
          />

          {/* Right Face */}
          <path
            d="M 145 155 L 180 135 L 180 185 L 145 205 Z"
            fill="url(#lavenderRight)"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeOpacity="0.6"
          />

          {/* Top Face */}
          <path
            d="M 145 115 L 180 135 L 145 155 L 110 135 Z"
            fill="url(#lavenderTop)"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeOpacity="0.8"
            filter="url(#softGlowCube)"
          />

          {/* Glossy Top Edge Highlight */}
          <line x1="145" y1="115" x2="180" y2="135" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        </g>

        {/* CUBE 2: Mint Glass Cube (Offset Lower-Right) */}
        <g className="animate-float-card2" style={{ transformOrigin: '210px 190px' }}>
          {/* Internal Refraction */}
          <path
            d="M 210 190 L 210 220 M 210 220 L 185 205 M 210 220 L 235 205"
            stroke="#5EEAD4"
            strokeWidth="0.9"
            strokeDasharray="2 3"
            strokeOpacity="0.4"
          />

          {/* Left Face */}
          <path
            d="M 185 175 L 210 190 L 210 230 L 185 215 Z"
            fill="url(#mintLeft)"
            stroke="#FFFFFF"
            strokeWidth="0.9"
            strokeOpacity="0.6"
          />

          {/* Right Face */}
          <path
            d="M 210 190 L 235 175 L 235 215 L 210 230 Z"
            fill="url(#mintRight)"
            stroke="#FFFFFF"
            strokeWidth="0.9"
            strokeOpacity="0.6"
          />

          {/* Top Face */}
          <path
            d="M 210 160 L 235 175 L 210 190 L 185 175 Z"
            fill="url(#mintTop)"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeOpacity="0.8"
            filter="url(#softGlowCube)"
          />

          {/* Edge Specular */}
          <line x1="210" y1="160" x2="235" y2="175" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* CUBE 3: Small Floating Crystal Cube (Offset Upper-Left) */}
        <g className="animate-float-card1" style={{ transformOrigin: '95px 105px' }}>
          {/* Left Face */}
          <path
            d="M 80 95 L 98 105 L 98 132 L 80 122 Z"
            fill="url(#crystalLeft)"
            stroke="#FFFFFF"
            strokeWidth="0.8"
            strokeOpacity="0.7"
          />

          {/* Right Face */}
          <path
            d="M 98 105 L 116 95 L 116 122 L 98 132 Z"
            fill="url(#crystalRight)"
            stroke="#FFFFFF"
            strokeWidth="0.8"
            strokeOpacity="0.7"
          />

          {/* Top Face */}
          <path
            d="M 98 85 L 116 95 L 98 105 L 80 95 Z"
            fill="url(#crystalTop)"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeOpacity="0.9"
          />

          {/* Edge Specular */}
          <line x1="98" y1="85" x2="116" y2="95" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Floating Ambient Light Points / Particles */}
        <circle cx="85" cy="180" r="2.5" fill="#8B7CF6" className="animate-pulse" opacity="0.8" />
        <circle cx="230" cy="120" r="3" fill="#5EEAD4" className="animate-pulse" opacity="0.85" />
        <circle cx="160" cy="80" r="2" fill="#C4B5FD" opacity="0.75" />
        <circle cx="260" cy="195" r="2" fill="#7EDCC3" opacity="0.7" />
        <circle cx="115" cy="240" r="2.5" fill="#8B7CF6" className="animate-pulse" opacity="0.6" />

        {/* Sparkle glyphs */}
        <g transform="translate(235, 95) scale(0.65)" opacity="0.8" className="animate-pulse">
          <path d="M 10 0 L 12 8 L 20 10 L 12 12 L 10 20 L 8 12 L 0 10 L 8 8 Z" fill="#8B7CF6" />
        </g>
        <g transform="translate(70, 140) scale(0.55)" opacity="0.7" className="animate-pulse">
          <path d="M 10 0 L 12 8 L 20 10 L 12 12 L 10 20 L 8 12 L 0 10 L 8 8 Z" fill="#5EEAD4" />
        </g>
      </svg>
    </div>
  );
}
