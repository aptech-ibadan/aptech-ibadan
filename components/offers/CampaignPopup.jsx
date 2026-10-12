"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import EmberBackground from "@/components/ember/EmberBackground";
import EmberLockMark from "@/components/ember/EmberLockMark";
import EmberCountdown from "@/components/ember/EmberCountdown";
import { campaign, maxDiscount } from "@/data/lockedInEmber";

const STORAGE_KEY = "locked-in-ember-popup-seen";

const highlights = [
  { value: `Up to ${maxDiscount}%`, label: "off" },
  { value: "₦5M+", label: "prizes & rewards" },
  { value: "Free", label: "bonus course" },
];

const CampaignPopup = () => {
  const [open, setOpen] = useState(false);

  // Show shortly after load, once per session, and only while the campaign runs
  useEffect(() => {
    if (Date.now() > new Date(campaign.end).getTime()) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {}
    const timer = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePopup}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Locked-In Ember campaign"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            className="relative isolate max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-orange-300/20 bg-[#040d2e] p-6 text-center text-white shadow-2xl"
          >
            <EmberBackground count={35} />

            <button
              onClick={closePopup}
              aria-label="Close popup"
              className="absolute right-3 top-3 z-10 cursor-pointer rounded-full bg-white/10 p-2 transition hover:bg-white/20"
            >
              <X size={16} className="text-white" />
            </button>

            <div className="relative z-10 flex flex-col items-center">
              <EmberLockMark size={86} />
              <span className="mt-3 rounded-full bg-orange-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                Oct 9 – 29 · First {campaign.slots} slots
              </span>

              <h3 className="mt-3 text-3xl font-extrabold leading-tight text-white">
                LOCKED-IN{" "}
                <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
                  EMBER
                </span>
              </h3>
              <p className="mt-2 leading-relaxed text-gray-100">
                Don’t wait until the year is over to start your next chapter.
                The more you lock in, the more you unlock.
              </p>

              <div className="mt-5 grid w-full grid-cols-3 gap-2">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-xl border border-white/15 bg-white/5 px-2 py-3"
                  >
                    <p className="text-xl font-extrabold text-orange-300">{h.value}</p>
                    <p className="text-[11px] text-gray-300">{h.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-gray-300">
                Plus a free bonus course and career-ready support
              </p>

              <div className="mt-4 scale-90 sm:scale-100">
                <EmberCountdown end={campaign.end} />
              </div>

              <div className="mt-5 flex w-full flex-col gap-2 sm:flex-row">
                <Link
                  href="/locked-in-ember"
                  onClick={closePopup}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.03]"
                >
                  See what you unlock <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  onClick={closePopup}
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-orange-300/70 hover:text-orange-200"
                >
                  Talk to Admissions
                </Link>
              </div>

              <p className="mt-3 text-[11px] text-gray-400">
                Agodi · Ring Road · Bodija · Terms apply
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CampaignPopup;
