// Server layout so the (client) apply page can expose SEO metadata.
export const metadata = {
  title: {
    absolute: "Aptech Ibadan Admission | Apply for IT Courses",
  },
  description:
    "Apply for IT courses at Aptech Ibadan. Choose from software development, cybersecurity, networking, multimedia and other career-focused programmes.",
  alternates: {
    canonical: "/apply",
  },
  openGraph: {
    title: "Aptech Ibadan Admission | Apply for IT Courses",
    description:
      "Start your application for career-focused IT training at Aptech Ibadan.",
    url: "/apply",
  },
};

export default function ApplyLayout({ children }) {
  return <>{children}</>;
}
