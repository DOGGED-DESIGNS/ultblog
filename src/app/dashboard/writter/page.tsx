// this is auth-gaurd protection at auth level.

import { requireRole } from "@/lib/auth-guard";

export default async function WritersPage() {
  await requireRole(["ADMIN", "SUPER_ADMIN"]);

  return <div>Writers</div>;
}
