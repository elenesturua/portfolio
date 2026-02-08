"use client";

import { motion } from "framer-motion";
import { PanelHeader } from "../ContentPanel";
import { HACKATHONS, CHESS_PIECES } from "../data/portfolio-data";

export default function HackathonsPanel() {
  return (
    <div>
      <PanelHeader piece={CHESS_PIECES.king} title="Hackathons" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {HACKATHONS.map((hackathon, index) => (
          <motion.div
            key={hackathon.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`
              border p-7 relative overflow-hidden transition-all duration-400
              cursor-pointer bg-accent-gold/[0.02] group
              hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]
              ${hackathon.isWinner 
                ? "border-accent-gold/30 hover:border-accent-gold/50" 
                : "border-card-border hover:border-card-hover-border"}
            `}
          >
            {/* Animated top border */}
            <div
              className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent-gold to-transparent
                         scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"
            />
            
            <div className="text-3xl mb-3">{hackathon.icon}</div>
            
            <h3 className="font-playfair text-xl font-bold mb-2">{hackathon.name}</h3>
            
            <p className="font-mono text-[0.65rem] text-accent-gold tracking-wider mb-3">
              {hackathon.result}
            </p>
            
            <p className="text-sm text-text-muted leading-relaxed">{hackathon.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
