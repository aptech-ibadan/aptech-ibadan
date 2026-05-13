import { NextResponse } from "next/server";
import { uploadMedia } from "@/lib/cloudinary";

export async function POST(req) {
  const body = await req.json();
  const { dataUrl, folder } = body;

  if (!dataUrl) {
    return NextResponse.json({ error: "Missing dataUrl" }, { status: 400 });
  }

  try {
    const result = await uploadMedia(dataUrl, folder || "aptech");
    return NextResponse.json({
      url: result.secure_url,
      publicId: result.public_id,
      resourceType: result.resource_type,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Upload failed" }, { status: 500 });
  }
}
