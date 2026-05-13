import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

// 🔥 Fail fast if missing
if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in .env.local");
}

// 🔥 Global cache (prevents multiple connections in dev)
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

async function dbConnect() {
  // ✅ Already connected
  if (cached.conn) return cached.conn;

  // ✅ Create connection once
  if (!cached.promise) {
    const cleanURI = MONGODB_URI; // 🔥 removes hidden chars

    cached.promise = mongoose.connect(cleanURI, {
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log("✅ MongoDB connected");
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}

export default dbConnect;
