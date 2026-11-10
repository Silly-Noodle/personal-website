"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { MotionConfig } from "motion/react";

type ThemeContextValue = { dark: boolean; toggleTheme: () => void };
const ThemeContext = createContext<ThemeContextValue | null>(null);

export function usePortfolioTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error("Theme controls must be inside Portfolio.");
  return theme;
}

export function Portfolio({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ dark, toggleTheme: () => setDark(current => !current) }}>
      <MotionConfig reducedMotion="user">
        <div className={dark ? "site dark" : "site"}>
          <a className="skip-link" href="#main-content">Skip to content</a>
          {children}
        </div>
      </MotionConfig>
    </ThemeContext.Provider>
  );
}
