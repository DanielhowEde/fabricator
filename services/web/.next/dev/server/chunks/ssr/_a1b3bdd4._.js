module.exports = [
"[project]/components/layout/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$UiRouterProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/UiRouterProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const OPEN_GROUPS_KEY = "fabricator.ui.sidebar.openGroups";
const DEFAULT_GROUPS = {
    character: true,
    background: false,
    scenes: false,
    animate: false
};
function Sidebar() {
    const { activeRoute, setActiveRoute } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$UiRouterProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUiRouter"])();
    // ✅ default first (SSR + first client render match)
    const [openGroups, setOpenGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_GROUPS);
    // ✅ load after mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const raw = window.localStorage.getItem(OPEN_GROUPS_KEY);
            if (!raw) return;
            const parsed = JSON.parse(raw);
            setOpenGroups({
                ...DEFAULT_GROUPS,
                ...parsed ?? {}
            });
        } catch  {
        // ignore
        }
    }, []);
    // persist
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            window.localStorage.setItem(OPEN_GROUPS_KEY, JSON.stringify(openGroups));
        } catch  {
        // ignore
        }
    }, [
        openGroups
    ]);
    const routes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                id: "character",
                label: "Character Creation",
                items: [
                    {
                        id: "character/model",
                        label: "Model"
                    },
                    {
                        id: "character/mesh",
                        label: "Mesh"
                    },
                    {
                        id: "character/skeleton",
                        label: "Assign Skeleton"
                    },
                    {
                        id: "character/clothing",
                        label: "Clothing"
                    },
                    {
                        id: "character/hair",
                        label: "Hair"
                    },
                    {
                        id: "character/accessories",
                        label: "Accessories"
                    },
                    {
                        id: "character/test",
                        label: "Test Character"
                    }
                ]
            },
            {
                id: "background",
                label: "Background",
                items: [
                    {
                        id: "background/environment",
                        label: "Environment"
                    },
                    {
                        id: "background/lighting",
                        label: "Lighting"
                    },
                    {
                        id: "background/camera",
                        label: "Camera"
                    },
                    {
                        id: "background/audio",
                        label: "Audio"
                    }
                ]
            },
            {
                id: "scenes",
                label: "Scenes",
                items: [
                    {
                        id: "scenes/library",
                        label: "Scene Library"
                    },
                    {
                        id: "scenes/layout",
                        label: "Layout & Props"
                    },
                    {
                        id: "scenes/timeline",
                        label: "Timeline"
                    },
                    {
                        id: "scenes/export",
                        label: "Export Scene"
                    }
                ]
            },
            {
                id: "animate",
                label: "Animate",
                items: [
                    {
                        id: "animate/motions",
                        label: "Motion Library"
                    },
                    {
                        id: "animate/keyframes",
                        label: "Keyframes"
                    },
                    {
                        id: "animate/preview",
                        label: "Preview"
                    },
                    {
                        id: "animate/render",
                        label: "Render / Video"
                    }
                ]
            }
        ], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-80 bg-[rgb(var(--panel))] border-r border-[rgb(var(--border))] flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg font-semibold text-[rgb(var(--text))]",
                        children: "Fabricator"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-[rgb(var(--muted))]",
                        children: "Logo"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "px-3 pb-6 flex-1 overflow-auto",
                children: routes.map((group)=>{
                    const isOpen = !!openGroups[group.id];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenGroups((s)=>({
                                            ...s,
                                            [group.id]: !s[group.id]
                                        })),
                                className: " w-full rounded-2xl px-3 py-2 text-left text-[rgb(var(--text))] hover:bg-[rgb(var(--border))] transition ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: group.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2 text-xs text-[rgb(var(--muted))]",
                                        children: isOpen ? "▼" : "▶"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this),
                            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 ml-3 border-l border-[rgb(var(--border))] pl-2",
                                children: group.items.map((item)=>{
                                    const isActive = item.id === activeRoute;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveRoute(item.id),
                                        className: [
                                            "w-full rounded-2xl px-3 py-2 text-left text-sm transition",
                                            isActive ? "bg-[rgba(var(--primary),0.12)] text-[rgb(var(--text))] border border-[rgba(var(--primary),0.35)]" : "text-[rgb(var(--muted))] hover:bg-[rgb(var(--border))] hover:text-[rgb(var(--text))]"
                                        ].join(" "),
                                        children: item.label
                                    }, item.id, false, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 126,
                                        columnNumber: 23
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 122,
                                columnNumber: 17
                            }, this)
                        ]
                    }, group.id, true, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 103,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-[rgb(var(--border))]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setActiveRoute("settings"),
                    className: " w-full rounded-2xl px-3 py-2 text-left text-sm transition border border-[rgb(var(--border))] bg-[rgb(var(--panel))] text-[rgb(var(--text))] hover:bg-[rgb(var(--border))] ",
                    children: "⚙️ Settings"
                }, void 0, false, {
                    fileName: "[project]/components/layout/Sidebar.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Sidebar.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/layout/Topbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Topbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$UiRouterProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/UiRouterProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function Topbar() {
    const { activeRoute } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$UiRouterProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUiRouter"])();
    const title = activeRoute.split("/").map(capitalize).join(" · ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: " h-16 flex items-center justify-between px-6 border-b border-[rgb(var(--border))] bg-[rgb(var(--panel))]/70 backdrop-blur ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-[rgb(var(--muted))]",
                        children: "Workspace"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Topbar.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-semibold text-[rgb(var(--text))]",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Topbar.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Topbar.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " h-8 w-8 rounded-xl bg-[rgb(var(--primary))] text-white flex items-center justify-center font-bold text-sm ",
                        children: "F"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Topbar.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-[rgb(var(--text))]",
                        children: "Fabricator"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Topbar.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Topbar.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Topbar.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
function capitalize(s) {
    return s ? s[0].toUpperCase() + s.slice(1) : s;
}
}),
"[project]/components/layout/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Footer() {
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: " h-12 flex items-center justify-center gap-4 px-6 text-xs bg-[rgb(var(--panel))] border-t border-[rgb(var(--border))] text-[rgb(var(--muted))] ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " Daniel Ede"
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            status === "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Checking session…"
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 20,
                columnNumber: 32
            }, this),
            status !== "loading" && !session?.user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Not signed in"
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this),
            session?.user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    "Signed in as ",
                    session.user.email
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Footer.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/workspace/character/CharacterModelTool.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CharacterModelTool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
// ---- IndexedDB (Option B) ----
const DB_NAME = "fabricator";
const DB_VERSION = 2;
const STORE_CHARACTERS = "characters";
const STORE_IMAGES = "characterImages";
const STORE_ASSETS = "characterAssets";
function idbOpen() {
    return new Promise((resolve, reject)=>{
        const req = indexedDB.open(DB_NAME, DB_VERSION);
        req.onupgradeneeded = ()=>{
            const db = req.result;
            if (!db.objectStoreNames.contains(STORE_CHARACTERS)) {
                const s = db.createObjectStore(STORE_CHARACTERS, {
                    keyPath: "id"
                });
                s.createIndex("updatedAt", "updatedAt", {
                    unique: false
                });
                s.createIndex("name", "name", {
                    unique: false
                });
            }
            if (!db.objectStoreNames.contains(STORE_IMAGES)) {
                const s = db.createObjectStore(STORE_IMAGES, {
                    keyPath: [
                        "characterId",
                        "view"
                    ]
                });
                s.createIndex("characterId", "characterId", {
                    unique: false
                });
                s.createIndex("updatedAt", "updatedAt", {
                    unique: false
                });
            }
            if (!db.objectStoreNames.contains(STORE_ASSETS)) {
                const s = db.createObjectStore(STORE_ASSETS, {
                    keyPath: [
                        "characterId",
                        "type"
                    ]
                });
                s.createIndex("characterId", "characterId", {
                    unique: false
                });
                s.createIndex("updatedAt", "updatedAt", {
                    unique: false
                });
            }
        };
        req.onsuccess = ()=>resolve(req.result);
        req.onerror = ()=>reject(req.error);
    });
}
function idbReq(r) {
    return new Promise((resolve, reject)=>{
        r.onsuccess = ()=>resolve(r.result);
        r.onerror = ()=>reject(r.error);
    });
}
/** Ensure we actually wait for IndexedDB transactions to complete */ function txDone(tx) {
    return new Promise((resolve, reject)=>{
        tx.oncomplete = ()=>resolve();
        tx.onerror = ()=>reject(tx.error);
        tx.onabort = ()=>reject(tx.error);
    });
}
async function idbListCharacters() {
    const db = await idbOpen();
    try {
        const tx = db.transaction([
            STORE_CHARACTERS
        ], "readonly");
        const all = await idbReq(tx.objectStore(STORE_CHARACTERS).getAll());
        // (readonly getAll is fine without waiting, but it's safe/consistent)
        await txDone(tx);
        return [
            ...all
        ].sort((a, b)=>String(b.updatedAt).localeCompare(String(a.updatedAt)));
    } finally{
        db.close();
    }
}
async function idbUpsertCharacter(rec) {
    const db = await idbOpen();
    try {
        const tx = db.transaction([
            STORE_CHARACTERS
        ], "readwrite");
        await idbReq(tx.objectStore(STORE_CHARACTERS).put(rec));
        await txDone(tx);
    } finally{
        db.close();
    }
}
async function idbGetCharacter(id) {
    const db = await idbOpen();
    try {
        const tx = db.transaction([
            STORE_CHARACTERS
        ], "readonly");
        const rec = await idbReq(tx.objectStore(STORE_CHARACTERS).get(id));
        await txDone(tx);
        return rec ?? null;
    } finally{
        db.close();
    }
}
async function idbUpsertImage(rec) {
    const db = await idbOpen();
    try {
        const tx = db.transaction([
            STORE_IMAGES
        ], "readwrite");
        await idbReq(tx.objectStore(STORE_IMAGES).put(rec));
        await txDone(tx);
    } finally{
        db.close();
    }
}
async function idbUpsertAsset(rec) {
    const db = await idbOpen();
    try {
        const tx = db.transaction([
            STORE_ASSETS
        ], "readwrite");
        await idbReq(tx.objectStore(STORE_ASSETS).put(rec));
        await txDone(tx);
    } finally{
        db.close();
    }
}
async function idbGetAsset(characterId, type) {
    const db = await idbOpen();
    try {
        const tx = db.transaction([
            STORE_ASSETS
        ], "readonly");
        const rec = await idbReq(tx.objectStore(STORE_ASSETS).get([
            characterId,
            type
        ]));
        await txDone(tx);
        return rec ?? null;
    } finally{
        db.close();
    }
}
async function idbListImages(characterId) {
    const db = await idbOpen();
    try {
        const tx = db.transaction([
            STORE_IMAGES
        ], "readonly");
        const store = tx.objectStore(STORE_IMAGES);
        const idx = store.index("characterId");
        const range = IDBKeyRange.only(characterId);
        const out = [];
        await new Promise((resolve, reject)=>{
            const cur = idx.openCursor(range);
            cur.onerror = ()=>reject(cur.error);
            cur.onsuccess = ()=>{
                const c = cur.result;
                if (!c) return resolve();
                out.push(c.value);
                c.continue();
            };
        });
        await txDone(tx);
        return out;
    } finally{
        db.close();
    }
}
async function idbDeleteCharacterAndImages(characterId) {
    const db = await idbOpen();
    try {
        const tx = db.transaction([
            STORE_CHARACTERS,
            STORE_IMAGES,
            STORE_ASSETS
        ], "readwrite");
        // Delete character record
        tx.objectStore(STORE_CHARACTERS).delete(characterId);
        // Delete all images for characterId
        const istore = tx.objectStore(STORE_IMAGES);
        const iidx = istore.index("characterId");
        const irange = IDBKeyRange.only(characterId);
        await new Promise((resolve, reject)=>{
            const cur = iidx.openCursor(irange);
            cur.onerror = ()=>reject(cur.error);
            cur.onsuccess = ()=>{
                const c = cur.result;
                if (!c) return resolve();
                c.delete();
                c.continue();
            };
        });
        // Delete all assets for characterId (e.g., blockout_glb)
        const astore = tx.objectStore(STORE_ASSETS);
        const aidx = astore.index("characterId");
        const arange = IDBKeyRange.only(characterId);
        await new Promise((resolve, reject)=>{
            const cur = aidx.openCursor(arange);
            cur.onerror = ()=>reject(cur.error);
            cur.onsuccess = ()=>{
                const c = cur.result;
                if (!c) return resolve();
                c.delete();
                c.continue();
            };
        });
        await txDone(tx);
    } finally{
        db.close();
    }
}
function newId() {
    const uuid = globalThis.crypto?.randomUUID?.();
    return uuid ?? `id_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}
// ---- Prompt fragments (keep outside component) ----
const BASE_VIEWS = [
    "front",
    "side",
    "back"
];
const EXTRA_VIEWS = [
    "front_3q_left",
    "back_3q_left"
];
const ALL_VIEWS = [
    ...BASE_VIEWS,
    ...EXTRA_VIEWS
];
const VIEW_LABEL = {
    front: "Front",
    side: "Side",
    back: "Back",
    front_3q_left: "¾ Front (L)",
    back_3q_left: "¾ Back (L)"
};
const VIEW_TEXT = {
    front: "front view, facing camera",
    side: "exact 90-degree side profile view, facing left",
    back: "rear view, back facing camera",
    front_3q_left: "three-quarter front view from the left (about 45 degrees), head-to-toe visible, same proportions",
    back_3q_left: "three-quarter back view from the left (about 45 degrees), head-to-toe visible, same proportions"
};
const GENDER_TEXT = {
    female: "female",
    male: "male"
};
const PHOTO_TYPE_TEXT = {
    "ultra-realistic": "Ultra-realistic photographic depiction",
    photorealistic: "Photorealistic depiction",
    realistic: "Realistic depiction",
    cinematic: "Cinematic-style depiction with film lighting",
    studio: "Studio-style reference depiction with neutral lighting",
    anime: "Anime-style depiction",
    "3d-render": "High-quality 3D render depiction",
    "pixar-style": "Pixar-style 3D animated depiction",
    illustration: "Digital illustration depiction",
    comic: "Comic book style depiction",
    cartoon: "Cartoon-style depiction"
};
const POSE_TEXT = {
    t: "T-pose with arms extended horizontally",
    a: "A-pose with arms relaxed downward at approximately 45 degrees"
};
const BUILD_PROMPTS = {
    slim: "slim build, narrow frame",
    athletic: "athletic build, toned physique",
    average: "average build, balanced proportions",
    curvy: "curvy build, fuller proportions",
    muscular: "muscular build, well-defined musculature"
};
const AGE_PROMPTS = {
    "18-25": "young adult (18–25), fully mature anatomy, youthful proportions",
    "26-35": "adult (26–35), mature anatomy, balanced proportions",
    "36-50": "adult (36–50), mature anatomy, subtle age definition",
    "50+": "older adult (50+), mature anatomy, realistic age characteristics"
};
const DESCRIPTION_TEMPLATE = `Face:
- Eyes colour, and shape, eyebrows, nose, mouth, facial structure

Body:
- Build, proportions, skin tone (optional)

Hair:
- colour, length - if long this should be tied back to expose the neck as this will help with 3D modeling

Defining Characteristics:
- `;
function revokeIfBlob(src) {
    if (src?.startsWith("blob:")) URL.revokeObjectURL(src);
}
function dataUrlToBlob(dataUrl) {
    const [meta, b64] = dataUrl.split(",");
    const mime = meta.match(/data:([^;]+);base64/)?.[1] ?? "image/png";
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for(let i = 0; i < bin.length; i++)bytes[i] = bin.charCodeAt(i);
    return {
        blob: new Blob([
            bytes
        ], {
            type: mime
        }),
        mime
    };
}
async function urlToBlob(url) {
    const res = await fetch(url);
    const blob = await res.blob();
    return {
        blob,
        mime: blob.type || "image/png"
    };
}
function CharacterModelTool() {
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("generate");
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("female");
    const [pose, setPose] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("t");
    const [photoType, setPhotoType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("ultra-realistic");
    const [build, setBuild] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("athletic");
    const [age, setAge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("26-35");
    const [includeThreeQuarter, setIncludeThreeQuarter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [characterName, setCharacterName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeCharacterId, setActiveCharacterId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeCharacterName, setActiveCharacterName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [characterList, setCharacterList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("front");
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(DESCRIPTION_TEMPLATE);
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("1024x1024");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imageLabel, setImageLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPromptPreview, setShowPromptPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const EMPTY_IMAGES = {
        front: null,
        side: null,
        back: null,
        front_3q_left: null,
        back_3q_left: null
    };
    const [imagesByView, setImagesByView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(EMPTY_IMAGES);
    const canGenerate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>prompt.trim().length >= 10, [
        prompt
    ]);
    const currentImageSrc = imagesByView[view];
    const hasAnyImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>ALL_VIEWS.some((v)=>!!imagesByView[v]), [
        imagesByView
    ]);
    const viewsToGenerate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>includeThreeQuarter ? [
            ...BASE_VIEWS,
            ...EXTRA_VIEWS
        ] : [
            ...BASE_VIEWS
        ], [
        includeThreeQuarter
    ]);
    // IMPORTANT: only revoke CURRENT state's blob URLs (never accept "next")
    function revokeAllBlobs() {
        ALL_VIEWS.forEach((v)=>revokeIfBlob(imagesByView[v]));
    }
    // Load saved character list (IndexedDB) once on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let cancelled = false;
        idbListCharacters().then((all)=>{
            if (cancelled) return;
            setCharacterList(all.map((c)=>({
                    id: c.id,
                    name: c.name
                })));
        }).catch(()=>{
        // IndexedDB can be unavailable in some embedded contexts
        });
        return ()=>{
            cancelled = true;
        };
    }, []);
    async function refreshCharacterList() {
        const all = await idbListCharacters();
        setCharacterList(all.map((c)=>({
                id: c.id,
                name: c.name
            })));
    }
    function buildPromptForView(v) {
        if (mode === "load") return "";
        const corePrompt = [
            PHOTO_TYPE_TEXT[photoType],
            `of a ${GENDER_TEXT[gender]} character`,
            AGE_PROMPTS[age],
            BUILD_PROMPTS[build],
            `in a ${POSE_TEXT[pose]}`,
            "full-body",
            "head-to-toe visible",
            "centered subject",
            "no cropping"
        ].join(", ");
        const clothingPrompt = [
            "Wearing standard modelling reference attire:",
            "plain, non-decorative swimwear (bikini for female / trunks for male)",
            "neutral matte colour",
            "form-fitting",
            "non-transparent",
            "non-sexualised"
        ].join(", ");
        return [
            corePrompt,
            VIEW_TEXT[v],
            "Neutral lighting, plain background",
            clothingPrompt,
            prompt.trim(),
            "No text, no watermark, no logo, no props, no extra people"
        ].filter(Boolean).join("\n\n");
    }
    const finalPrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildPromptForView(view), [
        mode,
        view,
        photoType,
        gender,
        age,
        build,
        pose,
        prompt
    ]);
    function onPickFileClick() {
        fileInputRef.current?.click();
    }
    function onDropFile(file) {
        setErr(null);
        if (!file.type.startsWith("image/")) {
            setErr("Please choose an image file (PNG/JPG/WebP).");
            return;
        }
        // revoke anything currently showing
        revokeAllBlobs();
        const url = URL.createObjectURL(file);
        setImagesByView({
            ...EMPTY_IMAGES,
            front: url
        });
        setView("front");
        setImageLabel(`Loaded: ${file.name}`);
    }
    function onDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        const file = e.dataTransfer.files?.[0];
        if (file) onDropFile(file);
    }
    function onDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    async function onFileSelected(e) {
        const file = e.target.files?.[0];
        if (file) onDropFile(file);
        e.target.value = "";
    }
    async function handleSaveProject() {
        setErr(null);
        const name = characterName.trim();
        if (!name) {
            setErr("Enter a character name before saving.");
            return;
        }
        const now = new Date().toISOString();
        // If you renamed, treat it as Save As New
        const isRename = !!activeCharacterId && activeCharacterName && activeCharacterName !== name;
        const id = !activeCharacterId || isRename ? newId() : activeCharacterId;
        // Preserve createdAt on update
        const existing = activeCharacterId ? await idbGetCharacter(activeCharacterId) : null;
        const createdAt = existing?.createdAt ?? now;
        const rec = {
            id,
            name,
            createdAt,
            updatedAt: now,
            gender,
            pose,
            photoType,
            build,
            age,
            size,
            prompt,
            includeThreeQuarter
        };
        await idbUpsertCharacter(rec);
        // Save images (if any) as blobs
        for (const v of ALL_VIEWS){
            const src = imagesByView[v];
            if (!src) continue;
            const { blob, mime } = src.startsWith("data:") ? dataUrlToBlob(src) : await urlToBlob(src);
            await idbUpsertImage({
                characterId: id,
                view: v,
                mime,
                blob,
                updatedAt: now
            });
        }
        // NOTE:
        // blockout_glb is created/updated by the Mesh Workspace.
        // Character creation page does NOT attach or manage GLBs.
        // We intentionally do nothing here unless another page already saved it.
        setActiveCharacterId(id);
        setActiveCharacterName(name);
        setImageLabel(`Saved: ${name}`);
        await refreshCharacterList();
    }
    async function handleLoadProject(id) {
        setErr(null);
        const rec = await idbGetCharacter(id);
        if (!rec) {
            setErr("Could not load that character (not found).");
            return;
        }
        // Revoke current blob URLs to avoid leaks
        revokeAllBlobs();
        setActiveCharacterId(rec.id);
        setCharacterName(rec.name);
        setActiveCharacterName(rec.name);
        // NOTE: don't force mode; keep user's current mode
        // setMode("generate");
        setGender(rec.gender);
        setPose(rec.pose);
        setPhotoType(rec.photoType);
        setBuild(rec.build);
        setAge(rec.age);
        setSize(rec.size);
        setPrompt(rec.prompt);
        setIncludeThreeQuarter(!!rec.includeThreeQuarter);
        setView("front");
        const imgs = await idbListImages(rec.id);
        const next = {
            ...EMPTY_IMAGES
        };
        for (const img of imgs){
            next[img.view] = URL.createObjectURL(img.blob);
        }
        setImagesByView(next);
        setImageLabel(`Loaded: ${rec.name}`);
    }
    async function handleDeleteProject() {
        if (!activeCharacterId) return;
        setErr(null);
        await idbDeleteCharacterAndImages(activeCharacterId);
        // Reset UI
        handleNewProject();
        setImageLabel("Deleted character");
        await refreshCharacterList();
    }
    function handleNewProject() {
        setActiveCharacterId(null);
        setActiveCharacterName("");
        setCharacterName("");
        handleReset();
        setImageLabel("New character");
    }
    async function generateImage() {
        if (mode === "load") return;
        setBusy(true);
        setErr(null);
        // revoke any blob urls (loaded from IndexedDB)
        revokeAllBlobs();
        // clear previous images
        setImagesByView({
            ...EMPTY_IMAGES
        });
        try {
            for (const v of viewsToGenerate){
                setView(v);
                setImageLabel(`Generating: ${VIEW_LABEL[v]}…`);
                const promptForView = buildPromptForView(v);
                const r = await fetch("/api/images/generate", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        prompt: promptForView,
                        size,
                        output_format: "png",
                        gender,
                        photoType,
                        pose,
                        age,
                        build,
                        view: v
                    })
                });
                const data = await r.json();
                if (!r.ok || !("ok" in data) || data.ok !== true) {
                    const msg = "error" in data && data.error || `Image generation failed (HTTP ${r.status})`;
                    throw new Error(msg);
                }
                const src = `data:${data.mime};base64,${data.b64}`;
                setImagesByView((prev)=>({
                        ...prev,
                        [v]: src
                    }));
            }
            setView("front");
            setImageLabel(includeThreeQuarter ? "Generated: +¾ views" : "Generated: front / side / back");
        } catch (e) {
            setErr(String(e?.message ?? e));
        } finally{
            setBusy(false);
        }
    }
    function handleReset() {
        setErr(null);
        // Revoke blob URLs (only applies to loaded images)
        revokeAllBlobs();
        // Reset UI state to defaults
        setMode("generate");
        setGender("female");
        setPose("t");
        setPhotoType("ultra-realistic");
        setBuild("athletic");
        setAge("26-35");
        setIncludeThreeQuarter(false);
        setView("front");
        setPrompt(DESCRIPTION_TEMPLATE);
        setSize("1024x1024");
        setBusy(false);
        setImagesByView({
            ...EMPTY_IMAGES
        });
        setImageLabel(null);
        setShowPromptPreview(true);
        // Reset name field (you asked for clear/reset to also clear the save name)
        setCharacterName("");
        setActiveCharacterId(null);
        setActiveCharacterName("");
        // Clear file input so re-selecting the same file works
        if (fileInputRef.current) fileInputRef.current.value = "";
    }
    function clearImage() {
        setErr(null);
        setImageLabel(null);
        revokeAllBlobs();
        setImagesByView({
            ...EMPTY_IMAGES
        });
        setView("front");
        // Optional: Clear identity (matches your earlier request)
        setCharacterName("");
        setActiveCharacterId(null);
        setActiveCharacterName("");
    }
    function downloadImage() {
        const srcToDownload = currentImageSrc;
        if (!srcToDownload) return;
        const fileBase = `${view}-${new Date().toISOString().replace(/[:.]/g, "-")}`;
        if (srcToDownload.startsWith("blob:")) {
            const a = document.createElement("a");
            a.href = srcToDownload;
            a.download = `${fileBase}.png`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            return;
        }
        if (srcToDownload.startsWith("data:")) {
            const mimeMatch = srcToDownload.match(/^data:([^;]+);base64,/);
            const mime = mimeMatch?.[1] ?? "image/png";
            const ext = mime.includes("png") ? "png" : mime.includes("jpeg") ? "jpg" : "png";
            const a = document.createElement("a");
            a.href = srcToDownload;
            a.download = `${fileBase}.${ext}`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            return;
        }
        window.open(srcToDownload, "_blank");
    }
    async function copyPromptPreview() {
        try {
            await navigator.clipboard.writeText(finalPrompt);
        } catch  {
            const ta = document.createElement("textarea");
            ta.value = finalPrompt;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] text-[rgb(var(--text))]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3 border-b border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold",
                                children: "Character Model Tool"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 801,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                    value: mode,
                                    onChange: (e)=>{
                                        setErr(null);
                                        setMode(e.target.value);
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "load",
                                            children: "Load image"
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 812,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "generate",
                                            children: "Generate image"
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 813,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                    lineNumber: 804,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 803,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                        lineNumber: 800,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                value: activeCharacterId ?? "",
                                onChange: (e)=>{
                                    const id = e.target.value;
                                    if (id) handleLoadProject(id);
                                },
                                title: "Load a saved character",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        disabled: true,
                                        children: "Load character…"
                                    }, void 0, false, {
                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                        lineNumber: 829,
                                        columnNumber: 13
                                    }, this),
                                    characterList.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c.id,
                                            children: c.name
                                        }, c.id, false, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 833,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 820,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "w-44 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                placeholder: "Character name",
                                value: characterName,
                                onChange: (e)=>setCharacterName(e.target.value),
                                title: "Name used when saving"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 839,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50",
                                onClick: handleSaveProject,
                                type: "button",
                                disabled: busy,
                                title: "Save character settings + images",
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 847,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                onClick: handleNewProject,
                                type: "button",
                                title: "Start a new character",
                                children: "New"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 857,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50",
                                onClick: handleDeleteProject,
                                type: "button",
                                disabled: !activeCharacterId || busy,
                                title: activeCharacterId ? "Delete saved character" : "No saved character selected",
                                children: "Delete"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 866,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-secondary text-muted",
                                onClick: handleReset,
                                type: "button",
                                title: "Reset workspace",
                                children: "⟳ Reset"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 876,
                                columnNumber: 11
                            }, this),
                            hasAnyImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                        onClick: downloadImage,
                                        type: "button",
                                        disabled: !currentImageSrc,
                                        title: currentImageSrc ? `Download (${VIEW_LABEL[view]})` : "Select a generated view first",
                                        children: "Download"
                                    }, void 0, false, {
                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                        lineNumber: 882,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                        onClick: clearImage,
                                        type: "button",
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                        lineNumber: 891,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                        lineNumber: 818,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                lineNumber: 799,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid h-[calc(100%-52px)] grid-cols-1 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-[rgb(var(--border))] p-4 lg:border-b-0 lg:border-r",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    mode === "generate" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-semibold",
                                        children: "Character settings"
                                    }, void 0, false, {
                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                        lineNumber: 908,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-3",
                                        children: [
                                            mode === "generate" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setGender("female"),
                                                        className: [
                                                            "rounded-lg px-3 py-1.5 text-sm transition",
                                                            gender === "female" ? "bg-[rgb(var(--primary))] text-white shadow-sm" : "bg-transparent text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                                                        ].join(" "),
                                                        children: "Female"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 914,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setGender("male"),
                                                        className: [
                                                            "rounded-lg px-3 py-1.5 text-sm transition",
                                                            gender === "male" ? "bg-[rgb(var(--primary))] text-white shadow-sm" : "bg-transparent text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                                                        ].join(" "),
                                                        children: "Male"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 926,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 913,
                                                columnNumber: 17
                                            }, this),
                                            mode === "generate" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-[rgb(var(--muted))]",
                                                        children: "Pose"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 944,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-flex items-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setPose("t"),
                                                                className: [
                                                                    "rounded-lg px-3 py-1.5 text-sm transition",
                                                                    pose === "t" ? "bg-[rgb(var(--primary))] text-white shadow-sm" : "bg-transparent text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                                                                ].join(" "),
                                                                children: "T"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 946,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setPose("a"),
                                                                className: [
                                                                    "rounded-lg px-3 py-1.5 text-sm transition",
                                                                    pose === "a" ? "bg-[rgb(var(--primary))] text-white shadow-sm" : "bg-transparent text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                                                                ].join(" "),
                                                                children: "A"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 958,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 945,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 943,
                                                columnNumber: 17
                                            }, this),
                                            mode === "generate" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-[rgb(var(--muted))]",
                                                        children: "Photo type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 977,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                                        value: photoType,
                                                        onChange: (e)=>setPhotoType(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "ultra-realistic",
                                                                children: "Ultra-realistic"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 983,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "photorealistic",
                                                                children: "Photorealistic"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 984,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "realistic",
                                                                children: "Realistic"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 985,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "cinematic",
                                                                children: "Cinematic"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 986,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "studio",
                                                                children: "Studio"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 987,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "anime",
                                                                children: "Anime"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 988,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "3d-render",
                                                                children: "3D render"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 989,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "pixar-style",
                                                                children: "Pixar-style"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 990,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "illustration",
                                                                children: "Illustration"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 991,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "comic",
                                                                children: "Comic"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 992,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "cartoon",
                                                                children: "Cartoon"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 993,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 978,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 976,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                        lineNumber: 910,
                                        columnNumber: 13
                                    }, this),
                                    mode === "generate" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "mb-1 block text-xs text-[rgb(var(--muted))]",
                                                        children: "Build"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 1003,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                                        value: build,
                                                        onChange: (e)=>setBuild(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "slim",
                                                                children: "Slim"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 1009,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "athletic",
                                                                children: "Athletic"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 1010,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "average",
                                                                children: "Average"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 1011,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "curvy",
                                                                children: "Curvy"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 1012,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "muscular",
                                                                children: "Muscular"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 1013,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 1004,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 1002,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "mb-1 block text-xs text-[rgb(var(--muted))]",
                                                        children: "Character age"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 1018,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                                        value: age,
                                                        onChange: (e)=>setAge(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "18-25",
                                                                children: "Adult (18–25)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 1024,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "26-35",
                                                                children: "Adult (26–35)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 1025,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "36-50",
                                                                children: "Adult (36–50)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 1026,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "50+",
                                                                children: "Adult (50+)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 1027,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 1019,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 1017,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                        lineNumber: 1001,
                                        columnNumber: 15
                                    }, this),
                                    mode === "generate" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: includeThreeQuarter,
                                                onChange: (e)=>setIncludeThreeQuarter(e.target.checked)
                                            }, void 0, false, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 1035,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-[rgb(var(--muted))]",
                                                children: "Include ¾ views (higher quality)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 1040,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                        lineNumber: 1034,
                                        columnNumber: 15
                                    }, this),
                                    mode === "generate" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-[rgb(var(--muted))]",
                                                children: "Preview view"
                                            }, void 0, false, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 1047,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                                value: view,
                                                onChange: (e)=>setView(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "front",
                                                        children: "Front"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 1053,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "side",
                                                        children: "Side"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 1054,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "back",
                                                        children: "Back"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 1055,
                                                        columnNumber: 19
                                                    }, this),
                                                    includeThreeQuarter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "front_3q_left",
                                                                children: "¾ Front (L)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 1058,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "back_3q_left",
                                                                children: "¾ Back (L)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 1059,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 1048,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-[rgb(var(--muted))]",
                                                children: "(Generate creates all selected views)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 1063,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                        lineNumber: 1046,
                                        columnNumber: 15
                                    }, this),
                                    mode === "load" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-semibold",
                                                children: "Load reference image"
                                            }, void 0, false, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 1070,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-[rgb(var(--muted))]",
                                                children: "Drag & drop a clear, full-body reference image (front-facing if possible)."
                                            }, void 0, false, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 1071,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: fileInputRef,
                                                type: "file",
                                                accept: "image/*",
                                                className: "hidden",
                                                onChange: onFileSelected
                                            }, void 0, false, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 1075,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onDrop: onDrop,
                                                onDragOver: onDragOver,
                                                className: "rounded-2xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-6 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium",
                                                        children: "Drag image here"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 1082,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-1 text-xs text-[rgb(var(--muted))]",
                                                        children: "PNG / JPG / WebP • full-body • minimal distortion"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 1083,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: "mt-4 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-4 py-2 text-sm text-[rgb(var(--text))]",
                                                        onClick: onPickFileClick,
                                                        children: "Choose image…"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 1087,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 1077,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-semibold",
                                                children: "Generate reference image"
                                            }, void 0, false, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 1098,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-[rgb(var(--muted))]",
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 1100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                className: "w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-3 text-sm text-[rgb(var(--text))]",
                                                rows: 9,
                                                value: prompt,
                                                onChange: (e)=>{
                                                    const v = e.target.value;
                                                    setPrompt(v.trim() === "" ? DESCRIPTION_TEMPLATE : v);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 1101,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-2 flex items-center justify-between gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-semibold",
                                                                children: [
                                                                    "Prompt Preview (",
                                                                    VIEW_LABEL[view],
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 1114,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-1.5 text-xs text-[rgb(var(--text))]",
                                                                        onClick: ()=>setShowPromptPreview((v)=>!v),
                                                                        children: showPromptPreview ? "Hide" : "Show"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                        lineNumber: 1117,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-1.5 text-xs text-[rgb(var(--text))]",
                                                                        onClick: copyPromptPreview,
                                                                        children: "Copy"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                        lineNumber: 1125,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 1116,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 1113,
                                                        columnNumber: 19
                                                    }, this),
                                                    showPromptPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        readOnly: true,
                                                        value: finalPrompt,
                                                        rows: 6,
                                                        className: "w-full resize-none rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-3 text-xs leading-relaxed text-[rgb(var(--text))]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 1136,
                                                        columnNumber: 21
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-[rgb(var(--muted))]",
                                                        children: "Preview hidden."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 1143,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 1112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs text-[rgb(var(--muted))]",
                                                        children: "Size"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 1149,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                                        value: size,
                                                        onChange: (e)=>setSize(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "1024x1024",
                                                                children: "1024 × 1024 (Square)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 1155,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "1024x1536",
                                                                children: "1024 × 1536 (Portrait)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 1156,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "1536x1024",
                                                                children: "1536 × 1024 (Landscape)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 1157,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "auto",
                                                                children: "Auto"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                lineNumber: 1158,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                        lineNumber: 1150,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 1148,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50",
                                                disabled: !canGenerate || busy,
                                                onClick: generateImage,
                                                type: "button",
                                                children: busy ? "Generating…" : `Generate (${viewsToGenerate.length} views)`
                                            }, void 0, false, {
                                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                lineNumber: 1162,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 907,
                                columnNumber: 11
                            }, this),
                            err && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-700 dark:text-red-200",
                                children: err
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 1175,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                        lineNumber: 906,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-semibold",
                                        children: "Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                        lineNumber: 1184,
                                        columnNumber: 13
                                    }, this),
                                    imageLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-[rgb(var(--muted))]",
                                        children: imageLabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                        lineNumber: 1185,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 1183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-[calc(100%-28px)] flex-col rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-3",
                                children: currentImageSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: currentImageSrc,
                                            alt: `Character reference preview (${VIEW_LABEL[view]})`,
                                            className: "w-full flex-1 rounded-xl object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 1192,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex flex-wrap items-center justify-center gap-3",
                                            children: (includeThreeQuarter ? ALL_VIEWS : BASE_VIEWS).map((v)=>{
                                                const src = imagesByView[v];
                                                const isActive = v === view;
                                                const disabled = !src;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>src && setView(v),
                                                    className: [
                                                        "rounded-xl border p-1",
                                                        isActive ? "border-[rgb(var(--primary))]" : "border-[rgb(var(--border))] opacity-80 hover:opacity-100",
                                                        disabled ? "cursor-not-allowed opacity-30" : ""
                                                    ].join(" "),
                                                    title: src ? `View: ${VIEW_LABEL[v]}` : `Not generated: ${VIEW_LABEL[v]}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1 pb-1 text-center text-[10px] text-[rgb(var(--muted))]",
                                                            children: VIEW_LABEL[v]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 1219,
                                                            columnNumber: 25
                                                        }, this),
                                                        src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: src,
                                                            alt: `${v} thumbnail`,
                                                            className: "h-16 w-16 rounded-lg object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 1223,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-16 w-16 rounded-lg bg-[rgb(var(--panel))]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 1225,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, v, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 1206,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 1199,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-1 items-center justify-center text-sm text-[rgb(var(--muted))]",
                                    children: "No image yet — load a reference or generate one."
                                }, void 0, false, {
                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                    lineNumber: 1233,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 1188,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                        lineNumber: 1182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                lineNumber: 904,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
        lineNumber: 797,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/workspace/character/AssignSkeletonTool.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AssignSkeletonTool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project/ProjectProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function AssignSkeletonTool() {
    const { state, setRigId, setSkeletonAssigned } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProject"])();
    const characterId = state.character.characterId;
    const rigId = state.character.rigId;
    const assigned = state.character.skeletonAssigned;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-6 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-semibold text-[rgb(var(--text))]",
                        children: "Character · Assign Skeleton"
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-sm text-[rgb(var(--muted))]",
                        children: "Choose rig type, validate joints, preview deformation."
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-[rgb(var(--muted))]",
                        children: "Active character"
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 text-sm font-medium text-[rgb(var(--text))]",
                        children: characterId ?? "None selected"
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    !characterId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-xs text-[rgb(var(--muted))]",
                        children: [
                            "Go to ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: "Character → Model"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                                lineNumber: 31,
                                columnNumber: 19
                            }, this),
                            " to select or create a character first."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-[rgb(var(--text))]",
                        children: "Rig type"
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                selected: rigId === "humanoid",
                                onClick: ()=>setRigId("humanoid"),
                                disabled: !characterId,
                                children: "Humanoid"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                selected: rigId === "quadruped",
                                onClick: ()=>setRigId("quadruped"),
                                disabled: !characterId,
                                children: "Quadruped"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                selected: rigId === "custom",
                                onClick: ()=>setRigId("custom"),
                                disabled: !characterId,
                                children: "Custom"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSkeletonAssigned(true),
                        disabled: !characterId,
                        className: [
                            "rounded-2xl px-4 py-2 text-sm font-medium transition",
                            !characterId ? "opacity-60 cursor-not-allowed border border-[rgb(var(--border))] bg-[rgb(var(--panel))] text-[rgb(var(--muted))]" : "bg-[rgb(var(--primary))] text-white hover:opacity-90"
                        ].join(" "),
                        children: assigned ? "Re-assign Skeleton" : "Assign Skeleton"
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    assigned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: " rounded-full px-3 py-1 text-xs font-medium border border-[rgba(var(--primary),0.35)] bg-[rgba(var(--primary),0.12)] text-[rgb(var(--text))] ",
                        children: "✅ Assigned"
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    rigId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-[rgb(var(--muted))]",
                        children: [
                            "Rig: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-[rgb(var(--text))]",
                                children: rigId
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                                lineNumber: 80,
                                columnNumber: 18
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function Pill({ selected, disabled, onClick, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        className: [
            "rounded-2xl px-3 py-2 text-sm border transition",
            disabled ? "opacity-60 cursor-not-allowed border-[rgb(var(--border))] text-[rgb(var(--muted))]" : selected ? "bg-[rgba(var(--primary),0.12)] border-[rgba(var(--primary),0.35)] text-[rgb(var(--text))]" : "bg-[rgb(var(--panel))] border-[rgb(var(--border))] text-[rgb(var(--muted))] hover:bg-[rgb(var(--border))] hover:text-[rgb(var(--text))]"
        ].join(" "),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/workspace/character/CharacterMeshView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CharacterMeshView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function CharacterMeshView() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-semibold",
                        children: "Mesh Workspace"
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-[rgb(var(--muted))]",
                        children: "Empty mesh view (ready)."
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-10 text-center text-sm text-[rgb(var(--muted))]",
                children: "Mesh tools will live here."
            }, void 0, false, {
                fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/theme/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function ThemeToggle({ disabled }) {
    const { theme, setTheme, systemTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setMounted(true), []);
    // ✅ No useMemo needed (tiny computation)
    const resolved = theme === "system" ? systemTheme ?? "light" : theme ?? "light";
    const isDark = resolved === "dark";
    function animateThemeSwitch() {
        const root = document.documentElement;
        root.classList.add("theme-switching");
        window.setTimeout(()=>root.classList.remove("theme-switching"), 220);
    }
    // ✅ Early return AFTER hooks/consts
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>{
            if (disabled) return;
            animateThemeSwitch();
            setTheme(isDark ? "light" : "dark");
        },
        disabled: disabled,
        className: [
            "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium border transition",
            "border-[rgb(var(--border))] bg-[rgb(var(--panel))] text-[rgb(var(--text))]",
            disabled ? "opacity-60 cursor-not-allowed" : "hover:bg-[rgb(var(--border))]"
        ].join(" "),
        "aria-label": "Toggle theme",
        title: disabled ? "Theme is controlled by system" : "Toggle theme",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: isDark ? "🌙" : "☀️"
            }, void 0, false, {
                fileName: "[project]/components/theme/ThemeToggle.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: isDark ? "Dark" : "Light"
            }, void 0, false, {
                fileName: "[project]/components/theme/ThemeToggle.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/theme/ThemeToggle.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/settings/SettingsPage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme/ThemeToggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SettingsPage() {
    const { theme, setTheme, systemTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>setMounted(true), []);
    // ✅ Hook is always called, even before mounted === true
    const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (theme === "system") return systemTheme ?? "light";
        return theme ?? "light";
    }, [
        theme,
        systemTheme
    ]);
    const isSystem = theme === "system";
    function animateThemeSwitch() {
        const root = document.documentElement;
        root.classList.add("theme-switching");
        window.setTimeout(()=>root.classList.remove("theme-switching"), 220);
    }
    // ✅ Early return is AFTER all hooks
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-lg font-semibold text-[rgb(var(--text))]",
                                    children: "Appearance"
                                }, void 0, false, {
                                    fileName: "[project]/components/settings/SettingsPage.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-sm text-[rgb(var(--muted))]",
                                    children: [
                                        "Current:",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium capitalize",
                                            children: resolved
                                        }, void 0, false, {
                                            fileName: "[project]/components/settings/SettingsPage.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/settings/SettingsPage.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/settings/SettingsPage.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        isSystem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: " rounded-full px-3 py-1 text-xs font-medium border border-[rgba(var(--primary),0.35)] bg-[rgba(var(--primary),0.12)] text-[rgb(var(--text))] ",
                            children: "System"
                        }, void 0, false, {
                            fileName: "[project]/components/settings/SettingsPage.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/settings/SettingsPage.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex flex-wrap items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {
                            disabled: isSystem
                        }, void 0, false, {
                            fileName: "[project]/components/settings/SettingsPage.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                animateThemeSwitch();
                                setTheme("system");
                            },
                            className: [
                                "rounded-2xl px-4 py-2 text-sm font-medium border transition",
                                isSystem ? "bg-[rgba(var(--primary),0.12)] border-[rgba(var(--primary),0.35)] text-[rgb(var(--text))]" : "bg-[rgb(var(--panel))] border-[rgb(var(--border))] text-[rgb(var(--muted))] hover:text-[rgb(var(--text))] hover:bg-[rgb(var(--border))]"
                            ].join(" "),
                            children: "Use system"
                        }, void 0, false, {
                            fileName: "[project]/components/settings/SettingsPage.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        isSystem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        animateThemeSwitch();
                                        setTheme("light");
                                    },
                                    className: " rounded-2xl px-4 py-2 text-sm font-medium border transition border-[rgb(var(--border))] bg-[rgb(var(--panel))] text-[rgb(var(--text))] hover:bg-[rgb(var(--border))] ",
                                    children: "Force Light"
                                }, void 0, false, {
                                    fileName: "[project]/components/settings/SettingsPage.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        animateThemeSwitch();
                                        setTheme("dark");
                                    },
                                    className: " rounded-2xl px-4 py-2 text-sm font-medium border transition border-[rgb(var(--border))] bg-[rgb(var(--panel))] text-[rgb(var(--text))] hover:bg-[rgb(var(--border))] ",
                                    children: "Force Dark"
                                }, void 0, false, {
                                    fileName: "[project]/components/settings/SettingsPage.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/settings/SettingsPage.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/settings/SettingsPage.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                isSystem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 text-xs text-[rgb(var(--muted))]",
                    children: "Theme follows your OS settings. Use “Force Light/Dark” to override."
                }, void 0, false, {
                    fileName: "[project]/components/settings/SettingsPage.tsx",
                    lineNumber: 115,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/settings/SettingsPage.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/settings/SettingsPage.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/workspace/WorkspaceRouter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkspaceRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$UiRouterProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/UiRouterProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$CharacterModelTool$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/workspace/character/CharacterModelTool.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$AssignSkeletonTool$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/workspace/character/AssignSkeletonTool.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$CharacterMeshView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/workspace/character/CharacterMeshView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$settings$2f$SettingsPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/settings/SettingsPage.tsx [app-ssr] (ecmascript)"); // ✅ add this
"use client";
;
;
;
;
;
;
// Stubs (create later)
function Placeholder({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl font-semibold text-[rgb(var(--text))]",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-sm text-[rgb(var(--muted))]",
                children: "Tool UI goes here."
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
function WorkspaceRouter() {
    const { activeRoute } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$UiRouterProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUiRouter"])();
    switch(activeRoute){
        case "settings":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$settings$2f$SettingsPage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 26,
                columnNumber: 14
            }, this);
        case "character/model":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$CharacterModelTool$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 29,
                columnNumber: 14
            }, this);
        case "character/skeleton":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$AssignSkeletonTool$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 32,
                columnNumber: 14
            }, this);
        case "character/mesh":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$CharacterMeshView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 35,
                columnNumber: 14
            }, this);
        case "character/clothing":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Clothing"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 38,
                columnNumber: 14
            }, this);
        case "character/hair":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Hair"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 41,
                columnNumber: 14
            }, this);
        case "character/accessories":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Accessories"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 44,
                columnNumber: 14
            }, this);
        case "character/test":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Test Character"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 47,
                columnNumber: 14
            }, this);
        case "background/environment":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Background: Environment"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 50,
                columnNumber: 14
            }, this);
        case "background/lighting":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Background: Lighting"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 53,
                columnNumber: 14
            }, this);
        case "background/camera":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Background: Camera"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 56,
                columnNumber: 14
            }, this);
        case "background/audio":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Background: Audio"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 59,
                columnNumber: 14
            }, this);
        case "scenes/library":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Scenes: Library"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 62,
                columnNumber: 14
            }, this);
        case "scenes/layout":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Scenes: Layout & Props"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 65,
                columnNumber: 14
            }, this);
        case "scenes/timeline":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Scenes: Timeline"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 68,
                columnNumber: 14
            }, this);
        case "scenes/export":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Scenes: Export"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 71,
                columnNumber: 14
            }, this);
        case "animate/motions":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Animate: Motion Library"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 74,
                columnNumber: 14
            }, this);
        case "animate/keyframes":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Animate: Keyframes"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 77,
                columnNumber: 14
            }, this);
        case "animate/preview":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Animate: Preview"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 80,
                columnNumber: 14
            }, this);
        case "animate/render":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Animate: Render / Video"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 83,
                columnNumber: 14
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Select a tool"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 86,
                columnNumber: 14
            }, this);
    }
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Topbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Topbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$WorkspaceRouter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/workspace/WorkspaceRouter.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-zinc-950 text-zinc-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-1 flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Topbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$WorkspaceRouter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_a1b3bdd4._.js.map