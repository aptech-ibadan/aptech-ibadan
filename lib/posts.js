// lib/posts.js
import dbConnect from "./mongodb";
import Post from "@/model/Post";
import { newsItems } from "@/data/newsData";

export async function getPosts() {
  try {
    await dbConnect();
    const posts = await Post.find().sort({ date: -1 }).lean();
    return posts.length ? posts : newsItems;
  } catch (error) {
    return newsItems;
  }
}

export async function getPostBySlug(slug) {
  try {
    await dbConnect();
    const post = await Post.findOne({ slug }).lean();
    if (post) return post;
  } catch (error) {
    // ignore and fall back to static data
  }
  return newsItems.find((item) => item.slug === slug) || null;
}

export async function createPost(post) {
  await dbConnect();
  const newPost = await Post.create(post);
  return newPost._id;
}

export async function updatePostBySlug(slug, updates) {
  await dbConnect();
  const updated = await Post.findOneAndUpdate(
    { slug },
    { $set: updates },
    { new: true },
  ).lean();
  return updated;
}

export async function deletePostBySlug(slug) {
  await dbConnect();
  const result = await Post.deleteOne({ slug });
  return result.deletedCount > 0;
}