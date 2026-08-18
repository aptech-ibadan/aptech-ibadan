"use client";

import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  Wallet,
  Users,
  TrendingUp,
  Trophy,
  Calendar,
  MapPin,
  Phone,
  Globe,
  CheckCircle2,
  Sparkles,
  GraduationCap,
} from "lucide-react";

const OpenDay = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const CTA_TIERS = [
    {
      icon: Wallet,
      amount: "N20,000",
      title: "Commitment Reward",
      points: [
        "Secure your admission",
        "Get 10% OFF tuition",
        "Lock your tuition fee for 14 days",
      ],
      tag: "Popular",
    },
    {
      icon: GraduationCap,
      amount: "N50,000+",
      title: "Super Saver",
      points: ["Up to 15% OFF tuition", "Priority programme reservation"],
      tag: "Best Value",
    },
  ];

  const PERKS = [
    {
      icon: Users,
      title: "Refer & Earn",
      desc: "Refer a friend and receive tuition discounts and cash rewards (where applicable).",
    },
    {
      icon: TrendingUp,
      title: "Upgrade & Save",
      desc: "Special progression discounts into ADSE, ACNS, Arena Multimedia & other career programmes.",
    },
  ];

  const EVENT_DETAILS = [
    { icon: Calendar, label: "Date", value: "August 12" },
    { icon: Calendar, label: "Time", value: "10:00 AM" },
    { icon: MapPin, label: "Venue", value: "Civic Centre, Agodi GRA, Ibadan" },
  ];

  const CONTACTS = ["07070491555", "08036518761", "08064634830"];

  return (
    <section
      id="open-day"
      className="relative bg-[#020B2D] text-white py-20 md:py-28 overflow-hidden"
    >
      {/* ── Ambient orbs ── */}
      <motion.div
        className="absolute top-[-120px] right-[-120px] w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,193,7,0.14) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-120px] left-[-120px] w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], x: [0, 20, 0] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={container}
        className="max-w-7xl mx-auto px-6 lg:px-6 relative z-10"
      >
        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-[#FFC107]/10 text-[#FFC107] text-sm font-semibold px-5 py-2 rounded-full border border-[#FFC107]/20 mb-6">
              <Sparkles size={16} />
              Open Day Event
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Win from over <span className="text-[#FFC107]">N20 Million</span> in
            scholarships, discounts & career opportunities!
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-gray-300 text-lg leading-relaxed"
          >
            Every attendee stands a chance to win from over N20 Million in
            scholarships, tuition discounts, prizes, and career opportunities.
          </motion.p>
        </div>

        {/* ── CTA Tiers ── */}
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {CTA_TIERS.map((tier, index) => (
            <motion.div
              key={tier.title}
              variants={fadeUp}
              whileHover={{ y: -6, borderColor: "rgba(255,193,7,0.4)" }}
              className={`relative rounded-2xl p-8 border backdrop-blur-sm transition-colors duration-300 ${
                index === 0
                  ? "bg-[#FFC107] text-black border-[#FFC107] shadow-[0_10px_28px_rgba(255,193,7,0.25)]"
                  : "bg-white/5 text-white border-white/10"
              }`}
            >
              <div className="absolute top-5 right-5">
                <span
                  className={`text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                    index === 0
                      ? "bg-black/15 text-black"
                      : "bg-[#FFC107]/15 text-[#FFC107]"
                  }`}
                >
                  {tier.tag}
                </span>
              </div>

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  index === 0 ? "bg-black/10" : "bg-[#FFC107]/10"
                }`}
              >
                <tier.icon
                  size={26}
                  className={index === 0 ? "text-black" : "text-[#FFC107]"}
                />
              </div>

              <p
                className={`text-sm font-semibold uppercase tracking-widest mb-1 ${
                  index === 0 ? "text-black/70" : "text-[#FFC107]"
                }`}
              >
                Pay {tier.amount}
              </p>
              <h3
                className={`text-2xl font-bold mb-5 ${
                  index === 0 ? "text-black" : "text-white"
                }`}
              >
                {tier.title}
              </h3>

              <ul className="flex flex-col gap-2.5">
                {tier.points.map((point) => (
                  <li
                    key={point}
                    className={`flex items-start gap-2.5 text-sm leading-relaxed ${
                      index === 0 ? "text-black/80" : "text-gray-300"
                    }`}
                  >
                    <CheckCircle2
                      size={18}
                      className={`mt-0.5 flex-shrink-0 ${
                        index === 0 ? "text-black/70" : "text-[#FFC107]"
                      }`}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── Perks ── */}
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          {PERKS.map((perk, index) => (
            <motion.div
              key={perk.title}
              variants={fadeUp}
              whileHover={{ y: -6, borderColor: "rgba(255,193,7,0.4)" }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-[#FFC107]/10 rounded-xl flex items-center justify-center mb-4">
                <perk.icon size={26} className="text-[#FFC107]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {perk.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {perk.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Success banner ── */}
        <motion.div
          variants={fadeUp}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 rounded-2xl border border-[#FFC107]/25 bg-gradient-to-r from-[#FFC107]/10 via-[#FFC107]/5 to-transparent px-8 py-6 text-center"
        >
          <Trophy size={28} className="text-[#FFC107] flex-shrink-0" />
          <p className="text-lg text-white">
            <span className="font-bold text-[#FFC107]">100+ students</span> made
            it in 2025 — you could be next!
          </p>
        </motion.div>

        {/* ── Event details ── */}
        <motion.div
          variants={fadeUp}
          className="mt-6 rounded-2xl border border-white/10 bg-[#040d2e] p-8 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Details */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-5">
                📍 Event Details
              </h3>
              <div className="flex flex-col gap-4">
                {EVENT_DETAILS.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#FFC107]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={17} className="text-[#FFC107]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">
                        {item.label}
                      </p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-5">
                ☎️ Contact
              </h3>
              <div className="flex flex-col gap-3">
                {CONTACTS.map((number) => (
                  <a
                    key={number}
                    href={`tel:${number}`}
                    className="inline-flex items-center gap-3 text-white font-medium hover:text-[#FFC107] transition cursor-pointer"
                  >
                    <Phone size={17} className="text-[#FFC107]" />
                    {number}
                  </a>
                ))}
              </div>

              <a
                href="https://www.aptechibadan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white font-medium hover:text-[#FFC107] transition mt-2 cursor-pointer"
              >
                <Globe size={17} className="text-[#FFC107]" />
                www.aptechibadan.com
              </a>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-[#FFC107] text-black font-semibold px-6 py-3 hover:bg-[#FFD700] transition-colors duration-300 cursor-pointer"
                >
                  Reserve My Slot
                </Link>
                <Link
                  href="/offers"
                  className="inline-flex rounded-full border border-white/30 text-white font-semibold px-6 py-3 hover:border-[#FFC107]/60 hover:text-[#FFC107] transition cursor-pointer"
                >
                  View Offers
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OpenDay;
