"use client";

import { Target, Eye } from "lucide-react";

const AboutMissionVision = () => {
  return (
    <section className="bg-[#020B2D] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#FFC107_0%,transparent_50%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(at_bottom_left,#3B82F6_0%,transparent_60%)] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-[#FFC107]/30 transition-all duration-300 group">
            <div className="w-16 h-16 bg-[#FFC107]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="text-[#FFC107]" size={36} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              To provide high-quality, accessible education in computer programming. 
              We aim to inspire and empower students to achieve their full potential, 
              fostering a lifelong love for coding and continuous learning.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-[#FFC107]/30 transition-all duration-300 group">
            <div className="w-16 h-16 bg-[#FFC107]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye className="text-[#FFC107]" size={36} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              We envision a world where anyone with the passion and dedication can become 
              a proficient programmer. By offering comprehensive, hands-on training, we 
              strive to bridge the gap between aspiring developers and the tech industry's 
              ever-evolving demands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;