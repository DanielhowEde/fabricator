"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type ProjectState = {
  projectId: string;
  projectName: string;
  character: {
    characterId: string | null;
    modelPath: string | null;
    meshStatus: "none" | "imported" | "cleaned";
    rigId: string | null;
    skeletonAssigned: boolean;
    outfitId: string | null;
    hairId: string | null;
    accessories: string[];
  };
  scene: {
    sceneId: string | null;
    environmentId: string | null;
    lightingPreset: string | null;
    cameraPreset: string | null;
    audioTrackId: string | null;
  };
  animation: {
    motionId: string | null;
    fps: 24 | 30 | 60;
    range: { start: number; end: number };
    renderPreset: "preview" | "final";
  };
};

type ProjectContextValue = {
  state: ProjectState;
  setState: React.Dispatch<React.SetStateAction<ProjectState>>;
  hydrated: boolean;
  resetProject: () => void;

  setProjectName: (name: string) => void;
  setCharacterId: (id: string | null) => void;
  setRigId: (id: string | null) => void;
  setSkeletonAssigned: (v: boolean) => void;
};

const STORAGE_KEY = "fabricator.project.v1";

function defaultProject(): ProjectState {
  return {
    projectId: "default",
    projectName: "Untitled Project",
    character: {
      characterId: null,
      modelPath: null,
      meshStatus: "none",
      rigId: null,
      skeletonAssigned: false,
      outfitId: null,
      hairId: null,
      accessories: [],
    },
    scene: {
      sceneId: null,
      environmentId: null,
      lightingPreset: null,
      cameraPreset: null,
      audioTrackId: null,
    },
    animation: {
      motionId: null,
      fps: 24,
      range: { start: 1, end: 240 },
      renderPreset: "preview",
    },
  };
}

function mergeWithDefaults(parsed: Partial<ProjectState>): ProjectState {
  const d = defaultProject();
  return {
    ...d,
    ...parsed,
    character: { ...d.character, ...(parsed.character ?? {}) },
    scene: { ...d.scene, ...(parsed.scene ?? {}) },
    animation: { ...d.animation, ...(parsed.animation ?? {}) },
  };
}

const ProjectContext = createContext<ProjectContextValue | null>(null);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  // ✅ deterministic on server + first client render
  const [state, setState] = useState<ProjectState>(defaultProject);
  const [hydrated, setHydrated] = useState(false);

  // ✅ load persisted state only after mount
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<ProjectState>;
        setState(mergeWithDefaults(parsed));
      }
    } catch {
      // ignore
    } finally {
      setHydrated(true);
    }
  }, []);

  // ✅ persist only AFTER hydration so you don't overwrite saved state with defaults
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state, hydrated]);

  const resetProject = () => setState(defaultProject());

  const setProjectName = (name: string) => setState((s) => ({ ...s, projectName: name }));
  const setCharacterId = (id: string | null) =>
    setState((s) => ({ ...s, character: { ...s.character, characterId: id } }));
  const setRigId = (id: string | null) =>
    setState((s) => ({ ...s, character: { ...s.character, rigId: id } }));
  const setSkeletonAssigned = (v: boolean) =>
    setState((s) => ({ ...s, character: { ...s.character, skeletonAssigned: v } }));

  const value = useMemo<ProjectContextValue>(
    () => ({ state, setState, hydrated, resetProject, setProjectName, setCharacterId, setRigId, setSkeletonAssigned }),
    [state, hydrated]
  );

  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
}

export function useProject() {
  const ctx = useContext(ProjectContext);
  if (!ctx) throw new Error("useProject must be used within ProjectProvider");
  return ctx;
}