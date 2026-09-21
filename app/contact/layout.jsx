// Server layout so the (client) contact page can expose SEO metadata.
export const metadata = {
  title: {
    absolute: "Contact Aptech Ibadan | IT Training Centre",
  },
  description:
    "Contact Aptech Ibadan. Visit our Agodi, Ring Road or Bodija campuses, call an admissions advisor, or chat with us to enrol in an IT course.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Aptech Ibadan | IT Training Centre",
    description:
      "Reach Aptech Ibadan at our Agodi, Ring Road or Bodija campuses to enquire about IT training and admissions.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
