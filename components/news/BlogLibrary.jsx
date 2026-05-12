"use client";

import { useMemo, useState } from "react";
import NewsCard from "@/components/news/NewsCard";
import { blogCategories } from "@/data/newsData";

const BlogLibrary = ({ items }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-0 py-14">
      <div className="flex flex-wrap gap-3 border-b border-white/10 pb-6">
        {blogCategories.map((category) => {
          const active = category === activeCategory;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                active
                  ? "bg-[#FFC107] text-black"
                  : "bg-[#0a1847] text-white border border-white/15 hover:border-[#FFC107]/50"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <NewsCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
};

export default BlogLibrary;
