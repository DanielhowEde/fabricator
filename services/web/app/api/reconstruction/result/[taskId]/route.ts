import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/reconstruction/result/[taskId]
 *
 * Get the result metadata of a completed reconstruction task.
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
      `${pythonUrl}/api/v1/reconstruction/result/${taskId}`
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Reconstruction result error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: error?.message || "Failed to get result",
      },
      { status: 502 }
    );
  }
}
