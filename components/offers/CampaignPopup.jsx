"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { campaignOffers } from "@/data/campaignOffers";

const getCountdown = (endDate) => {
  const target = new Date(endDate).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    expired: false,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const CampaignPopup = () => {
  const [open, setOpen] = useState(false);
  const campaign = campaignOffers.find((item) => item.slug === "kopa-in-tech");
  const [countdown, setCountdown] = useState(() =>
    getCountdown(campaign?.endDate),
  );

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!campaign?.endDate) return;
    const intervalId = setInterval(() => {
      setCountdown(getCountdown(campaign.endDate));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [campaign?.endDate]);

  const closePopup = () => {
    setOpen(false);
  };

  const confettiPieces = [
    { left: "8%", delay: 0.1, duration: 2.8, color: "#FFC107" },
    { left: "18%", delay: 0.5, duration: 3.2, color: "#ffffff" },
    { left: "30%", delay: 0.2, duration: 2.9, color: "#FFD54F" },
    { left: "45%", delay: 0.7, duration: 3.4, color: "#ffffff" },
    { left: "60%", delay: 0.3, duration: 2.7, color: "#FFC107" },
    { left: "75%", delay: 0.9, duration: 3.1, color: "#ffffff" },
    { left: "88%", delay: 0.4, duration: 2.6, color: "#FFD54F" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] bg-black/55 backdrop-blur-sm px-4 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {confettiPieces.map((piece, index) => (
              <motion.span
                key={`modal-${piece.left}-${index}`}
                className="absolute top-[-16px] block h-2 w-2 rounded-sm opacity-70"
                style={{ left: piece.left, backgroundColor: piece.color }}
                animate={{ y: [0, 900], rotate: [0, 220], opacity: [0, 0.85, 0] }}
                transition={{
                  duration: piece.duration,
                  delay: piece.delay,
                  repeat: Infinity,
                  repeatDelay: 1.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-lg rounded-2xl border border-white/20 bg-[#040d2e] p-6 shadow-2xl relative"
          >
            <button
              onClick={closePopup}
              aria-label="Close campaign popup"
              className="absolute top-3 right-3 p-2 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
            >
              <X size={16} className="text-white" />
            </button>

            <p className="text-xs tracking-[0.2em] text-[#FFC107] uppercase font-semibold">
              Latest Campaign
            </p>
            <div className="mt-3 rounded-xl overflow-hidden border border-white/20">
              <div className="relative h-40">
                <Image
                  src={campaign?.image || "/aptech004.png"}
                  alt={campaign?.title || "Campaign"}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D]/70 to-transparent" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mt-4">
              {campaign?.title || "Campaign"}
            </h3>
            <p className="text-gray-100 mt-3 leading-relaxed">
              Enjoy{" "}
              <span className="text-[#FFC107] font-bold">
                {campaign?.discount || "15% OFF"}
              </span>{" "}
              on all courses for {campaign?.audience || "qualified students"}.
              Limited campaign period.
            </p>

            {!countdown.expired && (
              <div className="mt-4 grid grid-cols-4 gap-2">
                {[
                  { label: "D", value: countdown.days },
                  { label: "H", value: countdown.hours },
                  { label: "M", value: countdown.minutes },
                  { label: "S", value: countdown.seconds },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-white/20 bg-[#08133f] py-2 text-center"
                  >
                    <p className="text-lg font-bold text-[#FFC107]">{item.value}</p>
                    <p className="text-[11px] text-gray-300">{item.label}</p>
                  </div>
                ))}
              </div>
            )}

            {countdown.expired && (
              <p className="mt-4 text-sm text-red-300 bg-red-500/10 border border-red-400/30 rounded-lg py-2 px-3 text-center">
                This campaign has ended.
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/offers"
                onClick={closePopup}
                className="rounded-full bg-[#FFC107] text-black font-semibold px-5 py-2.5 hover:bg-yellow-300 transition cursor-pointer"
              >
                View Offer Details
              </Link>
              <Link
                href="/contact"
                onClick={closePopup}
                className="rounded-full border border-white/30 text-white font-semibold px-5 py-2.5 hover:border-[#FFC107]/60 hover:text-[#FFC107] transition cursor-pointer"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CampaignPopup;
