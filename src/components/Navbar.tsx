"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Leaf, Info, Layers, Compass, HelpCircle, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", icon: Info },
    { name: "Focus Areas", href: "#problem", icon: HelpCircle },
    { name: "Microgreens", href: "#microgreens", icon: Leaf },
    { name: "Ecosystem", href: "#ecosystem", icon: Layers },
    { name: "Technology", href: "#innovation", icon: Compass },
    { name: "Roadmap", href: "#roadmap", icon: HelpCircle },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="p-2 bg-forest rounded-xl group-hover:scale-105 transition-transform duration-300">
                <Leaf className="h-5 w-5 text-mint" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none tracking-tight text-forest">
                  CMNI
                </span>
                <span className="text-[10px] text-slate-500 font-medium tracking-wide mt-0.5">
                  MicroBloom Enterprises
                </span>
              </div>
            </a>

            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-forest hover:bg-slate-100 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-forest text-white hover:bg-forest-light shadow-sm transition-all duration-200"
              >
                Join Pilot
              </a>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-forest hover:bg-slate-100 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 lg:hidden p-4 bg-white shadow-xl border-b border-slate-100"
          >
            <div className="grid grid-cols-1 gap-2 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-emerald-50 hover:text-forest transition-all"
                >
                  <link.icon className="h-5 w-5 text-mint" />
                  <span>{link.name}</span>
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 mt-2">
                <a
                  href="#contact"
                  className="block w-full text-center px-4 py-3 rounded-xl bg-forest text-white font-semibold hover:bg-forest-light transition-all shadow"
                >
                  Join Pilot Program
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
