import { notFound } from "next/navigation";
import { auth } from "@/auth";
// import { getAnalytics } from "@/lib/data/analytics";
import { getPostsForRole } from "@/lib/data/posts";
// import { AnalyticsPanel } from "@/components/analytics-panel";
// import { PostsTable } from "@/components/posts-table";

export default async function SuperAdminDashboard() {
  const session = await auth();

  // ✅ Explicit guard (this is the key fix)
  if (!session || !session.user || session.user.role !== "SUPER_ADMIN") {
    notFound();
  }
  // ✅ Safe to use from here
  const { id, role } = session.user;

  const posts = await getPostsForRole(id ?? "", role);
  // const analytics = await getAnalytics();

  return (
    <>
      <div>
        {" "}
        <p> supper admin section</p>
      </div>
      {/* <AnalyticsPanel data={analytics} /> */}
      {/* <PostsTable posts={posts} /> */}
    </>
  );
}
