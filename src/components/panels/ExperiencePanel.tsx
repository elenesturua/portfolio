"use client";

import { PanelHeader } from "../ContentPanel";
import ExperienceCard from "../ui/ExperienceCard";
import { EXPERIENCES, CHESS_PIECES } from "../data/portfolio-data";

export default function ExperiencePanel() {
  return (
    <div>
      <PanelHeader piece={CHESS_PIECES.rook} title="Experience" />
      <div>
        {EXPERIENCES.map((exp, index) => (
          <ExperienceCard key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
}
