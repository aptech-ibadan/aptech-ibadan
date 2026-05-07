"use client";
import Image from "next/image";
import { Button } from "@/const";
import heroImage from "../assets/edutechImg.png";
import { motion, useAnimation, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";

/* ── Floating particle ── */
const Particle = ({ x, y, size, duration, delay, color }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: color }}
    animate={{
      y: [0, -30, 0],
      x: [0, 12, -8, 0],
      opacity: [0, 0.6, 0.3, 0.6, 0],
      scale: [0, 1, 0.8, 1, 0],
    }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

/* ── Typewriter ── */
const WORDS = ["Software Development", "Cybersecurity", "Networking", "Multimedia"];

const Typewriter = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIndex];
    let timeout;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <span className="text-[#FFC107]">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block ml-0.5 w-[3px] h-[0.9em] bg-[#FFC107] align-middle"
      />
    </span>
  );
};

/* ── Counter ── */
const Counter = ({ to, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

/* ── Particles config ── */
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 6 + 5,
  delay: Math.random() * 5,
  color: i % 3 === 0 ? "rgba(255,193,7,0.5)" : "rgba(255,255,255,0.15)",
}));

/* ── Hero ── */
const Hero = () => {
  const controls = useAnimation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [4, -4]);
  const rotateY = useTransform(mouseX, [-300, 300], [-4, 4]);

  const [ref, inView] = useInView({ threshold: 0.15 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  /* Stagger children */
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className="bg-[#020B2D] text-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* ── Animated gradient orbs ── */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,193,7,0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(100,120,255,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* ── Particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <Particle key={p.id} {...p} />
        ))}
      </div>

      {/* ── Scan-line grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[750px] flex items-center">
        {/* Background Image */}
        <Image
          src="/images/hero.jpg"
          alt="background students"
          fill
          className="object-cover opacity-20"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020B2D] via-[#020B2D]/95 to-[#020B2D]/70" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-0 py-20 lg:py-0">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* ── Left Content ── */}
            <div className="lg:col-span-7 space-y-6">

              {/* Badge */}
              <motion.div variants={fadeUp}>
                <motion.p
                  className="text-[#FFC107] uppercase tracking-widest text-sm font-semibold inline-flex items-center gap-2"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <motion.span
                    className="inline-block w-2 h-2 rounded-full bg-[#FFC107]"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  Aptech Ibadan • Arena Multimedia
                </motion.p>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Nigeria&apos;s Premier{" "}
                <span className="relative inline-block">
                  <span className="text-[#FFC107]">I.T Institute</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-1.5 bg-[#FFC107]/30 -z-10 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  />
                </span>
              </motion.h1>

              {/* Typewriter subheadline */}
              <motion.p variants={fadeUp} className="text-gray-300 text-lg md:text-xl max-w-2xl">
                Build real-world skills in{" "}
                <Typewriter />
                <br />
                Get certified, gain experience, and become globally employable.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    classes="bg-[#FFC107] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#FFD700] transition-colors duration-300 shadow-lg text-center block"
                    link="/contact"
                    text="Enroll Now"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    classes="border-2 border-white px-8 py-4 rounded-full  hover:text-[#020B2D] transition-all duration-300 text-center block"
                    link="/program"
                    text="Explore Courses"
                  />
                </motion.div>
              </motion.div>

              {/* Stats row */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-8 pt-4 border-t border-white/10"
              >
                {[
                  { value: 5000, label: "Graduates" },
                  { value: 20, label: "Years of Excellence" },
                  { value: 30, label: "Courses Offered" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-2xl font-bold text-[#FFC107]">
                      <Counter to={value} />
                    </p>
                    <p className="text-sm text-gray-400">{label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right Image — Desktop ── */}
            <motion.div
              variants={fadeLeft}
              className="hidden lg:block lg:col-span-5"
              style={{ rotateX, rotateY, perspective: 1000, transformStyle: "preserve-3d" }}
            >
              <div className="relative group">
                {/* Glow */}
                <motion.div
                  className="absolute -inset-6 rounded-[3rem] pointer-events-none"
                  style={{ background: "radial-gradient(ellipse, rgba(255,193,7,0.25) 0%, transparent 70%)" }}
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
                    transition={{ delay: 1.2 + i * 0.1 }}
                  />
                ))}

                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-[#020B2D]/80 to-transparent border border-white/10">
                  <div className="relative h-[320px] sm:h-[380px]">
                    <Image
                      src={heroImage}
                      alt="Students learning at Aptech"
                      fill
                      className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105 h-full w-full"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      priority
                    />
                  </div>

                  {/* Shimmer sweep */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />

                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020B2D] to-transparent" />

                  {/* Floating badge */}
                  <motion.div
                    className="absolute bottom-8 left-4 bg-[#020B2D]/90 backdrop-blur-sm border border-[#FFC107]/30 rounded-xl px-4 py-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    whileHover={{ scale: 1.04 }}
                  >
                    <p className="text-xs text-gray-400">Next intake</p>
                    <p className="text-sm font-semibold text-[#FFC107]">Enrolling Now</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── Mobile/Tablet Image ── */}
        <div className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md px-6 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#FFC107]/25 to-transparent rounded-3xl blur-xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 hidden lg:block">
              <div className="relative h-auto sm:h-auto">
                <Image
                  src={heroImage}
                  alt="Students learning at Aptech"
                  fill
                  className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                  sizes="90vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;