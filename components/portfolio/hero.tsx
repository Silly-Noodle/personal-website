"use client";

import { Moon, Sun } from "lucide-react";
import { usePortfolioTheme } from "@/components/portfolio";

export function Hero() {
  const { dark, toggleTheme } = usePortfolioTheme();
  return (
    <section className="dune-hero" id="top" aria-labelledby="hero-title">
      <div className="dune-hero__art" aria-hidden="true" />
      <button
        type="button"
        className="icon-button dune-hero__theme-toggle"
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={dark}
        onClick={toggleTheme}
      >
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      <div className="dune-hero__content section-wrap">
        <h1 id="hero-title">Eric Huang</h1>
      </div>
    </section>
  );
}
