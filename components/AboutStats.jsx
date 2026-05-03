"use client";

import { Users, Award, Target, Globe, MapPin } from "lucide-react";

const AboutStats = () => {
  const stats = [
    { number: "1000+", label: "Students Trained", icon: Users },
    { number: "50+", label: "Expert Instructors", icon: Award },
    { number: "95%", label: "Job Placement Rate", icon: Target },
    { number: "10+", label: "Global Partners", icon: Globe },
    { number: "2", label: "Campuses in Ibadan", icon: MapPin },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Centered Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-[#FFC107]/10 text-[#FFC107] text-sm font-medium px-6 py-2.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#FFC107] rounded-full animate-pulse" />
            Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#020B2D] mb-4">
            Aptech By The Numbers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforming tech education with world-class facilities and expert instruction
          </p>
        </div>

        {/* Centered Stats Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-[#FFC107]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-[#FFC107]" size={30} />
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-[#020B2D] mb-2">
                  {stat.number}
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;