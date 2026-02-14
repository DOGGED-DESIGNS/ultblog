import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Role } from "@/types/role";

export async function requireRole(allowed: Role[]) {
  const session = await auth();

  if (!session) redirect("/login");

  if (!allowed.includes(session.user.role)) {
    redirect("/dashboard");
  }

  return session;
}
