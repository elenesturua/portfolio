"use client";

import { motion } from "framer-motion";
import type { Project } from "../data/portfolio-data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border border-card-border p-7 relative overflow-hidden transition-all duration-400
                 cursor-pointer bg-accent-gold/[0.02] group
                 hover:border-card-hover-border hover:-translate-y-1
                 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
    >
      {/* Animated top border */}
      <div
        className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent-gold to-transparent
                   scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"
      />
      
      <div className="text-3xl mb-3">{project.piece}</div>
      
      <h3 className="font-playfair text-xl font-bold mb-2">{project.name}</h3>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[0.65rem] text-accent-gold tracking-wider"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {project.badge && (
        <div className="font-mono text-xs text-accent-gold mb-3 font-semibold">
          {project.badge}
        </div>
      )}
      
      <p className="text-sm text-text-muted leading-relaxed">{project.description}</p>
      
      {project.links && project.links.length > 0 && (
        <div className="flex gap-3 mt-4">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="font-mono text-xs text-accent-gold/70 hover:text-accent-gold
                         transition-colors duration-200 flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>↗</span>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  );
}
