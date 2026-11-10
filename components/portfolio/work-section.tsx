"use client";
import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects, type Project } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";
export function WorkSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  function moveProject(direction: -1 | 1) {
    if (!activeProject) return;
    const index = projects.findIndex(
      (project) => project.id === activeProject.id,
    );
    const next = (index + direction + projects.length) % projects.length;
    setActiveProject(projects[next]);
  }

  const closeProject = useCallback(() => setActiveProject(null), []);
  return (
    <>
      <section className="work-section">
        <div className="section-wrap">
          <div className="work-header">
            <div>
              <h2>
                What I&apos;ve worked on
              </h2>
            </div>
          </div>

          <motion.div layout className="project-grid">
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onSelect={setActiveProject}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            position={
              projects.findIndex((project) => project.id === activeProject.id) +
              1
            }
            total={projects.length}
            onClose={closeProject}
            onNavigate={moveProject}
          />
        )}
      </AnimatePresence>
    </>
  );
}
