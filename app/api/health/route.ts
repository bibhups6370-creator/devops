import { NextResponse } from "next/server";
import { getPrisma } from "../../../lib/prisma";

export async function GET() {
  try {
    await getPrisma().$queryRaw`SELECT 1`;

    return NextResponse.json({
      status: "ok",
      database: "connected",
    });
  } catch (error) {
    console.error("Health check failed:", error);

    return NextResponse.json(
      {
        status: "error",
        database: "unavailable",
      },
      { status: 503 }
    );
  }
}