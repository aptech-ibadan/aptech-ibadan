"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Clock, Award, Users, Briefcase, Cpu, CheckCircle, ArrowRight, Play } from "lucide-react";
import { Button } from "@/const";

const CourseModal = ({ course, onClose }) => {
  // Close on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
        >
          <X size={24} className="text-[#020B2D]" />
        </button>

        {/* Hero Image Section */}
        <div className="relative h-64 md:h-80 lg:h-96">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Course Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-[#FFC107] text-black text-xs font-bold px-3 py-1 rounded-full">
                {course.category}
              </span>
              <span className="bg-white/20 backdrop-blur text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <Clock size={12} /> {course.duration}
              </span>
              <span className="bg-white/20 backdrop-blur text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <Award size={12} /> {course.certification}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {course.title}
            </h2>
            {course.subtitle && (
              <p className="text-gray-200 text-lg mt-2">{course.subtitle}</p>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-[#020B2D] mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#FFC107] rounded-full"></span>
                  About This Course
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {course.longDescription}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold text-[#020B2D] mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#FFC107] rounded-full"></span>
                  What You'll Learn
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {course.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-[#FFC107] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-bold text-[#020B2D] mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#FFC107] rounded-full"></span>
                  <Cpu size={18} /> Technologies Covered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Paths */}
              <div>
                <h3 className="text-xl font-bold text-[#020B2D] mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#FFC107] rounded-full"></span>
                  <Briefcase size={18} /> Career Opportunities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.careerPaths.map((career, idx) => (
                    <span
                      key={idx}
                      className="bg-[#FFC107]/10 text-[#FFC107] px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Video & Gallery */}
            <div className="space-y-6">
              {/* Course Video */}
              <div>
                <h3 className="text-lg font-bold text-[#020B2D] mb-3 flex items-center gap-2">
                  <Play size={18} className="text-[#FFC107]" /> Course Preview
                </h3>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src={course.videoUrl}
                    title={`${course.title} Preview`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Gallery */}
              {course.gallery && course.gallery.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-[#020B2D] mb-3">
                    Course Gallery
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {course.gallery.map((img, idx) => (
                      <div key={idx} className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={img}
                          alt={`${course.title} gallery ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Enroll Button */}
              <div className="bg-gradient-to-r from-[#020B2D] to-[#010725] rounded-2xl p-6 text-center">
                <h4 className="text-white font-bold text-xl mb-2">Ready to Start?</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Join this program and take the first step toward your dream career.
                </p>
                <Button
                  classes="bg-[#FFC107] text-black w-full py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  link="/apply"
                  text="Enroll Now →"
                />
                <p className="text-gray-400 text-xs mt-3">
                  Limited seats available for next batch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;