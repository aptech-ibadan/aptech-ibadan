"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import EmberBackground from "@/components/ember/EmberBackground";
import EmberLockMark from "@/components/ember/EmberLockMark";
import EmberCountdown from "@/components/ember/EmberCountdown";
import { campaign, maxDiscount } from "@/data/lockedInEmber";

const gradientText =
  "bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent";

// Featured Locked-In Ember card shown above the database-driven offers.
const EmberOfferBanner = () => (
  <section className="relative z-10 max-w-7xl mx-auto px-6 pb-10">
    <div className="relative isolate overflow-hidden rounded-3xl border border-orange-300/25 bg-[#040d2e] text-white">
      <EmberBackground count={50} />
      <div className="relative z-10 grid items-center gap-8 p-8 md:grid-cols-[auto_1fr] md:p-10">
        <div className="flex justify-center">
          <EmberLockMark size={140} />
        </div>

        <div className="text-center md:text-left">
          <span className="inline-block rounded-full bg-orange-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
            Featured · Oct 9 – 29 · First {campaign.slots} slots
          </span>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
            LOCKED-IN <span className={gradientText}>EMBER</span>
          </h2>
          <p className="mt-2 max-w-xl text-gray-100">
            Don’t wait until the year is over to start your next chapter. The
            more you lock in, the more you unlock.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-semibold">
              Up to <span className={gradientText}>{maxDiscount}% off</span>
            </span>
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-semibold">
              <span className={gradientText}>₦5M+</span> prizes &amp; rewards
            </span>
          </div>

          <div className="mt-5 flex flex-col items-center gap-5 md:flex-row md:justify-start">
            <EmberCountdown end={campaign.end} />
            <Link
              href="/locked-in-ember"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500 px-7 py-3 font-bold transition hover:scale-105"
            >
              See what you unlock <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EmberOfferBanner;
