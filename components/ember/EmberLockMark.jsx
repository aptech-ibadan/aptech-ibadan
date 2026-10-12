"use client";

import { useEffect, useState } from "react";

// Brushed-steel padlock with a layered fire rising behind it and a glowing keyhole.
// The flame is distorted by animated fractal noise so the edges lick and shimmer.
const FLAME_OUTER =
  "M80 6 C87 32 114 50 114 92 C114 120 99 142 80 142 C61 142 46 120 46 92 C46 70 61 58 65 34 C71 44 74 52 76 60 C75 42 76 24 80 6 Z";
const FLAME_TONGUE_L =
  "M52 112 C34 94 42 66 54 48 C55 66 64 76 63 96 Z";
const FLAME_TONGUE_R =
  "M108 112 C126 94 118 66 106 48 C105 66 96 76 97 96 Z";

const layer = (scale) =>
  `translate(80 142) scale(${scale}) translate(-80 -142)`;

const SPARKS = [
  { x: 58, d: "0s", s: 1.6 },
  { x: 100, d: "0.7s", s: 1.3 },
  { x: 80, d: "1.4s", s: 1.8 },
  { x: 70, d: "2.1s", s: 1.2 },
  { x: 92, d: "2.8s", s: 1.5 },
];

const EmberLockMark = ({ size = 160, animate = true, className = "" }) => {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const live = animate && !reduced;

  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 160 200"
      role="img"
      aria-label="Locked-In Ember"
      className={`ember-lock ${live ? "is-animated" : ""} ${className}`}
      style={{ overflow: "visible" }}
    >
      <defs>
        {/* Fire */}
        <linearGradient id="elFOuter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7a0c0c" stopOpacity="0.85" />
          <stop offset="0.45" stopColor="#e2321a" />
          <stop offset="1" stopColor="#ff7a1a" />
        </linearGradient>
        <linearGradient id="elFMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff5a14" />
          <stop offset="0.5" stopColor="#ff9a1f" />
          <stop offset="1" stopColor="#ffc43a" />
        </linearGradient>
        <linearGradient id="elFInner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffc93a" />
          <stop offset="1" stopColor="#fff0a8" />
        </linearGradient>
        <radialGradient id="elFCore" cx="0.5" cy="0.8" r="0.7">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#fff2b8" />
        </radialGradient>
        <radialGradient id="elFHalo" cx="0.5" cy="0.55" r="0.5">
          <stop offset="0" stopColor="#ff7a1a" stopOpacity="0.55" />
          <stop offset="1" stopColor="#ff7a1a" stopOpacity="0" />
        </radialGradient>
        <filter id="elFlameWarp" x="-40%" y="-30%" width="180%" height="150%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018 0.05"
            numOctaves="2"
            seed="4"
            result="n"
          >
            {live && (
              <animate
                attributeName="baseFrequency"
                dur="5s"
                values="0.018 0.05;0.024 0.07;0.016 0.055;0.018 0.05"
                repeatCount="indefinite"
              />
            )}
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="n" scale="11" xChannelSelector="R" yChannelSelector="G" />
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
        <filter id="elSoft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>

        {/* Steel */}
        <linearGradient id="elBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8a95a8" />
          <stop offset="0.18" stopColor="#5d6779" />
          <stop offset="0.7" stopColor="#2c3342" />
          <stop offset="1" stopColor="#161a24" />
        </linearGradient>
        <linearGradient id="elBrush" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.22" stopColor="#fff" stopOpacity="0.22" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.78" stopColor="#fff" stopOpacity="0.12" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="elBevel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e9eef8" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#8a95a8" stopOpacity="0.2" />
          <stop offset="1" stopColor="#000" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="elPlate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#202634" />
          <stop offset="1" stopColor="#3a4254" />
        </linearGradient>
        <radialGradient id="elRim" cx="0.5" cy="0" r="0.9">
          <stop offset="0" stopColor="#ff8a2a" stopOpacity="0.75" />
          <stop offset="0.6" stopColor="#ff5a14" stopOpacity="0.15" />
          <stop offset="1" stopColor="#ff5a14" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="elShackle" gradientUnits="userSpaceOnUse" x1="46" y1="0" x2="114" y2="0">
          <stop offset="0" stopColor="#6c7587" />
          <stop offset="0.3" stopColor="#f4f7fc" />
          <stop offset="0.55" stopColor="#9aa4b6" />
          <stop offset="1" stopColor="#2c3342" />
        </linearGradient>
        <linearGradient id="elShackleFire" gradientUnits="userSpaceOnUse" x1="0" y1="28" x2="0" y2="96">
          <stop offset="0" stopColor="#ff7a1a" stopOpacity="0" />
          <stop offset="1" stopColor="#ff7a1a" stopOpacity="0.55" />
        </linearGradient>
        <radialGradient id="elScrew" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#d6dce8" />
          <stop offset="1" stopColor="#4a5163" />
        </radialGradient>
        <radialGradient id="elHole" cx="0.5" cy="0.45" r="0.6">
          <stop offset="0" stopColor="#fff2b8" />
          <stop offset="0.4" stopColor="#ffa31f" />
          <stop offset="1" stopColor="#d3260f" />
        </radialGradient>
      </defs>

      {/* Ground glow + shadow */}
      <ellipse cx="80" cy="186" rx="52" ry="8" fill="#ff6a1a" opacity="0.4" filter="url(#elSoft)" />
      <ellipse cx="80" cy="184" rx="42" ry="4.5" fill="#000" opacity="0.45" />

      {/* Fire behind the lock */}
      <ellipse cx="80" cy="84" rx="62" ry="74" fill="url(#elFHalo)" />
      <g filter="url(#elFlameWarp)">
        <g className="el-f el-f1">
          <path d={FLAME_OUTER} fill="url(#elFOuter)" />
          <path d={FLAME_TONGUE_L} fill="url(#elFOuter)" />
          <path d={FLAME_TONGUE_R} fill="url(#elFOuter)" />
        </g>
        <g className="el-f el-f2">
          <g transform={layer(0.82)}>
            <path d={FLAME_OUTER} fill="url(#elFMid)" />
            <path d={FLAME_TONGUE_L} fill="url(#elFMid)" />
            <path d={FLAME_TONGUE_R} fill="url(#elFMid)" />
          </g>
        </g>
        <g className="el-f el-f3">
          <g transform={layer(0.6)}>
            <path d={FLAME_OUTER} fill="url(#elFInner)" />
          </g>
        </g>
        <g className="el-f el-f4">
          <g transform={layer(0.34)}>
            <path d={FLAME_OUTER} fill="url(#elFCore)" />
          </g>
        </g>
      </g>

      {/* Rising sparks */}
      {SPARKS.map((s) => (
        <circle
          key={s.x}
          className="el-spark"
          cx={s.x}
          cy="60"
          r={s.s}
          fill="#ffd27a"
          style={{ animationDelay: s.d }}
        />
      ))}

      {/* Shackle (drops shut on mount) */}
      <g className="el-shackle">
        <path
          d="M52 100 V62 a28 28 0 0 1 56 0 V100"
          fill="none"
          stroke="#0d1017"
          strokeOpacity="0.55"
          strokeWidth="15"
          strokeLinecap="round"
          transform="translate(1.5 2)"
        />
        <path
          d="M52 100 V62 a28 28 0 0 1 56 0 V100"
          fill="none"
          stroke="url(#elShackle)"
          strokeWidth="12.5"
          strokeLinecap="round"
        />
        <path
          d="M52 100 V62 a28 28 0 0 1 56 0 V100"
          fill="none"
          stroke="url(#elShackleFire)"
          strokeWidth="12.5"
          strokeLinecap="round"
        />
        <path
          d="M49 98 V62 a31 31 0 0 1 36 -30"
          fill="none"
          stroke="#fff"
          strokeOpacity="0.55"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </g>

      {/* Body */}
      <g>
        <rect x="26" y="94" width="108" height="86" rx="15" fill="url(#elBody)" />
        <rect x="26" y="94" width="108" height="86" rx="15" fill="url(#elBrush)" />
        <rect x="26" y="94" width="108" height="86" rx="15" fill="url(#elRim)" />
        <rect x="26.75" y="94.75" width="106.5" height="84.5" rx="14.5" fill="none" stroke="url(#elBevel)" strokeWidth="1.5" />
        <path d="M34 104 a8 8 0 0 1 8 -7 H118" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />

        {/* Inset plate */}
        <rect x="38" y="106" width="84" height="62" rx="10" fill="url(#elPlate)" />
        <rect x="38" y="106" width="84" height="62" rx="10" fill="none" stroke="#000" strokeOpacity="0.55" strokeWidth="1.5" />
        <rect x="39" y="107" width="82" height="60" rx="9" fill="none" stroke="#9aa4b6" strokeOpacity="0.25" />

        {/* Screws */}
        {[
          [46, 114],
          [114, 114],
          [46, 160],
          [114, 160],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="3.4" fill="url(#elScrew)" stroke="#12151d" strokeWidth="0.6" />
            <path
              d={`M${x - 2} ${y - 0.6} L${x + 2} ${y + 0.6}`}
              stroke="#12151d"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* Keyhole: dark collar, then molten glow */}
        <circle cx="80" cy="132" r="14" fill="#0b0e15" opacity="0.65" filter="url(#elSoft)" />
        <g className="el-hole">
          <circle cx="80" cy="130" r="9.5" fill="#0b0e15" />
          <path d="M74.5 134 L72 154 H88 L85.5 134 Z" fill="#0b0e15" />
          <circle cx="80" cy="130" r="7.2" fill="url(#elHole)" />
          <path d="M75.8 135 L74.4 151.5 H85.6 L84.2 135 Z" fill="url(#elHole)" />
          <circle cx="78" cy="128" r="2.2" fill="#fff" opacity="0.8" />
        </g>
        <circle cx="80" cy="132" r="22" fill="#ff7a1a" opacity="0.22" filter="url(#elSoft)" className="el-hole-glow" />
      </g>

      <style>{`
        .ember-lock .el-f { transform-box: fill-box; transform-origin: 50% 100%; }
        .ember-lock .el-spark { opacity: 0; }
        .ember-lock.is-animated .el-shackle { animation: elSnap 1.1s cubic-bezier(.3,1.6,.5,1) both; }
        .ember-lock.is-animated .el-f1 { animation: elFl1 2.3s ease-in-out infinite; }
        .ember-lock.is-animated .el-f2 { animation: elFl2 1.7s ease-in-out infinite; }
        .ember-lock.is-animated .el-f3 { animation: elFl3 1.3s ease-in-out infinite; }
        .ember-lock.is-animated .el-f4 { animation: elFl1 0.9s ease-in-out infinite; }
        .ember-lock.is-animated .el-spark { animation: elSpark 3.2s ease-out infinite; }
        .ember-lock.is-animated .el-hole-glow { animation: elBreathe 2.2s ease-in-out infinite; }
        @keyframes elSnap { 0% { transform: translateY(-16px); } 100% { transform: translateY(0); } }
        @keyframes elFl1 {
          0%,100% { transform: scale(1, 1) skewX(0deg); }
          30% { transform: scale(1.03, 1.08) skewX(-2deg); }
          65% { transform: scale(0.97, 0.95) skewX(2deg); }
        }
        @keyframes elFl2 {
          0%,100% { transform: scale(1, 1) skewX(0deg); }
          40% { transform: scale(0.97, 1.1) skewX(2.5deg); }
          75% { transform: scale(1.04, 0.96) skewX(-2deg); }
        }
        @keyframes elFl3 {
          0%,100% { transform: scale(1, 1); }
          50% { transform: scale(0.94, 1.14); }
        }
        @keyframes elSpark {
          0% { opacity: 0; transform: translate(0, 0); }
          15% { opacity: 1; }
          100% { opacity: 0; transform: translate(8px, -62px); }
        }
        @keyframes elBreathe { 0%,100% { opacity: 0.18; } 50% { opacity: 0.4; } }
      `}</style>
    </svg>
  );
};

export default EmberLockMark;
