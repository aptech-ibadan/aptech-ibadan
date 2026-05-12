"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

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

const OffersPageClient = ({ offers }) => {
  const confettiPieces = [
    { left: "5%", delay: 0.2, duration: 3.1, color: "#FFC107" },
    { left: "14%", delay: 0.5, duration: 2.8, color: "#ffffff" },
    { left: "24%", delay: 0.1, duration: 3.3, color: "#FFD54F" },
    { left: "35%", delay: 0.7, duration: 2.9, color: "#ffffff" },
    { left: "48%", delay: 0.4, duration: 3.4, color: "#FFC107" },
    { left: "60%", delay: 0.8, duration: 2.7, color: "#ffffff" },
    { left: "74%", delay: 0.3, duration: 3.2, color: "#FFD54F" },
    { left: "86%", delay: 0.6, duration: 2.9, color: "#ffffff" },
    { left: "94%", delay: 0.9, duration: 3.0, color: "#FFC107" },
  ];

  const [timers, setTimers] = useState(() =>
    offers.map((offer) => getCountdown(offer.endDate)),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimers(offers.map((offer) => getCountdown(offer.endDate)));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [offers]);

  return (
    <main className="bg-[#020B2D] text-white min-h-screen relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        {confettiPieces.map((piece, index) => (
          <motion.span
            key={`${piece.left}-${index}`}
            className="absolute top-[-16px] block h-2 w-2 rounded-sm opacity-70"
            style={{ left: piece.left, backgroundColor: piece.color }}
            animate={{ y: [0, 780], rotate: [0, 220], opacity: [0, 0.75, 0] }}
            transition={{
              duration: piece.duration,
              delay: piece.delay,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-6 pt-16 pb-10">
        <p className="text-xs tracking-[0.2em] text-[#FFC107] uppercase font-semibold">
          Campaign Offers
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mt-3">Discount Offers</h1>
        <p className="text-gray-200 mt-4 max-w-3xl">
          Explore active and seasonal campaign offers like Kopa in Tech,
          ValenTech, and Xmas in Tech. Each offer includes expiry date and live
          countdown.
        </p>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-6 pb-16 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {offers.map((offer, index) => {
          const timer = timers[index];
          return (
            <motion.article
              key={offer.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-2xl border border-white/20 bg-[#040d2e] p-6 shadow-[0_10px_28px_rgba(0,0,0,0.35)]"
            >
              <div className="rounded-xl overflow-hidden border border-white/15 mb-4">
                <div className="relative h-40">
                  <Image
                    src={offer.image || "/aptech004.png"}
                    alt={offer.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020B2D]/65 to-transparent" />
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-bold">{offer.title}</h2>
                <span className="rounded-full bg-[#FFC107] text-black text-xs font-bold px-3 py-1">
                  {offer.discount}
                </span>
              </div>

              <p className="text-gray-100 mt-4 leading-relaxed">{offer.description}</p>

              <p className="text-sm text-gray-300 mt-4">
                <span className="text-white font-semibold">Target:</span>{" "}
                {offer.audience}
              </p>

              <p className="text-sm text-gray-300 mt-1">
                <span className="text-white font-semibold">Ends:</span>{" "}
                {new Date(offer.endDate).toLocaleDateString()}
              </p>

              <div className="mt-5 grid grid-cols-4 gap-2">
                {timer.expired ? (
                  <p className="col-span-4 text-center text-sm text-red-300 bg-red-500/10 border border-red-400/30 rounded-lg py-2">
                    Offer Ended
                  </p>
                ) : (
                  [
                    { label: "D", value: timer.days },
                    { label: "H", value: timer.hours },
                    { label: "M", value: timer.minutes },
                    { label: "S", value: timer.seconds },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-white/15 bg-[#08133f] py-2 text-center"
                    >
                      <p className="text-lg font-bold text-[#FFC107]">{item.value}</p>
                      <p className="text-[11px] text-gray-300">{item.label}</p>
                    </div>
                  ))
                )}
              </div>

              <Link
                href="/contact"
                className="inline-flex mt-6 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold hover:border-[#FFC107]/60 hover:text-[#FFC107] transition cursor-pointer"
              >
                Claim Offer
              </Link>
            </motion.article>
          );
        })}
      </section>
    </main>
  );
};

export default OffersPageClient;
