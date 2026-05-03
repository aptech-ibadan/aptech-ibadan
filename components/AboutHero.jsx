"use client";

import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="bg-[#020B2D] text-white relative overflow-hidden">
      <div className="relative min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <Image
          src="/images/hero.jpg"
          alt="About Aptech"
          fill
          className="object-cover opacity-20"
          priority
          quality={100}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020B2D] via-[#020B2D]/95 to-[#020B2D]/70" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12  py-20">
          {/* Left Aligned Content */}
          <div className="max-w-3xl">
            <p className="text-[#FFC107] uppercase tracking-widest text-sm font-semibold mb-4">
              About Aptech Agodi
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Nigeria's Premier{" "}
              <span className="text-[#FFC107] relative inline-block">
                I.T Institute
                <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#FFC107]/30 -z-10" />
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl">
              Welcome to Aptech Agodi, a leading center for technology education and digital skills development. 
              We are dedicated to equipping students, professionals, and business owners with practical, 
              industry-relevant knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;