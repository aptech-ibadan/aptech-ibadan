"use client";

import Campus from "@/components/Campus";
import CampaignPopup from "@/components/offers/CampaignPopup";
import PublicityPopup from "@/components/offers/PublicityPopup";
import Enroll from "@/components/Enroll";
import OpenDay from "@/components/OpenDay";
import Footer from "@/components/Footer";
import GlobalAlliance from "@/components/GlobalAlliance";
import Hero from "@/components/HeroSection";
import InfoBox from "@/components/InfoBox";
import Partners from "@/components/Partners";
import Programs from "@/components/Programs";
import Question from "@/components/Question";
import Work from "@/components/Work";
import { useState } from "react";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <PublicityPopup />
      <CampaignPopup open={open} setOpen={setOpen} />
      <Hero />
      <GlobalAlliance />
      {/* <Partners /> */}
      <Work />
      <InfoBox />
      <Programs />
      <Campus />
      <Enroll />
      <OpenDay />
      <Question />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
