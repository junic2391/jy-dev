"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/resume";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { useCountUp } from "@/lib/useCountUp";
import { useTypewriter } from "@/lib/useTypewriter";

const STATE_COLOR: Record<string, string> = {
  active:   "#39D353",
  ready:    "#86EFAC",
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
  const { displayed: line1, done: line1Done } = useTypewriter(profile.headline, 50, 400);
  const { displayed: line2, done: line2Done } = useTypewriter(profile.sub1, 30, 100, line1Done);
  const { displayed: line3 }                  = useTypewriter(profile.sub2,  30, 100, line2Done);

  return (
    <section id="hero" className="min-h-svh flex items-center py-10 px-6">
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

            <motion.div variants={staggerItem}>
              <div className="font-mono rounded-lg overflow-hidden border border-(--terminal-border) bg-(--terminal-bg)">
                {/* 콘솔 상단 바 */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-(--terminal-border) bg-(--terminal-header-bg)">
                  <span className="text-[11px] text-text-secondary tracking-[0.04em]">intro.ts</span>
                  <span className="text-[10px] text-text-faint tracking-[0.04em]">~/portfolio</span>
                </div>
                {/* 콘솔 본문 */}
                <div className="px-4 py-4 flex flex-col gap-3">
                  {/* 라인 1 — 헤드라인 */}
                  <div className="flex items-start gap-2">
                    <span className="text-(--terminal-prompt) text-sm mt-0.5 select-none shrink-0">{">"}</span>
                    <h1 className="text-[clamp(18px,2.5vw,28px)] font-bold text-text-primary leading-[1.4] tracking-[-0.01em]">
                      {line1}
                      {!line1Done && (
                        <span className="inline-block w-[2px] h-[1.1em] bg-(--terminal-prompt) ml-1 align-middle" />
                      )}
                    </h1>
                  </div>
                  {/* 라인 2 — sub1 */}
                  {line1Done && (
                    <div className="flex items-start gap-2">
                      <span className="text-(--terminal-prompt) text-sm mt-0.5 select-none shrink-0 opacity-60">{">"}</span>
                      <p className="text-sm text-text-primary leading-[1.7]">
                        {line2}
                        {!line2Done && (
                          <span className="inline-block w-[2px] h-[0.9em] bg-(--terminal-prompt) ml-1 align-middle" />
                        )}
                      </p>
                    </div>
                  )}
                  {/* 라인 3 — sub2 */}
                  {line2Done && (
                    <div className="flex items-start gap-2">
                      <span className="text-(--terminal-prompt) text-sm mt-0.5 select-none shrink-0 opacity-40">{">"}</span>
                      <p className="text-xs text-text-secondary leading-[1.7]">
                        {line3}
                        {line3 !== profile.sub2 && (
                          <span className="inline-block w-[2px] h-[0.85em] bg-(--terminal-prompt) ml-1 align-middle opacity-60" />
                        )}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

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
            <div className="w-full max-lg:max-w-[480px] rounded-lg overflow-hidden border border-(--terminal-border) bg-(--terminal-bg) shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

              {/* 패널 헤더 */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-(--terminal-border) bg-(--terminal-header-bg)">
                  <span className="font-mono text-[11px] text-text-secondary tracking-[0.04em]">dev.status</span>
                  <span className="font-mono text-[10px] text-text-faint tracking-[0.04em]">dashboard.tsx</span>
              </div>
              <div className="p-5">

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
            </div>{/* p-5 */}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
