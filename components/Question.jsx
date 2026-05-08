"use client";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SuccessMessage from "./SuccessMessage";
import { useRouter } from "next/navigation";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

/* ── Floating particle ── */
const Particle = ({ x, y, size, duration, delay, color }) => (
  <motion.div
    className="absolute rounded-full pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: color }}
    animate={{ y: [0, -20, 0], opacity: [0, 0.5, 0] }}
    transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 2,
  duration: Math.random() * 5 + 4,
  delay: Math.random() * 4,
  color: i % 2 === 0 ? "rgba(255,193,7,0.4)" : "rgba(255,255,255,0.1)",
}));

/* ── Animated input wrapper ── */
const AnimatedField = ({ delay, children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const Question = () => {
  const [success, setSuccess] = useState(null);
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const rightRef = useRef(null);
  const formRef = useRef(null);

  const rightInView = useInView(rightRef, { once: true, margin: "-60px" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setSuccess("Thank you for your request. We will get back to you soon.");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    router.push("https://wa.me/2347085482087");
  };

  const rightContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const inputClass =
    "w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFC107] transition-shadow";

  return (
    <section className="bg-white px-6 md:px-16 py-6 pb-20 md:py-20">
      {/* Success toast */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
          >
            <SuccessMessage message={success} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error toast */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="mb-4 max-w-6xl mx-auto"
          >
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl min-h-[60%]"
      >
        
        <div className="bg-white p-8 md:p-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-2xl font-bold text-[#020B2D] mb-6"
          >
            Get Free Career Guidance
          </motion.h2>

          <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <AnimatedField delay={0.2}>
              <motion.input
                ref={nameRef}
                type="text"
                placeholder="Full Name"
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                animate={{ borderColor: focused === "name" ? "#FFC107" : "#D1D5DB" }}
                transition={{ duration: 0.25 }}
                className={inputClass}
                required
              />
            </AnimatedField>

            {/* Email */}
            <AnimatedField delay={0.28}>
              <motion.input
                ref={emailRef}
                type="email"
                placeholder="Email Address"
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                animate={{ borderColor: focused === "email" ? "#FFC107" : "#D1D5DB" }}
                transition={{ duration: 0.25 }}
                className={inputClass}
                required
              />
            </AnimatedField>

            {/* Phone */}
            <AnimatedField delay={0.32}>
              <motion.input
                ref={phoneRef}
                type="tel"
                placeholder="Phone Number"
                onFocus={() => setFocused("phone")}
                onBlur={() => setFocused(null)}
                animate={{ borderColor: focused === "phone" ? "#FFC107" : "#D1D5DB" }}
                transition={{ duration: 0.25 }}
                className={inputClass}
                required
              />
            </AnimatedField>

            {/* Message */}
            <AnimatedField delay={0.36}>
              <motion.textarea
                ref={messageRef}
                placeholder="What program are you interested in?"
                rows="3"
                onFocus={() => setFocused("msg")}
                onBlur={() => setFocused(null)}
                animate={{ borderColor: focused === "msg" ? "#FFC107" : "#D1D5DB" }}
                transition={{ duration: 0.25 }}
                className={`${inputClass} resize-none`}
                required
              />
            </AnimatedField>

            {/* Submit */}
            <AnimatedField delay={0.44}>
              <motion.button
                whileHover={{
                  scale: loading ? 1 : 1.03,
                  backgroundColor: loading ? undefined : "#000",
                }}
                whileTap={{ scale: loading ? 1 : 0.97 }}
                type="submit"
                disabled={loading}
                className="w-full bg-[#020B2D] text-white font-semibold py-3 rounded-full transition-colors duration-300 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {/* shimmer sweep */}
                {!loading && (
                  <motion.span
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.1) 50%, transparent 65%)",
                      backgroundSize: "200% 100%",
                    }}
                    animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
                  />
                )}

                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.span
                      className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </span>
                ) : (
                  "Submit Request"
                )}
              </motion.button>
            </AnimatedField>
          </form>
        </div>

        
        <motion.div
          ref={rightRef}
          variants={rightContainer}
          initial="hidden"
          animate={rightInView ? "visible" : "hidden"}
          className="bg-[#020B2D] text-white p-8 md:p-10 flex flex-col justify-center relative overflow-hidden"
        >
          {/* ambient particles */}
          {PARTICLES.map((p) => (
            <Particle key={p.id} {...p} />
          ))}

          {/* pulsing glow orb */}
          <motion.div
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,193,7,0.12) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.p
            variants={fadeUp}
            className="text-[#FFC107] uppercase tracking-widest text-sm mb-4 flex items-center gap-2"
          >
            <motion.span
              className="inline-block w-2 h-2 rounded-full bg-[#FFC107]"
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            Talk To Us
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold leading-tight mb-6"
          >
            Not Sure Where to Start?{" "}
            <br />
            <span className="text-[#FFC107] relative inline-block">
              We'll Guide You.
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] bg-[#FFC107]/30 rounded-full"
                initial={{ width: 0 }}
                animate={rightInView ? { width: "100%" } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
              />
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-gray-300 mb-6">
            Speak with our advisors to choose the right career path in tech. Get
            clarity on Software Development, Cybersecurity, and Multimedia
            programs.
          </motion.p>

          {/* WhatsApp CTA */}
          <motion.div variants={fadeUp}>
            <motion.button
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 20px rgba(255,193,7,0.35)",
              }}
              whileTap={{ scale: 0.96 }}
              className="bg-[#FFC107] text-black px-6 py-2 rounded-full text-sm w-fit mb-6 font-semibold flex items-center gap-2 transition-shadow"
              onClick={handleButtonClick}
            >
              <FaWhatsapp className="text-base" />
              Chat on WhatsApp
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Question;