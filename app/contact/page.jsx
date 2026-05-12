"use client";

import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Button } from "@/const";
import { useState, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  MapPin,
  Phone,
  ArrowRight,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [expandedContact, setExpandedContact] = useState(null);
  const heroRef = useRef(null);
  const campusRef = useRef(null);
  const contactRef = useRef(null);
  const mapRef = useRef(null);

  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const campusInView = useInView(campusRef, { once: false, amount: 0.2 });
  const contactInView = useInView(contactRef, { once: false, amount: 0.3 });
  const mapInView = useInView(mapRef, { once: false, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const campusesMaps = [
    {
      id: 1,
      name: "Aptech Agodi",
      address: "Westone Building, beside the office of the Governor's Wife, Agodi, Ibadan",
      phone: "07070491555",
      email: "info@aptechibadan.com",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42409.095596642524!2d3.8743114471435587!3d7.406026438412933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039930067851fff%3A0x8ea29ec1f2186eb8!2sWest%20One!5e1!3m2!1sen!2sng!4v1777719155074!5m2!1sen!2sng",
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: 2,
      name: "Aptech Ringroad",
      address: "93 M.K.O Abiola Way, Adjacent Sunrise Mall, Ibadan",
      phone: "08064634830",
      email: "info@aptechibadan.com",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5301.706136977626!2d3.8718979999999994!3d7.358547100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398db6429effff%3A0x4bb79d52316cb4cf!2s93%20MKO%20Abiola%20Way%2C%20Ibadan%20200221%2C%20Oyo!5e1!3m2!1sen!2sng!4v1777970539395!5m2!1sen!2sng",
      color: "from-amber-600 to-orange-600",
    },
  ];

  const campuses = [
    {
      name: "Agodi",
      socials: [
        {
          name: "Instagram",
          icon: <FaInstagram />,
          link: "https://instagram.com/aptechagodi",
        },
        {
          name: "WhatsApp",
          icon: <FaWhatsapp />,
          link: "http://wa.me/2347070491555",
        },
        {
          name: "Facebook",
          icon: <FaFacebook />,
          link: "https://www.facebook.com/aptechagodi",
        },
      ],
    },
    {
      name: "Ringroad",
      socials: [
        {
          name: "Instagram",
          icon: <FaInstagram />,
          link: "https://instagram.com/aptechringroad",
        },
        {
          name: "WhatsApp",
          icon: <FaWhatsapp />,
          link: "http://wa.me/2348064634830",
        },
        {
          name: "Facebook",
          icon: <FaFacebook />,
          link: "https://www.facebook.com/aptechringroad",
        },
      ],
    },
  ];

  // Toggle expanded contact
  const toggleContact = (type) => {
    setExpandedContact(expandedContact === type ? null : type);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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
    hidden: { opacity: 0, x: -30, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const contactOptionVariants = {
    hidden: { opacity: 0, height: 0, y: -20 },
    visible: {
      opacity: 1,
      height: "auto",
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* HERO SECTION */}
      <motion.section
        ref={heroRef}
        className="bg-[#020B2D] text-white py-20 px-6 md:px-10 lg:px-16 relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#FFC107]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#FFC107]/5 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto w-full relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.p
            variants={badgeVariants}
            className="text-[#FFC107] uppercase tracking-widest text-sm mb-4"
          >
            Contact Aptech Ibadan
          </motion.p>

          <motion.h1
            variants={titleVariants}
            className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl"
          >
            Visit Our Campus or{" "}
            <motion.span
              className="text-[#FFC107] inline-block"
              animate={{
                textShadow: [
                  "0 0 0px rgba(255,193,7,0)",
                  "0 0 10px rgba(255,193,7,0.5)",
                  "0 0 0px rgba(255,193,7,0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              Start Your Tech Journey Today
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-gray-300 max-w-xl"
          >
            Speak with our advisors, explore our facilities, and get started
            with a career-focused program designed to make you job-ready.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.a
              href="#campus"
              className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-[#020B2D] transition-all duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Locations
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CAMPUS SECTION */}
      <motion.section
        ref={campusRef}
        id="campus"
        className="py-16 px-6 md:px-10 lg:px-16"
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={campusInView ? "visible" : "hidden"}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Campuses in Ibadan
            </h2>
            <motion.div
              className="w-20 h-1 bg-[#FFC107] mx-auto mb-12"
              initial={{ width: 0 }}
              animate={campusInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={campusInView ? "visible" : "hidden"}
          >
            {campusesMaps.map((campus, index) => (
              <motion.div
                key={campus.id}
                variants={cardVariants}
                whileHover="hover"
                className="p-6 rounded-2xl shadow-lg border bg-white group"
              >
                <motion.h3
                  className="text-xl font-bold text-[#020B2D] mb-2"
                  whileHover={{ x: 5, color: "#FFC107" }}
                >
                  {campus.name}
                </motion.h3>
                <p className="text-gray-600 text-sm mb-4">{campus.address}</p>
                <div className="space-y-2">
                  <motion.a
                    href={`tel:${campus.phone}`}
                    className="text-[#020B2D] font-semibold inline-flex items-center gap-2 hover:text-[#FFC107] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Phone size={16} /> {campus.phone}
                  </motion.a>
                  <br />
                  <motion.a
                    href={`mailto:${campus.email}`}
                    className="text-[#020B2D] font-semibold inline-flex items-center gap-2 hover:text-[#FFC107] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaEnvelope size={14} /> {campus.email}
                  </motion.a>
                  <br />
                  {/* <motion.a
                    href={`${campus.phone}`}
                    className="bg-[#FFC107]/5 text-[#000] p-2 rounded-xl inline-flex items-center gap-2 hover:text-[#020B2D] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaWhatsappSquare size={14} /> {campus.phone}
                  </motion.a> */}
                  <motion.a
                    href={`https://wa.me/${campus.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 bg-[#020B2D] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#FFC107] transition-all duration-300"
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaWhatsapp size={16} /> Chat with us
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* QUICK CONTACT - WITH CAMPUS OPTIONS */}
      <motion.section
        ref={contactRef}
        className="bg-gray-50 py-16 px-6 md:px-10 lg:px-16"
      >
        <div className="max-w-7xl mx-auto w-full text-center">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl font-bold mb-6">Reach Out Instantly</h2>
            <p className="text-gray-600 mb-8">
              Choose your preferred campus to connect with us
            </p>
          </motion.div>

          {/* <motion.div 
            className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
          >
            {/* Call Section */}
          {/* <motion.div
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <motion.div
                className="p-6 cursor-pointer"
                onClick={() => toggleContact('call')}
                whileHover={{ backgroundColor: "rgba(255,193,7,0.05)" }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-[#FFC107]/10 rounded-full flex items-center justify-center"
                    >
                      <FaPhone className="text-[#020B2D]" size={24} />
                    </motion.div>
                    <div className="text-left">
                      <p className="font-semibold text-[#020B2D] text-lg">Call Us</p>
                      <p className="text-gray-500 text-sm">Speak with our advisors</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedContact === 'call' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-gray-400" />
                  </motion.div>
                </div>
              </motion.div>

              <AnimatePresence>
                {expandedContact === 'call' && (
                  <motion.div
                    variants={contactOptionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="border-t border-gray-100"
                  >
                    {campusesMaps.map((campus) => (
                      <motion.a
                        key={campus.id}
                        href={`tel:${campus.phone}`}
                        className="flex items-center justify-between p-4 hover:bg-[#FFC107]/5 transition-colors border-b border-gray-50 last:border-0"
                        whileHover={{ x: 10, backgroundColor: "rgba(255,193,7,0.1)" }}
                      >
                        <div>
                          <p className="font-semibold text-[#020B2D]">{campus.name}</p>
                          <p className="text-sm text-gray-500">{campus.phone}</p>
                        </div>
                        <Phone size={16} className="text-[#FFC107]" />
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div> 

            {/* Email Section
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <motion.div
                className="p-6 cursor-pointer"
                onClick={() => toggleContact('email')}
                whileHover={{ backgroundColor: "rgba(255,193,7,0.05)" }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-[#FFC107]/10 rounded-full flex items-center justify-center"
                    >
                      <FaEnvelope className="text-[#020B2D]" size={24} />
                    </motion.div>
                    <div className="text-left">
                      <p className="font-semibold text-[#020B2D] text-lg">Email Us</p>
                      <p className="text-gray-500 text-sm">Send us your inquiries</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedContact === 'email' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-gray-400" />
                  </motion.div>
                </div>
              </motion.div>

              <AnimatePresence>
                {expandedContact === 'email' && (
                  <motion.div
                    variants={contactOptionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="border-t border-gray-100"
                  >
                    {campusesMaps.map((campus) => (
                      <motion.a
                        key={campus.id}
                        href={`mailto:${campus.email}`}
                        className="flex items-center justify-between p-4 hover:bg-[#FFC107]/5 transition-colors border-b border-gray-50 last:border-0"
                        whileHover={{ x: 10, backgroundColor: "rgba(255,193,7,0.1)" }}
                      >
                        <div>
                          <p className="font-semibold text-[#020B2D]">{campus.name}</p>
                          <p className="text-sm text-gray-500">{campus.email}</p>
                        </div>
                        <FaEnvelope size={16} className="text-[#FFC107]" />
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div> */}

          {/* Social Media Button */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            className="max-w-3xl mx-auto mt-6"
          >
            <motion.div
              onClick={() => setShowModal(true)}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer"
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -12px rgba(0,0,0,0.1)",
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-[#FFC107]/10 rounded-full flex items-center justify-center"
                  >
                    <FaFacebook className="text-[#020B2D]" size={24} />
                  </motion.div>
                  <div className="text-left">
                    <p className="font-semibold text-[#020B2D] text-lg">
                      Social Media
                    </p>
                    <p className="text-gray-500 text-sm">
                      Connect with us on social platforms
                    </p>
                  </div>
                </div>
                <ArrowRight size={20} className="text-[#FFC107]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* MAP SECTION */}
      <motion.section ref={mapRef} className="py-16 px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={mapInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Us Here
            </h2>
            <motion.div
              className="w-20 h-1 bg-[#FFC107] mx-auto"
              initial={{ width: 0 }}
              animate={mapInView ? { width: 80 } : { width: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate={mapInView ? "visible" : "hidden"}
          >
            {campusesMaps.map((campus, index) => (
              <motion.div
                key={campus.id}
                variants={cardVariants}
                whileHover="hover"
                className="group bg-white rounded-3xl overflow-hidden shadow-xl border"
              >
                <motion.div
                  className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <iframe
                    src={campus.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    className="w-full h-full"
                    title={`${campus.name} map`}
                  />
                </motion.div>

                <div className="p-6">
                  <motion.h3
                    className="text-xl font-bold mb-2"
                    whileHover={{ x: 5, color: "#FFC107" }}
                  >
                    {campus.name}
                  </motion.h3>

                  <p className="text-gray-600 text-sm mb-4">{campus.address}</p>

                  <div className="space-y-2 mb-4">
                    <motion.a
                      href={`tel:${campus.phone}`}
                      className="block font-semibold text-[#020B2D] hover:text-[#FFC107] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <Phone size={14} className="inline mr-2" /> {campus.phone}
                    </motion.a>
                    <motion.a
                      href={`mailto:${campus.email}`}
                      className="block font-semibold text-[#020B2D] hover:text-[#FFC107] transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <FaEnvelope size={14} className="inline mr-2" />{" "}
                      {campus.email}
                    </motion.a>
                  </div>

                  <motion.a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      campus.address,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#020B2D] text-white px-5 py-3 rounded-lg hover:bg-[#FFC107] hover:text-[#020B2D] transition-all duration-300"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Directions
                    <ArrowRight size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* SOCIAL MODAL */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-[#020B2D] transition-colors"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={24} />
              </motion.button>

              <motion.h3
                className="text-2xl font-bold mb-6 text-center text-[#020B2D]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Campus Socials
              </motion.h3>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {campuses.map((campus, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="border border-gray-200 p-5 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <p className="font-semibold mb-3 text-[#020B2D] text-lg">
                      {campus.name}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {campus.socials.map((social, i) => (
                        <motion.a
                          key={i}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFC107] text-[#020B2D] font-medium hover:bg-[#020B2D] hover:text-white transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {social.icon}
                          {social.name}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.p
                  className="text-gray-500 text-sm"
                  whileHover={{ scale: 1.02 }}
                >
                  Follow us for updates and tech news
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* <Footer /> */}
    </div>
  );
};

export default ContactPage;
