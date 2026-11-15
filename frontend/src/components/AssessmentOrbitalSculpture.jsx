import React from 'react';

export default function AssessmentOrbitalSculpture() {
  return (
    <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-square flex items-center justify-center select-none pointer-events-none">
      {/* Layered Multi-Stop Ambient Glow Sphere */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-lavender-primary/25 via-white/50 to-mint-accent/30 blur-3xl pointer-events-none" />

      {/* SVG 3D Orbital Armillary Sculpture */}
      <svg
        className="w-full h-full relative z-10 overflow-visible"
        viewBox="0 0 380 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glass Gradients */}
          <linearGradient id="sculptureRing1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="35%" stopColor="#C4B5FD" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#8B7CF6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7EDCC3" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="sculptureRing2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#5EEAD4" stopOpacity="0.7" />
            <stop offset="80%" stopColor="#8B7CF6" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.75" />
          </linearGradient>

          <linearGradient id="sculptureRing3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EDE9FE" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#DDD6FE" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#99F6E4" stopOpacity="0.75" />
          </linearGradient>

          {/* Central Prism Gradients */}
          <linearGradient id="prismTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#E0E7FF" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="prismLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#8B7CF6" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="prismRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="prismBottom" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7EDCC3" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.45" />
          </linearGradient>

          {/* Floating Object 1: Satellite Cube Shaders */}
          <linearGradient id="satCubeTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#EDE9FE" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="satCubeLeft" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#8B7CF6" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="satCubeRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6757D6" stopOpacity="0.5" />
          </linearGradient>

          {/* Floating Object 2: Satellite Mint Sphere Shader */}
          <radialGradient id="satSphereMint" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#CCFBF1" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#2DD4BF" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#0F766E" stopOpacity="0.45" />
          </radialGradient>

          {/* Glow Filters */}
          <filter id="bloomSculpture" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Outer Halo */}
        <circle cx="190" cy="190" r="140" fill="#8B7CF6" fillOpacity="0.04" filter="url(#bloomSculpture)" />

        {/* ORBITAL PATH 1: Broad Tilted Translucent Outer Ring System */}
        <g className="animate-orbit-ring" style={{ transformOrigin: '190px 190px' }}>
          {/* Main Glass Torus Track */}
          <ellipse
            cx="190"
            cy="190"
            rx="155"
            ry="65"
            stroke="url(#sculptureRing1)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Internal Specular Glimmer */}
          <ellipse
            cx="190"
            cy="190"
            rx="155"
            ry="65"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeDasharray="25 60 40 80"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />
          {/* Thin Outer Coordinate Track */}
          <ellipse
            cx="190"
            cy="190"
            rx="168"
            ry="72"
            stroke="#8B7CF6"
            strokeOpacity="0.3"
            strokeWidth="1.2"
            strokeDasharray="4 8"
            fill="none"
          />
        </g>

        {/* ORBITAL PATH 2: Counter-Tilted Mint Glass Ring System */}
        <g className="animate-orbit-ring-rev" style={{ transformOrigin: '190px 190px' }}>
          <ellipse
            cx="190"
            cy="190"
            rx="138"
            ry="55"
            stroke="url(#sculptureRing2)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse
            cx="190"
            cy="190"
            rx="138"
            ry="55"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeDasharray="18 45 30 70"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
        </g>

        {/* ORBITAL PATH 3: Inner Vertical Gyroscope Ring */}
        <g className="animate-float-delayed" style={{ transformOrigin: '190px 190px' }}>
          <ellipse
            cx="190"
            cy="190"
            rx="60"
            ry="115"
            stroke="url(#sculptureRing3)"
            strokeWidth="3"
            strokeDasharray="6 8"
            fill="none"
          />
        </g>

        {/* CENTERPIECE: Floating Multifaceted Glass Prism Core */}
        <g className="animate-float-slow" style={{ transformOrigin: '190px 190px' }}>
          {/* Central Glow Core */}
          <circle cx="190" cy="190" r="32" fill="#8B7CF6" fillOpacity="0.25" filter="url(#bloomSculpture)" />
          <circle cx="190" cy="190" r="16" fill="#5EEAD4" fillOpacity="0.35" filter="url(#bloomSculpture)" />

          {/* Upper Pyramid Top Face */}
          <polygon
            points="190,140 225,180 190,195 155,180"
            fill="url(#prismTop)"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeOpacity="0.9"
          />

          {/* Left Lateral Facet */}
          <polygon
            points="155,180 190,195 190,240 155,180"
            fill="url(#prismLeft)"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeOpacity="0.75"
          />

          {/* Right Lateral Facet */}
          <polygon
            points="190,195 225,180 190,240 190,195"
            fill="url(#prismRight)"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeOpacity="0.75"
          />

          {/* Back Internal Refraction Lines */}
          <line x1="190" y1="140" x2="190" y2="240" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 4" strokeOpacity="0.5" />
          <line x1="155" y1="180" x2="225" y2="180" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 3" strokeOpacity="0.4" />

          {/* Specular Edge Highlights */}
          <line x1="190" y1="140" x2="225" y2="180" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="190" y1="140" x2="155" y2="180" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
        </g>

        {/* FLOATING OBJECT 1: Translucent Lavender Satellite Cube (Upper-Left) */}
        <g className="animate-float-card1" style={{ transformOrigin: '85px 125px' }}>
          {/* Top Face */}
          <path
            d="M 85 110 L 105 120 L 85 130 L 65 120 Z"
            fill="url(#satCubeTop)"
            stroke="#FFFFFF"
            strokeWidth="0.9"
            strokeOpacity="0.85"
          />
          {/* Left Face */}
          <path
            d="M 65 120 L 85 130 L 85 152 L 65 142 Z"
            fill="url(#satCubeLeft)"
            stroke="#FFFFFF"
            strokeWidth="0.9"
            strokeOpacity="0.75"
          />
          {/* Right Face */}
          <path
            d="M 85 130 L 105 120 L 105 142 L 85 152 Z"
            fill="url(#satCubeRight)"
            stroke="#FFFFFF"
            strokeWidth="0.9"
            strokeOpacity="0.75"
          />
          {/* Top Specular Line */}
          <line x1="85" y1="110" x2="105" y2="120" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
          {/* Satellite Orbit Line Connection */}
          <path
            d="M 85 155 Q 110 175 145 185"
            stroke="#8B7CF6"
            strokeOpacity="0.25"
            strokeWidth="1"
            strokeDasharray="2 3"
          />
        </g>

        {/* FLOATING OBJECT 2: Translucent Mint Satellite Sphere (Lower-Right) */}
        <g className="animate-float-card2" style={{ transformOrigin: '295px 235px' }}>
          {/* Outer Halo */}
          <circle cx="295" cy="235" r="22" stroke="#5EEAD4" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="3 4" />
          {/* Sphere Body */}
          <circle
            cx="295"
            cy="235"
            r="16"
            fill="url(#satSphereMint)"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeOpacity="0.9"
            filter="url(#bloomSculpture)"
          />
          {/* Specular Crescent */}
          <path
            d="M 288 226 A 9 9 0 0 1 300 224"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.95"
          />
          {/* Orbit Line Connection */}
          <path
            d="M 295 215 Q 260 200 230 190"
            stroke="#5EEAD4"
            strokeOpacity="0.3"
            strokeWidth="1"
            strokeDasharray="2 3"
          />
        </g>

        {/* Glowing Particles & Light Sparkles */}
        <circle cx="75" cy="205" r="3" fill="#8B7CF6" className="animate-pulse" opacity="0.8" />
        <circle cx="310" cy="140" r="3.5" fill="#5EEAD4" className="animate-pulse" opacity="0.85" />
        <circle cx="140" cy="85" r="2" fill="#C4B5FD" opacity="0.75" />
        <circle cx="240" cy="95" r="2.5" fill="#7EDCC3" opacity="0.75" />
        <circle cx="210" cy="295" r="2.5" fill="#8B7CF6" className="animate-pulse" opacity="0.7" />
        <circle cx="125" cy="275" r="2" fill="#5EEAD4" opacity="0.8" />

        {/* Sparkle Icons */}
        <g transform="translate(305, 115) scale(0.65)" opacity="0.85" className="animate-pulse">
          <path d="M 10 0 L 12 8 L 20 10 L 12 12 L 10 20 L 8 12 L 0 10 L 8 8 Z" fill="#8B7CF6" />
        </g>
        <g transform="translate(60, 165) scale(0.55)" opacity="0.75" className="animate-pulse">
          <path d="M 10 0 L 12 8 L 20 10 L 12 12 L 10 20 L 8 12 L 0 10 L 8 8 Z" fill="#5EEAD4" />
        </g>
      </svg>
    </div>
  );
}
