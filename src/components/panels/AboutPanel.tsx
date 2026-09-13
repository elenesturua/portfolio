"use client";

import { motion } from "framer-motion";
import { PanelHeader } from "../ContentPanel";
import { ABOUT, CHESS_PIECES } from "../data/portfolio-data";

export default function AboutPanel() {
  return (
    <div>
      <PanelHeader piece={CHESS_PIECES.bishop} title="About Me" />
      
      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border border-accent-gold/25 p-8 mb-6 transition-all duration-300
                   bg-accent-gold/[0.02] hover:border-card-hover-border
                   hover:translate-x-2 hover:bg-accent-gold/[0.04]"
      >
        <div className="text-accent-cream text-base leading-[1.8] whitespace-pre-line">
          {ABOUT.bio}
        </div>
      </motion.div>
      
      {/* Community */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="border border-card-border p-8 transition-all duration-300
                   bg-accent-gold/[0.02] hover:border-card-hover-border
                   hover:translate-x-2 hover:bg-accent-gold/[0.04]"
      >
        <h3 className="font-playfair text-lg font-bold mb-4">Community Involvement</h3>
        <ul className="space-y-2 text-text-muted text-sm">
          {ABOUT.community.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="text-accent-gold mt-0.5 shrink-0">♟</span>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
