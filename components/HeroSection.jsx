import Image from "next/image";
import { Button } from "@/const";
import heroImage from "../assets/edutechImg.png";

const Hero = () => {
  return (
    <section className="bg-[#020B2D] text-white relative overflow-hidden">
      <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[750px] flex items-center">
        {/* Background Image */}
        <Image
          src="/images/hero.jpg"
          alt="background students"
          fill
          className="object-cover opacity-20"
          priority
          quality={100}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020B2D] via-[#020B2D]/95 to-[#020B2D]/70" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-0">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[#FFC107] uppercase tracking-widest text-sm font-semibold">
                Aptech Ibadan • Arena Multimedia
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Nigeria's Premier{" "}
                <span className="text-[#FFC107] relative inline-block">
                  I.T Institute
                  <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-[#FFC107]/30 -z-10" />
                </span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
                Build real-world skills in Software Development, Cybersecurity,
                Networking, and Multimedia. Get certified, gain experience, and
                become globally employable.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  classes="bg-[#FFC107] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 hover:bg-[#FFD700] transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                  link="/apply"
                  text="Enroll Now"
                />
                <Button
                  classes="border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 text-center"
                  link="/programs"
                  text="Explore Courses"
                />
              </div>
            </div>

            {/* Right Side Image - Desktop */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-6 bg-gradient-to-br from-[#FFC107]/30 via-transparent to-transparent rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-700" />

                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-[#020B2D]/80 to-transparent border border-white/10">
                  <div className="relative h-[320px] sm:h-[380px]">
                    <Image
                      src={heroImage}
                      alt="Students learning at Aptech"
                      fill
                      className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105 h-full w-full"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                  </div>

                  {/* Subtle bottom overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020B2D] to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Image */}
        <div className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md px-6 pb-10">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#FFC107]/25 to-transparent rounded-3xl blur-xl" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 hidden lg:block">
              <div className="relative h-auto sm:h-auto">
                <Image
                  src={heroImage}
                  alt="Students learning at Aptech"
                  fill
                  className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                  sizes="90vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
