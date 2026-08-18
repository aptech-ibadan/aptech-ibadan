#!/usr/bin/env node
/**
 * Upload a local video file straight to Cloudinary using this project's
 * existing CLOUDINARY_* server credentials (see lib/cloudinary.js / .env).
 *
 * Uploading from disk with the SDK (rather than through the app's
 * /api/uploads route) avoids base64-encoding a 10MB+ file into a JSON
 * request body, which is what that route is designed for images, not
 * a video-sized payload.
 *
 * Usage (Node 20.6+, loads .env automatically):
 *   node --env-file=.env scripts/upload-video-to-cloudinary.mjs ./aptech-ibadan-campus-tour.mp4
 *
 * Older Node: export the three CLOUDINARY_* vars in your shell first, then
 * run `node scripts/upload-video-to-cloudinary.mjs <file>`.
 *
 * Prints the public_id to put in .env as NEXT_PUBLIC_PROMO_VIDEO_PUBLIC_ID.
 */
import { v2 as cloudinary } from "cloudinary";
import path from "node:path";

const file = process.argv[2];
if (!file) {
  console.error(
    "Usage: node scripts/upload-video-to-cloudinary.mjs <path-to-video>",
  );
  process.exit(1);
}

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  console.error(
    "Missing CLOUDINARY_CLOUD_NAME / CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET in your environment (.env).",
  );
  process.exit(1);
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const publicId =
  "aptech/" + path.basename(file, path.extname(file)).replace(/\s+/g, "-");

console.log(`Uploading ${file} as ${publicId} ...`);

try {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "video",
    public_id: publicId,
    overwrite: true,
    folder: undefined, // publicId already includes the folder prefix
    eager: [{ format: "jpg", start_offset: "0" }], // pre-generate a poster
  });

  console.log("\nUpload complete.");
  console.log("  secure_url:", result.secure_url);
  console.log("  public_id: ", result.public_id);
  console.log("\nAdd these to .env:");
  console.log(`  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=${CLOUDINARY_CLOUD_NAME}`);
  console.log(`  NEXT_PUBLIC_PROMO_VIDEO_PUBLIC_ID=${result.public_id}`);
} catch (err) {
  console.error("Upload failed:", err.message || err);
  process.exit(1);
}
