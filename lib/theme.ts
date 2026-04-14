/** v2 key; legacy `sg-theme` is ignored so the default stays terminal-first. */
export const THEME_STORAGE_KEY = "sg-site-theme";

export const THEME_CHANGE_EVENT = "sg-theme-change";

export type SiteTheme = "terminal" | "academia";

export const themes: readonly SiteTheme[] = ["terminal", "academia"] as const;

export function isSiteTheme(v: string | null): v is SiteTheme {
  return v === "terminal" || v === "academia";
}
