"use client";

import React, { Suspense, useEffect, useMemo, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { GLTFLoader, type GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function GlbPreview({ glbUrl }: { glbUrl: string }) {
  return (
    <Canvas camera={{ position: [0.8, 1.1, 1.6], fov: 45 }} shadows>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 4, 2]} intensity={1.1} castShadow />
      <Suspense fallback={null}>
        <Model glbUrl={glbUrl} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls makeDefault />
    </Canvas>
  );
}

function Model({ glbUrl }: { glbUrl: string }) {
  const [obj, setObj] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    let cancelled = false;
    const loader = new GLTFLoader();
    loader.load(
      glbUrl,
      (gltf) => {
        if (cancelled) return;
        const scene = gltf.scene;
        scene.traverse((n: any) => {
          if (n.isMesh) {
            n.castShadow = true;
            n.receiveShadow = true;
          }
        });
        // Optional: center & scale to view nicely
        const box = new THREE.Box3().setFromObject(scene);
        const size = new THREE.Vector3();
        box.getSize(size);
        const center = new THREE.Vector3();
        box.getCenter(center);
        scene.position.sub(center);

        setObj(scene);
      },
      undefined,
      () => {
        if (!cancelled) setObj(null);
      }
    );

    return () => {
      cancelled = true;
    };
  }, [glbUrl]);

  if (!obj) return null;
  return <primitive object={obj} />;
}
