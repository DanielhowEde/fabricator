"use client";

import { useUiRouter } from "./UiRouterProvider";

export default function Topbar() {
  const { activeRoute } = useUiRouter();
  const title = activeRoute.split("/").map(capitalize).join(" · ");

  return (
    <header
      className="
        h-16 flex items-center justify-between px-6
        border-b border-[rgb(var(--border))]
        bg-[rgb(var(--panel))]/70 backdrop-blur
      "
    >
      {/* Left: workspace title */}
      <div>
        <div className="text-sm text-[rgb(var(--muted))]">Workspace</div>
        <div className="text-xl font-semibold text-[rgb(var(--text))]">
          {title}
        </div>
      </div>

      {/* Right: logo / brand */}
      <div className="flex items-center gap-2">
        {/* Replace this with an <img> later if you want */}
        <div
          className="
            h-8 w-8 rounded-xl
            bg-[rgb(var(--primary))]
            text-white
            flex items-center justify-center
            font-bold text-sm
          "
        >
          F
        </div>

        <span className="font-semibold text-[rgb(var(--text))]">
          Fabricator
        </span>
      </div>
    </header>
  );
}

function capitalize(s: string) {
  return s ? s[0].toUpperCase() + s.slice(1) : s;
}
