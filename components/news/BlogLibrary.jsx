"use client";

import { useMemo, useState } from "react";
import NewsCard from "@/components/news/NewsCard";
import { blogCategories } from "@/data/blogCategories";

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
        {filteredItems.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
            <p className="text-4xl mb-4">📭</p>
            <h3 className="text-white text-xl font-semibold">No posts found</h3>
            <p className="text-gray-400 text-sm mt-2">
              There are no posts in the{" "}
              <span className="text-[#FFC107] font-medium">{activeCategory}</span>{" "}
              category yet.
            </p>
            <button
              onClick={() => setActiveCategory("All")}
              className="mt-5 px-5 py-2 rounded-full bg-[#FFC107] text-black text-sm font-semibold hover:bg-yellow-300 transition"
            >
              View all posts
            </button>
          </div>
        ) : (
          filteredItems.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))
        )}
      </div>
    </section>
  );
};

export default BlogLibrary;