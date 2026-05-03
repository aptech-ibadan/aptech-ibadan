"use client";

import Image from "next/image";
import { Button } from "@/const";
import { ArrowDown, Briefcase, TrendingUp, Users } from "lucide-react";

const CareerHero = () => {
  return (
    <section className="bg-[#020B2D] text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="relative min-h-[600px] md:min-h-[700px] flex items-center">
        <Image
          src="/images/career-hero.jpg"
          alt="Career at Aptech"
          fill
          className="object-cover opacity-20"
          priority
          quality={100}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020B2D] via-[#020B2D]/95 to-[#020B2D]/70" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[#FFC107] uppercase tracking-widest text-sm font-semibold">
                Join Our Team
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Discover New{" "}
                <span className="text-[#FFC107] relative inline-block">
                  Opportunities
                  <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#FFC107]/30 -z-10" />
                </span>
                <br />
                and Join a Team That Gets You There
              </h1>

              <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
                Join our dynamic team and embark on a fulfilling career where
                innovation, collaboration, and growth are at the heart of everything
                we do. At Aptech, we value diverse perspectives and foster a culture
                of inclusivity and respect.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  classes="bg-[#FFC107] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 hover:bg-[#FFD700] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                  link="#openings"
                  text={
                    <div className="flex gap-4">
                    <ArrowDown size={18} />  View Open Roles 
                    </div>
                  }
                />
                <Button
                  classes="border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  link="#culture"
                  text={
                    <div className="flex gap-4">
                      <Users size={18} /> Our Culture
                    </div>
                  }
                />
              </div>
            </div>

            {/* Right Side Stats */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <Briefcase className="text-[#FFC107] mb-3" size={32} />
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm text-gray-300">Team Members</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <TrendingUp className="text-[#FFC107] mb-3" size={32} />
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm text-gray-300">Years of Excellence</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 col-span-2">
                  <Users className="text-[#FFC107] mb-3" size={32} />
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-sm text-gray-300">Students Impacted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;