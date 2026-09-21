// Server layout so the (client) programs page can expose SEO metadata.
export const metadata = {
  title: "IT Courses & Programmes in Ibadan",
  description:
    "Explore career-focused IT programmes and short courses at Aptech Ibadan — software development, cybersecurity, networking, multimedia, data science and more.",
  alternates: {
    canonical: "/program",
  },
  openGraph: {
    title: "IT Courses & Programmes in Ibadan | Aptech Ibadan",
    description:
      "Career-focused IT programmes and short courses in Ibadan: software development, cybersecurity, networking, multimedia and more.",
    url: "/program",
  },
};

export default function ProgramLayout({ children }) {
  return <>{children}</>;
}
