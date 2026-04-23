"use client";

import { useTheme } from "@/components/theme-provider";

const iconMotion =
  "transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:duration-0";

export function ThemeToggle() {
  const { mode, toggle } = useTheme();
  const isDark = mode === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-transparent p-0 text-[var(--muted)] transition-[color,transform] duration-200 ease-out hover:text-[var(--foreground)] active:scale-[0.92] motion-reduce:active:scale-100 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="relative grid h-[18px] w-[18px] place-items-center" aria-hidden>
        <span
          className={`absolute inset-0 flex items-center justify-center ${iconMotion} ${
            isDark ? "scale-[0.78] rotate-45 opacity-0" : "scale-100 rotate-0 opacity-100"
          }`}
        >
          <MoonIcon />
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center ${iconMotion} ${
            isDark ? "scale-100 rotate-0 opacity-100" : "scale-[0.78] -rotate-45 opacity-0"
          }`}
        >
          <SunIcon />
        </span>
      </span>
    </button>
  );
}

/** Classic crescent moon (Lucide-style) */
function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Sun with disc + eight rays (Lucide-style) */
function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      <path
        d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41m12.02-12.02l-1.41-1.41M17.66 6.34l1.41-1.41M6.34 6.34l-1.41-1.41"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
