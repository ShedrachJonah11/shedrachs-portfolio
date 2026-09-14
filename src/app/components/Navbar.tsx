"use client";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.path))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActive("#" + (visible.target as HTMLElement).id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        scrolled
          ? "bg-[#121212]/70 backdrop-blur-md border-b border-[#33353F]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto relative flex items-center justify-center px-4 py-3 lg:py-4">
        <div className="hidden md:block">
          <ul className="flex flex-row items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  active={active === link.path}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mobile-menu md:hidden absolute right-4 top-1/2 -translate-y-1/2">
          <button
            onClick={() => setNavbarOpen((v) => !v)}
            aria-expanded={navbarOpen}
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
            className="flex items-center px-3 py-2 rounded-lg border border-[#33353F] text-slate-200 hover:text-white hover:border-white transition-colors"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="md:hidden h-9" aria-hidden />
      </div>

      <AnimatePresence initial={false}>
        {navbarOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-[#121212]/95 backdrop-blur-md border-t border-[#33353F]"
          >
            <MenuOverlay
              links={navLinks}
              active={active}
              onNavigate={() => setNavbarOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
