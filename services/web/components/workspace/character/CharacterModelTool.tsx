"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  listCharacters,
  getCharacter,
  upsertCharacter,
  listCharacterImages,
  upsertCharacterImage,
  deleteCharacter,
} from "@/components/workspace/character/db";

type Mode = "generate" | "load";
type Gender = "female" | "male";
type Pose = "t" | "a";

type PhotoType =
  | "ultra-realistic"
  | "photorealistic"
  | "realistic"
  | "cinematic"
  | "studio"
  | "anime"
  | "3d-render"
  | "pixar-style"
  | "illustration"
  | "comic"
  | "cartoon";

type View = "front" | "side" | "back" | "front_3q_left" | "back_3q_left";
type Build = "slim" | "athletic" | "average" | "curvy" | "muscular";
type AgeRange = "18-25" | "26-35" | "36-50" | "50+";

type GenResponse =
  | { ok: true; b64: string; mime: string }
  | { ok?: false; error?: string; details?: string };

type ReconstructionStatus = {
  task_id: string;
  status: "queued" | "preprocessing" | "generating_mesh" | "extracting_texture" | "exporting" | "completed" | "failed";
  progress: number;
  stage_message: string;
  error?: string;
};

type CharacterRecord = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  gender: Gender;
  pose: Pose;
  photoType: PhotoType;
  build: Build;
  age: AgeRange;
  size: "1024x1024" | "1024x1536" | "1536x1024" | "auto";
  prompt: string;
  includeThreeQuarter: boolean;
};

type CharacterImageRecord = {
  characterId: string;
  view: View;
  mime: string;
  blob: Blob;
  updatedAt: string;
};

function newId(): string {
  const uuid = (globalThis.crypto as any)?.randomUUID?.();
  return uuid ?? `id_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

const BASE_VIEWS: View[] = ["front", "side", "back"];
const EXTRA_VIEWS: View[] = ["front_3q_left", "back_3q_left"];
const ALL_VIEWS: View[] = [...BASE_VIEWS, ...EXTRA_VIEWS];

const VIEW_LABEL: Record<View, string> = {
  front: "Front",
  side: "Side",
  back: "Back",
  front_3q_left: "¾ Front (L)",
  back_3q_left: "¾ Back (L)",
};

const VIEW_TEXT: Record<View, string> = {
  front: "front view, facing camera",
  side: "exact 90-degree side profile view, facing left",
  back: "rear view, back facing camera",
  front_3q_left:
    "three-quarter front view from the left (about 45 degrees), head-to-toe visible, same proportions",
  back_3q_left:
    "three-quarter back view from the left (about 45 degrees), head-to-toe visible, same proportions",
};

const GENDER_TEXT: Record<Gender, string> = {
  female: "female",
  male: "male",
};

const PHOTO_TYPE_TEXT: Record<PhotoType, string> = {
  "ultra-realistic": "Ultra-realistic photographic depiction",
  photorealistic: "Photorealistic depiction",
  realistic: "Realistic depiction",
  cinematic: "Cinematic-style depiction with film lighting",
  studio: "Studio-style reference depiction with neutral lighting",
  anime: "Anime-style depiction",
  "3d-render": "High-quality 3D render depiction",
  "pixar-style": "Pixar-style 3D animated depiction",
  illustration: "Digital illustration depiction",
  comic: "Comic book style depiction",
  cartoon: "Cartoon-style depiction",
};

const POSE_TEXT: Record<Pose, string> = {
  t: "T-pose with arms extended horizontally",
  a: "A-pose with arms relaxed downward at approximately 45 degrees",
};

const BUILD_PROMPTS: Record<Build, string> = {
  slim: "slim build, narrow frame",
  athletic: "athletic build, toned physique",
  average: "average build, balanced proportions",
  curvy: "curvy build, fuller proportions",
  muscular: "muscular build, well-defined musculature",
};

const AGE_PROMPTS: Record<AgeRange, string> = {
  "18-25": "young adult (18–25), fully mature anatomy, youthful proportions",
  "26-35": "adult (26–35), mature anatomy, balanced proportions",
  "36-50": "adult (36–50), mature anatomy, subtle age definition",
  "50+": "older adult (50+), mature anatomy, realistic age characteristics",
};

const DESCRIPTION_TEMPLATE = `Face:
- Eyes colour, and shape, eyebrows, nose, mouth, facial structure

Body:
- Build, proportions, skin tone (optional)

Hair:
- colour, length - if long this should be tied back to expose the neck as this will help with 3D modeling

Defining Characteristics:
- `;

function revokeIfBlob(src: string | null) {
  if (src?.startsWith("blob:")) URL.revokeObjectURL(src);
}

function dataUrlToBlob(dataUrl: string): { blob: Blob; mime: string } {
  const [meta, b64] = dataUrl.split(",");
  const mime = meta.match(/data:([^;]+);base64/)?.[1] ?? "image/png";
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return { blob: new Blob([bytes], { type: mime }), mime };
}

async function urlToBlob(url: string): Promise<{ blob: Blob; mime: string }> {
  const res = await fetch(url);
  const blob = await res.blob();
  return { blob, mime: blob.type || "image/png" };
}

export default function CharacterModelTool() {
  const [mode, setMode] = useState<Mode>("generate");
  const [gender, setGender] = useState<Gender>("female");
  const [pose, setPose] = useState<Pose>("t");
  const [photoType, setPhotoType] = useState<PhotoType>("ultra-realistic");
  const [build, setBuild] = useState<Build>("athletic");
  const [age, setAge] = useState<AgeRange>("26-35");
  const [includeThreeQuarter, setIncludeThreeQuarter] = useState(false);

  const [characterName, setCharacterName] = useState("");
  const [activeCharacterId, setActiveCharacterId] = useState<string | null>(null);
  const [activeCharacterName, setActiveCharacterName] = useState<string>("");
  const [characterList, setCharacterList] = useState<{ id: string; name: string }[]>([]);

  const [view, setView] = useState<View>("front");
  const [prompt, setPrompt] = useState(DESCRIPTION_TEMPLATE);

  const [size, setSize] = useState<"1024x1024" | "1024x1536" | "1536x1024" | "auto">(
    "1024x1024"
  );

  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [imageLabel, setImageLabel] = useState<string | null>(null);
  const [showPromptPreview, setShowPromptPreview] = useState(true);

  // Reconstruction state
  const [reconstructionTaskId, setReconstructionTaskId] = useState<string | null>(null);
  const [reconstructionStatus, setReconstructionStatus] = useState<ReconstructionStatus | null>(null);
  const [isReconstructing, setIsReconstructing] = useState(false);
  const pollRef = useRef<NodeJS.Timeout | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const EMPTY_IMAGES: Record<View, string | null> = useMemo(
    () => ({
      front: null,
      side: null,
      back: null,
      front_3q_left: null,
      back_3q_left: null,
    }),
    []
  );

  const [imagesByView, setImagesByView] = useState<Record<View, string | null>>(EMPTY_IMAGES);

  const viewsToGenerate = useMemo<View[]>(
    () => (includeThreeQuarter ? [...BASE_VIEWS, ...EXTRA_VIEWS] : [...BASE_VIEWS]),
    [includeThreeQuarter]
  );

  const currentImageSrc = imagesByView[view];
  const hasAnyImage = useMemo(() => ALL_VIEWS.some((v) => !!imagesByView[v]), [imagesByView]);

  const canGenerate = useMemo(() => {
    if (mode !== "generate") return false;
    return prompt.trim().length >= 10;
  }, [mode, prompt]);

  // revoke blob URLs using a provided map (avoids stale state bugs)
  function revokeAllBlobsFrom(map: Record<View, string | null>) {
    for (const v of ALL_VIEWS) revokeIfBlob(map[v]);
  }

  // Load saved character list once on mount
  useEffect(() => {
    let cancelled = false;
    listCharacters<CharacterRecord>()
      .then((all) => {
        if (cancelled) return;
        setCharacterList(all.map((c) => ({ id: c.id, name: c.name })));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  async function refreshCharacterList() {
    const all = await listCharacters<CharacterRecord>();
    setCharacterList(all.map((c) => ({ id: c.id, name: c.name })));
  }

  // Reconstruction status polling
  useEffect(() => {
    if (!reconstructionTaskId || !isReconstructing) {
      if (pollRef.current) {
        clearInterval(pollRef.current);
        pollRef.current = null;
      }
      return;
    }

    const pollStatus = async () => {
      try {
        const res = await fetch(`/api/reconstruction/status/${reconstructionTaskId}`);
        const data = await res.json();

        if (data.ok !== false) {
          setReconstructionStatus(data);

          if (data.status === "completed") {
            setIsReconstructing(false);
            setImageLabel("3D reconstruction complete! Check the Mesh tab.");
          } else if (data.status === "failed") {
            setIsReconstructing(false);
            setErr(data.error || "Reconstruction failed");
          }
        }
      } catch (error) {
        console.error("Failed to poll reconstruction status:", error);
      }
    };

    pollStatus();
    pollRef.current = setInterval(pollStatus, 1000);

    return () => {
      if (pollRef.current) {
        clearInterval(pollRef.current);
        pollRef.current = null;
      }
    };
  }, [reconstructionTaskId, isReconstructing]);

  /**
   * Convert any image source (data: URL, blob: URL) to a Blob.
   * Uses canvas rendering as a reliable fallback when fetch on blob: URLs fails.
   */
  async function srcToBlob(src: string): Promise<Blob> {
    // data: URLs can be decoded directly
    if (src.startsWith("data:")) {
      return dataUrlToBlob(src).blob;
    }

    // For blob: URLs, try fetch first, fall back to canvas
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error(`fetch failed: ${res.status}`);
      return await res.blob();
    } catch {
      // Fallback: draw to canvas and export as PNG
      return new Promise<Blob>((resolve, reject) => {
        const img = new window.Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext("2d");
          if (!ctx) return reject(new Error("Could not get canvas context"));
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(
            (blob) => (blob ? resolve(blob) : reject(new Error("canvas.toBlob returned null"))),
            "image/png"
          );
        };
        img.onerror = () => reject(new Error("Failed to load image for conversion"));
        img.src = src;
      });
    }
  }

  async function startReconstruction() {
    // Get front image (required)
    const frontSrc = imagesByView.front;
    if (!frontSrc) {
      setErr("Front view image is required for 3D reconstruction");
      return;
    }

    setErr(null);
    setIsReconstructing(true);
    setReconstructionStatus(null);
    setImageLabel("Starting 3D reconstruction...");

    try {
      const formData = new FormData();

      // Convert image sources to blobs
      formData.append("front", await srcToBlob(frontSrc), "front.png");

      // Add optional views
      const sideSrc = imagesByView.side;
      if (sideSrc) {
        formData.append("side", await srcToBlob(sideSrc), "side.png");
      }

      const backSrc = imagesByView.back;
      if (backSrc) {
        formData.append("back", await srcToBlob(backSrc), "back.png");
      }

      formData.append("mode", "full");

      const res = await fetch("/api/reconstruction/start", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || data.ok === false) {
        throw new Error(data.error || "Failed to start reconstruction");
      }

      setReconstructionTaskId(data.task_id);
      setImageLabel(`Reconstruction started (${data.task_id.slice(0, 8)}...)`);
    } catch (error: any) {
      setErr(error?.message || "Failed to start 3D reconstruction");
      setIsReconstructing(false);
    }
  }

  function buildPromptForView(v: View) {
    if (mode === "load") return "";

    const corePrompt = [
      PHOTO_TYPE_TEXT[photoType],
      `of a ${GENDER_TEXT[gender]} character`,
      AGE_PROMPTS[age],
      BUILD_PROMPTS[build],
      `in a ${POSE_TEXT[pose]}`,
      "full-body",
      "head-to-toe visible",
      "centered subject",
      "no cropping",
    ].join(", ");

    const clothingPrompt = [
      "Wearing standard modelling reference attire",
      "neutral matte colour",
      "form-fitting",
      "non-transparent",
      "non-sexualised",
    ].join(", ");

    return [
      corePrompt,
      VIEW_TEXT[v],
      "Neutral lighting, plain background",
      clothingPrompt,
      prompt.trim(),
      "No text, no watermark, no logo, no props, no extra people",
    ]
      .filter(Boolean)
      .join("\n\n");
  }

  const finalPrompt = useMemo(() => buildPromptForView(view), [
    mode,
    view,
    photoType,
    gender,
    age,
    build,
    pose,
    prompt,
  ]);

  function onPickFileClick() {
    fileInputRef.current?.click();
  }

  function onDropFile(file: File) {
    setErr(null);

    if (!file.type.startsWith("image/")) {
      setErr("Please choose an image file (PNG/JPG/WebP).");
      return;
    }

    // revoke current blob urls safely using functional update
    setImagesByView((prev) => {
      revokeAllBlobsFrom(prev); // your original behavior: revoke everything before replacing
      const url = URL.createObjectURL(file);
      return { ...prev, [view]: url };
    });

    setImageLabel(`Loaded ${VIEW_LABEL[view]}: ${file.name}`);
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files?.[0];
    if (file) onDropFile(file);
  }

  function onDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
  }

  async function onFileSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) onDropFile(file);
    e.target.value = "";
  }

  async function handleSaveProject() {
    setErr(null);
    const name = characterName.trim();
    if (!name) {
      setErr("Enter a character name before saving.");
      return;
    }

    const now = new Date().toISOString();
    const isRename = !!activeCharacterId && activeCharacterName && activeCharacterName !== name;
    const id = !activeCharacterId || isRename ? newId() : activeCharacterId;

    const existing = activeCharacterId ? await getCharacter<CharacterRecord>(activeCharacterId) : null;
    const createdAt = existing?.createdAt ?? now;

    const rec: CharacterRecord = {
      id,
      name,
      createdAt,
      updatedAt: now,
      gender,
      pose,
      photoType,
      build,
      age,
      size,
      prompt,
      includeThreeQuarter,
    };

    await upsertCharacter(rec);

    // Save images as blobs
    for (const v of ALL_VIEWS) {
      const src = imagesByView[v];
      if (!src) continue;

      const { blob, mime } = src.startsWith("data:") ? dataUrlToBlob(src) : await urlToBlob(src);

      await upsertCharacterImage({
        characterId: id,
        view: v,
        mime,
        blob,
        updatedAt: now,
      });
    }

    setActiveCharacterId(id);
    setActiveCharacterName(name);
    setImageLabel(`Saved: ${name}`);
    await refreshCharacterList();
  }

  async function handleLoadProject(id: string) {
    setErr(null);
    const rec = await getCharacter<CharacterRecord>(id);
    if (!rec) {
      setErr("Could not load that character (not found).");
      return;
    }

    // revoke current blob URLs first
    setImagesByView((prev) => {
      revokeAllBlobsFrom(prev);
      return prev;
    });

    setActiveCharacterId(rec.id);
    setCharacterName(rec.name);
    setActiveCharacterName(rec.name);

    setGender(rec.gender);
    setPose(rec.pose);
    setPhotoType(rec.photoType);
    setBuild(rec.build);
    setAge(rec.age);
    setSize(rec.size);
    setPrompt(rec.prompt);
    setIncludeThreeQuarter(!!rec.includeThreeQuarter);
    setView("front");

    const imgs = await listCharacterImages(rec.id);
    const next: Record<View, string | null> = { ...EMPTY_IMAGES };
    for (const img of imgs as CharacterImageRecord[]) {
      next[img.view] = URL.createObjectURL(img.blob);
    }
    setImagesByView(next);
    setImageLabel(`Loaded: ${rec.name}`);
  }

  async function handleDeleteProject() {
    if (!activeCharacterId) return;
    setErr(null);

    await deleteCharacter(activeCharacterId);

    handleNewProject();
    setImageLabel("Deleted character");
    await refreshCharacterList();
  }

  function handleNewProject() {
    setActiveCharacterId(null);
    setActiveCharacterName("");
    setCharacterName("");
    handleReset();
    setImageLabel("New character");
  }

  async function generateImage() {
    if (mode === "load") return;

    setBusy(true);
    setErr(null);

    // revoke blob urls & clear existing images safely
    setImagesByView((prev) => {
      revokeAllBlobsFrom(prev);
      return { ...EMPTY_IMAGES };
    });

    try {
      for (const v of viewsToGenerate) {
        setView(v);
        setImageLabel(`Generating: ${VIEW_LABEL[v]}…`);

        const promptForView = buildPromptForView(v);

        const r = await fetch("/api/images/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt: promptForView,
            size,
            output_format: "png",
            gender,
            photoType,
            pose,
            age,
            build,
            view: v,
          }),
        });

        const data = (await r.json()) as GenResponse;

        if (!r.ok || !("ok" in data) || data.ok !== true) {
          const msg = ("error" in data && data.error) || `Image generation failed (HTTP ${r.status})`;
          throw new Error(msg);
        }

        const src = `data:${data.mime};base64,${data.b64}`;
        setImagesByView((prev) => ({ ...prev, [v]: src }));
      }

      setView("front");
      setImageLabel(includeThreeQuarter ? "Generated: +¾ views" : "Generated: front / side / back");
    } catch (e: any) {
      setErr(String(e?.message ?? e));
    } finally {
      setBusy(false);
    }
  }

  function handleReset() {
    setErr(null);

    // revoke blobs safely
    setImagesByView((prev) => {
      revokeAllBlobsFrom(prev);
      return { ...EMPTY_IMAGES };
    });

    setMode("generate");
    setGender("female");
    setPose("t");
    setPhotoType("ultra-realistic");
    setBuild("athletic");
    setAge("26-35");
    setIncludeThreeQuarter(false);

    setView("front");
    setPrompt(DESCRIPTION_TEMPLATE);
    setSize("1024x1024");
    setBusy(false);

    setImageLabel(null);
    setShowPromptPreview(true);

    setCharacterName("");
    setActiveCharacterId(null);
    setActiveCharacterName("");

    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function clearImage() {
    setErr(null);
    setImageLabel(null);

    setImagesByView((prev) => {
      revokeAllBlobsFrom(prev);
      return { ...EMPTY_IMAGES };
    });

    setView("front");
    setCharacterName("");
    setActiveCharacterId(null);
    setActiveCharacterName("");
  }

  function downloadImage() {
    const srcToDownload = currentImageSrc;
    if (!srcToDownload) return;

    const fileBase = `${view}-${new Date().toISOString().replace(/[:.]/g, "-")}`;

    const a = document.createElement("a");

    if (srcToDownload.startsWith("blob:") || srcToDownload.startsWith("data:")) {
      a.href = srcToDownload;

      if (srcToDownload.startsWith("data:")) {
        const mimeMatch = srcToDownload.match(/^data:([^;]+);base64,/);
        const mime = mimeMatch?.[1] ?? "image/png";
        const ext = mime.includes("png") ? "png" : mime.includes("jpeg") ? "jpg" : "png";
        a.download = `${fileBase}.${ext}`;
      } else {
        a.download = `${fileBase}.png`;
      }

      document.body.appendChild(a);
      a.click();
      a.remove();
      return;
    }

    window.open(srcToDownload, "_blank");
  }

  async function copyPromptPreview() {
    try {
      await navigator.clipboard.writeText(finalPrompt);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = finalPrompt;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
  }

  return (
    <div className="h-full w-full overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] text-[rgb(var(--text))]">
      {/* Top toolbar */}
      <div className="flex items-center justify-between gap-3 border-b border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-4 py-3">
        <div className="flex flex-wrap items-center gap-3">
          <div className="text-sm font-semibold">Character Model Tool</div>

          <select
            className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]"
            value={mode}
            onChange={(e) => {
              setErr(null);
              setMode(e.target.value as Mode);
            }}
          >
            <option value="load">Load image</option>
            <option value="generate">Generate image</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <select
            className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]"
            value={activeCharacterId ?? ""}
            onChange={(e) => {
              const id = e.target.value;
              if (id) void handleLoadProject(id);
            }}
            title="Load a saved character"
          >
            <option value="" disabled>
              Load character…
            </option>
            {characterList.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          <input
            className="w-44 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]"
            placeholder="Character name"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            title="Name used when saving"
          />

          <button
            className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50"
            onClick={() => void handleSaveProject()}
            type="button"
            disabled={busy}
            title="Save character settings + images"
          >
            Save
          </button>

          <button
            className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]"
            onClick={handleNewProject}
            type="button"
            title="Start a new character"
          >
            New
          </button>

          <button
            className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50"
            onClick={() => void handleDeleteProject()}
            type="button"
            disabled={!activeCharacterId || busy}
            title={activeCharacterId ? "Delete saved character" : "No saved character selected"}
          >
            Delete
          </button>

          <button
            className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]"
            onClick={handleReset}
            type="button"
            title="Reset workspace"
          >
            ⟳ Reset
          </button>

          {hasAnyImage && (
            <>
              <button
                className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50"
                onClick={downloadImage}
                type="button"
                disabled={!currentImageSrc}
                title={currentImageSrc ? `Download (${VIEW_LABEL[view]})` : "Select a view first"}
              >
                Download
              </button>

              <button
                className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]"
                onClick={clearImage}
                type="button"
              >
                Clear
              </button>

              <button
                className="rounded-xl border border-blue-500/50 bg-blue-600 px-3 py-2 text-sm text-white disabled:opacity-50"
                onClick={() => void startReconstruction()}
                type="button"
                disabled={!imagesByView.front || isReconstructing || busy}
                title={
                  !imagesByView.front
                    ? "Need front view image for reconstruction"
                    : isReconstructing
                      ? "Reconstruction in progress..."
                      : "Create 3D mesh from reference images"
                }
              >
                {isReconstructing ? "Reconstructing..." : "Reconstruct 3D"}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="grid h-[calc(100%-52px)] grid-cols-1 lg:grid-cols-2">
        {/* Left: Controls */}
        <div className="border-b border-[rgb(var(--border))] p-4 lg:border-b-0 lg:border-r">
          <div className="space-y-3">
            {mode === "generate" && <div className="text-sm font-semibold">Character settings</div>}

            {mode === "generate" && (
              <>
                <div className="flex flex-wrap items-center gap-3">
                  {/* Gender */}
                  <div className="inline-flex items-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-1">
                    <button
                      type="button"
                      onClick={() => setGender("female")}
                      className={[
                        "rounded-lg px-3 py-1.5 text-sm transition",
                        gender === "female"
                          ? "bg-[rgb(var(--primary))] text-white shadow-sm"
                          : "bg-transparent text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]",
                      ].join(" ")}
                    >
                      Female
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender("male")}
                      className={[
                        "rounded-lg px-3 py-1.5 text-sm transition",
                        gender === "male"
                          ? "bg-[rgb(var(--primary))] text-white shadow-sm"
                          : "bg-transparent text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]",
                      ].join(" ")}
                    >
                      Male
                    </button>
                  </div>

                  {/* Pose */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[rgb(var(--muted))]">Pose</span>
                    <div className="inline-flex items-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-1">
                      <button
                        type="button"
                        onClick={() => setPose("t")}
                        className={[
                          "rounded-lg px-3 py-1.5 text-sm transition",
                          pose === "t"
                            ? "bg-[rgb(var(--primary))] text-white shadow-sm"
                            : "bg-transparent text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]",
                        ].join(" ")}
                      >
                        T
                      </button>
                      <button
                        type="button"
                        onClick={() => setPose("a")}
                        className={[
                          "rounded-lg px-3 py-1.5 text-sm transition",
                          pose === "a"
                            ? "bg-[rgb(var(--primary))] text-white shadow-sm"
                            : "bg-transparent text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]",
                        ].join(" ")}
                      >
                        A
                      </button>
                    </div>
                  </div>

                  {/* Photo type */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[rgb(var(--muted))]">Photo type</span>
                    <select
                      className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]"
                      value={photoType}
                      onChange={(e) => setPhotoType(e.target.value as PhotoType)}
                    >
                      <option value="ultra-realistic">Ultra-realistic</option>
                      <option value="photorealistic">Photorealistic</option>
                      <option value="realistic">Realistic</option>
                      <option value="cinematic">Cinematic</option>
                      <option value="studio">Studio</option>
                      <option value="anime">Anime</option>
                      <option value="3d-render">3D render</option>
                      <option value="pixar-style">Pixar-style</option>
                      <option value="illustration">Illustration</option>
                      <option value="comic">Comic</option>
                      <option value="cartoon">Cartoon</option>
                    </select>
                  </div>
                </div>

                {/* Build & Age */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs text-[rgb(var(--muted))]">Build</label>
                    <select
                      className="w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]"
                      value={build}
                      onChange={(e) => setBuild(e.target.value as Build)}
                    >
                      <option value="slim">Slim</option>
                      <option value="athletic">Athletic</option>
                      <option value="average">Average</option>
                      <option value="curvy">Curvy</option>
                      <option value="muscular">Muscular</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs text-[rgb(var(--muted))]">Character age</label>
                    <select
                      className="w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]"
                      value={age}
                      onChange={(e) => setAge(e.target.value as AgeRange)}
                    >
                      <option value="18-25">Adult (18–25)</option>
                      <option value="26-35">Adult (26–35)</option>
                      <option value="36-50">Adult (36–50)</option>
                      <option value="50+">Adult (50+)</option>
                    </select>
                  </div>
                </div>

                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={includeThreeQuarter}
                    onChange={(e) => setIncludeThreeQuarter(e.target.checked)}
                  />
                  <span className="text-xs text-[rgb(var(--muted))]">Include ¾ views (higher quality)</span>
                </label>

                {/* Preview view selector */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[rgb(var(--muted))]">Preview view</span>
                  <select
                    className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]"
                    value={view}
                    onChange={(e) => setView(e.target.value as View)}
                  >
                    <option value="front">Front</option>
                    <option value="side">Side</option>
                    <option value="back">Back</option>
                    {includeThreeQuarter && (
                      <>
                        <option value="front_3q_left">¾ Front (L)</option>
                        <option value="back_3q_left">¾ Back (L)</option>
                      </>
                    )}
                  </select>
                  <span className="text-xs text-[rgb(var(--muted))]">(Generate creates all selected views)</span>
                </div>
              </>
            )}

            {/* Mode specific UI */}
            {mode === "load" ? (
              <>
                <div className="mb-3 space-y-1">
                  <label className="block text-xs font-medium text-[rgb(var(--muted))]">
                    Assign image to view
                  </label>

                  <select
                    className="w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm"
                    value={view}
                    onChange={(e) => setView(e.target.value as View)}
                  >
                    <option value="front">Front</option>
                    <option value="side">Side</option>
                    <option value="back">Back</option>
                    <option value="front_3q_left">¾ Front (Left)</option>
                    <option value="back_3q_left">¾ Back (Left)</option>
                  </select>

                  <div className="text-[11px] text-[rgb(var(--muted))]">
                    The next image you load will be saved as this view
                  </div>
                </div>

                <div className="text-sm font-semibold">Load reference image</div>

                <p className="text-sm text-[rgb(var(--muted))]">
                  Drag &amp; drop a clear, full-body reference image.
                </p>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={onFileSelected}
                />

                <div
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                  className="rounded-2xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-6 text-center"
                >
                  <div className="text-sm font-medium">Drag {VIEW_LABEL[view]} image here</div>

                  <div className="mt-1 text-xs text-[rgb(var(--muted))]">
                    PNG / JPG / WebP • full-body • minimal distortion
                  </div>

                  <button
                    type="button"
                    className="mt-4 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-4 py-2 text-sm"
                    onClick={onPickFileClick}
                  >
                    Choose image…
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="text-sm font-semibold">Generate reference image</div>

                <label className="text-xs text-[rgb(var(--muted))]">Description</label>

                <textarea
                  className="w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-3 text-sm"
                  rows={9}
                  value={prompt}
                  onChange={(e) => {
                    const v = e.target.value;
                    setPrompt(v.trim() === "" ? DESCRIPTION_TEMPLATE : v);
                  }}
                />

                <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-3">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <div className="text-sm font-semibold">Prompt Preview ({VIEW_LABEL[view]})</div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-1.5 text-xs text-[rgb(var(--text))]"
                        onClick={() => setShowPromptPreview((v) => !v)}
                      >
                        {showPromptPreview ? "Hide" : "Show"}
                      </button>

                      <button
                        type="button"
                        className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-1.5 text-xs text-[rgb(var(--text))]"
                        onClick={copyPromptPreview}
                      >
                        Copy
                      </button>
                    </div>
                  </div>

                  {showPromptPreview ? (
                    <textarea
                      readOnly
                      value={finalPrompt}
                      rows={6}
                      className="w-full resize-none rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-3 text-xs leading-relaxed text-[rgb(var(--text))]"
                    />
                  ) : (
                    <div className="text-xs text-[rgb(var(--muted))]">Preview hidden.</div>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <label className="text-xs text-[rgb(var(--muted))]">Size</label>
                  <select
                    className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]"
                    value={size}
                    onChange={(e) => setSize(e.target.value as any)}
                  >
                    <option value="1024x1024">1024 × 1024 (Square)</option>
                    <option value="1024x1536">1024 × 1536 (Portrait)</option>
                    <option value="1536x1024">1536 × 1024 (Landscape)</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>

                <button
                  className="w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50"
                  disabled={!canGenerate || busy}
                  onClick={() => void generateImage()}
                  type="button"
                >
                  {busy ? "Generating…" : `Generate (${viewsToGenerate.length} views)`}
                </button>
              </>
            )}

            {err && (
              <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-700 dark:text-red-200">
                {err}
              </div>
            )}

            {/* Reconstruction Progress */}
            {isReconstructing && reconstructionStatus && (
              <div className="mt-4 rounded-xl border border-blue-500/30 bg-blue-500/10 p-3">
                <div className="flex justify-between text-sm text-blue-300 mb-2">
                  <span>{reconstructionStatus.stage_message}</span>
                  <span>{Math.round(reconstructionStatus.progress * 100)}%</span>
                </div>
                <div className="h-2 bg-blue-900/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${reconstructionStatus.progress * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Reconstruction Complete */}
            {reconstructionStatus?.status === "completed" && !isReconstructing && (
              <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-300">
                3D reconstruction complete! The mesh is ready.
              </div>
            )}
          </div>
        </div>

        {/* Right: Preview */}
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="text-sm font-semibold">Preview</div>
            {imageLabel && <div className="text-xs text-[rgb(var(--muted))]">{imageLabel}</div>}
          </div>

          <div className="flex h-[calc(100%-28px)] flex-col rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-3">
            {currentImageSrc ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentImageSrc}
                  alt={`Character reference preview (${VIEW_LABEL[view]})`}
                  className="w-full flex-1 rounded-xl object-contain"
                />

                <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
                  {(includeThreeQuarter ? ALL_VIEWS : BASE_VIEWS).map((v) => {
                    const src = imagesByView[v];
                    const isActive = v === view;
                    const disabled = !src;

                    return (
                      <button
                        key={v}
                        type="button"
                        onClick={() => src && setView(v)}
                        className={[
                          "rounded-xl border p-1",
                          isActive
                            ? "border-[rgb(var(--primary))]"
                            : "border-[rgb(var(--border))] opacity-80 hover:opacity-100",
                          disabled ? "cursor-not-allowed opacity-30" : "",
                        ].join(" ")}
                        title={src ? `View: ${VIEW_LABEL[v]}` : `Not available: ${VIEW_LABEL[v]}`}
                      >
                        <div className="px-1 pb-1 text-center text-[10px] text-[rgb(var(--muted))]">
                          {VIEW_LABEL[v]}
                        </div>

                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {src ? (
                          <img src={src} alt={`${v} thumbnail`} className="h-16 w-16 rounded-lg object-cover" />
                        ) : (
                          <div className="h-16 w-16 rounded-lg bg-[rgb(var(--panel))]" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="flex flex-1 items-center justify-center text-sm text-[rgb(var(--muted))]">
                No image yet — load a reference or generate one.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
