"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/resume";
import { drawerVariants } from "@/lib/motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

function GitHubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="GitHub"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-100 nav-bar transition-[border-color] duration-300${scrolled ? " nav-bar--scrolled" : ""}`}
      >
        <div className="max-w-[1080px] mx-auto px-6 h-[60px] flex items-center justify-between">
          {/* 로고 */}
          <a
            href="#"
            className="font-mono text-[13px] font-semibold text-accent no-underline tracking-[0.04em]"
          >
            {profile.nameEn}
          </a>

          {/* 데스크탑 링크 */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-text-secondary no-underline tracking-[0.06em] hover:text-accent transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center text-text-secondary hover:text-accent hover:-translate-y-0.5 transition-[color,transform] duration-150 no-underline"
            >
              <GitHubIcon />
            </a>
          </div>

          {/* 햄버거 버튼 (모바일) */}
          <button
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="메뉴 열기"
          >
            <motion.span
              className="block w-[22px] h-[2px] bg-text-primary rounded-sm"
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-[22px] h-[2px] bg-text-primary rounded-sm"
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-[22px] h-[2px] bg-text-primary rounded-sm"
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </nav>

      {/* 모바일 드로어 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-99 flex flex-col items-center justify-center gap-10 nav-drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeMenu}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xl font-semibold text-text-primary no-underline tracking-[0.06em] hover:text-accent transition-colors duration-150"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="mt-2 flex items-center text-text-primary hover:text-accent transition-colors duration-150 no-underline"
              onClick={closeMenu}
            >
              <GitHubIcon />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
