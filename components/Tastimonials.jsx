"use client";

import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

/* ── Data ── */
const testimonials = [
  {
    id: 1,
    name: "Chukwuemeka Obi",
    role: "Software Engineer",
    company: "Flutterwave",
    avatar: "CO",
    accentColor: "#FFC107",
    course: "ACCP",
    rating: 5,
    quote:
      "Aptech Ibadan didn't just teach me how to code — it taught me how to think like an engineer. Within 6 months of graduating, I landed my first role at a fintech startup. The hands-on project work was unlike anything I'd seen at a regular university.",
    year: "2023",
  },
  {
    id: 2,
    name: "Aisha Bello",
    role: "Cybersecurity Analyst",
    company: "Access Bank",
    avatar: "AB",
    accentColor: "#22D3EE",
    course: "ACNS",
    rating: 5,
    quote:
      "I came in with zero networking knowledge. The ACNS program walked me through everything — from subnetting to ethical hacking — with real lab equipment. Now I'm protecting a major bank's infrastructure daily. I owe that to Aptech.",
    year: "2025",
  },
  {
    id: 3,
    name: "Tolu Adeyemi",
    role: "3D Animator",
    company: "Ebonylife Studios",
    avatar: "TA",
    accentColor: "#A78BFA",
    course: "Arena Multimedia",
    rating: 5,
    quote:
      "Arena Multimedia gave me the portfolio and confidence to walk into Nigeria's top production studio. My showreel from the program is what got me the interview. The instructors treated us like professionals from day one.",
    year: "2023",
  },
  {
    id: 4,
    name: "Babatunde Lawal",
    role: "Full Stack Developer",
    company: "Andela",
    avatar: "BL",
    accentColor: "#34D399",
    course: "ACCP",
    rating: 5,
    quote:
      "The global certification opened doors I didn't even know existed. Andela spotted my Aptech certification during screening and that alone moved me to the next round. The curriculum is genuinely world-class.",
    year: "2024",
  },
  {
    id: 5,
    name: "Ngozi Eze",
    role: "VFX Compositor",
    company: "Nollywood Production House",
    avatar: "NE",
    accentColor: "#F97316",
    course: "VFX For Animation & Films",
    rating: 5,
    quote:
      "The VFX program is intense — in the best possible way. I learned Nuke, Houdini, and rotoscopy with real film projects. My reel landed me freelance contracts before I even finished the course. Worth every naira.",
    year: "2024",
  },
  {
    id: 6,
    name: "Samuel Adaora",
    role: "Network Engineer",
    company: "MTN Nigeria",
    avatar: "SA",
    accentColor: "#22D3EE",
    course: "ACNS",
    rating: 5,
    quote:
      "The instructors at Aptech Ibadan have actual industry experience — they're not just reading from slides. I prepared for my Cisco certification with real routers and switches. MTN interviewed me specifically because of the Aptech name.",
    year: "2025",
  },
];

/* ── Star rating ── */
const Stars = ({ count = 5 }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <motion.svg
        key={i}
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="#FFC107"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.6 + i * 0.07, type: "spring", stiffness: 260 }}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </motion.svg>
    ))}
  </div>
);

/* ── Avatar ── */
const Avatar = ({ initials, accentColor }) => (
  <div
    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 text-[#020B2D]"
    style={{ background: accentColor }}
  >
    {initials}
  </div>
);

/* ── Single testimonial card ── */
const TestimonialCard = ({ t, index, isActive }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const col = index % 3;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.65,
        delay: col * 0.13,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className="relative group flex flex-col bg-white rounded-2xl border border-gray-100 p-6 shadow-sm overflow-hidden"
    >
      {/* Accent top bar */}
      <motion.div
        className="absolute top-0 left-0 h-[3px] rounded-t-2xl"
        style={{ background: t.accentColor }}
        initial={{ width: 0 }}
        animate={inView ? { width: "100%" } : {}}
        transition={{ delay: col * 0.13 + 0.4, duration: 0.6, ease: "easeOut" }}
      />

      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: `0 0 0 1.5px ${t.accentColor}33, 0 16px 32px ${t.accentColor}12`,
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      />

      {/* Large quote mark */}
      <motion.div
        className="absolute top-4 right-5 text-6xl font-serif leading-none select-none pointer-events-none"
        style={{ color: `${t.accentColor}18` }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: col * 0.13 + 0.3, duration: 0.5 }}
      >
        &ldquo;
      </motion.div>

      {/* Course badge */}
      <motion.span
        className="self-start  font-semibold px-3 py-1 rounded-full mb-4"
        style={{
          background: `${t.accentColor}18`,
          color: t.accentColor === "#FFC107" ? "#92700a" : t.accentColor,
        }}
        initial={{ opacity: 0, x: -10 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: col * 0.13 + 0.2 }}
      >
        {t.course}
      </motion.span>

      <Stars count={t.rating} />

      {/* Quote */}
      <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6 flex-1 relative z-10">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <Avatar initials={t.avatar} accentColor={t.accentColor} />
        <div>
          <p className="font-semibold text-[#020B2D] text-sm">{t.name}</p>
          <p className=" text-gray-500">
            {t.role} · {t.company}
          </p>
        </div>
        <span className="ml-auto  text-gray-400">{t.year}</span>
      </div>
    </motion.div>
  );
};

/* ── Auto-scrolling featured quote ── */
const FeaturedCarousel = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <div className="relative bg-[#020B2D] rounded-3xl overflow-hidden p-8 md:p-12 mb-16">
      {/* Ambient glow */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,193,7,0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-16 right-0 w-56 h-56 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      {/* Grid dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          {/* Big accent quote */}
          <div className="text-7xl font-serif text-[#FFC107] opacity-30 leading-none mb-2 select-none">
            &ldquo;
          </div>

          <p className="text-white text-xl md:text-2xl font-light leading-relaxed mb-8">
            {t.quote}
          </p>

          <div className="flex items-center justify-center gap-4">
            <Avatar initials={t.avatar} accentColor={t.accentColor} />
            <div className="text-left">
              <p className="text-white font-semibold">{t.name}</p>
              <p className="text-gray-400 text-sm">
                {t.role} · {t.company}
              </p>
            </div>
            <span
              className="ml-4  font-semibold px-3 py-1 rounded-full"
              style={{ background: `${t.accentColor}22`, color: t.accentColor }}
            >
              {t.course}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8 relative z-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="transition-all duration-300"
            aria-label={`Go to testimonial ${i + 1}`}
          >
            <motion.div
              className="rounded-full"
              animate={{
                width: i === active ? 24 : 8,
                height: 8,
                background: i === active ? "#FFC107" : "rgba(255,255,255,0.2)",
              }}
              transition={{ duration: 0.3 }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

/* ── Animated section divider ── */
const Divider = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex items-center gap-4 mb-12">
      <motion.div
        className="h-px flex-1"
        style={{
          background: "linear-gradient(to right, transparent, #FFC107)",
        }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="w-2 h-2 rounded-full bg-[#FFC107]"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ delay: 0.5, type: "spring" }}
      />
      <motion.div
        className="h-px flex-1"
        style={{ background: "linear-gradient(to left, transparent, #FFC107)" }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
      />
    </div>
  );
};

/* ── Main export ── */
const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-50 px-6 md:px-16 relative overflow-hidden"
    >
      {/* Background orbs */}
      <motion.div
        className="absolute top-0 right-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,193,7,0.04) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.03) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, delay: 3 }}
      />

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #020B2D 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionTitle
            badge="Student Success"
            title="Lives Changed. Careers Launched."
            description="Thousands of graduates have gone on to work at top companies across Nigeria and beyond."
          />
        </motion.div>

        <Divider />

        {/* Rotating featured quote */}
        <FeaturedCarousel />

        {/* Stats bar */}
        {/* <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {[
            { label: "Graduates placed", value: "5,000+", icon: "🎓" },
            { label: "Companies hiring", value: "200+", icon: "🏢" },
            { label: "Student rating", value: "4.9 / 5", icon: "⭐" },
            { label: "Years of excellence", value: "20+", icon: "🏆" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              className="bg-white rounded-2xl border border-gray-100 p-5 text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="text-2xl mb-1">{s.icon}</div>
              <p className="text-2xl font-bold text-[#020B2D]">{s.value}</p>
              <p className=" text-gray-500 mt-0.5">{s.label}</p>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.id} t={t} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-gray-500 text-sm mb-4">
            Ready to write your own success story?
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#020B2D] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#FFC107] hover:text-black transition-colors duration-300 shadow-md"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Journey
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
