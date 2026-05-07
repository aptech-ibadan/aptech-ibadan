"use client";
import { Button } from "@/const";
import { ArrowRight, Users, Award, Zap } from "lucide-react";
import { motion, useAnimation, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

/* ── Floating particle ── */
const Particle = ({ x, y, size, duration, delay, color }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: color }}
    animate={{ y: [0, -24, 0], x: [0, 10, -6, 0], opacity: [0, 0.5, 0.25, 0.5, 0], scale: [0, 1, 0.7, 1, 0] }}
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
  color: i % 3 === 0 ? "rgba(255,193,7,0.45)" : "rgba(255,255,255,0.1)",
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

/* ── Card ── */
const BenefitCard = ({ icon: Icon, label, desc, index }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, borderColor: "rgba(255,193,7,0.4)" }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-colors duration-300 group cursor-default"
    >
      <motion.div
        className="w-12 h-12 bg-[#FFC107]/10 rounded-xl flex items-center justify-center mb-4"
        whileHover={{ scale: 1.15, backgroundColor: "rgba(255,193,7,0.2)" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="text-[#FFC107]" size={26} />
      </motion.div>
      <h4 className="text-white font-semibold text-lg mb-1">{label}</h4>
      <p className="text-gray-400 text-sm">{desc}</p>
    </motion.div>
  );
};

/* ── Main ── */
const Enroll = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  const BENEFITS = [
    { icon: Users, label: "Global Network", desc: "Connect with students worldwide" },
    { icon: Award, label: "Industry Certification", desc: "Earn recognized credentials" },
    { icon: Zap, label: "Fast-Track Career", desc: "Job-ready in 6–12 months" },
  ];

  return (
    <section className="bg-[#020B2D] py-20 md:py-28 relative overflow-hidden">

      {/* Gradient orbs */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, rgba(255,193,7,0.08) 0%, transparent 55%)" }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(59,130,246,0.07) 0%, transparent 60%)" }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      {/* Scan-line grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => <Particle key={p.id} {...p} />)}
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={container}
        className="max-w-5xl mx-auto px-6 md:px-12 relative z-10"
      >
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div variants={fadeUp}>
            <motion.div
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-6"
              animate={{ boxShadow: ["0 0 0px rgba(255,193,7,0)", "0 0 18px rgba(255,193,7,0.25)", "0 0 0px rgba(255,193,7,0)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: [0, 15, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
              >
                <Zap className="text-[#FFC107]" size={22} />
              </motion.div>
              <p className="text-[#FFC107] uppercase tracking-[3px] text-sm font-semibold">
                Next Enrollment Open
              </p>
              <motion.span
                className="w-2 h-2 rounded-full bg-[#FFC107]"
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-4xl"
          >
            Ready To Get Started?{" "}
            <br />
            <span className="relative inline-block text-[#FFC107]">
              Your Tech Future Begins Here
              <motion.span
                className="absolute -bottom-1 left-0 h-1.5 bg-[#FFC107]/25 rounded-full -z-10"
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : {}}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Join a diverse community of ambitious learners from around the world.
            Build real skills, earn globally recognized certifications, and launch
            your career in tech.
          </motion.p>

          {/* Mini stats */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-10 mt-10 py-6 border-y border-white/10 w-full max-w-xl"
          >
            {[
              { value: 5000, label: "Graduates" },
              { value: 20, label: "Years Running" },
              { value: 30, label: "Courses" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-bold text-[#FFC107]">
                  <Counter to={value} />
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* Benefit cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 w-full max-w-3xl">
            {BENEFITS.map((item, i) => (
              <BenefitCard key={i} {...item} index={i} />
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                classes="bg-[#FFC107] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#FFD700] transition-colors duration-300 shadow-lg inline-flex items-center gap-2"
                link="/contact"
                text="Enroll Now"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                classes="border-2 border-white px-8 py-4 rounded-full  transition-all duration-300 inline-flex items-center gap-2"
                link="/program"
                text="Explore Courses"
              />
            </motion.div>
          </motion.div>

          {/* Urgency line */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-500 text-sm tracking-wide"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Limited slots available for the new intake • Starts soon
          </motion.p>

        </div>
      </motion.div>
    </section>
  );
};

export default Enroll;