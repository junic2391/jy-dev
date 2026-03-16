"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/resume";
import SectionHeader from "@/components/SectionHeader";
import { staggerContainer, staggerItem, VIEWPORT } from "@/lib/motion";

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-card p-6 sm:p-8 flex flex-col gap-6">
      {/* 헤더: 인덱스 + 제목 + 태그 */}
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[11px] text-accent tracking-widest">
            {project.index}
          </span>
          <h3 className="text-lg font-semibold text-text-primary leading-snug">
            {project.title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] text-text-muted px-2 py-0.5 rounded border border-(--glass-border)"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 2컬럼 그리드: PROBLEM+RESULTS | DECISION */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* 좌: PROBLEM + RESULTS */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] text-accent uppercase tracking-widest">
              PROBLEM
            </span>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[11px] text-accent uppercase tracking-widest">
              RESULTS
            </span>
            <div className="flex flex-wrap gap-2">
              {project.results.map((r) => (
                <span
                  key={r}
                  className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 우: DECISION 카드 */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[11px] text-accent uppercase tracking-widest">
            DECISION
          </span>
          <div className="flex flex-col gap-4">
            {project.decisions.map((d, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 pl-4 border-l-[3px] border-l-accent"
              >
                <p className="text-sm font-semibold text-text-primary">
                  {d.choice}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {d.reason}
                </p>
                {d.tradeoff && (
                  <p className="font-mono text-[11px] text-text-muted">
                    포기한 대안: {d.tradeoff}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ 토글 */}
      {project.faqItems && project.faqItems.length > 0 && (
        <div className="border-t border-(--glass-border) pt-4 flex flex-col gap-3">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 font-mono text-[11px] text-accent uppercase tracking-widest cursor-pointer hover:text-text-primary transition-colors"
          >
            <span
              className="text-base leading-none transition-transform duration-200"
              style={{ display: "inline-block", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
            FAQ
          </button>
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                key="faq"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="flex flex-col gap-4 pt-1">
                  {project.faqItems.map((item, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <p className="text-sm font-semibold text-text-primary">
                        Q. {item.question}
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-10 px-6">
      <div className="max-w-[1080px] mx-auto">
        <SectionHeader eyebrow="// Projects" heading="주요 프로젝트" />

        <motion.div
          className="flex flex-col gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
