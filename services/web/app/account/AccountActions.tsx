"use client";

import { signOut, useSession } from "next-auth/react";

export default function AccountActions() {
  const { status } = useSession();

  return (
    <div className="flex items-center gap-3">
      <button
        className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-2 text-sm"
        onClick={() => signOut({ callbackUrl: "/login" })}
        disabled={status === "loading"}
      >
        Sign out
      </button>

      {status === "loading" && (
        <span className="text-xs text-[rgb(var(--muted))]">Checking session…</span>
      )}
    </div>
  );
}
