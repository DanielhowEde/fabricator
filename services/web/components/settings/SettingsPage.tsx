"use client";

import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

export default function SettingsPage() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // ✅ Hook is always called, even before mounted === true
  const resolved = useMemo(() => {
    if (theme === "system") return systemTheme ?? "light";
    return theme ?? "light";
  }, [theme, systemTheme]);

  const isSystem = theme === "system";

  function animateThemeSwitch() {
    const root = document.documentElement;
    root.classList.add("theme-switching");
    window.setTimeout(() => root.classList.remove("theme-switching"), 220);
  }

  // ✅ Early return is AFTER all hooks
  if (!mounted) return null;

  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-lg font-semibold text-[rgb(var(--text))]">
              Appearance
            </div>
            <div className="mt-1 text-sm text-[rgb(var(--muted))]">
              Current:{" "}
              <span className="font-medium capitalize">{resolved}</span>
            </div>
          </div>

          {isSystem && (
            <span
              className="
                rounded-full px-3 py-1 text-xs font-medium border
                border-[rgba(var(--primary),0.35)]
                bg-[rgba(var(--primary),0.12)]
                text-[rgb(var(--text))]
              "
            >
              System
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {/* Toggle is disabled while System is active */}
          <ThemeToggle disabled={isSystem} />

          <button
            onClick={() => {
              animateThemeSwitch();
              setTheme("system");
            }}
            className={[
              "rounded-2xl px-4 py-2 text-sm font-medium border transition",
              isSystem
                ? "bg-[rgba(var(--primary),0.12)] border-[rgba(var(--primary),0.35)] text-[rgb(var(--text))]"
                : "bg-[rgb(var(--panel))] border-[rgb(var(--border))] text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] hover:bg-[rgb(var(--border))]",
            ].join(" ")}
          >
            Use system
          </button>

          {isSystem && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  animateThemeSwitch();
                  setTheme("light");
                }}
                className="
                  rounded-2xl px-4 py-2 text-sm font-medium border transition
                  border-[rgb(var(--border))]
                  bg-[rgb(var(--panel))]
                  text-[rgb(var(--text))]
                  hover:bg-[rgb(var(--border))]
                "
              >
                Force Light
              </button>

              <button
                onClick={() => {
                  animateThemeSwitch();
                  setTheme("dark");
                }}
                className="
                  rounded-2xl px-4 py-2 text-sm font-medium border transition
                  border-[rgb(var(--border))]
                  bg-[rgb(var(--panel))]
                  text-[rgb(var(--text))]
                  hover:bg-[rgb(var(--border))]
                "
              >
                Force Dark
              </button>
            </div>
          )}
        </div>

        {isSystem && (
          <div className="mt-3 text-xs text-[rgb(var(--muted))]">
            Theme follows your OS settings. Use “Force Light/Dark” to override.
          </div>
        )}
      </div>
    </div>
  );
}
