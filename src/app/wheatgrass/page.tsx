"use client";

import React, { useState } from "react";
import { ArrowLeft, Award, Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";

export default function WheatgrassPage() {
  const [useClinical, setUseClinical] = useState(false);

  const products = [
    { name: "Pure Powder", form: "Dehydrated & Stone-Ground", desc: "Crafted through gentle low-heat dehydration to preserve sensitive active proteins and chlorophyll chains.", use: "Long shelf-life smoothie additive" },
    { name: "Cold-Pressed Juice", form: "Liquid Elixir", desc: "Harvested fresh and juiced immediately to capture raw enzymes and active cellular energy.", use: "Optimal daily morning wellness shot" },
    { name: "Fresh Crop Tray", form: "Living Organism Tray", desc: "Live trays delivered directly to your kitchen or campus mess, allowing fresh cuts seconds before juicing.", use: "Ultimate juice extraction quality" },
    { name: "Premium Fodder Feed", form: "High-yield Agricultural Feed", desc: "Specially cultivated fast-sprouted fodder arrays designed to provide livestock with nutrient density.", use: "Local dairy & eco-farms" }
  ];

  const benefits = [
    {
      layman: "Pushes energy sky-high, acting like a natural health booster.",
      clinical: "Exhibits exceptional mitochondrial support, increasing blood hemoglobin metrics to optimize system ATP bio-energetics."
    },
    {
      layman: "Helps wash away toxins and cleanses internal organs.",
      clinical: "Supports liver enzyme pathways, binding to metabolic toxins and assisting renal purification functions."
    },
    {
      layman: "Keeps blood sugar levels steady and stops insulin spikes.",
      clinical: "Inhibits alpha-glucosidase, stabilizing glucose absorption levels to lower endocrine pancreatic fatigue."
    },
    {
      layman: "Soothes joints, calms gut irritation, and stops soreness.",
      clinical: "Suppresses COX-2 enzymes and reduces systemic inflammatory biomarkers like C-Reactive Protein (CRP)."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center space-x-2 text-forest hover:text-mint transition-colors mb-8 font-semibold text-sm">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-mint uppercase tracking-widest block mb-2">Superfood Spotlight</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-forest tracking-tight">
            Wheatgrass Products & Science
          </h1>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Integrating premium living wheatgrass models into academic communities. Discover product forms and clinical nutritional evidence.
          </p>
        </div>

        {/* Interactive Layman vs Clinical Benefits Toggle */}
        <div className="max-w-3xl mx-auto bg-white border border-slate-100 rounded-3xl p-8 shadow-sm mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 border-b border-slate-100 pb-4 gap-4">
            <div>
              <h3 className="font-bold text-xl text-forest">The Biology of Wheatgrass</h3>
              <p className="text-xs text-slate-400 mt-0.5">Toggle vocabulary mode to view terms in everyday words or clinical nutrition science.</p>
            </div>
            
            {/* Toggle Button */}
            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setUseClinical(false)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${!useClinical ? "bg-forest text-white shadow-sm" : "text-slate-500"}`}
              >
                Everyday Words
              </button>
              <button
                onClick={() => setUseClinical(true)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${useClinical ? "bg-forest text-white shadow-sm" : "text-slate-500"}`}
              >
                Clinical Nutrition
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-mint" />
                <div className="space-y-2 pl-2">
                  <div className="flex items-center space-x-1.5 text-xs text-mint font-bold uppercase tracking-wider">
                    {useClinical ? <BookOpen className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
                    <span>{useClinical ? "Clinical Evidence" : "Layman Terms"}</span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    {useClinical ? benefit.clinical : benefit.layman}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <h3 className="text-2xl font-bold text-forest text-center mb-8">Our Product Matrix</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-3">
                <div className="text-xs font-bold text-mint uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-lg w-fit">
                  {prod.form}
                </div>
                <h4 className="font-extrabold text-lg text-forest">{prod.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {prod.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-4 text-[11px] font-mono text-slate-400">
                Primary use: <span className="text-forest font-bold">{prod.use}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
