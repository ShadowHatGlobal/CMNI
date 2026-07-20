"use client";

import React from "react";
import { Award, Compass } from "lucide-react";

export default function FounderRoadmap() {
  const roadmapSteps = [
    {
      phase: "Phase 1: Validation",
      timeline: "Q1 2026",
      title: "Scientific Clearances & Blueprints",
      desc: "Establishing cultivation protocols, structural designs, and administrative university approvals.",
      status: "COMPLETED"
    },
    {
      phase: "Phase 2: Pilot Deployment",
      timeline: "Q2 - Q3 2026",
      title: "Manipur University Pilot Launch",
      desc: "Setting up our custom vertical grow racks within pilot wings, starting active cafeteria integration and botanical data tracing.",
      status: "CURRENT PILOT"
    },
    {
      phase: "Phase 3: Integration Scopes",
      timeline: "Q4 2026",
      title: "Nutritional Analytics Tracking",
      desc: "Introducing automated environmental management tools. Compiling performance whitepapers and crop metrics.",
      status: "UPCOMING"
    },
    {
      phase: "Phase 4: Academic Expansion",
      timeline: "2027 - 2028",
      title: "Scale-Out to 100+ Campuses",
      desc: "Expanding specialized hubs across partner schools and institutions nationwide in coordination with institutional agricultural agencies.",
      status: "FUTURE SCOPE"
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-slate-50 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 pb-16 border-b border-slate-200">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-sm font-semibold text-mint uppercase tracking-widest">FOUNDER INSPIRATION</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-2">
                Founder's Vision
              </h2>
              <div className="h-1.5 w-16 bg-mint mt-4 rounded-full" />
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
              <p>
                "At MicroBloom Enterprises, we believe that focused academic achievements begin with deep cellular nutrition. Universities drive high-level discoveries, yet campus diets are often notably low in organic micronutrients."
              </p>
              <p className="font-medium text-forest">
                "CMNI bridges this nutritional gap. By setting up automated AgTech models directly in schools, we help students eat fresher greens, maintain dynamic concentration levels, and secure practical agribusiness skills."
              </p>
            </div>

            <div className="pt-2">
              <div className="font-extrabold text-lg text-forest">Kanchan N</div>
              <div className="text-xs font-semibold text-slate-400">Founder, MicroBloom Enterprises & CMNI</div>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 bg-white border border-slate-100 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold text-forest">Pilot Campus Hub</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-emerald-50 text-mint rounded-xl mt-1">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Manipur University</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Hosting our initial CMNI vertical systems sandbox to evaluate modular agricultural parameters.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-emerald-50 text-mint rounded-xl mt-1">
                  <Compass className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Expanded Growth Avenues</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Developing modular consumer grow packs and specialized wellness drinks curated by MicroBloom Enterprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-mint uppercase tracking-widest">DEVELOPMENT PATHWAY</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-2">
            The Roadmap of CMNI
          </h2>
          <div className="h-1.5 w-16 bg-mint mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 bg-emerald-100 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {roadmapSteps.map((step, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  idx % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-4 sm:left-1/2 w-6 h-6 rounded-full border-4 border-slate-50 bg-mint -translate-x-1/2 z-10 shadow hidden sm:block" />
                <div className="w-full sm:w-1/2 sm:px-8" />
                
                <div className="w-full sm:w-1/2 px-4 sm:px-8">
                  <div className="p-6 bg-white border border-slate-100 rounded-3xl hover:border-slate-200 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-mint font-mono uppercase">
                        {step.timeline}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                        step.status === "COMPLETED" 
                          ? "bg-slate-100 text-slate-600" 
                          : step.status === "CURRENT PILOT" 
                          ? "bg-emerald-100 text-forest" 
                          : "bg-slate-50 text-slate-400"
                      }`}>
                        {step.status}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-forest leading-tight mb-1">
                      {step.phase}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mb-2">
                      {step.title}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
