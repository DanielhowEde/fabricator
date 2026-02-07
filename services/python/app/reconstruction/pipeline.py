"""Main reconstruction pipeline orchestration."""

import asyncio
import json
import logging
from pathlib import Path
from typing import Dict, List, Optional
from datetime import datetime

from PIL import Image
import numpy as np

from .tasks import TaskManager, TaskStatus
from .mesh_gen import generate_mesh_from_images, MeshGeneratorFactory
from ..utils.glb_export import create_placeholder_glb, export_mesh_to_glb

logger = logging.getLogger(__name__)


class ReconstructionPipeline:
    """Orchestrates the full reconstruction pipeline.

    Supports multiple mesh generation backends:
    - silhouette: Basic silhouette-based extrusion (always available)
    - pifuhd: High-quality neural network (requires GPU + model weights)
    """

    def __init__(self, task_manager: TaskManager):
        self.task_manager = task_manager
        self._generator_name: Optional[str] = None

    async def run(
        self,
        task_id: str,
        images: Dict[str, Path],
        mode: str = "full",
    ) -> None:
        """Run the reconstruction pipeline.

        Args:
            task_id: Task identifier
            images: Dict mapping view name to image path (e.g., {"front": Path(...)})
            mode: "quick" for fast placeholder, "full" for detailed reconstruction
        """
        output_dir = self.task_manager.get_task_output_dir(task_id)
        output_dir.mkdir(parents=True, exist_ok=True)

        try:
            # Stage 1: Preprocessing
            await self.task_manager.update_task(
                task_id,
                status=TaskStatus.PREPROCESSING,
                progress=0.1,
                stage_message="Preprocessing images...",
            )
            await self._preprocess_images(images, output_dir)
            await asyncio.sleep(0.5)  # Simulate processing time

            # Stage 2: Mesh Generation
            await self.task_manager.update_task(
                task_id,
                status=TaskStatus.GENERATING_MESH,
                progress=0.3,
                stage_message="Generating 3D mesh...",
            )
            mesh_path = await self._generate_mesh(images, output_dir, mode)
            await asyncio.sleep(0.5)

            # Stage 3: Texture Extraction (Phase 4 - placeholder for now)
            await self.task_manager.update_task(
                task_id,
                status=TaskStatus.EXTRACTING_TEXTURE,
                progress=0.7,
                stage_message="Extracting textures...",
            )
            texture_paths = await self._extract_textures(images, mesh_path, output_dir)
            await asyncio.sleep(0.3)

            # Stage 4: Export
            await self.task_manager.update_task(
                task_id,
                status=TaskStatus.EXPORTING,
                progress=0.9,
                stage_message="Finalizing export...",
            )
            metadata = await self._write_metadata(
                task_id, images, mesh_path, texture_paths, output_dir
            )

            # Complete
            await self.task_manager.update_task(
                task_id,
                status=TaskStatus.COMPLETED,
                progress=1.0,
                stage_message="Reconstruction complete",
                result_paths={
                    "mesh": str(mesh_path),
                    "metadata": str(metadata),
                    **{f"texture_{k}": str(v) for k, v in texture_paths.items()},
                },
            )

        except Exception as e:
            await self.task_manager.update_task(
                task_id,
                status=TaskStatus.FAILED,
                stage_message="Reconstruction failed",
                error=str(e),
            )
            raise

    async def _preprocess_images(
        self, images: Dict[str, Path], output_dir: Path
    ) -> Dict[str, Path]:
        """Preprocess input images.

        Phase 1A: Just validate and copy
        Phase 1B: Background removal, pose detection
        """
        processed = {}
        processed_dir = output_dir / "processed"
        processed_dir.mkdir(exist_ok=True)

        for view, img_path in images.items():
            # Load and validate
            img = Image.open(img_path)

            # Basic preprocessing: ensure RGB, reasonable size
            if img.mode != "RGB":
                img = img.convert("RGB")

            # Resize if too large (preserve aspect ratio)
            max_dim = 1024
            if max(img.size) > max_dim:
                ratio = max_dim / max(img.size)
                new_size = (int(img.width * ratio), int(img.height * ratio))
                img = img.resize(new_size, Image.Resampling.LANCZOS)

            # Save processed
            out_path = processed_dir / f"{view}.png"
            img.save(out_path)
            processed[view] = out_path

        return processed

    async def _generate_mesh(
        self, images: Dict[str, Path], output_dir: Path, mode: str
    ) -> Path:
        """Generate 3D mesh from images using AI reconstruction."""
        mesh_path = output_dir / "mesh.glb"

        # Load images as numpy arrays
        front_image = None
        side_image = None
        back_image = None

        if "front" in images:
            front_image = np.array(Image.open(images["front"]).convert("RGB"))
        if "side" in images:
            side_image = np.array(Image.open(images["side"]).convert("RGB"))
        if "back" in images:
            back_image = np.array(Image.open(images["back"]).convert("RGB"))

        if front_image is None:
            raise ValueError("Front image is required for mesh generation")

        # Select generator based on mode
        generator_name = None
        if mode == "quick":
            generator_name = "silhouette"  # Always use silhouette for quick mode

        # Generate mesh
        logger.info(f"Starting mesh generation (mode={mode}, generator={generator_name or 'auto'})")
        vertices, faces, used_generator = generate_mesh_from_images(
            front_image=front_image,
            side_image=side_image,
            back_image=back_image,
            generator_name=generator_name,
        )

        self._generator_name = used_generator
        logger.info(f"Mesh generated: {len(vertices)} vertices, {len(faces)} faces using {used_generator}")

        # Export to GLB
        export_mesh_to_glb(vertices, faces, mesh_path)
        logger.info(f"Mesh exported to {mesh_path}")

        return mesh_path

    async def _extract_textures(
        self, images: Dict[str, Path], mesh_path: Path, output_dir: Path
    ) -> Dict[str, Path]:
        """Extract texture maps from images.

        Phase 4: Full texture projection
        Current: Placeholder that copies front image as texture reference
        """
        textures_dir = output_dir / "textures"
        textures_dir.mkdir(exist_ok=True)

        result = {}

        # For now, just copy front image as a texture reference
        if "front" in images:
            front_img = Image.open(images["front"])
            diffuse_path = textures_dir / "diffuse.png"
            front_img.save(diffuse_path)
            result["diffuse"] = diffuse_path

        return result

    async def _write_metadata(
        self,
        task_id: str,
        images: Dict[str, Path],
        mesh_path: Path,
        texture_paths: Dict[str, Path],
        output_dir: Path,
    ) -> Path:
        """Write reconstruction metadata."""
        metadata = {
            "task_id": task_id,
            "created_at": datetime.utcnow().isoformat(),
            "input_views": list(images.keys()),
            "mesh_file": mesh_path.name,
            "textures": {k: v.name for k, v in texture_paths.items()},
            "pipeline_version": "1.1.0",
            "generator": self._generator_name or "unknown",
            "notes": f"Generated using {self._generator_name or 'unknown'} backend",
        }

        metadata_path = output_dir / "metadata.json"
        with open(metadata_path, "w") as f:
            json.dump(metadata, f, indent=2)

        return metadata_path
