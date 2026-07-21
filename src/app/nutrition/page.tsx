"use client";

import React, { useState } from "react";
import { Search, Sparkles, Leaf, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Crop {
  name: string;
  nutrients: string[];
  focus: string;
  description: string;
  intensity: string;
}

export default function NutritionPage() {
  const [search, setSearch] = useState("");

  const crops: Crop[] = [
    { name: "Radish Purple", nutrients: ["Vitamin C", "Vitamin B6", "Anthocyanins", "Iron"], focus: "Liver detox & Cardiovascular support", description: "Vibrant purple stems containing rich antioxidants that protect cells from metabolic damage.", intensity: "High" },
    { name: "Beet Greens", nutrients: ["Vitamin K", "Vitamin A", "Lutein", "Potassium"], focus: "Eye health & Blood pressure management", description: "Earthly, nutrient-dense seedlings packed with carotenoids for biological retinal protection.", intensity: "Excellent" },
    { name: "Radish Pink", nutrients: ["Vitamin C", "Folate", "Fiber", "Zinc"], focus: "Digestive recovery & Immune response", description: "Crisp pink shoots that provide clean dietary prebiotic fibers and skin cellular support.", intensity: "High" },
    { name: "Radish White", nutrients: ["Isothiocyanates", "Vitamin C", "Calcium"], focus: "Respiratory clear-pathway & Anti-inflammation", description: "Spicy white variety packed with sulfur compounds to support lung and airway recovery.", intensity: "High" },
    { name: "Sunflower", nutrients: ["Protein (up to 30%)", "Vitamin E", "Zinc", "Selenium"], focus: "Muscle tissue recovery & Cellular shield", description: "Robust, nutty seedlings that offer highly bio-available plant proteins and essential lipids.", intensity: "Outstanding" },
    { name: "Pea Shoots", nutrients: ["Vitamin C", "Iron", "Folate", "Beta-carotene"], focus: "Oxygenation, Energy stamina & Bone integrity", description: "Crisp, sweet shoots providing highly absorbable non-heme iron to combat fatigue.", intensity: "Excellent" },
    { name: "Red Cabbage", nutrients: ["Vitamin C (40x regular)", "Vitamin K", "Glucosinolates"], focus: "Immune support, Joint recovery & Colon health", description: "A supreme superfood crop demonstrating phenomenal cellular repair capabilities.", intensity: "Outstanding" },
    { name: "Broccoli", nutrients: ["Sulforaphane", "Vitamin C", "Indole-3-carbinol"], focus: "Metabolic detoxification & Anti-carcinogenic pathway", description: "The gold standard in preventative health research, harboring massive anti-inflammatory compounds.", intensity: "Outstanding" },
    { name: "Pak Choy", nutrients: ["Vitamin A", "Vitamin C", "Calcium", "Beta-carotene"], focus: "Bone bone density & Cellular protection", description: "Mild, mineral-rich Asian brassica that strengthens cellular walls and bone matrices.", intensity: "High" },
    { name: "Amaranth Red", nutrients: ["Squalene", "Iron", "Calcium", "Protein", "Vitamin E"], focus: "Oxygen synthesis & Skin elasticity", description: "Spectacular magenta leaves rich in squalene to boost oxygenation and natural collagen synthesis.", intensity: "Outstanding" },
    { name: "Mustard Green", nutrients: ["Sinigrin", "Vitamin K", "Chlorophyll", "Iron"], focus: "Liver support, Lung cleanse & High metabolism", description: "Spicy shoots displaying high sinigrin concentrations, driving liver enzymatic clearance.", intensity: "High" },
    { name: "Green Kale", nutrients: ["Lutein", "Zeaxanthin", "Vitamin K", "Vitamin C"], focus: "Eye care, DNA protection & Clean circulation", description: "Lush green leaves carrying outstanding mineral densities to support cardiovascular defense.", intensity: "Excellent" },
    { name: "Alfa Alfa", nutrients: ["Phytoestrogens", "Calcium", "Magnesium", "Vitamin K"], focus: "Hormonal balance & Skeletal density", description: "Delicate shoots rich in natural mineral compounds that regulate hormonal parameters.", intensity: "Excellent" },
    { name: "Spinach", nutrients: ["Iron", "Folic Acid", "Magnesium", "Coenzyme Q10"], focus: "Hemoglobin efficiency & Vascular recovery", description: "Classic green profile containing essential trace minerals to optimize cell mitochondria.", intensity: "High" },
    { name: "Red Vein Sorrel", nutrients: ["Oxalic acid (mild)", "Vitamin A", "Vitamin C", "Potassium"], focus: "Digestion simulation & Kidney purification", description: "Beautiful red-veined leaves carrying a sharp, citrusy flavor that activates stomach digestive juices.", intensity: "High" },
    { name: "Onion", nutrients: ["Quercetin", "Chromium", "Vitamin C", "Sulfur"], focus: "Blood sugar stabilization & Cardiovascular defense", description: "Savory shoots displaying high levels of quercetin, shielding vessels from oxidation.", intensity: "High" },
    { name: "Turnip Red", nutrients: ["Vitamin K", "Vitamin C", "Folic Acid", "Anthocyanins"], focus: "Bone structural matrix & Immune resilience", description: "Earthly, clean shoots with an excellent trace-element matrix to assist overall bone health.", intensity: "High" },
    { name: "Flax", nutrients: ["Omega-3 Alpha-Linolenic Acid", "Lignans", "Fiber"], focus: "Brain cognitive protection & Lowered bad cholesterol", description: "Gentle leaves derived from omega-3 rich seeds to reduce arterial inflammation metrics.", intensity: "Excellent" },
    { name: "Chia", nutrients: ["Omega-3", "Calcium", "Phosphorus", "Antioxidants"], focus: "Joint cushion, Brain health & Satiety support", description: "High-protein seedlings promoting excellent neural communication and structural joint health.", intensity: "Excellent" },
    { name: "Kohl Rabi Purple", nutrients: ["Anthocyanins", "Vitamin C", "Potassium", "Fiber"], focus: "Vascular elasticity & Lymphatic support", description: "Uniquely sweet purple seedlings that support cell hydration and fluid balance.", intensity: "High" }
  ];

  const filteredCrops = crops.filter(crop =>
    crop.name.toLowerCase().includes(search.toLowerCase()) ||
    crop.focus.toLowerCase().includes(search.toLowerCase()) ||
    crop.nutrients.some(n => n.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center space-x-2 text-forest hover:text-mint transition-colors mb-8 font-semibold text-sm">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-mint uppercase tracking-widest block mb-2">Scientific Index</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-forest tracking-tight">
            Nutrition Comparison Index
          </h1>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Analytical breakdown of the 20 core crops integrated into the CMNI system. Browse botanical properties, mineral profiles, and physiological wellness focuses.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
          <input 
            type="text"
            placeholder="Search crop, nutrient (e.g. Iron), or health focus..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-mint bg-white text-sm shadow-sm"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCrops.map((crop, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:border-mint/30 hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-emerald-50 text-mint rounded-xl">
                      <Leaf className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold text-lg text-forest">{crop.name}</h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100/50 text-forest font-semibold uppercase">
                    {crop.intensity}
                  </span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {crop.description}
                </p>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">Primary Bio-Focus</span>
                  <p className="text-xs font-bold text-forest leading-snug">{crop.focus}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block mb-1.5">Dense Active Nutrients</span>
                <div className="flex flex-wrap gap-1">
                  {crop.nutrients.map((n, i) => (
                    <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-md font-medium">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCrops.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            No crops found matching your search. Try looking for "Sulforaphane", "Omega-3", or "Iron".
          </div>
        )}

      </div>
    </div>
  );
}
