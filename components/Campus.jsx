"use client";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const campuses = [
  {
    id: 1,
    name: "Aptech Agodi",
    address: "Westone Building, beside Governor's Office, Agodi, Ibadan",
    phone: "07070491555",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42409.095596642524!2d3.8743114471435587!3d7.406026438412933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039930067851fff%3A0x8ea29ec1f2186eb8!2sWest%20One!5e1!3m2!1sen!2sng!4v1777719155074!5m2!1sen!2sng",
    accent: "#3B82F6",
    gradientFrom: "#2563EB",
    gradientTo: "#4F46E5",
    label: "Main Campus",
  },
  {
    id: 2,
    name: "Aptech Ringroad",
    address: "93 M.K.O Abiola Way, Adjacent Sunrise Mall, Ibadan",
    phone: "08064634830",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5301.706136977626!2d3.8718979999999994!3d7.358547100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398db6429effff%3A0x4bb79d52316cb4cf!2s93%20MKO%20Abiola%20Way%2C%20Ibadan%20200221%2C%20Oyo!5e1!3m2!1sen!2sng!4v1777970539395!5m2!1sen!2sng",
    accent: "#F59E0B",
    gradientFrom: "#D97706",
    gradientTo: "#EA580C",
    label: "City Campus",
  },
];

/* ── Reusable animated section wrapper ── */
const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 48 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ── Single campus card ── */
const CampusCard = ({ campus, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.12, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        delay: index * 0.18,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-gray-100"
    >
      {/* ── Map area ── */}
      <div className="relative h-80 overflow-hidden">
        {/* Scan-line animation overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, ${campus.accent}18 50%, transparent 100%)`,
            backgroundSize: "100% 8px",
          }}
          animate={{ backgroundPositionY: ["0px", "320px"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        <iframe
          src={campus.mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale-[0.35] group-hover:grayscale-0 scale-[1.02] group-hover:scale-100 transition-all duration-700"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none z-20" />

        {/* Campus badge */}
        <motion.div
          className="absolute top-5 left-5 z-30"
          initial={{ opacity: 0, x: -20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: index * 0.18 + 0.4, duration: 0.5 },
            },
          }}
        >
          <div
            className="px-4 py-1.5 text-white  font-bold rounded-full flex items-center gap-2 shadow-lg uppercase tracking-widest"
            style={{
              background: `linear-gradient(135deg, ${campus.gradientFrom}, ${campus.gradientTo})`,
            }}
          >
            <MapPin size={13} />
            {campus.label}
          </div>
        </motion.div>

        {/* Index number */}
        <motion.div
          className="absolute top-5 right-5 z-30 w-10 h-10 bg-white/90 backdrop-blur-md text-[#020B2D] font-bold text-lg flex items-center justify-center rounded-2xl shadow-md"
          initial={{ opacity: 0, scale: 0 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delay: index * 0.18 + 0.5,
                type: "spring",
                stiffness: 300,
              },
            },
          }}
        >
          0{campus.id}
        </motion.div>

        {/* Campus name over map */}
        <motion.div
          className="absolute bottom-5 left-6 z-30"
          initial={{ opacity: 0, y: 12 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.18 + 0.45, duration: 0.5 },
            },
          }}
        >
          <h3 className="text-white text-2xl font-bold drop-shadow-md">
            {campus.name}
          </h3>
        </motion.div>
      </div>

      {/* ── Content ── */}
      <div className="p-8 pb-10 space-y-5">
        {/* Address */}
        <motion.div
          className="flex items-start gap-3"
          initial={{ opacity: 0, x: -16 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -16 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: index * 0.18 + 0.55, duration: 0.5 },
            },
          }}
        >
          <div
            className="mt-1 flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: `${campus.accent}18` }}
          >
            <MapPin size={16} style={{ color: campus.accent }} />
          </div>
          <p className="text-gray-600 leading-relaxed pt-1">{campus.address}</p>
        </motion.div>

        {/* Phone */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -16 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -16 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: index * 0.18 + 0.65, duration: 0.5 },
            },
          }}
        >
          <div
            className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: `${campus.accent}18` }}
          >
            <Phone size={16} style={{ color: campus.accent }} />
          </div>
          <a
            href={`tel:${campus.phone}`}
            className="font-semibold text-lg text-black hover:opacity-70 transition-opacity"
          >
            {campus.phone}
          </a>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(campus.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center justify-center gap-3 text-white font-medium py-4 px-6 rounded-2xl transition-opacity duration-300 hover:opacity-90"
          style={{
            background: `linear-gradient(135deg, ${campus.gradientFrom}, ${campus.gradientTo})`,
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.18 + 0.75, duration: 0.5 },
            },
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Directions on Google Maps
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight size={18} />
          </motion.span>
        </motion.a>
      </div>

      {/* Bottom accent bar */}
      <motion.div
        className="h-1.5 w-full"
        style={{
          background: `linear-gradient(to right, ${campus.gradientFrom}, ${campus.gradientTo})`,
        }}
        initial={{ scaleX: 0, originX: 0 }}
        animate={controls}
        variants={{
          hidden: { scaleX: 0 },
          visible: {
            scaleX: 1,
            transition: {
              delay: index * 0.18 + 0.8,
              duration: 0.6,
              ease: "easeOut",
            },
          },
        }}
      />
    </motion.div>
  );
};

/* ── Main Section ── */
const Campus = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 md:py-28 overflow-hidden relative">
      {/* Background decorative blobs */}
      <motion.div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ── Header ── */}
        <AnimatedSection className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-3 bg-[#020B2D] text-white text-sm font-medium px-6 py-2.5 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.span
              className="w-2 h-2 bg-[#FFC107] rounded-full"
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            OUR LOCATIONS
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#020B2D] tracking-tight">
            Visit Our Campuses
          </h2>

          {/* Animated underline */}
          <motion.div
            className="mx-auto mt-3 h-1 rounded-full bg-[#FFC107]"
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          />

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
            Two strategic locations in Ibadan designed for excellence in tech
            education
          </p>
        </AnimatedSection>

        {/* ── Cards Grid ── */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {campuses.map((campus, index) => (
            <CampusCard key={campus.id} campus={campus} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campus;
