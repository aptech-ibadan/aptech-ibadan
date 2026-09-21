// Server layout so the (client) careers page can expose SEO metadata.
export const metadata = {
  title: "Careers & Job Openings",
  description:
    "Explore career opportunities and open roles at Aptech Ibadan, an IT training centre in Ibadan, Nigeria.",
  alternates: {
    canonical: "/career",
  },
  openGraph: {
    title: "Careers & Job Openings | Aptech Ibadan",
    description:
      "Join the team at Aptech Ibadan. View current openings and career opportunities.",
    url: "/career",
  },
};

export default function CareerLayout({ children }) {
  return <>{children}</>;
}
