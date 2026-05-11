"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const programs = [
  {
    title: "ACCP",
    subtitle: "Software Development",
    icon: "⌨",
    accent: "#FFC107",
    items: [
      "Front-End Development",
      "Back-End Development",
      "Full Stack Engineering",
      "Mobile App Development",
      "Database Systems",
    ],
  },
  {
    title: "ACNS",
    subtitle: "Networking & Cybersecurity",
    icon: "⬡",
    accent: "#020B2D",
    items: [
      "Network Engineering",
      "Cybersecurity & Ethical Hacking",
      "Cloud Administration",
      "Windows & Linux Systems",
    ],
  },
  {
    title: "AMSP",
    subtitle: "Multimedia & Design",
    icon: "◈",
    accent: "#FFC107",
    items: [
      "UI/UX Design",
      "3D Animation",
      "Motion Graphics",
      "Game Development",
      "Graphics Design",
    ],
  },
];

/* ── Animated list item ── */
const ListItem = ({ text, delay }) => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-2 text-gray-600 text-sm"
    >
      <motion.span
        className="inline-block w-1.5 h-1.5 rounded-full bg-[#FFC107] flex-shrink-0"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: delay + 0.1 }}
      />
      {text}
    </motion.li>
  );
};

/* ── Program card ── */
const ProgramCard = ({ prog, index }) => {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.18,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      className="relative p-6 rounded-2xl border border-gray-100 bg-white shadow-md overflow-hidden cursor-pointer group"
    >
      {/* Animated background fill on hover */}
      <motion.div
        className="absolute inset-0 bg-[#020B2D] pointer-events-none"
        initial={{ scaleY: 0, originY: 1 }}
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Glowing corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-24 h-24 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,193,7,0.15) 0%, transparent 70%)",
          translateX: "40%",
          translateY: "-40%",
        }}
        animate={{ scale: hovered ? 1.4 : 1, opacity: hovered ? 1 : 0.5 }}
        transition={{ duration: 0.4 }}
      />

      {/* Decorative number */}
      <motion.span
        className="absolute top-4 right-5 text-6xl font-black pointer-events-none select-none"
        style={{
          color: hovered ? "rgba(255,193,7,0.12)" : "rgba(2,11,45,0.05)",
        }}
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.4 }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon + title */}
        <div className="flex items-center gap-3 mb-1">
          <motion.span
            className="text-2xl"
            animate={{ rotate: hovered ? 15 : 0, scale: hovered ? 1.2 : 1 }}
            transition={{ duration: 0.3 }}
            style={{ color: hovered ? "#FFC107" : "#020B2D" }}
          >
            {prog.icon}
          </motion.span>
          <motion.h3
            className="text-2xl font-black tracking-tight"
            animate={{ color: hovered ? "#FFC107" : "#020B2D" }}
            transition={{ duration: 0.3 }}
          >
            {prog.title}
          </motion.h3>
        </div>

        {/* Subtitle */}
        <motion.p
          className="font-semibold mb-5 text-lg"
          animate={{ color: hovered ? "rgba(255,255,255,0.7)" : "#FFC107" }}
          transition={{ duration: 0.3 }}
        >
          {prog.subtitle}
        </motion.p>

        {/* Divider */}
        <motion.div
          className="h-px mb-5"
          animate={{
            background: hovered ? "rgba(255,193,7,0.3)" : "rgba(2,11,45,0.08)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Items */}
        <ul className="space-y-2.5">
          {prog.items.map((item, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-2 text-lg"
              animate={{
                color: hovered ? "rgba(255,255,255,0.85)" : "#4b5563",
              }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <motion.span
                className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                animate={{ background: hovered ? "#FFC107" : "#FFC107" }}
              />
              {item}
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <motion.div
          className="mt-6 overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: hovered ? "auto" : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        >
          {/* <motion.button
            className="w-full py-2.5 rounded-xl bg-[#FFC107] text-[#020B2D] font-bold text-sm tracking-wide"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Learn More →
          </motion.button> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ── Section ── */
const Programs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return (
    <section className="bg-white py-20 px-6 md:px-0">
      <div className="container max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 overflow-hidden">
          <motion.p
            className="text-[#FFC107] uppercase tracking-widest text-xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What We Offer
          </motion.p>

          {/* <div className="overflow-hidden">
            <motion.h2
              className="text-3xl md:text-4xl font-black text-[#020B2D]"
              // initial={{ y: 60, opacity: 0 }}
              // whileInView={{ y: 0, opacity: 1 }}
              // viewport={{ once: true }}
              // transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              Flagship Career Programs
            </motion.h2>
          </div> */}

          <motion.div
            className="mx-auto mt-4 h-1 bg-[#FFC107] rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        {/* Cards grid */}
        <div ref={ref} className="grid md:grid-cols-3 gap-6 px-0 lg:px-0">
          {programs.map((prog, index) => (
            <ProgramCard key={index} prog={prog} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href="/program"
            className="inline-flex items-center gap-2 border-2 border-[#020B2D] text-[#020B2D] px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#020B2D] hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            View All Programs
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
