import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const issues = await prisma.issue.findMany({ orderBy: { id: "desc" } });
  if (!issues) return NextResponse.json("No issues found.", { status: 400 });

  const response = NextResponse.json(issues, { status: 200 });

  response.headers.set("Cache-Control", "no-store");

  return response;
}
