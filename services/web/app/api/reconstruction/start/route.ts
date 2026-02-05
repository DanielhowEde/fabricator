import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/reconstruction/start
 *
 * Proxies reconstruction requests to the Python service.
 * Accepts multipart/form-data with images.
 */
export async function POST(request: NextRequest) {
  try {
    // Get Python service URL from environment or default
    const pythonUrl =
      process.env.PYTHON_BASE_URL || "http://localhost:8000";

    // Forward the request body directly to Python
    const formData = await request.formData();

    const response = await fetch(
      `${pythonUrl}/api/v1/reconstruction/start`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Reconstruction start error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: error?.message || "Failed to start reconstruction",
      },
      { status: 502 }
    );
  }
}
