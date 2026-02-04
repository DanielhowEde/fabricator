"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export async function createProject(formData: FormData): Promise<void> {
  const session = await auth();
  if (!session?.user) redirect("/login");

  const name = String(formData.get("name") ?? "Untitled");

  // TODO: create in DB, get id
  const id = "temp-id";

  redirect(`/projects/${id}`);
}
