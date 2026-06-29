import { serializeDoc } from "./serialize";

async function withDb(fn) {
  const dbConnect = (await import("./mongodb")).default;
  await dbConnect();
  const Offers = (await import("@/model/Offers")).default;
  return fn(Offers);
}

export async function getOffers() {
  try {
    const offers = await withDb((Offers) => Offers.find().sort({ endDate: 1 }).lean());
    return serializeDoc(offers);
  } catch {
    throw new Error("Failed to fetch offers");
  }
}

export async function getOfferBySlug(slug) {
  try {
    const offer = await withDb((Offers) => Offers.findOne({ slug }).lean());
    if (offer) return serializeDoc(offer);
  } catch {
    throw new Error("Failed to fetch offer");
  }
  return null;
}

export async function getLatestOffer() {
  try {
    const now = new Date();
    
    // Find active offers (endDate > now) and sort by endDate (soonest first)
    const offer = await withDb((Offers) =>
      Offers.find({
        endDate: { $gt: now }
      })
      .sort({ endDate: 1 }) // 1 = ascending (soonest first)
      .limit(1)
      .lean()
    );

    if (!offer || offer.length === 0) return null;

    const serializedOffer = serializeDoc(offer[0]);
    return serializedOffer;
  } catch {
    throw new Error("Failed to fetch latest offer");
  }
}

export async function createOffer(offer) {
  const newOffer = await withDb((Offers) => Offers.create(offer));
  return newOffer._id;
}

export async function updateOfferBySlug(slug, updates) {
  return withDb((Offers) =>
    Offers.findOneAndUpdate({ slug }, { $set: updates }, { new: true }).lean(),
  );
}

export async function deleteOfferBySlug(slug) {
  const result = await withDb((Offers) => Offers.deleteOne({ slug }));
  return result.deletedCount > 0;
}
