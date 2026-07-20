"use client";

import React from "react";
import { Cpu, Wind, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export default function Innovation() {
  const features = [
    {
      icon: Cpu,
      title: "Optimized Bio-Optics",
      desc: "Custom wave-spectrum LED alignments programmed to accelerate crop metabolic synthetics."
    },
    {
      icon: Wind,
      title: "Closed-Loop Circulation",
      desc: "Delivering sterile, filtered ventilation grids to balance ambient microclimates."
    },
    {
      icon: RefreshCw,
      title: "Bio-Substrate Development",
      desc: "Using plant-based coco substrates designed to lock in organic nourishment matrices."
    }
  ];

  return (
    <section id="innovation" className="py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-mint uppercase tracking-widest">INNOVATION ENGINE</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-2">
            The Technology Driving the Nutrition Focus
          </h2>
          <div className="h-1.5 w-16 bg-mint mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="absolute inset-0 bg-mint/5 blur-3xl rounded-full" />
            <div className="relative bg-forest-dark border border-forest-light/30 rounded-3xl p-6 sm:p-8 text-white shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono text-emerald-300">CMNI-SHELF-SYS_V1.1</span>
                <span className="text-[10px] font-mono text-white/50">SYS STATUS: RUNNING</span>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <div className="flex justify-between text-xs text-slate-300 mb-2">
                    <span>SHELF 01: Red Amaranth</span>
                    <span className="text-mint font-mono font-semibold">94% EXT BIODENSITY</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-pink-500 to-rose-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: "94%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-2 text-[10px] text-white/40 font-mono">
                    <span>LED: EXP-PINK (450nm)</span>
                    <span>TEMP: 22.4°C</span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <div className="flex justify-between text-xs text-slate-300 mb-2">
                    <span>SHELF 02: Broccoli Microgreens</span>
                    <span className="text-mint font-mono font-semibold">88% EXT BIODENSITY</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden relative">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-mint"
                      initial={{ width: 0 }}
                      whileInView={{ width: "88%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-2 text-[10px] text-white/40 font-mono">
                    <span>LED: BASE-WHITE (650nm)</span>
                    <span>TEMP: 21.9°C</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
                <div className="text-center">
                  <span className="text-[9px] text-slate-300 uppercase block">Humidity</span>
                  <span className="text-xs sm:text-sm font-bold text-white font-mono">65.2%</span>
                </div>
                <div className="text-center">
                  <span className="text-[9px] text-slate-300 uppercase block">CO2 Level</span>
                  <span className="text-xs sm:text-sm font-bold text-white font-mono">420 ppm</span>
                </div>
                <div className="text-center">
                  <span className="text-[9px] text-slate-300 uppercase block">Water PH</span>
                  <span className="text-xs sm:text-sm font-bold text-white font-mono">6.4 Ph</span>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-forest leading-tight">
              Bespoke Vertical AgTech Configured Specially for Indoor Campus Footprints
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              The proprietary modular templates created under MicroBloom Enterprises emphasize space conservation and water optimization, converting basic indoor campus structures into reliable nutrient hubs.
            </p>

            <div className="space-y-4 pt-2">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="p-2.5 bg-mint/10 text-mint rounded-xl shrink-0 mt-1">
                    <feat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-forest">{feat.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
