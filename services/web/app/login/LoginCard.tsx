"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function LoginCard() {
  const { status } = useSession();
  const [hasGoogle, setHasGoogle] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/auth/providers");
        if (!res.ok) return setHasGoogle(false);
        const providers = (await res.json()) as Record<string, unknown>;
        setHasGoogle(Boolean(providers?.google));
      } catch {
        setHasGoogle(false);
      }
    })();
  }, []);

  const disabled =
    status === "loading" || hasGoogle === false || hasGoogle === null;

  return (
    <div className="mx-auto mt-24 max-w-md rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-6">
      <h1 className="text-lg font-semibold">Sign in</h1>
      <p className="mt-2 text-sm text-[rgb(var(--muted))]">
        Sign in to save projects and access your account.
      </p>

      <button
        className="mt-6 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-2 text-sm disabled:opacity-50"
        disabled={disabled}
        onClick={() => signIn("google", { callbackUrl: "/account" })}
      >
        Continue with Google
      </button>

      {hasGoogle === false && (
        <p className="mt-3 text-xs text-[rgb(var(--muted))]">
          Google login isn’t configured yet (missing client ID/secret).
        </p>
      )}
    </div>
  );
}
