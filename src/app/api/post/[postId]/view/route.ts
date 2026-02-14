import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/connect";
import UAParser from "ua-parser-js";
// import requestIp from "request-ip";
import requestIp from "request-ip";

export async function POST(
  req: NextRequest,
  { params }: { params: { postId: string } },
) {
  const postId = params.postId;

  // ─────────────────────────────
  // Get client IP
  // ─────────────────────────────
  const ipAddress = requestIp.getClientIp(req as any) || "unknown";

  // ─────────────────────────────
  // Detect device
  // ─────────────────────────────
  const userAgent = req.headers.get("user-agent") || "";
  const parser = new (UAParser as any)();
  const deviceType = parser.getDevice().type;

  const device = deviceType === "mobile" ? "MOBILE" : "DESKTOP";

  // ─────────────────────────────
  // 24-hour deduplication window
  // ─────────────────────────────
  const last24Hours = new Date();
  last24Hours.setHours(last24Hours.getHours() - 24);

  const existingView = await db.postView.findFirst({
    where: {
      postId,
      ipAddress,
      createdAt: {
        gte: last24Hours,
      },
    },
  });

  // ─────────────────────────────
  // If already viewed → do nothing
  // ─────────────────────────────
  if (existingView) {
    return NextResponse.json({
      success: true,
      counted: false,
    });
  }

  // ─────────────────────────────
  // Store new view
  // ─────────────────────────────
  await db.postView.create({
    data: {
      postId,
      ipAddress,
      device,
    },
  });

  return NextResponse.json({
    success: true,
    counted: true,
  });
}
