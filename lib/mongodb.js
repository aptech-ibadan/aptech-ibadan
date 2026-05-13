import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "aptech";

if (!uri) {
  throw new Error("Missing MONGODB_URI in environment variables.");
}

let cached = globalThis._mongoClientPromise;

if (!cached) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: "1",
      strict: true,
      deprecationErrors: true,
    },
  });
  cached = client.connect();
  globalThis._mongoClientPromise = cached;
}

export async function getDb() {
  const client = await cached;
  return client.db(dbName);
}
