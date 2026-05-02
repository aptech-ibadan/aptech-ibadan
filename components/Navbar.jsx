"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AptechLogo from '@/assets/APTECHLOGO.png'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/program" },     // Changed "Program" to "Programs"
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/career" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#020B2D]/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src={AptechLogo}
                alt="Aptech Logo"
                width={52}
                height={52}
                className="object-contain transition-transform group-hover:scale-110 duration-300"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-2xl tracking-tighter">APTECH</span>
              <p className="text-[#FFC107] text-[10px] -mt-1 tracking-[2px] font-medium">IBADAN</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-all duration-300 pb-1
                  ${pathname === link.href 
                    ? "text-white" 
                    : "text-gray-400 hover:text-white"
                  }`}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FFC107] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/apply"
              className="bg-[#FFC107] hover:bg-[#FFD700] text-black font-semibold px-8 py-3 rounded-full 
                         transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFC107]/30 flex items-center gap-2"
            >
              Apply Now
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-white text-3xl p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-[#020B2D] border-t border-white/10 py-6">
          <div className="flex flex-col px-6 space-y-6 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className={`font-medium transition-colors ${
                  pathname === link.href ? "text-[#FFC107]" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-white/10">
              <Link
                href="/apply"
                onClick={() => setMobileMenu(false)}
                className="block w-full text-center bg-[#FFC107] text-black font-semibold py-4 rounded-full hover:bg-[#FFD700] transition-all"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;