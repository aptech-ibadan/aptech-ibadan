import { newsItems } from "@/data/newsData";
import { serializeDoc } from "./serialize";

async function withDb(fn) {
  const dbConnect = (await import("./mongodb")).default;
  await dbConnect();
  const Post = (await import("@/model/Post")).default;
  return fn(Post);
}

export async function getPosts() {
  try {
    const posts = await withDb((Post) => Post.find().sort({ date: -1 }).lean());
    return posts.length ? serializeDoc(posts) : newsItems;
  } catch {
    return newsItems;
  }
}

export async function getPostBySlug(slug) {
  try {
    const post = await withDb((Post) => Post.findOne({ slug }).lean());
    if (post) return serializeDoc(post);
  } catch {
    // fall back to static data
  }
  return newsItems.find((item) => item.slug === slug) || null;
}

export async function createPost(post) {
  const newPost = await withDb((Post) => Post.create(post));
  return newPost._id;
}

export async function updatePostBySlug(slug, updates) {
  return withDb((Post) =>
    Post.findOneAndUpdate({ slug }, { $set: updates }, { new: true }).lean(),
  );
}

export async function deletePostBySlug(slug) {
  const result = await withDb((Post) => Post.deleteOne({ slug }));
  return result.deletedCount > 0;
}
