import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
type ProjectCardProps = { project: Project; index: number; onSelect: (project: Project) => void };
export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (<motion.button
    layout
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 8 }}
    transition={{ duration: 0.25, delay: index * 0.025 }}
    className="project-card"

    onClick={() => onSelect(project)}
  >
    <div className={`project-image image-${project.id}`}>
      <span className="image-index">{String(index + 1).padStart(2, "0")}</span>
      <span className="image-open">
        <ArrowUpRight size={17} />
      </span>
      <span className="image-title">{project.title}</span>
    </div>
    <div className="project-caption">
      <span>{project.title}</span>
      <span>{project.year}</span>
    </div>
    <p className="project-description">{project.description}</p>
  </motion.button>);
}
