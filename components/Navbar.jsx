"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ChevronDown } from "lucide-react";
import AptechLogo from "@/assets/APTECHLOGO.png";

import middlesex from "@/assets/middlesex.png";
import lincoln from "@/assets/lincoln.png";
import ncc from "@/assets/ncc.png";
import sgsu from "@/assets/sgsu.png";
import bolton from "@/assets/bolton.png";
import ism from "@/assets/ism-img.png";

const partners = [
  {
    name: "Middlesex University ",
    href: "https://www.mdx.ac.uk/",
    external: true,
    logo: middlesex,
  },
  {
    name: "Lincoln University",
    href: "https://www.lincoln.ac.uk/",
    external: true,
    logo: lincoln,
  },
  {
    name: "NCC",
    href: "http://www.nccu.edu/",
    external: true,
    logo: ncc,
  },
  {
    name: "SGSU",
    href: "http://sgsuniversity.ac.in/",
    external: true,
    logo: sgsu,
  },
  {
    name: "Bolton University",
    href: "https://www.bolton.ac.uk/",
    external: true,
    logo: bolton,
  },
  {
    name: "ISM",
    href: "https://en.ism.de/",
    external: true,
    logo: ism,
  },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobilePartnersOpen, setMobilePartnersOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const partnersRef = useRef(null);
  const aboutRef = useRef(null);
  const pathname = usePathname();

  const aboutLinks = [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Discount Offers", href: "/offers", isHot: true },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (partnersRef.current && !partnersRef.current.contains(e.target)) {
        setPartnersOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/program" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
    { name: "Arena", href: "/courses/amsp", isNew: true },
    { name: "Accommodation", href: "/accomodation", isNew: true },
  ];
  const aboutActive = ["/about", "/blog", "/offers"].includes(pathname);

  return (
    <nav className="sticky top-0 z-50 bg-[#020B2D]/95 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src={AptechLogo}
                alt="Aptech Logo"
                width={100}
                height={100}
                className="object-contain transition-transform group-hover:scale-110 duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on tablets and below */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={`relative text-sm font-medium tracking-wide transition-all cursor-pointer duration-300 pb-1 ${
                pathname === "/" ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Home
              {pathname === "/" && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FFC107] rounded-full" />
              )}
            </Link>

            <div className="relative" ref={aboutRef}>
              <button
                onClick={() => setAboutOpen((prev) => !prev)}
                className={`relative text-sm font-medium tracking-wide transition-all cursor-pointer duration-300 pb-1 flex items-center gap-1.5 ${
                  aboutActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                About
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                />
                {aboutActive && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FFC107] rounded-full" />
                )}
              </button>

              {aboutOpen && (
                <div className="absolute top-full left-0 mt-3 w-48 bg-[#020B2D] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                  <div className="py-2">
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setAboutOpen(false)}
                        className="flex items-center justify-between gap-2 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
                      >
                        <span>{item.name}</span>
                        {item.isHot && (
                          <span className="inline-flex items-center rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white leading-none">
                            HOT
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks
              .filter((link) => link.name !== "Home")
              .map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-all cursor-pointer duration-300 pb-1 flex items-center gap-1.5
                  ${
                    pathname === link.href
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
              >
                {link.name}
                {link.isNew && (
                  <span className="inline-flex items-center rounded-full bg-[#FFC107] px-1.5 py-0.5 text-[10px] font-bold text-black leading-none tracking-wide">
                    NEW
                  </span>
                )}
                {pathname === link.href && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#FFC107] rounded-full" />
                )}
              </Link>
              ))}

            {/* Partners Dropdown */}
            <div className="relative" ref={partnersRef}>
              <button
                onClick={() => setPartnersOpen(!partnersOpen)}
                className="relative text-sm font-medium tracking-wide transition-all cursor-pointer duration-300 pb-1 flex items-center gap-1.5 text-gray-400 hover:text-white"
              >
                Partners
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${partnersOpen ? "rotate-180" : ""}`}
                />
              </button>

              {partnersOpen && (
                <div className="absolute top-full right-0 mt-3 w-52 bg-[#020B2D] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                  <div className="py-2">
                    {partners.map((partner) => (
                      <a
                        key={partner.name}
                        href={partner.href}
                        target={partner.external ? "_blank" : undefined}
                        rel={
                          partner.external ? "noopener noreferrer" : undefined
                        }
                        onClick={() => setPartnersOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-[0.50s]"
                      >
                        <div className="w-8 h-8 relative flex-shrink-0 bg-white rounded-md p-1">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            fill
                            className="object-contain p-0.5"
                          />
                        </div>
                        {partner.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button - Visible on tablets and below (lg breakpoint) */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white text-3xl p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Visible on tablets and below */}
      {mobileMenu && (
        <div className="lg:hidden bg-[#020B2D] border-t border-white/10 py-6">
          <div className="flex flex-col px-6 space-y-6 text-lg">
            <Link
              href="/"
              onClick={() => setMobileMenu(false)}
              className={`font-medium transition-colors cursor-pointer ${
                pathname === "/" ? "text-[#FFC107]" : "text-gray-300 hover:text-white"
              }`}
            >
              Home
            </Link>

            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className={`w-full flex items-center justify-between font-medium transition-colors cursor-pointer ${
                  aboutActive ? "text-[#FFC107]" : "text-gray-300 hover:text-white"
                }`}
              >
                About
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobileAboutOpen && (
                <div className="mt-3 ml-3 flex flex-col space-y-4 border-l border-white/10 pl-4">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenu(false)}
                      className="text-sm text-gray-300 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-2"
                    >
                      <span>{item.name}</span>
                      {item.isHot && (
                        <span className="inline-flex items-center rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white leading-none">
                          HOT
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks
              .filter((link) => link.name !== "Home")
              .map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className={`font-medium transition-colors cursor-pointer flex items-center gap-2 ${
                  pathname === link.href
                    ? "text-[#FFC107]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                {link.isNew && (
                  <span className="inline-flex items-center rounded-full bg-[#FFC107] px-1.5 py-0.5 text-[10px] font-bold text-black leading-none tracking-wide">
                    NEW
                  </span>
                )}
              </Link>
              ))}

            {/* Mobile Partners Accordion */}
            <div>
              <button
                onClick={() => setMobilePartnersOpen(!mobilePartnersOpen)}
                className="w-full flex items-center justify-between font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                Partners
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobilePartnersOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mobilePartnersOpen && (
                <div className="mt-3 ml-3 flex flex-col space-y-4 border-l border-white/10 pl-4">
                  {partners.map((partner) => (
                    <a
                      key={partner.name}
                      href={partner.href}
                      target={partner.external ? "_blank" : undefined}
                      rel={partner.external ? "noopener noreferrer" : undefined}
                      onClick={() => setMobileMenu(false)}
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-3 cursor-pointer"
                    >
                      <div className="w-7 h-7 relative flex-shrink-0 bg-white rounded-md p-1">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain p-0.5"
                        />
                      </div>
                      {partner.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
