import { NextResponse } from "next/server";
import { verifyAdminRequest } from "@/lib/auth";

export async function GET(req) {
  const admin = verifyAdminRequest(req);
  if (!admin) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
  return NextResponse.json({ authenticated: true, user: admin.user });
}
