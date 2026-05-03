"use client";

import { Button } from "@/const";

const AboutCTA = () => {
  return (
    <section className="bg-[#020B2D] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#FFC107_0%,transparent_50%)] opacity-10" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-6">
            <span className="text-[#FFC107] font-semibold">Start Your Journey</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Ready to Build Your Future in Tech?
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mb-8">
            Join Aptech Agodi today and take the first step towards a rewarding career in technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              classes="bg-[#FFC107] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 hover:bg-[#FFD700] transition-all duration-300 shadow-lg hover:shadow-xl"
              link="/apply"
              text="Enroll Now"
            />
            <Button
              classes="border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
              link="/contact"
              text="Contact Admissions"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;