// app/api/posts/route.js
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getPosts, createPost } from "@/lib/posts";
import { verifyToken } from "@/lib/auth";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// function verifyToken(req) {
//   const authHeader = req.headers.get("authorization");
//   if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
//   try {
//     return jwt.verify(authHeader.split(" ")[1], JWT_SECRET);
//   } catch {
//     return null;
//   }
// }

// ── GET /api/posts — public ───────────────────────────────────
export async function GET() {
  const posts = await getPosts();
  return NextResponse.json(posts);
}

// ── POST /api/posts — protected ──────────────────────────────
export async function POST(req) {
  const admin = verifyToken(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const post = await req.json();
  if (!post?.title || !post?.slug) {
    return NextResponse.json(
      { error: "Missing title or slug" },
      { status: 400 },
    );
  }

  try {
    const insertedId = await createPost(post);
    return NextResponse.json({ ok: true, post: { ...post, _id: insertedId } });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unable to create post" },
      { status: 500 },
    );
  }
}