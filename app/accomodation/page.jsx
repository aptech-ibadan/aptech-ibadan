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
  Bed,
  Users,
  UtensilsCrossed,
  Bus,
  Shirt,
  Store,
  HeartPulse,
  Moon,
  Star,
  CheckCircle2,
  Phone,
  ArrowRight,
  DoorOpen,
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
} from "lucide-react";
import Footer from "@/components/Footer";
// Campus-tour video lives in /assets (assets/first-edit.mp4) and is imported
// directly so the hero can showcase it without needing the file duplicated
// into public/ or uploaded to Cloudinary first.
import campusTourVideo from "@/assets/first-edit.mp4";

const ACCOMMODATION_SCRIPT_URL =
  process.env.NEXT_PUBLIC_ACCOMMODATION_SCRIPT_URL;

const features = [
  { icon: Bed, label: "Furnished Rooms" },
  { icon: Wifi, label: "High-Speed Wi-Fi" },
  { icon: Shield, label: "24/7 Security" },
  { icon: Coffee, label: "Common Areas" },
  { icon: MapPin, label: "3 Campus Locations" },
  { icon: Clock, label: "Flexible 3–12 Month Plans" },
];

// ── Document-backed data (from the APTECH Student Accommodation policy) ──

const locations = [
  {
    name: "Agodi",
    branch: "APTECH AGODI",
    address:
      "West One Building, Beside the Governor's Wife Office, Agodi GRA, Ibadan, Oyo State",
  },
  {
    name: "Bodija",
    branch: "APTECH BODIJA",
    address:
      "38A Ladoke Akintola Street, Old Bodija, Ibadan 200285, Oyo, Nigeria",
  },
  {
    name: "Ring Road",
    branch: "APTECH RINGROAD",
    address: "93 MKO Abiola Way, Ibadan 200221, Oyo, Nigeria",
  },
];

const roomTypes = [
  {
    name: "Standard",
    tag: "10 residents per room",
    icon: Users,
    highlight: "Comfortable, value-focused shared living",
    valueNote:
      "Everything you need to live well and study — a bed, reading desk, air conditioning, internet and daily cleaning, all included.",
    facilities: [
      "Air conditioning",
      "High-speed internet",
      "Reading chair & table",
      "Bed provided",
      "Daily cleaning service",
      "Basic accommodation facilities",
    ],
  },
  {
    name: "VIP",
    tag: "4 residents per room",
    icon: Star,
    highlight: "Spacious premium rooms with extra conveniences",
    valueNote:
      "Premium space and home comforts — a more private room with a fridge, microwave and water heater so you can settle in properly.",
    facilities: [
      "Air conditioning",
      "High-speed internet",
      "Reading chair & table",
      "Bed provided",
      "Water heater",
      "Small refrigerator",
      "Spacious wardrobe",
      "Microwave",
    ],
  },
];

const amenities = [
  {
    icon: UtensilsCrossed,
    title: "Meal Plans",
    desc: "Optional, flexible meal plans through an approved catering partner — choose Breakfast & Dinner or Dinner only, so good food is always sorted.",
  },
  {
    icon: Bus,
    title: "Campus Transport",
    desc: "Dedicated pick-up and drop-off to and from campus on scheduled days, with schedules communicated in advance.",
  },
  {
    icon: Shirt,
    title: "Laundry Services",
    desc: "Subscribe to a paid laundry provider or do your own laundry on-site.",
  },
  {
    icon: Store,
    title: "Tuck Shop",
    desc: "A mini convenience store for drinking water, drinks, snacks, cereals, detergents, toiletries and first-aid supplies.",
  },
  {
    icon: HeartPulse,
    title: "First-Aid & Medical Support",
    desc: "A basic first-aid box and emergency support procedures are available on site.",
  },
  {
    icon: DoorOpen,
    title: "House Management",
    desc: "Dedicated House Managers and porters support resident welfare, complaints handling and daily operations.",
  },
];

const safetyPolicies = [
  {
    icon: Moon,
    title: "9:00 PM Curfew",
    desc: "Students registered independently are expected within the premises by 9:00 PM unless prior approval is granted.",
  },
  {
    icon: Clock,
    title: "Quiet Hours",
    desc: "Quiet hours run from 10:00 PM to 6:00 AM to protect study time and rest.",
  },
  {
    icon: Shield,
    title: "Secure Access",
    desc: "Sign-in/out logs, registered visitors and controlled entry points keep the community safe.",
  },
  {
    icon: Bed,
    title: "Daily Cleaning",
    desc: "Rooms and common areas are cleaned daily by designated accommodation staff.",
  },
  {
    icon: Sparkles,
    title: "Respectful Community",
    desc: "No harassment, violence or disruptive behaviour — consideration for others is mandatory.",
  },
  {
    icon: Phone,
    title: "Emergency Support",
    desc: "Emergency contacts for house management, security and medical support are available on site.",
  },
];

const contactLines = [
  { icon: Phone, value: "+234 707 049 1555" },
  { icon: Phone, value: "+234 806 463 4830" },
  { icon: Phone, value: "+234 803 651 8761" },
];

// Smoothly scroll to the booking form
const scrollToBooking = (e) => {
  e.preventDefault();
  document
    .getElementById("book")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

// ── Reusable animated section heading ──
const SectionHeading = ({ eyebrow, title, accent, copy }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
  >
    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FFC107]/30 bg-[#FFC107]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#FFC107]">
      {eyebrow}
    </span>
    <h2 className="text-3xl font-bold leading-tight md:text-4xl">
      {title} <span className="text-[#FFC107]">{accent}</span>
    </h2>
    {copy && (
      <p className="mx-auto mt-3 max-w-xl leading-relaxed text-white/55">
        {copy}
      </p>
    )}
  </motion.div>
);

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

// ── Room types & facilities ──
const RoomTypesSection = () => (
  <section className="relative py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-6 lg:px-0">
      <SectionHeading
        eyebrow="Rooms & Facilities"
        title="Find the room"
        accent="that fits you"
        copy="Every room is air-conditioned, wired with high-speed internet and set up for focused study and rest."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {roomTypes.map((room, i) => {
          const Icon = room.icon;
          return (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative overflow-hidden rounded-2xl border p-8 ${
                room.name === "VIP"
                  ? "border-[#FFC107]/40 bg-[#FFC107]/[0.04]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {room.name === "VIP" && (
                <span className="absolute right-0 top-0 rounded-bl-xl bg-[#FFC107] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#020B2D]">
                  Most Popular
                </span>
              )}
              <div className="mb-5 flex items-center gap-4">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    room.name === "VIP"
                      ? "bg-[#FFC107] text-[#020B2D]"
                      : "border border-[#FFC107]/20 bg-[#FFC107]/10 text-[#FFC107]"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-2xl font-bold">{room.name}</h3>
                  <p className="text-sm text-[#FFC107]">{room.tag}</p>
                </div>
              </div>

              <p className="mb-6 text-sm text-white/55">{room.highlight}</p>

              <ul className="mb-8 grid gap-3 sm:grid-cols-2">
                {room.facilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-white/75"
                  >
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#FFC107]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                <p className="text-sm leading-relaxed text-white/60">
                  {room.valueNote}
                </p>
                <a
                  href="#book"
                  onClick={scrollToBooking}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#FFC107] px-5 py-2.5 text-sm font-semibold text-[#020B2D] transition hover:bg-[#ffd23f]"
                >
                  Book now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

// ── Amenities & services ──
const AmenitiesSection = () => (
  <section className="relative py-20 md:py-28">
    <div className="pointer-events-none absolute left-[-10%] top-1/4 h-[420px] w-[420px] rounded-full bg-[#FFC107]/5 blur-[130px]" />
    <div className="mx-auto max-w-6xl px-6 lg:px-0">
      <SectionHeading
        eyebrow="Life at the Hostel"
        title="Everything you need"
        accent="to focus on your studies"
        copy="Beyond a comfortable room, residents enjoy transport, meals, laundry and dedicated support services."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {amenities.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFC107]/30"
          >
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#FFC107]/20 bg-[#FFC107]/10">
              <Icon className="h-5 w-5 text-[#FFC107]" />
            </span>
            <h3 className="mb-2 text-lg font-bold">{title}</h3>
            <p className="text-sm leading-relaxed text-white/55">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Safety & community ──
const SafetySection = () => (
  <section className="relative py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-6 lg:px-0">
      <SectionHeading
        eyebrow="Safety & Community"
        title="A safe, structured home"
        accent="away from home"
        copy="The accommodation is built around clear rules, strong safety measures and a respectful shared community."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {safetyPolicies.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFC107]/30"
          >
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#FFC107]/20 bg-[#FFC107]/10">
              <Icon className="h-5 w-5 text-[#FFC107]" />
            </span>
            <h3 className="mb-2 text-lg font-bold">{title}</h3>
            <p className="text-sm leading-relaxed text-white/55">{desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#FFC107]/20 bg-[#FFC107]/[0.04] p-8 text-center md:flex-row md:text-left"
      >
        <div>
          <h3 className="text-xl font-bold">Questions about accommodation?</h3>
          <p className="mt-1 text-sm text-white/55">
            Talk to the accommodation team — we're happy to help you choose the
            right room.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 md:items-end">
          <div className="flex flex-wrap justify-center gap-2">
            {contactLines.map(({ icon: Icon, value }) => (
              <a
                key={value}
                href={`tel:${value.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Icon className="h-4 w-4 text-[#FFC107]" />
                {value}
              </a>
            ))}
          </div>
          <a
            href="mailto:info@itssng.com"
            className="text-sm text-white/55 underline underline-offset-4 transition hover:text-white/80"
          >
            info@itssng.com · www.aptechibadan.com
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

// ── Booking form (stands in place of the former campus-tour video) ──
const BookingFormSection = () => {
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
    <section id="book" className="relative scroll-mt-24 py-20 md:py-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#FFC107]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-0">
        <SectionHeading
          eyebrow="Reserve Your Spot"
          title="Book your room"
          accent="today"
          copy="Share a few details and our team will reach out to arrange a viewing and confirm your room."
        />

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl bg-white shadow-2xl"
        >
          <div className="rounded-2xl bg-white p-8 md:p-10">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-6 text-2xl font-bold text-[#020B2D]"
            >
              Book Your Room
            </motion.h2>

            {success ? (
              <div className="rounded-xl border border-green-200 bg-green-50 px-6 py-10 text-center">
                <div className="mb-4 text-5xl">🎉</div>
                <p className="mb-1 text-lg font-bold text-green-700">
                  Request received!
                </p>
                <p className="mb-4 text-sm text-green-600">
                  Our team will reach out to confirm your room and arrange a
                  viewing.
                </p>
                <button
                  onClick={resetForm}
                  className="text-xs text-green-600 underline underline-offset-2 hover:text-green-700"
                >
                  Submit another request →
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
                    animate={{
                      borderColor: focused === "name" ? "#FFC107" : "#D1D5DB",
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
                      borderColor: focused === "email" ? "#FFC107" : "#D1D5DB",
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
                      borderColor: focused === "phone" ? "#FFC107" : "#D1D5DB",
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
                    className="relative w-full overflow-hidden rounded-full bg-[#020B2D] py-3 font-semibold text-white transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {!loading && (
                      <motion.span
                        className="pointer-events-none absolute inset-0"
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
                          className="inline-block h-4 w-4 rounded-full border-2 border-white border-t-transparent"
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

                <p className="pt-1 text-center text-xs text-gray-300">
                  We'll reach out to arrange your viewing. No spam.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ── Campus locations (kept as the final section) ──
const LocationsSection = () => (
  <section className="relative py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-0">
      <SectionHeading
        eyebrow="Where We Are"
        title="Three convenient campuses,"
        accent="one great community"
        copy="Student accommodation is available across all three Aptech Ibadan locations, so you can live close to your classes."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {locations.map((loc, i) => (
          <motion.div
            key={loc.branch}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFC107]/30 hover:bg-white/[0.05]"
          >
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#FFC107]/20 bg-[#FFC107]/10">
              <MapPin className="h-5 w-5 text-[#FFC107]" />
            </span>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FFC107]">
              {loc.branch}
            </p>
            <h3 className="mt-1 text-xl font-bold">{loc.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              {loc.address}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ── Campus tour video (portrait frame, shown in the hero) ──
const CampusTourVideo = () => {
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
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative mx-auto w-full max-w-[320px]"
    >
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FFC107]/30 bg-[#FFC107]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#FFC107]">
        <Play className="h-3 w-3 fill-current" />
        Campus Tour
      </span>

      <div className="group relative">
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
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4 text-center text-[11px] uppercase tracking-widest text-white/40"
      >
        Student accommodation · Aptech Ibadan
      </motion.p>
    </motion.div>
  );
};

export default function AccommodationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020B2D] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute left-1/2 top-[-20%] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[#FFC107]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      {/* HERO — info + campus tour video */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-32 md:pt-40 lg:px-0">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFC107]/30 bg-[#FFC107]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#FFC107]"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FFC107]" />
              Now Available
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            >
              Student <span className="text-[#FFC107]">Accommodation</span>
              <br />
              is now available.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-9 max-w-xl text-lg leading-relaxed text-white/55 lg:mx-0"
            >
              A safe, comfortable and connected living experience designed
              exclusively for Aptech Ibadan students — available across Agodi,
              Bodija and Ring Road. Every room comes furnished with air
              conditioning, high-speed internet and daily cleaning, so you can
              focus on your studies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-9 flex flex-wrap justify-center gap-2 lg:justify-start"
            >
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-white/65 transition-all duration-200 hover:scale-105 hover:bg-white/10"
                >
                  <Icon className="h-3 w-3 flex-shrink-0 text-[#FFC107]" />
                  {label}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <a
                href="#book"
                onClick={scrollToBooking}
                className="inline-flex items-center gap-2 rounded-full bg-[#FFC107] px-8 py-3.5 font-semibold text-[#020B2D] shadow-lg shadow-[#FFC107]/25 transition hover:bg-[#ffd23f]"
              >
                Book a Room
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Explore the Site
              </Link>
            </motion.div>
          </div>

          <CampusTourVideo />
        </div>
      </div>

      <RoomTypesSection />
      <AmenitiesSection />
      <SafetySection />
      <BookingFormSection />
      <LocationsSection />

      {/* <Footer/> */}
    </main>
  );
}
