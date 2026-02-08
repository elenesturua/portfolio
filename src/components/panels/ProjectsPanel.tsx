"use client";

import { PanelHeader } from "../ContentPanel";
import ProjectCard from "../ui/ProjectCard";
import { PROJECTS, CHESS_PIECES } from "../data/portfolio-data";

export default function ProjectsPanel() {
  return (
    <div>
      <PanelHeader piece={CHESS_PIECES.knight} title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
