module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/api/images/generate/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
;
const runtime = "nodejs";
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
    apiKey: process.env.OPENAI_API_KEY
});
function generateMockImage(text) {
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
        mime: "image/svg+xml"
    };
}
async function POST(req) {
    const mock = process.env.MOCK_IMAGE_GEN === "true";
    try {
        const { prompt, size, gender, photoType, pose } = await req.json();
        if (!prompt) {
            return Response.json({
                ok: false,
                error: "Missing prompt"
            }, {
                status: 400
            });
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
            size: size ?? "1024x1024"
        });
        const b64 = img.data?.[0]?.b64_json;
        if (!b64) {
            return Response.json({
                ok: false,
                error: "No image returned"
            }, {
                status: 502
            });
        }
        return Response.json({
            ok: true,
            b64,
            mime: "image/png"
        });
    } catch (e) {
        console.error("Image generation error:", e);
        return Response.json({
            ok: false,
            error: e?.message ?? "Unknown error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__133f3afb._.js.map