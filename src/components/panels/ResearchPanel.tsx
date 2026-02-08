"use client";

import { motion } from "framer-motion";
import { PanelHeader } from "../ContentPanel";
import { RESEARCH, CHESS_PIECES } from "../data/portfolio-data";

export default function ResearchPanel() {
  return (
    <div>
      <PanelHeader piece={CHESS_PIECES.pawn} title="Research" />
      
      <div>
        {RESEARCH.map((research, index) => (
          <motion.div
            key={research.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`
              border p-8 mb-6 relative transition-all duration-300
              bg-accent-gold/[0.02] hover:translate-x-2 hover:bg-accent-gold/[0.04]
              ${research.isPublication 
                ? "border-accent-gold/25 hover:border-accent-gold/40" 
                : "border-card-border hover:border-card-hover-border"}
            `}
          >
            {research.isPublication && (
              <div className="text-lg mb-2">📄</div>
            )}
            
            <h3 className={`font-playfair font-bold mb-1 ${research.isPublication ? "text-lg" : "text-xl"}`}>
              {research.role}
            </h3>
            
            <p className="font-mono text-sm text-accent-gold mb-3">{research.institution}</p>
            
            <div className="absolute top-4 right-4 font-mono text-[0.65rem] text-text-muted tracking-wider">
              {research.dateRange}
            </div>
            
            <div className="text-text-muted text-sm leading-relaxed space-y-2">
              {research.description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>

            {research.publicationLink && (
              <a
                href={research.publicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 font-mono text-xs text-accent-gold/70 
                           hover:text-accent-gold transition-colors duration-200"
              >
                <span>↗</span>
                View on SIGCSE
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
