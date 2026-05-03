"use client";

import { useEffect } from "react";
import { 
  X, MapPin, Clock, Briefcase, DollarSign, 
  CheckCircle, Star, Mail, Phone, Calendar,
  Award, Users, TrendingUp
} from "lucide-react";
import { Button } from "@/const";

const JobModal = ({ job, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-20 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
        >
          <X size={24} className="text-[#020B2D]" />
        </button>

        <div className="clear-both" />

        {/* Header */}
        <div className="px-6 md:px-8 pb-6">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-[#FFC107] text-black text-xs font-bold px-3 py-1 rounded-full">
              {job.type}
            </span>
            <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
              {job.department}
            </span>
            <span className="text-gray-400 text-xs flex items-center gap-1">
              <Clock size={12} /> Posted {job.posted}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#020B2D] mb-4">
            {job.job}
          </h2>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#FFC107]" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={16} className="text-[#FFC107]" />
              <span>{job.experience}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign size={16} className="text-[#FFC107]" />
              <span>{job.salary}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 md:px-8 pb-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-bold text-[#020B2D] mb-2 flex items-center gap-2">
                  <span className="w-1 h-5 bg-[#FFC107] rounded-full" />
                  Job Description
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-lg font-bold text-[#020B2D] mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 bg-[#FFC107] rounded-full" />
                  Key Responsibilities
                </h3>
                <ul className="space-y-2">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-[#FFC107] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-lg font-bold text-[#020B2D] mb-3 flex items-center gap-2">
                  <span className="w-1 h-5 bg-[#FFC107] rounded-full" />
                  Requirements
                </h3>
                <ul className="space-y-2">
                  {job.requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Star size={18} className="text-[#FFC107] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preferred Qualifications */}
              {job.preferred && (
                <div>
                  <h3 className="text-lg font-bold text-[#020B2D] mb-3 flex items-center gap-2">
                    <span className="w-1 h-5 bg-[#FFC107] rounded-full" />
                    Preferred Qualifications
                  </h3>
                  <ul className="space-y-2">
                    {job.preferred.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Award size={18} className="text-[#FFC107] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Apply Card */}
              <div className="bg-gradient-to-r from-[#020B2D] to-[#010725] rounded-2xl p-6 text-center">
                <h4 className="text-white font-bold text-xl mb-3">Ready to Apply?</h4>
                <p className="text-gray-300 text-sm mb-6">
                  Join our team and make an impact in tech education
                </p>
                <Button
                  classes="bg-[#FFC107] text-black w-full py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300"
                  link="/apply?type=career"
                  text="Apply Now →"
                />
                <p className="text-gray-400 text-xs mt-3">
                  Applications reviewed within 5-7 business days
                </p>
              </div>

              {/* Why Join Us */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-bold text-[#020B2D] mb-4 flex items-center gap-2">
                  <Users size={18} className="text-[#FFC107]" />
                  Why Join Us?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <TrendingUp size={14} className="text-[#FFC107] mt-0.5" />
                    <span className="text-gray-600">Growth & learning opportunities</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Users size={14} className="text-[#FFC107] mt-0.5" />
                    <span className="text-gray-600">Collaborative team environment</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Award size={14} className="text-[#FFC107] mt-0.5" />
                    <span className="text-gray-600">Competitive compensation</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="border border-gray-100 rounded-2xl p-6">
                <h4 className="font-bold text-[#020B2D] mb-3">Questions?</h4>
                <p className="text-gray-500 text-sm mb-3">
                  Reach out to our HR team
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail size={14} className="text-[#FFC107]" />
                    <a href="mailto:careers@aptech-ibadan.com" className="text-gray-600 hover:text-[#FFC107]">
                      careers@aptech-ibadan.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone size={14} className="text-[#FFC107]" />
                    <a href="tel:+2348071234567" className="text-gray-600 hover:text-[#FFC107]">
                      +234 807 123 4567
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar size={14} className="text-[#FFC107]" />
                    <span className="text-gray-600">Mon-Fri, 9AM - 5PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobModal