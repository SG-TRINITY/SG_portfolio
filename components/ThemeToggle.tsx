"use client";

import { useEffect, useState } from "react";
import { isSiteTheme, type SiteTheme, THEME_STORAGE_KEY, themes } from "@/lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<SiteTheme>("terminal");

  useEffect(() => {
    const fromDom = document.documentElement.getAttribute("data-theme");
    if (isSiteTheme(fromDom)) setTheme(fromDom);
  }, []);

  function apply(next: SiteTheme) {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    setTheme(next);
  }

  return (
    <div className="theme-switch" role="group" aria-label="Color theme">
      {themes.map((t) => (
        <button
          key={t}
          type="button"
          className={`theme-switch-btn${theme === t ? " active" : ""}`}
          onClick={() => apply(t)}
          aria-pressed={theme === t}
        >
          {t === "terminal" ? "terminal" : "academia"}
        </button>
      ))}
    </div>
  );
}
