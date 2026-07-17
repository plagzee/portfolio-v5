

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { verifyToken } from "../../lib/auth";

export async function requireAdmin() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/admin");
  }

  const payload = await verifyToken(token);

  if (!payload) {
    redirect("/admin");
  }

  if (payload.role !== "admin") {
    redirect("/admin");
  }

  return payload;
}