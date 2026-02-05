"""GLB export utilities for mesh generation."""

import numpy as np
from pathlib import Path
from typing import Optional, Tuple


def create_placeholder_glb(output_path: Path) -> None:
    """Create a simple placeholder GLB mesh for testing.

    Creates a basic humanoid-shaped mesh (capsule body with limbs).
    This is used in Phase 1A before real AI reconstruction is integrated.
    """
    try:
        import trimesh

        # Create a simple humanoid placeholder using primitives
        meshes = []

        # Torso (capsule-like cylinder)
        torso = trimesh.creation.cylinder(radius=0.15, height=0.5)
        torso.apply_translation([0, 0.75, 0])
        meshes.append(torso)

        # Head (sphere)
        head = trimesh.creation.icosphere(radius=0.1, subdivisions=2)
        head.apply_translation([0, 1.15, 0])
        meshes.append(head)

        # Left arm
        left_arm = trimesh.creation.cylinder(radius=0.04, height=0.5)
        left_arm.apply_translation([-0.25, 0.85, 0])
        meshes.append(left_arm)

        # Right arm
        right_arm = trimesh.creation.cylinder(radius=0.04, height=0.5)
        right_arm.apply_translation([0.25, 0.85, 0])
        meshes.append(right_arm)

        # Left leg
        left_leg = trimesh.creation.cylinder(radius=0.06, height=0.5)
        left_leg.apply_translation([-0.08, 0.25, 0])
        meshes.append(left_leg)

        # Right leg
        right_leg = trimesh.creation.cylinder(radius=0.06, height=0.5)
        right_leg.apply_translation([0.08, 0.25, 0])
        meshes.append(right_leg)

        # Combine all meshes
        combined = trimesh.util.concatenate(meshes)

        # Set a neutral color
        combined.visual.vertex_colors = np.tile([200, 180, 160, 255], (len(combined.vertices), 1))

        # Export to GLB
        output_path.parent.mkdir(parents=True, exist_ok=True)
        combined.export(str(output_path), file_type="glb")

    except ImportError:
        # Fallback: create minimal valid GLB using pygltflib
        _create_minimal_glb(output_path)


def _create_minimal_glb(output_path: Path) -> None:
    """Create a minimal valid GLB file using pygltflib."""
    from pygltflib import GLTF2, Scene, Node, Mesh, Primitive, Accessor, BufferView, Buffer
    import struct

    # Simple triangle vertices
    vertices = np.array([
        [0, 0, 0],
        [1, 0, 0],
        [0.5, 1, 0],
    ], dtype=np.float32)

    indices = np.array([0, 1, 2], dtype=np.uint16)

    # Pack binary data
    vertex_data = vertices.tobytes()
    index_data = indices.tobytes()
    binary_blob = index_data + vertex_data

    # Create GLTF structure
    gltf = GLTF2(
        scene=0,
        scenes=[Scene(nodes=[0])],
        nodes=[Node(mesh=0)],
        meshes=[Mesh(primitives=[Primitive(attributes={"POSITION": 1}, indices=0)])],
        accessors=[
            Accessor(bufferView=0, componentType=5123, count=3, type="SCALAR"),  # indices
            Accessor(bufferView=1, componentType=5126, count=3, type="VEC3",
                     max=[1, 1, 0], min=[0, 0, 0]),  # vertices
        ],
        bufferViews=[
            BufferView(buffer=0, byteLength=len(index_data), byteOffset=0),
            BufferView(buffer=0, byteLength=len(vertex_data), byteOffset=len(index_data)),
        ],
        buffers=[Buffer(byteLength=len(binary_blob))],
    )

    gltf.set_binary_blob(binary_blob)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    gltf.save(str(output_path))


def export_mesh_to_glb(
    vertices: np.ndarray,
    faces: np.ndarray,
    output_path: Path,
    vertex_colors: Optional[np.ndarray] = None,
    uv_coords: Optional[np.ndarray] = None,
    texture_image: Optional[np.ndarray] = None,
) -> None:
    """Export mesh data to GLB format.

    Args:
        vertices: Nx3 array of vertex positions
        faces: Mx3 array of triangle indices
        output_path: Output file path
        vertex_colors: Optional Nx4 array of RGBA colors (0-255)
        uv_coords: Optional Nx2 array of UV coordinates
        texture_image: Optional HxWx3 or HxWx4 texture image
    """
    import trimesh

    mesh = trimesh.Trimesh(vertices=vertices, faces=faces)

    if vertex_colors is not None:
        mesh.visual.vertex_colors = vertex_colors

    if uv_coords is not None and texture_image is not None:
        from PIL import Image
        from trimesh.visual import TextureVisuals
        from trimesh.visual.material import SimpleMaterial

        # Create texture
        if texture_image.dtype != np.uint8:
            texture_image = (texture_image * 255).astype(np.uint8)

        image = Image.fromarray(texture_image)
        material = SimpleMaterial(image=image)
        mesh.visual = TextureVisuals(uv=uv_coords, material=material)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    mesh.export(str(output_path), file_type="glb")
