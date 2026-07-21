"use client";

import React from "react";
import { ArrowLeft, BookOpen, Quote, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

export default function RecipesPage() {
  const recipes = [
    {
      name: "Focus Booster Smoothie",
      type: "Beverage",
      time: "5 Mins",
      ingredients: ["Sunflower microgreens (15g)", "Spinach microgreens (10g)", "1 Banana", "Coconut water (250ml)"],
      steps: "Blend all ingredients on high speed for 45 seconds. Best consumed within 15 minutes of blending."
    },
    {
      name: "Raw Superfood Pesto Boost",
      type: "Dressing / Garnish",
      time: "10 Mins",
      ingredients: ["Radish purple (20g)", "Pea shoots (30g)", "Olive oil", "Garlic", "Walnuts"],
      steps: "Pulse microgreens, garlic, and walnuts in a food processor while drizzling olive oil. Serve over whole grain pasta."
    },
    {
      name: "Vibrant Campus Salad Topping",
      type: "Meal Booster",
      time: "2 Mins",
      ingredients: ["Red cabbage microgreens (15g)", "Broccoli microgreens (15g)"],
      steps: "Toss raw microgreens as a dense, living layer on top of standard rice, dal, or vegetable bowls."
    }
  ];

  const testimonials = [
    {
      text: "Adding fresh broccoli microgreens on top of our daily campus mess meals improved my mental clarity and reduced afternoon fatigue within two weeks.",
      author: "Student Researcher, Manipur University",
      badge: "Pilot Participant"
    },
    {
      text: "The low space and quick turnarounds of these cultivation shelves allow our botanical laboratories to track real-time yield growth metrics efficiently.",
      author: "Academic Coordinator, Botany Division",
      badge: "Science Liaison"
    },
    {
      text: "Under the guidance of MicroBloom Enterprises, setting up these automated green nodes gave our students hands-on AgTech and nutrition-management skills.",
      author: "Administrative Advisor",
      badge: "Institutional Board"
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
          <span className="text-xs font-bold text-mint uppercase tracking-widest block mb-2">Culinary & Community</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-forest tracking-tight">
            Microgreen Recipes & Testimonials
          </h1>
          <div className="h-1.5 w-16 bg-mint mx-auto mt-4 rounded-full" />
        </div>

        {/* Recipes Grid */}
        <h3 className="text-2xl font-bold text-forest mb-8 flex items-center space-x-2 justify-center">
          <BookOpen className="h-6 w-6 text-mint" />
          <span>Quick Campus Recipes</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {recipes.map((rec, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:border-mint/20 transition-all">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                  <span className="bg-slate-100 px-2 py-0.5 rounded-lg text-slate-600 font-semibold">{rec.type}</span>
                  <span className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{rec.time}</span>
                  </span>
                </div>
                
                <h4 className="font-extrabold text-lg text-forest leading-tight">{rec.name}</h4>
                
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Key Ingredients</span>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-0.5">
                    {rec.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Directions</span>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{rec.steps}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <h3 className="text-2xl font-bold text-forest mb-8 flex items-center space-x-2 justify-center">
          <Quote className="h-6 w-6 text-mint" />
          <span>Voices from the Pilot Program</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-forest rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div className="absolute -top-6 -right-6 text-white/5 pointer-events-none">
                <Quote className="h-32 w-32" />
              </div>
              
              <div className="space-y-4 relative z-10">
                <Quote className="h-6 w-6 text-mint" />
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium italic">
                  "{test.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 relative z-10 flex justify-between items-center">
                <div>
                  <div className="text-xs font-bold">{test.author}</div>
                  <div className="text-[10px] text-mint mt-0.5 font-medium">{test.badge}</div>
                </div>
                <Sparkles className="h-4 w-4 text-mint opacity-50" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
