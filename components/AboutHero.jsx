"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";

const AboutHero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  // Track when element enters/exits viewport
  const isInView = useInView(contentRef, {
    once: false, // Allow re-animation when scrolling back
    amount: 0.3, // Trigger when 30% is visible
    margin: "-100px 0px -100px 0px", // Adjust trigger zone
  });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 0.1]);

  // Container variants with exit animations
  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1, // Reverse stagger for exit
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -60,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      x: -70,
      scale: 0.9,
      rotateY: -15,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.7,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.96,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 12,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 12,
        duration: 0.6,
      },
    },
  };

  // Different animation for tagline
  const taglineVariants = {
    hidden: {
      opacity: 0,
      x: -80,
      rotate: -5,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  // Floating particles animation with viewport trigger
  const floatingParticles = [
    { x: "10%", y: "20%", delay: 0, duration: 8, size: "w-72 h-72" },
    { x: "80%", y: "70%", delay: 2, duration: 10, size: "w-96 h-96" },
    { x: "50%", y: "40%", delay: 4, duration: 12, size: "w-64 h-64" },
    { x: "20%", y: "80%", delay: 1, duration: 9, size: "w-48 h-48" },
    { x: "90%", y: "15%", delay: 3, duration: 11, size: "w-56 h-56" },
  ];

  return (
    <section
      ref={heroRef}
      className="bg-[#020B2D] text-white relative overflow-hidden"
    >
      <div className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background Image with Parallax */}
        <motion.div className="absolute inset-0" style={{ y, scale }}>
          <Image
            src="/images/hero.jpg"
            alt="About Aptech"
            fill
            className="object-cover opacity-20"
            priority
            quality={100}
          />
        </motion.div>

        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#020B2D] via-[#020B2D]/95 to-[#020B2D]/70"
          animate={{
            opacity: [1, 0.95, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated Background Particles - Always animate but can be toggled */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {floatingParticles.map((particle, index) => (
            <motion.div
              key={index}
              className={`absolute ${particle.size} bg-[#FFC107]/5 rounded-full blur-3xl`}
              initial={{
                x: particle.x,
                y: particle.y,
                scale: 0.8,
                opacity: 0.03,
              }}
              animate={
                isInView
                  ? {
                      x: [particle.x, `calc(${particle.x} + 20px)`, particle.x],
                      y: [particle.y, `calc(${particle.y} - 20px)`, particle.y],
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.03, 0.08, 0.03],
                    }
                  : {
                      x: particle.x,
                      y: particle.y,
                      scale: 0.8,
                      opacity: 0.03,
                    }
              }
              transition={{
                duration: particle.duration,
                repeat: isInView ? Infinity : 0,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-0 py-20">
          {/* Left Aligned Content */}
          <motion.div
            ref={contentRef}
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.3 }}
          >
            {/* Tagline */}
            <motion.div variants={taglineVariants}>
              <motion.p
                className="text-[#FFC107] uppercase tracking-widest text-sm font-semibold mb-4 relative inline-block group cursor-default"
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
                animate={
                  isInView
                    ? {
                        textShadow: "0 0 0px rgba(255,193,7,0)",
                        transition: { delay: 0.1 },
                      }
                    : {}
                }
              >
                About Aptech Ibadan
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-[#FFC107]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </motion.p>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={titleVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Nigeria's Premier{" "}
                <motion.span
                  className="relative inline-block group mt-4"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 350 }}
                  animate={
                    isInView
                      ? {
                          transition: { delay: 0.2 },
                        }
                      : {}
                  }
                >
                  <motion.span
                    className="text-[#FFC107] relative inline-block cursor-default"
                    animate={
                      isInView
                        ? {
                            textShadow: [
                              "0 0 0px rgba(255,193,7,0)",
                              "0 0 10px rgba(255,193,7,0.5)",
                              "0 0 0px rgba(255,193,7,0)",
                            ],
                          }
                        : {
                            textShadow: "0 0 0px rgba(255,193,7,0)",
                          }
                    }
                    transition={{
                      duration: 2,
                      repeat: isInView ? Infinity : 0,
                      repeatDelay: 3,
                    }}
                  >
                    I.T Institute
                  </motion.span>

                  {/* Animated Underline */}
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#FFC107]/30 -z-10"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-[#FFC107]"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.span>

                  {/* Animated decoration dots - only when in view */}
                  {isInView && (
                    <>
                      <motion.span
                        className="absolute -top-4 -right-6 w-2 h-2 bg-[#FFC107] rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.75, 0, 0.75],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.span
                        className="absolute top-1/2 -right-8 w-1.5 h-1.5 bg-[#FFC107] rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      />
                    </>
                  )}
                </motion.span>
              </h1>
            </motion.div>

            {/* Description Text */}
            <motion.div variants={fadeInUpVariants}>
              <motion.p
                className="text-gray-300 text-lg md:text-xl leading-relaxed relative group"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 350 }}
                animate={
                  isInView
                    ? {
                        color: ["#D1D5DB", "#D1D5DB"],
                        transition: { delay: 0.1 },
                      }
                    : {}
                }
              >
                Welcome to Aptech Ibadan, a leading center for technology
                education and digital skills development. We are dedicated to
                equipping students, professionals, and business owners with
                practical, industry-relevant knowledge.
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FFC107] to-transparent"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.p>
            </motion.div>

            {/* Animated Scroll Indicator - Only show when in view */}
            <AnimatePresence>
              {isInView && (
                <motion.div
                  className="mt-12 flex items-center gap-4"
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ y: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="flex items-center gap-2 text-gray-400 text-sm group cursor-pointer"
                    whileHover={{ x: 8 }}
                  >
                    <motion.span
                      animate={{ y: [0, 6, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      ↓
                    </motion.span>
                    <motion.span
                      className="group-hover:text-[#FFC107] transition-colors duration-300"
                      whileHover={{ color: "#FFC107" }}
                    >
                      Discover Our Journey
                    </motion.span>
                  </motion.div>

                  <div className="w-px h-6 bg-gray-700" />

                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 bg-gray-600 rounded-full"
                        animate={{
                          scale: [1, 1.6, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Entrance/Exit visual indicator (for demo purposes) */}
            <motion.div
              className="absolute -left-4 top-1/2 w-1 h-12 bg-[#FFC107] rounded-full"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={
                isInView
                  ? { scaleY: 1, opacity: 0.6 }
                  : { scaleY: 0, opacity: 0 }
              }
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll-triggered progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFC107] via-[#FFC107]/50 to-[#FFC107] z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollYProgress }}
        transition={{ duration: 0.1 }}
        style={{ originX: 0 }}
      />
    </section>
  );
};

export default AboutHero;
