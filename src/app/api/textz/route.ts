import { NextResponse } from "next/server";
import { db } from "@/db/connect";

export async function GET(req: Request) {
  try {
    // db.connect()

    return NextResponse.json({ connnect: "data connected sucessfully" });
  } catch (error) {}
}
