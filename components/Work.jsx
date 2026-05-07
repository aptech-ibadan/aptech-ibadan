"use client";

import Image from "next/image";
import { Button } from "@/const";
import { motion, useAnimation, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

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

/* ── Floating particle ── */
const Particle = ({ x, y, size, duration, delay, color }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: color }}
    animate={{ y: [0, -28, 0], x: [0, 10, -6, 0], opacity: [0, 0.55, 0.3, 0.55, 0], scale: [0, 1, 0.8, 1, 0] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 6 + 5,
  delay: Math.random() * 5,
  color: i % 3 === 0 ? "rgba(96,165,250,0.45)" : i % 3 === 1 ? "rgba(167,139,250,0.35)" : "rgba(255,255,255,0.12)",
}));

const Work = () => {
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

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  const HIGHLIGHTS = [
    { icon: "🎓", label: "UK & Germany pathways" },
    { icon: "🏅", label: "Global certifications" },
    { icon: "💻", label: "Hands-on projects" },
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className="relative bg-[#020B2D] text-white py-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* ── Ambient orbs ── */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* ── Particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => <Particle key={p.id} {...p} />)}
      </div>

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-xl lg:container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── TEXT SIDE ── */}
          <div className="space-y-6">

            {/* Badge */}
            <motion.div variants={fadeRight}>
              <motion.p
                className="uppercase tracking-[4px] text-sm text-blue-400 inline-flex items-center gap-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <motion.span
                  className="inline-block w-2 h-2 rounded-full bg-blue-400"
                  animate={{ scale: [1, 1.6, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                What We Do
              </motion.p>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold leading-tight"
            >
              Building Global Careers Through{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Tech Education & International Pathways
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 rounded-full bg-gradient-to-r from-blue-400/40 to-purple-500/40 -z-10"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            {/* Body copy */}
            <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed max-w-lg">
              We provide industry-focused training in software development, data science,
              and digital technologies designed to prepare students for real-world careers.
              Our programs combine practical learning with globally recognized certifications
              and direct progression opportunities to universities in the UK, Germany, and beyond.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed max-w-lg">
              Whether you're starting your journey or advancing your skills, we equip you
              with the knowledge, experience, and international exposure needed to thrive
              in today's competitive tech landscape.
            </motion.p>

            {/* Highlight pills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {HIGHLIGHTS.map(({ icon, label }, i) => (
                <motion.span
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(96,165,250,0.4)" }}
                >
                  <span style={{ fontSize: 14 }}>{icon}</span> {label}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  classes="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full text-white font-medium transition block"
                  link="/program"
                  text="Explore More"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Button
                  classes="border border-white/30 px-6 py-3 rounded-full text-white hover:text-black transition block"
                  link="/contact"
                  text="Contact Us"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* ── IMAGE SIDE ── */}
          <motion.div
            variants={fadeLeft}
            className="relative group"
            style={{ rotateX, rotateY, perspective: 1000, transformStyle: "preserve-3d" }}
          >
            {/* Glow behind */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(96,165,250,0.22) 0%, rgba(139,92,246,0.15) 60%, transparent 80%)" }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Corner accents */}
            {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
              <motion.div
                key={i}
                className={`absolute ${pos} w-5 h-5 pointer-events-none z-20`}
                style={{
                  borderColor: "rgba(96,165,250,0.7)",
                  borderTopWidth: i < 2 ? 2 : 0,
                  borderBottomWidth: i >= 2 ? 2 : 0,
                  borderLeftWidth: i % 2 === 0 ? 2 : 0,
                  borderRightWidth: i % 2 !== 0 ? 2 : 0,
                  borderStyle: "solid",
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + i * 0.1 }}
              />
            ))}

            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/img4.jpg"
                alt="Work"
                width={600}
                height={500}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                priority
              />

              {/* Shimmer sweep */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)",
                  backgroundSize: "200% 100%",
                }}
                animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2.5 }}
              />

              {/* Bottom gradient */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020B2D]/80 to-transparent pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute bottom-6 left-6 bg-[#020B2D]/80 backdrop-blur-lg border border-white/20 px-4 py-3 rounded-xl text-sm z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-xs text-gray-400 mb-0.5">Alumni worldwide</p>
              <p className="font-semibold text-blue-400">
                🚀 <Counter to={1000} />+ Graduates
              </p>
            </motion.div>

            {/* Top-right floating tag */}
            <motion.div
              className="absolute top-6 right-6 bg-[#020B2D]/80 backdrop-blur-lg border border-purple-500/30 px-3 py-2 rounded-xl text-xs z-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-purple-400 font-medium">🌍 UK & Germany Pathways</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Work;