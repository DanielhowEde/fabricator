"use client";

import { useSession } from "next-auth/react";

export default function Footer() {
  const { data: session, status } = useSession();

  return (
    <footer
      className="
        h-12
        flex items-center justify-center gap-4 px-6 text-xs
        bg-[rgb(var(--panel))]
        border-t border-[rgb(var(--border))]
        text-[rgb(var(--muted))]
      "
    >
      <span>© {new Date().getFullYear()} Daniel Ede</span>

      {status === "loading" && <span>Checking session…</span>}

      {status !== "loading" && !session?.user && (
        <span>Not signed in</span>
      )}

      {session?.user && (
        <span>Signed in as {session.user.email}</span>
      )}
    </footer>
  );
}

