"use client";

import { motion } from "framer-motion";

import middlesex from "@/assets/middlesex.png";
import lincoln from "@/assets/lincoln.png";
import ncc from "@/assets/ncc.png";
import sgsu from "@/assets/sgsu.png";
import bolton from "@/assets/bolton.png";
import Image from "next/image";

const logos = [middlesex, lincoln, ncc, sgsu, bolton];

export default function GlobalAlliance() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">

          <p className="text-brand-tertiary font-semibold uppercase tracking-widest mb-4">
            Global Opportunities
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6">
            Your Gateway to{" "}
            <span className="text-brand-tertiary">Global Education</span>
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Through our partnerships with leading international universities,
            Aptech students gain access to globally recognized degrees and
            career pathways across the UK, UAE, Canada, Malaysia, and beyond.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-tertiary/20 to-blue-500/20 blur-2xl rounded-3xl" />

            <div className="relative z-10 bg-white p-10 rounded-3xl border border-slate-100 shadow-lg">
              <h3 className="text-xl font-bold text-brand-primary mb-4">
                Study Locally, Graduate Globally
              </h3>

              <ul className="space-y-3 text-slate-600">
                <li>• Earn international ICT degrees</li>
                <li>• Transfer to partner universities abroad</li>
                <li>• Gain globally recognized certifications</li>
                <li>• Access international career pathways</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-brand-primary mb-4">
              Built for Global Success
            </h3>

            <p className="text-slate-600 mb-6 leading-relaxed">
              Our alliances with international institutions ensure that students
              receive education aligned with global standards, opening doors to
              further studies and job opportunities worldwide.
            </p>

            <button className="bg-brand-tertiary text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Explore Pathways →
            </button>
          </motion.div>
        </div>

        {/* Moving Logos */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <motion.div
            className="flex gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="min-w-[140px] flex items-center justify-center"
              >
                <Image
                  src={logo}
                  alt="partner university logo"
                  height={64}
                  className="object-contain opacity-60 hover:opacity-100 hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
