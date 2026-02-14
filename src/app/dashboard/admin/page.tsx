import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { getPostsForRole } from "@/lib/data/posts";
// import { PostsTable } from "@/components/posts-table";

export default async function AdminDashboard() {
  // 1️⃣ Get session safely
  const session = await auth();

  // 2️⃣ Runtime check: ensure user is ADMIN
  if (!session || session.user.role !== "ADMIN") {
    // notFound(); // blocks unauthorized access
    return redirect("/dashboard");
  }

  // 3️⃣ Fetch posts visible to this role (all posts for admin)
  const posts = await getPostsForRole(session.user.id ?? "", session.user.role);

  return (
    <>
      <h1>All Posts</h1>
      {/* <PostsTable posts={posts} /> */}
    </>
  );
}
