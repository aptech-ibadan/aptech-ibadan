"use client";

import { Award, Lightbulb, Users, Shield, Globe, Heart } from "lucide-react";

const AboutValues = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We are committed to delivering top-notch education and ensuring our students are well-prepared for their careers.",
      highlight: true
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously seek new and creative ways to enhance our curriculum and teaching methods to stay ahead in the tech industry.",
      highlight: false
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We foster a collaborative learning environment where students, instructors, and industry partners work together to achieve shared goals.",
      highlight: false
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct our business with the highest ethical standards, ensuring transparency, honesty, and respect in all our dealings.",
      highlight: false
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "We are dedicated to minimizing our environmental impact and promoting sustainability in all aspects of our operations.",
      highlight: false
    },
    {
      icon: Heart,
      title: "Community",
      description: "We believe in giving back to the community and making a positive impact through our corporate social responsibility initiatives.",
      highlight: false
    }
  ];

  return (
    <section className="py-16 bg-[#020B2D] px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-[#FFC107]/10 text-[#FFC107] text-sm font-medium px-6 py-2.5 rounded-full mb-4">
            <span className="w-2 h-2 bg-[#FFC107] rounded-full animate-pulse" />
            OUR VALUES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Guides Us
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Our core principles that drive excellence in tech education
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group
                ${value.highlight ? "bg-[#FFC107]" : "bg-white"}`}
            >
              <div className="p-8">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110
                  ${value.highlight ? "bg-[#020B2D]" : "bg-[#FFC107]/10"}`}>
                  <value.icon 
                    size={32} 
                    className={value.highlight ? "text-[#FFC107]" : "text-[#FFC107]"}
                  />
                </div>
                
                <h3 className={`font-bold text-xl mb-3 ${value.highlight ? "text-[#020B2D]" : "text-[#020B2D]"}`}>
                  {value.title}
                </h3>
                
                <p className={`text-sm leading-relaxed ${value.highlight ? "text-[#020B2D]/80" : "text-gray-600"}`}>
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;