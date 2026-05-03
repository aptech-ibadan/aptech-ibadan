"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/const";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const ProgramsHero = () => {
  // Array of images for the carousel
  const carouselImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Students learning at Aptech"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=387&auto=format&fit=crop",
      alt: "Classroom session"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/ddldviftf/image/upload/v1777742251/Gemini_Generated_Image_13t7kj13t7kj13t7_irqdag.png",
      alt: "Computer lab"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1637946902191-57cf1fe3c056?q=80&w=858&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Students collaborating"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=871&auto=format&fit=crop",
      alt: "Coding session"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=736&auto=format&fit=crop",  
      alt: "Design workshop"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?q=80&w=1169&auto=format&fit=crop",
      alt: "Career counseling session"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselImages.length]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="bg-[#020B2D] text-white relative overflow-hidden">
      <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[750px] flex items-center">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1506&auto=format&fit=crop"
          alt="Aptech Programs"
          fill
          className="object-cover opacity-20"
          priority
          quality={100}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020B2D] via-[#020B2D]/95 to-[#020B2D]/70" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-0">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[#FFC107] uppercase tracking-widest text-sm font-semibold">
                Aptech Ibadan • Arena Multimedia
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl   font-bold leading-tight">
                Build Your Future With{" "}
                <span className="text-[#FFC107] relative inline-block">
                  Industry-Aligned Courses
                  <span className="absolute -bottom-1 left-0 w-[40%] h-1.5 bg-[#FFC107]/30 -z-10" />
                </span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
                From foundational skills to professional certifications — choose
                your path and become career-ready with Aptech's globally recognized programs.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  classes="bg-[#FFC107] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 hover:bg-[#FFD700] transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                  link="/apply"
                  text="Enroll Now"
                />
                <Button
                  classes="border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-center"
                  link="/program/#professional"
                  text="Explore Courses"
                />
              </div>
            </div>

            {/* Right Side Carousel - Desktop */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-6 bg-gradient-to-br from-[#FFC107]/30 via-transparent to-transparent rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-700" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-[#020B2D]/80 to-transparent border border-white/10">
                  {/* Carousel Image Container */}
                  <div className="relative h-[320px] sm:h-[380px] overflow-hidden">
                    {carouselImages.map((image, index) => (
                      <div
                        key={image.id}
                        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                          index === currentIndex ? "translate-x-0" : "translate-x-full"
                        }`}
                        style={{
                          transform: `translateX(${(index - currentIndex) * 100}%)`
                        }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          priority={index === 0}
                        />
                      </div>
                    ))}

                    {/* Subtle bottom overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020B2D] to-transparent z-10" />
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <button
                    onClick={goToNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>

                  {/* Auto-play Toggle Button */}
                  <button
                    onClick={toggleAutoPlay}
                    className="absolute bottom-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                  >
                    {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentIndex
                            ? "w-8 h-2 bg-[#FFC107]"
                            : "w-2 h-2 bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;