// app/api/image-exists/route.ts
import { NextResponse } from "next/server";
import { db } from "@/db/connect";

export async function POST(req: Request) {
  try {
    const { hash } = await req.json();

    if (!hash) {
      return NextResponse.json({ exists: false }, { status: 400 });
    }

    const existing = await db.image.findUnique({
      where: { hash },
      select: { url: true },
    });

    if (existing) {
      return NextResponse.json({
        exists: true,
        url: existing.url,
      });
    }

    return NextResponse.json({
      exists: false,
    });
  } catch (err) {
    console.error("image-exists error:", err);
    return NextResponse.json({ exists: false }, { status: 500 });
  }
}
