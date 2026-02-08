"use client";

import { motion } from "framer-motion";

interface SkillTileProps {
  skill: string;
  index: number;
  isLight: boolean;
}

export default function SkillTile({ skill, index, isLight }: SkillTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      className={`
        aspect-square flex items-center justify-center font-mono
        text-[clamp(0.45rem,0.9vw,0.65rem)] text-center p-1
        cursor-default transition-all duration-300 relative
        ${isLight ? "bg-bg-board-light" : "bg-bg-board-dark"}
        text-accent-cream
        hover:bg-accent-gold/20 hover:scale-110 hover:z-10 hover:text-accent-gold
      `}
    >
      {skill}
    </motion.div>
  );
}
