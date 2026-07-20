"use client";

import React from "react";
import { HeartPulse, Droplets, Leaf } from "lucide-react";

export default function WhyMicrogreens() {
  const qualities = [
    {
      icon: HeartPulse,
      title: "Highly Concentrated Bio-Availability",
      desc: "Delivering dense levels of crucial compounds, offering elevated daily stamina and mental agility parameters."
    },
    {
      icon: Droplets,
      title: "95% Environmental Water Savings",
      desc: "Closed-loop micro-watering frameworks limit water requirements to a fraction of standard baseline farming."
    },
    {
      icon: Leaf,
      title: "7 to 14 Day Rapid Harvests",
      desc: "Consistent cultivation turns ensures reliable harvests in minimal space, maximizing institutional supply security."
    }
  ];

  return (
    <section id="microgreens" className="py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-mint uppercase tracking-widest">THE SCIENCE OF SUPERFOODS</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-2">
            Why Microgreens? The Future of Concentrated Human Health
          </h2>
          <div className="h-1.5 w-16 bg-mint mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 mt-5 leading-relaxed text-sm sm:text-base">
            Microgreens represent the dynamic seedling phase of edible vegetables. Research confirms they store multi-fold nutrient volumes compared to older plants.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {qualities.map((item, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-slate-50/50 transition-all text-center space-y-4"
            >
              <div className="mx-auto p-4 bg-emerald-50 text-mint rounded-2xl w-fit">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-forest">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="border border-slate-100 rounded-3xl bg-slate-50 p-6 sm:p-10">
          <h3 className="text-lg sm:text-xl font-bold text-forest mb-6 text-center">
            Nutritional Comparison Index: Microgreens vs. Mature Vegetables
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Crop Variety</th>
                  <th className="py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Key Nutrient Focus</th>
                  <th className="py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Microgreen Level</th>
                  <th className="py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Mature Vegetable Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="text-sm">
                  <td className="py-4 font-semibold text-forest">Red Cabbage</td>
                  <td className="py-4 text-slate-600">Vitamin C & Vitamin K</td>
                  <td className="py-4 text-center font-bold text-mint">147.0 mg / 100g</td>
                  <td className="py-4 text-center text-slate-500">2.4 mg / 100g</td>
                </tr>
                <tr className="text-sm">
                  <td className="py-4 font-semibold text-forest">Cilantro</td>
                  <td className="py-4 text-slate-600">Beta-carotene (Vitamin A pathway)</td>
                  <td className="py-4 text-center font-bold text-mint">12.0 mg / 100g</td>
                  <td className="py-4 text-center text-slate-500">0.4 mg / 100g</td>
                </tr>
                <tr className="text-sm">
                  <td className="py-4 font-semibold text-forest">Garnet Amaranth</td>
                  <td className="py-4 text-slate-600">Phylloquinone & Lutein</td>
                  <td className="py-4 text-center font-bold text-mint">40x density multiplier</td>
                  <td className="py-4 text-center text-slate-500">Baseline reference</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-400 text-center mt-6">
            *Source: Comparative analysis studies based on United States Department of Agriculture (USDA) databases.
          </p>
        </div>

      </div>
    </section>
  );
}
