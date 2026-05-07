import AboutHero from "@/components/AboutHero";
import AboutMain from "@/components/AboutMain";
import AboutValues from "@/components/AboutValues";
import AboutMissionVision from "@/components/AboutMissionVision";
import AboutStats from "@/components/AboutStats";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Tastimonials";

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
      <Footer />
    </div>
  );
};

export default AboutPage;
