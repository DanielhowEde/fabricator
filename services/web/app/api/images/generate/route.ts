import OpenAI from "openai";

export const runtime = "nodejs";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function generateMockImage(text: string) {
  // 1024x1024 simple SVG → PNG base64
  const svg = `
    <svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#e5e7eb"/>
      <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle"
            font-size="48" font-family="Arial" fill="#111827">
        MOCK IMAGE
      </text>
      <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle"
            font-size="28" font-family="Arial" fill="#374151">
        ${text.replace(/</g, "").slice(0, 80)}
      </text>
    </svg>
  `;

  const b64 = Buffer.from(svg).toString("base64");
  return {
    ok: true,
    b64,
    mime: "image/svg+xml",
  };
}

export async function POST(req: Request) {
  const mock = process.env.MOCK_IMAGE_GEN === "true";

  try {
    const { prompt, size, gender, photoType, pose } = await req.json();

    if (!prompt) {
      return Response.json(
        { ok: false, error: "Missing prompt" },
        { status: 400 }
      );
    }

    // 🔹 MOCK MODE (no OpenAI call)
    if (mock) {
      const label = `${gender ?? ""} ${pose ?? ""} ${photoType ?? ""}`.trim();
      return Response.json(generateMockImage(label));
    }

    // 🔹 REAL OPENAI MODE
    const img = await client.images.generate({
      model: "gpt-image-1.5",
      prompt,
      size: size ?? "1024x1024",
    });

    const b64 = img.data?.[0]?.b64_json;
    if (!b64) {
      return Response.json(
        { ok: false, error: "No image returned" },
        { status: 502 }
      );
    }

    return Response.json({
      ok: true,
      b64,
      mime: "image/png",
    });
  } catch (e: any) {
    console.error("Image generation error:", e);
    return Response.json(
      { ok: false, error: e?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}