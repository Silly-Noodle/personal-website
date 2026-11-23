import Image from "next/image";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";

type ProjectCardProps = { project: Project; index: number; onSelect: (project: Project) => void };

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <motion.article layout className="project-card" initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, delay: index * 0.025 }}>
      <button className="project-cover" onClick={() => onSelect(project)} aria-label={`Open ${project.title} details`}>
        <picture>
          {project.reducedMotionImage && (
            <source media="(prefers-reduced-motion: reduce)" srcSet={project.reducedMotionImage} />
          )}
          <Image className="project-image" src={project.image} alt={project.imageAlt}
            width={project.imageWidth} height={project.imageHeight} unoptimized={Boolean(project.reducedMotionImage)} sizes="(max-width: 480px) 90vw, 400px" />
        </picture>
      </button>
      <header className="project-caption">
        <h3><button onClick={() => onSelect(project)}>{project.title}</button></h3>
        <span>{project.year}</span>
      </header>
      <div className="project-story" role="region" aria-label={`${project.title} story`} tabIndex={0}>
        <p>{project.description}</p>
        {project.photo && (
          <figure>
            <Image src={project.photo.src} width={project.photo.width} height={project.photo.height} alt="" />
            <figcaption>{project.photo.caption}</figcaption>
          </figure>
        )}
        {project.details.map((detail) => <p key={detail}>{detail}</p>)}
      </div>
    </motion.article>
  );
}
