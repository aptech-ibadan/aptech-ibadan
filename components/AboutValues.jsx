"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Award, Lightbulb, Users, Shield, Globe, Heart } from "lucide-react";

const AboutValues = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(sectionRef, { 
    once: false, // Re-animate when scrolling back
    amount: 0.2, // Trigger when 20% is visible
    margin: "-50px 0px -50px 0px"
  });
  
  const titleInView = useInView(titleRef, { 
    once: false, 
    amount: 0.5,
    margin: "-100px 0px -100px 0px"
  });

  // Parallax scroll effect for background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]);

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We are committed to delivering top-notch education and ensuring our students are well-prepared for their careers.",
      highlight: false,
      color: "#FFC107",
      gradient: "from-[#FFC107]/20 to-transparent",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously seek new and creative ways to enhance our curriculum and teaching methods to stay ahead in the tech industry.",
      highlight: false,
      color: "#FFC107",
      gradient: "from-[#FFC107]/20 to-transparent",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We foster a collaborative learning environment where students, instructors, and industry partners work together to achieve shared goals.",
      highlight: false,
      color: "#FFC107",
      gradient: "from-[#FFC107]/20 to-transparent",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We conduct our business with the highest ethical standards, ensuring transparency, honesty, and respect in all our dealings.",
      highlight: false,
      color: "#FFC107",
      gradient: "from-[#FFC107]/20 to-transparent",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description:
        "We are dedicated to minimizing our environmental impact and promoting sustainability in all aspects of our operations.",
      highlight: false,
      color: "#FFC107",
      gradient: "from-[#FFC107]/20 to-transparent",
    },
    {
      icon: Heart,
      title: "Community",
      description:
        "We believe in giving back to the community and making a positive impact through our corporate social responsibility initiatives.",
      highlight: false,
      color: "#FFC107",
      gradient: "from-[#FFC107]/20 to-transparent",
    },
  ];

  // Container variants for staggered children
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateX: -10,
      transition: { 
        type: "spring", 
        stiffness: 80,
        damping: 15
      }
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
        duration: 0.6
      }
    },
    hover: {
      y: -12,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12,
        duration: 0.7
      }
    },
  };

  const badgeVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
      rotate: -10,
      scale: 0.8
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
        duration: 0.5
      }
    },
  };

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    animate: { 
      rotate: [0, -5, 5, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-[#020B2D] py-20 md:py-28 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#FFC107]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FFC107]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FFC107]/3 rounded-full blur-3xl" />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30" />
      
      <section ref={sectionRef} className="container mx-auto px-6 md:px-0 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <motion.div 
            ref={titleRef}
            className="text-center mb-16"
            variants={titleVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="inline-flex items-center gap-3 bg-[#FFC107]/10 text-[#FFC107] text-sm font-medium px-6 py-2.5 rounded-full mb-4 overflow-hidden"
              variants={badgeVariants}
            >
              <motion.span 
                className="w-2 h-2 bg-[#FFC107] rounded-full"
                animate={titleInView ? {
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              OUR VALUES
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              variants={titleVariants}
            >
              What Guides Us
            </motion.h2>
            
            <motion.div variants={titleVariants}>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                Our core principles that drive excellence in tech education
              </p>
            </motion.div>
          </motion.div>

          {/* Values Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
                className="relative"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <motion.div
                  className={`rounded-2xl overflow-hidden shadow-lg bg-white relative group`}
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(255,193,7,0.15)",
                  }}
                >
                  {/* Animated Gradient Border */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#FFC107] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ 
                      borderRadius: "1rem",
                      padding: "2px",
                      margin: "-2px",
                      zIndex: -1
                    }}
                  />
                  
                  <div className="p-8 relative">
                    {/* Icon Container */}
                    <motion.div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#FFC107]/10`}
                      whileHover="animate"
                      initial="initial"
                      animate="initial"
                      variants={{
                        initial: { scale: 1, rotate: 0 },
                        animate: { 
                          scale: 1.15,
                          rotate: [0, -10, 10, -10, 0],
                          transition: {
                            scale: { type: "spring", stiffness: 400 },
                            rotate: { duration: 0.5, ease: "easeInOut" }
                          }
                        }
                      }}
                    >
                      <value.icon
                        size={32}
                        className="text-[#FFC107]"
                      />
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="font-bold text-xl mb-3 text-[#020B2D]"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {value.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-sm leading-relaxed text-gray-600"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {value.description}
                    </motion.p>

                    {/* Decorative Line */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFC107] via-[#FFC107]/50 to-transparent"
                      initial={{ scaleX: 0, originX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </motion.div>

                {/* Floating particle effect on hover */}
                <motion.div
                  className="absolute -top-2 -right-2 w-20 h-20 bg-[#FFC107]/10 rounded-full blur-xl pointer-events-none"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 0.6, scale: 1.5 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Decorative Text */}
          <AnimatePresence>
            {isInView && (
              <motion.div 
                className="text-center mt-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.p 
                  className="text-gray-400 text-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <span className="text-[#FFC107]">✦</span> Living our values every day <span className="text-[#FFC107]">✦</span>
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default AboutValues;