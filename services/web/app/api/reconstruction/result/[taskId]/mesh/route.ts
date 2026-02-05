import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/reconstruction/result/[taskId]/mesh
 *
 * Download the reconstructed mesh GLB file.
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ taskId: string }> }
) {
  try {
    const { taskId } = await params;

    const pythonUrl =
      process.env.PYTHON_BASE_URL || "http://localhost:8000";

    const response = await fetch(
      `${pythonUrl}/api/v1/reconstruction/result/${taskId}/mesh`
    );

    if (!response.ok) {
      const data = await response.json().catch(() => ({
        ok: false,
        error: `HTTP ${response.status}`,
      }));
      return NextResponse.json(data, { status: response.status });
    }

    // Stream the GLB file
    const arrayBuffer = await response.arrayBuffer();

    return new NextResponse(arrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": "model/gltf-binary",
        "Content-Disposition": `attachment; filename="${taskId}_mesh.glb"`,
      },
    });
  } catch (error: any) {
    console.error("Reconstruction mesh download error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: error?.message || "Failed to download mesh",
      },
      { status: 502 }
    );
  }
}
