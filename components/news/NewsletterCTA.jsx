"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SuccessMessage from "../SuccessMessage";


const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_NEWSLETTER_URL;

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

const NewsletterCTA = () => {
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const emailRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const payload = {
      email: emailRef.current.value,
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setSuccess("Thank you for subscribing! You're now part of our tech community.");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-0 py-14">
      {/* Success toast */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="mb-4"
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
            className="mb-4"
          >
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-white/15 bg-gradient-to-r from-[#0a1847] to-[#020b2d] p-8 lg:p-10 shadow-[0_12px_36px_rgba(0,0,0,0.45)] relative overflow-hidden"
      >
        {/* Ambient particles */}
        {PARTICLES.map((p) => (
          <Particle key={p.id} {...p} />
        ))}

        {/* Pulserende glow orb */}
        <motion.div
          className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,193,7,0.12) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs text-[#FFC107] uppercase tracking-[0.2em] relative z-10"
        >
          Stay Connected
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl lg:text-4xl text-white font-semibold mt-3 relative z-10"
        >
          Be Part of the Future Tech Revolution
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-100 mt-3 max-w-3xl relative z-10"
        >
          Discover trends, insights, and practical stories from tech, AI, and
          innovation to stay ahead in your learning journey.
        </motion.p>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-7 relative z-10"
        >
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
            <motion.input
              ref={emailRef}
              type="email"
              placeholder="Enter your email address"
              required
              whileFocus={{ scale: 1.02 }}
              className="flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-transparent transition-all"
            />
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.05 }}
              whileTap={{ scale: loading ? 1 : 0.95 }}
              className="rounded-full bg-[#FFC107] px-6 py-3 text-sm font-semibold text-black hover:bg-yellow-300 transition-all disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
            >
              {!loading && (
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.3) 50%, transparent 65%)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
                />
              )}
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span
                    className="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                  />
                  Subscribing...
                </span>
              ) : (
                "Subscribe Now"
              )}
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default NewsletterCTA;