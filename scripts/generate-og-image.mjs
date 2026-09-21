// Generates the 1200x630 social sharing image (public/og-image.jpg) from an
// existing, verified campus photo in the repo. Run once with:
//   node scripts/generate-og-image.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const SOURCE = path.join(root, "public/images/gallery/aptech1.jpeg");
const OUTPUT = path.join(root, "public/og-image.jpg");

await sharp(SOURCE)
  .resize(1200, 630, { fit: "cover", position: "centre" })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(OUTPUT);

console.log(`Wrote ${path.relative(root, OUTPUT)}`);
