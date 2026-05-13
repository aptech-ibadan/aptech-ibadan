import { NextResponse } from "next/server";
import { getPostBySlug, updatePostBySlug, deletePostBySlug } from "@/lib/posts";
import { verifyAdminRequest } from "@/lib/auth";

export async function GET(req, { params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}

export async function PATCH(req, { params }) {
  const admin = verifyAdminRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const updates = await req.json();
  if (!updates || Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "No update data provided" }, { status: 400 });
  }

  try {
    const updated = await updatePostBySlug(params.slug, updates);
    if (!updated) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true, post: updated });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Unable to update post" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const admin = verifyAdminRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const removed = await deletePostBySlug(params.slug);
    if (!removed) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Unable to delete post" }, { status: 500 });
  }
}
