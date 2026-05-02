"use client";

import Image from "next/image";
import { Button } from "@/const";

const AboutMain = () => {
  return (
    <section className="relative bg-[#020B2D] text-white py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-700/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-700/30 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* TEXT SIDE */}
          <div>
            <p className="uppercase tracking-[4px] text-sm text-blue-400 mb-3">
              Who We Are
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Building Global Careers Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Tech Education
              </span>
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              At Aptech Agodi, our programs cover key areas such as software development, 
              data analysis, networking, cybersecurity, and digital design. Backed by global 
              standards from Aptech Computer Education, our experienced instructors deliver 
              quality training that empowers learners to build careers, start businesses, 
              and stay competitive in the global digital economy.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                classes="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full text-white font-medium hover:scale-105 transition"
                link="/apply"
                text="Enroll Now"
              />
              <Button
                classes="border border-white/30 px-6 py-3 rounded-full text-white hover:bg-white hover:text-black transition"
                link="/program"
                text="Explore Programs"
              />
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-30 group-hover:opacity-50 transition" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/edutechImg.png"
                alt="Students learning at Aptech"
                width={600}
                height={500}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
              />
            </div>
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-3 rounded-xl text-sm">
              🎓 1000+ Graduates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;