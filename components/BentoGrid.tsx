"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile, experience, skills, projects, insights, featuredCaseStudy } from "@/data/resume";

// ── Icons ─────────────────────────────────────────
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="1" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const ArrowSquareIcon = () => (
  <svg viewBox="0 0 18 18" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="1" width="16" height="16" rx="1" />
    <path d="M6 9h6M10 6l3 3-3 3" />
  </svg>
);

// ── 섹션 eyebrow 컴포넌트 ──────────────────────────
function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <p className="figma-eyebrow">
      <span className="nb-marker">{index}</span>
      {label}
    </p>
  );
}

// ── 데이터 ────────────────────────────────────────
const SKILL_DISPLAY = ["React", "TypeScript", "Next.js", "Tailwind CSS", "WebSocket", "Redux", "Node.js"];
const TOOLS_LINE = "figma · jira · swagger · postman · git";

function expTitle(id: string, company?: string) {
  const role = id === "saas-cms" ? "Frontend Lead" : "Frontend Dev";
  return `${role} @ ${company ?? ""}`;
}

// ── BentoGrid ────────────────────────────────────
export default function BentoGrid() {
  const [openProject, setOpenProject] = useState<number | null>(null);
  const activeProject = openProject !== null ? projects[openProject] : null;

  const displaySkills = SKILL_DISPLAY.map(
    (name) => skills.flatMap((s) => s.chips).find((c) => c.name === name) ?? { name }
  );

  return (
    <section id="hero" className="py-8 px-6 lg:px-10">
      <div className="w-full max-w-[1400px] mx-auto">

        {/* ── Header ── */}
        <div className="figma-header">
          <div>
            <p className="nb-header-meta">// portfolio.{new Date().getFullYear()} · frontend</p>
            <h1 className="figma-title">
              FRONT-END<br />ENGINEER
            </h1>
            <p className="figma-subtitle">
              {profile.stats[0].value} exp · {profile.stats[1].value} clients · {profile.location}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="figma-icon-btn"
            >
              <GithubIcon />
            </a>
            <a
              href={`mailto:${profile.contact.email}`}
              aria-label="Email"
              className="figma-icon-btn"
            >
              <EmailIcon />
            </a>
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="figma-grid">

          {/* ── About ── */}
          <motion.div
            className="bento-card bento-about p-7 flex flex-col justify-between"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex flex-col gap-5">
              <Eyebrow index="// 001" label="ABOUT" />
              <h2 className="font-sans font-bold text-[clamp(20px,2.2vw,28px)] leading-[1.3] text-[#f0f0f0]">
                복잡함을 단순함으로<br />
                <span className="text-[#555555]">풀어내는 엔지니어.</span>
              </h2>
              <p className="text-[14px] text-[#555555] leading-[24px]">
                {profile.sub1}<br />
                {profile.sub2}
              </p>
            </div>
            <div className="mt-8 pt-5 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
              <button className="figma-text-link">
                DOWNLOAD CV <ArrowIcon />
              </button>
              <span className="font-mono text-[10px] text-[#333333]">
                {profile.contact.email}
              </span>
            </div>
          </motion.div>

          {/* ── Experience ── */}
          <motion.div
            className="bento-card bento-exp p-7 flex flex-col gap-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
          >
            <Eyebrow index="// 002" label="EXPERIENCE" />
            <div>
              {experience.map((e, i) => (
                <div key={e.id}>
                  <div className="flex items-start justify-between gap-4 py-4">
                    <div className="flex flex-col gap-1 min-w-0">
                      <h3 className="font-sans font-bold text-[16px] text-[#e0e0e0] leading-[1.3]">
                        {expTitle(e.id, e.company)}
                      </h3>
                      <p className="font-mono text-[11px] text-[#444444] tracking-wide">{e.period}</p>
                    </div>
                    <div className="flex gap-1.5 pt-0.5 flex-shrink-0 flex-wrap justify-end">
                      {e.techTags.slice(0, 2).map((t) => (
                        <span key={t} className="figma-exp-chip">{t}</span>
                      ))}
                    </div>
                  </div>
                  {i < experience.length - 1 && <div className="nb-exp-divider" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Skills ── */}
          <motion.div
            className="bento-card bento-skills p-7 flex flex-col justify-between"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <div className="flex flex-col gap-5">
              <Eyebrow index="// 003" label="TECH.STACK" />
              <div className="flex flex-wrap gap-2">
                {displaySkills.map((s) => (
                  <span key={s.name} className="figma-skill-pill">{s.name}</span>
                ))}
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.06)]">
              <p className="font-mono text-[9px] text-[#333333] uppercase tracking-[0.15em]">{TOOLS_LINE}</p>
            </div>
          </motion.div>

          {/* ── Project ── */}
          <motion.div
            className="bento-card bento-project p-7 flex flex-col justify-between cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.15 }}
            onClick={() => setOpenProject(0)}
          >
            <Eyebrow index="// 004" label="PROJECT.01" />
            <div className="flex flex-col gap-2 my-4">
              <h3 className="font-sans font-bold text-[22px] text-[#e0e0e0] leading-[1.2]">
                {projects[0].title}
              </h3>
              <p className="text-[13px] text-[#555555] leading-[20px]">
                {projects[0].problem.slice(0, 70)}...
              </p>
            </div>
            <div className="flex items-end justify-between pt-4 border-t border-[rgba(255,255,255,0.06)]">
              <span className="font-mono text-[10px] text-[#333333] uppercase tracking-wide">OPEN CASE STUDY</span>
              <div className="figma-arrow-circle">
                <ArrowSquareIcon />
              </div>
            </div>
          </motion.div>

          {/* ── Blog / Insights ── */}
          <motion.div
            className="bento-card bento-blog p-7 flex flex-col gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <Eyebrow index="// 005" label="INSIGHTS" />
              <a href="#" className="font-mono text-[10px] text-[#444444] hover:text-[#c8ff3c] transition-colors uppercase tracking-wider">
                VIEW ALL →
              </a>
            </div>
            <div className="flex flex-col gap-8">
              {insights.map((article, i) => (
                <article key={i} className="flex flex-col gap-2">
                  <time className="font-mono text-[9px] text-[#333333] tracking-[0.12em]">
                    {article.date}
                  </time>
                  <h4 className="font-sans font-bold text-[20px] text-[#e0e0e0] leading-[1.3]">
                    {article.title}
                  </h4>
                  <p className="text-[13px] text-[#555555] leading-[22px] mt-0.5">
                    {article.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </motion.div>

          {/* ── Featured Case Study ── */}
          <motion.div
            className="bento-card bento-casestudy p-7 flex flex-col justify-center"
            style={{
              background: "linear-gradient(135deg, #111111 0%, #0e0e0e 100%)",
              borderColor: "rgba(200,255,60,0.12)",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.25 }}
          >
            <div className="flex flex-col gap-5">
              <p className="figma-eyebrow">
                <span style={{ color: "#c8ff3c" }}>// 006</span>
                <span style={{ color: "#c8ff3c", marginLeft: 8 }}>FEATURED</span>
              </p>
              <h2
                className="font-sans font-black uppercase leading-[0.95]"
                style={{ fontSize: "clamp(26px,2.8vw,38px)", color: "#f0f0f0", letterSpacing: "-1px" }}
              >
                {featuredCaseStudy.title[0]}<br />
                {featuredCaseStudy.title[1]}
              </h2>
              <p className="text-[13px] leading-[20px] max-w-[300px]" style={{ color: "#555555" }}>
                {featuredCaseStudy.description}
              </p>
              <div className="pt-4 border-t border-[rgba(200,255,60,0.08)]">
                <button className="figma-text-link">
                  {featuredCaseStudy.linkLabel} <ArrowIcon />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── 프로젝트 상세 패널 ── */}
      <AnimatePresence>
        {activeProject && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenProject(null)}
            />
            <motion.div
              className="fixed right-0 top-0 bottom-0 w-full max-w-[480px] z-50 overflow-y-auto"
              style={{
                background: "#0a0a0a",
                borderLeft: "1px solid rgba(200,255,60,0.15)",
                boxShadow: "-4px 0 0 rgba(200,255,60,0.04)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-8 flex flex-col gap-6">
                {/* 헤더 */}
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-[rgba(255,255,255,0.06)]">
                  <div className="flex flex-col gap-2">
                    <p className="figma-eyebrow"><span className="nb-marker">// 004</span>PROJECT.DETAIL</p>
                    <h2 className="font-sans font-bold text-xl text-[#e0e0e0] leading-tight">
                      {activeProject.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setOpenProject(null)}
                    className="shrink-0 w-8 h-8 flex items-center justify-center border text-[#555555] hover:text-[#c8ff3c] hover:border-[rgba(200,255,60,0.35)] transition-colors font-mono text-xs"
                    style={{ borderRadius: 2, borderColor: "rgba(255,255,255,0.10)" }}
                    aria-label="닫기"
                  >
                    ✕
                  </button>
                </div>

                {/* Problem */}
                <div className="flex flex-col gap-2">
                  <p className="figma-eyebrow"><span className="nb-marker">//</span>PROBLEM</p>
                  <p className="text-[13px] text-[#555555] leading-relaxed">{activeProject.problem}</p>
                </div>

                {/* Results */}
                <div className="flex flex-col gap-3">
                  <p className="figma-eyebrow"><span className="nb-marker">//</span>RESULTS</p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.results.map((r) => (
                      <span key={r} className="figma-exp-chip">{r}</span>
                    ))}
                  </div>
                </div>

                {/* Decisions */}
                <div className="flex flex-col gap-3">
                  <p className="figma-eyebrow"><span className="nb-marker">//</span>KEY DECISIONS</p>
                  {activeProject.decisions.map((d, i) => (
                    <div
                      key={i}
                      className="p-4 flex flex-col gap-1.5"
                      style={{
                        borderLeft: "2px solid rgba(200,255,60,0.20)",
                        background: "#111111",
                        borderRadius: "0 2px 2px 0",
                      }}
                    >
                      <p className="text-[13px] font-bold text-[#e0e0e0]">{d.choice}</p>
                      <p className="text-[12px] text-[#555555] leading-relaxed">{d.reason}</p>
                      {d.tradeoff && (
                        <p className="text-[11px] text-[#444444] leading-relaxed mt-1">
                          <span className="font-mono text-[#c8ff3c]">vs. </span>{d.tradeoff}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-col gap-3">
                  <p className="figma-eyebrow"><span className="nb-marker">//</span>TECH STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techTags.map((t) => (
                      <span key={t} className="figma-skill-pill">{t}</span>
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
