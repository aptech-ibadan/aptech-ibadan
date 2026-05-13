import { NextResponse } from "next/server";
import { isAdminValid, createAdminToken, ADMIN_COOKIE_NAME } from "@/lib/auth";

export async function POST(req) {
  const { username, password } = await req.json();

  if (!isAdminValid(username, password)) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = createAdminToken();
  const response = NextResponse.json({ ok: true, user: username });
  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: token,
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60,
  });
  return response;
}
