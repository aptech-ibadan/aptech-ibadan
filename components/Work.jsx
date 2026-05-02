"use client";

import Image from "next/image";
import { Button } from "@/const";

const Work = () => {
  return (
    <section className="relative bg-[#020B2D] text-white py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-700/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-700/30 blur-[120px] rounded-full" />

      <div className="container-xl lg:container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT SIDE */}
          <div>
            <p className="uppercase tracking-[4px] text-sm text-blue-400 mb-3">
              What We Do
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Building Global Careers Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Tech Education & International Pathways
              </span>
            </h1>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-lg">
              We provide industry-focused training in software development, data
              science, and digital technologies designed to prepare students for
              real-world careers. Our programs combine practical learning with
              globally recognized certifications and direct progression
              opportunities to universities in the UK, Germany, and beyond.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-lg">
              Whether you're starting your journey or advancing your skills, we
              equip you with the knowledge, experience, and international
              exposure needed to thrive in today’s competitive tech landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                classes="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full text-white font-medium hover:scale-105 transition"
                link="/about"
                text="Explore More"
              />

              <Button
                classes="border border-white/30 px-6 py-3 rounded-full text-white hover:bg-white hover:text-black transition"
                link="/contact"
                text="Contact Us"
              />
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="relative group">
            {/* Glow Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-30 group-hover:opacity-50 transition" />

            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/img4.jpg"
                alt="Work"
                width={600}
                height={500}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                priority
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-3 rounded-xl text-sm">
              🚀 100+ Graduates 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
