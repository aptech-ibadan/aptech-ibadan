"use client";
import Image from "next/image";
import { Button } from "@/const";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  AnimatePresence,
  animate,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

/* ── Floating particle ── */
const Particle = ({ x, y, size, duration, delay, color }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      background: color,
    }}
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
const WORDS = [
  "Software Development",
  "Cybersecurity",
  "Networking",
  "Multimedia",
];

const Typewriter = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIndex];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length + 1)),
        60,
      );
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(word.slice(0, displayed.length - 1)),
        35,
      );
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

/* ── Carousel images (replicated from ProgramsHero) ── */
const carouselImages = [
  {
    id: 1,
    src: "/aptech001.JPG",
    alt: "Students learning at Aptech",
  },
  {
    id: 2,
    src: "/aptech002.JPG",
    alt: "Classroom session",
  },
  {
    id: 3,
    src: "/aptech009.png",
    alt: "Computer lab",
  },
  {
    id: 4,
    src: "/aptech004.png",
    alt: "Students collaborating",
  },
  {
    id: 5,
    src: "/aptech003.png",
    alt: "Coding session",
  },
  {
    id: 6,
    src: "/aptech006.png",
    alt: "Design workshop",
  },
];

/* ── Slide variants ── */
const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0, scale: 0.96 }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir) => ({
    x: dir < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Hero ── */
const Hero = () => {
  const controls = useAnimation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [4, -4]);
  const rotateY = useTransform(mouseX, [-300, 300], [-4, 4]);

  const [ref, inView] = useInView({ threshold: 0.15 });

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((i) => (i + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((i) => (i === 0 ? carouselImages.length - 1 : i - 1));
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((i) => (i + 1) % carouselImages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
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
        style={{
          background:
            "radial-gradient(circle, rgba(255,193,7,0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(100,120,255,0.06) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], x: [0, -20, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* ── Particles ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {PARTICLES.map((p) => (
          <Particle key={p.id} {...p} />
        ))}
      </div>

      {/* ── Grid overlay ── */}
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
                  ACE • Arena Multimedia
                </motion.p>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl md:text-6xl  lg:text-7xl font-bold leading-normal"
              >
                Nigeria&apos;s Premier{" "}
                <span className="relative inline-block mt-4">
                  <span className="text-[#FFC107]  leading-7">
                    I.T Institute
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-1.5 bg-[#FFC107]/30 -z-10 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  />
                </span>
              </motion.h1>

              {/* Typewriter */}
              <motion.p
                variants={fadeUp}
                className="text-gray-300 text-lg md:text-xl max-w-2xl"
              >
                Build real-world skills in <Typewriter />
                <br />
                Get certified, gain experience, and become globally employable.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    classes="bg-[#FFC107] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#FFD700] transition-colors duration-300 shadow-lg text-center block"
                    link="/contact"
                    text="Enroll Now"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    classes="border-2 border-white px-8 py-4 rounded-full hover:text-[#020B2D] transition-all duration-300 text-center block"
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
                  { value: 2000, label: "Graduates" },
                  { value: 20, label: "Years of Excellence" },
                  { value: 30, label: "Courses Offered" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-2xl font-bold text-[#FFC107]">
                      <Counter to={value} />
                    </p>
                    <p className="text-lg text-gray-400">{label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── Right — Carousel (desktop) ── */}
            <motion.div
              variants={fadeLeft}
              className="hidden lg:block lg:col-span-5"
              style={{
                rotateX,
                rotateY,
                perspective: 1000,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative group">
                {/* Glow */}
                {/* <motion.div
                  className="absolute -inset-6 rounded-[3rem] pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse, rgba(255,193,7,0.25) 0%, transparent 70%)",
                  }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                /> */}

                {/* Corner accents */}
                {[
                  "top-0 left-0",
                  "top-0 right-0",
                  "bottom-0 left-0",
                  "bottom-0 right-0",
                ].map((pos, i) => (
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
                  {/* Carousel slides */}
                  <div className="relative h-[320px] sm:h-[380px] overflow-hidden">
                    <AnimatePresence
                      initial={false}
                      custom={direction}
                      mode="popLayout"
                    >
                      <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0"
                      >
                        <Image
                          src={carouselImages[currentIndex].src}
                          alt={carouselImages[currentIndex].alt}
                          fill
                          className="object-cover object-bottom"
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          priority={currentIndex === 0}
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Shimmer sweep */}
                    {/* <motion.div
                      className="absolute inset-0 pointer-events-none z-10"
                      style={{
                        background:
                          "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)",
                        backgroundSize: "200% 100%",
                      }}
                      animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2.5,
                      }}
                    /> */}

                    {/* Bottom fade */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020B2D] to-transparent z-10" />
                  </div>

                  {/* Prev / Next */}
                  <motion.button
                    onClick={goToPrevious}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[#FFC107]/80 text-white hover:text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </motion.button>
                  <motion.button
                    onClick={goToNext}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[#FFC107]/80 text-white hover:text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </motion.button>

                  {/* Auto-play toggle */}
                  <motion.button
                    onClick={() => setIsAutoPlaying((p) => !p)}
                    whileHover={{ scale: 1.1 }}
                    className="absolute bottom-4 right-4 z-20 bg-black/50 hover:bg-[#FFC107]/80 text-white hover:text-black rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    aria-label={
                      isAutoPlaying ? "Pause slideshow" : "Play slideshow"
                    }
                  >
                    {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </motion.button>

                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {carouselImages.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => goToSlide(index)}
                        whileHover={{ scale: 1.3 }}
                        animate={{
                          width: index === currentIndex ? 32 : 8,
                          background:
                            index === currentIndex
                              ? "#FFC107"
                              : "rgba(255,255,255,0.45)",
                        }}
                        transition={{ duration: 0.3 }}
                        className="h-2 rounded-full"
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Slide counter */}
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-sm border border-white/10  text-white/70 rounded-full px-3 py-1"
                  >
                    {currentIndex + 1} / {carouselImages.length}
                  </motion.div>

                  {/* Enrollment badge */}
                  {/* <motion.div
                    className="absolute bottom-8 left-4 z-20 bg-[#020B2D]/90 backdrop-blur-sm border border-[#FFC107]/30 rounded-xl px-4 py-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    whileHover={{ scale: 1.04 }}
                  >
                    <p className=" text-gray-400">Next intake</p>
                    <p className="text-sm font-semibold text-[#FFC107]">
                      Enrolling Now
                    </p>
                  </motion.div> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
