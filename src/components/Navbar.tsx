"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact Us", href: "#booking" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo-v2.png" alt="Dolphin Clean Solutions" width={48} height={48} className="object-contain h-10 w-auto" priority />
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-[#1a3a5c] transition-colors">{l.label}</a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <a
            href="tel:8135531364"
            className="bg-[#5c6b2e] hover:bg-[#4a5524] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            (813) 553-1364
          </a>

          {/* Hamburger button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-[#1a3a5c] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#1a3a5c] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#1a3a5c] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-600 hover:text-[#1a3a5c] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
            <a
              href="tel:8135531364"
              className="bg-[#5c6b2e] hover:bg-[#4a5524] text-white text-sm font-semibold px-5 py-2 rounded-full text-center transition-colors"
            >
              (813) 553-1364
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
