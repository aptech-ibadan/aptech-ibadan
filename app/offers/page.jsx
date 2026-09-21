import OffersPageClient from "@/components/offers/OffersPageClient";
import { getOffers } from "@/lib/offers";

export const metadata = {
  title: "Discount Offers",
  description:
    "Current enrolment offers and discounts on IT training programmes and short courses at Aptech Ibadan.",
  alternates: {
    canonical: "/offers",
  },
  openGraph: {
    title: "Discount Offers | Aptech Ibadan",
    description:
      "Current enrolment offers and discounts on IT programmes and short courses at Aptech Ibadan.",
    url: "/offers",
  },
};

const getSortedOffers = (offers) => {
  const now = new Date();

  return [...offers].sort((a, b) => {
    const aEnd = new Date(a.endDate);
    const bEnd = new Date(b.endDate);
    const aEnded = aEnd < now;
    const bEnded = bEnd < now;

    // If one is ended and the other isn't, ended goes last
    if (aEnded && !bEnded) return 1;
    if (!aEnded && bEnded) return -1;

    // If both active, sort by soonest first
    if (!aEnded && !bEnded) {
      return aEnd - bEnd;
    }

    // If both ended, sort by most recent first
    return bEnd - aEnd;
  });
};

const OffersPage = async () => {
  const offers = await getOffers();
  const sortedOffers = getSortedOffers(offers);

  return <OffersPageClient offers={sortedOffers} />;
};

export default OffersPage;
