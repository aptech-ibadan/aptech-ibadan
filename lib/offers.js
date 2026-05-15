// lib/offers.js
import Offers from "@/model/Offers";
import dbConnect from "./mongodb";

export async function getOffers() {
  try {
    await dbConnect();
    const offers = await Offers.find().sort({ endDate: 1 }).lean();
    return offers.length ? offers : [];
  } catch (error) {
    throw new Error("Failed to fetch offers");
  }
}

export async function getOfferBySlug(slug) {
  try {
    await dbConnect();
    const offer = await Offers.findOne({ slug }).lean();
    if (offer) return offer;
  } catch (error) {
    throw new Error("Failed to fetch offer");
  }
  return null;
}
export async function getLatestOffer() {
  try {
    await dbConnect();
    const offer = await Offers.findOne().sort({ endDate: -1 }).lean();
    
    if (!offer) return null;

    // manually check if still active
    const isActive = new Date(offer.endDate) > new Date();
    return isActive ? offer : null;
  } catch (error) {
    throw new Error("Failed to fetch latest offer");
  }
}

export async function createOffer(offer) {
  await dbConnect();
  const newOffer = await Offers.create(offer);
  return newOffer._id;
}

export async function updateOfferBySlug(slug, updates) {
  await dbConnect();
  const updated = await Offers.findOneAndUpdate(
    { slug },
    { $set: updates },
    { new: true },
  ).lean();
  return updated;
}

export async function deleteOfferBySlug(slug) {
  await dbConnect();
  const result = await Offers.deleteOne({ slug });
  return result.deletedCount > 0;
}
