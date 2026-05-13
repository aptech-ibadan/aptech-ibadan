// app/api/admin/verify/route.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function GET(req) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, JWT_SECRET);

    return NextResponse.json({
      authenticated: true,
      user: {
        id: decoded.id,
        email: decoded.email,
        username: decoded.username,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { authenticated: false, error: "Invalid or expired token" },
      { status: 401 },
    );
  }
}