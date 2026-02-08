"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface ContentPanelProps {
  isActive: boolean;
  children: ReactNode;
}

export default function ContentPanel({ isActive, children }: ContentPanelProps) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface PanelHeaderProps {
  piece: string;
  title: string;
}

export function PanelHeader({ piece, title }: PanelHeaderProps) {
  return (
    <div className="flex items-baseline gap-4 mb-10">
      <span className="text-4xl drop-shadow-[0_2px_10px_rgba(212,168,67,0.3)]">
        {piece}
      </span>
      <h2 className="font-playfair text-[clamp(2rem,4vw,3rem)] font-bold">
        {title}
      </h2>
    </div>
  );
}
