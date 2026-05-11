"use client";

import { useState } from "react";
import ProgramsHero from "@/components/ProgramsHero";
import CareerCourses from "@/components/CareerCourses";
import SmartProfessionalCourses from "@/components/SmartProfessionalCourses";
import SkillBuilderCourses from "@/components/SkillBuilderCourses";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import CourseModal from "@/components/CourseModal";

const ProgramsPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (course) => {
    setSelectedCourse(course);
    console.log(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <div className="">
      <ProgramsHero />
      <CareerCourses openModal={openModal} />
      <SmartProfessionalCourses openModal={openModal} />
      <SkillBuilderCourses openModal={openModal} />
      <CtaSection />
      {/* <Footer /> */}

      {/* Modal */}
      {isModalOpen && selectedCourse && (
        <CourseModal course={selectedCourse} onClose={closeModal} />
      )}
    </div>
  );
};

export default ProgramsPage;
