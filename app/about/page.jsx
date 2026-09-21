import AboutHero from "@/components/AboutHero";
import AboutMain from "@/components/AboutMain";
import AboutValues from "@/components/AboutValues";
import AboutMissionVision from "@/components/AboutMissionVision";
import AboutStats from "@/components/AboutStats";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Tastimonials";

export const metadata = {
  title: {
    absolute: "About Aptech Ibadan | IT Training in Ibadan",
  },
  description:
    "Learn about Aptech Ibadan, an IT training centre in Ibadan offering career-focused programmes in software development, cybersecurity, networking, multimedia, data science and more.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Aptech Ibadan | IT Training in Ibadan",
    description:
      "Aptech Ibadan is a technology training centre delivering career-focused IT programmes and short courses in Ibadan.",
    url: "/about",
  },
};

const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <AboutMain />
      <AboutValues />
      <AboutMissionVision />
      <AboutStats />
      <Testimonials />
      <AboutCTA />
      {/* <Footer /> */}
    </div>
  );
};

export default AboutPage;
