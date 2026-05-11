"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import { Home, MapPin, Wifi, Shield, Coffee, Clock, CheckCircle, XCircle } from "lucide-react";
import Footer from "@/components/Footer";

const ACCOMMODATION_SCRIPT_URL = process.env.NEXT_PUBLIC_ACCOMMODATION_SCRIPT_URL;

const features = [
  { icon: Home, label: "Furnished Rooms" },
  { icon: Wifi, label: "High-Speed Wi-Fi" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Coffee, label: "Common Areas" },
  { icon: MapPin, label: "Near Campus" },
  { icon: Clock, label: "Flexible Lease" },
];

// Animated input wrapper
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

export default function AccommodationPage() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [focused, setFocused] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const formRef = useRef(null);

  const inputClass =
    "w-full border rounded-lg px-4 py-3 focus:outline-none text-[#020B2D] focus:ring-2 focus:ring-[#FFC107] transition-shadow";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    try {
      await fetch(ACCOMMODATION_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setSuccess(true);
      formRef.current.reset();
      
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setTimeout(() => setError(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSuccess(false);
    setError(null);
    formRef.current?.reset();
  };

  return (
    <main className="min-h-screen bg-[#020B2D] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#FFC107]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      <div className="relative z-10 px-6 lg:px-0 py-40 max-w-7xl  mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — INFO with animations */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFC107]/30 bg-[#FFC107]/10 px-4 py-1.5 text-xs font-semibold text-[#FFC107] tracking-widest uppercase w-fit"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFC107] animate-pulse" />
              Coming Soon
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold leading-tight mb-4"
            >
              Student{" "}
              <span className="text-[#FFC107]">Accommodation</span>
              <br />
              is on its way.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md text-lg text-white/55 leading-relaxed mb-8"
            >
              We're building a safe, comfortable, and connected living experience
              designed exclusively for Aptech Ibadan students. Be the first to
              know when it launches.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/65 transition-all duration-200 hover:bg-white/10 hover:scale-105"
                >
                  <Icon className="h-3 w-3 text-[#FFC107] flex-shrink-0" />
                  {label}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="/"
                className="text-sm text-white/35 hover:text-white/60 transition underline underline-offset-4"
              >
                ← Back to Home
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — FORM styled like Question component */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl shadow-2xl"
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl">
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-2xl font-bold text-[#020B2D] mb-6"
                >
                  Register Your Interest
                </motion.h2>

                {success ? (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-6 py-10 text-center">
                    <div className="text-5xl mb-4">🎉</div>
                    <p className="text-green-700 font-bold text-lg mb-1">
                      You're on the list!
                    </p>
                    <p className="text-green-600 text-sm mb-4">
                      We'll notify you as soon as accommodation is ready.
                    </p>
                    <button
                      onClick={resetForm}
                      className="text-xs text-green-600 hover:text-green-700 underline underline-offset-2"
                    >
                      Register another email →
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
                    {error && (
                      <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                        {error}
                      </div>
                    )}

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
                            Submitting...
                          </span>
                        ) : (
                          "Notify Me When Ready →"
                        )}
                      </motion.button>
                    </AnimatedField>

                    <p className="text-center text-gray-300 text-xs pt-1">
                      No spam. Only notified when accommodation launches.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* <Footer/> */}
    </main>
  );
}