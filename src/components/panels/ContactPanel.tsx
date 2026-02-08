"use client";

import { motion } from "framer-motion";
import { PanelHeader } from "../ContentPanel";
import { CONTACT, CHESS_PIECES } from "../data/portfolio-data";

export default function ContactPanel() {
  const contactLinks = [
    {
      icon: "✉",
      label: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: "↗",
      label: "LinkedIn",
      href: CONTACT.linkedin,
      external: true,
    },
    {
      icon: "↗",
      label: "GitHub",
      href: CONTACT.github,
      external: true,
    },
  ];

  return (
    <div>
      <PanelHeader piece={CHESS_PIECES.rook} title="Let's Connect" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center py-12"
      >
        <h3 className="font-playfair text-[clamp(2.5rem,5vw,4rem)] font-black mb-2">
          Checkmate<span className="text-accent-gold">.</span>
        </h3>
        
        <p className="font-mono text-sm text-text-muted tracking-[2px] mb-10">
          You&apos;ve reached the endgame
        </p>
        
        <div className="flex justify-center gap-6 flex-wrap">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              className="font-mono text-sm text-text-muted px-6 py-3
                         border border-accent-gold/15 transition-all duration-300
                         flex items-center gap-2
                         hover:text-accent-gold hover:border-accent-gold
                         hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(212,168,67,0.1)]"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              <span>{link.icon}</span>
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
