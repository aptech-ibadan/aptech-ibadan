"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import AptechLogo from "@/assets/APTECHLOGO.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020B2D] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* 🔥 TOP SECTION */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={AptechLogo}
                alt="Aptech Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <div>
                <h2 className="font-bold text-xl tracking-tight">APTECH</h2>
                <p className="text-[#FFC107] text-xs tracking-widest">IBADAN</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students with industry-relevant tech skills and
              career-focused training programs.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-[#FFC107]">Navigation</h3>
            <div className="flex flex-col space-y-3 text-sm">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                href="/program"
                className="text-gray-400 hover:text-white transition"
              >
                Programs
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="font-semibold mb-4 text-[#FFC107]">Quick Links</h3>
            <div className="flex flex-col space-y-3 text-sm">
              <Link href="/career" className="text-gray-400 hover:text-white transition">
                Careers
              </Link> 
              <Link href="/contact" className="text-gray-400 hover:text-white transition">
                Apply Now
              </Link> 
            </div>
          </div>*/}

          {/* Socials */}
          <div>
            <h3 className="font-semibold mb-4 text-[#FFC107]">Connect</h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-white/10 rounded-full hover:bg-[#FFC107] hover:text-black transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 rounded-full hover:bg-[#FFC107] hover:text-black transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 rounded-full hover:bg-[#FFC107] hover:text-black transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-3 bg-white/10 rounded-full hover:bg-[#FFC107] hover:text-black transition"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <p className="text-gray-400 text-sm mt-4">
              Follow us for updates and opportunities.
            </p>
          </div>
        </div>

        {/* 🔥 BOTTOM BAR */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-500">
          © {currentYear} Aptech Ibadan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
