import { readFile } from "fs/promises";
import path from "path";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const pose = (url.searchParams.get("pose") || "a").toLowerCase();

  const filename =
    pose === "t" ? "Human-dev-baseT.glb" : "Human-dev-baseA.glb";

  // Your folder:
  // /shared/assets/base/Human-dev-baseA.glb
  const filePath = path.join(process.cwd(), "shared", "assets", "base", filename);

  try {
    const buf = await readFile(filePath);
    return new Response(buf, {
      headers: {
        "Content-Type": "model/gltf-binary",
        "Content-Disposition": `inline; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (e: any) {
    return new Response(
      `Base mesh not found: ${filename}\n${String(e?.message ?? e)}`,
      { status: 404 }
    );
  }
}