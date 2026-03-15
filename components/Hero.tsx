"use client";

import { useEffect, useRef } from "react";
import { profile } from "@/data/resume";

function countUp(el: HTMLElement, target: number, duration = 1200) {
  const start = performance.now();
  const tick = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = String(Math.round(progress * target));
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function parseTarget(value: string): number {
  return parseInt(value.replace(/\D/g, ""), 10) || 0;
}

const STATE_COLOR: Record<string, string> = {
  active: "#34D399",
  ready: "#38BDF8",
  building: "#F59E0B",
};

export default function Hero() {
  const statRefs = useRef<(HTMLElement | null)[]>([]);
  const observed = useRef(false);

  useEffect(() => {
    const targets = profile.stats.map((s) => parseTarget(s.value));
    const container = statRefs.current[0]?.closest(".hero-stats");
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true;
          statRefs.current.forEach((el, i) => {
            if (el && targets[i]) countUp(el, targets[i]);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        padding: "112px 24px",
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto", width: "100%" }}>
        <div className="hero-grid">
          {/* 좌측 — 헤드라인 */}
          <div className="hero-left">
            <span className="hero-eyebrow fade-up" style={{ animationDelay: "0s" }}>
              {profile.eyebrow}
            </span>

            <h1 className="hero-h1">
              <span className="fade-up" style={{ animationDelay: "0.1s", display: "block" }}>
                {profile.headline.line1}
              </span>
              <span className="fade-up" style={{ animationDelay: "0.18s", display: "block" }}>
                {profile.headline.line2}
              </span>
            </h1>

            <p className="hero-sub fade-up" style={{ animationDelay: "0.28s" }}>
              {profile.sub}
            </p>

            {/* Stats */}
            <div className="hero-stats fade-up" style={{ animationDelay: "0.38s" }}>
              {profile.stats.map((stat, i) => (
                <div key={stat.label} className="hero-stat">
                  <span className="hero-stat-value">
                    <span ref={(el) => { statRefs.current[i] = el; }}>
                      {parseTarget(stat.value)}
                    </span>
                    {stat.value.replace(/\d/g, "")}
                  </span>
                  <span className="hero-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hero-cta fade-up" style={{ animationDelay: "0.48s" }}>
              <a href="#experience" className="btn-primary">
                경력 보기
              </a>
              <a href="#projects" className="btn-secondary">
                프로젝트 보기
              </a>
            </div>
          </div>

          {/* 우측 — Dashboard Panel */}
          <div className="hero-right fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="dashboard-panel glass-card">
              {/* 패널 헤더 */}
              <div className="dashboard-header">
                <div className="dashboard-dots">
                  <span style={{ background: "#FF5F57" }} />
                  <span style={{ background: "#FEBC2E" }} />
                  <span style={{ background: "#28C840" }} />
                </div>
                <span className="dashboard-title">dashboard.tsx</span>
              </div>

              {/* Metrics */}
              <div className="dashboard-metrics">
                {profile.dashboard.metrics.map((m) => (
                  <div key={m.label} className="dashboard-metric">
                    <span className="dashboard-metric-value">{m.value}</span>
                    <span className="dashboard-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* 구분선 */}
              <div style={{ height: "1px", background: "var(--bg-border)", margin: "16px 0" }} />

              {/* Status */}
              <div className="dashboard-status-list">
                {profile.dashboard.status.map((s) => (
                  <div key={s.label} className="dashboard-status-item">
                    <span
                      className="dashboard-status-dot"
                      style={{ background: STATE_COLOR[s.state] }}
                    />
                    <span className="dashboard-status-label">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* 구분선 */}
              <div style={{ height: "1px", background: "var(--bg-border)", margin: "16px 0" }} />

              {/* Summary */}
              <div className="dashboard-summary">
                {profile.dashboard.summary.map((s) => (
                  <span key={s.label} className="dashboard-summary-tag">
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
