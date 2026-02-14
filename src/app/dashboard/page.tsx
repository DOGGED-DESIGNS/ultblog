// dashboard/page.tsx
// import { getServerSession } from "next-auth";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardEntry() {
  const session = await auth();

  if (!session) redirect("/login");
  console.log("User role:", session.user.role);

  switch (session.user.role) {
    case "AUTHOR":
      return redirect("/dashboard/author");
    case "ADMIN":
      return redirect("/dashboard/admin");
    case "SUPER_ADMIN":
      return redirect("/dashboard/home");
    default:
      return redirect("/");
  }
}
