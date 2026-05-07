"use client";

import { motion, useAnimation, useMotionValue, useTransform, AnimatePresence, animate } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

/* ── Floating particle (identical to ProgramsHero) ── */
const Particle = ({ x, y, size, duration, delay, color }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: color }}
    animate={{ y: [0, -28, 0], x: [0, 10, -6, 0], opacity: [0, 0.55, 0.25, 0.55, 0], scale: [0, 1, 0.8, 1, 0] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 3 + 5,
  delay: Math.random() * 3,
  color: i % 3 === 0 ? "rgba(255,193,7,0.5)" : "rgba(255,255,255,0.12)",
}));

/* ── Animated counter ── */
const Counter = ({ to, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return ctrl.stop;
  }, [inView, to]);
  return <span ref={ref}>{count}{suffix}</span>;
};

/* ── Stagger variants (shared) ── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

 
 
export default function CourseClient({ course, slug }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]); // fires every time slug changes

  const [activeIndex, setActiveIndex] = useState(0);
  const activeTerm = course.terms[activeIndex];
  const contentRef = useRef(null);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [3, -3]);
  const rotateY = useTransform(mouseX, [-300, 300], [-3, 3]);

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  // useEffect(() => {
  //   const el = contentRef.current;
  //   if (!el) return;
  //   const y = el.getBoundingClientRect().top + window. - 100;
  //   window.scrollTo({ top: y, behavior: "smooth" });
  // }, [activeIndex]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <div className="bg-[#020B2D] text-white relative overflow-hidden min-h-screen">

      {/* ── Ambient orbs (from ProgramsHero) ── */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,193,7,0.07) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 25, 0], y: [0, -18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] -right-20 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(80,100,255,0.05) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], x: [0, -18, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,193,7,0.04) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* ── Particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => <Particle key={p.id} {...p} />)}
      </div>

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* ════════════════════ HERO ════════════════════ */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={container}
        className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-6 pt-24 pb-20 grid md:grid-cols-2 gap-14 items-center"
        onMouseMove={handleMouseMove}
      >
        {/* LEFT: copy */}
        <div className="space-y-6">
          {/* Live badge */}
          <motion.div variants={fadeUp}>
            <motion.p
              className="text-[#FFC107] uppercase tracking-widest text-sm font-semibold inline-flex items-center gap-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.0, repeat: Infinity }}
            >
              <motion.span
                className="inline-block w-2 h-2 rounded-full bg-[#FFC107]"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.0, repeat: Infinity }}
              />
              Aptech Ibadan • Arena Multimedia
            </motion.p>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold leading-tight"
          >
            {course.title.split(" ").map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="relative inline-block">
                  <span className="text-[#FFC107]">{word}</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-1.5 bg-[#FFC107]/30 -z-10 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "50%" }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  />
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </motion.h1>

          {/* Tagline */}
          {course.tagline && (
            <motion.p variants={fadeUp} className="text-gray-300 text-lg md:text-xl max-w-xl">
              {course.tagline}
            </motion.p>
          )}

          {/* Description */}
          <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed max-w-xl">
            {course.description}
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-2">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#FFC107] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#FFD700] transition-colors duration-300 shadow-lg text-center block"
            >
              Enroll Now
            </motion.a>
            <motion.a
              href="#curriculum"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="border-2 border-white/30 hover:border-[#FFC107] px-8 py-4 rounded-full transition-all duration-300 text-center block"
            >
              View Curriculum
            </motion.a>
          </motion.div>

          {/* Stats row */}
          {course.totalHours && (
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-8 pt-4 border-t border-white/10"
            >
              {[
                { value: parseInt(course.totalHours), label: "Total Hours", suffix: "h" },
                { value: course.terms?.length ?? 0, label: "Terms", suffix: "" },
                { value: course.terms?.reduce((acc, t) => acc + t.modules.length, 0) ?? 0, label: "Modules", suffix: "+" },
              ].map(({ value, label, suffix }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-[#FFC107]">
                    <Counter to={value} suffix={suffix} />
                  </p>
                  <p className="text-sm text-gray-400">{label}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* RIGHT: media card */}
        <motion.div
          variants={fadeRight}
          style={{ rotateX, rotateY, perspective: 1000, transformStyle: "preserve-3d" }}
          className="relative group"
        >
          {/* Gold glow */}
          <motion.div
            className="absolute -inset-6 rounded-[3rem] pointer-events-none"
            style={{ background: "radial-gradient(ellipse, rgba(255,193,7,0.18) 0%, transparent 70%)" }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Corner accents */}
          {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
            <motion.div
              key={i}
              className={`absolute ${pos} w-5 h-5 border-[#FFC107] pointer-events-none z-20`}
              style={{
                borderTopWidth: i < 2 ? 2 : 0,
                borderBottomWidth: i >= 2 ? 2 : 0,
                borderLeftWidth: i % 2 === 0 ? 2 : 0,
                borderRightWidth: i % 2 !== 0 ? 2 : 0,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 + i * 0.1 }}
            />
          ))}

          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-[#020B2D]/80 to-transparent border border-white/10">
            {/* Media */}
            <div className="relative h-[300px] sm:h-[360px] overflow-hidden">
              {course.media?.type === "video" ? (
                <video
                  className="w-full h-full object-cover"
                  autoPlay loop muted playsInline
                >
                  <source src={course.media.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={course.media?.src}
                  alt={course.title}
                  className="w-full h-full object-cover object-center"
                />
              )}

              {/* Shimmer sweep */}
              <motion.div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2.5 }}
              />

              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020B2D] to-transparent z-10" />
            </div>

            {/* Card footer */}
            <div className="p-5">
              <p className="text-xs text-gray-500 uppercase tracking-widest">Preview</p>
              <p className="font-semibold text-base text-white mt-1">
                Structured, guided, industry-ready path
              </p>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute bottom-14 left-4 z-20 bg-[#020B2D]/90 backdrop-blur-sm border border-[#FFC107]/30 rounded-xl px-4 py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
            >
              <p className="text-xs text-gray-400">Enrollment</p>
              <p className="text-sm font-semibold text-[#FFC107]">Open Now</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* ════════════════════ CURRICULUM ════════════════════ */}
      <section id="curriculum" className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-6 py-20">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.p
            className="text-[#FFC107] uppercase tracking-widest text-sm font-semibold inline-flex items-center gap-2 mb-3"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.0, repeat: Infinity }}
          >
            <motion.span
              className="inline-block w-2 h-2 rounded-full bg-[#FFC107]"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.0, repeat: Infinity }}
            />
            Full Curriculum
          </motion.p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Your Learning <span className="text-[#FFC107]">Journey</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8">

          {/* ── LEFT: Term tabs ── */}
          <div className="md:col-span-4 space-y-3">
            {course.terms.map((term, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "bg-[#FFC107]/10 border-[#FFC107]/50 shadow-[0_0_30px_rgba(255,193,7,0.15)]"
                      : "bg-white/5 border-white/10 hover:border-[#FFC107]/30 hover:bg-white/8"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{
                        background: isActive ? "#FFC107" : "rgba(255,255,255,0.2)",
                        scale: isActive ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-3 h-3 rounded-full flex-shrink-0"
                    />
                    <h3 className={`font-bold transition-colors duration-300 ${isActive ? "text-[#FFC107]" : "text-white"}`}>
                      {term.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 mt-2 ml-6">
                    {term.modules.length} modules
                  </p>
                  {/* Progress bar */}
                  {isActive && (
                    <motion.div
                      className="mt-3 ml-6 h-0.5 bg-[#FFC107]/30 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="h-full bg-[#FFC107] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* ── RIGHT: Content ── */}
          <div ref={contentRef} className="md:col-span-8 space-y-5">

            {/* Modules panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl p-8 bg-white/5 border border-white/10 relative overflow-hidden"
              >
                {/* Subtle corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(255,193,7,0.06) 0%, transparent 70%)" }} />

                <h2 className="text-xl font-bold mb-6 text-[#FFC107]">
                  {activeTerm.title}
                </h2>

                <div className="space-y-3">
                  {activeTerm.modules.map((mod, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.35 }}
                      className="group p-4 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:bg-[#FFC107]/5 hover:border-[#FFC107]/30 hover:text-white transition-all duration-300 flex items-center gap-3"
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-[#FFC107]/50 group-hover:bg-[#FFC107] flex-shrink-0"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                      />
                      {mod}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Snapshot card */}
            {(course.totalHours || course.outcomes) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFC107]/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFC107]/50 via-[#FFC107]/20 to-transparent" />
                <h3 className="font-bold mb-4 text-white flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-[#FFC107] rounded-full inline-block" />
                  Program Snapshot
                </h3>
                {course.totalHours && (
                  <p className="text-gray-400 text-sm">
                    ⏱ <span className="text-[#FFC107] font-semibold">{course.totalHours}</span> Total Hours
                  </p>
                )}
                {course.outcomes && (
                  <p className="text-gray-400 text-sm mt-2">{course.outcomes}</p>
                )}
              </motion.div>
            )}

            {/* Highlights card */}
            {course.highlights && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFC107]/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFC107]/50 via-[#FFC107]/20 to-transparent" />
                <h3 className="font-bold mb-4 text-white flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-[#FFC107] rounded-full inline-block" />
                  Why This Program
                </h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {course.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-2 hover:text-gray-300 transition-colors"
                    >
                      <span className="text-[#FFC107] mt-0.5">•</span>
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Industry insight */}
            {course.industryOverview && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFC107]/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFC107]/50 via-[#FFC107]/20 to-transparent" />
                <h3 className="font-bold mb-4 text-white flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-[#FFC107] rounded-full inline-block" />
                  Industry Insight
                </h3>
                <div className="space-y-2">
                  {[
                    course.industryOverview.growth,
                    course.industryOverview.insight1,
                    course.industryOverview.insight2,
                    course.industryOverview.insight3,
                  ].filter(Boolean).map((insight, i) => (
                    <p key={i} className={`text-sm ${i === 0 ? "text-gray-300" : "text-gray-500"}`}>
                      {insight}
                    </p>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Skill builder tags */}
            {course.skillBuilderPrograms && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFC107]/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFC107]/50 via-[#FFC107]/20 to-transparent" />
                <h3 className="font-bold mb-4 text-white flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-[#FFC107] rounded-full inline-block" />
                  Skill Builder Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.skillBuilderPrograms.map((s, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.08, borderColor: "rgba(255,193,7,0.6)" }}
                      className="px-3 py-1.5 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-[#FFC107] transition-colors duration-300 cursor-default"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA strip ── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative border-t border-white/10 py-16 text-center px-6"
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(255,193,7,0.04) 0%, transparent 70%)" }} />
        <p className="text-[#FFC107] uppercase tracking-widest text-sm font-semibold mb-3">
          Ready to begin?
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold mb-6">
          Enroll in <span className="text-[#FFC107]">{course.title}</span> Today
        </h3>
        <motion.a
          href="https://wa.me/2347070491555"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-[#FFC107] text-black px-10 py-4 rounded-full font-semibold hover:bg-[#FFD700] transition-colors duration-300 shadow-[0_0_30px_rgba(255,193,7,0.25)]"
        >
          Enroll Now
        </motion.a>
      </motion.section>

    </div>
  );
}