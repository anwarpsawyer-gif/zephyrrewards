"use client";

import { motion } from "motion/react";

export function CompassMotif() {
  return (
    <div className="pointer-events-none absolute right-0 top-20 hidden h-[520px] w-[520px] opacity-90 lg:block">
      <motion.div
        animate={{ rotate: [0, 6, -4, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 520 520" className="h-full w-full">
          <circle
            cx="260"
            cy="260"
            r="210"
            fill="none"
            stroke="rgba(7,26,44,0.08)"
            strokeWidth="1"
          />
          <circle
            cx="260"
            cy="260"
            r="145"
            fill="none"
            stroke="rgba(201,162,39,0.22)"
            strokeWidth="1"
            strokeDasharray="6 12"
          />
          <path
            d="M260 80 L300 260 L260 440 L220 260 Z"
            fill="rgba(201,162,39,0.18)"
            stroke="#C9A227"
            strokeWidth="2"
          />
          <path
            d="M80 260 L260 220 L440 260 L260 300 Z"
            fill="rgba(14,124,134,0.12)"
            stroke="rgba(14,124,134,0.45)"
            strokeWidth="1.5"
          />
          <circle cx="260" cy="260" r="8" fill="#C9A227" />
        </svg>
      </motion.div>
    </div>
  );
}
