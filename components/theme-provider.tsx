"use client";

import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from "react";
import { THEME_STORAGE_KEY } from "@/lib/theme-script";

export type ThemeMode = "light" | "dark";

type ThemeContextValue = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredMode(): ThemeMode | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY);
    if (v === "light" || v === "dark") return v;
  } catch {
    /* ignore */
  }
  return null;
}

function resolveMode(): ThemeMode {
  const stored = readStoredMode();
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function persistMode(mode: ThemeMode) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  } catch {
    /* ignore */
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  /** Matches SSR / first client paint so hydration stays aligned; real value applied in `useLayoutEffect`. */
  const [mode, setModeState] = useState<ThemeMode>("light");

  useLayoutEffect(() => {
    setModeState(resolveMode());
  }, []);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    persistMode(next);
  }, []);

  const toggle = useCallback(() => {
    setModeState((prev) => {
      const next: ThemeMode = prev === "dark" ? "light" : "dark";
      persistMode(next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ mode, setMode, toggle }), [mode, setMode, toggle]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={`theme-root min-h-dvh ${mode === "dark" ? "dark" : ""}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
