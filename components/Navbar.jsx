"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const path = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Program", href: "/program" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Career", href: "/career" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/itssc2.png"
              alt="logo"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition duration-300
                ${
                  path === link.href
                    ? "text-green-500"
                    : "text-gray-300 hover:text-green-400"
                }`}
              >
                {link.name}

                {/* Active underline */}
                {path === link.href && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-500"></span>
                )}
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/apply"
              className="ml-4 bg-green-500 text-black px-6 py-2 rounded-full font-semibold
              hover:bg-green-400 transition duration-300 shadow-lg shadow-green-500/30 hover:scale-105"
            >
              Apply
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenu((prev) => !prev)}
              className="text-green-500 text-2xl"
            >
              {mobileMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-black border-t border-green-500/20">
          <div className="flex flex-col px-6 py-4 space-y-4">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className={`text-base font-medium transition duration-300
                ${
                  path === link.href
                    ? "text-green-500"
                    : "text-gray-300 hover:text-green-400"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/apply"
              onClick={() => setMobileMenu(false)}
              className="mt-4 text-center bg-green-500 text-black py-3 rounded-full font-semibold
              hover:bg-green-400 transition duration-300"
            >
              Apply
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;