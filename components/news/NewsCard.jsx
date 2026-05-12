"use client";

import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ item, featured = false }) => {
  return (
    <article
      className={`rounded-2xl border border-white/15 bg-[#040d2e]/95 backdrop-blur-sm overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)] ${
        featured ? "lg:grid lg:grid-cols-2" : ""
      }`}
    >
      <div className={`relative ${featured ? "h-72 lg:h-full" : "h-48"}`}>
        <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
      </div>

      <div className="p-5 lg:p-7">
        <p className="text-xs text-[#FFC107] font-semibold tracking-wide uppercase">
          {item.category}
        </p>
        <h3 className="text-white text-xl font-semibold mt-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-gray-100 text-sm mt-3 leading-relaxed">{item.excerpt}</p>

        <div className="mt-4 text-xs text-gray-200 flex items-center gap-3">
          <span>{item.author}</span>
          <span>•</span>
          <span>{item.date}</span>
          <span>•</span>
          <span>{item.readTime}</span>
        </div>

        <Link
          href={`/news/${item.slug}`}
          className="inline-flex mt-5 text-sm font-medium text-[#FFC107] hover:text-yellow-300 transition"
        >
          Read Story →
        </Link>
      </div>
    </article>
  );
};

export default NewsCard;
