"use client";

import { Button } from "@/const";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Send,
  Users,
  Briefcase,
  Sparkles,
} from "lucide-react";

const CareerCTA = () => {
  return (
    <section className="bg-gradient-to-br from-[#020B2D] to-[#010725] py-20 md:py-28 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#FFC107_0%,transparent_50%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(at_bottom_left,#3B82F6_0%,transparent_60%)] opacity-10" />

      {/* Floating particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#FFC107] rounded-full animate-ping" />
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-blue-500 rounded-full animate-ping animation-delay-1000" />
      <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping animation-delay-2000" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-6">
            <Sparkles className="text-[#FFC107]" size={18} />
            <span className="text-[#FFC107] font-semibold">
              Don't See the Perfect Role?
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            We're Always Looking for{" "}
            <span className="text-[#FFC107] relative inline-block">
              Great Talent
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFC107]/30 rounded-full" />
            </span>
          </h2>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
            Even if we don't have an open position that matches your skills
            right now, we'd still love to hear from you. Send us your resume and
            we'll keep you in mind for future opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#FFC107]/30 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Send size={24} className="text-[#FFC107]" />
              Submit Your Application
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Upload your resume and tell us why you'd be a great fit for our
              team
            </p>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition"
                />
              </div>

              <div>
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition">
                  <option value="">Select Area of Interest</option>
                  <option value="engineering">Software Engineering</option>
                  <option value="design">UI/UX Design</option>
                  <option value="academics">Academics / Training</option>
                  <option value="marketing">Marketing & Communications</option>
                  <option value="student-services">Student Services</option>
                  <option value="administration">Administration</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm mb-2">
                  Upload Resume (PDF, DOC, DOCX)
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#FFC107] file:text-black hover:file:bg-[#FFD700] transition cursor-pointer"
                />
              </div>

              <div>
                <textarea
                  placeholder="Tell us why you'd like to join our team..."
                  rows="4"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFC107] focus:ring-1 focus:ring-[#FFC107] transition resize-none"
                />
              </div>

              <button className="w-full bg-[#FFC107] text-black font-semibold py-3 rounded-xl hover:bg-[#FFD700] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Submit Application <Send size={18} />
              </button>

              <p className="text-gray-400  text-center mt-4">
                By submitting, you agree to our privacy policy and consent to
                storing your information
              </p>
            </form>
          </div>

          {/* Right Side - Contact Info & Stats */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#FFC107]/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Users size={24} className="text-[#FFC107]" />
                Connect With Us
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={20} className="text-[#FFC107] flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <a
                      href="mailto:careers@aptech-ibadan.com"
                      className="hover:text-[#FFC107] transition"
                    >
                      careers@aptech-ibadan.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={20} className="text-[#FFC107] flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-400">
                      Phone / WhatsApp
                    </div>
                    <a
                      href="tel:+2348071234567"
                      className="hover:text-[#FFC107] transition"
                    >
                      +234 807 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={20} className="text-[#FFC107] flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-400">Visit Us</div>
                    <div>
                      Westone Building, Beside Governor’s Office, Agodi, Ibadan
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <Button
                  classes="w-full border border-[#FFC107] text-[#FFC107] px-6 py-3 rounded-xl font-semibold hover:bg-[#FFC107] hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                  link="/contact"
                  text={
                    <>
                      <Briefcase size={18} />
                      Schedule a Chat
                    </>
                  }
                />
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-r from-[#FFC107]/10 to-transparent rounded-2xl p-6 border border-[#FFC107]/20">
              <h3 className="text-lg font-semibold text-white mb-4">
                Why Work With Us?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FFC107]">95%</div>
                  <div className=" text-gray-400">Employee Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FFC107]">50+</div>
                  <div className=" text-gray-400">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FFC107]">100%</div>
                  <div className=" text-gray-400">Growth Opportunities</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FFC107]">20+</div>
                  <div className=" text-gray-400">Countries Reached</div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#FFC107] text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-sm italic">
                "Aptech provides an amazing work environment with endless
                opportunities for growth. The team is supportive and the culture
                is truly inclusive."
              </p>
              <div className="mt-3 text-sm">
                <div className="text-white font-semibold">
                  — Michael Adebayo
                </div>
                <div className="text-gray-400 ">Senior Software Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCTA;
