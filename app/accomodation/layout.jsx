// Server layout so the (client) accommodation page can expose SEO metadata.
export const metadata = {
  title: "Student Accommodation in Ibadan",
  description:
    "Student accommodation for Aptech Ibadan learners across Agodi, Bodija and Ring Road — furnished rooms with Wi-Fi, 24/7 security and flexible plans.",
  alternates: {
    canonical: "/accomodation",
  },
  openGraph: {
    title: "Student Accommodation in Ibadan | Aptech Ibadan",
    description:
      "Furnished student accommodation close to Aptech Ibadan campuses in Ibadan.",
    url: "/accomodation",
  },
};

export default function AccommodationLayout({ children }) {
  return <>{children}</>;
}
