"use client";

import { motion } from "framer-motion";
import { NAV_SQUARES, type NavSquare } from "./data/portfolio-data";

interface ChessBoardProps {
  activePanel: string;
  onSquareClick: (panelId: string) => void;
}

export default function ChessBoard({ activePanel, onSquareClick }: ChessBoardProps) {
  const isLightSquare = (index: number) => {
    const row = Math.floor(index / 4);
    const col = index % 4;
    return (row + col) % 2 === 0;
  };

  return (
    <div
      className="grid grid-cols-2 sm:grid-cols-4 gap-0 max-w-[720px] mx-auto mb-12
                 border-2 border-accent-gold/20"
      role="navigation"
      aria-label="Portfolio sections navigation"
    >
      {NAV_SQUARES.map((square, index) => (
        <ChessSquare
          key={square.id}
          square={square}
          isLight={isLightSquare(index)}
          isActive={activePanel === square.panelId}
          onClick={() => onSquareClick(square.panelId)}
        />
      ))}
    </div>
  );
}

interface ChessSquareProps {
  square: NavSquare;
  isLight: boolean;
  isActive: boolean;
  onClick: () => void;
}

function ChessSquare({ square, isLight, isActive, onClick }: ChessSquareProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        aspect-square flex flex-col items-center justify-center cursor-pointer
        relative transition-all duration-300 overflow-hidden p-2.5
        min-h-[100px] sm:min-h-[140px]
        ${isLight ? "bg-bg-board-light" : "bg-bg-board-dark"}
        ${isActive ? "bg-accent-gold/20 shadow-[inset_0_0_30px_rgba(212,168,67,0.1)]" : ""}
        hover:bg-accent-gold/15 hover:scale-[1.02] hover:z-10
        hover:shadow-[0_0_40px_rgba(212,168,67,0.1)]
        focus-visible:outline-accent-gold
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`${square.piece} — View ${square.label} section`}
      aria-pressed={isActive}
    >
      <motion.span
        className="text-[clamp(2rem,5vw,3.5rem)] mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
        whileHover={{ scale: 1.15, y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {square.piece}
      </motion.span>
      
      <span
        className={`
          font-mono text-[clamp(0.5rem,1.2vw,0.7rem)] tracking-[2px] uppercase
          text-center transition-colors duration-300
          ${isActive ? "text-accent-gold" : "text-text-muted"}
          group-hover:text-accent-gold
        `}
      >
        {square.label}
      </span>
      
      <span className="absolute bottom-1 right-1.5 font-mono text-[0.55rem] text-accent-gold/20">
        {square.notation}
      </span>
    </motion.button>
  );
}
