import HomeClient from "./HomeClient";
import { BASE_URL, absoluteUrl } from "@/lib/seo";

const OG_IMAGE = {
  url: absoluteUrl("/og-image.jpg"),
  width: 1200,
  height: 630,
  alt: "Aptech Ibadan - IT Training and Professional Courses",
  type: "image/jpeg",
};

export const metadata = {
  title: {
    absolute: "IT Training in Ibadan | Aptech Ibadan",
  },
  description:
    "Looking for IT training in Ibadan? Aptech Ibadan offers career-focused courses in software development, cybersecurity, networking, multimedia and other technology skills.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: BASE_URL,
    siteName: "Aptech Ibadan",
    title: "IT Training in Ibadan | Aptech Ibadan",
    description:
      "Aptech Ibadan offers career-focused IT training in Ibadan covering software development, cybersecurity, networking, multimedia and other technology skills.",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Training in Ibadan | Aptech Ibadan",
    description:
      "Career-focused IT training in Ibadan covering software development, cybersecurity, networking, multimedia and more.",
    images: [absoluteUrl("/og-image.jpg")],
  },
};

const HomePage = () => {
  return <HomeClient />;
};

export default HomePage;
