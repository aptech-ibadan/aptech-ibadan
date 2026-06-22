// model/Offers.js
import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    discount: { type: String },
    endDate: { type: Date },
    audience: { type: String },
    image: { type: String },
  },
  { timestamps: true },
);

export default mongoose.models.Offer || mongoose.model("Offer", OfferSchema);