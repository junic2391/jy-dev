"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, skills, projects } from "@/data/resume";
import { useCountUp } from "@/lib/useCountUp";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: profile.contact.github,
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: `mailto:${profile.contact.email}`,
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const FEATURED_SKILL_NAMES = [
  "React", "Next.js", "TypeScript", "JavaScript",
  "Tailwind CSS", "MobX", "WebSocket", "Redux",
];

function MetricItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const numeric = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[\d]/g, "");
  const count = useCountUp(numeric, ref);

  return (
    <div className="flex flex-col gap-0.5">
      <span
        ref={ref}
        className="font-sans font-black text-[clamp(22px,2.5vw,30px)] text-text-primary leading-none"
      >
        <motion.span>{count}</motion.span>
        {suffix}
      </span>
      <span className="font-mono text-[10px] text-text-muted uppercase tracking-[0.06em]">
        {label}
      </span>
    </div>
  );
}

export default function BentoGrid() {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const activeProject = openProject !== null ? projects[openProject] : null;

  const displaySkills = skills
    .flatMap((s) => s.chips)
    .filter((c) => FEATURED_SKILL_NAMES.includes(c.name));

  const metrics = [
    ...profile.stats,
    { value: profile.dashboard.metrics[2].value, label: "LCP" },
  ];

  return (
    <section id="hero" className="min-h-svh py-10 px-4 lg:px-8 flex items-center">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="bento-grid">

          {/* ── HERO 카드 ── */}
          <motion.div
            className="bento-card bento-hero p-8 flex flex-col justify-center gap-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                {profile.role}
              </span>
              <h1 className="font-sans font-black text-[clamp(28px,3.5vw,44px)] text-text-primary leading-[1.15] tracking-[-0.02em]">
                안녕하세요,<br />
                <span className="text-text-secondary">{profile.name}입니다.</span>
              </h1>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed max-w-md">
              {profile.sub1} {profile.sub2}
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="bento-icon-btn"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── METRICS 카드 ── */}
          <motion.div
            className="bento-card bento-metrics bento-metrics--accent p-6"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted mb-5">
              Experience
            </p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-5">
              {metrics.map((m) => (
                <MetricItem key={m.label} value={m.value} label={m.label} />
              ))}
            </div>
          </motion.div>

          {/* ── TECH STACK 카드 ── */}
          <motion.div
            className="bento-card bento-tech p-6 flex flex-col gap-4"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
              <span className="text-sm font-bold text-text-primary">Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {displaySkills.map((chip) => (
                <span key={chip.name} className="bento-chip">
                  {chip.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── PROJECT 1 카드 ── */}
          <motion.div
            className="bento-card bento-proj1 relative overflow-hidden min-h-[260px] cursor-pointer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            onClick={() => setOpenProject(0)}
          >
            <div className="bento-proj-deco" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/75 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 flex items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="bento-badge">SaaS CMS</span>
                <h3 className="font-sans font-black text-xl text-text-primary leading-tight">
                  {projects[0].title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {projects[0].techTags.slice(0, 3).map((t) => (
                    <span key={t} className="bento-chip">{t}</span>
                  ))}
                </div>
              </div>
              <span className="bento-icon-btn shrink-0">→</span>
            </div>
          </motion.div>

          {/* ── PROJECT 2 카드 ── */}
          <motion.div
            className="bento-card bento-proj2 relative overflow-hidden min-h-[260px] cursor-pointer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            onClick={() => setOpenProject(1)}
          >
            <div className="bento-proj-deco" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-2/15 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/75 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 flex items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="bento-badge bento-badge--alt">백오피스</span>
                <h3 className="font-sans font-black text-xl text-text-primary leading-tight">
                  {projects[1].title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {projects[1].techTags.slice(0, 3).map((t) => (
                    <span key={t} className="bento-chip">{t}</span>
                  ))}
                </div>
              </div>
              <span className="bento-icon-btn shrink-0">→</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── 상세 패널 오버레이 ── */}
      <AnimatePresence>
        {activeProject && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenProject(null)}
            />
            <motion.div
              className="fixed right-0 top-0 bottom-0 w-full max-w-[480px] z-50 overflow-y-auto"
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "blur(20px)",
                borderLeft: "1px solid var(--glass-border)",
                boxShadow: "-8px 0 32px rgba(0,0,0,0.4)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-8 flex flex-col gap-6">
                {/* 헤더 */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <span className={`bento-badge${openProject === 1 ? " bento-badge--alt" : ""}`}>
                      {openProject === 0 ? "SaaS CMS" : "백오피스"}
                    </span>
                    <h2 className="font-sans font-black text-2xl text-text-primary leading-tight">
                      {activeProject.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setOpenProject(null)}
                    className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-glass-border text-text-muted hover:text-text-primary transition-colors cursor-pointer"
                    style={{ border: "1px solid var(--glass-border)" }}
                    aria-label="닫기"
                  >
                    ✕
                  </button>
                </div>

                {/* Problem */}
                <div className="flex flex-col gap-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
                    Problem
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {activeProject.problem}
                  </p>
                </div>

                {/* Results */}
                <div className="flex flex-col gap-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
                    Results
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.results.map((r) => (
                      <span key={r} className="bento-badge">{r}</span>
                    ))}
                  </div>
                </div>

                {/* Decisions */}
                <div className="flex flex-col gap-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
                    Key Decisions
                  </p>
                  {activeProject.decisions.map((d, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg flex flex-col gap-1"
                      style={{ border: "1px solid var(--glass-border)", background: "var(--accent-bg)" }}
                    >
                      <p className="text-sm font-bold text-text-primary">{d.choice}</p>
                      <p className="text-xs text-text-secondary leading-relaxed">{d.reason}</p>
                      {d.tradeoff && (
                        <p className="text-xs text-text-muted leading-relaxed mt-1">
                          <span className="text-accent font-mono">vs. </span>{d.tradeoff}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-col gap-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techTags.map((t) => (
                      <span key={t} className="bento-chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
