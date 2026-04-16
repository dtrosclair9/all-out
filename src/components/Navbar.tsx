"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const serviceLinks = [
  { href: "/services/ceramic-coating", label: "Ceramic Coating" },
  { href: "/services/paint-protection-film", label: "Paint Protection Film" },
  { href: "/services/vehicle-wraps", label: "Vehicle Wraps & Vinyl" },
  { href: "/services/commercial-tinting", label: "Commercial Tinting" },
  { href: "/services/automotive-tinting", label: "Automotive Tinting" },
  { href: "/services/marine-tinting", label: "Marine Tinting & Wraps" },
  { href: "/services/residential-tinting", label: "Residential Tinting" },
];

const topLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/franchise", label: "Franchise" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#0a0a0a]/95 backdrop-blur-sm shadow-lg shadow-black/40"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-primary.png"
            alt="All Out Tint & Auto Spa"
            width={280}
            height={140}
            className="h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="font-display text-sm tracking-widest uppercase text-white/80 hover:text-[#a60303] transition-colors duration-200"
              >
                Home
              </Link>
            </li>

            {/* Services dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className="font-display text-sm tracking-widest uppercase text-white/80 hover:text-[#a60303] transition-colors duration-200 flex items-center gap-1"
              >
                Services
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-[#0a0a0a] border border-[#242424] shadow-xl shadow-black/60 z-50">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setServicesOpen(false)}
                      className="block font-display text-xs tracking-widest uppercase text-white/70 hover:text-white hover:bg-[#141414] px-5 py-3 transition-colors duration-150 border-b border-[#1a1a1a] last:border-b-0"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className="block font-display text-xs tracking-widest uppercase text-[#a60303] hover:bg-[#141414] px-5 py-3 transition-colors duration-150"
                  >
                    All Services →
                  </Link>
                </div>
              )}
            </li>

            {topLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-display text-sm tracking-widest uppercase text-white/80 hover:text-[#a60303] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="tel:2253811000"
            className="inline-flex items-center gap-2 bg-[#a60303] hover:bg-[#cc0404] text-white font-display text-sm tracking-wider uppercase px-5 py-2.5 transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.59 1 1 0 01-.25 1.01l-2.2 2.2z" />
            </svg>
            (225) 381-1000
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <ul className="px-6 pb-6 flex flex-col gap-4 border-t border-white/10 pt-4">
          <li>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block font-display text-sm tracking-widest uppercase text-white/80 hover:text-[#a60303] transition-colors"
            >
              Home
            </Link>
          </li>

          {/* Mobile services expander */}
          <li>
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="w-full flex items-center justify-between font-display text-sm tracking-widest uppercase text-white/80 hover:text-[#a60303] transition-colors"
            >
              Services
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? "max-h-96 mt-3" : "max-h-0"
              }`}
            >
              <ul className="pl-4 flex flex-col gap-3 border-l border-[#a60303]/40">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                      className="block font-display text-xs tracking-widest uppercase text-white/60 hover:text-[#a60303] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                    className="block font-display text-xs tracking-widest uppercase text-[#a60303] transition-colors"
                  >
                    All Services →
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {topLinks.slice(1).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-display text-sm tracking-widest uppercase text-white/80 hover:text-[#a60303] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li>
            <a
              href="tel:2253811000"
              className="inline-flex items-center gap-2 bg-[#a60303] text-white font-display text-sm tracking-wider uppercase px-5 py-2.5 mt-2"
            >
              (225) 381-1000
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
