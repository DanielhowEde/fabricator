"use client";

import { useProject } from "@/components/project/ProjectProvider";

export default function AssignSkeletonTool() {
  const { state, setRigId, setSkeletonAssigned } = useProject();

  const characterId = state.character.characterId;
  const rigId = state.character.rigId;
  const assigned = state.character.skeletonAssigned;

  return (
    <div className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-6 space-y-4">
      <div>
        <div className="text-xl font-semibold text-[rgb(var(--text))]">
          Character · Assign Skeleton
        </div>
        <div className="mt-2 text-sm text-[rgb(var(--muted))]">
          Choose rig type, validate joints, preview deformation.
        </div>
      </div>

      <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4">
        <div className="text-sm text-[rgb(var(--muted))]">Active character</div>
        <div className="mt-1 text-sm font-medium text-[rgb(var(--text))]">
          {characterId ?? "None selected"}
        </div>

        {!characterId && (
          <div className="mt-2 text-xs text-[rgb(var(--muted))]">
            Go to <span className="font-medium">Character → Model</span> to select or create a character first.
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium text-[rgb(var(--text))]">Rig type</div>
        <div className="flex flex-wrap gap-2">
          <Pill selected={rigId === "humanoid"} onClick={() => setRigId("humanoid")} disabled={!characterId}>
            Humanoid
          </Pill>
          <Pill selected={rigId === "quadruped"} onClick={() => setRigId("quadruped")} disabled={!characterId}>
            Quadruped
          </Pill>
          <Pill selected={rigId === "custom"} onClick={() => setRigId("custom")} disabled={!characterId}>
            Custom
          </Pill>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setSkeletonAssigned(true)}
          disabled={!characterId}
          className={[
            "rounded-2xl px-4 py-2 text-sm font-medium transition",
            !characterId
              ? "opacity-60 cursor-not-allowed border border-[rgb(var(--border))] bg-[rgb(var(--panel))] text-[rgb(var(--muted))]"
              : "bg-[rgb(var(--primary))] text-white hover:opacity-90",
          ].join(" ")}
        >
          {assigned ? "Re-assign Skeleton" : "Assign Skeleton"}
        </button>

        {assigned && (
          <span
            className="
              rounded-full px-3 py-1 text-xs font-medium border
              border-[rgba(var(--primary),0.35)]
              bg-[rgba(var(--primary),0.12)]
              text-[rgb(var(--text))]
            "
          >
            ✅ Assigned
          </span>
        )}

        {rigId && (
          <span className="text-xs text-[rgb(var(--muted))]">
            Rig: <span className="font-medium text-[rgb(var(--text))]">{rigId}</span>
          </span>
        )}
      </div>
    </div>
  );
}

function Pill({
  selected,
  disabled,
  onClick,
  children,
}: {
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[
        "rounded-2xl px-3 py-2 text-sm border transition",
        disabled
          ? "opacity-60 cursor-not-allowed border-[rgb(var(--border))] text-[rgb(var(--muted))]"
          : selected
          ? "bg-[rgba(var(--primary),0.12)] border-[rgba(var(--primary),0.35)] text-[rgb(var(--text))]"
          : "bg-[rgb(var(--panel))] border-[rgb(var(--border))] text-[rgb(var(--muted))] hover:bg-[rgb(var(--border))] hover:text-[rgb(var(--text))]",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
