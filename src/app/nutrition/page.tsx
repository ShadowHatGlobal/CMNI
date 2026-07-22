"use client";

import React, { useState } from "react";
import { Search, Sparkles, Leaf, ArrowLeft, LayoutGrid, Table } from "lucide-react";
import Link from "next/link";

interface Crop {
  name: string;
  nutrients: string[];
  focus: string;
  description: string;
  intensity: string;
  microLevel: string;
  matureLevel: string;
}

export default function NutritionPage() {
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");

  // Consolidated Master Dataset containing all old & new properties
  const crops: Crop[] = [
    { 
      name: "Radish Purple", 
      nutrients: ["Vitamin C", "Vitamin B6", "Anthocyanins", "Iron"], 
      focus: "Anthocyanins & Vitamin C", 
      description: "Vibrant purple stems containing rich antioxidants that protect cells from metabolic damage.", 
      intensity: "High",
      microLevel: "120.4 mg / 100g",
      matureLevel: "8.2 mg / 100g"
    },
    { 
      name: "Beet Greens", 
      nutrients: ["Vitamin K", "Vitamin A", "Lutein", "Potassium"], 
      focus: "Lutein & Potassium", 
      description: "Earthly, nutrient-dense seedlings packed with carotenoids for biological retinal protection.", 
      intensity: "Excellent",
      microLevel: "260.0 mg / 100g",
      matureLevel: "15.0 mg / 100g"
    },
    { 
      name: "Radish Pink", 
      nutrients: ["Vitamin C", "Folate", "Fiber", "Zinc"], 
      focus: "Folate & Dietary Fiber", 
      description: "Crisp pink shoots that provide clean dietary prebiotic fibers and skin cellular support.", 
      intensity: "High",
      microLevel: "95.0 mcg / 100g",
      matureLevel: "12.0 mcg / 100g"
    },
    { 
      name: "Radish White", 
      nutrients: ["Isothiocyanates", "Vitamin C", "Calcium"], 
      focus: "Isothiocyanates & Calcium", 
      description: "Spicy white variety packed with sulfur compounds to support lung and airway recovery.", 
      intensity: "High",
      microLevel: "88.0 mg / 100g",
      matureLevel: "11.4 mg / 100g"
    },
    { 
      name: "Sunflower", 
      nutrients: ["Protein (up to 30%)", "Vitamin E", "Zinc", "Selenium"], 
      focus: "Vitamin E & Plant Protein", 
      description: "Robust, nutty seedlings that offer highly bio-available plant proteins and essential lipids.", 
      intensity: "Outstanding",
      microLevel: "30x density multiplier",
      matureLevel: "Baseline reference"
    },
    { 
      name: "Pea Shoots", 
      nutrients: ["Vitamin C", "Iron", "Folate", "Beta-carotene"], 
      focus: "Non-Heme Iron & Folate", 
      description: "Crisp, sweet shoots providing highly absorbable non-heme iron to combat fatigue.", 
      intensity: "Excellent",
      microLevel: "40x density multiplier",
      matureLevel: "Baseline reference"
    },
    { 
      name: "Red Cabbage", 
      nutrients: ["Vitamin C (40x regular)", "Vitamin K", "Glucosinolates"], 
      focus: "Vitamin C & Vitamin K", 
      description: "A supreme superfood crop demonstrating phenomenal cellular repair capabilities.", 
      intensity: "Outstanding",
      microLevel: "147.0 mg / 100g",
      matureLevel: "2.4 mg / 100g"
    },
    { 
      name: "Broccoli", 
      nutrients: ["Sulforaphane", "Vitamin C", "Indole-3-carbinol"], 
      focus: "Sulforaphane & Active Antioxidants", 
      description: "The gold standard in preventative health research, harboring massive anti-inflammatory compounds.", 
      intensity: "Outstanding",
      microLevel: "50x concentration",
      matureLevel: "Baseline reference"
    },
    { 
      name: "Pak Choy", 
      nutrients: ["Vitamin A", "Vitamin C", "Calcium", "Beta-carotene"], 
      focus: "Calcium & Vitamin A", 
      description: "Mild, mineral-rich Asian brassica that strengthens cellular walls and bone matrices.", 
      intensity: "High",
      microLevel: "102.0 mg / 100g",
      matureLevel: "14.5 mg / 100g"
    },
    { 
      name: "Amaranth Red", 
      nutrients: ["Squalene", "Iron", "Calcium", "Protein", "Vitamin E"], 
      focus: "Squalene & Vitamin E", 
      description: "Spectacular magenta leaves rich in squalene to boost oxygenation and natural collagen synthesis.", 
      intensity: "Outstanding",
      microLevel: "40x density multiplier",
      matureLevel: "Baseline reference"
    },
    { 
      name: "Mustard Green", 
      nutrients: ["Sinigrin", "Vitamin K", "Chlorophyll", "Iron"], 
      focus: "Sinigrin & Vitamin K", 
      description: "Spicy shoots displaying high sinigrin concentrations, driving liver enzymatic clearance.", 
      intensity: "High",
      microLevel: "210.0 mcg / 100g",
      matureLevel: "28.0 mcg / 100g"
    },
    { 
      name: "Green Kale", 
      nutrients: ["Lutein", "Zeaxanthin", "Vitamin K", "Vitamin C"], 
      focus: "Lutein & Zeaxanthin", 
      description: "Lush green leaves carrying outstanding mineral densities to support cardiovascular defense.", 
      intensity: "Excellent",
      microLevel: "180.5 mg / 100g",
      matureLevel: "22.0 mg / 100g"
    },
    { 
      name: "Alfa Alfa", 
      nutrients: ["Phytoestrogens", "Calcium", "Magnesium", "Vitamin K"], 
      focus: "Phytoestrogens & Calcium", 
      description: "Delicate shoots rich in natural mineral compounds that regulate hormonal parameters.", 
      intensity: "Excellent",
      microLevel: "15x concentration",
      matureLevel: "Baseline reference"
    },
    { 
      name: "Spinach", 
      nutrients: ["Iron", "Folic Acid", "Magnesium", "Coenzyme Q10"], 
      focus: "Bio-available Iron & Magnesium", 
      description: "Classic green profile containing essential trace minerals to optimize cell mitochondria.", 
      intensity: "High",
      microLevel: "114.0 mg / 100g",
      matureLevel: "18.0 mg / 100g"
    },
    { 
      name: "Red Vein Sorrel", 
      nutrients: ["Oxalic acid (mild)", "Vitamin A", "Vitamin C", "Potassium"], 
      focus: "Potassium & Vitamin C", 
      description: "Beautiful red-veined leaves carrying a sharp, citrusy flavor that activates stomach digestive juices.", 
      intensity: "High",
      microLevel: "142.0 mg / 100g",
      matureLevel: "16.5 mg / 100g"
    },
    { 
      name: "Onion", 
      nutrients: ["Quercetin", "Chromium", "Vitamin C", "Sulfur"], 
      focus: "Quercetin & Chromium", 
      description: "Savory shoots displaying high levels of quercetin, shielding vessels from oxidation.", 
      intensity: "High",
      microLevel: "25x density multiplier",
      matureLevel: "Baseline reference"
    },
    { 
      name: "Turnip Red", 
      nutrients: ["Vitamin K", "Vitamin C", "Folic Acid", "Anthocyanins"], 
      focus: "Folic Acid & Calcium", 
      description: "Earthly, clean shoots with an excellent trace-element matrix to assist overall bone health.", 
      intensity: "High",
      microLevel: "92.0 mcg / 100g",
      matureLevel: "11.2 mcg / 100g"
    },
    { 
      name: "Flax", 
      nutrients: ["Omega-3 Alpha-Linolenic Acid", "Lignans", "Fiber"], 
      focus: "Omega-3 ALA & Lignans", 
      description: "Gentle leaves derived from omega-3 rich seeds to reduce arterial inflammation metrics.", 
      intensity: "Excellent",
      microLevel: "35x density multiplier",
      matureLevel: "Baseline reference"
    },
    { 
      name: "Chia", 
      nutrients: ["Omega-3", "Calcium", "Phosphorus", "Antioxidants"], 
      focus: "Phosphorus & Calcium", 
      description: "High-protein seedlings promoting excellent neural communication and structural joint health.", 
      intensity: "Excellent",
      microLevel: "38x density multiplier",
      matureLevel: "Baseline reference"
    },
    { 
      name: "Kohl Rabi Purple", 
      nutrients: ["Anthocyanins", "Vitamin C", "Potassium", "Fiber"], 
      focus: "Anthocyanins & Potassium", 
      description: "Uniquely sweet purple seedlings that support cell hydration and fluid balance.", 
      intensity: "High",
      microLevel: "136.0 mg / 100g",
      matureLevel: "15.2 mg / 100g"
    }
  ];

  const filteredCrops = crops.filter(crop =>
    crop.name.toLowerCase().includes(search.toLowerCase()) ||
    crop.focus.toLowerCase().includes(search.toLowerCase()) ||
    crop.nutrients.some(n => n.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation back */}
        <Link href="/" className="inline-flex items-center space-x-2 text-forest hover:text-mint transition-colors mb-8 font-semibold text-sm">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-mint uppercase tracking-widest block mb-2">Scientific Index</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-forest tracking-tight">
            Nutrition Comparison Index
          </h1>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Analytical breakdown of the 20 core crops integrated into the CMNI system. Toggle views to examine complete botanical profiles or key nutrient density multipliers.
          </p>
        </div>

        {/* Live Search & View Toggle Container */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center max-w-4xl mx-auto mb-12">
          
          {/* Search bar */}
          <div className="w-full md:max-w-md relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
            <input 
              type="text"
              placeholder="Search crop, nutrient (e.g. Iron), or focus..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-mint bg-white text-sm shadow-sm"
            />
          </div>

          {/* Tab/Toggle Switch */}
          <div className="flex bg-white border border-slate-200 p-1.5 rounded-2xl shadow-sm">
            <button
              onClick={() => setViewMode("table")}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                viewMode === "table" 
                  ? "bg-forest text-white shadow" 
                  : "text-slate-500 hover:text-forest"
              }`}
            >
              <Table className="h-4 w-4" />
              <span>Comparison Table</span>
            </button>
            <button
              onClick={() => setViewMode("cards")}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                viewMode === "cards" 
                  ? "bg-forest text-white shadow" 
                  : "text-slate-500 hover:text-forest"
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
              <span>Detailed Profiles</span>
            </button>
          </div>

        </div>

        {/* Dynamic View Rendering */}
        {viewMode === "table" ? (
          
          /* 1. New Nutritional Table Card */
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="text-center mb-8">
              <h2 className="text-lg sm:text-xl font-extrabold text-forest tracking-tight flex items-center justify-center space-x-2">
                <Sparkles className="h-5 w-5 text-mint" />
                <span>Nutritional Comparison Index: Microgreens vs. Mature Vegetables</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="py-5 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-1/4">
                      Crop Variety
                    </th>
                    <th className="py-5 text-[10px] font-bold text-slate-400 uppercase tracking-wider w-1/3">
                      Key Nutrient Focus
                    </th>
                    <th className="py-5 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center w-1/5">
                      Microgreen Level
                    </th>
                    <th className="py-5 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center w-1/5">
                      Mature Vegetable Level
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredCrops.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-5 font-bold text-forest text-sm flex items-center space-x-2">
                        <Leaf className="h-4 w-4 text-mint/80 shrink-0" />
                        <span>{row.name}</span>
                      </td>
                      <td className="py-5 text-slate-600 text-sm font-medium">
                        {row.focus}
                      </td>
                      <td className="py-5 text-center font-bold text-mint text-sm">
                        {row.microLevel}
                      </td>
                      <td className="py-5 text-center text-slate-500 text-sm font-medium">
                        {row.matureLevel}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pt-8 border-t border-slate-100 mt-8 text-center">
              <p className="text-[10px] sm:text-xs text-slate-400">
                *Source: Comparative analysis studies based on United States Department of Agriculture (USDA) databases.
              </p>
            </div>
          </div>

        ) : (
          
          /* 2. Old Detailed Card Grid */
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

        )}

        {/* No results message */}
        {filteredCrops.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm">
            No crops found matching "{search}".
          </div>
        )}

      </div>
    </div>
  );
            }
