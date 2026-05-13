import { getDb } from "@/lib/mongodb";
import { campaignOffers } from "@/data/campaignOffers";

export async function getOffers() {
  try {
    const db = await getDb();
    const offers = await db.collection("offers").find().sort({ endDate: 1 }).toArray();
    return offers.length ? offers : campaignOffers;
  } catch (error) {
    return campaignOffers;
  }
}

export async function getOfferBySlug(slug) {
  try {
    const db = await getDb();
    const offer = await db.collection("offers").findOne({ slug });
    if (offer) return offer;
  } catch (error) {
    // ignore and fall back to static data
  }
  return campaignOffers.find((item) => item.slug === slug) || null;
}

export async function createOffer(offer) {
  const db = await getDb();
  const result = await db.collection("offers").insertOne(offer);
  return result.insertedId;
}

export async function updateOfferBySlug(slug, updates) {
  const db = await getDb();
  const result = await db.collection("offers").findOneAndUpdate(
    { slug },
    { $set: updates },
    { returnDocument: "after" }
  );
  return result.value;
}

export async function deleteOfferBySlug(slug) {
  const db = await getDb();
  const result = await db.collection("offers").deleteOne({ slug });
  return result.deletedCount > 0;
}
