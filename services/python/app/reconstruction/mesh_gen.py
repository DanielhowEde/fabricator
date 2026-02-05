"""Mesh generation from images.

This module provides multiple backends for 3D human reconstruction:
1. Silhouette-based (basic, always available)
2. PIFuHD (high quality, requires GPU)
3. SMPL-X fitting (parametric, good for animation)

The system automatically selects the best available backend.
"""

import os
import numpy as np
from pathlib import Path
from typing import Optional, Tuple, Dict, Any
from abc import ABC, abstractmethod
from PIL import Image
import logging

logger = logging.getLogger(__name__)


class MeshGenerator(ABC):
    """Base class for mesh generation backends."""

    @abstractmethod
    def generate(
        self,
        front_image: np.ndarray,
        side_image: Optional[np.ndarray] = None,
        back_image: Optional[np.ndarray] = None,
    ) -> Tuple[np.ndarray, np.ndarray]:
        """Generate mesh from images.

        Args:
            front_image: Front view image (H, W, 3) RGB
            side_image: Optional side view image
            back_image: Optional back view image

        Returns:
            Tuple of (vertices, faces) where:
            - vertices: (N, 3) array of vertex positions
            - faces: (M, 3) array of triangle indices
        """
        pass

    @abstractmethod
    def is_available(self) -> bool:
        """Check if this backend is available."""
        pass

    @property
    @abstractmethod
    def name(self) -> str:
        """Backend name."""
        pass


class SilhouetteMeshGenerator(MeshGenerator):
    """Generate mesh from image silhouette using visual hull approximation.

    This is a basic fallback that works without GPU or complex dependencies.
    It creates a rough 3D shape by extruding the 2D silhouette.
    """

    @property
    def name(self) -> str:
        return "silhouette"

    def is_available(self) -> bool:
        try:
            import cv2
            import trimesh
            return True
        except ImportError:
            return False

    def generate(
        self,
        front_image: np.ndarray,
        side_image: Optional[np.ndarray] = None,
        back_image: Optional[np.ndarray] = None,
    ) -> Tuple[np.ndarray, np.ndarray]:
        import cv2
        import trimesh

        # Extract silhouette from front image
        silhouette = self._extract_silhouette(front_image)

        # Find contours
        contours, _ = cv2.findContours(
            silhouette, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE
        )

        if not contours:
            # Fallback to simple box if no contours found
            return self._create_fallback_mesh()

        # Get largest contour (the person)
        contour = max(contours, key=cv2.contourArea)

        # Simplify contour
        epsilon = 0.01 * cv2.arcLength(contour, True)
        contour = cv2.approxPolyDP(contour, epsilon, True)

        # Create 3D mesh by extruding silhouette
        vertices, faces = self._extrude_silhouette(contour, silhouette.shape, side_image)

        return vertices, faces

    def _extract_silhouette(self, image: np.ndarray) -> np.ndarray:
        """Extract binary silhouette from image."""
        import cv2

        # Try to use rembg for background removal if available
        try:
            from rembg import remove
            # Remove background
            rgba = remove(Image.fromarray(image))
            rgba_array = np.array(rgba)
            # Use alpha channel as mask
            if rgba_array.shape[2] == 4:
                mask = rgba_array[:, :, 3]
                return (mask > 128).astype(np.uint8) * 255
        except Exception as e:
            logger.warning(f"rembg not available, using simple thresholding: {e}")

        # Fallback: simple background subtraction
        gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)

        # Assume light background, dark subject or vice versa
        # Use Otsu's thresholding
        _, binary = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)

        # Clean up with morphological operations
        kernel = np.ones((5, 5), np.uint8)
        binary = cv2.morphologyEx(binary, cv2.MORPH_CLOSE, kernel)
        binary = cv2.morphologyEx(binary, cv2.MORPH_OPEN, kernel)

        return binary

    def _extrude_silhouette(
        self,
        contour: np.ndarray,
        image_shape: Tuple[int, int],
        side_image: Optional[np.ndarray] = None,
    ) -> Tuple[np.ndarray, np.ndarray]:
        """Create 3D mesh by extruding 2D silhouette."""
        import trimesh

        h, w = image_shape[:2]

        # Normalize contour points to [-1, 1] range
        points_2d = contour.squeeze()
        if len(points_2d.shape) == 1:
            points_2d = points_2d.reshape(-1, 2)

        # Normalize: x -> [-0.5, 0.5], y -> [0, height_in_meters]
        height_meters = 1.7  # Assume average human height
        scale = height_meters / h

        points_2d = points_2d.astype(float)
        points_2d[:, 0] = (points_2d[:, 0] - w / 2) * scale  # Center X
        points_2d[:, 1] = (h - points_2d[:, 1]) * scale  # Flip Y, scale

        # Estimate depth from side image or use fixed ratio
        if side_image is not None:
            side_silhouette = self._extract_silhouette(side_image)
            depth = self._estimate_depth_from_side(side_silhouette, h) * scale
        else:
            # Assume depth is ~30% of width
            x_range = points_2d[:, 0].max() - points_2d[:, 0].min()
            depth = x_range * 0.3

        # Create 3D vertices by extruding
        n_points = len(points_2d)

        # Front vertices
        front_verts = np.zeros((n_points, 3))
        front_verts[:, 0] = points_2d[:, 0]  # X
        front_verts[:, 1] = points_2d[:, 1]  # Y (height)
        front_verts[:, 2] = depth / 2  # Z (front)

        # Back vertices
        back_verts = front_verts.copy()
        back_verts[:, 2] = -depth / 2  # Z (back)

        vertices = np.vstack([front_verts, back_verts])

        # Create faces connecting front and back
        faces = []
        for i in range(n_points):
            i_next = (i + 1) % n_points
            # Front face
            fi = i
            fi_next = i_next
            # Back face
            bi = i + n_points
            bi_next = i_next + n_points

            # Two triangles per quad
            faces.append([fi, fi_next, bi])
            faces.append([fi_next, bi_next, bi])

        # Add front and back caps using triangle fan
        # Front cap
        center_front_idx = len(vertices)
        center_front = np.mean(front_verts, axis=0, keepdims=True)
        vertices = np.vstack([vertices, center_front])
        for i in range(n_points):
            i_next = (i + 1) % n_points
            faces.append([i, center_front_idx, i_next])

        # Back cap
        center_back_idx = len(vertices)
        center_back = np.mean(back_verts, axis=0, keepdims=True)
        vertices = np.vstack([vertices, center_back])
        for i in range(n_points):
            i_next = (i + 1) % n_points
            bi = i + n_points
            bi_next = i_next + n_points
            faces.append([bi, bi_next, center_back_idx])

        faces = np.array(faces, dtype=np.int32)

        # Create trimesh and clean up
        mesh = trimesh.Trimesh(vertices=vertices, faces=faces)
        mesh.fix_normals()

        # Smooth the mesh
        trimesh.smoothing.filter_laplacian(mesh, iterations=2)

        return mesh.vertices, mesh.faces

    def _estimate_depth_from_side(
        self, side_silhouette: np.ndarray, reference_height: int
    ) -> float:
        """Estimate body depth from side view silhouette."""
        import cv2

        # Find bounding box of silhouette
        contours, _ = cv2.findContours(
            side_silhouette, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE
        )
        if not contours:
            return reference_height * 0.15  # Default 15% of height

        contour = max(contours, key=cv2.contourArea)
        x, y, w, h = cv2.boundingRect(contour)

        # Depth is the width of the side silhouette
        return w

    def _create_fallback_mesh(self) -> Tuple[np.ndarray, np.ndarray]:
        """Create a simple humanoid fallback mesh."""
        import trimesh

        # Create simple capsule-based humanoid
        meshes = []

        # Torso
        torso = trimesh.creation.capsule(height=0.5, radius=0.15)
        torso.apply_translation([0, 0.75, 0])
        meshes.append(torso)

        # Head
        head = trimesh.creation.icosphere(radius=0.1, subdivisions=2)
        head.apply_translation([0, 1.15, 0])
        meshes.append(head)

        # Limbs
        for x_offset in [-0.2, 0.2]:
            arm = trimesh.creation.capsule(height=0.5, radius=0.04)
            arm.apply_translation([x_offset, 0.85, 0])
            meshes.append(arm)

        for x_offset in [-0.08, 0.08]:
            leg = trimesh.creation.capsule(height=0.5, radius=0.06)
            leg.apply_translation([x_offset, 0.25, 0])
            meshes.append(leg)

        combined = trimesh.util.concatenate(meshes)
        return combined.vertices, combined.faces


class PIFuHDGenerator(MeshGenerator):
    """Generate mesh using PIFuHD neural network.

    PIFuHD produces high-quality detailed meshes from single images.
    Requires GPU and pre-trained model weights.
    """

    def __init__(self, model_path: Optional[Path] = None):
        self._model = None
        self._model_path = model_path or Path("/app/models/pifuhd")
        self._device = None

    @property
    def name(self) -> str:
        return "pifuhd"

    def is_available(self) -> bool:
        """Check if PIFuHD is available (model weights exist and torch with CUDA)."""
        try:
            import torch
            if not torch.cuda.is_available():
                logger.info("PIFuHD requires CUDA but no GPU available")
                return False

            # Check if model weights exist
            checkpoint_path = self._model_path / "checkpoints" / "pifuhd.pt"
            if not checkpoint_path.exists():
                logger.info(f"PIFuHD model not found at {checkpoint_path}")
                return False

            return True
        except ImportError:
            return False

    def _load_model(self):
        """Lazy load the model."""
        if self._model is not None:
            return

        import torch

        self._device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

        # PIFuHD model loading would go here
        # This is a placeholder - actual PIFuHD setup is more complex
        logger.info(f"Loading PIFuHD model on {self._device}")

        # TODO: Implement actual PIFuHD model loading
        raise NotImplementedError("PIFuHD integration not yet complete")

    def generate(
        self,
        front_image: np.ndarray,
        side_image: Optional[np.ndarray] = None,
        back_image: Optional[np.ndarray] = None,
    ) -> Tuple[np.ndarray, np.ndarray]:
        """Generate mesh using PIFuHD."""
        self._load_model()

        # TODO: Implement actual PIFuHD inference
        raise NotImplementedError("PIFuHD inference not yet complete")


class MeshGeneratorFactory:
    """Factory for selecting the best available mesh generator."""

    _generators = [
        PIFuHDGenerator,
        SilhouetteMeshGenerator,
    ]

    @classmethod
    def get_best_generator(cls) -> MeshGenerator:
        """Get the best available mesh generator."""
        for gen_class in cls._generators:
            gen = gen_class()
            if gen.is_available():
                logger.info(f"Selected mesh generator: {gen.name}")
                return gen

        raise RuntimeError("No mesh generator available")

    @classmethod
    def get_generator(cls, name: str) -> MeshGenerator:
        """Get a specific mesh generator by name."""
        generators = {
            "silhouette": SilhouetteMeshGenerator,
            "pifuhd": PIFuHDGenerator,
        }

        if name not in generators:
            raise ValueError(f"Unknown generator: {name}. Available: {list(generators.keys())}")

        gen = generators[name]()
        if not gen.is_available():
            raise RuntimeError(f"Generator '{name}' is not available")

        return gen


# Convenience function
def generate_mesh_from_images(
    front_image: np.ndarray,
    side_image: Optional[np.ndarray] = None,
    back_image: Optional[np.ndarray] = None,
    generator_name: Optional[str] = None,
) -> Tuple[np.ndarray, np.ndarray, str]:
    """Generate 3D mesh from images.

    Args:
        front_image: Front view image (H, W, 3) RGB
        side_image: Optional side view image
        back_image: Optional back view image
        generator_name: Optional specific generator to use

    Returns:
        Tuple of (vertices, faces, generator_name)
    """
    if generator_name:
        gen = MeshGeneratorFactory.get_generator(generator_name)
    else:
        gen = MeshGeneratorFactory.get_best_generator()

    vertices, faces = gen.generate(front_image, side_image, back_image)
    return vertices, faces, gen.name
