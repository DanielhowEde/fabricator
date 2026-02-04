"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle({ disabled }: { disabled?: boolean }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // ✅ No useMemo needed (tiny computation)
  const resolved =
    theme === "system" ? systemTheme ?? "light" : theme ?? "light";

  const isDark = resolved === "dark";

  function animateThemeSwitch() {
    const root = document.documentElement;
    root.classList.add("theme-switching");
    window.setTimeout(() => root.classList.remove("theme-switching"), 220);
  }

  // ✅ Early return AFTER hooks/consts
  if (!mounted) return null;

  return (
    <button
      onClick={() => {
        if (disabled) return;
        animateThemeSwitch();
        setTheme(isDark ? "light" : "dark");
      }}
      disabled={disabled}
      className={[
        "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium border transition",
        "border-[rgb(var(--border))] bg-[rgb(var(--panel))] text-[rgb(var(--text))]",
        disabled ? "opacity-60 cursor-not-allowed" : "hover:bg-[rgb(var(--border))]",
      ].join(" ")}
      aria-label="Toggle theme"
      title={disabled ? "Theme is controlled by system" : "Toggle theme"}
    >
      <span>{isDark ? "🌙" : "☀️"}</span>
      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
