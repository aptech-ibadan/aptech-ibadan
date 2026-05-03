"use client";

import { useState } from "react";
import CareerHero from "@/components/CareerHero";
import CareerCulture from "@/components/CareerCulture";
import CareerBenefits from "@/components/CareerBenefits";
import CareerOpenings from "@/components/CareerOpenings";
import CareerCTA from "@/components/CareerCTA";
import Footer from "@/components/Footer";
import JobModal from "@/components/JobModal";

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div>
      <CareerHero />
      <CareerCulture />
      <CareerBenefits />
      <CareerOpenings openModal={openModal} />
      <CareerCTA />
      <Footer />
      
      {/* Job Modal */}
      {isModalOpen && selectedJob && (
        <JobModal job={selectedJob} onClose={closeModal} />
      )}
    </div>
  );
};

export default CareerPage;