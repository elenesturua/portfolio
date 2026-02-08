"use client";

import { MOVE_NOTATIONS } from "./data/portfolio-data";

interface MoveHistoryProps {
  activePanel: string;
}

export default function MoveHistory({ activePanel }: MoveHistoryProps) {
  return (
    <div
      className="font-mono text-xs text-text-muted py-3 px-5
                 bg-accent-gold/[0.03] border-l-2 border-accent-gold/20
                 mb-10 flex gap-5 flex-wrap"
      role="status"
      aria-live="polite"
    >
      <span className="text-accent-gold">{MOVE_NOTATIONS[activePanel]}</span>
    </div>
  );
}
