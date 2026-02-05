"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";

type ViewType = "front" | "side" | "back";

type UploadedImage = {
  view: ViewType;
  file: File;
  previewUrl: string;
};

type ReconstructionStatus = {
  task_id: string;
  status: "queued" | "preprocessing" | "generating_mesh" | "extracting_texture" | "exporting" | "completed" | "failed";
  progress: number;
  stage_message: string;
  error?: string;
  result_paths?: Record<string, string>;
};

type ReconstructionPanelProps = {
  characterId: string | null;
  onMeshReady?: (meshBlob: Blob, taskId: string) => void;
};

const VIEW_LABELS: Record<ViewType, string> = {
  front: "Front View",
  side: "Side View",
  back: "Back View",
};

const VIEW_HINTS: Record<ViewType, string> = {
  front: "Face the camera directly",
  side: "Turn 90° to the side",
  back: "Turn away from camera",
};

export function ReconstructionPanel({
  characterId,
  onMeshReady,
}: ReconstructionPanelProps) {
  const [images, setImages] = useState<Record<ViewType, UploadedImage | null>>({
    front: null,
    side: null,
    back: null,
  });
  const [mode, setMode] = useState<"quick" | "full">("full");
  const [taskId, setTaskId] = useState<string | null>(null);
  const [status, setStatus] = useState<ReconstructionStatus | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const fileInputRefs = useRef<Record<ViewType, HTMLInputElement | null>>({
    front: null,
    side: null,
    back: null,
  });

  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup preview URLs on unmount
  useEffect(() => {
    return () => {
      Object.values(images).forEach((img) => {
        if (img?.previewUrl) {
          URL.revokeObjectURL(img.previewUrl);
        }
      });
    };
  }, []);

  // Poll for status when processing
  useEffect(() => {
    if (!taskId || !isProcessing) {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
        pollIntervalRef.current = null;
      }
      return;
    }

    const pollStatus = async () => {
      try {
        const res = await fetch(`/api/reconstruction/status/${taskId}`);
        const data = await res.json();

        if (data.ok !== false) {
          setStatus(data);

          if (data.status === "completed") {
            setIsProcessing(false);
            // Fetch the mesh
            await fetchMesh(taskId);
          } else if (data.status === "failed") {
            setIsProcessing(false);
            setError(data.error || "Reconstruction failed");
          }
        }
      } catch (err) {
        console.error("Failed to poll status:", err);
      }
    };

    // Initial poll
    pollStatus();

    // Set up interval
    pollIntervalRef.current = setInterval(pollStatus, 1000);

    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
        pollIntervalRef.current = null;
      }
    };
  }, [taskId, isProcessing]);

  const fetchMesh = async (taskId: string) => {
    try {
      const res = await fetch(`/api/reconstruction/result/${taskId}/mesh`);
      if (!res.ok) {
        throw new Error("Failed to fetch mesh");
      }
      const blob = await res.blob();
      onMeshReady?.(blob, taskId);
    } catch (err: any) {
      setError(err?.message || "Failed to download mesh");
    }
  };

  const handleFileSelect = useCallback(
    (view: ViewType, file: File) => {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setError(`${VIEW_LABELS[view]}: Please select an image file`);
        return;
      }

      // Revoke old preview URL
      if (images[view]?.previewUrl) {
        URL.revokeObjectURL(images[view]!.previewUrl);
      }

      // Create new preview
      const previewUrl = URL.createObjectURL(file);

      setImages((prev) => ({
        ...prev,
        [view]: { view, file, previewUrl },
      }));
      setError(null);
    },
    [images]
  );

  const handleDrop = useCallback(
    (view: ViewType, e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const file = e.dataTransfer.files[0];
      if (file) {
        handleFileSelect(view, file);
      }
    },
    [handleFileSelect]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleRemoveImage = (view: ViewType) => {
    if (images[view]?.previewUrl) {
      URL.revokeObjectURL(images[view]!.previewUrl);
    }
    setImages((prev) => ({ ...prev, [view]: null }));
  };

  const handleStartReconstruction = async () => {
    if (!images.front) {
      setError("Front view image is required");
      return;
    }

    setError(null);
    setIsProcessing(true);
    setStatus(null);

    try {
      const formData = new FormData();
      formData.append("front", images.front.file);
      formData.append("mode", mode);

      if (images.side) {
        formData.append("side", images.side.file);
      }
      if (images.back) {
        formData.append("back", images.back.file);
      }

      const res = await fetch("/api/reconstruction/start", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || data.ok === false) {
        throw new Error(data.error || "Failed to start reconstruction");
      }

      setTaskId(data.task_id);
    } catch (err: any) {
      setError(err?.message || "Failed to start reconstruction");
      setIsProcessing(false);
    }
  };

  const canStart = images.front !== null && !isProcessing;
  const imageCount = Object.values(images).filter(Boolean).length;

  return (
    <div className="flex flex-col gap-4 p-4 bg-zinc-900 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">
          AI Reconstruction
        </h3>
        {status && (
          <span className="text-sm text-zinc-400">
            {status.status.replace("_", " ")}
          </span>
        )}
      </div>

      {/* Image Upload Grid */}
      <div className="grid grid-cols-3 gap-3">
        {(["front", "side", "back"] as ViewType[]).map((view) => (
          <div key={view} className="flex flex-col gap-1">
            <label className="text-sm font-medium text-zinc-300">
              {VIEW_LABELS[view]}
              {view === "front" && (
                <span className="text-red-400 ml-1">*</span>
              )}
            </label>
            <div
              className={`
                relative aspect-[3/4] rounded-lg border-2 border-dashed
                transition-colors cursor-pointer overflow-hidden
                ${
                  images[view]
                    ? "border-green-500/50 bg-green-500/10"
                    : "border-zinc-600 bg-zinc-800 hover:border-zinc-500"
                }
              `}
              onDrop={(e) => handleDrop(view, e)}
              onDragOver={handleDragOver}
              onClick={() => fileInputRefs.current[view]?.click()}
            >
              {images[view] ? (
                <>
                  <img
                    src={images[view]!.previewUrl}
                    alt={VIEW_LABELS[view]}
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    className="absolute top-1 right-1 p-1 bg-red-500 rounded-full text-white hover:bg-red-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveImage(view);
                    }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-400 p-2">
                  <svg
                    className="w-8 h-8 mb-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-xs text-center">
                    {VIEW_HINTS[view]}
                  </span>
                </div>
              )}
              <input
                ref={(el) => {
                  fileInputRefs.current[view] = el;
                }}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileSelect(view, file);
                  e.target.value = "";
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mode Selection */}
      <div className="flex gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="mode"
            value="quick"
            checked={mode === "quick"}
            onChange={() => setMode("quick")}
            className="text-blue-500"
            disabled={isProcessing}
          />
          <span className="text-sm text-zinc-300">Quick (placeholder)</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="mode"
            value="full"
            checked={mode === "full"}
            onChange={() => setMode("full")}
            className="text-blue-500"
            disabled={isProcessing}
          />
          <span className="text-sm text-zinc-300">Full reconstruction</span>
        </label>
      </div>

      {/* Progress */}
      {isProcessing && status && (
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-sm text-zinc-400">
            <span>{status.stage_message}</span>
            <span>{Math.round(status.progress * 100)}%</span>
          </div>
          <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${status.progress * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
          {error}
        </div>
      )}

      {/* Success */}
      {status?.status === "completed" && (
        <div className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm">
          Reconstruction complete! Mesh is ready.
        </div>
      )}

      {/* Start Button */}
      <button
        type="button"
        className={`
          py-2 px-4 rounded-lg font-medium transition-colors
          ${
            canStart
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-zinc-700 text-zinc-500 cursor-not-allowed"
          }
        `}
        disabled={!canStart}
        onClick={handleStartReconstruction}
      >
        {isProcessing ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Processing...
          </span>
        ) : (
          `Start Reconstruction (${imageCount} image${imageCount !== 1 ? "s" : ""})`
        )}
      </button>

      {/* Help Text */}
      <p className="text-xs text-zinc-500">
        Upload full-body photos from different angles. Front view is required.
        More angles = better results.
      </p>
    </div>
  );
}

export default ReconstructionPanel;
