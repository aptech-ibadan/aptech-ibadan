"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Target, Eye } from "lucide-react";

const AboutMissionVision = () => {
  const sectionRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const missionInView = useInView(missionRef, { once: true, amount: 0.5 });
  const visionInView = useInView(visionRef, { once: true, amount: 0.5 });

  // Scroll (safe)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const gradient1Y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const gradient2Y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.15, 0.1]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.15, 0.1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: (custom) => ({
      opacity: 0,
      x: custom === 0 ? -80 : 80,
      scale: 0.9,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
    hover: {
      y: -10,
      scale: 1.02,
    },
  };

  const iconVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.15, 1],
      transition: { duration: 0.6 },
    },
    hover: { scale: 1.1 },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#020B2D] py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        style={mounted ? { y: gradient1Y, opacity: opacity1 } : {}}
      >
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(at_top_right,#FFC107_0%,transparent_70%)] opacity-20" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        style={mounted ? { y: gradient2Y, opacity: opacity2 } : {}}
      >
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(at_bottom_left,#3B82F6_0%,transparent_70%)] opacity-20" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={mounted && isInView ? "visible" : "hidden"}
        >
          {/* Mission */}
          <motion.div
            ref={missionRef}
            custom={0}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <motion.div
                variants={iconVariants}
                initial="initial"
                animate={mounted && missionInView ? "animate" : "initial"}
                className="mb-6"
              >
                <Target className="text-[#FFC107]" size={32} />
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>

              <p className="text-gray-300">
                To provide high-quality, accessible education in programming,
                empowering students to reach their full potential.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            ref={visionRef}
            custom={1}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <motion.div
                variants={iconVariants}
                initial="initial"
                animate={mounted && visionInView ? "animate" : "initial"}
                className="mb-6"
              >
                <Eye className="text-[#FFC107]" size={32} />
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Our Vision
              </h3>

              <p className="text-gray-300">
                To create a world where anyone can become a skilled developer
                through hands-on, practical learning.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <AnimatePresence>
          {mounted && isInView && (
            <motion.div
              className="hidden md:block absolute left-1/2 top-1/2 w-px h-32 bg-[#FFC107]/30"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutMissionVision;