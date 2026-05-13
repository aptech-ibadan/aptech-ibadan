import { getDb } from "@/lib/mongodb";
import { newsItems } from "@/data/newsData";

export async function getPosts() {
  try {
    const db = await getDb();
    const posts = await db.collection("posts").find().sort({ date: -1 }).toArray();
    return posts.length ? posts : newsItems;
  } catch (error) {
    return newsItems;
  }
}

export async function getPostBySlug(slug) {
  try {
    const db = await getDb();
    const post = await db.collection("posts").findOne({ slug });
    if (post) return post;
  } catch (error) {
    // ignore errors and fall back to static data
  }
  return newsItems.find((item) => item.slug === slug) || null;
}

export async function createPost(post) {
  const db = await getDb();
  const result = await db.collection("posts").insertOne(post);
  return result.insertedId;
}

export async function updatePostBySlug(slug, updates) {
  const db = await getDb();
  const result = await db.collection("posts").findOneAndUpdate(
    { slug },
    { $set: updates },
    { returnDocument: "after" }
  );
  return result.value;
}

export async function deletePostBySlug(slug) {
  const db = await getDb();
  const result = await db.collection("posts").deleteOne({ slug });
  return result.deletedCount > 0;
}
