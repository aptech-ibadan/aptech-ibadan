"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutMain = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Track when elements enter/exit viewport
  const isSectionInView = useInView(sectionRef, {
    once: false,
    amount: 0.2,
    margin: "-50px 0px -50px 0px",
  });

  const isTextInView = useInView(textRef, {
    once: false,
    amount: 0.3,
    margin: "-100px 0px -100px 0px",
  });

  const isImageInView = useInView(imageRef, {
    once: false,
    amount: 0.3,
    margin: "-100px 0px -100px 0px",
  });

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]);

  // Text animation variants
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };

  const textItemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      rotateY: -10,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      x: -30,
      rotateY: -5,
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.95,
      rotateY: 10,
      transition: { type: "spring", stiffness: 90, damping: 15 },
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: { type: "spring", stiffness: 90, damping: 12, duration: 0.7 },
    },
    exit: {
      opacity: 0,
      x: 30,
      scale: 0.97,
      rotateY: 5,
      transition: { duration: 0.3 },
    },
  };

  const badgeVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.8,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        delay: 0.5,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  const gradientTextVariants = {
    hidden: {
      opacity: 0,
      backgroundPosition: "0% 50%",
      transition: { duration: 0.5 },
    },
    visible: {
      opacity: 1,
      backgroundPosition: "100% 50%",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  // Button hover animations
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative bg-white py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background Glows */}
      <motion.div
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-100/50 blur-[120px] rounded-full"
        style={{ y: backgroundY, opacity }}
        animate={
          isSectionInView
            ? {
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }
            : {}
        }
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-100/50 blur-[120px] rounded-full"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]), opacity }}
        animate={
          isSectionInView
            ? {
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }
            : {}
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* TEXT SIDE */}
          <motion.div
            ref={textRef}
            variants={textContainerVariants}
            initial="hidden"
            animate={isTextInView ? "visible" : "hidden"}
            exit="exit"
          >
            {/* Tagline */}
            <motion.p
              variants={textItemVariants}
              className="uppercase tracking-[4px] text-sm text-blue-600 font-semibold mb-3 inline-block"
              whileHover={{
                letterSpacing: "6px",
                color: "#7C3AED",
                transition: { duration: 0.3 },
              }}
            >
              Who We Are
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.p>

            {/* Main Title */}
            <motion.h2
              variants={textItemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-[#020B2D]"
            >
              Building Global Careers Through{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 inline-block"
                variants={gradientTextVariants}
                initial="hidden"
                animate={isTextInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ backgroundSize: "200% 100%" }}
              >
                Tech Education
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={textItemVariants}
              className="text-gray-600 leading-relaxed mb-6"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              At Aptech Ibadan, our programs cover key areas such as software
              development, data analysis, networking, cybersecurity, and digital
              design. Backed by global standards from Aptech Computer Education,
              our experienced instructors deliver quality training that empowers
              learners to build careers, start businesses, and stay competitive
              in the global digital economy.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={textItemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300 inline-block cursor-pointer relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Enroll Now</span>
                </Link>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  href="/program"
                  className="border-2 border-blue-600 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:scale-105 transition-all duration-300 inline-block cursor-pointer relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-white"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Explore Programs</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* IMAGE SIDE */}
          <motion.div
            ref={imageRef}
            className="relative group"
            variants={imageVariants}
            initial="hidden"
            animate={isImageInView ? "visible" : "hidden"}
            exit="exit"
          >
            {/* Animated Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"
              animate={
                isImageInView
                  ? {
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }
                  : {}
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Image Container */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="https://res.cloudinary.com/ddldviftf/image/upload/v1777743001/ChatGPT_Image_May_2_2026_06_24_40_PM_oytsgb.png"
                alt="Students learning at Aptech"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-lg border border-gray-200 shadow-lg px-4 py-3 rounded-xl text-sm text-gray-700 cursor-default"
              variants={badgeVariants}
              initial="hidden"
              animate={isImageInView ? "visible" : "hidden"}
              exit="exit"
              whileHover={{
                scale: 1.05,
                backgroundColor: "white",
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.span
                className="font-semibold text-blue-600"
                animate={
                  isImageInView
                    ? {
                        scale: [1, 1.1, 1],
                      }
                    : {}
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                🎓 1000+
              </motion.span>{" "}
              Graduates
            </motion.div>

            {/* Additional Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"
              animate={
                isImageInView
                  ? {
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }
                  : {}
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator Line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollYProgress }}
        transition={{ duration: 0.1 }}
        style={{ originX: 0 }}
      />
    </motion.section>
  );
};

export default AboutMain;
