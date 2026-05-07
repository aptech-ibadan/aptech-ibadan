"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Users, Award, Target, Globe, MapPin } from "lucide-react";

const AboutStats = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2,
    margin: "-50px 0px -50px 0px",
  });

  const statsInView = useInView(statsRef, {
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

  const statsData = [
    {
      number: "1000+",
      label: "Students Trained",
      icon: Users,
      gradient: "from-[#FFC107]/20 to-transparent",
    },
    {
      number: "50+",
      label: "Expert Instructors",
      icon: Award,
      gradient: "from-[#FFC107]/20 to-transparent",
    },
    {
      number: "95%",
      label: "Job Placement Rate",
      icon: Target,
      gradient: "from-[#FFC107]/20 to-transparent",
    },
    {
      number: "10+",
      label: "Global Partners",
      icon: Globe,
      gradient: "from-[#FFC107]/20 to-transparent",
    },
    {
      number: "2",
      label: "Campuses in Ibadan",
      icon: MapPin,
      gradient: "from-[#FFC107]/20 to-transparent",
    },
  ];

  // Animated counter component
  const AnimatedNumber = ({ value, inView }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const targetValue = parseInt(value) || 0;
    const suffix = value.includes("+") ? "+" : value.includes("%") ? "%" : "";
    const numericValue = parseInt(value);

    useEffect(() => {
      if (inView) {
        let start = 0;
        const duration = 2000;
        const increment = numericValue / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= numericValue) {
            setDisplayValue(numericValue);
            clearInterval(timer);
          } else {
            setDisplayValue(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      } else {
        setDisplayValue(0);
      }
    }, [inView, numericValue]);

    return (
      <span>
        {displayValue}
        {suffix}
      </span>
    );
  };

  // Container variants with stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const statVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotateX: -15,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
    hover: {
      y: -8,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const iconContainerVariants = {
    initial: { scale: 1, rotate: 0 },
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.15,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const numberVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 0.5,
        delay: 0.1,
      },
    },
  };

  const labelVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.7,
      },
    },
  };

  const badgeVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      rotate: -10,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 0.5,
      },
    },
  };
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = [...Array(20)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * 500,
    }));
    setParticles(generated);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-28 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFC107]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#FFC107]/3 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FFC107]/20 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: Math.random() * 500,
            }}
            animate={{
              y: [null, -30, 30, -20, 20, 0],
              x: [null, 20, -20, 15, -15, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Grid Pattern - Fixed SVG encoding */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='%23FFC107' stroke-width='0.5' stroke-opacity='0.03'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center gap-3 bg-[#FFC107]/10 text-[#FFC107] text-sm font-medium px-6 py-2.5 rounded-full mb-4 overflow-hidden"
            variants={badgeVariants}
          >
            <motion.span
              className="w-2 h-2 bg-[#FFC107] rounded-full"
              animate={
                isInView
                  ? {
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            Our Impact
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#020B2D] mb-4"
            variants={titleVariants}
          >
            Aptech By The Numbers
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            variants={titleVariants}
          >
            Transforming tech education with world-class facilities and expert
            instruction
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={statsRef}
          className="flex justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                whileHover="hover"
                className="text-center group relative"
                custom={index}
              >
                {/* Glow Effect on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, rgba(255,193,7,0.1), transparent 70%)`,
                  }}
                />

                {/* Icon Container */}
                <motion.div
                  className="w-20 h-20 bg-[#FFC107]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 relative"
                  variants={iconContainerVariants}
                  initial="initial"
                  animate={statsInView ? "animate" : "initial"}
                  whileHover="hover"
                >
                  <stat.icon className="text-[#FFC107]" size={34} />

                  {/* Ripple Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-[#FFC107]/30"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={
                      statsInView
                        ? {
                            scale: [1, 1.5, 2],
                            opacity: [0.5, 0, 0],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeOut",
                    }}
                  />
                </motion.div>

                {/* Number with Counter */}
                <motion.h4
                  className="text-3xl md:text-4xl font-bold text-[#020B2D] mb-2"
                  variants={numberVariants}
                >
                  <AnimatedNumber value={stat.number} inView={statsInView} />
                </motion.h4>

                {/* Label */}
                <motion.p
                  className="text-gray-600 text-sm md:text-base font-medium"
                  variants={labelVariants}
                  whileHover={{ y: -2, color: "#FFC107" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.label}
                </motion.p>

                {/* Decorative Line */}
                <motion.div
                  className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FFC107] to-transparent"
                  initial={{ width: 0, x: "-50%" }}
                  whileHover={{ width: "50%", x: "-50%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Decorative Bar */}
        <AnimatePresence>
          {isInView && (
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.div
                className="inline-flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#FFC107]" />
                <p className="text-gray-500 text-sm">
                  Growing stronger every day
                </p>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#FFC107]" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutStats;
