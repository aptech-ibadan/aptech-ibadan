"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Calendar, MapPin, Clock, Trophy, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const PublicityPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show immediately — before the campaign popup
    const timer = setTimeout(() => setOpen(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setOpen(false);

  const EVENT_DETAILS = [
    { icon: Calendar, label: "Date", value: "August 12" },
    { icon: Clock, label: "Time", value: "10:00 AM" },
    { icon: MapPin, label: "Venue", value: "Civic Centre, Agodi GRA, Ibadan" },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] bg-black/65 backdrop-blur-sm flex items-center justify-center px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl shadow-2xl bg-[#020B2D]"
          >
            {/* Close button */}
            <button
              onClick={closePopup}
              aria-label="Close publicity popup"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition cursor-pointer"
            >
              <X size={22} className="text-white" />
            </button>

            {/* Image — larger display area */}
            <div className="relative w-full aspect-[16/9] md:aspect-[16/7]">
              <Image
                src="/career-quest.png"
                alt="Career Quest Publicity"
                fill
                className="object-contain bg-[#020B2D]"
                priority
              />
            </div>

            {/* Open Day content */}
            <div className="p-6 md:p-9 text-white">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-2 bg-[#FFC107]/10 text-[#FFC107] text-xs font-semibold px-4 py-1.5 rounded-full border border-[#FFC107]/20">
                  Open Day Event
                </span>
                <span className="inline-flex items-center gap-2 bg-white/5 text-gray-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-white/10">
                  <Trophy size={14} className="text-[#FFC107]" />
                  100+ students made it in 2025 — you could be next!
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Win from over{" "}
                <span className="text-[#FFC107]">N20 Million</span> in
                scholarships, discounts & career opportunities!
              </h3>

              <p className="mt-3 text-gray-300 leading-relaxed">
                Every attendee stands a chance to win from over N20 Million in
                scholarships, tuition discounts, prizes, and career
                opportunities.
              </p>

              {/* Event details */}
              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                {EVENT_DETAILS.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#040d2e] p-4"
                  >
                    <div className="w-9 h-9 bg-[#FFC107]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={17} className="text-[#FFC107]" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-500 uppercase tracking-widest">
                        {item.label}
                      </p>
                      <p className="text-sm text-white font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key perks */}
              <ul className="mt-6 flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
                {[
                  "Up to 15% OFF tuition",
                  "N20,000 Commitment Reward",
                  "Refer & earn rewards",
                ].map((point) => (
                  <li key={point} className="inline-flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-[#FFC107]" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA buttons */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  onClick={closePopup}
                  className="inline-flex rounded-full bg-[#FFC107] text-black font-semibold px-7 py-3 hover:bg-[#FFD700] transition-colors duration-300 cursor-pointer"
                >
                  Reserve My Slot
                </Link>
                <Link
                  href="/offers"
                  onClick={closePopup}
                  className="inline-flex rounded-full border border-white/30 text-white font-semibold px-7 py-3 hover:border-[#FFC107]/60 hover:text-[#FFC107] transition cursor-pointer"
                >
                  View Offers
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PublicityPopup;
