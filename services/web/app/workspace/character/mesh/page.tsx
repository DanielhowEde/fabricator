"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CharacterMeshPage() {
  const sp = useSearchParams();
  const id = sp.get("id");

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold">Mesh Workspace</div>
          <div className="text-xs opacity-70">{id ? `Character: ${id}` : "No character id provided"}</div>
        </div>

        <Link className="text-sm underline" href="/workspace">
          Back to workspace
        </Link>
      </div>

      <div className="mt-6 rounded-2xl border border-dashed p-10 text-center opacity-80">
        Empty mesh page (ready).
      </div>
    </div>
  );
}