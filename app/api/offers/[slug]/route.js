// app/api/offers/[slug]/route.js
import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
 import { verifyToken } from "@/lib/auth";
import Offers from "@/model/Offers";

// ── GET /api/offers/[slug] — public ──────────────────────────
export async function GET(req, { params }) {
  try {
    await dbConnect();
    const offer = await Offers.findOne({ slug: params.slug }).lean();
    if (!offer) {
      return NextResponse.json({ error: "Offer not found" }, { status: 404 });
    }
    return NextResponse.json(offer);
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// ── PATCH /api/offers/[slug] — protected ─────────────────────
export async function PATCH(req, { params }) {
  const admin = verifyToken(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();

    const updates = await req.json();
    if (!updates || Object.keys(updates).length === 0) {
      return NextResponse.json(
        { error: "No update data provided" },
        { status: 400 },
      );
    }

    const updated = await Offers.findOneAndUpdate(
      { slug: params.slug },
      { $set: updates },
      { new: true },
    ).lean();

    if (!updated) {
      return NextResponse.json({ error: "Offer not found" }, { status: 404 });
    }

    return NextResponse.json({ ok: true, offer: updated });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// ── DELETE /api/offers/[slug] — protected ────────────────────
export async function DELETE(req, { params }) {
  const admin = verifyToken(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();

    const removed = await Offers.findOneAndDelete({ slug: params.slug });
    if (!removed) {
      return NextResponse.json({ error: "Offer not found" }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}