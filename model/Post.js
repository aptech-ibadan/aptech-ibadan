// model/Post.js
import mongoose from "mongoose";

const ContentBlockSchema = new mongoose.Schema(
  {
    heading: { type: String },
    body: { type: String },
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

export default mongoose.models.Post || mongoose.model("Post", PostSchema);