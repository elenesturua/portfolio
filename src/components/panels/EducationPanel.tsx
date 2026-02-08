"use client";

import { motion } from "framer-motion";
import { PanelHeader } from "../ContentPanel";
import { EDUCATION, CHESS_PIECES } from "../data/portfolio-data";

export default function EducationPanel() {
  return (
    <div>
      <PanelHeader piece={CHESS_PIECES.queen} title="Education" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="border border-accent-gold/20 p-10 relative transition-all duration-300
                   bg-accent-gold/[0.02] hover:border-card-hover-border
                   hover:translate-x-2 hover:bg-accent-gold/[0.04]"
      >
        <h3 className="font-playfair text-2xl font-bold mb-2">{EDUCATION.institution}</h3>
        
        <p className="font-mono text-sm text-accent-gold mb-1">{EDUCATION.degree}</p>
        <p className="font-mono text-sm text-accent-gold/70 mb-4">Minor: {EDUCATION.minor}</p>
        
        <div className="absolute top-4 right-4 font-mono text-[0.65rem] text-text-muted tracking-wider">
          {EDUCATION.expectedDate}
        </div>
        
        <div className="text-text-muted text-sm leading-relaxed">
          <p className="font-semibold text-accent-cream/80 mb-2">Relevant Coursework:</p>
          <p>{EDUCATION.coursework.join(", ")}</p>
        </div>
      </motion.div>
    </div>
  );
}
