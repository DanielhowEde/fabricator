import express from "express";
import fs from "node:fs/promises";
import path from "node:path";


const app = express();

// Enable JSON body parsing
app.use(express.json());

const PYTHON_BASE_URL = process.env.PYTHON_BASE_URL ?? "http://127.0.0.1:8000";
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/shared/videos";
const RECONSTRUCTION_OUTPUT_DIR = process.env.RECONSTRUCTION_OUTPUT_DIR ?? "/shared/outputs";

app.get("/", (_req, res) => {
  res.type("text").send("OK - Node is running. Try /health or /python/health");
});

app.get("/health", (_req, res) => res.json({ ok: true, service: "node" }));

app.get("/python/health", async (_req, res) => {
  try {
    const r = await fetch(`${PYTHON_BASE_URL}/health`);
    if (!r.ok) {
      return res.status(502).json({ ok: false, error: `Python returned ${r.status}` });
    }
    const data = await r.json();
    return res.json({ ok: true, python: data });
  } catch (err: any) {
    return res.status(502).json({ ok: false, error: err?.message ?? String(err) });
  }
});

app.get("/python/compute", async (req, res) => {
  const x = req.query.x ?? "2";
  const y = req.query.y ?? "3";

  try {
    const url = new URL(`${PYTHON_BASE_URL}/compute`);
    url.searchParams.set("x", String(x));
    url.searchParams.set("y", String(y));

    const r = await fetch(url);
    if (!r.ok) {
      return res.status(502).json({ ok: false, error: `Python returned ${r.status}` });
    }
    const data = await r.json();
    return res.json({ ok: true, python: data });
  } catch (err: any) {
    return res.status(502).json({ ok: false, error: err?.message ?? String(err) });
  }
});

app.listen(3000, () => {
  console.log("Node listening on http://localhost:3000");
  console.log(`Calling Python at ${PYTHON_BASE_URL}`);
});


// List output files
app.get("/outputs", async (_req, res) => {
  try {
    const entries = await fs.readdir(OUTPUT_DIR, { withFileTypes: true });

    const files = entries
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .sort((a, b) => a.localeCompare(b));

    res.json({ ok: true, outputDir: OUTPUT_DIR, files });
  } catch (e: any) {
    res.status(500).json({ ok: false, error: e?.message ?? String(e) });
  }
});

// Download an output file (safe against path traversal)
app.get("/outputs/:name", async (req, res) => {
  try {
    const name = String(req.params.name);

    // Basic guard: do not allow slashes/backslashes
    if (name.includes("/") || name.includes("\\")) {
      return res.status(400).json({ ok: false, error: "Invalid file name" });
    }

    const filePath = path.join(OUTPUT_DIR, name);

    // Ensure file exists
    await fs.access(filePath);

    // Send file
    return res.sendFile(filePath);
  } catch (e: any) {
    const msg = e?.message ?? String(e);
    // If file missing, return 404
    if (msg.includes("no such file") || msg.includes("ENOENT")) {
      return res.status(404).json({ ok: false, error: "File not found" });
    }
    return res.status(500).json({ ok: false, error: msg });
  }
});


// ============================================================================
// Reconstruction API Proxy Routes
// ============================================================================

// Get Python service URL for direct access (used by frontend for file uploads)
app.get("/python/reconstruction/config", (_req, res) => {
  res.json({
    ok: true,
    pythonBaseUrl: PYTHON_BASE_URL,
    reconstructionEndpoint: `${PYTHON_BASE_URL}/api/v1/reconstruction/start`,
    note: "Frontend should POST multipart/form-data directly to reconstructionEndpoint",
  });
});

// Get reconstruction status
app.get("/python/reconstruction/status/:taskId", async (req, res) => {
  const taskId = req.params.taskId;

  try {
    const r = await fetch(`${PYTHON_BASE_URL}/api/v1/reconstruction/status/${taskId}`);
    const data = await r.json();

    if (!r.ok) {
      return res.status(r.status).json(data);
    }
    return res.json(data);
  } catch (err: any) {
    return res.status(502).json({ ok: false, error: err?.message ?? String(err) });
  }
});

// Get reconstruction result metadata
app.get("/python/reconstruction/result/:taskId", async (req, res) => {
  const taskId = req.params.taskId;

  try {
    const r = await fetch(`${PYTHON_BASE_URL}/api/v1/reconstruction/result/${taskId}`);
    const data = await r.json();

    if (!r.ok) {
      return res.status(r.status).json(data);
    }
    return res.json(data);
  } catch (err: any) {
    return res.status(502).json({ ok: false, error: err?.message ?? String(err) });
  }
});

// Download reconstruction mesh file
app.get("/python/reconstruction/result/:taskId/mesh", async (req, res) => {
  const taskId = req.params.taskId;

  try {
    const r = await fetch(`${PYTHON_BASE_URL}/api/v1/reconstruction/result/${taskId}/mesh`);

    if (!r.ok) {
      const data = await r.json().catch(() => ({ error: `HTTP ${r.status}` }));
      return res.status(r.status).json(data);
    }

    // Stream the GLB file
    res.setHeader("Content-Type", "model/gltf-binary");
    res.setHeader("Content-Disposition", `attachment; filename="${taskId}_mesh.glb"`);

    const arrayBuffer = await r.arrayBuffer();
    return res.send(Buffer.from(arrayBuffer));
  } catch (err: any) {
    return res.status(502).json({ ok: false, error: err?.message ?? String(err) });
  }
});

// Cancel reconstruction
app.delete("/python/reconstruction/cancel/:taskId", async (req, res) => {
  const taskId = req.params.taskId;

  try {
    const r = await fetch(`${PYTHON_BASE_URL}/api/v1/reconstruction/cancel/${taskId}`, {
      method: "DELETE",
    });
    const data = await r.json();

    if (!r.ok) {
      return res.status(r.status).json(data);
    }
    return res.json(data);
  } catch (err: any) {
    return res.status(502).json({ ok: false, error: err?.message ?? String(err) });
  }
});

// Serve reconstruction output files
app.get("/reconstruction/outputs/:taskId/:filename", async (req, res) => {
  try {
    const { taskId, filename } = req.params;

    // Security: validate taskId and filename don't contain path traversal
    if (taskId.includes("/") || taskId.includes("\\") ||
        filename.includes("/") || filename.includes("\\")) {
      return res.status(400).json({ ok: false, error: "Invalid path" });
    }

    const filePath = path.join(RECONSTRUCTION_OUTPUT_DIR, taskId, filename);

    // Ensure file exists
    await fs.access(filePath);

    // Determine content type
    const ext = path.extname(filename).toLowerCase();
    const contentTypes: Record<string, string> = {
      ".glb": "model/gltf-binary",
      ".gltf": "model/gltf+json",
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".json": "application/json",
    };

    if (contentTypes[ext]) {
      res.setHeader("Content-Type", contentTypes[ext]);
    }

    return res.sendFile(filePath);
  } catch (e: any) {
    const msg = e?.message ?? String(e);
    if (msg.includes("no such file") || msg.includes("ENOENT")) {
      return res.status(404).json({ ok: false, error: "File not found" });
    }
    return res.status(500).json({ ok: false, error: msg });
  }
});