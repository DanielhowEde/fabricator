"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type UiRouterState = {
  activeRoute: string;
  setActiveRoute: (r: string) => void;
};

const UiRouterContext = createContext<UiRouterState | null>(null);

const ROUTE_KEY = "fabricator.ui.activeRoute";
const DEFAULT_ROUTE = "character/model";

export function UiRouterProvider({ children }: { children: React.ReactNode }) {
  // ✅ Always start with the same value on server + first client render
  const [activeRoute, setActiveRoute] = useState<string>(DEFAULT_ROUTE);

  // ✅ Load from localStorage only after mount
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(ROUTE_KEY);
      if (saved && saved.trim().length > 0) {
        setActiveRoute(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist whenever it changes
  useEffect(() => {
    try {
      if (activeRoute !== "settings") {
        window.localStorage.setItem(ROUTE_KEY, activeRoute);
      }
    } catch {
      // ignore
    }
  }, [activeRoute]);

  const value = useMemo(() => ({ activeRoute, setActiveRoute }), [activeRoute]);

  return <UiRouterContext.Provider value={value}>{children}</UiRouterContext.Provider>;
}

export function useUiRouter() {
  const ctx = useContext(UiRouterContext);
  if (!ctx) throw new Error("useUiRouter must be used within UiRouterProvider");
  return ctx;
}
