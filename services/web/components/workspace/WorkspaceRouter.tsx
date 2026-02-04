"use client";

import { useUiRouter } from "@/components/layout/UiRouterProvider";

import CharacterModelTool from "./character/CharacterModelTool";
import AssignSkeletonTool from "./character/AssignSkeletonTool";
import CharacterMeshView from "./character/CharacterMeshView";

import SettingsPage from "@/components/settings/SettingsPage"; // ✅ add this

// Stubs (create later)
function Placeholder({ title }: { title: string }) {
  return (
    <div className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-6">
      <div className="text-xl font-semibold text-[rgb(var(--text))]">{title}</div>
      <div className="mt-2 text-sm text-[rgb(var(--muted))]">Tool UI goes here.</div>
    </div>
  );
}

export default function WorkspaceRouter() {
  const { activeRoute } = useUiRouter();

  switch (activeRoute) {
    case "settings":
      return <SettingsPage />;

    case "character/model":
      return <CharacterModelTool />;

    case "character/skeleton":
      return <AssignSkeletonTool />;

    case "character/mesh":
      return <CharacterMeshView />;

    case "character/clothing":
      return <Placeholder title="Clothing" />;

    case "character/hair":
      return <Placeholder title="Hair" />;

    case "character/accessories":
      return <Placeholder title="Accessories" />;

    case "character/test":
      return <Placeholder title="Test Character" />;

    case "background/environment":
      return <Placeholder title="Background: Environment" />;

    case "background/lighting":
      return <Placeholder title="Background: Lighting" />;

    case "background/camera":
      return <Placeholder title="Background: Camera" />;

    case "background/audio":
      return <Placeholder title="Background: Audio" />;

    case "scenes/library":
      return <Placeholder title="Scenes: Library" />;

    case "scenes/layout":
      return <Placeholder title="Scenes: Layout & Props" />;

    case "scenes/timeline":
      return <Placeholder title="Scenes: Timeline" />;

    case "scenes/export":
      return <Placeholder title="Scenes: Export" />;

    case "animate/motions":
      return <Placeholder title="Animate: Motion Library" />;

    case "animate/keyframes":
      return <Placeholder title="Animate: Keyframes" />;

    case "animate/preview":
      return <Placeholder title="Animate: Preview" />;

    case "animate/render":
      return <Placeholder title="Animate: Render / Video" />;

    default:
      return <Placeholder title="Select a tool" />;
  }
}