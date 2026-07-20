"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Award, TrendingUp, Sparkles, Database, ShieldCheck } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-mint-light opacity-30 blur-3xl rounded-full pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-emerald-100 opacity-40 blur-3xl rounded-full pointer-events-none animate-pulse-subtle" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center text-left space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-emerald-100/70 border border-emerald-200/80 px-4 py-1.5 rounded-full w-fit">
              <Sparkles className="h-4 w-4 text-forest" />
              <span className="text-xs font-semibold text-forest uppercase tracking-wider">
                India's First Institutional AgTech Revolution
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants} 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-forest tracking-tight leading-tight"
            >
              Campus Microgreens & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-forest-light">
                Nutrition Initiative
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-600 max-w-xl font-medium leading-relaxed">
              Building India's first university-based nutrition, research, and innovation ecosystem. Initiated by <strong className="text-forest">MicroBloom Enterprises</strong>.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-mint/10 rounded-lg">
                  <Award className="h-4 w-4 text-mint" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Pilot: Manipur University</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-mint/10 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-mint" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Founder: Kanchan N</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => handleScrollTo("#about")}
                className="group relative px-8 py-4 bg-forest hover:bg-forest-light text-white font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Explore CMNI</span>
                  <Leaf className="h-4 w-4 text-mint group-hover:rotate-12 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => handleScrollTo("#contact")}
                className="px-8 py-4 bg-white hover:bg-slate-50 text-forest font-semibold rounded-xl border border-slate-200 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Contact Initiative
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 relative w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="w-full max-w-[420px] rounded-3xl bg-forest-dark border border-forest-light/30 shadow-2xl overflow-hidden glass p-6 text-white relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-mint opacity-20 blur-2xl rounded-full" />
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-[10px] text-white/40 tracking-widest font-mono">CMNI-NODE_PILOT_01</span>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-300 flex items-center space-x-1">
                    <Database className="h-3.5 w-3.5" />
                    <span>MANIPUR UNIV. HUB</span>
                  </span>
                  <span className="text-[10px] font-mono bg-mint/20 text-mint px-2 py-0.5 rounded border border-mint/20">LIVE ACTIVE</span>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold tracking-tight font-sans">98.4%</div>
                  <p className="text-[11px] text-slate-300">Target Environment Nutrient Synthesizer Rating</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-center">
                  <span className="text-[10px] text-slate-300 block uppercase tracking-wider">PHASE 1 HARVEST</span>
                  <span className="text-base font-bold text-mint">7 DAYS</span>
                </div>
                <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-center">
                  <span className="text-[10px] text-slate-300 block uppercase tracking-wider">BIO-DENSITY</span>
                  <span className="text-base font-bold text-mint">40x</span>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 flex items-center space-x-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-mint" />
                    <span>Bio-Safety Verification</span>
                  </span>
                  <span className="text-mint font-mono font-semibold">PASSED</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-mint to-emerald-400"
                    initial={{ width: 0 }}
                    animate={{ width: "94%" }}
                    transition={{ duration: 2, delay: 0.8 }}
                  />
                </div>
              </div>

              <motion.div 
                className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-white text-forest shadow-xl border border-slate-100 flex items-center space-x-3"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <Leaf className="h-6 w-6 text-mint animate-bounce" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-700">100% Organic</div>
                  <div className="text-[10px] text-slate-400 font-medium">Zero Synthetic Chemicals</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
