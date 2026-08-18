"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import {
  Home,
  MapPin,
  Wifi,
  Shield,
  Coffee,
  Clock,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
} from "lucide-react";
import Footer from "@/components/Footer";
// Campus-tour video lives in /assets (assets/first-edit.mp4) and is imported
// directly so the accommodation section showcases it without needing the file
// duplicated into public/ or uploaded to Cloudinary first.
import campusTourVideo from "@/assets/first-edit.mp4";

const ACCOMMODATION_SCRIPT_URL =
  process.env.NEXT_PUBLIC_ACCOMMODATION_SCRIPT_URL;

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

// Portrait campus-tour video player, matching the navy/amber design system.
const AccommodationVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      el.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setIsMuted(el.muted);
  };

  const goFullscreen = (e) => {
    e.stopPropagation();
    const el = videoRef.current;
    if (el?.requestFullscreen) el.requestFullscreen();
  };

  const handleTimeUpdate = () => {
    const el = videoRef.current;
    if (!el || !el.duration) return;
    setProgress((el.currentTime / el.duration) * 100);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#FFC107]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FFC107]/30 bg-[#FFC107]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#FFC107]">
            <Play className="h-3 w-3 fill-current" />
            Campus Tour
          </span>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            A look at <span className="text-[#FFC107]">student living</span>.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/55 leading-relaxed">
            Step inside the furnished rooms, shared spaces, and 24/7-secure
            community now open for Aptech Ibadan students.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ── Portrait video frame ── */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="group relative mx-auto w-full max-w-[320px]">
              {/* Corner accents, matching the Hero + VideoSpotlight frame */}
              {[
                "top-0 left-0",
                "top-0 right-0",
                "bottom-0 left-0",
                "bottom-0 right-0",
              ].map((pos, i) => (
                <div
                  key={pos}
                  className={`pointer-events-none absolute ${pos} z-20 h-6 w-6 border-[#FFC107]`}
                  style={{
                    borderTopWidth: i < 2 ? 2 : 0,
                    borderBottomWidth: i >= 2 ? 2 : 0,
                    borderLeftWidth: i % 2 === 0 ? 2 : 0,
                    borderRightWidth: i % 2 !== 0 ? 2 : 0,
                  }}
                />
              ))}

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl shadow-black/50 ring-1 ring-[#FFC107]/20">
                <div
                  className="relative aspect-[9/16] cursor-pointer"
                  onClick={togglePlay}
                >
                  <video
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    muted={isMuted}
                    playsInline
                    preload="metadata"
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleEnded}
                  >
                    <source src={campusTourVideo} type="video/mp4" />
                  </video>

                  {/* Dim overlay before playback starts */}
                  {!hasStarted && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D]/85 via-[#020B2D]/10 to-[#020B2D]/30" />
                  )}

                  {/* Center play button */}
                  {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.94 }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{
                          scale: {
                            duration: 2.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFC107] text-[#020B2D] shadow-lg shadow-[#FFC107]/40 sm:h-20 sm:w-20"
                        aria-label={hasStarted ? "Resume video" : "Play video"}
                      >
                        <Play className="ml-1 h-6 w-6 fill-current sm:h-8 sm:w-8" />
                      </motion.div>
                    </div>
                  )}

                  {/* Bottom control bar (only once playback has started) */}
                  {hasStarted && (
                    <div
                      className={`absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-[#020B2D]/95 to-transparent px-4 pb-4 pt-10 transition-opacity duration-300 ${
                        isPlaying
                          ? "opacity-0 group-hover:opacity-100"
                          : "opacity-100"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FFC107] hover:text-[#020B2D]"
                        aria-label={isPlaying ? "Pause video" : "Play video"}
                      >
                        {isPlaying ? (
                          <Pause className="h-4 w-4 fill-current" />
                        ) : (
                          <Play className="ml-0.5 h-4 w-4 fill-current" />
                        )}
                      </button>

                      <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/20">
                        <div
                          className="h-full rounded-full bg-[#FFC107] transition-[width] duration-150"
                          style={{ width: `${progress}%` }}
                        />
                      </div>

                      <button
                        type="button"
                        onClick={toggleMute}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FFC107] hover:text-[#020B2D]"
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                      >
                        {isMuted ? (
                          <VolumeX className="h-4 w-4" />
                        ) : (
                          <Volume2 className="h-4 w-4" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={goFullscreen}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#FFC107] hover:text-[#020B2D]"
                        aria-label="Fullscreen"
                      >
                        <Maximize2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Caption under the portrait frame */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-4 text-center text-[11px] uppercase tracking-widest text-white/40"
              >
                Student accommodation · Aptech Ibadan
              </motion.p>
            </div>
          </motion.div>

          {/* ── Copy + features ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <h3 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
              Rooms are ready.{" "}
              <span className="text-[#FFC107]">Come and see.</span>
            </h3>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/55">
              Designed exclusively for Aptech Ibadan students — furnished rooms,
              fast Wi-Fi, secure entry, and common areas built for studying and
              relaxing between classes.
            </p>

            <ul className="mb-10 grid gap-3 sm:grid-cols-2">
              {features.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 text-white/75"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#FFC107]/20 bg-[#FFC107]/10">
                    <Icon className="h-4 w-4 text-[#FFC107]" />
                  </span>
                  <span className="text-sm font-semibold">{label}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href="#book"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFC107] px-7 py-3.5 font-semibold text-[#020B2D] shadow-lg shadow-[#FFC107]/25 transition hover:bg-[#ffd23f]"
              >
                Book a Room
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Explore the Site
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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
              Now Available
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold leading-tight mb-4"
            >
              Student <span className="text-[#FFC107]">Accommodation</span>
              <br />
              is now available.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md text-lg text-white/55 leading-relaxed mb-8"
            >
              Our safe, comfortable, and connected living experience is designed
              exclusively for Aptech Ibadan students — and it's ready for you
              now. Reserve your room today.
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
          <div id="book">
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
                  Book Your Room
                </motion.h2>

                {success ? (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-6 py-10 text-center">
                    <div className="text-5xl mb-4">🎉</div>
                    <p className="text-green-700 font-bold text-lg mb-1">
                      Request received!
                    </p>
                    <p className="text-green-600 text-sm mb-4">
                      Our team will reach out to confirm your room and arrange a
                      viewing.
                    </p>
                    <button
                      onClick={resetForm}
                      className="text-xs text-green-600 hover:text-green-700 underline underline-offset-2"
                    >
                      Submit another request →
                    </button>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    className="space-y-4"
                    onSubmit={handleSubmit}
                  >
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
                        animate={{
                          borderColor:
                            focused === "name" ? "#FFC107" : "#D1D5DB",
                        }}
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
                        animate={{
                          borderColor:
                            focused === "email" ? "#FFC107" : "#D1D5DB",
                        }}
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
                        animate={{
                          borderColor:
                            focused === "phone" ? "#FFC107" : "#D1D5DB",
                        }}
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
                            animate={{
                              backgroundPosition: ["200% 0", "-200% 0"],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              repeatDelay: 1.5,
                            }}
                          />
                        )}

                        {loading ? (
                          <span className="flex items-center justify-center gap-2">
                            <motion.span
                              className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 0.7,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            />
                            Submitting...
                          </span>
                        ) : (
                          "Book My Room →"
                        )}
                      </motion.button>
                    </AnimatedField>

                    <p className="text-center text-gray-300 text-xs pt-1">
                      We'll reach out to arrange your viewing. No spam.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <AccommodationVideo />

      {/* <Footer/> */}
    </main>
  );
}
