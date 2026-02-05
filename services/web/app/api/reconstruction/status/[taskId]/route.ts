import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/reconstruction/status/[taskId]
 *
 * Get the status of a reconstruction task.
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
      `${pythonUrl}/api/v1/reconstruction/status/${taskId}`
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Reconstruction status error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: error?.message || "Failed to get status",
      },
      { status: 502 }
    );
  }
}
