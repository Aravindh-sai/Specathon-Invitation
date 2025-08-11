// src/components/TechCircle.tsx
import React from 'react';

export default function TechCircle() {
  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Outer glowing circle */}
      <circle
        cx="75"
        cy="75"
        r="70"
        stroke="url(#grad)"
        strokeWidth="4"
        className="animate-pulse"
      />
      {/* Scanning bar */}
      <rect
        x="65"
        y="5"
        width="20"
        height="30"
        fill="url(#grad)"
        className="animate-[scan_3s_linear_infinite]"
        rx="5"
      />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <style>{`
          @keyframes scan {
            0% { transform: translateY(0) }
            50% { transform: translateY(110px) }
            100% { transform: translateY(0) }
          }
        `}</style>
      </defs>
    </svg>
  );
}
