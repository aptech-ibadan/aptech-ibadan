"use client";

import { Users, Award, Target, Globe } from "lucide-react";

const AboutStats = () => {
  const stats = [
    { number: "1000+", label: "Students Trained", icon: Users },
    { number: "50+", label: "Expert Instructors", icon: Award },
    { number: "95%", label: "Job Placement Rate", icon: Target },
    { number: "10+", label: "Global Partners", icon: Globe }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-[#FFC107]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="text-[#FFC107]" size={32} />
              </div>
              <h4 className="text-3xl md:text-4xl font-bold text-[#020B2D] mb-2">
                {stat.number}
              </h4>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;