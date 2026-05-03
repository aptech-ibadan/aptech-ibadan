"use client";

import Image from "next/image";
import { ArrowRight, Clock, Award, Users } from "lucide-react";

const CourseCard = ({ course, onClick, variant = "default" }) => {
  const isHighlight = variant === "highlight";

  return (
    <div
      className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer
        ${isHighlight ? "bg-[#FFC107]" : "bg-white"} 
        border ${isHighlight ? "border-[#FFC107]" : "border-gray-100"}`}
      onClick={() => onClick(course)}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {course.badge && (
          <div className="absolute top-4 right-4 bg-[#FFC107] text-black text-xs font-bold px-3 py-1 rounded-full">
            {course.badge}
          </div>
        )}
        {isHighlight && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFC107]/50 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
            isHighlight ? "bg-[#020B2D] text-white" : "bg-[#FFC107]/10 text-[#FFC107]"
          }`}>
            {course.category}
          </span>
          <span className={`text-xs flex items-center gap-1 ${
            isHighlight ? "text-[#020B2D]/70" : "text-gray-500"
          }`}>
            <Clock size={12} /> {course.duration}
          </span>
        </div>

        <h3 className={`font-bold text-xl mb-2 ${isHighlight ? "text-[#020B2D]" : "text-[#020B2D]"}`}>
          {course.title}
        </h3>

        <p className={`text-sm mb-4 line-clamp-2 ${isHighlight ? "text-[#020B2D]/70" : "text-gray-600"}`}>
          {course.shortDescription}
        </p>

        <div className="flex flex-col items-start gap-4 justify-between mt-4">
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-1 text-sm ${
              isHighlight ? "text-[#020B2D]/60" : "text-gray-500"
            }`}>
              <Award size={14} />
              <span className="text-[10px]">{course.certification}</span>
            </div>
          </div>
          <button className={`flex items-center text-nowrap gap-2 text-sm font-semibold transition-all group-hover:gap-3
            ${isHighlight ? "text-[#020B2D]" : "text-[#FFC107]"}`}>
            View Details <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;