// app/api/posts/[slug]/route.js
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Post from "@/model/Post";
import { verifyToken } from "@/lib/auth";

// ── GET /api/posts/[slug] — public ───────────────────────────
export async function GET(req, { params }) {
  try {
    await dbConnect();
    const post = await Post.findOne({ slug: params.slug });
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// ── PATCH /api/posts/[slug] — protected ──────────────────────
export async function PATCH(req, { params }) {
  const admin = verifyToken(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();

    const updates = await req.json();
    if (!updates || Object.keys(updates).length === 0) {
      return NextResponse.json({ error: "No update data provided" }, { status: 400 });
    }

    const updated = await Post.findOneAndUpdate(
      { slug: params.slug },
      { $set: updates },
      { new: true },
    );

    if (!updated) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ ok: true, post: updated });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// ── DELETE /api/posts/[slug] — protected ─────────────────────
export async function DELETE(req, { params }) {
  const admin = verifyToken(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();

    const removed = await Post.findOneAndDelete({ slug: params.slug });
    if (!removed) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}