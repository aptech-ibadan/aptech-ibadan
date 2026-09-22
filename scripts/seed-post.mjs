// scripts/seed-post.mjs
//
// Seeds the "Aptech Ibadan Now Has Student Accommodation" blog post into the
// `posts` collection.
//
// Usage, from the aptech-ibadan directory:
//   node --env-file=.env scripts/seed-post.mjs
//
// Notes
// -----
// • Idempotent: upserts on `slug`, so re-running updates the existing document
//   instead of creating duplicates.
// • The schema is re-declared here on purpose — `@/model/Post` uses the `@/`
//   aliases that only the Next.js bundler resolves, not plain node.
// • Uses the same collection name ("posts") and field shape as model/Post.js.

import mongoose from "mongoose";
import { accommodationPost } from "../data/posts/aptech-accommodation.mjs";

const ContentBlockSchema = new mongoose.Schema(
  {
    heading: { type: String },
    body: { type: String },
    bullets: { type: [String], default: [] },
    image: { type: String },
    imageAlt: { type: String },
  },
  { _id: false },
);

const PostSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    category: { type: String },
    excerpt: { type: String },
    heroImage: { type: String },
    thumbnail: { type: String },
    author: { type: String },
    date: { type: String },
    readTime: { type: String },
    views: { type: String },
    likes: { type: String },
    comments: { type: String },
    tags: { type: [String], default: [] },
    content: { type: [ContentBlockSchema], default: [] },
  },
  { timestamps: true },
);

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

async function seed() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error(
      "MONGODB_URI is not set. Run with: node --env-file=.env scripts/seed-post.mjs",
    );
  }

  await mongoose.connect(uri);

  const { slug, ...fields } = accommodationPost;

  const result = await Post.findOneAndUpdate(
    { slug },
    { $set: fields },
    { upsert: true, new: true, setDefaultsOnInsert: true, lean: true },
  );

  const blocks = result.content ?? [];
  const bulletBlocks = blocks.filter((b) => b.bullets?.length);
  const imageBlocks = blocks.filter((b) => b.image);

  console.log(`✓ Seeded: ${result.title}`);
  console.log(`  url            /news/${result.slug}`);
  console.log(`  category       ${result.category}`);
  console.log(`  author / date  ${result.author} · ${result.date}`);
  console.log(`  content blocks ${blocks.length}`);
  console.log(
    `  bullet lists   ${bulletBlocks.length} (${bulletBlocks.reduce(
      (total, b) => total + b.bullets.length,
      0,
    )} items)`,
  );
  console.log(`  inline images  ${imageBlocks.length}`);
  console.log(`  tags           ${result.tags?.length ?? 0}`);

  const missing = imageBlocks
    .map((b) => b.image)
    .filter((src) => src && !src.startsWith("/images/accommodation/"));
  if (missing.length) {
    console.warn(`  ⚠ unexpected image paths: ${missing.join(", ")}`);
  }
}

seed()
  .then(() => mongoose.disconnect())
  .catch(async (error) => {
    console.error("✗ Seed failed:", error.message);
    process.exitCode = 1;
    await mongoose.disconnect();
  });
