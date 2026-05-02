"use client";

import { Button } from "@/const";
import { ArrowRight, Headphones, Calendar } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="bg-[#020B2D] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/5 via-transparent to-transparent" />
      
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-6">
            <span className="text-[#FFC107] font-semibold">Limited Time Offer</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Not Sure Which Program is Right for You?
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mb-8">
            Speak with our academic advisors for personalized guidance based on your goals, background, and career aspirations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              classes="bg-[#FFC107] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 hover:bg-[#FFD700] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              link="/contact"
              text={<><Headphones size={18} /> Talk to Advisor</>}
            />
            <Button
              classes="border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 flex items-center gap-2"
              link="/apply"
              text={<><Calendar size={18} /> Schedule a Callback</>}
            />
          </div>

          <p className="mt-6 text-gray-400 text-sm">
            ⚡ Free career counseling session valued at ₦25,000 — available for limited time
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;