// app/lib/requireAdminApi.ts

import { cookies } from "next/headers";
import { verifyToken } from "./auth";

export async function requireAdminApi() {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("admin_token")?.value;

  if (!token) {
    throw new Error("UNAUTHORIZED");
  }

  const payload = await verifyToken(token);

  if (!payload) {
    throw new Error("UNAUTHORIZED");
  }

  return payload;
}