(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/layout/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$UiRouterProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/UiRouterProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const { activeRoute, setActiveRoute } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$UiRouterProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiRouter"])();
    // ✅ default first (SSR + first client render match)
    const [openGroups, setOpenGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_GROUPS);
    // ✅ load after mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
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
        }
    }["Sidebar.useEffect"], []);
    // persist
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            try {
                window.localStorage.setItem(OPEN_GROUPS_KEY, JSON.stringify(openGroups));
            } catch  {
            // ignore
            }
        }
    }["Sidebar.useEffect"], [
        openGroups
    ]);
    const routes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Sidebar.useMemo[routes]": ()=>[
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
            ]
    }["Sidebar.useMemo[routes]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-80 bg-[rgb(var(--panel))] border-r border-[rgb(var(--border))] flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-lg font-semibold text-[rgb(var(--text))]",
                        children: "Fabricator"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "px-3 pb-6 flex-1 overflow-auto",
                children: routes.map((group)=>{
                    const isOpen = !!openGroups[group.id];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenGroups((s)=>({
                                            ...s,
                                            [group.id]: !s[group.id]
                                        })),
                                className: " w-full rounded-2xl px-3 py-2 text-left text-[rgb(var(--text))] hover:bg-[rgb(var(--border))] transition ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: group.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 ml-3 border-l border-[rgb(var(--border))] pl-2",
                                children: group.items.map((item)=>{
                                    const isActive = item.id === activeRoute;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-[rgb(var(--border))]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(Sidebar, "Fx106PB0yQ9i5bNyxJhfTDsdh7c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$UiRouterProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiRouter"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Topbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Topbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$UiRouterProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/UiRouterProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Topbar() {
    _s();
    const { activeRoute } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$UiRouterProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiRouter"])();
    const title = activeRoute.split("/").map(capitalize).join(" · ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: " h-16 flex items-center justify-between px-6 border-b border-[rgb(var(--border))] bg-[rgb(var(--panel))]/70 backdrop-blur ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-[rgb(var(--muted))]",
                        children: "Workspace"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Topbar.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " h-8 w-8 rounded-xl bg-[rgb(var(--primary))] text-white flex items-center justify-center font-bold text-sm ",
                        children: "F"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Topbar.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(Topbar, "i58mqQuATgoKKqdHhxE3xCkmhiE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$UiRouterProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiRouter"]
    ];
});
_c = Topbar;
function capitalize(s) {
    return s ? s[0].toUpperCase() + s.slice(1) : s;
}
var _c;
__turbopack_context__.k.register(_c, "Topbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Footer() {
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: " h-12 flex items-center justify-center gap-4 px-6 text-xs bg-[rgb(var(--panel))] border-t border-[rgb(var(--border))] text-[rgb(var(--muted))] ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            status === "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Checking session…"
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 20,
                columnNumber: 32
            }, this),
            status !== "loading" && !session?.user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Not signed in"
            }, void 0, false, {
                fileName: "[project]/components/layout/Footer.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this),
            session?.user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(Footer, "ujwIunAD3hlHFoJLG3BNiDLiMqM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/workspace/character/db.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/workspace/character/db.ts
__turbopack_context__.s([
    "deleteAsset",
    ()=>deleteAsset,
    "deleteCharacter",
    ()=>deleteCharacter,
    "getAsset",
    ()=>getAsset,
    "getCharacter",
    ()=>getCharacter,
    "getImage",
    ()=>getImage,
    "listAssetsForCharacter",
    ()=>listAssetsForCharacter,
    "listCharacterImages",
    ()=>listCharacterImages,
    "listCharacters",
    ()=>listCharacters,
    "listImagesForCharacter",
    ()=>listImagesForCharacter,
    "upsertAsset",
    ()=>upsertAsset,
    "upsertCharacter",
    ()=>upsertCharacter,
    "upsertCharacterImage",
    ()=>upsertCharacterImage,
    "upsertImage",
    ()=>upsertImage
]);
const DB_NAME = "fabricator";
// ⬇️ IMPORTANT: bump version so onupgradeneeded runs and adds the new store(s)
const DB_VERSION = 2;
const STORE_CHARACTERS = "characters";
const STORE_IMAGES = "characterImages";
// ✅ NEW: assets store for GLBs etc
const STORE_ASSETS = "characterAssets";
function openDB() {
    return new Promise((resolve, reject)=>{
        const req = indexedDB.open(DB_NAME, DB_VERSION);
        req.onupgradeneeded = ()=>{
            const db = req.result;
            // characters store
            if (!db.objectStoreNames.contains(STORE_CHARACTERS)) {
                const store = db.createObjectStore(STORE_CHARACTERS, {
                    keyPath: "id"
                });
                store.createIndex("name", "name", {
                    unique: false
                });
                store.createIndex("updatedAt", "updatedAt", {
                    unique: false
                });
            }
            // images store (composite key)
            if (!db.objectStoreNames.contains(STORE_IMAGES)) {
                const store = db.createObjectStore(STORE_IMAGES, {
                    keyPath: [
                        "characterId",
                        "view"
                    ]
                });
                store.createIndex("characterId", "characterId", {
                    unique: false
                });
                store.createIndex("updatedAt", "updatedAt", {
                    unique: false
                });
            }
            // ✅ NEW: assets store (composite key)
            if (!db.objectStoreNames.contains(STORE_ASSETS)) {
                const store = db.createObjectStore(STORE_ASSETS, {
                    keyPath: [
                        "characterId",
                        "type"
                    ]
                });
                store.createIndex("characterId", "characterId", {
                    unique: false
                });
                store.createIndex("updatedAt", "updatedAt", {
                    unique: false
                });
            }
        };
        req.onsuccess = ()=>resolve(req.result);
        req.onerror = ()=>reject(req.error);
    });
}
function tx(db, stores, mode, fn) {
    return new Promise((resolve, reject)=>{
        const t = db.transaction(stores, mode);
        let result;
        t.oncomplete = ()=>resolve(result);
        t.onerror = ()=>reject(t.error);
        t.onabort = ()=>reject(t.error);
        fn(t).then((r)=>{
            result = r;
        }).catch((e)=>{
            // If fn throws, abort the transaction and reject.
            try {
                t.abort();
            } catch  {}
            reject(e);
        });
    });
}
function reqToPromise(req) {
    return new Promise((resolve, reject)=>{
        req.onsuccess = ()=>resolve(req.result);
        req.onerror = ()=>reject(req.error);
    });
}
async function listCharacters() {
    const db = await openDB();
    return tx(db, [
        STORE_CHARACTERS
    ], "readonly", async (t)=>{
        const store = t.objectStore(STORE_CHARACTERS);
        const all = await reqToPromise(store.getAll());
        return all.sort((a, b)=>String(b.updatedAt).localeCompare(String(a.updatedAt)));
    });
}
async function getCharacter(id) {
    const db = await openDB();
    return tx(db, [
        STORE_CHARACTERS
    ], "readonly", async (t)=>{
        const store = t.objectStore(STORE_CHARACTERS);
        const rec = await reqToPromise(store.get(id));
        return rec ?? null;
    });
}
async function upsertCharacter(rec) {
    const db = await openDB();
    return tx(db, [
        STORE_CHARACTERS
    ], "readwrite", async (t)=>{
        const store = t.objectStore(STORE_CHARACTERS);
        await reqToPromise(store.put(rec));
    });
}
async function deleteCharacter(id) {
    const db = await openDB();
    // ✅ include assets store too so deleting a character deletes its GLB(s)
    return tx(db, [
        STORE_CHARACTERS,
        STORE_IMAGES,
        STORE_ASSETS
    ], "readwrite", async (t)=>{
        // delete character
        await reqToPromise(t.objectStore(STORE_CHARACTERS).delete(id));
        // delete images by characterId
        const imgStore = t.objectStore(STORE_IMAGES);
        const imgIdx = imgStore.index("characterId");
        const imgRange = IDBKeyRange.only(id);
        await new Promise((resolve, reject)=>{
            const cur = imgIdx.openCursor(imgRange);
            cur.onerror = ()=>reject(cur.error);
            cur.onsuccess = ()=>{
                const cursor = cur.result;
                if (!cursor) return resolve();
                cursor.delete();
                cursor.continue();
            };
        });
        // ✅ delete assets by characterId
        const assetStore = t.objectStore(STORE_ASSETS);
        const assetIdx = assetStore.index("characterId");
        const assetRange = IDBKeyRange.only(id);
        await new Promise((resolve, reject)=>{
            const cur = assetIdx.openCursor(assetRange);
            cur.onerror = ()=>reject(cur.error);
            cur.onsuccess = ()=>{
                const cursor = cur.result;
                if (!cursor) return resolve();
                cursor.delete();
                cursor.continue();
            };
        });
    });
}
async function upsertImage(args) {
    const db = await openDB();
    return tx(db, [
        STORE_IMAGES
    ], "readwrite", async (t)=>{
        const store = t.objectStore(STORE_IMAGES);
        await reqToPromise(store.put({
            characterId: args.characterId,
            view: args.view,
            mime: args.mime,
            blob: args.blob,
            updatedAt: args.updatedAt
        }));
    });
}
async function upsertCharacterImage(rec) {
    return upsertImage(rec);
}
async function listCharacterImages(characterId) {
    const db = await openDB();
    return tx(db, [
        STORE_IMAGES
    ], "readonly", async (t)=>{
        const store = t.objectStore(STORE_IMAGES);
        const idx = store.index("characterId");
        const range = IDBKeyRange.only(characterId);
        const out = [];
        await new Promise((resolve, reject)=>{
            const cur = idx.openCursor(range);
            cur.onerror = ()=>reject(cur.error);
            cur.onsuccess = ()=>{
                const cursor = cur.result;
                if (!cursor) return resolve();
                out.push(cursor.value);
                cursor.continue();
            };
        });
        return out;
    });
}
async function getImage(args) {
    const db = await openDB();
    return tx(db, [
        STORE_IMAGES
    ], "readonly", async (t)=>{
        const store = t.objectStore(STORE_IMAGES);
        const rec = await reqToPromise(store.get([
            args.characterId,
            args.view
        ]));
        if (!rec) return null;
        return {
            mime: rec.mime,
            blob: rec.blob
        };
    });
}
async function listImagesForCharacter(characterId) {
    const db = await openDB();
    return tx(db, [
        STORE_IMAGES
    ], "readonly", async (t)=>{
        const store = t.objectStore(STORE_IMAGES);
        const idx = store.index("characterId");
        const range = IDBKeyRange.only(characterId);
        const out = {};
        await new Promise((resolve, reject)=>{
            const cur = idx.openCursor(range);
            cur.onerror = ()=>reject(cur.error);
            cur.onsuccess = ()=>{
                const cursor = cur.result;
                if (!cursor) return resolve();
                const v = cursor.value.view;
                out[v] = {
                    mime: cursor.value.mime,
                    blob: cursor.value.blob
                };
                cursor.continue();
            };
        });
        return out;
    });
}
async function upsertAsset(rec) {
    const db = await openDB();
    return tx(db, [
        STORE_ASSETS
    ], "readwrite", async (t)=>{
        await reqToPromise(t.objectStore(STORE_ASSETS).put(rec));
    });
}
async function getAsset(characterId, type) {
    const db = await openDB();
    return tx(db, [
        STORE_ASSETS
    ], "readonly", async (t)=>{
        const rec = await reqToPromise(t.objectStore(STORE_ASSETS).get([
            characterId,
            type
        ]));
        return rec ?? null;
    });
}
async function listAssetsForCharacter(characterId) {
    const db = await openDB();
    return tx(db, [
        STORE_ASSETS
    ], "readonly", async (t)=>{
        const store = t.objectStore(STORE_ASSETS);
        const idx = store.index("characterId");
        const range = IDBKeyRange.only(characterId);
        const out = [];
        await new Promise((resolve, reject)=>{
            const cur = idx.openCursor(range);
            cur.onerror = ()=>reject(cur.error);
            cur.onsuccess = ()=>{
                const cursor = cur.result;
                if (!cursor) return resolve();
                out.push(cursor.value);
                cursor.continue();
            };
        });
        return out;
    });
}
async function deleteAsset(characterId, type) {
    const db = await openDB();
    return tx(db, [
        STORE_ASSETS
    ], "readwrite", async (t)=>{
        await reqToPromise(t.objectStore(STORE_ASSETS).delete([
            characterId,
            type
        ]));
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/workspace/character/CharacterModelTool.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CharacterModelTool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/workspace/character/db.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function newId() {
    const uuid = globalThis.crypto?.randomUUID?.();
    return uuid ?? `id_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}
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
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("generate");
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("female");
    const [pose, setPose] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("t");
    const [photoType, setPhotoType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ultra-realistic");
    const [build, setBuild] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("athletic");
    const [age, setAge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("26-35");
    const [includeThreeQuarter, setIncludeThreeQuarter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [characterName, setCharacterName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeCharacterId, setActiveCharacterId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeCharacterName, setActiveCharacterName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [characterList, setCharacterList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("front");
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DESCRIPTION_TEMPLATE);
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1024x1024");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [imageLabel, setImageLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showPromptPreview, setShowPromptPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const EMPTY_IMAGES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CharacterModelTool.useMemo[EMPTY_IMAGES]": ()=>({
                front: null,
                side: null,
                back: null,
                front_3q_left: null,
                back_3q_left: null
            })
    }["CharacterModelTool.useMemo[EMPTY_IMAGES]"], []);
    const [imagesByView, setImagesByView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(EMPTY_IMAGES);
    const viewsToGenerate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CharacterModelTool.useMemo[viewsToGenerate]": ()=>includeThreeQuarter ? [
                ...BASE_VIEWS,
                ...EXTRA_VIEWS
            ] : [
                ...BASE_VIEWS
            ]
    }["CharacterModelTool.useMemo[viewsToGenerate]"], [
        includeThreeQuarter
    ]);
    const currentImageSrc = imagesByView[view];
    const hasAnyImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CharacterModelTool.useMemo[hasAnyImage]": ()=>ALL_VIEWS.some({
                "CharacterModelTool.useMemo[hasAnyImage]": (v)=>!!imagesByView[v]
            }["CharacterModelTool.useMemo[hasAnyImage]"])
    }["CharacterModelTool.useMemo[hasAnyImage]"], [
        imagesByView
    ]);
    const canGenerate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CharacterModelTool.useMemo[canGenerate]": ()=>{
            if (mode !== "generate") return false;
            return prompt.trim().length >= 10;
        }
    }["CharacterModelTool.useMemo[canGenerate]"], [
        mode,
        prompt
    ]);
    // revoke blob URLs using a provided map (avoids stale state bugs)
    function revokeAllBlobsFrom(map) {
        for (const v of ALL_VIEWS)revokeIfBlob(map[v]);
    }
    // Load saved character list once on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CharacterModelTool.useEffect": ()=>{
            let cancelled = false;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listCharacters"])().then({
                "CharacterModelTool.useEffect": (all)=>{
                    if (cancelled) return;
                    setCharacterList(all.map({
                        "CharacterModelTool.useEffect": (c)=>({
                                id: c.id,
                                name: c.name
                            })
                    }["CharacterModelTool.useEffect"]));
                }
            }["CharacterModelTool.useEffect"]).catch({
                "CharacterModelTool.useEffect": ()=>{}
            }["CharacterModelTool.useEffect"]);
            return ({
                "CharacterModelTool.useEffect": ()=>{
                    cancelled = true;
                }
            })["CharacterModelTool.useEffect"];
        }
    }["CharacterModelTool.useEffect"], []);
    async function refreshCharacterList() {
        const all = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listCharacters"])();
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
            "Wearing standard modelling reference attire",
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
    const finalPrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CharacterModelTool.useMemo[finalPrompt]": ()=>buildPromptForView(view)
    }["CharacterModelTool.useMemo[finalPrompt]"], [
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
        // revoke current blob urls safely using functional update
        setImagesByView((prev)=>{
            revokeAllBlobsFrom(prev); // your original behavior: revoke everything before replacing
            const url = URL.createObjectURL(file);
            return {
                ...prev,
                [view]: url
            };
        });
        setImageLabel(`Loaded ${VIEW_LABEL[view]}: ${file.name}`);
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
        const isRename = !!activeCharacterId && activeCharacterName && activeCharacterName !== name;
        const id = !activeCharacterId || isRename ? newId() : activeCharacterId;
        const existing = activeCharacterId ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCharacter"])(activeCharacterId) : null;
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertCharacter"])(rec);
        // Save images as blobs
        for (const v of ALL_VIEWS){
            const src = imagesByView[v];
            if (!src) continue;
            const { blob, mime } = src.startsWith("data:") ? dataUrlToBlob(src) : await urlToBlob(src);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertCharacterImage"])({
                characterId: id,
                view: v,
                mime,
                blob,
                updatedAt: now
            });
        }
        setActiveCharacterId(id);
        setActiveCharacterName(name);
        setImageLabel(`Saved: ${name}`);
        await refreshCharacterList();
    }
    async function handleLoadProject(id) {
        setErr(null);
        const rec = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCharacter"])(id);
        if (!rec) {
            setErr("Could not load that character (not found).");
            return;
        }
        // revoke current blob URLs first
        setImagesByView((prev)=>{
            revokeAllBlobsFrom(prev);
            return prev;
        });
        setActiveCharacterId(rec.id);
        setCharacterName(rec.name);
        setActiveCharacterName(rec.name);
        setGender(rec.gender);
        setPose(rec.pose);
        setPhotoType(rec.photoType);
        setBuild(rec.build);
        setAge(rec.age);
        setSize(rec.size);
        setPrompt(rec.prompt);
        setIncludeThreeQuarter(!!rec.includeThreeQuarter);
        setView("front");
        const imgs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listCharacterImages"])(rec.id);
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteCharacter"])(activeCharacterId);
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
        // revoke blob urls & clear existing images safely
        setImagesByView((prev)=>{
            revokeAllBlobsFrom(prev);
            return {
                ...EMPTY_IMAGES
            };
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
        // revoke blobs safely
        setImagesByView((prev)=>{
            revokeAllBlobsFrom(prev);
            return {
                ...EMPTY_IMAGES
            };
        });
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
        setImageLabel(null);
        setShowPromptPreview(true);
        setCharacterName("");
        setActiveCharacterId(null);
        setActiveCharacterName("");
        if (fileInputRef.current) fileInputRef.current.value = "";
    }
    function clearImage() {
        setErr(null);
        setImageLabel(null);
        setImagesByView((prev)=>{
            revokeAllBlobsFrom(prev);
            return {
                ...EMPTY_IMAGES
            };
        });
        setView("front");
        setCharacterName("");
        setActiveCharacterId(null);
        setActiveCharacterName("");
    }
    function downloadImage() {
        const srcToDownload = currentImageSrc;
        if (!srcToDownload) return;
        const fileBase = `${view}-${new Date().toISOString().replace(/[:.]/g, "-")}`;
        const a = document.createElement("a");
        if (srcToDownload.startsWith("blob:") || srcToDownload.startsWith("data:")) {
            a.href = srcToDownload;
            if (srcToDownload.startsWith("data:")) {
                const mimeMatch = srcToDownload.match(/^data:([^;]+);base64,/);
                const mime = mimeMatch?.[1] ?? "image/png";
                const ext = mime.includes("png") ? "png" : mime.includes("jpeg") ? "jpg" : "png";
                a.download = `${fileBase}.${ext}`;
            } else {
                a.download = `${fileBase}.png`;
            }
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] text-[rgb(var(--text))]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3 border-b border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold",
                                children: "Character Model Tool"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 581,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                value: mode,
                                onChange: (e)=>{
                                    setErr(null);
                                    setMode(e.target.value);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "load",
                                        children: "Load image"
                                    }, void 0, false, {
                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                        lineNumber: 591,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "generate",
                                        children: "Generate image"
                                    }, void 0, false, {
                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                        lineNumber: 592,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 583,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                        lineNumber: 580,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                value: activeCharacterId ?? "",
                                onChange: (e)=>{
                                    const id = e.target.value;
                                    if (id) void handleLoadProject(id);
                                },
                                title: "Load a saved character",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        disabled: true,
                                        children: "Load character…"
                                    }, void 0, false, {
                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                        lineNumber: 606,
                                        columnNumber: 13
                                    }, this),
                                    characterList.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c.id,
                                            children: c.name
                                        }, c.id, false, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 610,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 597,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "w-44 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                placeholder: "Character name",
                                value: characterName,
                                onChange: (e)=>setCharacterName(e.target.value),
                                title: "Name used when saving"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 616,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50",
                                onClick: ()=>void handleSaveProject(),
                                type: "button",
                                disabled: busy,
                                title: "Save character settings + images",
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 624,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                onClick: handleNewProject,
                                type: "button",
                                title: "Start a new character",
                                children: "New"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 634,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50",
                                onClick: ()=>void handleDeleteProject(),
                                type: "button",
                                disabled: !activeCharacterId || busy,
                                title: activeCharacterId ? "Delete saved character" : "No saved character selected",
                                children: "Delete"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 643,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                onClick: handleReset,
                                type: "button",
                                title: "Reset workspace",
                                children: "⟳ Reset"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 653,
                                columnNumber: 11
                            }, this),
                            hasAnyImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50",
                                        onClick: downloadImage,
                                        type: "button",
                                        disabled: !currentImageSrc,
                                        title: currentImageSrc ? `Download (${VIEW_LABEL[view]})` : "Select a view first",
                                        children: "Download"
                                    }, void 0, false, {
                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                        lineNumber: 664,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                        onClick: clearImage,
                                        type: "button",
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                        lineNumber: 674,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                        lineNumber: 596,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                lineNumber: 579,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid h-[calc(100%-52px)] grid-cols-1 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-[rgb(var(--border))] p-4 lg:border-b-0 lg:border-r",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                mode === "generate" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-semibold",
                                    children: "Character settings"
                                }, void 0, false, {
                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                    lineNumber: 691,
                                    columnNumber: 37
                                }, this),
                                mode === "generate" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-flex items-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setGender("female"),
                                                            className: [
                                                                "rounded-lg px-3 py-1.5 text-sm transition",
                                                                gender === "female" ? "bg-[rgb(var(--primary))] text-white shadow-sm" : "bg-transparent text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                                                            ].join(" "),
                                                            children: "Female"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 698,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setGender("male"),
                                                            className: [
                                                                "rounded-lg px-3 py-1.5 text-sm transition",
                                                                gender === "male" ? "bg-[rgb(var(--primary))] text-white shadow-sm" : "bg-transparent text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                                                            ].join(" "),
                                                            children: "Male"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 710,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 697,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-[rgb(var(--muted))]",
                                                            children: "Pose"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 726,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "inline-flex items-center rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setPose("t"),
                                                                    className: [
                                                                        "rounded-lg px-3 py-1.5 text-sm transition",
                                                                        pose === "t" ? "bg-[rgb(var(--primary))] text-white shadow-sm" : "bg-transparent text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                                                                    ].join(" "),
                                                                    children: "T"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 728,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setPose("a"),
                                                                    className: [
                                                                        "rounded-lg px-3 py-1.5 text-sm transition",
                                                                        pose === "a" ? "bg-[rgb(var(--primary))] text-white shadow-sm" : "bg-transparent text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                                                                    ].join(" "),
                                                                    children: "A"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 740,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 727,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 725,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-[rgb(var(--muted))]",
                                                            children: "Photo type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 757,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                                            value: photoType,
                                                            onChange: (e)=>setPhotoType(e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "ultra-realistic",
                                                                    children: "Ultra-realistic"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 763,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "photorealistic",
                                                                    children: "Photorealistic"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 764,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "realistic",
                                                                    children: "Realistic"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 765,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "cinematic",
                                                                    children: "Cinematic"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 766,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "studio",
                                                                    children: "Studio"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 767,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "anime",
                                                                    children: "Anime"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 768,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "3d-render",
                                                                    children: "3D render"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 769,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "pixar-style",
                                                                    children: "Pixar-style"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 770,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "illustration",
                                                                    children: "Illustration"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 771,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "comic",
                                                                    children: "Comic"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 772,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "cartoon",
                                                                    children: "Cartoon"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 773,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 758,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 756,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 695,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "mb-1 block text-xs text-[rgb(var(--muted))]",
                                                            children: "Build"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 781,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                                            value: build,
                                                            onChange: (e)=>setBuild(e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "slim",
                                                                    children: "Slim"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 787,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "athletic",
                                                                    children: "Athletic"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 788,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "average",
                                                                    children: "Average"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 789,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "curvy",
                                                                    children: "Curvy"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 790,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "muscular",
                                                                    children: "Muscular"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 791,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 782,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 780,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "mb-1 block text-xs text-[rgb(var(--muted))]",
                                                            children: "Character age"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 796,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                                            value: age,
                                                            onChange: (e)=>setAge(e.target.value),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "18-25",
                                                                    children: "Adult (18–25)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 802,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "26-35",
                                                                    children: "Adult (26–35)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 803,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "36-50",
                                                                    children: "Adult (36–50)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 804,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "50+",
                                                                    children: "Adult (50+)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 805,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 797,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 795,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 779,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center gap-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: includeThreeQuarter,
                                                    onChange: (e)=>setIncludeThreeQuarter(e.target.checked)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 811,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-[rgb(var(--muted))]",
                                                    children: "Include ¾ views (higher quality)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 816,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 810,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-[rgb(var(--muted))]",
                                                    children: "Preview view"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 821,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                                    value: view,
                                                    onChange: (e)=>setView(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "front",
                                                            children: "Front"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 827,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "side",
                                                            children: "Side"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 828,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "back",
                                                            children: "Back"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 829,
                                                            columnNumber: 21
                                                        }, this),
                                                        includeThreeQuarter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "front_3q_left",
                                                                    children: "¾ Front (L)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 832,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "back_3q_left",
                                                                    children: "¾ Back (L)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 833,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 822,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-[rgb(var(--muted))]",
                                                    children: "(Generate creates all selected views)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 837,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 820,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true),
                                mode === "load" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-medium text-[rgb(var(--muted))]",
                                                    children: "Assign image to view"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 846,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm",
                                                    value: view,
                                                    onChange: (e)=>setView(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "front",
                                                            children: "Front"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 855,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "side",
                                                            children: "Side"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 856,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "back",
                                                            children: "Back"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 857,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "front_3q_left",
                                                            children: "¾ Front (Left)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 858,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "back_3q_left",
                                                            children: "¾ Back (Left)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 859,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 850,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[11px] text-[rgb(var(--muted))]",
                                                    children: "The next image you load will be saved as this view"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 862,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 845,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold",
                                            children: "Load reference image"
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 867,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-[rgb(var(--muted))]",
                                            children: "Drag & drop a clear, full-body reference image."
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 869,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: fileInputRef,
                                            type: "file",
                                            accept: "image/*",
                                            className: "hidden",
                                            onChange: onFileSelected
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 873,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onDrop: onDrop,
                                            onDragOver: onDragOver,
                                            className: "rounded-2xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-6 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-medium",
                                                    children: [
                                                        "Drag ",
                                                        VIEW_LABEL[view],
                                                        " image here"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 886,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-xs text-[rgb(var(--muted))]",
                                                    children: "PNG / JPG / WebP • full-body • minimal distortion"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 888,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "mt-4 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-4 py-2 text-sm",
                                                    onClick: onPickFileClick,
                                                    children: "Choose image…"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 892,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 881,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold",
                                            children: "Generate reference image"
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 903,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs text-[rgb(var(--muted))]",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 905,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            className: "w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-3 text-sm",
                                            rows: 9,
                                            value: prompt,
                                            onChange: (e)=>{
                                                const v = e.target.value;
                                                setPrompt(v.trim() === "" ? DESCRIPTION_TEMPLATE : v);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 907,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-2 flex items-center justify-between gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-semibold",
                                                            children: [
                                                                "Prompt Preview (",
                                                                VIEW_LABEL[view],
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 919,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-1.5 text-xs text-[rgb(var(--text))]",
                                                                    onClick: ()=>setShowPromptPreview((v)=>!v),
                                                                    children: showPromptPreview ? "Hide" : "Show"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 922,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-1.5 text-xs text-[rgb(var(--text))]",
                                                                    onClick: copyPromptPreview,
                                                                    children: "Copy"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                                    lineNumber: 930,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 921,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 918,
                                                    columnNumber: 19
                                                }, this),
                                                showPromptPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    readOnly: true,
                                                    value: finalPrompt,
                                                    rows: 6,
                                                    className: "w-full resize-none rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-3 text-xs leading-relaxed text-[rgb(var(--text))]"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 941,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-[rgb(var(--muted))]",
                                                    children: "Preview hidden."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 948,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 917,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs text-[rgb(var(--muted))]",
                                                    children: "Size"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 953,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                                                    value: size,
                                                    onChange: (e)=>setSize(e.target.value),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "1024x1024",
                                                            children: "1024 × 1024 (Square)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 959,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "1024x1536",
                                                            children: "1024 × 1536 (Portrait)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 960,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "1536x1024",
                                                            children: "1536 × 1024 (Landscape)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 961,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "auto",
                                                            children: "Auto"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 962,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 954,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 952,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50",
                                            disabled: !canGenerate || busy,
                                            onClick: ()=>void generateImage(),
                                            type: "button",
                                            children: busy ? "Generating…" : `Generate (${viewsToGenerate.length} views)`
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 966,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true),
                                err && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-700 dark:text-red-200",
                                    children: err
                                }, void 0, false, {
                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                    lineNumber: 978,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                            lineNumber: 690,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                        lineNumber: 689,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-semibold",
                                        children: "Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                        lineNumber: 988,
                                        columnNumber: 13
                                    }, this),
                                    imageLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-[rgb(var(--muted))]",
                                        children: imageLabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                        lineNumber: 989,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 987,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-[calc(100%-28px)] flex-col rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-3",
                                children: currentImageSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: currentImageSrc,
                                            alt: `Character reference preview (${VIEW_LABEL[view]})`,
                                            className: "w-full flex-1 rounded-xl object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 996,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex flex-wrap items-center justify-center gap-3",
                                            children: (includeThreeQuarter ? ALL_VIEWS : BASE_VIEWS).map((v)=>{
                                                const src = imagesByView[v];
                                                const isActive = v === view;
                                                const disabled = !src;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>src && setView(v),
                                                    className: [
                                                        "rounded-xl border p-1",
                                                        isActive ? "border-[rgb(var(--primary))]" : "border-[rgb(var(--border))] opacity-80 hover:opacity-100",
                                                        disabled ? "cursor-not-allowed opacity-30" : ""
                                                    ].join(" "),
                                                    title: src ? `View: ${VIEW_LABEL[v]}` : `Not available: ${VIEW_LABEL[v]}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-1 pb-1 text-center text-[10px] text-[rgb(var(--muted))]",
                                                            children: VIEW_LABEL[v]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 1022,
                                                            columnNumber: 25
                                                        }, this),
                                                        src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: src,
                                                            alt: `${v} thumbnail`,
                                                            className: "h-16 w-16 rounded-lg object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 1028,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-16 w-16 rounded-lg bg-[rgb(var(--panel))]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                            lineNumber: 1030,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, v, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                                    lineNumber: 1009,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                            lineNumber: 1002,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-1 items-center justify-center text-sm text-[rgb(var(--muted))]",
                                    children: "No image yet — load a reference or generate one."
                                }, void 0, false, {
                                    fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                    lineNumber: 1038,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                                lineNumber: 992,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                        lineNumber: 986,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
                lineNumber: 687,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/workspace/character/CharacterModelTool.tsx",
        lineNumber: 577,
        columnNumber: 5
    }, this);
}
_s(CharacterModelTool, "b9N/q467eQMNWwYLP41+QCBeHDA=");
_c = CharacterModelTool;
var _c;
__turbopack_context__.k.register(_c, "CharacterModelTool");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/workspace/character/AssignSkeletonTool.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AssignSkeletonTool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/project/ProjectProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AssignSkeletonTool() {
    _s();
    const { state, setRigId, setSkeletonAssigned } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProject"])();
    const characterId = state.character.characterId;
    const rigId = state.character.rigId;
    const assigned = state.character.skeletonAssigned;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-6 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl font-semibold text-[rgb(var(--text))]",
                        children: "Character · Assign Skeleton"
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-[rgb(var(--muted))]",
                        children: "Active character"
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 text-sm font-medium text-[rgb(var(--text))]",
                        children: characterId ?? "None selected"
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    !characterId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-xs text-[rgb(var(--muted))]",
                        children: [
                            "Go to ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-[rgb(var(--text))]",
                        children: "Rig type"
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                selected: rigId === "humanoid",
                                onClick: ()=>setRigId("humanoid"),
                                disabled: !characterId,
                                children: "Humanoid"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                selected: rigId === "quadruped",
                                onClick: ()=>setRigId("quadruped"),
                                disabled: !characterId,
                                children: "Quadruped"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    assigned && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: " rounded-full px-3 py-1 text-xs font-medium border border-[rgba(var(--primary),0.35)] bg-[rgba(var(--primary),0.12)] text-[rgb(var(--text))] ",
                        children: "✅ Assigned"
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/AssignSkeletonTool.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    rigId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-[rgb(var(--muted))]",
                        children: [
                            "Rig: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(AssignSkeletonTool, "FsSQeOsmHswKYRhO6e6mNOU40Rc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$project$2f$ProjectProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProject"]
    ];
});
_c = AssignSkeletonTool;
function Pill({ selected, disabled, onClick, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_c1 = Pill;
var _c, _c1;
__turbopack_context__.k.register(_c, "AssignSkeletonTool");
__turbopack_context__.k.register(_c1, "Pill");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/workspace/character/CharacterSelectionStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTIVE_CHARACTER_KEY",
    ()=>ACTIVE_CHARACTER_KEY,
    "getActiveCharacterId",
    ()=>getActiveCharacterId,
    "setActiveCharacterId",
    ()=>setActiveCharacterId
]);
const ACTIVE_CHARACTER_KEY = "fabricator.activeCharacterId";
function getActiveCharacterId() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return window.localStorage.getItem(ACTIVE_CHARACTER_KEY);
}
function setActiveCharacterId(id) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!id) window.localStorage.removeItem(ACTIVE_CHARACTER_KEY);
    else window.localStorage.setItem(ACTIVE_CHARACTER_KEY, id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/workspace/character/CharacterTopBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CharacterTopBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$CharacterSelectionStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/workspace/character/CharacterSelectionStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CharacterTopBar({ title, loadCharacters, onCharacterSelected, rightSlot }) {
    _s();
    const [characterList, setCharacterList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CharacterTopBar.useEffect": ()=>{
            let cancelled = false;
            loadCharacters().then({
                "CharacterTopBar.useEffect": (list)=>{
                    if (cancelled) return;
                    setCharacterList(list);
                    // restore last selection if present
                    const saved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$CharacterSelectionStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveCharacterId"])();
                    if (saved && list.some({
                        "CharacterTopBar.useEffect": (c)=>c.id === saved
                    }["CharacterTopBar.useEffect"])) {
                        setActiveId(saved);
                        onCharacterSelected?.(saved);
                    }
                }
            }["CharacterTopBar.useEffect"]).catch({
                "CharacterTopBar.useEffect": ()=>{}
            }["CharacterTopBar.useEffect"]);
            return ({
                "CharacterTopBar.useEffect": ()=>{
                    cancelled = true;
                }
            })["CharacterTopBar.useEffect"];
        }
    }["CharacterTopBar.useEffect"], [
        loadCharacters,
        onCharacterSelected
    ]);
    function handleSelect(id) {
        setActiveId(id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$CharacterSelectionStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setActiveCharacterId"])(id || null);
        onCharacterSelected?.(id || null);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between gap-3 border-b border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-4 py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-semibold",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/CharacterTopBar.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))]",
                        value: activeId,
                        onChange: (e)=>handleSelect(e.target.value),
                        title: "Select a saved character",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Select character…"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterTopBar.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            characterList.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: c.id,
                                    children: c.name
                                }, c.id, false, {
                                    fileName: "[project]/components/workspace/character/CharacterTopBar.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/workspace/character/CharacterTopBar.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace/character/CharacterTopBar.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: rightSlot
            }, void 0, false, {
                fileName: "[project]/components/workspace/character/CharacterTopBar.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/workspace/character/CharacterTopBar.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(CharacterTopBar, "dW1uxGFL4qwYHXGGGNHFdQh/b60=");
_c = CharacterTopBar;
var _c;
__turbopack_context__.k.register(_c, "CharacterTopBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/workspace/character/CharacterMeshView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CharacterMeshView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$CharacterTopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/workspace/character/CharacterTopBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/workspace/character/db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/controls/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/examples/jsm/loaders/GLTFLoader.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const BASE_MESH = {
    a: {
        filename: "Human-dev-baseA-V1.0.glb",
        label: "A-pose (canonical)"
    },
    t: {
        filename: "Human-dev-baseT-V1.0.glb",
        label: "T-pose (reference)"
    }
};
const DEFAULT_PARAMS = {
    height: 0,
    shoulders: 0,
    chest: 0,
    waist: 0,
    hips: 0,
    legs: 0,
    arms: 0,
    head: 0,
    bustSize: 0,
    bustProjection: 0
};
function jsonToBlob(obj) {
    return new Blob([
        JSON.stringify(obj, null, 2)
    ], {
        type: "application/json"
    });
}
async function blobToJson(blob) {
    const text = await blob.text();
    try {
        return JSON.parse(text);
    } catch  {
        throw new Error("Invalid JSON payload (could not parse saved asset).");
    }
}
async function fetchBaseMesh(pose) {
    const filename = BASE_MESH[pose].filename;
    const res = await fetch(`/assets/base/${encodeURIComponent(filename)}`, {
        method: "GET",
        cache: "no-store"
    });
    if (!res.ok) {
        const msg = await res.text().catch(()=>"");
        throw new Error(`Failed to load base mesh (${pose}): HTTP ${res.status} ${msg}`);
    }
    return await res.blob();
}
function isValidDeformParams(x) {
    if (!x || typeof x !== "object") return false;
    return true;
}
function isValidSculptDelta(x) {
    if (!x || typeof x !== "object") return false;
    const any = x;
    if (any.version !== 1) return false;
    if (!any.deltas || typeof any.deltas !== "object") return false;
    return true;
}
function disposeObject3D(root) {
    root.traverse((obj)=>{
        const mesh = obj;
        if (mesh.geometry) mesh.geometry.dispose?.();
        const mat = mesh.material;
        if (!mat) return;
        const disposeMat = (m)=>{
            const anyM = m;
            const texKeys = [
                "map",
                "normalMap",
                "roughnessMap",
                "metalnessMap",
                "aoMap",
                "emissiveMap",
                "alphaMap",
                "bumpMap",
                "displacementMap",
                "envMap"
            ];
            for (const k of texKeys){
                const t = anyM[k];
                t?.dispose?.();
            }
            m.dispose?.();
        };
        if (Array.isArray(mat)) mat.forEach(disposeMat);
        else disposeMat(mat);
    });
}
function centerModelOnGround(root) {
    root.updateMatrixWorld(true);
    // center X/Z
    const box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(root);
    const center = box.getCenter(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    root.position.x -= center.x;
    root.position.z -= center.z;
    root.updateMatrixWorld(true);
    // ground Y
    const box2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(root);
    root.position.y -= box2.min.y;
    root.updateMatrixWorld(true);
}
/**
 * Aspect-aware framing that keeps feet visible.
 * - Distance uses both vertical + horizontal FOV.
 * - Target is around the true center (not too high).
 */ function fitCameraToObject(camera, controls, object) {
    object.updateMatrixWorld(true);
    const box = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box3"]().setFromObject(object);
    const size = box.getSize(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    const center = box.getCenter(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]());
    const height = size.y;
    const width = size.x;
    const depth = size.z;
    const vfov = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].degToRad(camera.fov);
    const aspect = Math.max(1e-6, camera.aspect || 1);
    const hfov = 2 * Math.atan(Math.tan(vfov / 2) * aspect);
    const maxH = Math.max(width, depth);
    const distV = height / 2 / Math.tan(vfov / 2);
    const distH = maxH / 2 / Math.tan(hfov / 2);
    const distance = Math.max(distV, distH) * 1.25;
    // target: real center, slightly *below* center so feet stay in view
    const target = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](center.x, box.min.y + height * 0.48, center.z);
    camera.position.set(target.x, target.y + height * 0.06, target.z + distance);
    camera.near = Math.max(0.01, distance / 100);
    camera.far = Math.max(50, distance * 50);
    camera.updateProjectionMatrix();
    controls.target.copy(target);
    controls.minDistance = distance * 0.25;
    controls.maxDistance = distance * 3.0;
    controls.update();
}
function MeshPreview({ blob, filename, params }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bodyMeshUuidRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cameraRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const controlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resizeObsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const userMovedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const paramsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(params);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MeshPreview.useEffect": ()=>{
            paramsRef.current = params;
        }
    }["MeshPreview.useEffect"], [
        params
    ]);
    const [previewErr, setPreviewErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // -----------------------------
    // Body mesh filtering
    // -----------------------------
    function isBodyMeshName(name) {
        const n = (name || "").toLowerCase();
        const deny = [
            "eye",
            "eyeball",
            "cornea",
            "iris",
            "pupil",
            "teeth",
            "tooth",
            "tongue",
            "gum",
            "hair",
            "brow",
            "eyebrow",
            "lash",
            "eyelash",
            "beard",
            "mustache",
            "helmet",
            "hat",
            "cap",
            "glasses",
            "accessory",
            "shoe",
            "boot",
            "sock",
            "cloth",
            "clothes",
            "shirt",
            "pants",
            "trouser",
            "skirt",
            "dress",
            "bra",
            "underwear",
            "bikini",
            "jacket",
            "coat"
        ];
        if (deny.some((k)=>n.includes(k))) return false;
        const allow = [
            "body",
            "skin",
            "base",
            "character",
            "human",
            "geo",
            "geometry",
            "torso"
        ];
        return allow.some((k)=>n.includes(k));
    }
    function meshLooksLikeBody(mesh) {
        const geom = mesh.geometry;
        const pos = geom?.getAttribute?.("position");
        const vCount = pos?.count ?? 0;
        return vCount > 10_000;
    }
    // -----------------------------
    // Deformation helpers
    // -----------------------------
    function clamp01(x) {
        return Math.max(0, Math.min(1, x));
    }
    function smoothstep(edge0, edge1, x) {
        const t = clamp01((x - edge0) / (edge1 - edge0));
        return t * t * (3 - 2 * t);
    }
    function bandWeight(yN, a, b, feather = 0.08) {
        const in1 = smoothstep(a - feather, a + feather, yN);
        const out1 = 1 - smoothstep(b - feather, b + feather, yN);
        return clamp01(in1 * out1);
    }
    function ensureBasePositions(mesh) {
        const geom = mesh.geometry;
        const pos = geom.getAttribute("position");
        if (!pos) return;
        const ud = mesh.userData;
        if (!ud.__basePos) {
            ud.__basePos = new Float32Array(pos.array);
        }
    }
    function setVertexHeatmap(mesh, weight01) {
        const geom = mesh.geometry;
        const pos = geom.getAttribute("position");
        if (!pos) return;
        let color = geom.getAttribute("color");
        if (!color || color.count !== pos.count) {
            const colors = new Float32Array(pos.count * 3);
            color = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](colors, 3);
            geom.setAttribute("color", color);
        }
        const c = color.array;
        for(let i = 0; i < weight01.length; i++){
            const w = Math.max(0, Math.min(1, weight01[i]));
            c[i * 3 + 0] = w; // R
            c[i * 3 + 1] = 0; // G
            c[i * 3 + 2] = 1 - w; // B
        }
        color.needsUpdate = true;
        const mat = mesh.material;
        if (mat && "vertexColors" in mat) mat.vertexColors = true;
    }
    function detectFrontSign(mesh, bbox, base) {
        const minY = bbox.min.y;
        const maxY = bbox.max.y;
        const h = Math.max(1e-6, maxY - minY);
        const cx = (bbox.min.x + bbox.max.x) * 0.5;
        const xSpan = Math.max(1e-6, (bbox.max.x - bbox.min.x) * 0.5);
        let zMax = -Infinity;
        let zMin = Infinity;
        for(let i = 0; i < base.length; i += 3){
            const bx = base[i + 0];
            const by = base[i + 1];
            const bz = base[i + 2];
            const yN = (by - minY) / h;
            if (yN < 0.88) continue;
            if (Math.abs(bx - cx) > xSpan * 0.10) continue;
            if (bz > zMax) zMax = bz;
            if (bz < zMin) zMin = bz;
        }
        const cz = (bbox.min.z + bbox.max.z) * 0.5;
        const frontPlus = zMax - cz;
        const frontMinus = cz - zMin;
        return frontPlus >= frontMinus ? +1 : -1;
    }
    function ellipsoidWeight(dx, dy, dz, rx, ry, rz) {
        const nx = dx / Math.max(1e-6, rx);
        const ny = dy / Math.max(1e-6, ry);
        const nz = dz / Math.max(1e-6, rz);
        const d = Math.sqrt(nx * nx + ny * ny + nz * nz);
        const t = 1 - Math.min(1, Math.max(0, d));
        return t * t * (3 - 2 * t);
    }
    function computeBustAnchors(mesh, bbox, base) {
        const minY = bbox.min.y;
        const maxY = bbox.max.y;
        const h = Math.max(1e-6, maxY - minY);
        const cx = (bbox.min.x + bbox.max.x) * 0.5;
        const cz = (bbox.min.z + bbox.max.z) * 0.5;
        const xSpan = Math.max(1e-6, (bbox.max.x - bbox.min.x) * 0.5);
        const zSpan = Math.max(1e-6, (bbox.max.z - bbox.min.z) * 0.5);
        const frontSign = detectFrontSign(mesh, bbox, base);
        const candL = [];
        const candR = [];
        for(let i = 0; i < base.length; i += 3){
            const bx = base[i + 0];
            const by = base[i + 1];
            const bz = base[i + 2];
            const yN = (by - minY) / h;
            if (yN < 0.60 || yN > 0.78) continue;
            const torsoMask = 1 - smoothstep(xSpan * 0.28, xSpan * 0.42, Math.abs(bx - cx));
            if (torsoMask <= 0.2) continue;
            const isFront = frontSign * (bz - cz) > 0;
            if (!isFront) continue;
            if (Math.abs(bx - cx) < xSpan * 0.06) continue;
            if (bx < cx) candL.push(i);
            else candR.push(i);
        }
        if (candL.length < 50 || candR.length < 50) return null;
        function pickTopForward(indices) {
            const scored = indices.map((idx)=>({
                    idx,
                    f: frontSign * (base[idx + 2] - cz)
                })).sort((a, b)=>b.f - a.f);
            const take = Math.max(30, Math.floor(scored.length * 0.10));
            return scored.slice(0, take).map((s)=>s.idx);
        }
        const topL = pickTopForward(candL);
        const topR = pickTopForward(candR);
        function meanOf(indices) {
            let sx = 0, sy = 0, sz = 0;
            for (const idx of indices){
                sx += base[idx + 0];
                sy += base[idx + 1];
                sz += base[idx + 2];
            }
            const n = Math.max(1, indices.length);
            return {
                x: sx / n,
                y: sy / n,
                z: sz / n
            };
        }
        const left = meanOf(topL);
        const right = meanOf(topR);
        return {
            left,
            right,
            rx: xSpan * 0.18,
            ry: h * 0.09,
            rz: zSpan * 0.14,
            frontSign
        };
    }
    function pickBodyMesh(root) {
        let best = null;
        let bestScore = -Infinity;
        root.traverse((obj)=>{
            const anyObj = obj;
            if (!anyObj?.isMesh) return;
            const m = obj;
            const nm = (m.name || "").trim();
            const namedBody = nm ? isBodyMeshName(nm) : false;
            const geom = m.geometry;
            const pos = geom?.getAttribute?.("position");
            const vCount = pos?.count ?? 0;
            if (vCount < 2000) return;
            const score = (namedBody ? 1_000_000 : 0) + (meshLooksLikeBody(m) ? 100_000 : 0) + vCount;
            if (score > bestScore) {
                bestScore = score;
                best = m;
            }
        });
        bodyMeshUuidRef.current = best?.uuid ?? null;
        if (best) {
            const m = best.material;
            if (m) m.vertexColors = true;
        }
        console.log("[BODY PICK]", best?.name ?? "(none)", {
            score: bestScore,
            uuid: best?.uuid ?? null
        });
    }
    function applyDeformToRoot(root, p) {
        const bodyUuid = bodyMeshUuidRef.current;
        if (!bodyUuid) return;
        root.traverse((obj)=>{
            const anyObj = obj;
            if (!anyObj?.isMesh) return;
            const mesh = obj;
            if (mesh.uuid !== bodyUuid) return;
            const geom = mesh.geometry;
            const pos = geom.getAttribute("position");
            if (!pos) return;
            ensureBasePositions(mesh);
            const ud = mesh.userData;
            const base = ud.__basePos;
            if (!base) return;
            geom.computeBoundingBox();
            const bbox = geom.boundingBox;
            if (!bbox) return;
            // cache bust anchors once per mesh (stable)
            if (ud.__bustAnchors === undefined) {
                ud.__bustAnchors = computeBustAnchors(mesh, bbox, base);
            }
            const anchors = ud.__bustAnchors;
            const minY = bbox.min.y;
            const maxY = bbox.max.y;
            const h = Math.max(1e-6, maxY - minY);
            const heightScale = 1 + p.height * 0.10;
            const shoulderW = 1 + p.shoulders * 0.18;
            const chestW = 1 + p.chest * 0.16;
            const waistW = 1 + p.waist * 0.18;
            const hipsW = 1 + p.hips * 0.18;
            const legsW = 1 + p.legs * 0.14;
            const armsW = 1 + p.arms * 0.14;
            const headW = 1 + p.head * 0.10;
            const bustW = 1 + p.bustSize * 0.22;
            const bustForward = p.bustProjection * 0.18;
            const cx = (bbox.min.x + bbox.max.x) * 0.5;
            const cz = (bbox.min.z + bbox.max.z) * 0.5;
            const cy = minY + h * 0.5;
            const xSpan = Math.max(1e-6, (bbox.max.x - bbox.min.x) * 0.5);
            const arr = pos.array;
            const weight = new Float32Array(arr.length / 3); // heatmap weights per vertex
            for(let i = 0; i < arr.length; i += 3){
                const vi = i / 3;
                const bx = base[i + 0];
                const by = base[i + 1];
                const bz = base[i + 2];
                const yN = (by - minY) / h;
                const wShoulder = bandWeight(yN, 0.72, 0.84);
                const wChest = bandWeight(yN, 0.60, 0.74);
                const wWaist = bandWeight(yN, 0.48, 0.62);
                const wHips = bandWeight(yN, 0.38, 0.52);
                const wLegs = bandWeight(yN, 0.00, 0.42);
                const wHead = bandWeight(yN, 0.86, 1.00);
                const xFromCenter = Math.abs(bx - cx);
                const limbMask = smoothstep(0.45 * xSpan, 0.80 * xSpan, xFromCenter);
                const bandWidth = 1 + (shoulderW - 1) * wShoulder + (chestW - 1) * wChest + (waistW - 1) * wWaist + (hipsW - 1) * wHips + (legsW - 1) * wLegs + (headW - 1) * wHead + (armsW - 1) * wShoulder * limbMask;
                // base shaping
                let x = cx + (bx - cx) * bandWidth;
                let y = cy + (by - cy) * heightScale;
                let z = cz + (bz - cz) * bandWidth;
                // --- Bust shaping using auto-anchors ---
                let wBustFinal = 0;
                if (anchors) {
                    const { left, right, rx, ry, rz, frontSign } = anchors;
                    const torsoMask = 1 - smoothstep(xSpan * 0.28, xSpan * 0.42, Math.abs(bx - cx));
                    const wBustY = bandWeight(yN, 0.62, 0.76);
                    // Per-lobe weights (use ANCHORS, not leftCenter/rightCenter)
                    const wL = ellipsoidWeight(bx - left.x, by - left.y, bz - left.z, rx, ry, rz);
                    const wR = ellipsoidWeight(bx - right.x, by - right.y, bz - right.z, rx, ry, rz);
                    // final bust mask
                    const wBust = Math.max(wL, wR) * wBustY * torsoMask;
                    wBustFinal = wBust;
                    if (wBust > 0) {
                        // choose lobe center (prevents center pinch)
                        const useLeft = wL >= wR;
                        const c = useLeft ? left : right;
                        // vector from lobe center -> vertex (base space)
                        const dx = bx - c.x;
                        const dy = by - c.y;
                        const dz = bz - c.z;
                        const len = Math.max(1e-6, Math.sqrt(dx * dx + dy * dy + dz * dz));
                        const ux = dx / len;
                        const uy = dy / len;
                        const uz = dz / len;
                        // rounded profile to avoid spikes
                        const t = 1 - wBust; // 0 at center, 1 at edge
                        const ring = 4 * t * (1 - t); // bell curve, peaks at t=0.5
                        const orbProfile = wBust * ring; // still respects mask
                        // stronger but rounded
                        const inflate = (bustW - 1) * 0.18 * orbProfile;
                        // orb inflate (slightly forward biased)
                        x += ux * inflate * 0.85;
                        y += uy * inflate * 0.45;
                        z += uz * inflate * 1.10;
                        // extra projection only on true front side
                        const isFront = frontSign * (bz - cz) > 0;
                        if (isFront) {
                            z += frontSign * bustForward * wBust;
                        }
                    }
                }
                // write vertex back
                arr[i + 0] = x;
                arr[i + 1] = y;
                arr[i + 2] = z;
                // heatmap weight (0..1)
                weight[vi] = Math.max(0, Math.min(1, wBustFinal));
            }
            // ✅ apply heatmap ONCE per mesh (not inside loop)
            setVertexHeatmap(mesh, weight);
            pos.needsUpdate = true;
            geom.computeVertexNormals();
        });
    }
    // -----------------------------
    // Init Three once
    // -----------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MeshPreview.useEffect": ()=>{
            const el = containerRef.current;
            if (!el) return;
            setPreviewErr(null);
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            scene.background = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("black");
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](45, 1, 0.01, 2000);
            camera.position.set(0, 1.2, 3);
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                antialias: true,
                alpha: false
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
            renderer.outputColorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            el.appendChild(renderer.domElement);
            const controls = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$controls$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"](camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.08;
            controls.screenSpacePanning = false;
            const onStart = {
                "MeshPreview.useEffect.onStart": ()=>{
                    userMovedRef.current = true;
                }
            }["MeshPreview.useEffect.onStart"];
            controls.addEventListener("start", onStart);
            // Lights
            scene.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](0xffffff, 0.6));
            const key = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 1.1);
            key.position.set(3, 6, 4);
            scene.add(key);
            const fill = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](0xffffff, 0.35);
            fill.position.set(-4, 2, -3);
            scene.add(fill);
            sceneRef.current = scene;
            cameraRef.current = camera;
            rendererRef.current = renderer;
            controlsRef.current = controls;
            const resize = {
                "MeshPreview.useEffect.resize": ()=>{
                    const w = el.clientWidth || 1;
                    const h = el.clientHeight || 1;
                    camera.aspect = w / h;
                    camera.updateProjectionMatrix();
                    renderer.setSize(w, h, false);
                    if (!userMovedRef.current && modelRef.current) {
                        fitCameraToObject(camera, controls, modelRef.current);
                    }
                }
            }["MeshPreview.useEffect.resize"];
            resizeObsRef.current = new ResizeObserver(resize);
            resizeObsRef.current.observe(el);
            resize();
            const tick = {
                "MeshPreview.useEffect.tick": ()=>{
                    controls.update();
                    renderer.render(scene, camera);
                    rafRef.current = requestAnimationFrame(tick);
                }
            }["MeshPreview.useEffect.tick"];
            rafRef.current = requestAnimationFrame(tick);
            return ({
                "MeshPreview.useEffect": ()=>{
                    if (rafRef.current) cancelAnimationFrame(rafRef.current);
                    rafRef.current = null;
                    resizeObsRef.current?.disconnect();
                    resizeObsRef.current = null;
                    if (modelRef.current) {
                        scene.remove(modelRef.current);
                        disposeObject3D(modelRef.current);
                        modelRef.current = null;
                    }
                    controls.removeEventListener("start", onStart);
                    controls.dispose();
                    renderer.dispose();
                    if (renderer.domElement.parentElement === el) el.removeChild(renderer.domElement);
                    sceneRef.current = null;
                    cameraRef.current = null;
                    rendererRef.current = null;
                    controlsRef.current = null;
                }
            })["MeshPreview.useEffect"];
        }
    }["MeshPreview.useEffect"], []);
    // -----------------------------
    // Load GLB when blob changes (ONLY blob)
    // -----------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MeshPreview.useEffect": ()=>{
            const scene = sceneRef.current;
            const camera = cameraRef.current;
            const controls = controlsRef.current;
            if (!scene || !camera || !controls) return;
            setPreviewErr(null);
            if (!blob) {
                if (modelRef.current) {
                    scene.remove(modelRef.current);
                    disposeObject3D(modelRef.current);
                    modelRef.current = null;
                }
                return;
            }
            let cancelled = false;
            const url = URL.createObjectURL(blob);
            const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$examples$2f$jsm$2f$loaders$2f$GLTFLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLTFLoader"]();
            setLoading(true);
            userMovedRef.current = false;
            loader.load(url, {
                "MeshPreview.useEffect": (gltf)=>{
                    if (cancelled) return;
                    if (modelRef.current) {
                        scene.remove(modelRef.current);
                        disposeObject3D(modelRef.current);
                        modelRef.current = null;
                    }
                    const root = gltf.scene || gltf.scenes?.[0];
                    if (!root) {
                        setPreviewErr("GLB loaded but contains no scene.");
                        setLoading(false);
                        return;
                    }
                    root.rotation.set(0, 0, 0);
                    scene.add(root);
                    modelRef.current = root;
                    pickBodyMesh(root);
                    centerModelOnGround(root);
                    applyDeformToRoot(root, paramsRef.current);
                    centerModelOnGround(root);
                    fitCameraToObject(camera, controls, root);
                    setLoading(false);
                }
            }["MeshPreview.useEffect"], undefined, {
                "MeshPreview.useEffect": (error)=>{
                    if (cancelled) return;
                    setPreviewErr(error?.message || "Failed to load GLB into preview.");
                    setLoading(false);
                }
            }["MeshPreview.useEffect"]);
            return ({
                "MeshPreview.useEffect": ()=>{
                    cancelled = true;
                    URL.revokeObjectURL(url);
                }
            })["MeshPreview.useEffect"];
        }
    }["MeshPreview.useEffect"], [
        blob
    ]);
    // -----------------------------
    // Re-apply deform when sliders change
    // -----------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MeshPreview.useEffect": ()=>{
            const root = modelRef.current;
            const camera = cameraRef.current;
            const controls = controlsRef.current;
            if (!root || !camera || !controls) return;
            applyDeformToRoot(root, params);
            centerModelOnGround(root);
            if (!userMovedRef.current) {
                fitCameraToObject(camera, controls, root);
            }
        }
    }["MeshPreview.useEffect"], [
        params
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold text-[rgb(var(--text))]",
                                children: "Mesh preview"
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                lineNumber: 859,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-xs text-[rgb(var(--muted))]",
                                children: blob ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Showing:",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-[rgb(var(--text))]",
                                            children: filename || "blockout_glb"
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                            lineNumber: 864,
                                            columnNumber: 17
                                        }, this),
                                        loading ? " • Loading…" : ""
                                    ]
                                }, void 0, true) : "No mesh saved yet — attach a base mesh or upload a GLB."
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                lineNumber: 860,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                        lineNumber: 858,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-[rgb(var(--muted))]",
                        children: "Drag to orbit • Scroll to zoom"
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                        lineNumber: 874,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                lineNumber: 857,
                columnNumber: 7
            }, this),
            previewErr && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-700 dark:text-red-200",
                children: previewErr
            }, void 0, false, {
                fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                lineNumber: 878,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "mt-3 h-[560px] w-full overflow-hidden rounded-xl border border-[rgb(var(--border))] bg-black"
            }, void 0, false, {
                fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                lineNumber: 883,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
        lineNumber: 856,
        columnNumber: 5
    }, this);
}
_s(MeshPreview, "pEABtIrcqpsgHWpwZAEsEvNhe1s=");
_c = MeshPreview;
function CharacterMeshView() {
    _s1();
    const [activeCharacterId, setActiveCharacterId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [asset, setAsset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editMode, setEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("basic");
    const [params, setParams] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_PARAMS);
    const [sculpt, setSculpt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        version: 1,
        deltas: {}
    });
    const [paramsDirty, setParamsDirty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sculptDirty, setSculptDirty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("No character selected");
    const [paramsStatus, setParamsStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sculptStatus, setSculptStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const loadTokenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const loadCharacters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CharacterMeshView.useCallback[loadCharacters]": async ()=>{
            const all = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listCharacters"])();
            return all.map({
                "CharacterMeshView.useCallback[loadCharacters]": ({ id, name })=>({
                        id,
                        name
                    })
            }["CharacterMeshView.useCallback[loadCharacters]"]);
        }
    }["CharacterMeshView.useCallback[loadCharacters]"], []);
    const resetEditsUI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CharacterMeshView.useCallback[resetEditsUI]": ()=>{
            setParams(DEFAULT_PARAMS);
            setSculpt({
                version: 1,
                deltas: {}
            });
            setParamsDirty(false);
            setSculptDirty(false);
            setParamsStatus("");
            setSculptStatus("");
        }
    }["CharacterMeshView.useCallback[resetEditsUI]"], []);
    const invalidateEdits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CharacterMeshView.useCallback[invalidateEdits]": async (characterId)=>{
            await Promise.allSettled([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteAsset"])(characterId, "deform_params_json"),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteAsset"])(characterId, "sculpt_delta_json")
            ]);
            resetEditsUI();
        }
    }["CharacterMeshView.useCallback[invalidateEdits]"], [
        resetEditsUI
    ]);
    const loadAssetsForCharacter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CharacterMeshView.useCallback[loadAssetsForCharacter]": async (characterId)=>{
            const myToken = ++loadTokenRef.current;
            setErr(null);
            setAsset(null);
            setParamsStatus("");
            setSculptStatus("");
            setParamsDirty(false);
            setSculptDirty(false);
            if (!characterId) {
                setStatus("No character selected");
                resetEditsUI();
                return;
            }
            setStatus("Loading saved assets…");
            try {
                const [glb, p, s] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsset"])(characterId, "blockout_glb"),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsset"])(characterId, "deform_params_json"),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsset"])(characterId, "sculpt_delta_json")
                ]);
                if (loadTokenRef.current !== myToken) return;
                setAsset(glb ?? null);
                if (p) {
                    const loadedParams = await blobToJson(p.blob);
                    if (isValidDeformParams(loadedParams)) {
                        setParams({
                            ...DEFAULT_PARAMS,
                            ...loadedParams
                        });
                    } else {
                        setParams(DEFAULT_PARAMS);
                    }
                } else {
                    setParams(DEFAULT_PARAMS);
                }
                if (s) {
                    const loaded = await blobToJson(s.blob);
                    setSculpt(isValidSculptDelta(loaded) ? loaded : {
                        version: 1,
                        deltas: {}
                    });
                } else {
                    setSculpt({
                        version: 1,
                        deltas: {}
                    });
                }
                if (glb) setStatus(`Mesh saved: ${glb.filename}`);
                else setStatus("No saved mesh yet");
            } catch (e) {
                if (loadTokenRef.current !== myToken) return;
                const msg = e instanceof Error ? e.message : String(e);
                setErr(msg);
                setStatus("Could not read saved assets");
                resetEditsUI();
            }
        }
    }["CharacterMeshView.useCallback[loadAssetsForCharacter]"], [
        resetEditsUI
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CharacterMeshView.useEffect": ()=>{
            void loadAssetsForCharacter(activeCharacterId);
        }
    }["CharacterMeshView.useEffect"], [
        activeCharacterId,
        loadAssetsForCharacter
    ]);
    function pickGlb() {
        if (!activeCharacterId || busy) return;
        fileInputRef.current?.click();
    }
    async function onGlbSelected(e) {
        const file = e.target.files?.[0];
        e.target.value = "";
        if (!file || !activeCharacterId || busy) return;
        setErr(null);
        const now = new Date().toISOString();
        try {
            setBusy(true);
            setStatus("Saving mesh…");
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertAsset"])({
                characterId: activeCharacterId,
                type: "blockout_glb",
                filename: file.name || "character-blockout.glb",
                blob: file,
                updatedAt: now
            });
            await invalidateEdits(activeCharacterId);
            setStatus("Mesh saved (edits reset)");
            await loadAssetsForCharacter(activeCharacterId);
        } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            setErr(msg);
            setStatus("Could not save mesh");
        } finally{
            setBusy(false);
        }
    }
    async function attachBaseMesh(pose) {
        if (!activeCharacterId || busy) return;
        setErr(null);
        setBusy(true);
        try {
            setStatus(`Loading base mesh: ${BASE_MESH[pose].label}…`);
            const blob = await fetchBaseMesh(pose);
            const now = new Date().toISOString();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertAsset"])({
                characterId: activeCharacterId,
                type: "blockout_glb",
                filename: BASE_MESH[pose].filename,
                blob,
                updatedAt: now
            });
            const verify = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsset"])(activeCharacterId, "blockout_glb");
            if (!verify) throw new Error("Base mesh save failed: blockout_glb not found after upsert.");
            await invalidateEdits(activeCharacterId);
            setStatus(`Attached base: ${BASE_MESH[pose].filename} (edits reset)`);
            await loadAssetsForCharacter(activeCharacterId);
        } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            setErr(msg);
            setStatus("Could not attach base mesh");
        } finally{
            setBusy(false);
        }
    }
    function downloadGlb() {
        if (!asset) return;
        const url = URL.createObjectURL(asset.blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = asset.filename || "character-blockout.glb";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }
    async function clearGlb() {
        if (!activeCharacterId || busy) return;
        setErr(null);
        try {
            setBusy(true);
            setStatus("Removing mesh…");
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteAsset"])(activeCharacterId, "blockout_glb");
            await invalidateEdits(activeCharacterId);
            setAsset(null);
            setStatus("Mesh removed (edits cleared)");
        } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            setErr(msg);
            setStatus("Could not remove mesh");
        } finally{
            setBusy(false);
        }
    }
    async function saveParams() {
        if (!activeCharacterId || busy) return;
        setErr(null);
        try {
            setBusy(true);
            const now = new Date().toISOString();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertAsset"])({
                characterId: activeCharacterId,
                type: "deform_params_json",
                filename: "deform-params.json",
                blob: jsonToBlob(params),
                updatedAt: now
            });
            setParamsStatus("Saved slider edits");
            setParamsDirty(false);
        } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            setErr(msg);
            setParamsStatus("");
        } finally{
            setBusy(false);
        }
    }
    async function clearParams() {
        if (!activeCharacterId || busy) return;
        setErr(null);
        setParams(DEFAULT_PARAMS);
        setParamsDirty(false);
        try {
            setBusy(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteAsset"])(activeCharacterId, "deform_params_json");
            setParamsStatus("Cleared slider edits");
        } catch  {
            setParamsStatus("Reset sliders");
        } finally{
            setBusy(false);
        }
    }
    async function saveSculpt() {
        if (!activeCharacterId || busy) return;
        setErr(null);
        try {
            setBusy(true);
            const now = new Date().toISOString();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertAsset"])({
                characterId: activeCharacterId,
                type: "sculpt_delta_json",
                filename: "sculpt-delta.json",
                blob: jsonToBlob(sculpt),
                updatedAt: now
            });
            setSculptStatus("Saved sculpt edits");
            setSculptDirty(false);
        } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            setErr(msg);
            setSculptStatus("");
        } finally{
            setBusy(false);
        }
    }
    async function clearSculpt() {
        if (!activeCharacterId || busy) return;
        setErr(null);
        setSculpt({
            version: 1,
            deltas: {}
        });
        setSculptDirty(false);
        try {
            setBusy(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteAsset"])(activeCharacterId, "sculpt_delta_json");
            setSculptStatus("Cleared sculpt edits");
        } finally{
            setBusy(false);
        }
    }
    const tabBase = "rounded-xl border px-3 py-2 text-sm disabled:opacity-50";
    const tabOn = "border-[rgb(var(--border))] bg-[rgb(var(--panel))] text-[rgb(var(--text))]";
    const tabOff = "border-[rgb(var(--border))] bg-[rgb(var(--bg))] text-[rgb(var(--muted))]";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: fileInputRef,
                type: "file",
                accept: ".glb,model/gltf-binary",
                className: "hidden",
                onChange: onGlbSelected
            }, void 0, false, {
                fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                lineNumber: 1206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$CharacterTopBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "Screen option",
                            loadCharacters: loadCharacters,
                            onCharacterSelected: setActiveCharacterId,
                            rightSlot: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-[rgb(var(--muted))]",
                                children: [
                                    activeCharacterId ? status : "No character selected",
                                    busy ? " • Working…" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                lineNumber: 1221,
                                columnNumber: 15
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                            lineNumber: 1216,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                        lineNumber: 1215,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid flex-1 grid-cols-12 gap-4 overflow-auto p-4 md:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "col-span-12 md:col-span-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-start justify-between gap-3 border-b border-[rgb(var(--border))] p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-semibold text-[rgb(var(--text))]",
                                                            children: "Mesh"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1234,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 text-xs text-[rgb(var(--muted))]",
                                                            children: activeCharacterId ? asset ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    "blockout_glb:",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium text-[rgb(var(--text))]",
                                                                        children: asset.filename
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                        lineNumber: 1240,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    "No saved mesh yet. Start from",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium text-[rgb(var(--text))]",
                                                                        children: BASE_MESH.a.filename
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                        lineNumber: 1245,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " ",
                                                                    "or",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium text-[rgb(var(--text))]",
                                                                        children: BASE_MESH.t.filename
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                        lineNumber: 1247,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "."
                                                                ]
                                                            }, void 0, true) : "Select a character to attach a mesh."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1235,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                    lineNumber: 1233,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>attachBaseMesh("a"),
                                                            disabled: !activeCharacterId || busy,
                                                            className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50",
                                                            children: "Attach A"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1257,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>attachBaseMesh("t"),
                                                            disabled: !activeCharacterId || busy,
                                                            className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50",
                                                            children: "Attach T"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1266,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: pickGlb,
                                                            disabled: !activeCharacterId || busy,
                                                            className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50",
                                                            title: activeCharacterId ? "Upload a GLB and attach to this character" : "Select a character first",
                                                            children: "Upload"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1275,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: downloadGlb,
                                                            disabled: !asset || busy,
                                                            className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50",
                                                            children: "Download"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1285,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: clearGlb,
                                                            disabled: !asset || !activeCharacterId || busy,
                                                            className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50",
                                                            title: "Remove saved mesh for this character",
                                                            children: "Remove"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1294,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                    lineNumber: 1256,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                            lineNumber: 1232,
                                            columnNumber: 15
                                        }, this),
                                        err && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-4 mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-700 dark:text-red-200",
                                            children: err
                                        }, void 0, false, {
                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                            lineNumber: 1307,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MeshPreview, {
                                                    blob: asset?.blob ?? null,
                                                    filename: asset?.filename,
                                                    params: params
                                                }, void 0, false, {
                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                    lineNumber: 1313,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 rounded-2xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-semibold text-[rgb(var(--text))]",
                                                            children: "Mesh editor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1316,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 text-xs text-[rgb(var(--muted))]",
                                                            children: "V1 placeholder: sculpt tools, symmetry, undo stack, brush cursor, etc."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1317,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                    lineNumber: 1315,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                            lineNumber: 1312,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                    lineNumber: 1231,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                lineNumber: 1230,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "col-span-12 md:col-span-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-3 border-b border-[rgb(var(--border))] p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-semibold text-[rgb(var(--text))]",
                                                            children: "Options"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1329,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 text-xs text-[rgb(var(--muted))]",
                                                            children: "Choose Basic or Expert edits."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1330,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                    lineNumber: 1328,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            disabled: !activeCharacterId || busy,
                                                            onClick: ()=>{
                                                                setParamsStatus("");
                                                                setSculptStatus("");
                                                                setEditMode("basic");
                                                            },
                                                            className: `${tabBase} ${editMode === "basic" ? tabOn : tabOff} disabled:opacity-50`,
                                                            children: "Basic"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1334,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            disabled: !activeCharacterId || busy,
                                                            onClick: ()=>{
                                                                setParamsStatus("");
                                                                setSculptStatus("");
                                                                setEditMode("expert");
                                                            },
                                                            className: `${tabBase} ${editMode === "expert" ? tabOn : tabOff} disabled:opacity-50`,
                                                            children: "Expert"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1347,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                    lineNumber: 1333,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                            lineNumber: 1327,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4",
                                            children: [
                                                editMode === "basic" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-2 text-sm font-semibold text-[rgb(var(--text))]",
                                                            children: "Basic edits"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1365,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-[rgb(var(--muted))]",
                                                            children: [
                                                                "Saved as JSON asset (",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    children: "deform_params_json"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                    lineNumber: 1367,
                                                                    columnNumber: 44
                                                                }, this),
                                                                ")."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1366,
                                                            columnNumber: 21
                                                        }, this),
                                                        [
                                                            "height",
                                                            "shoulders",
                                                            "chest",
                                                            "waist",
                                                            "hips",
                                                            "bustSize",
                                                            "bustProjection",
                                                            "legs",
                                                            "arms",
                                                            "head"
                                                        ].map((k)=>{
                                                            const v = params[k];
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "mt-3 block",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between text-xs text-[rgb(var(--muted))]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: k === "bustSize" ? "Bust size" : k === "bustProjection" ? "Bust projection" : String(k).charAt(0).toUpperCase() + String(k).slice(1)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                                lineNumber: 1377,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: v.toFixed(2)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                                lineNumber: 1384,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                        lineNumber: 1376,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "range",
                                                                        min: -1,
                                                                        max: 1,
                                                                        step: 0.01,
                                                                        value: v,
                                                                        onChange: (e)=>{
                                                                            const n = Number(e.target.value);
                                                                            setParams((p)=>({
                                                                                    ...p,
                                                                                    [k]: n
                                                                                }));
                                                                            setParamsStatus("");
                                                                            setParamsDirty(true);
                                                                        },
                                                                        disabled: !activeCharacterId || busy,
                                                                        className: "w-full disabled:opacity-50"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                        lineNumber: 1386,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, String(k), true, {
                                                                fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                lineNumber: 1375,
                                                                columnNumber: 25
                                                            }, this);
                                                        }),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 flex flex-wrap items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: saveParams,
                                                                    disabled: !activeCharacterId || busy || !paramsDirty,
                                                                    className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50",
                                                                    title: !paramsDirty ? "No unsaved slider changes" : "Save slider changes",
                                                                    children: "Save"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                    lineNumber: 1406,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: clearParams,
                                                                    disabled: !activeCharacterId || busy,
                                                                    className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50",
                                                                    children: "Reset"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                    lineNumber: 1416,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-[rgb(var(--muted))]",
                                                                    children: paramsDirty ? "Unsaved changes" : paramsStatus ? paramsStatus : ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                    lineNumber: 1425,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1405,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                    lineNumber: 1364,
                                                    columnNumber: 19
                                                }, this),
                                                editMode === "expert" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-2 text-sm font-semibold text-[rgb(var(--text))]",
                                                            children: "Expert sculpt"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1434,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-[rgb(var(--muted))]",
                                                            children: [
                                                                "Saved as delta map asset (",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                    children: "sculpt_delta_json"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                    lineNumber: 1436,
                                                                    columnNumber: 49
                                                                }, this),
                                                                ")."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1435,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 flex flex-wrap items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>{
                                                                        setSculpt((s)=>({
                                                                                ...s,
                                                                                deltas: {
                                                                                    ...s.deltas,
                                                                                    [String(Date.now())]: [
                                                                                        0.01,
                                                                                        0,
                                                                                        0
                                                                                    ]
                                                                                }
                                                                            }));
                                                                        setSculptStatus("");
                                                                        setSculptDirty(true);
                                                                    },
                                                                    disabled: !activeCharacterId || busy,
                                                                    className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50",
                                                                    children: "Add test delta"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                    lineNumber: 1440,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: saveSculpt,
                                                                    disabled: !activeCharacterId || busy || !sculptDirty,
                                                                    className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50",
                                                                    title: !sculptDirty ? "No unsaved sculpt changes" : "Save sculpt changes",
                                                                    children: "Save"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                    lineNumber: 1456,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: clearSculpt,
                                                                    disabled: !activeCharacterId || busy,
                                                                    className: "rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-3 py-2 text-sm text-[rgb(var(--text))] disabled:opacity-50",
                                                                    children: "Clear"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                    lineNumber: 1466,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-[rgb(var(--muted))]",
                                                                    children: [
                                                                        "Deltas: ",
                                                                        Object.keys(sculpt.deltas).length
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                    lineNumber: 1475,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-[rgb(var(--muted))]",
                                                                    children: sculptDirty ? "Unsaved changes" : sculptStatus ? sculptStatus : ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                                    lineNumber: 1477,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1439,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 rounded-xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--bg))] p-3 text-xs text-[rgb(var(--muted))]",
                                                            children: "Next: brush UI (move/smooth/inflate), symmetry, undo/redo, falloff, strength, radius."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                            lineNumber: 1482,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                                    lineNumber: 1433,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                            lineNumber: 1362,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                    lineNumber: 1326,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                                lineNumber: 1325,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                        lineNumber: 1229,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
                lineNumber: 1214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/workspace/character/CharacterMeshView.tsx",
        lineNumber: 1205,
        columnNumber: 5
    }, this);
}
_s1(CharacterMeshView, "t1lRNNGGtvvVY/h2rBgoT0dHeTg=");
_c1 = CharacterMeshView;
var _c, _c1;
__turbopack_context__.k.register(_c, "MeshPreview");
__turbopack_context__.k.register(_c1, "CharacterMeshView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/theme/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThemeToggle({ disabled }) {
    _s();
    const { theme, setTheme, systemTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>setMounted(true)
    }["ThemeToggle.useEffect"], []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: isDark ? "🌙" : "☀️"
            }, void 0, false, {
                fileName: "[project]/components/theme/ThemeToggle.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(ThemeToggle, "C5LVzHTmU5BUNAahkfNWgAsqdKI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/settings/SettingsPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/theme/ThemeToggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SettingsPage() {
    _s();
    const { theme, setTheme, systemTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsPage.useEffect": ()=>setMounted(true)
    }["SettingsPage.useEffect"], []);
    // ✅ Hook is always called, even before mounted === true
    const resolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SettingsPage.useMemo[resolved]": ()=>{
            if (theme === "system") return systemTheme ?? "light";
            return theme ?? "light";
        }
    }["SettingsPage.useMemo[resolved]"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-lg font-semibold text-[rgb(var(--text))]",
                                    children: "Appearance"
                                }, void 0, false, {
                                    fileName: "[project]/components/settings/SettingsPage.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-sm text-[rgb(var(--muted))]",
                                    children: [
                                        "Current:",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        isSystem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex flex-wrap items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$theme$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {
                            disabled: isSystem
                        }, void 0, false, {
                            fileName: "[project]/components/settings/SettingsPage.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        isSystem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                isSystem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(SettingsPage, "Wjh9zVBEonvyAXEEkhnHHbhVfJQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = SettingsPage;
var _c;
__turbopack_context__.k.register(_c, "SettingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/workspace/WorkspaceRouter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkspaceRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$UiRouterProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/UiRouterProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$CharacterModelTool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/workspace/character/CharacterModelTool.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$AssignSkeletonTool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/workspace/character/AssignSkeletonTool.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$CharacterMeshView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/workspace/character/CharacterMeshView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$settings$2f$SettingsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/settings/SettingsPage.tsx [app-client] (ecmascript)"); // ✅ add this
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Stubs (create later)
function Placeholder({ title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl font-semibold text-[rgb(var(--text))]",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = Placeholder;
function WorkspaceRouter() {
    _s();
    const { activeRoute } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$UiRouterProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiRouter"])();
    switch(activeRoute){
        case "settings":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$settings$2f$SettingsPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 26,
                columnNumber: 14
            }, this);
        case "character/model":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$CharacterModelTool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 29,
                columnNumber: 14
            }, this);
        case "character/skeleton":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$AssignSkeletonTool$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 32,
                columnNumber: 14
            }, this);
        case "character/mesh":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$character$2f$CharacterMeshView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 35,
                columnNumber: 14
            }, this);
        case "character/clothing":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Clothing"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 38,
                columnNumber: 14
            }, this);
        case "character/hair":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Hair"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 41,
                columnNumber: 14
            }, this);
        case "character/accessories":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Accessories"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 44,
                columnNumber: 14
            }, this);
        case "character/test":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Test Character"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 47,
                columnNumber: 14
            }, this);
        case "background/environment":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Background: Environment"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 50,
                columnNumber: 14
            }, this);
        case "background/lighting":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Background: Lighting"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 53,
                columnNumber: 14
            }, this);
        case "background/camera":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Background: Camera"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 56,
                columnNumber: 14
            }, this);
        case "background/audio":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Background: Audio"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 59,
                columnNumber: 14
            }, this);
        case "scenes/library":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Scenes: Library"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 62,
                columnNumber: 14
            }, this);
        case "scenes/layout":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Scenes: Layout & Props"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 65,
                columnNumber: 14
            }, this);
        case "scenes/timeline":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Scenes: Timeline"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 68,
                columnNumber: 14
            }, this);
        case "scenes/export":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Scenes: Export"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 71,
                columnNumber: 14
            }, this);
        case "animate/motions":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Animate: Motion Library"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 74,
                columnNumber: 14
            }, this);
        case "animate/keyframes":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Animate: Keyframes"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 77,
                columnNumber: 14
            }, this);
        case "animate/preview":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Animate: Preview"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 80,
                columnNumber: 14
            }, this);
        case "animate/render":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Animate: Render / Video"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 83,
                columnNumber: 14
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Placeholder, {
                title: "Select a tool"
            }, void 0, false, {
                fileName: "[project]/components/workspace/WorkspaceRouter.tsx",
                lineNumber: 86,
                columnNumber: 14
            }, this);
    }
}
_s(WorkspaceRouter, "i58mqQuATgoKKqdHhxE3xCkmhiE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$UiRouterProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiRouter"]
    ];
});
_c1 = WorkspaceRouter;
var _c, _c1;
__turbopack_context__.k.register(_c, "Placeholder");
__turbopack_context__.k.register(_c1, "WorkspaceRouter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Topbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Topbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$WorkspaceRouter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/workspace/WorkspaceRouter.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-zinc-950 text-zinc-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-1 flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Topbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$workspace$2f$WorkspaceRouter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_3d1836ac._.js.map