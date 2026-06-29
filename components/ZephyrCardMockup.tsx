"use client";

import { motion } from "motion/react";
import { Compass } from "lucide-react";

export function ZephyrCardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -4 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto mt-12 h-64 w-full max-w-[420px] rounded-[2rem] bg-zephyr-navy p-7 text-white shadow-zephyr-card lg:mt-0"
    >
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_80%_20%,rgba(201,162,39,0.28),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(14,124,134,0.35),transparent_30%)]" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-2xl font-extrabold tracking-tight">Zephyr</div>
            <div className="text-xs font-bold uppercase tracking-[0.24em] text-zephyr-gold">
              Pilot Card
            </div>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-zephyr-gold/40 bg-white/10 text-zephyr-gold">
            <Compass size={22} />
          </div>
        </div>

        <div>
          <div className="mb-5 h-9 w-12 rounded-lg border border-white/20 bg-gradient-to-br from-zephyr-gold/80 to-zephyr-gold/30" />

          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
            Caribbean–US Corridor
          </div>

          <div className="mt-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-white/60">
            <span>Rewards Layer</span>
            <span>Member Pilot</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
