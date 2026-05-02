import Campus from "@/components/Campus";
import Enroll from "@/components/Enroll";
import Footer from "@/components/Footer";
import Hero from "@/components/HeroSection";
import InfoBox from "@/components/InfoBox";
import Partners from "@/components/Partners";
import Programs from "@/components/Programs";
import Question from "@/components/Question";
import Work from "@/components/Work";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <Work />
      <InfoBox />
      <Programs />
      <Campus />
      <Enroll />
      <Question />
      <Footer />
    </div>
  );
};

export default HomePage;
