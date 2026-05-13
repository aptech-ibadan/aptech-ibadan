import { NextResponse } from "next/server";
import { getOffers, createOffer } from "@/lib/offers";
import { verifyAdminRequest } from "@/lib/auth";

export async function GET() {
  const offers = await getOffers();
  return NextResponse.json(offers);
}

export async function POST(req) {
  const admin = verifyAdminRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const offer = await req.json();
  if (!offer?.title || !offer?.slug) {
    return NextResponse.json({ error: "Missing title or slug" }, { status: 400 });
  }

  try {
    const insertedId = await createOffer(offer);
    return NextResponse.json({ ok: true, offer: { ...offer, _id: insertedId } });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Unable to create offer" }, { status: 500 });
  }
}
