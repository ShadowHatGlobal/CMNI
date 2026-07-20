"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Leaf, Award, Zap, ChevronRight } from "lucide-react";

export default function Ecosystem() {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      title: "CMNI Cultivation Hubs",
      subtitle: "On-Campus Modular Growing Blueprints",
      icon: Cpu,
      description: "Low-footprint vertical arrays engineered for indoor academic spaces. Smart LED structures and monitored watering deliver balanced yields across all local seasons."
    },
    {
      title: "Student Wellness & Dining Integration",
      subtitle: "Active Cafeteria Superfood Enhancements",
      icon: Leaf,
      description: "Adding highly dense microgreen crops directly into on-site meal servings, improving accessibility to active botanical wellness matrices."
    },
    {
      title: "Research & Biotechnology Wing",
      subtitle: "Hands-on Scientific Botanical Labs",
      icon: Award,
      description: "Allowing university botanical departments to track active bio-compounds, compile data, and publish scientific research paper volumes."
    },
    {
      title: "AgTech Startup Incubator",
      subtitle: "Fostering Student Entrepreneurship",
      icon: Zap,
      description: "Working alongside MicroBloom Enterprises to offer specialized vocational certifications, cultivating students to create local agribusiness setups."
    }
  ];

  return (
    <section id="ecosystem" className="py-24 bg-slate-50 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-mint uppercase tracking-widest">ECOSYSTEM MATRIX</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-2">
            The CMNI Core Ecosystem Framework
          </h2>
          <div className="h-1.5 w-16 bg-mint mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
            {layers.map((layer, idx) => (
              <button
                key={idx}
                onClick={() => setActiveLayer(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center space-x-4 ${
                  activeLayer === idx 
                    ? "bg-white border-mint shadow-md ring-1 ring-mint" 
                    : "bg-white/50 border-slate-200 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className={`p-3 rounded-xl shrink-0 ${activeLayer === idx ? "bg-mint text-white" : "bg-slate-100 text-slate-500"}`}>
                  <layer.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-bold text-sm sm:text-base leading-tight ${activeLayer === idx ? "text-forest" : "text-slate-700"}`}>
                    {layer.title}
                  </div>
                  <div className="text-xs text-slate-400 truncate mt-0.5">
                    {layer.subtitle}
                  </div>
                </div>
                <ChevronRight className={`h-5 w-5 transition-transform ${activeLayer === idx ? "text-mint transform translate-x-1" : "text-slate-300"}`} />
              </button>
            ))}
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-100 shadow-xl rounded-3xl p-8 sm:p-12 h-full flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="p-4 bg-emerald-50 rounded-2xl text-mint w-fit">
                    {React.createElement(layers[activeLayer].icon, { className: "h-8 w-8" })}
                  </div>
                  
                  <div>
                    <span className="text-xs font-bold text-mint uppercase tracking-wider block mb-1">
                      ECOSYSTEM LAYER 0{activeLayer + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-forest tracking-tight">
                      {layers[activeLayer].title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-1">
                      {layers[activeLayer].subtitle}
                    </p>
                  </div>

                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {layers[activeLayer].description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Manipur University Pilot Integration</span>
                  <span className="font-bold text-forest">MicroBloom Enterprises</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
