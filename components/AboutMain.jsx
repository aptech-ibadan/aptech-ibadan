"use client";

import Image from "next/image";
import { Button } from "@/const";
import Link from "next/link";

const AboutMain = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Background Glow - Light Mode */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-100/50 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-100/50 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* TEXT SIDE */}
          <div>
            <p className="uppercase tracking-[4px] text-sm text-blue-600 font-semibold mb-3">
              Who We Are
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-[#020B2D]">
              Building Global Careers Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Tech Education
              </span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              At Aptech Agodi, our programs cover key areas such as software development, 
              data analysis, networking, cybersecurity, and digital design. Backed by global 
              standards from Aptech Computer Education, our experienced instructors deliver 
              quality training that empowers learners to build careers, start businesses, 
              and stay competitive in the global digital economy.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                classes="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full text-white font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
                link="/apply"
                text="Enroll Now"
              />
      {/* <Button
  classes="border-2 border-blue-600 px-6 py-3 rounded-full !text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
  link="/program"
  text={<span className="text-blue-600 hover:text-white">Explore Programs</span>}
/> */}
<Link href="/program" className="border-2 border-blue-600 px-6 py-3 rounded-full text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 inline-block">
  Explore Programs
</Link>
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-2xl opacity-20 group-hover:opacity-40 transition duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/ddldviftf/image/upload/v1777743001/ChatGPT_Image_May_2_2026_06_24_40_PM_oytsgb.png"
                alt="Students learning at Aptech"
                width={600}
                height={500}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
              />
            </div>
            {/* Floating Badge - Light Mode */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-lg border border-gray-200 shadow-lg px-4 py-3 rounded-xl text-sm text-gray-700">
              <span className="font-semibold text-blue-600">🎓 1000+</span> Graduates
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;