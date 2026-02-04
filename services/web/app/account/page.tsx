import { requireUser } from "@/src/lib/auth/requireUser";
import AccountActions from "./AccountActions";

export default async function AccountPage() {
  const user = await requireUser();

  // Placeholder plan data for now (swap later when you add billing)
  const plan = "Free";
  const limits = ["Projects: 3", "Exports: Watermarked", "Storage: 1GB"];

  return (
    <div className="mx-auto mt-10 max-w-2xl space-y-6 px-6">
      <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-6">
        <h1 className="text-xl font-semibold">Account</h1>
        <p className="mt-2 text-sm text-[rgb(var(--muted))]">
          Signed in as <span className="font-medium">{user.email}</span>
        </p>

        <div className="mt-4">
          <AccountActions />
        </div>
      </div>

      <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-6">
        <h2 className="text-base font-semibold">Plan</h2>
        <p className="mt-2 text-sm text-[rgb(var(--muted))]">
          Current plan: <span className="font-medium">{plan}</span>
        </p>

        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[rgb(var(--muted))]">
          {limits.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>

        <button
          className="mt-5 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-4 py-2 text-sm"
          onClick={() => alert("Upgrade flow goes here (Stripe later)")}
        >
          Upgrade
        </button>
      </div>
    </div>
  );
}
