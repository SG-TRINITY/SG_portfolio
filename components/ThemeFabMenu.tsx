"use client";

import { useEffect, useRef, useState } from "react";
import {
  isSiteTheme,
  type SiteTheme,
  THEME_CHANGE_EVENT,
  THEME_STORAGE_KEY,
  themes,
} from "@/lib/theme";

function ThemePaletteIcon() {
  return (
    <svg
      className="theme-fab-icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 3.25c-5.25 0-9.25 3.9-9.25 8.55 0 3.85 2.45 7.05 6.35 7.75.35.06.7-.12.9-.42l1.35-2.05c.2-.32.55-.52.92-.52h1.48c3.45 0 6.25-2.8 6.25-6.25 0-5.05-4.05-9.06-9-9.06Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="8.35" cy="10.15" r="1.2" fill="currentColor" />
      <circle cx="11.35" cy="7.55" r="1.2" fill="currentColor" />
      <circle cx="14.85" cy="7.55" r="1.2" fill="currentColor" />
      <circle cx="17.35" cy="10.65" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function ThemeFabMenu() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<SiteTheme>("terminal");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncFromDom = () => {
      const fromDom = document.documentElement.getAttribute("data-theme");
      if (isSiteTheme(fromDom)) setTheme(fromDom);
      else setTheme("terminal");
    };
    syncFromDom();
    window.addEventListener(THEME_CHANGE_EVENT, syncFromDom);
    return () => window.removeEventListener(THEME_CHANGE_EVENT, syncFromDom);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function apply(next: SiteTheme) {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }

  return (
    <div className="theme-fab-root" ref={rootRef}>
      <div className="theme-fab-stack">
        {open ? (
          <div
            className="theme-fab-panel"
            role="menu"
            aria-label="Site theme"
          >
            {themes.map((t) => (
              <button
                key={t}
                type="button"
                role="menuitemradio"
                aria-checked={theme === t}
                className={`theme-fab-option${theme === t ? " active" : ""}`}
                onClick={() => {
                  apply(t);
                  setOpen(false);
                }}
              >
                {t === "terminal" ? "terminal" : "academia"}
              </button>
            ))}
          </div>
        ) : null}
        <button
          type="button"
          className={`theme-fab${open ? " theme-fab-open" : ""}`}
          aria-expanded={open}
          aria-haspopup="true"
          aria-label={open ? "Close theme menu" : "Open theme menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <ThemePaletteIcon />
        </button>
      </div>
    </div>
  );
}
