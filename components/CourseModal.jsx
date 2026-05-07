"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, Clock, Award, Users, Briefcase, Cpu, CheckCircle, ArrowRight, Play } from "lucide-react";
import { Button } from "@/const";

const CourseModal = ({ course, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const contentRef = useRef(null);
  const animatedElementsRef = useRef([]);

  // Animate elements on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    animatedElementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Trigger entrance animation
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const addToRefs = (el, index) => {
    if (el && !animatedElementsRef.current.includes(el)) {
      animatedElementsRef.current.push(el);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
        isVisible ? "bg-black/80 backdrop-blur-sm" : "bg-black/0 backdrop-blur-none"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10"
        } ${isClosing ? "scale-90 opacity-0 translate-y-5" : ""}`}
        onClick={(e) => e.stopPropagation()}
        ref={contentRef}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300 hover:rotate-90 hover:scale-110 active:scale-95"
        >
          <X size={24} className="text-[#020B2D]" />
        </button>

        {/* Hero Image Section */}
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <div className="absolute inset-0 animate-scaleIn">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Course Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 animate-slideUp">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {course.category && (
                <span className="bg-[#FFC107] text-black text-xs font-bold px-3 py-1 rounded-full animate-pulse-subtle">
                  {course.category}
                </span>
              )}
              {course.duration && (
                <span className="bg-white/20 backdrop-blur text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 hover:bg-white/30 transition-all duration-300">
                  <Clock size={12} className="animate-spin-slow" /> {course.duration}
                </span>
              )}
              {course.certification && (
                <span className="bg-white/20 backdrop-blur text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 hover:bg-white/30 transition-all duration-300">
                  <Award size={12} className="animate-bounce-subtle" /> {course.certification}
                </span>
              )}
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white animate-slideRight">
              {course.title}
            </h2>
            {course.subtitle && (
              <p className="text-gray-200 text-lg mt-2 animate-slideRight animation-delay-100">
                {course.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div
                ref={(el) => addToRefs(el, 0)}
                className="transform transition-all duration-700 opacity-0 translate-y-8"
              >
                <h3 className="text-xl font-bold text-[#020B2D] mb-3 flex items-center gap-2 group">
                  <span className="w-1 h-6 bg-[#FFC107] rounded-full group-hover:h-8 transition-all duration-300"></span>
                  About This Course
                </h3>
                <p className="text-gray-700 leading-relaxed hover:translate-x-1 transition-transform duration-300">
                  {course.longDescription}
                </p>
              </div>

              {/* Key Features */}
              <div
                ref={(el) => addToRefs(el, 1)}
                className="transform transition-all duration-700 opacity-0 translate-y-8"
              >
                <h3 className="text-xl font-bold text-[#020B2D] mb-3 flex items-center gap-2 group">
                  <span className="w-1 h-6 bg-[#FFC107] rounded-full group-hover:h-8 transition-all duration-300"></span>
                  What You'll Learn
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {course?.keyFeatures?.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 group/item hover:translate-x-2 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <CheckCircle size={18} className="text-[#FFC107] mt-0.5 flex-shrink-0 group-hover/item:rotate-12 transition-transform duration-300" />
                      <span className="text-gray-700 text-sm group-hover/item:text-[#020B2D] transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div
                ref={(el) => addToRefs(el, 2)}
                className="transform transition-all duration-700 opacity-0 translate-y-8"
              >
                <h3 className="text-xl font-bold text-[#020B2D] mb-3 flex items-center gap-2 group">
                  <span className="w-1 h-6 bg-[#FFC107] rounded-full group-hover:h-8 transition-all duration-300"></span>
                  <Cpu size={18} className="group-hover:rotate-12 transition-transform duration-300" /> Technologies Covered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-[#FFC107] hover:text-black hover:scale-105 transition-all duration-300 cursor-default"
                      style={{ transitionDelay: `${idx * 30}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Paths */}
              <div
                ref={(el) => addToRefs(el, 3)}
                className="transform transition-all duration-700 opacity-0 translate-y-8"
              >
                <h3 className="text-xl font-bold text-[#020B2D] mb-3 flex items-center gap-2 group">
                  <span className="w-1 h-6 bg-[#FFC107] rounded-full group-hover:h-8 transition-all duration-300"></span>
                  <Briefcase size={18} className="group-hover:translate-x-1 transition-transform duration-300" /> Career Opportunities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.careerPaths.map((career, idx) => (
                    <span
                      key={idx}
                      className="bg-[#FFC107]/10 text-[#FFC107] px-3 py-1 rounded-full text-sm font-medium hover:bg-[#FFC107] hover:text-black hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-default"
                      style={{ transitionDelay: `${idx * 50}ms` }}
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
              {/* {course.videoUrl && (
                <div
                  ref={(el) => addToRefs(el, 4)}
                  className="transform transition-all duration-700 opacity-0 translate-y-8"
                >
                  <h3 className="text-lg font-bold text-[#020B2D] mb-3 flex items-center gap-2 group">
                    <Play size={18} className="text-[#FFC107] group-hover:scale-110 transition-transform duration-300" /> 
                    Course Preview
                  </h3>
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg group/video">
                    <iframe
                      src={course.videoUrl}
                      title={`${course.title} Preview`}
                      className="w-full h-full transition-transform duration-500 group-hover/video:scale-105"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/video:bg-black/20 transition-all duration-300 pointer-events-none" />
                  </div>
                </div>
              )} */}

              {/* Gallery */}
              {/* {course.gallery && course.gallery.length > 0 && (
                <div
                  ref={(el) => addToRefs(el, 5)}
                  className="transform transition-all duration-700 opacity-0 translate-y-8"
                >
                  <h3 className="text-lg font-bold text-[#020B2D] mb-3">
                    Course Gallery
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {course?.gallery?.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group/gallery"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <Image
                          src={img}
                          alt={`${course.title} gallery ${idx + 1}`}
                          fill
                          className="object-cover transition-all duration-500 group-hover/gallery:scale-110 group-hover/gallery:rotate-2"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/gallery:bg-black/30 transition-all duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              )} */}

              {/* Enroll Button */}
              <div
                ref={(el) => addToRefs(el, 6)}
                className="transform transition-all duration-700 opacity-0 translate-y-8"
              >
                <div className="bg-gradient-to-r from-[#020B2D] to-[#010725] rounded-2xl p-6 text-center relative overflow-hidden group/enroll">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/0 via-[#FFC107]/10 to-[#FFC107]/0 translate-x-[-100%] group-hover/enroll:translate-x-[100%] transition-transform duration-1000" />
                  <h4 className="text-white font-bold text-xl mb-2 group-hover/enroll:scale-105 transition-transform duration-300">
                    Ready to Start?
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 group-hover/enroll:translate-y-[-2px] transition-transform duration-300">
                    Join this program and take the first step toward your dream career.
                  </p>
                  <Button
                    classes="bg-[#FFC107] text-black w-full py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    link="/contact"
                    text="Enroll Now"
                  />
                  <p className="text-gray-400 text-xs mt-3 animate-pulse-subtle">
                    Limited seats available for next batch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideRight {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes pulseSubtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounceSubtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease-out forwards !important;
        }

        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }

        .animate-slideRight {
          animation: slideRight 0.6s ease-out forwards;
        }

        .animate-pulse-subtle {
          animation: pulseSubtle 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 3s linear infinite;
        }

        .animate-bounce-subtle {
          animation: bounceSubtle 1s ease-in-out infinite;
        }

        .animation-delay-100 {
          animation-delay: 100ms;
        }

        .opacity-0 {
          opacity: 0;
        }

        .translate-y-8 {
          transform: translateY(32px);
        }
      `}</style>
    </div>
  );
};

export default CourseModal;