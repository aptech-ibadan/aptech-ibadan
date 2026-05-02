"use client";

import Image from "next/image";

const ProgramsHero = () => {
  return (
    <section className="bg-[#020B2D] text-white relative overflow-hidden">
      <div className="relative min-h-[450px] md:min-h-[500px] flex items-center">
        <Image
          src="/images/programs-hero.jpg"
          alt="Aptech Programs"
          fill
          className="object-cover opacity-20"
          priority
          quality={100}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#020B2D] via-[#020B2D]/95 to-[#020B2D]/70" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-[#FFC107] uppercase tracking-widest text-sm font-semibold mb-4">
              World-Class Programs
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Build Your Future With{" "}
              <span className="text-[#FFC107] relative inline-block">
                Industry-Aligned Courses
                <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#FFC107]/30 -z-10" />
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              From foundational skills to professional certifications — choose
              your path and become career-ready with Aptech's globally recognized programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;