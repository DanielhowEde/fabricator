"use client";

import { useCallback, useEffect, useRef, useState, type ChangeEvent } from "react";
import CharacterTopBar from "@/components/workspace/character/CharacterTopBar";
import {
  listCharacters,
  getAsset,
  upsertAsset,
  deleteAsset,
  type CharacterAssetRecord,
} from "@/components/workspace/character/db";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type MeshEditMode = "basic" | "expert";
type BasePose = "a" | "t";

type DeformParams = {
  height: number;
  shoulders: number;
  chest: number;
  waist: number;
  hips: number;
  legs: number;
  arms: number;
  head: number;

  bustSize: number;
  bustProjection: number;
};

type SculptDelta = {
  version: 1;
  // vertexIndex -> [dx, dy, dz]
  deltas: Record<string, [number, number, number]>;
};

type CharacterLite = { id: string; name: string };

const BASE_MESH: Record<BasePose, { filename: string; label: string }> = {
  a: { filename: "Human-dev-baseA-V1.0.glb", label: "A-pose (canonical)" },
  t: { filename: "Human-dev-baseT-V1.0.glb", label: "T-pose (reference)" },
};

const DEFAULT_PARAMS: DeformParams = {
  height: 0,
  shoulders: 0,
  chest: 0,
  waist: 0,
  hips: 0,
  legs: 0,
  arms: 0,
  head: 0,

  bustSize: 0,
  bustProjection: 0,
};

function jsonToBlob(obj: unknown) {
  return new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" });
}

async function blobToJson<T>(blob: Blob): Promise<T> {
  const text = await blob.text();
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error("Invalid JSON payload (could not parse saved asset).");
  }
}

async function fetchBaseMesh(pose: BasePose): Promise<Blob> {
  const filename = BASE_MESH[pose].filename;

  const res = await fetch(`/assets/base/${encodeURIComponent(filename)}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(`Failed to load base mesh (${pose}): HTTP ${res.status} ${msg}`);
  }

  return await res.blob();
}

function isValidDeformParams(x: unknown): x is Partial<DeformParams> {
  if (!x || typeof x !== "object") return false;
  return true;
}

function isValidSculptDelta(x: unknown): x is SculptDelta {
  if (!x || typeof x !== "object") return false;
  const any = x as { version?: unknown; deltas?: unknown };
  if (any.version !== 1) return false;
  if (!any.deltas || typeof any.deltas !== "object") return false;
  return true;
}

function disposeObject3D(root: THREE.Object3D) {
  root.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if ((mesh as any).geometry) (mesh as any).geometry.dispose?.();

    const mat = (mesh as any).material as THREE.Material | THREE.Material[] | undefined;
    if (!mat) return;

    const disposeMat = (m: THREE.Material) => {
      const anyM = m as any;
      const texKeys = [
        "map",
        "normalMap",
        "roughnessMap",
        "metalnessMap",
        "aoMap",
        "emissiveMap",
        "alphaMap",
        "bumpMap",
        "displacementMap",
        "envMap",
      ];
      for (const k of texKeys) {
        const t = anyM[k] as THREE.Texture | undefined;
        t?.dispose?.();
      }
      m.dispose?.();
    };

    if (Array.isArray(mat)) mat.forEach(disposeMat);
    else disposeMat(mat);
  });
}

function centerModelOnGround(root: THREE.Object3D) {
  root.updateMatrixWorld(true);

  // center X/Z
  const box = new THREE.Box3().setFromObject(root);
  const center = box.getCenter(new THREE.Vector3());
  root.position.x -= center.x;
  root.position.z -= center.z;

  root.updateMatrixWorld(true);

  // ground Y
  const box2 = new THREE.Box3().setFromObject(root);
  root.position.y -= box2.min.y;

  root.updateMatrixWorld(true);
}

/**
 * Aspect-aware framing that keeps feet visible.
 * - Distance uses both vertical + horizontal FOV.
 * - Target is around the true center (not too high).
 */
function fitCameraToObject(
  camera: THREE.PerspectiveCamera,
  controls: OrbitControls,
  object: THREE.Object3D
) {
  object.updateMatrixWorld(true);

  const box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());

  const height = size.y;
  const width = size.x;
  const depth = size.z;

  const vfov = THREE.MathUtils.degToRad(camera.fov);
  const aspect = Math.max(1e-6, camera.aspect || 1);
  const hfov = 2 * Math.atan(Math.tan(vfov / 2) * aspect);

  const maxH = Math.max(width, depth);

  const distV = height / 2 / Math.tan(vfov / 2);
  const distH = maxH / 2 / Math.tan(hfov / 2);
  const distance = Math.max(distV, distH) * 1.25;

  // target: real center, slightly *below* center so feet stay in view
  const target = new THREE.Vector3(center.x, box.min.y + height * 0.48, center.z);

  camera.position.set(target.x, target.y + height * 0.06, target.z + distance);

  camera.near = Math.max(0.01, distance / 100);
  camera.far = Math.max(50, distance * 50);
  camera.updateProjectionMatrix();

  controls.target.copy(target);
  controls.minDistance = distance * 0.25;
  controls.maxDistance = distance * 3.0;
  controls.update();
}

function MeshPreview({
  blob,
  filename,
  params,
}: {
  blob: Blob | null;
  filename?: string;
  params: DeformParams;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bodyMeshUuidRef = useRef<string | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null);
  const rafRef = useRef<number | null>(null);
  const resizeObsRef = useRef<ResizeObserver | null>(null);

  const userMovedRef = useRef(false);

  const paramsRef = useRef<DeformParams>(params);
  useEffect(() => {
    paramsRef.current = params;
  }, [params]);

  const [previewErr, setPreviewErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // -----------------------------
  // Body mesh filtering
  // -----------------------------
  function isBodyMeshName(name: string) {
    const n = (name || "").toLowerCase();

    const deny = [
      "eye",
      "eyeball",
      "cornea",
      "iris",
      "pupil",
      "teeth",
      "tooth",
      "tongue",
      "gum",
      "hair",
      "brow",
      "eyebrow",
      "lash",
      "eyelash",
      "beard",
      "mustache",
      "helmet",
      "hat",
      "cap",
      "glasses",
      "accessory",
      "shoe",
      "boot",
      "sock",
      "cloth",
      "clothes",
      "shirt",
      "pants",
      "trouser",
      "skirt",
      "dress",
      "bra",
      "underwear",
      "bikini",
      "jacket",
      "coat",
    ];
    if (deny.some((k) => n.includes(k))) return false;

    const allow = ["body", "skin", "base", "character", "human", "geo", "geometry", "torso"];
    return allow.some((k) => n.includes(k));
  }

  function meshLooksLikeBody(mesh: THREE.Mesh) {
    const geom = mesh.geometry as THREE.BufferGeometry | undefined;
    const pos = geom?.getAttribute?.("position") as THREE.BufferAttribute | undefined;
    const vCount = pos?.count ?? 0;
    return vCount > 10_000;
  }

  // -----------------------------
  // Deformation helpers
  // -----------------------------
  function clamp01(x: number) {
    return Math.max(0, Math.min(1, x));
  }

  function smoothstep(edge0: number, edge1: number, x: number) {
    const t = clamp01((x - edge0) / (edge1 - edge0));
    return t * t * (3 - 2 * t);
  }

  function bandWeight(yN: number, a: number, b: number, feather = 0.08) {
    const in1 = smoothstep(a - feather, a + feather, yN);
    const out1 = 1 - smoothstep(b - feather, b + feather, yN);
    return clamp01(in1 * out1);
  }

  function ensureBasePositions(mesh: THREE.Mesh) {
    const geom = mesh.geometry as THREE.BufferGeometry;
    const pos = geom.getAttribute("position") as THREE.BufferAttribute | undefined;
    if (!pos) return;

    const ud: any = mesh.userData;
    if (!ud.__basePos) {
      ud.__basePos = new Float32Array(pos.array as ArrayLike<number>);
    }
  }

  function setVertexHeatmap(mesh: THREE.Mesh, weight01: Float32Array) {
    const geom = mesh.geometry as THREE.BufferGeometry;
    const pos = geom.getAttribute("position") as THREE.BufferAttribute | undefined;
    if (!pos) return;

    let color = geom.getAttribute("color") as THREE.BufferAttribute | undefined;
    if (!color || color.count !== pos.count) {
      const colors = new Float32Array(pos.count * 3);
      color = new THREE.BufferAttribute(colors, 3);
      geom.setAttribute("color", color);
    }

    const c = color.array as Float32Array;
    for (let i = 0; i < weight01.length; i++) {
      const w = Math.max(0, Math.min(1, weight01[i]));
      c[i * 3 + 0] = w; // R
      c[i * 3 + 1] = 0; // G
      c[i * 3 + 2] = 1 - w; // B
    }
    color.needsUpdate = true;

    const mat = mesh.material as any;
    if (mat && "vertexColors" in mat) mat.vertexColors = true;
  }

  function detectFrontSign(mesh: THREE.Mesh, bbox: THREE.Box3, base: Float32Array) {
    const minY = bbox.min.y;
    const maxY = bbox.max.y;
    const h = Math.max(1e-6, maxY - minY);

    const cx = (bbox.min.x + bbox.max.x) * 0.5;
    const xSpan = Math.max(1e-6, (bbox.max.x - bbox.min.x) * 0.5);

    let zMax = -Infinity;
    let zMin = Infinity;

    for (let i = 0; i < base.length; i += 3) {
      const bx = base[i + 0];
      const by = base[i + 1];
      const bz = base[i + 2];

      const yN = (by - minY) / h;
      if (yN < 0.88) continue;
      if (Math.abs(bx - cx) > xSpan * 0.10) continue;

      if (bz > zMax) zMax = bz;
      if (bz < zMin) zMin = bz;
    }

    const cz = (bbox.min.z + bbox.max.z) * 0.5;

    const frontPlus = zMax - cz;
    const frontMinus = cz - zMin;

    return frontPlus >= frontMinus ? +1 : -1;
  }

  function ellipsoidWeight(dx: number, dy: number, dz: number, rx: number, ry: number, rz: number) {
    const nx = dx / Math.max(1e-6, rx);
    const ny = dy / Math.max(1e-6, ry);
    const nz = dz / Math.max(1e-6, rz);

    const d = Math.sqrt(nx * nx + ny * ny + nz * nz);
    const t = 1 - Math.min(1, Math.max(0, d));
    return t * t * (3 - 2 * t);
  }

  function computeBustAnchors(mesh: THREE.Mesh, bbox: THREE.Box3, base: Float32Array) {
    const minY = bbox.min.y;
    const maxY = bbox.max.y;
    const h = Math.max(1e-6, maxY - minY);

    const cx = (bbox.min.x + bbox.max.x) * 0.5;
    const cz = (bbox.min.z + bbox.max.z) * 0.5;

    const xSpan = Math.max(1e-6, (bbox.max.x - bbox.min.x) * 0.5);
    const zSpan = Math.max(1e-6, (bbox.max.z - bbox.min.z) * 0.5);

    const frontSign = detectFrontSign(mesh, bbox, base);

    const candL: number[] = [];
    const candR: number[] = [];

    for (let i = 0; i < base.length; i += 3) {
      const bx = base[i + 0];
      const by = base[i + 1];
      const bz = base[i + 2];

      const yN = (by - minY) / h;
      if (yN < 0.60 || yN > 0.78) continue;

      const torsoMask = 1 - smoothstep(xSpan * 0.28, xSpan * 0.42, Math.abs(bx - cx));
      if (torsoMask <= 0.2) continue;

      const isFront = frontSign * (bz - cz) > 0;
      if (!isFront) continue;

      if (Math.abs(bx - cx) < xSpan * 0.06) continue;

      if (bx < cx) candL.push(i);
      else candR.push(i);
    }

    if (candL.length < 50 || candR.length < 50) return null;

    function pickTopForward(indices: number[]) {
      const scored = indices
        .map((idx) => ({ idx, f: frontSign * (base[idx + 2] - cz) }))
        .sort((a, b) => b.f - a.f);

      const take = Math.max(30, Math.floor(scored.length * 0.10));
      return scored.slice(0, take).map((s) => s.idx);
    }

    const topL = pickTopForward(candL);
    const topR = pickTopForward(candR);

    function meanOf(indices: number[]) {
      let sx = 0,
        sy = 0,
        sz = 0;
      for (const idx of indices) {
        sx += base[idx + 0];
        sy += base[idx + 1];
        sz += base[idx + 2];
      }
      const n = Math.max(1, indices.length);
      return { x: sx / n, y: sy / n, z: sz / n };
    }

    const left = meanOf(topL);
    const right = meanOf(topR);

    return {
      left,
      right,
      rx: xSpan * 0.18,
      ry: h * 0.09,
      rz: zSpan * 0.14,
      frontSign,
    };
  }

  function pickBodyMesh(root: THREE.Object3D) {
    let best: THREE.Mesh | null = null;
    let bestScore = -Infinity;

    root.traverse((obj) => {
      const anyObj = obj as any;
      if (!anyObj?.isMesh) return;

      const m = obj as THREE.Mesh;

      const nm = (m.name || "").trim();
      const namedBody = nm ? isBodyMeshName(nm) : false;

      const geom = m.geometry as THREE.BufferGeometry | undefined;
      const pos = geom?.getAttribute?.("position") as THREE.BufferAttribute | undefined;
      const vCount = pos?.count ?? 0;

      if (vCount < 2000) return;

      const score = (namedBody ? 1_000_000 : 0) + (meshLooksLikeBody(m) ? 100_000 : 0) + vCount;

      if (score > bestScore) {
        bestScore = score;
        best = m;
      }
    });

    bodyMeshUuidRef.current = best?.uuid ?? null;

    if (best) {
      const m = best.material as any;
      if (m) m.vertexColors = true;
    }

    console.log("[BODY PICK]", best?.name ?? "(none)", {
      score: bestScore,
      uuid: best?.uuid ?? null,
    });
  }

 function applyDeformToRoot(root: THREE.Object3D, p: DeformParams) {
  const bodyUuid = bodyMeshUuidRef.current;
  if (!bodyUuid) return;

  root.traverse((obj) => {
    const anyObj = obj as any;
    if (!anyObj?.isMesh) return;

    const mesh = obj as THREE.Mesh;
    if (mesh.uuid !== bodyUuid) return;

    const geom = mesh.geometry as THREE.BufferGeometry;
    const pos = geom.getAttribute("position") as THREE.BufferAttribute | undefined;
    if (!pos) return;

    ensureBasePositions(mesh);

    const ud: any = mesh.userData;
    const base = ud.__basePos as Float32Array | undefined;
    if (!base) return;

    geom.computeBoundingBox();
    const bbox = geom.boundingBox;
    if (!bbox) return;

    // cache bust anchors once per mesh (stable)
    if (ud.__bustAnchors === undefined) {
      ud.__bustAnchors = computeBustAnchors(mesh, bbox, base);
    }

    const anchors = ud.__bustAnchors as
      | null
      | {
          left: { x: number; y: number; z: number };
          right: { x: number; y: number; z: number };
          rx: number;
          ry: number;
          rz: number;
          frontSign: number;
        };

    const minY = bbox.min.y;
    const maxY = bbox.max.y;
    const h = Math.max(1e-6, maxY - minY);

    const heightScale = 1 + p.height * 0.10;

    const shoulderW = 1 + p.shoulders * 0.18;
    const chestW = 1 + p.chest * 0.16;
    const waistW = 1 + p.waist * 0.18;
    const hipsW = 1 + p.hips * 0.18;
    const legsW = 1 + p.legs * 0.14;
    const armsW = 1 + p.arms * 0.14;
    const headW = 1 + p.head * 0.10;

    const bustW = 1 + p.bustSize * 0.22;
    const bustForward = p.bustProjection * 0.18;

    const cx = (bbox.min.x + bbox.max.x) * 0.5;
    const cz = (bbox.min.z + bbox.max.z) * 0.5;
    const cy = minY + h * 0.5;

    const xSpan = Math.max(1e-6, (bbox.max.x - bbox.min.x) * 0.5);

    const arr = pos.array as Float32Array;
    const weight = new Float32Array(arr.length / 3); // heatmap weights per vertex

    for (let i = 0; i < arr.length; i += 3) {
      const vi = i / 3;

      const bx = base[i + 0];
      const by = base[i + 1];
      const bz = base[i + 2];

      const yN = (by - minY) / h;

      const wShoulder = bandWeight(yN, 0.72, 0.84);
      const wChest = bandWeight(yN, 0.60, 0.74);
      const wWaist = bandWeight(yN, 0.48, 0.62);
      const wHips = bandWeight(yN, 0.38, 0.52);
      const wLegs = bandWeight(yN, 0.00, 0.42);
      const wHead = bandWeight(yN, 0.86, 1.00);

      const xFromCenter = Math.abs(bx - cx);
      const limbMask = smoothstep(0.45 * xSpan, 0.80 * xSpan, xFromCenter);

      const bandWidth =
        1 +
        (shoulderW - 1) * wShoulder +
        (chestW - 1) * wChest +
        (waistW - 1) * wWaist +
        (hipsW - 1) * wHips +
        (legsW - 1) * wLegs +
        (headW - 1) * wHead +
        (armsW - 1) * wShoulder * limbMask;

      // base shaping
      let x = cx + (bx - cx) * bandWidth;
      let y = cy + (by - cy) * heightScale;
      let z = cz + (bz - cz) * bandWidth;

      // --- Bust shaping using auto-anchors ---
      let wBustFinal = 0;

      if (anchors) {
        const { left, right, rx, ry, rz, frontSign } = anchors;

        const torsoMask = 1 - smoothstep(xSpan * 0.28, xSpan * 0.42, Math.abs(bx - cx));
        const wBustY = bandWeight(yN, 0.62, 0.76);

        // Per-lobe weights (use ANCHORS, not leftCenter/rightCenter)
        const wL = ellipsoidWeight(bx - left.x, by - left.y, bz - left.z, rx, ry, rz);
        const wR = ellipsoidWeight(bx - right.x, by - right.y, bz - right.z, rx, ry, rz);

        // final bust mask
        const wBust = Math.max(wL, wR) * wBustY * torsoMask;
        wBustFinal = wBust;

        if (wBust > 0) {
          // choose lobe center (prevents center pinch)
          const useLeft = wL >= wR;
          const c = useLeft ? left : right;

          // vector from lobe center -> vertex (base space)
          const dx = bx - c.x;
          const dy = by - c.y;
          const dz = bz - c.z;

          const len = Math.max(1e-6, Math.sqrt(dx * dx + dy * dy + dz * dz));
          const ux = dx / len;
          const uy = dy / len;
          const uz = dz / len;

          // rounded profile to avoid spikes
          const t = 1 - wBust;                // 0 at center, 1 at edge
          const ring = 4 * t * (1 - t);       // bell curve, peaks at t=0.5
          const orbProfile = wBust * ring;    // still respects mask

          // stronger but rounded
          const inflate = (bustW - 1) * 0.18 * orbProfile;

          // orb inflate (slightly forward biased)
          x += ux * inflate * 0.85;
          y += uy * inflate * 0.45;
          z += uz * inflate * 1.10;

          // extra projection only on true front side
          const isFront = frontSign * (bz - cz) > 0;
          if (isFront) {
            z += frontSign * bustForward * wBust;
          }
        }
      }

      // write vertex back
      arr[i + 0] = x;
      arr[i + 1] = y;
      arr[i + 2] = z;

      // heatmap weight (0..1)
      weight[vi] = Math.max(0, Math.min(1, wBustFinal));
    }

    // ✅ apply heatmap ONCE per mesh (not inside loop)
    setVertexHeatmap(mesh, weight);

    pos.needsUpdate = true;
    geom.computeVertexNormals();
  });
}


  // -----------------------------
  // Init Three once
  // -----------------------------
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    setPreviewErr(null);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("black");

    const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 2000);
    camera.position.set(0, 1.2, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    el.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.screenSpacePanning = false;

    const onStart = () => {
      userMovedRef.current = true;
    };
    controls.addEventListener("start", onStart);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(3, 6, 4);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xffffff, 0.35);
    fill.position.set(-4, 2, -3);
    scene.add(fill);

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    controlsRef.current = controls;

    const resize = () => {
      const w = el.clientWidth || 1;
      const h = el.clientHeight || 1;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);

      if (!userMovedRef.current && modelRef.current) {
        fitCameraToObject(camera, controls, modelRef.current);
      }
    };

    resizeObsRef.current = new ResizeObserver(resize);
    resizeObsRef.current.observe(el);
    resize();

    const tick = () => {
      controls.update();
      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;

      resizeObsRef.current?.disconnect();
      resizeObsRef.current = null;

      if (modelRef.current) {
        scene.remove(modelRef.current);
        disposeObject3D(modelRef.current);
        modelRef.current = null;
      }

      controls.removeEventListener("start", onStart);
      controls.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === el) el.removeChild(renderer.domElement);

      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      controlsRef.current = null;
    };
  }, []);

  // -----------------------------
  // Load GLB when blob changes (ONLY blob)
  // -----------------------------
  useEffect(() => {
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!scene || !camera || !controls) return;

    setPreviewErr(null);

    if (!blob) {
      if (modelRef.current) {
        scene.remove(modelRef.current);
        disposeObject3D(modelRef.current);
        modelRef.current = null;
      }
      return;
    }

    let cancelled = false;
    const url = URL.createObjectURL(blob);
    const loader = new GLTFLoader();

    setLoading(true);
    userMovedRef.current = false;

    loader.load(
      url,
      (gltf) => {
        if (cancelled) return;

        if (modelRef.current) {
          scene.remove(modelRef.current);
          disposeObject3D(modelRef.current);
          modelRef.current = null;
        }

        const root = gltf.scene || gltf.scenes?.[0];
        if (!root) {
          setPreviewErr("GLB loaded but contains no scene.");
          setLoading(false);
          return;
        }

        root.rotation.set(0, 0, 0);

        scene.add(root);
        modelRef.current = root;
        pickBodyMesh(root);

        centerModelOnGround(root);

        applyDeformToRoot(root, paramsRef.current);

        centerModelOnGround(root);

        fitCameraToObject(camera, controls, root);

        setLoading(false);
      },
      undefined,
      (error) => {
        if (cancelled) return;
        setPreviewErr((error as any)?.message || "Failed to load GLB into preview.");
        setLoading(false);
      }
    );

    return () => {
      cancelled = true;
      URL.revokeObjectURL(url);
    };
  }, [blob]);

  // -----------------------------
  // Re-apply deform when sliders change
  // -----------------------------
  useEffect(() => {
    const root = modelRef.current;
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!root || !camera || !controls) return;

    applyDeformToRoot(root, params);
    centerModelOnGround(root);

    if (!userMovedRef.current) {
      fitCameraToObject(camera, controls, root);
    }
  }, [params]);

  return (
    <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-[rgb(var(--text))]">Mesh preview</div>
          <div className="mt-1 text-xs text-[rgb(var(--muted))]">
            {blob ? (
              <>
                Showing:{" "}
                <span className="font-medium text-[rgb(var(--text))]">
                  {filename || "blockout_glb"}
                </span>
                {loading ? " • Loading…" : ""}
              </>
            ) : (
              "No mesh saved yet — attach a base mesh or upload a GLB."
            )}
          </div>
        </div>
        <div className="text-xs text-[rgb(var(--muted))]">Drag to orbit • Scroll to zoom</div>
      </div>

      {previewErr && (
        <div className="mt-3 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-700 dark:text-red-200">
          {previewErr}
        </div>
      )}

      <div
        ref={containerRef}
        className="mt-3 h-[560px] w-full overflow-hidden rounded-xl border border-[rgb(var(--border))] bg-black"
      />
    </div>
  );
}

export default function CharacterMeshView() {
  const [activeCharacterId, setActiveCharacterId] = useState<string | null>(null);

  const [asset, setAsset] = useState<CharacterAssetRecord | null>(null);

  const [editMode, setEditMode] = useState<MeshEditMode>("basic");
  const [params, setParams] = useState<DeformParams>(DEFAULT_PARAMS);
  const [sculpt, setSculpt] = useState<SculptDelta>({ version: 1, deltas: {} });

  const [paramsDirty, setParamsDirty] = useState(false);
  const [sculptDirty, setSculptDirty] = useState(false);

  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<string>("No character selected");
  const [paramsStatus, setParamsStatus] = useState<string>("");
  const [sculptStatus, setSculptStatus] = useState<string>("");
  const [err, setErr] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const loadTokenRef = useRef(0);

  const loadCharacters = useCallback(async () => {
    const all = await listCharacters<CharacterLite>();
    return all.map(({ id, name }) => ({ id, name }));
  }, []);

  const resetEditsUI = useCallback(() => {
    setParams(DEFAULT_PARAMS);
    setSculpt({ version: 1, deltas: {} });

    setParamsDirty(false);
    setSculptDirty(false);

    setParamsStatus("");
    setSculptStatus("");
  }, []);

  const invalidateEdits = useCallback(
    async (characterId: string) => {
      await Promise.allSettled([
        deleteAsset(characterId, "deform_params_json"),
        deleteAsset(characterId, "sculpt_delta_json"),
      ]);

      resetEditsUI();
    },
    [resetEditsUI]
  );

  const loadAssetsForCharacter = useCallback(
    async (characterId: string | null) => {
      const myToken = ++loadTokenRef.current;

      setErr(null);
      setAsset(null);
      setParamsStatus("");
      setSculptStatus("");
      setParamsDirty(false);
      setSculptDirty(false);

      if (!characterId) {
        setStatus("No character selected");
        resetEditsUI();
        return;
      }

      setStatus("Loading saved assets…");

      try {
        const [glb, p, s] = await Promise.all([
          getAsset(characterId, "blockout_glb"),
          getAsset(characterId, "deform_params_json"),
          getAsset(characterId, "sculpt_delta_json"),
        ]);

        if (loadTokenRef.current !== myToken) return;

        setAsset(glb ?? null);

        if (p) {
          const loadedParams = await blobToJson<unknown>(p.blob);
          if (isValidDeformParams(loadedParams)) {
            setParams({ ...DEFAULT_PARAMS, ...(loadedParams as Partial<DeformParams>) });
          } else {
            setParams(DEFAULT_PARAMS);
          }
        } else {
          setParams(DEFAULT_PARAMS);
        }

        if (s) {
          const loaded = await blobToJson<unknown>(s.blob);
          setSculpt(isValidSculptDelta(loaded) ? loaded : { version: 1, deltas: {} });
        } else {
          setSculpt({ version: 1, deltas: {} });
        }

        if (glb) setStatus(`Mesh saved: ${glb.filename}`);
        else setStatus("No saved mesh yet");
      } catch (e: unknown) {
        if (loadTokenRef.current !== myToken) return;
        const msg = e instanceof Error ? e.message : String(e);
        setErr(msg);
        setStatus("Could not read saved assets");
        resetEditsUI();
      }
    },
    [resetEditsUI]
  );

  useEffect(() => {
    void loadAssetsForCharacter(activeCharacterId);
  }, [activeCharacterId, loadAssetsForCharacter]);

  function pickGlb() {
    if (!activeCharacterId || busy) return;
    fileInputRef.current?.click();
  }

  async function onGlbSelected(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file || !activeCharacterId || busy) return;

    setErr(null);
    const now = new Date().toISOString();

    try {
      setBusy(true);
      setStatus("Saving mesh…");

      await upsertAsset({
        characterId: activeCharacterId,
        type: "blockout_glb",
        filename: file.name || "character-blockout.glb",
        blob: file,
        updatedAt: now,
      });

      await invalidateEdits(activeCharacterId);

      setStatus("Mesh saved (edits reset)");
      await loadAssetsForCharacter(activeCharacterId);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      setErr(msg);
      setStatus("Could not save mesh");
    } finally {
      setBusy(false);
    }
  }

  async function attachBaseMesh(pose: BasePose) {
    if (!activeCharacterId || busy) return;

    setErr(null);
    setBusy(true);

    try {
      setStatus(`Loading base mesh: ${BASE_MESH[pose].label}…`);
      const blob = await fetchBaseMesh(pose);
      const now = new Date().toISOString();

      await upsertAsset({
        characterId: activeCharacterId,
        type: "blockout_glb",
        filename: BASE_MESH[pose].filename,
        blob,
        updatedAt: now,
      });

      const verify = await getAsset(activeCharacterId, "blockout_glb");
      if (!verify) throw new Error("Base mesh save failed: blockout_glb not found after upsert.");

      await invalidateEdits(activeCharacterId);

      setStatus(`Attached base: ${BASE_MESH[pose].filename} (edits reset)`);
      await loadAssetsForCharacter(activeCharacterId);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      setErr(msg);
      setStatus("Could not attach base mesh");
    } finally {
      setBusy(false);
    }
  }

  function downloadGlb() {
    if (!asset) return;
    const url = URL.createObjectURL(asset.blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = asset.filename || "character-blockout.glb";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  async function clearGlb() {
    if (!activeCharacterId || busy) return;
    setErr(null);

    try {
      setBusy(true);
      setStatus("Removing mesh…");

      await deleteAsset(activeCharacterId, "blockout_glb");
      await invalidateEdits(activeCharacterId);

      setAsset(null);
      setStatus("Mesh removed (edits cleared)");
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      setErr(msg);
      setStatus("Could not remove mesh");
    } finally {
      setBusy(false);
    }
  }

  async function saveParams() {
    if (!activeCharacterId || busy) return;
    setErr(null);

    try {
      setBusy(true);
      const now = new Date().toISOString();

      await upsertAsset({
        characterId: activeCharacterId,
        type: "deform_params_json",
        filename: "deform-params.json",
        blob: jsonToBlob(params),
        updatedAt: now,
      });

      setParamsStatus("Saved slider edits");
      setParamsDirty(false);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      setErr(msg);
      setParamsStatus("");
    } finally {
      setBusy(false);
    }
  }

  async function clearParams() {
    if (!activeCharacterId || busy) return;
    setErr(null);

    setParams(DEFAULT_PARAMS);
    setParamsDirty(false);

    try {
      setBusy(true);
      await deleteAsset(activeCharacterId, "deform_params_json");
      setParamsStatus("Cleared slider edits");
    } catch {
      setParamsStatus("Reset sliders");
    } finally {
      setBusy(false);
    }
  }

  async function saveSculpt() {
    if (!activeCharacterId || busy) return;
    setErr(null);

    try {
      setBusy(true);
      const now = new Date().toISOString();

      await upsertAsset({
        characterId: activeCharacterId,
        type: "sculpt_delta_json",
        filename: "sculpt-delta.json",
        blob: jsonToBlob(sculpt),
        updatedAt: now,
      });

      setSculptStatus("Saved sculpt edits");
      setSculptDirty(false);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      setErr(msg);
      setSculptStatus("");
    } finally {
      setBusy(false);
    }
  }

  async function clearSculpt() {
    if (!activeCharacterId || busy) return;
    setErr(null);

    setSculpt({ version: 1, deltas: {} });
    setSculptDirty(false);

    try {
      setBusy(true);
      await deleteAsset(activeCharacterId, "sculpt_delta_json");
      setSculptStatus("Cleared sculpt edits");
    } finally {
      setBusy(false);
    }
  }

  const tabBase = "rounded-xl border px-3 py-2 text-sm disabled:opacity-50";
  const tabOn = "border-[rgb(var(--border))] bg-[rgb(var(--panel))] text-[rgb(var(--text))]";
  const tabOff = "border-[rgb(var(--border))] bg-[rgb(var(--bg))] text-[rgb(var(--muted))]";

  return (
    <div className="h-full w-full overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))]">
      <input
        ref={fileInputRef}
        type="file"
        accept=".glb,model/gltf-binary"
        className="hidden"
        onChange={onGlbSelected}
      />

      <div className="flex h-full flex-col">
        <div className="border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
          <CharacterTopBar
            title="Screen option"
            loadCharacters={loadCharacters}
            onCharacterSelected={setActiveCharacterId}
            rightSlot={
              <div className="text-xs text-[rgb(var(--muted))]">
                {activeCharacterId ? status : "No character selected"}
                {busy ? " • Working…" : ""}
              </div>
            }
          />
        </div>

        <div className="grid flex-1 grid-cols-12 gap-4 overflow-auto p-4 md:p-6">
          <section className="col-span-12 md:col-span-4">
            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[rgb(var(--border))] p-4">
                <div>
                  <div className="text-sm font-semibold text-[rgb(var(--text))]">Mesh</div>
                  <div className="mt-1 text-xs text-[rgb(var(--muted))]">
                    {activeCharacterId ? (
                      asset ? (
                        <>
                          blockout_glb:{" "}
                          <span className="font-medium text-[rgb(var(--text))]">{asset.filename}</span>
                        </>
                      ) : (
                        <>
                          No saved mesh yet. Start from{" "}
                          <span className="font-medium text-[rgb(var(--text))]">{BASE_MESH.a.filename}</span>{" "}
                          or{" "}
                          <span className="font-medium text-[rgb(var(--text))]">{BASE_MESH.t.filename}</span>.
                        </>
                      )
                    ) : (
                      "Select a character to attach a mesh."
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => attachBaseMesh("a")}
                    disabled={!activeCharacterId || busy}
                    className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50"
                  >
                    Attach A
                  </button>

                  <button
                    type="button"
                    onClick={() => attachBaseMesh("t")}
                    disabled={!activeCharacterId || busy}
                    className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50"
                  >
                    Attach T
                  </button>

                  <button
                    type="button"
                    onClick={pickGlb}
                    disabled={!activeCharacterId || busy}
                    className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50"
                    title={activeCharacterId ? "Upload a GLB and attach to this character" : "Select a character first"}
                  >
                    Upload
                  </button>

                  <button
                    type="button"
                    onClick={downloadGlb}
                    disabled={!asset || busy}
                    className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50"
                  >
                    Download
                  </button>

                  <button
                    type="button"
                    onClick={clearGlb}
                    disabled={!asset || !activeCharacterId || busy}
                    className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50"
                    title="Remove saved mesh for this character"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {err && (
                <div className="mx-4 mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-700 dark:text-red-200">
                  {err}
                </div>
              )}

              <div className="p-4">
                <MeshPreview blob={asset?.blob ?? null} filename={asset?.filename} params={params} />

                <div className="mt-4 rounded-2xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-5">
                  <div className="text-sm font-semibold text-[rgb(var(--text))]">Mesh editor</div>
                  <div className="mt-1 text-xs text-[rgb(var(--muted))]">
                    V1 placeholder: sculpt tools, symmetry, undo stack, brush cursor, etc.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="col-span-12 md:col-span-8">
            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
              <div className="flex items-center justify-between gap-3 border-b border-[rgb(var(--border))] p-4">
                <div>
                  <div className="text-sm font-semibold text-[rgb(var(--text))]">Options</div>
                  <div className="mt-1 text-xs text-[rgb(var(--muted))]">Choose Basic or Expert edits.</div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={!activeCharacterId || busy}
                    onClick={() => {
                      setParamsStatus("");
                      setSculptStatus("");
                      setEditMode("basic");
                    }}
                    className={`${tabBase} ${editMode === "basic" ? tabOn : tabOff} disabled:opacity-50`}
                  >
                    Basic
                  </button>

                  <button
                    type="button"
                    disabled={!activeCharacterId || busy}
                    onClick={() => {
                      setParamsStatus("");
                      setSculptStatus("");
                      setEditMode("expert");
                    }}
                    className={`${tabBase} ${editMode === "expert" ? tabOn : tabOff} disabled:opacity-50`}
                  >
                    Expert
                  </button>
                </div>
              </div>

              <div className="p-4">
                {editMode === "basic" && (
                  <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-4">
                    <div className="mb-2 text-sm font-semibold text-[rgb(var(--text))]">Basic edits</div>
                    <div className="text-xs text-[rgb(var(--muted))]">
                      Saved as JSON asset (<code>deform_params_json</code>).
                    </div>

                    {(
                      ["height", "shoulders", "chest", "waist", "hips", "bustSize", "bustProjection", "legs", "arms", "head"] as (keyof DeformParams)[]
                    ).map((k) => {
                      const v = params[k];
                      return (
                        <label key={String(k)} className="mt-3 block">
                          <div className="flex items-center justify-between text-xs text-[rgb(var(--muted))]">
                            <span>
                              {k === "bustSize"
                                ? "Bust size"
                                : k === "bustProjection"
                                  ? "Bust projection"
                                  : String(k).charAt(0).toUpperCase() + String(k).slice(1)}
                            </span>
                            <span>{v.toFixed(2)}</span>
                          </div>
                          <input
                            type="range"
                            min={-1}
                            max={1}
                            step={0.01}
                            value={v}
                            onChange={(e) => {
                              const n = Number(e.target.value);
                              setParams((p) => ({ ...p, [k]: n }));
                              setParamsStatus("");
                              setParamsDirty(true);
                            }}
                            disabled={!activeCharacterId || busy}
                            className="w-full disabled:opacity-50"
                          />
                        </label>
                      );
                    })}

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={saveParams}
                        disabled={!activeCharacterId || busy || !paramsDirty}
                        className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50"
                        title={!paramsDirty ? "No unsaved slider changes" : "Save slider changes"}
                      >
                        Save
                      </button>

                      <button
                        type="button"
                        onClick={clearParams}
                        disabled={!activeCharacterId || busy}
                        className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50"
                      >
                        Reset
                      </button>

                      <div className="text-xs text-[rgb(var(--muted))]">
                        {paramsDirty ? "Unsaved changes" : paramsStatus ? paramsStatus : ""}
                      </div>
                    </div>
                  </div>
                )}

                {editMode === "expert" && (
                  <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-4">
                    <div className="mb-2 text-sm font-semibold text-[rgb(var(--text))]">Expert sculpt</div>
                    <div className="text-xs text-[rgb(var(--muted))]">
                      Saved as delta map asset (<code>sculpt_delta_json</code>).
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setSculpt((s) => ({
                            ...s,
                            deltas: { ...s.deltas, [String(Date.now())]: [0.01, 0, 0] },
                          }));
                          setSculptStatus("");
                          setSculptDirty(true);
                        }}
                        disabled={!activeCharacterId || busy}
                        className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50"
                      >
                        Add test delta
                      </button>

                      <button
                        type="button"
                        onClick={saveSculpt}
                        disabled={!activeCharacterId || busy || !sculptDirty}
                        className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50"
                        title={!sculptDirty ? "No unsaved sculpt changes" : "Save sculpt changes"}
                      >
                        Save
                      </button>

                      <button
                        type="button"
                        onClick={clearSculpt}
                        disabled={!activeCharacterId || busy}
                        className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50"
                      >
                        Clear
                      </button>

                      <div className="text-xs text-[rgb(var(--muted))]">Deltas: {Object.keys(sculpt.deltas).length}</div>

                      <div className="text-xs text-[rgb(var(--muted))]">
                        {sculptDirty ? "Unsaved changes" : sculptStatus ? sculptStatus : ""}
                      </div>
                    </div>

                    <div className="mt-4 rounded-xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-3 text-xs text-[rgb(var(--muted))]">
                      Next: brush UI (move/smooth/inflate), symmetry, undo/redo, falloff, strength, radius.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
