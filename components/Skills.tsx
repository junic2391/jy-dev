"use client";
import { motion } from "framer-motion";
import { skills } from "@/data/resume";
import SectionHeader from "@/components/SectionHeader";
import { staggerContainer, staggerItem, VIEWPORT } from "@/lib/motion";

export default function Skills() {
  return (
    <section id="skills" className="py-10 px-6">
      <div className="max-w-[1080px] mx-auto">
        <SectionHeader eyebrow="// Skills" heading="기술 스택" />
        <motion.div
          className="glass-card p-6 sm:p-8 flex flex-col divide-y divide-(--glass-border)"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {skills.map((cat) => (
            <motion.div
              key={cat.category}
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-3 py-4 first:pt-0 last:pb-0"
            >
              <span className="font-mono text-[11px] text-accent uppercase tracking-widest w-20 shrink-0 pt-0.5">
                {cat.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.chips.map((chip) => (
                  <span
                    key={chip.name}
                    className={
                      chip.primary
                        ? "font-mono text-[11px] font-semibold px-2.5 py-1 rounded bg-accent text-bg"
                        : "font-mono text-[11px] text-text-muted px-2 py-0.5 rounded border border-(--glass-border)"
                    }
                  >
                    {chip.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
