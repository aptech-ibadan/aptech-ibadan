"use client";

import Image from "next/image";
import { Heart, Target, Shield, Zap, Users, Award } from "lucide-react";

const CareerCulture = () => {
  const values = [
    {
      icon: Heart,
      title: "Inclusive Environment",
      description: "We celebrate diverse perspectives and foster a culture of respect and belonging for everyone."
    },
    {
      icon: Target,
      title: "Growth Mindset",
      description: "Continuous learning and professional development are at the core of our philosophy."
    },
    {
      icon: Shield,
      title: "Work-Life Balance",
      description: "Flexible work options and supportive policies that respect your personal time."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We encourage creative thinking and reward innovative solutions to challenges."
    }
  ];

  return (
    <section id="culture" className="relative bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FFC107]/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/teams.jpg"
                alt="Team at Aptech"
                width={600}
                height={500}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#FFC107] text-black px-6 py-3 rounded-xl shadow-lg">
              <Users size={24} className="inline mr-2" />
              <span className="font-bold">Join Our Family</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-3 bg-[#FFC107]/10 text-[#FFC107] text-sm font-medium px-6 py-2.5 rounded-full mb-4">
              <span className="w-2 h-2 bg-[#FFC107] rounded-full animate-pulse" />
              Our Culture
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020B2D] mb-6">
              A Workplace Where You Can
              <span className="text-[#FFC107]"> Thrive</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              At Aptech Agodi, we believe that our greatest asset is our people. We are
              committed to creating an environment where innovation thrives,
              collaboration is key, and every team member feels valued and
              empowered. Our inclusive culture celebrates diversity and
              encourages continuous learning and professional growth.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              With competitive benefits, flexible work options, and numerous
              opportunities for advancement, we ensure that our employees have
              the resources they need to succeed both personally and
              professionally. Whether you're an experienced professional or just
              starting your career, you'll find a supportive community and a
              place where your contributions truly make a difference.
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition">
                  <div className="w-10 h-10 bg-[#FFC107]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-[#FFC107]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#020B2D] mb-1">{value.title}</h4>
                    <p className="text-gray-500 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCulture;