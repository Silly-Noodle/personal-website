"use client";
import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projects, type Project, type ProjectCategory } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";
const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Projects",
  "Writing",
  "Experiments",
];

export function WorkSection() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const visibleProjects = useMemo(
    () =>
      category === "All"
        ? projects
        : projects.filter((project) => project.category === category),
    [category],
  );

  function moveProject(direction: -1 | 1) {
    if (!activeProject) return;
    const index = visibleProjects.findIndex(
      (project) => project.id === activeProject.id,
    );
    const next =
      (index + direction + visibleProjects.length) % visibleProjects.length;
    setActiveProject(visibleProjects[next]);
  }

  const closeProject = useCallback(() => setActiveProject(null), []);
  return (
    <>
      <section className="work-section">
        <div className="section-wrap">
          <div className="work-header">
            <div>
              <h2>
                A few things I&apos;ve made<span>.</span>
              </h2>
            </div>
            <p className="work-aside">
              A mix of projects, experiments, and ideas
              <br />
              that I&apos;ve enjoyed spending time with.
            </p>
          </div>

          <div className="filters" aria-label="Filter projects">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "filter active" : "filter"}
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                <span className={`filter-dot ${item.toLowerCase()}`} />
                {item}
              </button>
            ))}
          </div>

          <motion.div layout className="project-grid">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
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
              visibleProjects.findIndex(
                (project) => project.id === activeProject.id,
              ) + 1
            }
            total={visibleProjects.length}
            onClose={closeProject}
            onNavigate={moveProject}
          />
        )}
      </AnimatePresence>
    </>
  );
}
