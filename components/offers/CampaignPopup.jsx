"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, MapPin, TrendingUp, Cpu, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tracks = [
  {
    icon: TrendingUp,
    title: "Data Analysis",
    subtitle: "Excel, SQL, Power BI & Dashboards",
  },
  {
    icon: Cpu,
    title: "Data Science",
    subtitle: "Python, Machine Learning & AI",
  },
];

const centres = ["Agodi Centre", "Ring Road Centre"];

const CampaignPopup = () => {
  const [open, setOpen] = useState(false);

  // Show the popup shortly after page load
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] bg-black/55 backdrop-blur-sm px-4 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-lg rounded-2xl border border-white/20 bg-[#040d2e] p-6 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative top accents */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[#FFC107]/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#FFC107]/5 blur-2xl" />

            <button
              onClick={closePopup}
              aria-label="Close popup"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
            >
              <X size={16} className="text-white" />
            </button>

            {/* Badge */}
            <div className="relative flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFC107] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-black">
                New September Cohort
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                Limited Seats
              </span>
            </div>

            {/* Heading */}
            <h3 className="relative mt-4 text-3xl font-bold leading-tight text-white">
              Join the <span className="text-[#FFC107]">September Cohort</span>
            </h3>
            <p className="relative mt-2 text-gray-100 leading-relaxed">
              Start a high-demand data career. Choose either{" "}
              <span className="font-semibold text-[#FFC107]">Data Science</span>{" "}
              or{" "}
              <span className="font-semibold text-[#FFC107]">
                Data Analysis
              </span>{" "}
              and learn hands-on with industry experts.
            </p>

            {/* Track options */}
            <div className="relative mt-5 grid grid-cols-2 gap-3">
              {tracks.map(({ icon: Icon, title, subtitle }) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/15 bg-white/5 p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFC107]/15 text-[#FFC107]">
                    <Icon size={20} />
                  </div>
                  <p className="mt-3 font-bold text-white">{title}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-gray-300">
                    {subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Centres */}
            <div className="relative mt-4 rounded-xl border border-white/10 bg-[#08133f] px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-300">
                Now enrolling at
              </p>
              <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1">
                {centres.map((centre) => (
                  <span
                    key={centre}
                    className="flex items-center gap-1.5 text-sm font-medium text-white"
                  >
                    <MapPin size={14} className="text-[#FFC107]" /> {centre}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="relative mt-5 flex flex-col gap-2 sm:flex-row">
              <Link
                href="/contact"
                onClick={closePopup}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFC107] px-6 py-3 font-semibold text-black transition hover:bg-yellow-300 cursor-pointer"
              >
                Reserve Your Seat <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                onClick={closePopup}
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-[#FFC107]/60 hover:text-[#FFC107] cursor-pointer"
              >
                Talk to Admissions
              </Link>
            </div>

            <p className="relative mt-3 text-center text-[11px] text-gray-400">
              Beginner-friendly · Flexible schedules · No prior experience
              needed
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CampaignPopup;
