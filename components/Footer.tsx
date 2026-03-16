"use client";

import { useState } from "react";
import { footer } from "@/data/resume";

const GMAIL = "junic2391@gmail.com";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(GMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <footer
      className="py-8 px-6"
      style={{ borderTop: "1px solid var(--glass-border)" }}
    >
      <div className="max-w-[1080px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <span
          className="font-mono text-[11px]"
          style={{ color: "var(--text-muted)" }}
        >
          {footer.copyright}
        </span>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 font-mono text-[11px] transition-colors duration-200 cursor-pointer relative"
          style={{ color: "var(--accent)" }}
          aria-label="이메일 주소 복사"
        >
          {/* Gmail icon */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2 6C2 4.895 2.895 4 4 4h16c1.105 0 2 .895 2 2v12c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V6z"
              fill="white"
              fillOpacity="0.08"
            />
            <path
              d="M2 6l10 7 10-7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <rect
              x="2"
              y="4"
              width="20"
              height="16"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          {GMAIL}

          {/* Copied tooltip */}
          {copied && (
            <span
              className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-mono whitespace-nowrap"
              style={{
                background: "var(--accent)",
                color: "var(--bg-primary)",
              }}
            >
              Copied!
            </span>
          )}
        </button>
      </div>
    </footer>
  );
}
