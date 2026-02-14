import { db } from "@/db/connect";
import { Role } from "@/generated/prisma/client";

export async function getPostsForRole(userId: string, role: Role) {
  switch (role) {
    case "AUTHOR":
      return db.post.findMany({
        where: { authorId: userId },
      });

    case "ADMIN":
      return db.post.findMany();

    case "SUPER_ADMIN":
      return db.post.findMany(); // same as admin for posts

    default:
      return [];
  }
}
