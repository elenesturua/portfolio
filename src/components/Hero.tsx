"use client";

import { motion } from "framer-motion";
import { FLOATING_PIECES } from "./data/portfolio-data";

export default function Hero() {
  const scrollToBoard = () => {
    document.querySelector("#board-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(212,168,67,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 50%, rgba(139,105,20,0.06) 0%, transparent 50%)
          `,
        }}
      />

      {/* Floating chess pieces */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {FLOATING_PIECES.map((item, index) => (
          <div
            key={index}
            className="absolute text-accent-gold opacity-[0.04] animate-float"
            style={{
              ...item.style,
              fontSize: item.size || "clamp(2rem, 5vw, 4rem)",
              animationDelay: item.delay,
            }}
          >
            {item.piece}
          </div>
        ))}
      </div>

      {/* Hero content */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="font-playfair font-black text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight mb-4">
          Elene
          <br />
          <span className="text-accent-gold italic">Sturua</span>
        </h1>

        <p className="font-mono text-[clamp(0.75rem,1.5vw,1rem)] text-text-muted tracking-[3px] uppercase mb-12">
          Software Engineer · CS & Econ · Class of 2026
        </p>

        <motion.button
          onClick={scrollToBoard}
          className="inline-flex items-center gap-3 font-mono text-sm text-accent-gold 
                     border border-accent-gold/30 px-7 py-3.5 cursor-pointer
                     bg-accent-gold/5 transition-all duration-400
                     hover:bg-accent-gold/15 hover:-translate-y-0.5
                     hover:shadow-[0_8px_30px_rgba(212,168,67,0.15)]
                     animate-pulse-border"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          aria-label="Navigate to portfolio sections"
        >
          <span className="text-xl">♞</span>
          <span>Make your opening move</span>
          <span>→</span>
        </motion.button>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bob">
        <span className="font-mono text-[0.6rem] text-text-muted tracking-[3px] uppercase">
          Scroll
        </span>
        <div className="w-5 h-5 border-r border-b border-text-muted rotate-45" />
      </div>
    </section>
  );
}
