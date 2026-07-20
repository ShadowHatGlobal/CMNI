"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Cpu, Award } from "lucide-react";

export default function About() {
  const stats = [
    { value: "40x", label: "Nutritional Density", text: "Compared to mature vegetables, unlocking compact cellular wellness." },
    { value: "100+", label: "Target Campuses", text: "Envisioned scaling footprint across institutional India by 2030." },
    { value: "95%", label: "Less Water Used", text: "Sustainable cultivation utilizing closed-loop agricultural engineering." },
    { value: "0%", label: "Chemical Pesticides", text: "Cultivated strictly in controlled, chemical-free pathogen structures." },
  ];

  return (
    <section id="about" className="py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-mint uppercase tracking-widest">ABOUT THE INITIATIVE</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-2">
            A Bold Reimagining of Campus Nutrition, Science & Wellness
          </h2>
          <div className="h-1.5 w-16 bg-mint mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 mt-5 leading-relaxed text-sm sm:text-base">
            The Campus Microgreens & Nutrition Initiative (CMNI) merges advanced modular AgTech with direct student wellness. Our goal is to transform academic environments into self-sustaining functional-food hubs, starting with our launch campus, <strong className="text-forest">Manipur University</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm space-y-4"
          >
            <div className="p-3 bg-mint/10 rounded-xl w-fit">
              <Globe className="h-6 w-6 text-mint" />
            </div>
            <h3 className="text-xl font-bold text-forest">Eco-Campus Alignment</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We empower universities to establish green, low-carbon cultivation nodes directly on campus, localizing superfood production from seed to plate in days.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm space-y-4"
          >
            <div className="p-3 bg-mint/10 rounded-xl w-fit">
              <Cpu className="h-6 w-6 text-mint" />
            </div>
            <h3 className="text-xl font-bold text-forest">Modular Cultivation</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Utilizing smart, energy-efficient LED light spectrums and state-of-the-art biological substrates curated by MicroBloom Enterprises.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm space-y-4 md:col-span-2 lg:col-span-1"
          >
            <div className="p-3 bg-mint/10 rounded-xl w-fit">
              <Award className="h-6 w-6 text-mint" />
            </div>
            <h3 className="text-xl font-bold text-forest">Academic & Biotech Link</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Translating agricultural research into active wellness indices. Creating student vocational pathways and physiological data analytics.
            </p>
          </motion.div>
        </div>

        <div className="bg-forest rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-gradient-to-tr from-forest-dark to-forest-light opacity-80" />
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-mint/20 blur-3xl rounded-full" />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="pt-6 sm:pt-0 first:pt-0 sm:px-4">
                <div className="text-4xl sm:text-5xl font-extrabold text-mint tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed max-w-[200px] mx-auto">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
