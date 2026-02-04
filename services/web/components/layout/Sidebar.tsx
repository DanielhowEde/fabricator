"use client";

import { useEffect, useMemo, useState } from "react";
import { useUiRouter } from "./UiRouterProvider";


const OPEN_GROUPS_KEY = "fabricator.ui.sidebar.openGroups";

const DEFAULT_GROUPS: Record<string, boolean> = {
  character: true,
  background: false,
  scenes: false,
  animate: false,
};

export default function Sidebar() {
  const { activeRoute, setActiveRoute } = useUiRouter();

  // ✅ default first (SSR + first client render match)
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(DEFAULT_GROUPS);

  // ✅ load after mount
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(OPEN_GROUPS_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      setOpenGroups({ ...DEFAULT_GROUPS, ...(parsed ?? {}) });
    } catch {
      // ignore
    }
  }, []);

  // persist
  useEffect(() => {
    try {
      window.localStorage.setItem(OPEN_GROUPS_KEY, JSON.stringify(openGroups));
    } catch {
      // ignore
    }
  }, [openGroups]);

  const routes = useMemo(
    () => [
      {
        id: "character",
        label: "Character Creation",
        items: [
          { id: "character/model", label: "Model" },
          { id: "character/mesh", label: "Mesh" },
          { id: "character/skeleton", label: "Assign Skeleton" },
          { id: "character/clothing", label: "Clothing" },
          { id: "character/hair", label: "Hair" },
          { id: "character/accessories", label: "Accessories" },
          { id: "character/test", label: "Test Character" },
        ],
      },
      {
        id: "background",
        label: "Background",
        items: [
          { id: "background/environment", label: "Environment" },
          { id: "background/lighting", label: "Lighting" },
          { id: "background/camera", label: "Camera" },
          { id: "background/audio", label: "Audio" },
        ],
      },
      {
        id: "scenes",
        label: "Scenes",
        items: [
          { id: "scenes/library", label: "Scene Library" },
          { id: "scenes/layout", label: "Layout & Props" },
          { id: "scenes/timeline", label: "Timeline" },
          { id: "scenes/export", label: "Export Scene" },
        ],
      },
      {
        id: "animate",
        label: "Animate",
        items: [
          { id: "animate/motions", label: "Motion Library" },
          { id: "animate/keyframes", label: "Keyframes" },
          { id: "animate/preview", label: "Preview" },
          { id: "animate/render", label: "Render / Video" },
        ],
      },
    ],
    []
  );

  return (
    <aside className="w-80 bg-[rgb(var(--panel))] border-r border-[rgb(var(--border))] flex flex-col">
      <div className="p-5">
        <div className="text-lg font-semibold text-[rgb(var(--text))]">Fabricator</div>
        <div className="text-xs text-[rgb(var(--muted))]">Logo</div>
      </div>

      <nav className="px-3 pb-6 flex-1 overflow-auto">
        {routes.map((group) => {
          const isOpen = !!openGroups[group.id];
          return (
            <div key={group.id} className="mb-2">
              <button
                onClick={() =>
                  setOpenGroups((s) => ({ ...s, [group.id]: !s[group.id] }))
                }
                className="
                  w-full rounded-2xl px-3 py-2 text-left
                  text-[rgb(var(--text))]
                  hover:bg-[rgb(var(--border))]
                  transition
                "
              >
                <span className="font-medium">{group.label}</span>
                <span className="ml-2 text-xs text-[rgb(var(--muted))]">
                  {isOpen ? "▼" : "▶"}
                </span>
              </button>

              {isOpen && (
                <div className="mt-1 ml-3 border-l border-[rgb(var(--border))] pl-2">
                  {group.items.map((item) => {
                    const isActive = item.id === activeRoute;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveRoute(item.id)}
                        className={[
                          "w-full rounded-2xl px-3 py-2 text-left text-sm transition",
                          isActive
                            ? "bg-[rgba(var(--primary),0.12)] text-[rgb(var(--text))] border border-[rgba(var(--primary),0.35)]"
                            : "text-[rgb(var(--muted))] hover:bg-[rgb(var(--border))] hover:text-[rgb(var(--text))]",
                        ].join(" ")}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Bottom: Settings */}
      <div className="p-4 border-t border-[rgb(var(--border))]">
        <button
          onClick={() => setActiveRoute("settings")}
          className="
            w-full rounded-2xl px-3 py-2 text-left text-sm transition
            border border-[rgb(var(--border))]
            bg-[rgb(var(--panel))]
            text-[rgb(var(--text))]
            hover:bg-[rgb(var(--border))]
          "
        >
          ⚙️ Settings
        </button>
      </div>
    </aside>
  );
}
