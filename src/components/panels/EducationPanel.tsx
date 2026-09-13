"use client";

import { motion } from "framer-motion";
import { PanelHeader } from "../ContentPanel";
import { EDUCATION, CHESS_PIECES, type Education } from "../data/portfolio-data";

export default function EducationPanel() {
  return (
    <div>
      <PanelHeader piece={CHESS_PIECES.queen} title="Education" />

      <div className="space-y-8">
        {EDUCATION.map((school, index) => (
          <SchoolCard key={school.id} school={school} index={index} />
        ))}
      </div>
    </div>
  );
}

function SchoolCard({ school, index }: { school: Education; index: number }) {
  const isCurrent = school.status === "current";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      className={`
        border p-8 sm:p-10 relative transition-all duration-300
        hover:translate-x-2
        ${
          isCurrent
            ? "border-accent-gold/30 bg-accent-gold/[0.04] hover:border-accent-gold/50"
            : "border-card-border bg-accent-gold/[0.02] hover:border-card-hover-border hover:bg-accent-gold/[0.04]"
        }
      `}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <span
          className={`
            font-mono text-[0.6rem] tracking-[2px] uppercase px-2.5 py-1 border shrink-0
            ${
              isCurrent
                ? "text-accent-gold border-accent-gold/40 bg-accent-gold/10"
                : "text-text-muted border-card-border"
            }
          `}
        >
          {isCurrent ? "White to move" : "Game complete"}
        </span>
        <span className="font-mono text-[0.65rem] text-text-muted tracking-wider text-right">
          {school.dateLabel}
        </span>
      </div>

      <h3 className="font-playfair text-2xl font-bold mb-2">
        {school.institution}
      </h3>

      <p className="font-mono text-sm text-accent-gold mb-1">{school.degree}</p>
      <p className="font-mono text-sm text-accent-gold/70 mb-4">
        {school.location}
        {school.minor ? ` · Minor: ${school.minor}` : ""}
      </p>

      {school.honors && school.honors.length > 0 && (
        <ul className="space-y-2 mb-6">
          {school.honors.map((honor) => (
            <li
              key={honor}
              className="flex items-start gap-2.5 text-sm text-accent-cream/90 leading-relaxed"
            >
              <span className="text-accent-gold mt-0.5 shrink-0">
                {isCurrent ? "♛" : "🏆"}
              </span>
              {honor}
            </li>
          ))}
        </ul>
      )}

      {school.currentCourses && school.currentCourses.length > 0 && (
        <div className="mt-2">
          <p className="font-mono text-[0.65rem] text-text-muted tracking-[3px] uppercase mb-3">
            This semester&apos;s board
          </p>
          <div className="grid grid-cols-2 border border-accent-gold/20 max-w-[520px]">
            {school.currentCourses.map((course, i) => {
              const row = Math.floor(i / 2);
              const col = i % 2;
              const isLight = (row + col) % 2 === 0;
              return (
                <div
                  key={course.name}
                  className={`
                    relative p-4 min-h-[120px] flex flex-col items-center justify-center text-center
                    ${isLight ? "bg-bg-board-light" : "bg-bg-board-dark"}
                  `}
                >
                  <span className="text-2xl mb-2">{course.piece}</span>
                  <p className="font-playfair text-sm font-semibold text-accent-cream leading-snug">
                    {course.name}
                  </p>
                  {course.note && (
                    <p className="font-mono text-[0.55rem] text-text-muted mt-2 leading-relaxed">
                      {course.note}
                    </p>
                  )}
                  <span className="absolute bottom-1 right-1.5 font-mono text-[0.5rem] text-accent-gold/25">
                    {course.notation}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {school.coursework && school.coursework.length > 0 && (
        <div className="text-text-muted text-sm leading-relaxed mt-2">
          <p className="font-semibold text-accent-cream/80 mb-2">
            Relevant Coursework
          </p>
          <p>{school.coursework.join(", ")}</p>
        </div>
      )}
    </motion.div>
  );
}
