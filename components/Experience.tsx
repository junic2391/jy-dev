"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/resume";
import SectionHeader from "@/components/SectionHeader";
import { staggerContainer, staggerItem, VIEWPORT } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="py-10 px-6">
      <div className="max-w-[1080px] mx-auto">
        <SectionHeader eyebrow="// Experience" heading="주요 경력" />

        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {/* 세로 타임라인 선 */}
          <div
            aria-hidden
            className="absolute left-[7px] inset-y-0 w-px bg-linear-to-b from-transparent via-[rgba(57,211,83,0.25)] to-transparent"
          />

          <div className="flex flex-col">
            {experience.map((entry, index) => (
              <motion.div
                key={entry.id}
                variants={staggerItem}
                className={`flex gap-6 sm:gap-8${index < experience.length - 1 ? " pb-10 sm:pb-14" : ""}`}
              >
                {/* 타임라인 점 */}
                <div className="shrink-0 pt-[3px] z-10">
                  <div className="w-4 h-4 rounded-full bg-accent ring-2 ring-accent/20 ring-offset-2 ring-offset-bg shadow-[0_0_10px_2px_rgba(57,211,83,0.35)]" />
                </div>

                {/* 카드 */}
                <div className="glass-card flex-1 min-w-0 p-6 sm:p-8 flex flex-col gap-6">
                  {/* 헤더 */}
                  <div className="flex flex-col gap-1">
                    {entry.company && (
                      <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">
                        {entry.company}
                      </span>
                    )}
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="text-lg font-semibold text-text-primary leading-snug">
                        {entry.title}
                      </h3>
                      <span className="font-mono text-xs text-text-muted">
                        {entry.period}
                      </span>
                    </div>
                  </div>

                  {/* CONTEXT / SCOPE */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[11px] text-accent uppercase tracking-widest">
                        배경
                      </span>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {entry.context}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[11px] text-accent uppercase tracking-widest">
                        담당 범위
                      </span>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {entry.scope}
                      </p>
                    </div>
                  </div>

                  {/* CONTRIBUTION */}
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[11px] text-accent uppercase tracking-widest">
                      기여 내용
                    </span>
                    <ul className="grid gap-2">
                      {entry.contributions.map((item) => (
                        <li
                          key={item.label}
                          className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-0.5 sm:gap-2 text-sm leading-relaxed"
                        >
                          <span className="font-semibold text-accent">
                            {item.label}
                          </span>
                          <span className="text-text-secondary">
                            {item.detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-(--glass-border)">
                    {entry.techTags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] text-text-muted px-2 py-0.5 rounded border border-(--glass-border)"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
