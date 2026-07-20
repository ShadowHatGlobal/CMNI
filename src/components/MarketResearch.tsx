"use client";

import React from "react";
import { Search, LineChart, Globe } from "lucide-react";

export default function MarketResearch() {
  const cards = [
    {
      icon: LineChart,
      title: "Rising Wellness Demands",
      subtitle: "Expanding Indian Wellness Outlook",
      desc: "With shifting demographics prioritizing pure, traceable nourishment profiles, schools and universities are updating culinary environments to match modern clean dietary expectations."
    },
    {
      icon: Search,
      title: "Active Institutional Pilot",
      subtitle: "Manipur University Focus Parameters",
      desc: "Our pilot studies actively assess student nutritional fatigue reductions, focus retention benefits, and overall recovery metrics after adding regular microgreen structures into diets."
    },
    {
      icon: Globe,
      title: "Carbon-Neutral Frameworks",
      subtitle: "Eliminating Food Transport Miles",
      desc: "Cultivating botanical superfoods steps away from where they are served avoids long-haul cold transport lines, generating a localized sustainable circular model."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-mint uppercase tracking-widest">MARKET & SUSTAINABILITY RESEARCH</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-2">
            Translating Scientific Standards into Scalable Impacts
          </h2>
          <div className="h-1.5 w-16 bg-mint mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3 bg-mint/10 text-mint rounded-2xl w-fit">
                  <card.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-forest">{card.title}</h3>
                  <span className="text-xs font-semibold text-slate-400 block mt-0.5">{card.subtitle}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pt-2">
                  {card.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>PILOT PROTOCOL 2026</span>
                <span className="text-mint">CMNI_SCI_0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
