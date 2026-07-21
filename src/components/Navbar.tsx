"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Menu, X, Leaf, Info, Layers, Compass, HelpCircle, 
  PhoneCall, BookOpen, Sparkles, HeartPulse, Activity, ChevronDown 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 1. Direct Primary Links (Always visible on desktop)
  const primaryLinks = [
    { name: "About", href: "/#about", icon: Info },
    { name: "Focus Areas", href: "/#problem", icon: HelpCircle },
    { name: "Microgreens", href: "/#microgreens", icon: Leaf },
    { name: "Ecosystem", href: "/#ecosystem", icon: Layers },
  ];

  // 2. Specialty Pages & Extra Sections (Grouped in the desktop dropdown)
  const dropdownLinks = [
    { name: "Technology Engine", href: "/#innovation", icon: Compass },
    { name: "Nutrition Index", href: "/nutrition", icon: Sparkles },
    { name: "Wheatgrass Products", href: "/wheatgrass", icon: HeartPulse },
    { name: "Preventative Health", href: "/health", icon: Activity },
    { name: "Recipes & Stories", href: "/recipes", icon: BookOpen },
    { name: "Future Roadmap", href: "/#roadmap", icon: HelpCircle },
  ];

  // 3. Full Union Array (Used for the mobile drawer menu)
  const mobileUnionLinks = [...primaryLinks, ...dropdownLinks];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const hash = href.split("#")[1];
      if (typeof window !== "undefined") {
        const isHomepage = window.location.pathname === "/";
        
        if (isHomepage) {
          e.preventDefault();
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
            setDropdownOpen(false);
          }
        }
      }
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
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2 group">
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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 relative">
              {primaryLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-forest hover:bg-slate-100 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}

              {/* Specialty Initiatives Dropdown */}
              <div className="relative inline-block text-left" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="inline-flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-forest hover:bg-slate-100 transition-all duration-200 focus:outline-none"
                >
                  <span>Initiatives</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "transform rotate-180 text-mint" : ""}`} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-72 rounded-2xl bg-white shadow-xl border border-slate-100 p-2 overflow-hidden z-50"
                    >
                      <div className="grid grid-cols-1 gap-1">
                        {dropdownLinks.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-emerald-50 text-slate-700 hover:text-forest transition-colors"
                          >
                            <div className="p-1.5 bg-slate-50 text-mint rounded-lg">
                              <link.icon className="h-4 w-4" />
                            </div>
                            <div>
                              <span className="text-xs font-bold block">{link.name}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <a
                href="/#contact"
                onClick={(e) => handleScrollTo(e, "/#contact")}
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-forest text-white hover:bg-forest-light shadow-sm transition-all duration-200"
              >
                Join Pilot
              </a>
            </div>

            {/* Hamburger Button */}
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

      {/* Mobile Drawer (Includes Scrollable Union list of all links) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] bottom-0 z-40 lg:hidden p-4 bg-white shadow-xl border-b border-slate-100 overflow-y-auto"
          >
            <div className="grid grid-cols-1 gap-1 pb-24">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 py-2 block">Menu Navigation</span>
              {mobileUnionLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-700 hover:bg-emerald-50 hover:text-forest transition-all"
                >
                  <link.icon className="h-5 w-5 text-mint" />
                  <span>{link.name}</span>
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 mt-2 px-2">
                <a
                  href="/#contact"
                  onClick={(e) => handleScrollTo(e, "/#contact")}
                  className="block w-full text-center px-4 py-3 rounded-xl bg-forest text-white font-bold hover:bg-forest-light transition-all shadow"
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
}              ))}
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
