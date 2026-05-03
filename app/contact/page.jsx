"use client";

import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Button } from "@/const";
import { useState } from "react";

const ContactPage = () => {
  const [showModal, setShowModal] = useState(false);

  // 🔥 DATA CONFIG (single source of truth)
  const campuses = [
    {
      name: "Agodi",
      socials: [
        {
          name: "Instagram",
          icon: <FaInstagram />,
          link: "https://instagram.com/aptechagodi",
        },
        {
          name: "WhatsApp",
          icon: <FaWhatsapp />,
          link: "https://wa.me/2347070491555",
        },
        {
          name: "Facebook",
          icon: <FaFacebook />,
          link: "", // empty → won't show
        },
        {
          name: "Twitter",
          icon: <FaTwitter />,
          link: "",
        },
      ],
    },
    {
      name: "Ringroad",
      socials: [
        {
          name: "Instagram",
          icon: <FaInstagram />,
          link: "https://instagram.com/aptechringroad",
        },
        {
          name: "WhatsApp",
          icon: <FaWhatsapp />,
          link: "https://wa.me/2348064634830",
        },
        {
          name: "Facebook",
          icon: <FaFacebook />,
          link: "",
        },
        {
          name: "Twitter",
          icon: <FaTwitter />,
          link: "",
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* 🔥 HERO */}
      <section className="bg-[#020B2D] text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#FFC107] uppercase tracking-widest text-sm mb-4">
            Contact Aptech Ibadan
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Visit Our Campus or{" "}
            <span className="text-[#FFC107]">
              Start Your Tech Journey Today
            </span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl">
            Speak with our advisors, explore our facilities, and get started
            with a career-focused program designed to make you job-ready.
          </p>

          <div className="mt-8 flex gap-4">
            <Button
              classes="bg-[#FFC107] text-black px-8 py-3 rounded-full font-semibold"
              link="/apply"
              text="Apply Now"
            />
            <Button
              classes="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black"
              link="#campus"
              text="View Locations"
            />
          </div>
        </div>
      </section>

      {/* 💣 CAMPUS LOCATIONS */}
      <section id="campus" className="py-16 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Campuses in Ibadan
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-2xl shadow-lg border">
            <h3 className="text-xl font-bold text-[#020B2D] mb-2">
              Aptech Agodi
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Westone Building, Agodi, Ibadan.
            </p>
            <a href="tel:07070491555">07070491555</a>
          </div>

          <div className="p-6 rounded-2xl shadow-lg border">
            <h3 className="text-xl font-bold text-[#020B2D] mb-2">
              Aptech Ringroad
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              93 M.K.O Abiola Way, Ring Road, Ibadan.
            </p>
            <a href="tel:08064634830">08064634830</a>
          </div>
        </div>
      </section>

      {/* 💣 QUICK CONTACT */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Reach Out Instantly
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <a href="tel:07070491555">
              <div className="p-6 bg-white rounded-xl shadow cursor-pointer">
                <FaPhone className="mx-auto mb-3 text-[#020B2D]" size={24} />
                <p className="font-semibold text-[#020B2D]">Call Us</p>
              </div>
            </a>

            <a href="mailto:info@aptech.ng">
              <div className="p-6 bg-white rounded-xl shadow cursor-pointer">
                <FaEnvelope className="mx-auto mb-3 text-[#020B2D]" size={24} />
                <p className="font-semibold text-[#020B2D]">Email</p>
              </div>
            </a>

            <div
              onClick={() => setShowModal(true)}
              className="p-6 bg-white rounded-xl shadow cursor-pointer"
            >
              <FaFacebook className="mx-auto mb-3" size={24} />
              <p className="font-semibold text-[#020B2D]">Social Media</p>
            </div>
          </div>
        </div>
      </section>

      {/* 💣 MAP */}
      <section className="py-10 px-6 md:px-16">
        <Image
          src="/images/map.png"
          alt="map"
          width={1200}
          height={500}
          className="rounded-xl"
        />
      </section>

      {/* 💣 SOCIAL MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-xl"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-6 text-center">
              Campus Socials
            </h3>

            <div className="space-y-6">
              {campuses.map((campus, index) => (
                <div key={index} className="border p-4 rounded-lg">
                  <p className="font-semibold mb-3">{campus.name}</p>

                  <div className="flex flex-wrap gap-3">
                    {campus.socials
                      .filter((s) => s.link) // 🔥 removes empty
                      .map((social, i) => (
                        <a
                          key={i}
                          href={social.link}
                          target="_blank"
                          className="flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-100"
                        >
                          {social.icon}
                          {social.name}
                        </a>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;