import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
  console.warn("Cloudinary environment is not fully configured. Upload APIs may fail.");
}

export async function uploadMedia(dataUrl, folder = "aptech") {
  if (!dataUrl) {
    throw new Error("Missing dataUrl for upload.");
  }

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      dataUrl,
      {
        folder,
        resource_type: "auto",
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      }
    );
  });
}

export default cloudinary;
