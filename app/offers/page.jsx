import OffersPageClient from "@/components/offers/OffersPageClient";
import { campaignOffers } from "@/data/campaignOffers";

const OffersPage = () => {
  return <OffersPageClient offers={campaignOffers} />;
};

export default OffersPage;
