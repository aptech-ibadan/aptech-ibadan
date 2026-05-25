"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Award, Calendar, User } from "lucide-react";

const NewsCard = ({ item, featured = false, variant = "default" }) => {
  const isHighlight = variant === "highlight";
  const thumbnailSrc = item?.thumbnail || "/aptech004.png";

  return (
    <div
      className={`group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer
        ${isHighlight ? "bg-[#FFC107]" : "bg-white"} 
        border ${isHighlight ? "border-[#FFC107]" : "border-gray-100"}
        ${featured ? "lg:grid lg:grid-cols-2" : ""}`}
    >
      {/* Image */}
      <div className={`relative ${featured ? "h-72 lg:h-full" : "h-56"} overflow-hidden`}>
        <Image
          src={thumbnailSrc}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.category && (
          <div className="absolute top-4 right-4 bg-[#FFC107] text-black font-bold px-3 py-1 rounded-full text-xs">
            {item.category}
          </div>
        )}
        {isHighlight && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFC107]/50 to-transparent" />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span
            className={`font-semibold text-xs px-2 py-1 rounded-full ${
              isHighlight
                ? "bg-[#020B2D] text-white"
                : "bg-[#FFC107]/10 text-[#FFC107]"
            }`}
          >
            {item.category || "News"}
          </span>
          <span
            className={`flex items-center gap-1 text-xs ${
              isHighlight ? "text-[#020B2D]/70" : "text-gray-500"
            }`}
          >
            <Calendar size={12} /> {item.date}
          </span>
          <span
            className={`flex items-center gap-1 text-xs ${
              isHighlight ? "text-[#020B2D]/70" : "text-gray-500"
            }`}
          >
            <Clock size={12} /> {item.readTime}
          </span>
        </div>

        <h3
          className={`font-bold text-xl mb-2 line-clamp-2 ${
            isHighlight ? "text-[#020B2D]" : "text-[#020B2D]"
          }`}
        >
          {item.title}
        </h3>

        <p
          className={`text-sm mb-4 line-clamp-3 ${
            isHighlight ? "text-[#020B2D]/70" : "text-gray-600"
          }`}
        >
          {item.excerpt}
        </p>

        <div className="flex flex-col items-start gap-4 justify-between mt-4">
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-1 text-sm ${
                isHighlight ? "text-[#020B2D]/60" : "text-gray-500"
              }`}
            >
              <User size={14} />
              <span className="text-xs">{item.author || "Aptech"}</span>
            </div>
            <div
              className={`flex items-center gap-1 text-sm ${
                isHighlight ? "text-[#020B2D]/60" : "text-gray-500"
              }`}
            >
              <Award size={14} />
              <span className="text-xs">Featured Story</span>
            </div>
          </div>
          
          <Link
            href={`/news/${item.slug}`}
            className={`flex items-center text-nowrap gap-2 text-sm font-semibold transition-all group-hover:gap-3
            ${isHighlight ? "text-[#020B2D]" : "text-[#020B2D]"}`}
          >
            Read Story <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;