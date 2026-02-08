"use client";

import { useState, useCallback } from "react";
import Hero from "@/components/Hero";
import ChessBoard from "@/components/ChessBoard";
import MoveHistory from "@/components/MoveHistory";
import ContentPanel from "@/components/ContentPanel";
import {
  ExperiencePanel,
  ProjectsPanel,
  SkillsPanel,
  EducationPanel,
  ResearchPanel,
  HackathonsPanel,
  AboutPanel,
  ContactPanel,
} from "@/components/panels";

export default function Home() {
  const [activePanel, setActivePanel] = useState("about");

  const handleSquareClick = useCallback((panelId: string) => {
    setActivePanel(panelId);
    // Smooth scroll to content area
    setTimeout(() => {
      document.querySelector("#content-area")?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 100);
  }, []);

  const panels: Record<string, React.ReactNode> = {
    experience: <ExperiencePanel />,
    projects: <ProjectsPanel />,
    skills: <SkillsPanel />,
    education: <EducationPanel />,
    research: <ResearchPanel />,
    hackathons: <HackathonsPanel />,
    about: <AboutPanel />,
    contact: <ContactPanel />,
  };

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Chess Board Navigation Section */}
      <section
        id="board-section"
        className="py-16 px-5 max-w-[1200px] mx-auto"
      >
        <div className="section-label mb-10">Select a piece to explore</div>

        <ChessBoard activePanel={activePanel} onSquareClick={handleSquareClick} />

        <MoveHistory activePanel={activePanel} />

        {/* Content Panels */}
        <div id="content-area" className="min-h-[400px]">
          {Object.entries(panels).map(([key, panel]) => (
            <ContentPanel key={key} isActive={activePanel === key}>
              {panel}
            </ContentPanel>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-5 border-t border-accent-gold/10">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} Elene Sturua
          </p>
          <p className="font-mono text-xs text-text-muted flex items-center gap-2">
            <span>♚</span>
            Built with Next.js & a love for chess
          </p>
        </div>
      </footer>
    </main>
  );
}
