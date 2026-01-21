"use client";

import { useSyncExternalStore } from "react";

const themes = {
  light: "light",
  dark: "dark",
} as const;

type Theme = (typeof themes)[keyof typeof themes];

const THEME_EVENT = "theme-change";

const getSystemTheme = (): Theme => {
  if (typeof window === "undefined") {
    return themes.light;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? themes.dark
    : themes.light;
};

const getDocumentTheme = (): Theme => {
  if (typeof document === "undefined") {
    return themes.light;
  }

  const current = document.documentElement.dataset.theme as Theme | undefined;
  if (current === themes.dark || current === themes.light) {
    return current;
  }

  const systemTheme = getSystemTheme();
  document.documentElement.dataset.theme = systemTheme;
  return systemTheme;
};

const subscribe = (callback: () => void) => {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleThemeEvent = () => callback();
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleSystemChange = () => {
    const systemTheme = getSystemTheme();
    document.documentElement.dataset.theme = systemTheme;
    callback();
  };

  window.addEventListener(THEME_EVENT, handleThemeEvent);
  mediaQuery.addEventListener("change", handleSystemChange);

  return () => {
    window.removeEventListener(THEME_EVENT, handleThemeEvent);
    mediaQuery.removeEventListener("change", handleSystemChange);
  };
};

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getDocumentTheme,
    () => themes.light
  );

  const toggleTheme = () => {
    if (typeof document === "undefined") {
      return;
    }

    const next = theme === themes.dark ? themes.light : themes.dark;
    document.documentElement.dataset.theme = next;

    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event(THEME_EVENT));
    }
  };

  const isDark = theme === themes.dark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-subtle bg-surface/80 text-foreground shadow-soft transition-colors duration-500 hover:border-accent/40"
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`pointer-events-none text-lg transition-transform duration-400 ease-out ${
          isDark ? "-translate-x-6 opacity-0" : "translate-x-0 opacity-100"
        }`}
        aria-hidden
      >
        ☀️
      </span>
      <span
        className={`pointer-events-none absolute text-lg transition-transform duration-400 ease-out ${
          isDark ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
        }`}
        aria-hidden
      >
        🌙
      </span>
    </button>
  );
}
