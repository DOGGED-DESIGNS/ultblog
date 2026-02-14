import { notFound, redirect } from "next/navigation";
import { auth } from "@/auth";
import { getPostsForRole } from "@/lib/data/posts";
// import { PostsTable } from "@/components/posts-table";

export default async function AuthorDashboard() {
  const session = await auth();

  // 1️⃣ Runtime check: user must exist and be an author
  if (!session || session?.user.role !== "AUTHOR") {
    return redirect("/dashboard");
  }

  // 2️⃣ Fetch posts that belong to this author
  const posts = await getPostsForRole(session.user.id ?? "", session.user.role);

  return (
    <>
      <h1>Your Posts</h1>
      {/* <PostsTable posts={posts} /> */}
    </>
  );
}
