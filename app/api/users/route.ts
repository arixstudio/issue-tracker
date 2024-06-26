import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany({ orderBy: { name: "asc" } });
  if (!users) return NextResponse.json("No users found.", { status: 400 });

  const response = NextResponse.json(users, { status: 200 });

  response.headers.set("Cache-Control", "no-store");

  return response;
}
