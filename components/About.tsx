"use client";

import { motion } from "framer-motion";
import { about } from "@/data/resume";
import SectionHeader from "@/components/SectionHeader";
import { staggerContainer, staggerItem, VIEWPORT } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="py-10 px-6">
      <div className="max-w-[1080px] mx-auto">
        <SectionHeader eyebrow={about.eyebrow} heading={about.heading} />

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {about.cards.map((card) => (
            <motion.div
              key={card.title}
              variants={staggerItem}
              className="glass-card p-8 flex flex-col gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(57,211,83,0.08)] transition-shadow duration-200"
            >
              <span className="text-[28px] leading-none">{card.icon}</span>
              <h3 className="text-lg font-semibold text-text-primary leading-snug">{card.title}</h3>
              <p className="text-sm text-text-secondary leading-[1.75]">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
