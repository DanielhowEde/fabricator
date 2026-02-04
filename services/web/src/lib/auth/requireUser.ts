import { auth } from "@/auth";
import { redirect } from "next/navigation";

/**
 * Ensures a user is signed in.
 * Redirects to /login if not.
 */
export async function requireUser() {
  const session = await auth();
  if (!session?.user) redirect("/login");
  return session.user;
}