// app/api/delete-image/route.ts
import { NextResponse } from "next/server";
import { db } from "@/db/connect";
import { UTApi } from "uploadthing/server";

export async function POST(req: Request) {
  const utapi = new UTApi();
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    // 1️⃣ Find image row by URL
    const image = await db.image.findUnique({
      where: { url },
      select: { key: true },
    });

    if (!image) {
      return NextResponse.json({ ok: true }); // already gone
    }

    // 2️⃣ Delete from UploadThing using key
    await utapi.deleteFiles(image.key);

    // 3️⃣ Delete from DB
    await db.image.delete({
      where: { url },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("delete-image error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
