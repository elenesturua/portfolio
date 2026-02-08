"use client";

import { motion } from "framer-motion";
import { PanelHeader } from "../ContentPanel";
import SkillTile from "../ui/SkillTile";
import { SKILLS_FLAT, HUMAN_LANGUAGES, CHESS_PIECES } from "../data/portfolio-data";

export default function SkillsPanel() {
  const isLightSquare = (index: number) => {
    const row = Math.floor(index / 8);
    const col = index % 8;
    return (row + col) % 2 === 0;
  };

  return (
    <div>
      <PanelHeader piece={CHESS_PIECES.bishop} title="Skills" />

      {/* Technical Skills Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-1 max-w-[600px]">
        {SKILLS_FLAT.map((skill, index) => (
          <SkillTile
            key={skill}
            skill={skill}
            index={index}
            isLight={isLightSquare(index)}
          />
        ))}
      </div>

      {/* Human Languages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-10"
      >
        <h3 className="font-mono text-xs text-text-muted tracking-[3px] uppercase mb-5">
          Languages
        </h3>
        <div className="flex flex-wrap gap-4">
          {HUMAN_LANGUAGES.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.06 }}
              className="border border-card-border px-5 py-3 transition-all duration-300
                         bg-accent-gold/[0.02] hover:border-accent-gold/40
                         hover:-translate-y-0.5 hover:bg-accent-gold/[0.04]
                         flex items-center gap-3"
            >
              <span className="text-lg">{lang.flag}</span>
              <div>
                <p className="font-playfair text-sm font-semibold text-accent-cream">
                  {lang.name}
                </p>
                <p className="font-mono text-[0.6rem] text-accent-gold tracking-wider uppercase">
                  {lang.level}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
