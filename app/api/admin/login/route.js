// app/api/admin/login/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/model/User";
import dbConnect from "@/lib/mongodb";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export async function POST(req) {
  try {
    await dbConnect();

    const { identifier, password } = await req.json();

    if (!identifier || !password) {
      return NextResponse.json(
        { error: "Identifier and password are required" },
        { status: 400 },
      );
    }

    // Find user by email or username
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
    const user = await User.findOne(
      isEmail ? { email: identifier.toLowerCase() } : { username: identifier },
    );

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, username: user.username },
      JWT_SECRET,
      { expiresIn: "7d" },
    );

    return NextResponse.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}