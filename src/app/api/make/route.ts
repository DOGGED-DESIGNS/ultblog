// make an api in next.js that recives title, category, user summary, url, tags[], content,

// connect post with category in prisma

// connect post to users with prisma

// connect tags to post with prisma

import { NextResponse } from "next/server";
import { db } from "@/db/connect";
import { Post } from "@/generated/prisma/client";
import slugify from "slugify";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      title,
      summary,
      content,
      category,
      author,
      tags, // string[] of tag NAMES now (e.g. ["Next.js", "SaaS"])
      thumbnail,
      status = "DRAFT",
    } = body;

    if (!title || !content || !author) {
      return NextResponse.json(
        { error: "Title, content, and authorId are required" },
        { status: 400 },
      );
    }

    // generate slug from title
    const slug = slugify(title, { lower: true, strict: true });

    const post = await db.post.create({
      data: {
        title,
        slug,
        summary,
        content,
        thumbnail,
        status,

        // 🔗 connect Post → User
        author: {
          connect: { email: author },
        },

        // 🔗 connect Post → Category (must already exist)
        category: category
          ? {
              connect: { name: category },
            }
          : undefined,

        // 🏷️ tags: auto-create or connect
        tags: tags?.length
          ? {
              create: tags.map((tagName: string) => {
                const tagSlug = slugify(tagName, {
                  lower: true,
                  strict: true,
                });

                return {
                  tag: {
                    connectOrCreate: {
                      where: { slug: tagSlug }, // must be UNIQUE in schema
                      create: {
                        name: tagName,
                        slug: tagSlug,
                      },
                    },
                  },
                };
              }),
            }
          : undefined,
      },

      include: {
        author: true,
        category: true,
        tags: {
          include: { tag: true },
        },
      },
    });

    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    console.error("CREATE POST ERROR:", error);
    return NextResponse.json(
      { error: "Something went wrong creating post" },
      { status: 500 },
    );
  }
}
