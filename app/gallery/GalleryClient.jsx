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
  Grid3X3,
  Maximize2,
  Play,
  Sparkles,
  X,
} from "lucide-react";

// Static imports for all media assets from the /assets folder
import aptech1 from "@/assets/aptech1.jpeg";
import aptech2 from "@/assets/aptech2.jpeg";
import aptech3 from "@/assets/aptech3.jpeg";
import aptech4 from "@/assets/aptech4.jpeg";
import aptech5 from "@/assets/aptech5.jpeg";
import aptech6 from "@/assets/aptech6.jpeg";
import aptech8 from "@/assets/aptech8.jpeg";
import aptech9 from "@/assets/aptech9.jpeg";
import aptech10 from "@/assets/aptech10.jpeg";
import aptech11 from "@/assets/aptech11.jpeg";
import aptech12 from "@/assets/aptech12.jpeg";

// Video is referenced as a path string since Next.js <video> doesn't use next/image
const aptech7VideoPath = "/aptech7.MOV";

const galleryItems = [
  {
    title: "Aptech Center Moment",
    category: "Campus Life",
    image: aptech1,
    height: "h-[330px]",
  },
  {
    title: "Student Achievement Highlight",
    category: "Achievement",
    image: aptech2,
    height: "h-[430px]",
  },
  {
    title: "Learning in Action",
    category: "Training",
    image: aptech3,
    height: "h-[560px]",
  },
  {
    title: "Center Showcase",
    category: "Community",
    image: aptech4,
    height: "h-[340px]",
  },
  {
    title: "Student Moment",
    category: "Campus Life",
    image: aptech5,
    height: "h-[360px]",
  },
  {
    title: "Aptech Experience",
    category: "Success",
    image: aptech6,
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
    image: aptech8,
    height: "h-[430px]",
  },
  {
    title: "Achievement Moment",
    category: "Achievement",
    image: aptech9,
    height: "h-[360px]",
  },
  {
    title: "Learning Community",
    category: "Community",
    image: aptech10,
    height: "h-[540px]",
  },
  {
    title: "Aptech Showcase",
    category: "Center Life",
    image: aptech11,
    height: "h-[400px]",
  },
  {
    title: "Student Success Story",
    category: "Achievement",
    image: aptech12,
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
    activeIndex === null ? null : filteredItems[activeIndex] ?? null;

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
      <section className="relative min-h-[84vh] overflow-hidden bg-brand-primary pt-32 text-white">
        <Image
          src={aptech12}
          alt="Aptech Ibadan student achievement moment"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.58)_48%,rgba(0,0,0,0.16)),linear-gradient(180deg,rgba(0,0,0,0.34),rgba(0,0,0,0.84))]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto grid min-h-[calc(84vh-8rem)] max-w-7xl gap-12 px-6 pb-24 lg:grid-cols-[1fr_430px] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur">
              <Sparkles className="h-4 w-4 text-brand-accent" />
              Aptech Ibadan Gallery
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-tight text-white lg:text-7xl">
              Student life, wins, and center moments.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70">
              A curated look at practical sessions, achievement highlights,
              learning culture, and memorable moments across Aptech Ibadan.
            </p>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-white/10 bg-white/10 p-4 backdrop-blur"
                >
                  <p className="text-3xl font-bold text-brand-accent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white/65">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="relative h-[360px] overflow-hidden rounded-lg border border-white/10 bg-white/10">
              <Image
                src={aptech3}
                alt="Aptech Ibadan practical learning session"
                fill
                sizes="25vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-4 pt-14">
              <div className="relative h-[170px] overflow-hidden rounded-lg border border-white/10 bg-white/10">
                <Image
                  src={aptech10}
                  alt="Aptech Ibadan learning community"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-lg border border-white/10 bg-white p-5 text-slate-950 shadow-2xl shadow-black/25">
                <Camera className="mb-4 h-7 w-7 text-brand-tertiary" />
                <p className="text-2xl font-bold">Real center stories</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Training, showcases, community events, and student milestones.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 text-slate-950">
        <div className="mx-auto max-w-[88rem] px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-80px" }}
            className="mb-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <div>
              <p className="mb-4 text-sm font-bold uppercase text-brand-tertiary">
                Gallery
              </p>
              <h2 className="max-w-3xl text-4xl font-bold leading-tight lg:text-5xl">
                Explore the Aptech Ibadan experience.
              </h2>
            </div>

            <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/70">
              <Grid3X3 className="hidden h-5 w-5 text-brand-tertiary sm:block" />
              <span className="text-sm font-bold text-slate-600">
                {filteredItems.length} items
              </span>
            </div>
          </motion.div>

          <div className="mb-10 flex gap-2 overflow-x-auto border-y border-slate-200 py-4">
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
                  className={`shrink-0 rounded-lg px-4 py-2 text-sm font-bold transition ${
                    isActive
                      ? "bg-brand-tertiary text-white shadow-lg shadow-brand-tertiary/20"
                      : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
            {filteredItems.map((item, index) => (
              <motion.button
                key={`${item.title}-${activeCategory}`}
                type="button"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: (index % 4) * 0.05 }}
                viewport={{ once: true, margin: "-80px" }}
                onClick={() => openItem(index)}
                className="group relative mb-6 block w-full break-inside-avoid overflow-hidden rounded-lg border border-slate-200 bg-white text-left shadow-xl shadow-slate-200/80 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/80"
                aria-label={`View ${item.title}`}
              >
                <div className={`relative ${item.height} bg-slate-200`}>
                  {item.mediaType === "video" ? (
                    <video
                      src={item.image}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                      aria-label={item.title}
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-90 transition group-hover:opacity-95" />

                  <div className="absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-1 text-xs font-bold text-slate-950 shadow-lg backdrop-blur">
                    {item.category}
                  </div>

                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-black/45 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                    {item.mediaType === "video" ? (
                      <Play className="h-4 w-4 fill-white" />
                    ) : (
                      <Maximize2 className="h-4 w-4" />
                    )}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="mb-3 h-px w-full bg-white/20" />
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            onClick={() => setActiveIndex(null)}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-brand-tertiary"
              aria-label="Close gallery preview"
            >
              <X className="h-5 w-5" />
            </button>

            {filteredItems.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showPrevious();
                  }}
                  className="absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-brand-tertiary md:flex"
                  aria-label="View previous gallery item"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    showNext();
                  }}
                  className="absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-brand-tertiary md:flex"
                  aria-label="View next gallery item"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.96, y: 18 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 18 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-[#05070a] shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-[72vh] max-h-[760px] min-h-[360px] bg-black">
                {activeItem.mediaType === "video" ? (
                  <video
                    src={activeItem.image}
                    className="h-full w-full bg-black object-contain"
                    controls
                    autoPlay
                    playsInline
                  />
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

              <div className="flex flex-col gap-3 border-t border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase text-brand-tertiary">
                    {activeItem.category}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-white">
                    {activeItem.title}
                  </h2>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/70">
                  {activeItem.mediaType === "video" ? (
                    <Film className="h-4 w-4 text-brand-accent" />
                  ) : (
                    <Award className="h-4 w-4 text-brand-accent" />
                  )}
                  Aptech Ibadan
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}