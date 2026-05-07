"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

/* ── Animated number for stat counters ── */
const useCounter = (target, inView) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const id = setInterval(() => {
      start += step;
      if (start >= target) {
        setVal(target);
        clearInterval(id);
      } else setVal(Math.round(start));
    }, 16);
    return () => clearInterval(id);
  }, [inView, target]);
  return val;
};

/* ── Tilt wrapper ── */
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale(1.02)`;
  };
  const handleLeave = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };
  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        transition: "transform 0.15s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};

/* ── InfoCard ── */
const InfoCard = ({ img, title, points, highlight, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.65,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const router = useRouter();
  const handleButtonClick = () => {
    router.push("/program");
  };

  const isHighlight = highlight;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
    >
      <TiltCard className="h-full">
        <div
          className={`relative rounded-2xl overflow-hidden h-full flex flex-col group
          ${
            isHighlight
              ? "bg-[#FFC107] text-black"
              : "bg-white/5 text-white border border-white/10 backdrop-blur-sm"
          }`}
        >
          {/* Image container */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={img}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            {/* Overlay gradient */}
            <div
              className={`absolute inset-0 ${
                isHighlight
                  ? "bg-gradient-to-t from-[#FFC107]/80 to-transparent"
                  : "bg-gradient-to-t from-[#020B2D]/80 to-transparent"
              }`}
            />

            {/* Card index number */}
            <motion.div
              className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold
                ${isHighlight ? "bg-black/20 text-black" : "bg-[#FFC107]/90 text-black"}`}
              initial={{ scale: 0, rotate: -90 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{
                delay: index * 0.15 + 0.4,
                type: "spring",
                stiffness: 200,
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </motion.div>

            {/* Shimmer sweep on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)",
                backgroundSize: "250% 100%",
              }}
              initial={{ backgroundPosition: "200% 0" }}
              whileHover={{ backgroundPosition: "-200% 0" }}
              transition={{ duration: 0.7 }}
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col gap-4 flex-1">
            {/* Title with animated underline */}
            <div className="relative inline-block">
              <h2
                className={`font-bold text-lg leading-snug ${isHighlight ? "text-black" : "text-white"}`}
              >
                {title}
              </h2>
              <motion.div
                className={`h-0.5 mt-1 rounded-full ${isHighlight ? "bg-black/30" : "bg-[#FFC107]/60"}`}
                initial={{ width: 0 }}
                animate={inView ? { width: "60%" } : {}}
                transition={{
                  delay: index * 0.15 + 0.5,
                  duration: 0.5,
                  ease: "easeOut",
                }}
              />
            </div>

            {/* Points */}
            <ul className="flex flex-col gap-2 flex-1">
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  className={`flex items-start gap-2.5 text-sm leading-relaxed
                    ${isHighlight ? "text-black/80" : "text-gray-300"}`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: index * 0.15 + 0.55 + i * 0.07,
                    duration: 0.4,
                  }}
                >
                  {/* Animated dot */}
                  <motion.span
                    className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0
                      ${isHighlight ? "bg-black/50" : "bg-[#FFC107]"}`}
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                    }}
                  />
                  {point}
                </motion.li>
              ))}
            </ul>

            {/* Bottom CTA strip */}
            <motion.div
              className={`mt-auto pt-4 border-t flex items-center justify-between
                ${isHighlight ? "border-black/20" : "border-white/10"}`}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.8 }}
              onClick={handleButtonClick}
            >
              <span
                className={`text-xs font-semibold tracking-widest uppercase
                ${isHighlight ? "text-black/60" : "text-[#FFC107]/70"}`}
              >
                Learn more
              </span>
              <motion.div
                className={`w-7 h-7 rounded-full flex items-center justify-center
                  ${isHighlight ? "bg-black/15" : "bg-[#FFC107]/15"}`}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke={isHighlight ? "#000" : "#FFC107"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
};

/* ── InfoBox ── */
const InfoBox = () => {
  const [headingRef, headingInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const cards = [
    {
      img: "/images/img1.jpg",
      title: "World-Class Learning Environment",
      points: [
        "Modern tech-enabled classrooms",
        "Fully equipped computer labs",
        "Industry-standard tools & systems",
        "Comfortable learning environment",
      ],
    },
    {
      img: "/images/img6.jpg",
      title: "Global Certification Advantage",
      highlight: true,
      points: [
        "Recognized international certifications",
        "Pathway to study abroad (UK, Canada, etc.)",
        "Blended & cloud-based learning",
        "Access recorded classes anytime",
      ],
    },
    {
      img: "/images/img3.jpg",
      title: "Career & Job Support",
      points: [
        "Industry expert sessions",
        "Internship & job placement support",
        "Networking with tech professionals",
        "Local & international opportunities",
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#020B2D] px-6 md:px-16 relative overflow-hidden">
      {/* Background orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,193,7,0.05) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.3, 1], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(100,120,255,0.05) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section heading */}
        <div ref={headingRef} className="text-center mb-14">
          {/* Label */}
          <motion.p
            className="text-[#FFC107] text-xs uppercase tracking-[0.3em] font-semibold mb-3 inline-flex items-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="inline-block w-6 h-px bg-[#FFC107]"
              initial={{ scaleX: 0 }}
              animate={headingInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            />
            Our Advantage
            <motion.span
              className="inline-block w-6 h-px bg-[#FFC107]"
              initial={{ scaleX: 0 }}
              animate={headingInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            />
          </motion.p>

          <motion.h1
            className="font-bold text-3xl md:text-4xl text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Why{" "}
            <span className="relative inline-block">
              <span className="text-[#FFC107]">Choose Us</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] bg-[#FFC107]/30 rounded-full"
                initial={{ width: 0 }}
                animate={headingInView ? { width: "100%" } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We don&apos;t just train you — we prepare you for real opportunities
            in tech.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {cards.map((card, i) => (
            <InfoCard key={i} index={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoBox;
