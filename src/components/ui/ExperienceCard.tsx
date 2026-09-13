"use client";

import { motion } from "framer-motion";
import type { Experience } from "../data/portfolio-data";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border border-card-border p-8 mb-6 relative transition-all duration-300
                 bg-accent-gold/[0.02] hover:border-card-hover-border
                 hover:translate-x-2 hover:bg-accent-gold/[0.04]"
    >
      <h3 className="font-playfair text-xl font-bold mb-1 pr-28">{experience.role}</h3>
      
      <p className="font-mono text-sm text-accent-gold mb-3 pr-28">{experience.company}</p>
      
      <div className="absolute top-4 right-4 font-mono text-[0.65rem] text-text-muted tracking-wider">
        {experience.dateRange}
      </div>
      
      <div className="text-text-muted text-sm leading-relaxed space-y-2">
        {experience.description.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
      </div>
    </motion.div>
  );
}
