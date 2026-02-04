"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";

export type RefImages = {
  front?: Blob | null;
  side?: Blob | null;
  back?: Blob | null;
  qFront?: Blob | null; // 3/4 front
  qBack?: Blob | null;  // 3/4 back
};

export type CharacterMeshProps = {
  activeCharacterId: string | null;
  characterName?: string;

  // 5-view references (blobs from IndexedDB)
  refs: RefImages;

  // Optional saved blockout GLB (blob from IndexedDB)
  blockoutGlb: Blob | null;

  // Called when user wants an automated mesh build (server pipeline)
  onCreateMesh?: () => Promise<void> | void;

  // Called when user attaches/replaces GLB (e.g., file upload)
  onSetBlockoutGlb?: (blob: Blob | null) => void;

  // Optional: show errors from parent
  errorText?: string | null;
};

function blobToUrl(blob: Blob | null | undefined): string | null {
  if (!blob) return null;
  return URL.createObjectURL(blob);
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

const GlbPreview = dynamic(() => import("./GlbPreview"), { ssr: false });

export default function CharacterMesh(props: CharacterMeshProps) {
  const {
    activeCharacterId,
    characterName,
    refs,
    blockoutGlb,
    onCreateMesh,
    onSetBlockoutGlb,
    errorText,
  } = props;

  const [tab, setTab] = useState<"refs" | "mesh">("mesh");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Object URLs for refs
  const refUrls = useMemo(() => {
    return {
      front: blobToUrl(refs.front),
      side: blobToUrl(refs.side),
      back: blobToUrl(refs.back),
      qFront: blobToUrl(refs.qFront),
      qBack: blobToUrl(refs.qBack),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refs.front, refs.side, refs.back, refs.qFront, refs.qBack]);

  // Cleanup ref URLs
  useEffect(() => {
    return () => {
      Object.values(refUrls).forEach((u) => {
        if (u) URL.revokeObjectURL(u);
      });
    };
  }, [refUrls]);

  // Object URL for GLB
  const glbUrl = useMemo(() => blobToUrl(blockoutGlb), [blockoutGlb]);
  useEffect(() => {
    return () => {
      if (glbUrl) URL.revokeObjectURL(glbUrl);
    };
  }, [glbUrl]);

  const hasAllRefs =
    !!refs.front && !!refs.side && !!refs.back && (!!refs.qFront || !!refs.qBack);

  const handleAttachGlbClick = () => {
    fileInputRef.current?.click();
  };

  const handleGlbSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    e.target.value = ""; // allow re-select same file
    if (!f) return;

    const isGlb =
      f.name.toLowerCase().endsWith(".glb") || f.type === "model/gltf-binary";
    if (!isGlb) {
      alert("Please select a .glb file (binary glTF).");
      return;
    }

    const blob = new Blob([await f.arrayBuffer()], { type: "model/gltf-binary" });
    onSetBlockoutGlb?.(blob);
    setTab("mesh");
  };

  const handleClearGlb = () => {
    onSetBlockoutGlb?.(null);
  };

  const handleDownloadGlb = () => {
    if (!blockoutGlb) return;
    const safeName =
      (characterName || "character")
        .trim()
        .replace(/\s+/g, "_")
        .replace(/[^a-zA-Z0-9_-]/g, "") || "character";
    downloadBlob(blockoutGlb, `${safeName}-blockout.glb`);
  };

  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-sm font-semibold truncate">
            Mesh Workspace{characterName ? ` • ${characterName}` : ""}
          </div>
          <div className="text-xs text-[rgb(var(--muted))] truncate">
            {activeCharacterId ? `Character ID: ${activeCharacterId}` : "No character selected"}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            className={`rounded-xl px-3 py-1.5 text-sm border border-[rgb(var(--border))] ${
              tab === "mesh" ? "bg-[rgb(var(--panel))]" : "bg-transparent"
            }`}
            onClick={() => setTab("mesh")}
          >
            Mesh
          </button>
          <button
            className={`rounded-xl px-3 py-1.5 text-sm border border-[rgb(var(--border))] ${
              tab === "refs" ? "bg-[rgb(var(--panel))]" : "bg-transparent"
            }`}
            onClick={() => setTab("refs")}
          >
            References
          </button>
        </div>
      </div>

      {errorText ? (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm">
          {errorText}
        </div>
      ) : null}

      <div className="flex items-center gap-2 flex-wrap">
        <button
          className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-2 text-sm"
          onClick={async () => {
            if (!onCreateMesh) return;
            await onCreateMesh();
            setTab("mesh");
          }}
          disabled={!activeCharacterId || !onCreateMesh || !hasAllRefs}
          title={
            !activeCharacterId
              ? "Select a character first"
              : !hasAllRefs
                ? "Need refs: front, side, back + at least one 3/4 view"
                : "Create mesh from references"
          }
        >
          Create Mesh
        </button>

        <button
          className="rounded-xl border border-[rgb(var(--border))] px-3 py-2 text-sm"
          onClick={handleAttachGlbClick}
          disabled={!activeCharacterId || !onSetBlockoutGlb}
          title={!activeCharacterId ? "Select a character first" : "Attach a .glb blockout mesh"}
        >
          Attach GLB
        </button>

        <button
          className="rounded-xl border border-[rgb(var(--border))] px-3 py-2 text-sm"
          onClick={handleClearGlb}
          disabled={!blockoutGlb || !onSetBlockoutGlb}
        >
          Clear GLB
        </button>

        <button
          className="rounded-xl border border-[rgb(var(--border))] px-3 py-2 text-sm"
          onClick={handleDownloadGlb}
          disabled={!blockoutGlb}
        >
          Download GLB
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept=".glb,model/gltf-binary"
          className="hidden"
          onChange={handleGlbSelected}
        />
      </div>

      <div className="flex-1 min-h-0">
        {tab === "refs" ? (
          <div className="grid h-full grid-cols-2 gap-3 md:grid-cols-3">
            <RefCard title="Front" url={refUrls.front} />
            <RefCard title="3/4 Front" url={refUrls.qFront} />
            <RefCard title="Side" url={refUrls.side} />
            <RefCard title="3/4 Back" url={refUrls.qBack} />
            <RefCard title="Back" url={refUrls.back} />
          </div>
        ) : (
          <div className="h-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] overflow-hidden">
            {glbUrl ? (
              <GlbPreview glbUrl={glbUrl} />
            ) : (
              <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                <div className="text-sm font-semibold">No mesh yet</div>
                <div className="mt-1 text-xs text-[rgb(var(--muted))] max-w-md">
                  Attach a <span className="font-mono">.glb</span> blockout mesh or click{" "}
                  <span className="font-semibold">Create Mesh</span> (once your references are loaded).
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function RefCard({ title, url }: { title: string; url: string | null }) {
  return (
    <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] overflow-hidden">
      <div className="px-3 py-2 text-xs font-semibold border-b border-[rgb(var(--border))]">
        {title}
      </div>
      <div className="relative aspect-[3/4] w-full bg-black/10">
        {url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={url} alt={title} className="h-full w-full object-contain" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-xs text-[rgb(var(--muted))]">
            Not loaded
          </div>
        )}
      </div>
    </div>
  );
}