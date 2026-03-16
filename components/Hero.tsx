"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/resume";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { useCountUp } from "@/lib/useCountUp";

const STATE_COLOR: Record<string, string> = {
  active: "#34D399",
  ready: "#38BDF8",
  building: "#F59E0B",
};

function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const target = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/\d/g, "");
  const count = useCountUp(target, ref);

  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-[clamp(32px,4vw,48px)] font-bold text-accent leading-none">
        <motion.span ref={ref}>{count}</motion.span>
        {suffix}
      </span>
      <span className="font-mono text-[10px] text-text-muted tracking-[0.12em] uppercase">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-svh flex items-center py-28 px-6">
      <div className="max-w-[1080px] mx-auto w-full">
        <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-[1fr_420px]">

          {/* 좌측 — 헤드라인 */}
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={staggerItem}
              className="font-mono text-xs text-accent uppercase tracking-widest"
            >
              {profile.eyebrow}
            </motion.span>

            <motion.h1
              variants={staggerItem}
              className="text-[clamp(36px,5.5vw,64px)] font-bold text-text-primary leading-[1.15] tracking-[-0.02em]"
            >
              {profile.headline.line1}
              <br />
              {profile.headline.line2}
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-base text-text-secondary leading-[1.7] max-w-[520px]"
            >
              {profile.sub}
            </motion.p>

            {/* Stats */}
            <motion.div variants={staggerItem} className="flex gap-10">
              {profile.stats.map((stat) => (
                <StatItem key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={staggerItem} className="flex gap-3 flex-wrap">
              <a href="#experience" className="btn-primary">경력 보기</a>
              <a href="#projects" className="btn-secondary">프로젝트 보기</a>
            </motion.div>
          </motion.div>

          {/* 우측 — Dashboard Panel */}
          <motion.div
            className="flex justify-end max-lg:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="glass-card w-full max-lg:max-w-[480px] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]">

              {/* 패널 헤더 */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="flex gap-1.5">
                  <span className="block w-2.5 h-2.5 rounded-full macos-dot-close" />
                  <span className="block w-2.5 h-2.5 rounded-full macos-dot-minimize" />
                  <span className="block w-2.5 h-2.5 rounded-full macos-dot-maximize" />
                </div>
                <span className="font-mono text-[11px] text-text-muted tracking-[0.04em]">
                  dashboard.tsx
                </span>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {profile.dashboard.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex flex-col gap-1 rounded-md p-3 metric-card"
                  >
                    <span className="font-mono text-lg font-bold text-accent">{m.value}</span>
                    <span className="font-mono text-[10px] text-text-muted tracking-[0.06em] whitespace-nowrap">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* 구분선 */}
              <div className="my-4 divider" />

              {/* Status */}
              <div className="flex flex-col gap-2.5">
                {profile.dashboard.status.map((s) => (
                  <div key={s.label} className="flex items-center gap-2.5">
                    <span
                      className="w-2 h-2 rounded-full shrink-0 status-dot"
                      style={{ '--state-color': STATE_COLOR[s.state] } as React.CSSProperties}
                    />
                    <span className="font-mono text-xs text-text-secondary">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* 구분선 */}
              <div className="my-4 divider" />

              {/* Summary */}
              <div className="flex gap-2 flex-wrap">
                {profile.dashboard.summary.map((s) => (
                  <span
                    key={s.label}
                    className="font-mono text-[10px] text-accent-2 rounded-sm px-2 py-0.5 tracking-[0.04em] badge-accent2"
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
