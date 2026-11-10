import { ArrowUpRight, Mail } from "lucide-react";
import { experience } from "@/data/experience";
export function AboutSection() {
  return (
    <section className="intro section-wrap">
      <div className="intro-left">
        <p className="intro-copy">
          Hi, welcome to my corner of the internet! I&apos;m a CS + Business
          student at Western University. I&apos;m interested in sci-fi books,
          tech, and learning about how the world works!
        </p>
        <p className="intro-copy secondary-copy">
          Usually exploring something new, building small things, or trying to
          understand how the world works. Always happy to talk about technology,
          music, design, and ideas.
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/ericfxh/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={12} />
          </a>
          <a href="mailto:ehuang.hba@ivey.ca">
            <Mail size={12} /> Email
          </a>
          <a
            href="https://github.com/Silly-Noodle"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      <div className="intro-right">
        <div className="section-heading">
          <span className="eyebrow">What I've been up to!</span>
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
          <span>CS + HBA candidate · 2024–2028</span>
        </div>
      </div>
    </section>
  );
}
