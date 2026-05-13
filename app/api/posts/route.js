import { NextResponse } from "next/server";
import { getPosts, createPost } from "@/lib/posts";
import { verifyAdminRequest } from "@/lib/auth";

export async function GET() {
  const posts = await getPosts();
  return NextResponse.json(posts);
}

export async function POST(req) {
  const admin = verifyAdminRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const post = await req.json();
  if (!post?.title || !post?.slug) {
    return NextResponse.json({ error: "Missing title or slug" }, { status: 400 });
  }

  try {
    const insertedId = await createPost(post);
    return NextResponse.json({ ok: true, post: { ...post, _id: insertedId } });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Unable to create post" }, { status: 500 });
  }
}
