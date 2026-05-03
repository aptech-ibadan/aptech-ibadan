"use client";

import { 
  Coffee, 
  GraduationCap, 
  HeartHandshake, 
  Laptop, 
  Calendar, 
  Trophy,
  Plane,
  Home,
  Briefcase
} from "lucide-react";

const CareerBenefits = () => {
  const benefits = [
    {
      icon: Coffee,
      title: "Flexible Work Hours",
      description: "Balance your work and personal life with flexible scheduling options."
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Continuous learning opportunities, workshops, and certification support."
    },
    {
      icon: HeartHandshake,
      title: "Health Insurance",
      description: "Comprehensive health coverage for you and your family."
    },
    {
      icon: Laptop,
      title: "Remote Work Options",
      description: "Work from home flexibility with necessary equipment provided."
    },
    {
      icon: Calendar,
      title: "Paid Time Off",
      description: "Generous vacation days, sick leave, and public holidays."
    },
    {
      icon: Trophy,
      title: "Performance Bonuses",
      description: "Recognition and rewards for exceptional performance."
    },
    {
      icon: Plane,
      title: "Team Retreats",
      description: "Annual team building events and retreats."
    },
    {
      icon: Home,
      title: "Relocation Support",
      description: "Assistance for candidates relocating to Ibadan."
    }
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-[#FFC107]/10 text-[#FFC107] text-sm font-medium px-6 py-2.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#FFC107] rounded-full animate-pulse" />
            Why Join Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020B2D] mb-4">
            Benefits & Perks
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We take care of our team so you can focus on doing your best work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-[#FFC107]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="text-[#FFC107]" size={28} />
              </div>
              <h3 className="font-bold text-lg text-[#020B2D] mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerBenefits;