import OffersPageClient from "@/components/offers/OffersPageClient";
import { getOffers } from "@/lib/offers";

const OffersPage = async () => {
  const offers = await getOffers();
  return <OffersPageClient offers={offers} />;
};

export default OffersPage;
