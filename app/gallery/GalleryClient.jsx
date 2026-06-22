"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Award,
  Camera,
  ChevronLeft,
  ChevronRight,
  Film,
  Maximize2,
  Play,
  Sparkles,
  X,
  Images,
} from "lucide-react";

import Footer from "@/components/Footer";

const galleryImage = (file) => `/images/gallery/${file}`;
const aptech7VideoPath = "/aptech7.mov";

const galleryItems = [
  {
    title: "Aptech Center Moment",
    category: "Campus Life",
    image: galleryImage("aptech1.jpeg"),
    height: "h-[330px]",
  },
  {
    title: "Student Achievement Highlight",
    category: "Achievement",
    image: galleryImage("aptech2.jpeg"),
    height: "h-[430px]",
  },
  {
    title: "Learning in Action",
    category: "Training",
    image: galleryImage("aptech3.jpeg"),
    height: "h-[560px]",
  },
  {
    title: "Center Showcase",
    category: "Community",
    image: galleryImage("aptech4.jpeg"),
    height: "h-[340px]",
  },
  {
    title: "Student Moment",
    category: "Campus Life",
    image: galleryImage("aptech5.jpeg"),
    height: "h-[360px]",
  },
  {
    title: "Aptech Experience",
    category: "Success",
    image: galleryImage("aptech6.jpeg"),
    height: "h-[420px]",
  },
  {
    title: "Center Highlight Reel",
    category: "Video",
    image: aptech7VideoPath,
    height: "h-[450px]",
    mediaType: "video",
  },
  {
    title: "Center Memory",
    category: "Campus Life",
    image: galleryImage("aptech8.jpeg"),
    height: "h-[430px]",
  },
  {
    title: "Achievement Moment",
    category: "Achievement",
    image: galleryImage("aptech9.jpeg"),
    height: "h-[360px]",
  },
  {
    title: "Learning Community",
    category: "Community",
    image: galleryImage("aptech10.jpeg"),
    height: "h-[540px]",
  },
  {
    title: "Aptech Showcase",
    category: "Center Life",
    image: galleryImage("aptech11.jpeg"),
    height: "h-[400px]",
  },
  {
    title: "Kopa in Tech",
    category: "Achievement",
    image: galleryImage("aptech12.jpeg"),
    height: "h-[470px]",
  },
];

const stats = [
  { value: "12", label: "Featured moments" },
  { value: "2", label: "Ibadan centers" },
  { value: "2K+", label: "Students trained" },
];

const categories = [
  "All",
  "Campus Life",
  "Achievement",
  "Training",
  "Community",
  "Video",
];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const activeItem =
    activeIndex === null ? null : (filteredItems[activeIndex] ?? null);

  const openItem = (index) => setActiveIndex(index);

  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === 0 ? filteredItems.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === filteredItems.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[88vh] overflow-hidden bg-[#020B2D] pt-32 text-white">
        {/* Background image */}
        <Image
          src={galleryImage("aptech12.jpeg")}
          alt="Aptech Ibadan student achievement moment"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Directional gradients */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#020B2D] via-[#020B2D]/80 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#020B2D] via-transparent to-transparent"
          aria-hidden="true"
        />

        {/* Amber glow */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#FFC107]/10 blur-[120px] pointer-events-none" />

        {/* Fade to next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto grid min-h-[calc(88vh-8rem)] max-w-7xl gap-12 px-6 pb-24 lg:grid-cols-[1fr_420px] lg:items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFC107]/30 bg-[#FFC107]/10 px-4 py-1.5 text-sm font-semibold text-[#FFC107] tracking-widest uppercase backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Aptech Ibadan Gallery
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-tight text-white lg:text-6xl">
              Student life, wins,{" "}
              <span className="text-[#FFC107]">and center moments.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
              A curated look at practical sessions, achievement highlights,
              learning culture, and memorable moments across Aptech Ibadan.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur"
                >
                  <p className="text-3xl font-bold text-[#FFC107]">
                    {stat.value}
                  </p>
                  <p className="mt-0.5  font-semibold uppercase tracking-wider text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right preview */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="relative h-[360px] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={galleryImage("aptech3.jpeg")}
                alt="Learning session"
                fill
                sizes="25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D]/60 to-transparent" />
            </div>
            <div className="grid gap-4 pt-12">
              <div className="relative h-[165px] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={galleryImage("aptech10.jpeg")}
                  alt="Community"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D]/60 to-transparent" />
              </div>
              <div className="rounded-2xl border border-[#FFC107]/20 bg-[#FFC107]/10 p-5 backdrop-blur">
                <Camera className="mb-3 h-6 w-6 text-[#FFC107]" />
                <p className="text-base font-bold text-white">
                  Real center stories
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                  Training, showcases, and student milestones.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="bg-slate-50 py-24 text-slate-950">
        <div className="mx-auto max-w-[88rem] px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-[#FFC107]">
                Gallery
              </p>
              <h2 className="max-w-2xl text-4xl font-bold leading-tight lg:text-5xl text-[#020B2D]">
                Explore the Aptech Ibadan experience.
              </h2>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-lg shadow-slate-200/70 self-start lg:self-auto">
              <Images className="h-4 w-4 text-[#FFC107]" />
              <span className="text-sm font-bold text-slate-600">
                {filteredItems.length} moments
              </span>
            </div>
          </motion.div>

          {/* Category filter */}
          <div className="mb-10 flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveIndex(null);
                  }}
                  className={`shrink-0 rounded-full px-5 py-2 text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-[#020B2D] text-[#FFC107] shadow-lg"
                      : "bg-white text-slate-500 border border-slate-200 hover:border-[#020B2D]/30 hover:text-slate-900"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Masonry */}
          <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
            {filteredItems.map((item, index) => {
              const sharedClassName =
                "group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-[#020B2D] text-left shadow-xl shadow-slate-300/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-400/50 cursor-pointer";

              const cardContent = (
                <div className={`relative ${item.height}`}>
                  {item.mediaType === "video" ? (
                    <video
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      aria-label={item.title}
                    >
                      <source src={item.image} type="video/quicktime" />
                      <source src={item.image} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D]/90 via-[#020B2D]/20 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute left-4 top-4 rounded-full bg-[#FFC107] px-3 py-1 text-[11px] font-bold text-[#020B2D] uppercase tracking-wider">
                    {item.category}
                  </div>

                  {/* Action icon */}
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:bg-[#FFC107] group-hover:text-[#020B2D]">
                    {item.mediaType === "video" ? (
                      <Play className="h-3.5 w-3.5 fill-current" />
                    ) : (
                      <Maximize2 className="h-3.5 w-3.5" />
                    )}
                  </div>

                  {/* Title */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="mb-2.5 h-px w-10 bg-[#FFC107]" />
                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );

              // Video cards use div to avoid invalid <button><video> nesting
              if (item.mediaType === "video") {
                return (
                  <motion.div
                    key={`${item.title}-${activeCategory}`}
                    role="button"
                    tabIndex={0}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
                    viewport={{ once: true, margin: "-80px" }}
                    onClick={() => openItem(index)}
                    onKeyDown={(e) => e.key === "Enter" && openItem(index)}
                    className={sharedClassName}
                    aria-label={`View ${item.title}`}
                  >
                    {cardContent}
                  </motion.div>
                );
              }

              return (
                <motion.button
                  key={`${item.title}-${activeCategory}`}
                  type="button"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
                  viewport={{ once: true, margin: "-80px" }}
                  onClick={() => openItem(index)}
                  className={sharedClassName}
                  aria-label={`View ${item.title}`}
                >
                  {cardContent}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#020B2D]/95 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            onClick={() => setActiveIndex(null)}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FFC107] hover:text-[#020B2D]"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {filteredItems.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrevious();
                  }}
                  className="absolute left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FFC107] hover:text-[#020B2D] md:flex"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  className="absolute right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FFC107] hover:text-[#020B2D] md:flex"
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[#020B2D] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[70vh] max-h-[720px] min-h-[320px] bg-black">
                {activeItem.mediaType === "video" ? (
                  <video
                    className="h-full w-full bg-black object-contain"
                    controls
                    autoPlay
                    playsInline
                  >
                    <source src={activeItem.image} type="video/quicktime" />
                    <source src={activeItem.image} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                )}
              </div>

              <div className="flex flex-col gap-3 border-t border-white/10 bg-white/[0.03] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-block rounded-full bg-[#FFC107] px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#020B2D] mb-2">
                    {activeItem.category}
                  </span>
                  <h2 className="text-xl font-bold text-white">
                    {activeItem.title}
                  </h2>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
                  {activeItem.mediaType === "video" ? (
                    <Film className="h-4 w-4 text-[#FFC107]" />
                  ) : (
                    <Award className="h-4 w-4 text-[#FFC107]" />
                  )}
                  Aptech Ibadan
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
        {/* <Footer/> */}
      </AnimatePresence>
    </>
  );
}
