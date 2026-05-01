import { Button } from "@/const";
import { ArrowRight, Users, Award, Zap } from "lucide-react";

const Enroll = () => {
  return (
    <section className="bg-[#020B2D] py-20 md:py-28 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#FFC107_0%,transparent_50%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(at_bottom_left,#3B82F6_0%,transparent_60%)] opacity-10" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-6">
            <Zap className="text-[#FFC107]" size={22} />
            <p className="text-[#FFC107] uppercase tracking-[3px] text-sm font-semibold">
              Next Enrollment Open
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-4xl">
            Ready To Get Started? <br />
            <span className="text-[#FFC107]">Your Tech Future Begins Here</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Join a diverse community of ambitious learners from around the
            world. Build real skills, earn globally recognized certifications,
            and launch your career in tech.
          </p>

          {/* Benefits Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 w-full max-w-3xl">
            {[
              {
                icon: Users,
                label: "Global Network",
                desc: "Connect with students worldwide",
              },
              {
                icon: Award,
                label: "Industry Certification",
                desc: "Earn recognized credentials",
              },
              {
                icon: Zap,
                label: "Fast-Track Career",
                desc: "Job-ready in 6–12 months",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#FFC107]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#FFC107]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="text-[#FFC107]" size={28} />
                </div>
                <h4 className="text-white font-semibold text-lg mb-1">
                  {item.label}
                </h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <Button
              classes="flex group bg-[#FFC107] hover:bg-[#FFD700] text-black font-semibold text-lg px-10 py-5 rounded-full flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              link="/apply"
              text={
                <>
                  Apply Now – It’s Free{" "}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </>
              }
            />
          </div>

          {/* Trust Line */}
          <p className="mt-8 text-gray-400 text-sm tracking-wide">
            Limited slots available for the new intake • Starts soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default Enroll;
