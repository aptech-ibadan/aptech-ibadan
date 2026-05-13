import { NextResponse } from "next/server";
import { getOfferBySlug, updateOfferBySlug, deleteOfferBySlug } from "@/lib/offers";
import { verifyAdminRequest } from "@/lib/auth";

export async function GET(req, { params }) {
  const offer = await getOfferBySlug(params.slug);
  if (!offer) {
    return NextResponse.json({ error: "Offer not found" }, { status: 404 });
  }
  return NextResponse.json(offer);
}

export async function PATCH(req, { params }) {
  const admin = verifyAdminRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const updates = await req.json();
  if (!updates || Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "No update data provided" }, { status: 400 });
  }

  try {
    const updated = await updateOfferBySlug(params.slug, updates);
    if (!updated) {
      return NextResponse.json({ error: "Offer not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true, offer: updated });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Unable to update offer" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const admin = verifyAdminRequest(req);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const removed = await deleteOfferBySlug(params.slug);
    if (!removed) {
      return NextResponse.json({ error: "Offer not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Unable to delete offer" }, { status: 500 });
  }
}
