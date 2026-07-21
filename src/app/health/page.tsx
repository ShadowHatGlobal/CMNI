"use client";

import React, { useState } from "react";
import { ArrowLeft, ShieldCheck, Heart, Info } from "lucide-react";
import Link from "next/link";

export default function HealthPage() {
  const [activeCategory, setActiveCategory] = useState("Diabetes");

  const categories = [
    {
      name: "Diabetes",
      mechanism: "Inhibits enzymes that cause rapid carbohydrate absorption. Plant fibers slow glucose entry into blood streams.",
      recommended: "Radish, Quinoa, Broccoli Microgreens (20g-30g daily)",
      details: "Microgreen varieties with high polyphenolic levels significantly lower glycemic load and support insulin sensitivity."
    },
    {
      name: "Bone Health & Arthritis",
      mechanism: "High levels of bio-available Vitamin K1 and Calcium help synthesize osteocalcin to reinforce joint matrices.",
      recommended: "Alfalfa, Pak Choy, Turnip Microgreens (25g daily)",
      details: "Helps block bone mineral reabsorption, supporting joint flexibility and reducing chronic inflammation markers."
    },
    {
      name: "Heart",
      mechanism: "Soluble dietary fibers bind bile acids, naturally lowering bad cholesterol (LDL) and triglycerides.",
      recommended: "Red Cabbage, Flax, Chia (20g daily)",
      details: "Contains compounds that strengthen blood vessels, supporting optimal arterial elasticity and clean blood flow."
    },
    {
      name: "Liver",
      mechanism: "Enzymes like Sinigrin stimulate Phase II detoxification in liver cells to clear out heavy toxins.",
      recommended: "Mustard, Broccoli, Amaranth (30g daily)",
      details: "Provides rich antioxidant support to shield delicate hepatocyte cell walls from metabolic waste oxidation."
    },
    {
      name: "Pregnancy & Postpartum",
      mechanism: "Delivers highly absorbable Folic Acid (Vitamin B9) to assist fetal neural development.",
      recommended: "Pea Shoots, Spinach, Flax (25g daily)",
      details: "A raw, plant-based source of iron and folate to prevent anemia and assist cellular recovery post-birth."
    },
    {
      name: "Weight Loss",
      mechanism: "High water content and compact dietary fibers increase satiety signals without adding calorie loads.",
      recommended: "Chia, Radish, Mustard Greens (30g daily)",
      details: "Promotes a balanced gut microbiome, optimizing thermogenic energy burning rates."
    },
    {
      name: "Child Brain Development",
      mechanism: "High concentrations of Omega-3 ALA fatty acids and Vitamin B complexes construct myelin neural sheaths.",
      recommended: "Chia, Sunflower, Flax (15g daily)",
      details: "Helps support focus, learning retention, and protects delicate childhood neural cells from environmental stress."
    }
  ];

  const activeData = categories.find(c => c.name === activeCategory) || categories[0];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center space-x-2 text-forest hover:text-mint transition-colors mb-8 font-semibold text-sm">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-mint uppercase tracking-widest block mb-2">Preventative Care</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-forest tracking-tight">
            Preventative Health & Lifestyle Medicine
          </h1>
          <div className="h-1.5 w-16 bg-mint mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 mt-5 text-sm sm:text-base leading-relaxed">
            Exploring how daily inclusion of dense organic microgreens assists in preventing and managing chronic wellness issues and lifestyle conditions.
          </p>
        </div>

        {/* Interactive Selector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sidebar categories */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-2 mb-2">Select Health Focus</span>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat.name)}
                className={`w-full text-left px-5 py-4 rounded-2xl border transition-all text-sm font-bold flex items-center justify-between ${
                  activeCategory === cat.name 
                    ? "bg-forest text-white border-forest shadow-md" 
                    : "bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>{cat.name}</span>
                <ShieldCheck className={`h-4 w-4 ${activeCategory === cat.name ? "text-mint" : "text-slate-300"}`} />
              </button>
            ))}
          </div>

          {/* Active Data Panel */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
              
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
                <div className="p-3 bg-emerald-50 text-mint rounded-2xl">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">Active Target Area</span>
                  <h3 className="text-2xl font-extrabold text-forest tracking-tight">{activeData.name}</h3>
                </div>
              </div>

              {/* Bio Mechanism */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1">
                  <ShieldCheck className="h-4 w-4 text-mint" />
                  <span>Biological Defense Mechanism</span>
                </span>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold">
                  {activeData.mechanism}
                </p>
              </div>

              {/* Extended Details */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed space-y-1">
                <div className="font-bold text-forest flex items-center space-x-1.5 mb-1">
                  <Info className="h-4 w-4 text-mint" />
                  <span>Clinical Perspective</span>
                </div>
                {activeData.details}
              </div>

              {/* Dosage */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Recommended Varieties</span>
                  <span className="text-sm font-bold text-forest leading-tight">{activeData.recommended}</span>
                </div>
                <div className="bg-mint/10 border border-mint/20 text-forest text-xs font-bold px-4 py-2.5 rounded-xl w-fit">
                  Integrable in Mess & Cafeterias
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
