"use server";

import { db } from "@/db/connect";

export async function updatePostFeatured({
  data,
}: {
  data: { id: string; featured: boolean };
}) {
  const id = data.id;
  const featured = data.featured;

  try {
    await db.post.update({
      where: { id },
      data: { featured },
    });

    return { success: true };
  } catch (error) {
    throw new Error("something went wring");
  }
}
