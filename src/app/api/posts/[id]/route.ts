import { db } from "@/db/connect";
import { UTApi } from "uploadthing/server";
import { NextResponse } from "next/server";

/** Extract <img src="..."> URLs from HTML */
function extractImageUrls(html: string): string[] {
  return Array.from(html.matchAll(/<img[^>]+src="([^">]+)"/g)).map((m) => m[1]);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  const postId = params.id;

  const utapi = new UTApi();

  // 1) Fetch the post
  const post = await db.post.findUnique({
    where: { id: postId },
    select: {
      thumbnail: true,
      content: true,
    },
  });

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  // 2) Collect all image URLs used by this post
  const contentUrls = extractImageUrls(post.content || "");
  const allUrls = Array.from(
    new Set([post.thumbnail, ...contentUrls].filter(Boolean)),
  );

  // 3) Load matching Image rows
  const images = await db.image.findMany({
    where: {
      url: { in: allUrls },
    },
    select: {
      id: true,
      url: true,
      key: true,
    },
  });

  const keysToDelete: string[] = [];
  const imageIdsToDelete: string[] = [];

  // 4) For each image, check if another post still uses it
  for (const img of images) {
    const stillUsed = await db.post.findFirst({
      where: {
        NOT: { id: postId },
        OR: [{ thumbnail: img.url }, { content: { contains: img.url } }],
      },
      select: { id: true },
    });

    if (!stillUsed) {
      keysToDelete.push(img.key);
      imageIdsToDelete.push(img.id);
    }
  }

  // 5) Delete files from UploadThing (only safe ones)
  if (keysToDelete.length > 0) {
    await utapi.deleteFiles(keysToDelete);
  }

  // 6) Delete Image rows (only safe ones)
  if (imageIdsToDelete.length > 0) {
    await db.image.deleteMany({
      where: {
        id: { in: imageIdsToDelete },
      },
    });
  }

  // 7) Delete the post itself
  await db.post.delete({
    where: { id: postId },
  });

  return NextResponse.json({
    success: true,
    deletedImages: imageIdsToDelete.length,
  });
}
