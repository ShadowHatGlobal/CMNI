"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export default function ImpactSDG() {
  const impacts = [
    { title: "Boost Institutional Green Status", desc: "Adds environmental achievements and direct botanical innovations to rankings." },
    { title: "Minimize Carbon Footprints", desc: "Maintains zero food transit emissions, delivering high sustainability ratings." },
    { title: "Vocational Certifications", desc: "Equips students with direct AgTech skills verified under MicroBloom Enterprises." },
    { title: "Stamina and Study Performance", desc: "Clean food profiles boost nutritional stamina and daily focus." }
  ];

  const sdgs = [
    { num: "02", name: "Zero Hunger", desc: "Accelerating local superfood security frameworks." },
    { num: "03", name: "Good Health & Well-being", desc: "Integrating concentrated nutrients inside diets." },
    { num: "12", name: "Responsible Consumption", desc: "Employing sustainable growing substrates." },
    { num: "13", name: "Climate Action", desc: "Replacing long agricultural transit corridors." }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-sm font-semibold text-mint uppercase tracking-widest">INSTITUTIONAL VALUE</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-2">
                Elevating Academic & Sustainability Standards
              </h2>
              <div className="h-1.5 w-16 bg-mint mt-4 rounded-full" />
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              CMNI provides immediate nutritional advantages to student bodies, while adding long-term academic credentials, green initiatives status, and biotechnology program support to the university.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {impacts.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
                  <div className="flex items-center space-x-2 text-forest font-bold text-sm">
                    <CheckCircle className="h-4 w-4 text-mint shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-forest text-white space-y-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-forest-dark to-forest-light opacity-95" />
            
            <div className="relative z-10 space-y-6">
              <div>
                <span className="text-xs font-semibold text-mint uppercase tracking-widest block mb-1">NATIONAL PATHWAYS</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Empowering National Goals & UN SDGs
                </h3>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                CMNI is built from the ground up to support modern education directives, vocational pathways, and sustainable development parameters.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full border border-white/10">NEP 2020 Vocational Fit</span>
                <span className="px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full border border-white/10">Startup India Aligned</span>
                <span className="px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full border border-white/10">Skill India Pathways</span>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                {sdgs.map((sdg, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-xs font-bold text-mint">
                      SDG {sdg.num} — {sdg.name}
                    </div>
                    <p className="text-[11px] text-slate-300 leading-tight">
                      {sdg.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
