
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  PhoneCall,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LOGO_URL =
  "https://img.sanishtech.com/u/adaba3c879878338339a1d48b5d9c3a4.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "Our Story", href: "#about" },
];

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect page scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile navigation with Escape.
  useEffect(() => {
    if (!navActive) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setNavActive(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navActive]);

  const closeMenu = () => {
    setNavActive(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] w-full">
      {/* MAIN HEADER */}
      <div
        className={`border-b transition-all duration-500 ${
          isScrolled
            ? "border-white/10 bg-[#10291F]/95 py-3 shadow-lg backdrop-blur-xl"
            : "border-transparent bg-gradient-to-b from-[#10291F]/70 to-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
          {/* CLICKABLE URJI LOGO */}
          <Link
            href="/#home"
            onClick={closeMenu}
            aria-label="URJI Coffee homepage"
            className="group relative z-[110] flex min-w-0 items-center gap-3"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/50 bg-white shadow-lg transition-transform duration-300 group-hover:scale-105">
              <Image
                src={LOGO_URL}
                alt="URJI COFFEE official logo"
                width={56}
                height={56}
                unoptimized
                priority
                sizes="56px"
                className="h-full w-full object-contain"
              />
            </span>

            <span className="flex min-w-0 flex-col">
              <span className="whitespace-nowrap font-serif text-xl font-semibold tracking-[0.08em] text-[#F7F3E9] transition-colors duration-300 group-hover:text-[#D5B46A] sm:text-2xl">
                URJI COFFEE
              </span>

              <span className="mt-1 text-[9px] tracking-[0.18em] text-[#D5B46A] sm:text-[10px] sm:tracking-[0.22em]">
                ዑርጂ · FURI & SEBETA
              </span>
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-10 md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#F7F3E9]/85 transition-colors duration-300 hover:text-[#D5B46A]"
              >
                {link.name}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#D5B46A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* HEADER ACTIONS */}
          <div className="flex shrink-0 items-center gap-4">
            {/* PHONE ORDER BUTTON */}
            <a
              href="tel:0915879595"
              className="group hidden items-center gap-3 rounded-full border border-[#D5B46A]/60 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F7F3E9] transition-all duration-300 hover:border-[#D5B46A] hover:bg-[#D5B46A] hover:text-[#183E30] sm:inline-flex"
            >
              <PhoneCall size={15} />

              <span>Call to order</span>

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setNavActive((previous) => !previous)}
              aria-label={
                navActive ? "Close navigation" : "Open navigation"
              }
              aria-expanded={navActive}
              aria-controls="urji-mobile-navigation"
              className="relative z-[110] flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D5B46A]/60 text-[#F7F3E9] transition-all duration-300 hover:bg-[#D5B46A] hover:text-[#183E30] md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {navActive ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {navActive && (
          <motion.div
            id="urji-mobile-navigation"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute inset-x-0 top-full border-t border-white/10 bg-[#10291F]/98 px-7 pb-10 pt-8 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.07,
                  }}
                  className="flex items-center justify-between border-b border-white/10 py-5 font-serif text-2xl text-[#F7F3E9] transition-colors duration-300 hover:text-[#D5B46A]"
                >
                  {link.name}

                  <ArrowUpRight
                    size={19}
                    className="text-[#D5B46A]"
                  />
                </motion.a>
              ))}
            </nav>

            {/* MOBILE PHONE BUTTON */}
            <a
              href="tel:0915879595"
              onClick={closeMenu}
              className="mt-8 flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[#D5B46A] px-6 text-sm font-semibold text-[#183E30] transition-colors duration-300 hover:bg-[#F0D79C]"
            >
              <PhoneCall size={17} />
              Call to order: 0915 879 595
            </a>

            {/* BRANCH INFORMATION */}
            <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-[#F7F3E9]/60">
              Furi & Sebeta · Ethiopia
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
