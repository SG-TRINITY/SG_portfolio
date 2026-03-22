export const THEME_STORAGE_KEY = "sg-theme";

export type SiteTheme = "terminal" | "academia";

export const themes: readonly SiteTheme[] = ["terminal", "academia"] as const;

export function isSiteTheme(v: string | null): v is SiteTheme {
  return v === "terminal" || v === "academia";
}
