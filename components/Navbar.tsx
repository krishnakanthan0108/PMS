"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">

        <Link href="/" className="flex items-center group">
          <div className="relative h-12 w-36">
            <Image
              src="/image.png"
              alt="PMS Global Elites"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-sm tracking-widest uppercase transition-colors duration-300 group ${
                  pathname === link.href ? "text-gold" : "text-mist hover:text-pearl"
                }`}
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6875rem" }}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className="hidden md:block btn-gold text-xs">
          <span>Get Started</span>
        </Link>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-pearl transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-4 h-px bg-gold transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-pearl transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-carbon border-t border-white/5`}
      >
        <ul className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm tracking-widest uppercase ${
                  pathname === link.href ? "text-gold" : "text-mist"
                }`}
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-gold inline-block text-xs">
              <span>Get Started</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}