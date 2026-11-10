import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project } from "@/data/projects";
type ProjectModalProps = { project: Project; position: number; total: number; onClose: () => void; onNavigate: (direction: -1 | 1) => void };
export function ProjectModal({ project, position, total, onClose, onNavigate }: ProjectModalProps) {
  const dialogRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const controls = dialogRef.current?.querySelectorAll<HTMLElement>("button, a[href]");
      if (!controls?.length) return;
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);
  return (<motion.div
    className="modal-backdrop"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}
  >
    <motion.section
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      ref={dialogRef} tabIndex={-1} className="project-modal"
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 12, scale: 0.985 }}
      transition={{ duration: 0.22 }}
    >
      <div className="modal-top">
        <span className="eyebrow">
          {project.category} / {project.year}
        </span>
        <button
          className="icon-button"
          aria-label="Close project details"
          onClick={() => onClose()}
        >
          <X size={17} />
        </button>
      </div>
      <div className="modal-content">
        <div>
          <h2 id="modal-title">{project.title}</h2>
          <p className="modal-lede">{project.description}</p>
          {project.details.map((detail) => (
            <p className="modal-paragraph" key={detail}>
              {detail}
            </p>
          ))}
          <div className="tag-list">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="modal-links">
            {project.links.length ? (
              project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} <ArrowUpRight size={13} />
                </a>
              ))
            ) : null}
          </div>
        </div>
        <div className={`modal-art image-${project.id}`}>
          <span>{project.title}</span>

        </div>
      </div>
      <div className="modal-bottom">
        <button onClick={() => onNavigate(-1)}>
          <ChevronLeft size={15} /> Previous
        </button>
        <span>
          {position}{" "}
          / {total}
        </span>
        <button onClick={() => onNavigate(1)}>
          Next <ChevronRight size={15} />
        </button>
      </div>
    </motion.section>
  </motion.div>);
}
