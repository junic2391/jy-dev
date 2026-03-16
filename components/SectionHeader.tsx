"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, VIEWPORT } from "@/lib/motion";

interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
}

export default function SectionHeader({ eyebrow, heading }: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-14"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      <motion.span
        variants={fadeUp}
        className="font-mono text-xs text-accent uppercase tracking-widest"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="mt-3 text-[clamp(28px,4vw,40px)] font-bold text-text-primary tracking-[-0.02em]"
      >
        {heading}
      </motion.h2>
    </motion.div>
  );
}
