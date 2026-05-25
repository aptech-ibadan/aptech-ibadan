// app/api/offers/route.js
import { NextResponse } from "next/server";
import { getOffers, createOffer, getLatestOffer } from "@/lib/offers";
import { verifyToken } from "@/lib/auth";

// ── GET /api/offers — public ──────────────────────────────────
export async function GET(req) {
  const { searchParams } = new URL(req.url);

  if (searchParams.get("latest") === "true") {
    const offer = await getLatestOffer();
    if (!offer) {
      return NextResponse.json({ error: "No offers found" }, { status: 404 });
    }
    return NextResponse.json(offer);
  }

  const offers = await getOffers();
  return NextResponse.json(offers);
}

// ── POST /api/offers — protected ─────────────────────────────
export async function POST(req) {
  const admin = verifyToken(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const offer = await req.json();
  if (!offer?.title || !offer?.slug) {
    return NextResponse.json(
      { error: "Missing title or slug" },
      { status: 400 },
    );
  }

  try {
    const insertedId = await createOffer(offer);
    return NextResponse.json({
      ok: true,
      offer: { ...offer, _id: insertedId },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Unable to create offer" },
      { status: 500 },
    );
  }
}
