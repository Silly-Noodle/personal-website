"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Mail,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { projects, type Project, type ProjectCategory } from "@/data/projects";
import { experience } from "@/data/experience";

const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Projects",
  "Writing",
  "Experiments",
];

export function Portfolio() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [dark, setDark] = useState(false);

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

  return (
    <main className={dark ? "site dark" : "site"}>
      <header className="topbar">
        <a className="wordmark" href="#top">
          EH<span>©</span>
        </a>
        <div className="topbar-right">
          <span className="availability">
            <i /> Open to interesting conversations
          </span>
          <button
            className="icon-button"
            aria-label="Toggle colour theme"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-art dune-hero">
          <div className="hero-art-label">
            A collection of work & curiosities
          </div>
          <span className="hero-number">01 / 26</span>

          <div className="stars" />

          <div className="moon moon-back" />
          <div className="moon moon-front" />

          <div className="dune-ridge dune-ridge-back" />
          <div className="dune-ridge dune-ridge-mid" />
          <div className="dune-ridge dune-ridge-front" />

          <div className="traveler">
            <div className="traveler-head" />
            <div className="traveler-body" />
            <div className="traveler-cape" />
          </div>
        </div>
      </section>

      <section className="intro section-wrap">
        <div className="intro-left">
          <p className="eyebrow">HELLO, I'M</p>
          <h1>
            Eric Huang<span>.</span>
          </h1>
          <p className="intro-copy">
            I study business after spending two years in computer science. I'm
            interested in how people, technology, and ideas come together to
            solve meaningful problems.
          </p>
          <p className="intro-copy secondary-copy">
            Usually exploring something new, building small things, or trying to
            understand how the world works. Always happy to talk about
            technology, music, design, and ideas.
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={12} />
            </a>
            <a href="mailto:hello@example.com">
              <Mail size={12} /> Email
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        <div className="intro-right">
          <div className="section-heading">
            <span className="eyebrow">A LITTLE OF WHAT I'VE BEEN UP TO</span>
            <span className="heading-rule" />
          </div>
          {experience.map((item) => (
            <div className="experience-item" key={item.organization}>
              <div className="experience-top">
                <strong>{item.organization}</strong>
                <span>{item.year}</span>
              </div>
              <p>{item.role}</p>
              <small>{item.description}</small>
            </div>
          ))}
          <div className="education-note">
            <strong>Western University · Ivey Business School</strong>
            <span>HBA candidate · 2024–2028</span>
          </div>
        </div>
      </section>

      <section className="work-section">
        <div className="section-wrap">
          <div className="work-header">
            <div>
              <p className="eyebrow">SELECTED WORK & CURIOSITIES</p>
              <h2>
                A few things I've made<span>.</span>
              </h2>
            </div>
            <p className="work-aside">
              A mix of projects, experiments, and ideas
              <br />
              that I've enjoyed spending time with.
            </p>
          </div>

          <div className="filters" aria-label="Filter projects">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "filter active" : "filter"}
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
                <motion.button
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25, delay: index * 0.025 }}
                  className="project-card"
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                >
                  <div className={`project-image image-${project.id}`}>
                    <span className="image-index">0{index + 1}</span>
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
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <footer className="footer section-wrap">
        <div>
          <p className="eyebrow">THANKS FOR STOPPING BY</p>
          <h2>
            Have something
            <br />
            <em>interesting</em> in mind?
          </h2>
        </div>
        <a className="footer-link" href="mailto:hello@example.com">
          Get in touch <ArrowUpRight size={16} />
        </a>
        <div className="footer-bottom">
          <span>© 2026 Eric Huang</span>
          <span>Made with curiosity.</span>
        </div>
      </footer>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setActiveProject(null);
            }}
          >
            <motion.section
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              className="project-modal"
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.985 }}
              transition={{ duration: 0.22 }}
            >
              <div className="modal-top">
                <span className="eyebrow">
                  {activeProject.category} / {activeProject.year}
                </span>
                <button
                  className="icon-button"
                  aria-label="Close project details"
                  onClick={() => setActiveProject(null)}
                >
                  <X size={17} />
                </button>
              </div>
              <div className="modal-content">
                <div>
                  <h2 id="modal-title">{activeProject.title}</h2>
                  <p className="modal-lede">{activeProject.description}</p>
                  {activeProject.details.map((detail) => (
                    <p className="modal-paragraph" key={detail}>
                      {detail}
                    </p>
                  ))}
                  <div className="tag-list">
                    {activeProject.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="modal-links">
                    {activeProject.links.length ? (
                      activeProject.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label} <ArrowUpRight size={13} />
                        </a>
                      ))
                    ) : (
                      <span className="placeholder-note">
                        Add project links in data/projects.ts
                      </span>
                    )}
                  </div>
                </div>
                <div className={`modal-art image-${activeProject.id}`}>
                  <span>{activeProject.title}</span>
                  <small>PROJECT VISUAL / REPLACE WITH SCREENSHOT</small>
                </div>
              </div>
              <div className="modal-bottom">
                <button onClick={() => moveProject(-1)}>
                  <ChevronLeft size={15} /> Previous
                </button>
                <span>
                  {visibleProjects.findIndex(
                    (project) => project.id === activeProject.id,
                  ) + 1}{" "}
                  / {visibleProjects.length}
                </span>
                <button onClick={() => moveProject(1)}>
                  Next <ChevronRight size={15} />
                </button>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
