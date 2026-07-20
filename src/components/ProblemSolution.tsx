"use client";

import React from "react";
import { AlertCircle, CheckCircle2, ShieldAlert, Truck, Users, Zap } from "lucide-react";

export default function ProblemSolution() {
  const problems = [
    {
      icon: ShieldAlert,
      title: "Hidden Hunger & Micro-Nutrient Gaps",
      desc: "Traditional campus food structures prioritize caloric efficiency over dense micronutrients, affecting student biological stamina and focus."
    },
    {
      icon: Truck,
      title: "High Environmental Transit Costs",
      desc: "Transporting organic fresh greens across state lines degrades cellular vitamin integrity and triggers high cold-chain emissions."
    },
    {
      icon: Users,
      title: "Academic-Industry Vocational Deficit",
      desc: "Curriculums rarely deliver hands-on modern biotechnology training inside active campus boundaries."
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: "Hyper-Local Cultivation Nodes",
      desc: "Modular vertical systems stationed steps from cafeterias. Harvested fresh directly on-site, offering optimal nutrient containment."
    },
    {
      icon: CheckCircle2,
      title: "40x Nutrient Multipliers",
      desc: "Delivering dense botanical compounds to fortify natural focus, physiological immune health, and active campus longevity."
    },
    {
      icon: CheckCircle2,
      title: "Practical AgTech Incubation",
      desc: "Partnering with MicroBloom Enterprises to train students in IoT vertical agricultural management, seeding future founders."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-slate-50 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-mint uppercase tracking-widest">CHALLENGE & STRATEGY</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-forest mt-2">
            Bridging the Gap Between Health, Earth, and Science
          </h2>
          <div className="h-1.5 w-16 bg-mint mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 pb-2 border-b border-rose-100">
              <AlertCircle className="h-6 w-6 text-rose-500" />
              <h3 className="text-2xl font-bold text-slate-800">The Problem</h3>
            </div>
            
            <div className="space-y-4">
              {problems.map((prob, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-white border border-rose-100 hover:border-rose-200 transition-all shadow-sm flex items-start space-x-4"
                >
                  <div className="p-2.5 bg-rose-50 rounded-xl text-rose-500 mt-1 shrink-0">
                    <prob.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-800 mb-1">{prob.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{prob.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3 pb-2 border-b border-emerald-100">
              <CheckCircle2 className="h-6 w-6 text-mint" />
              <h3 className="text-2xl font-bold text-forest">The Solution (CMNI)</h3>
            </div>

            <div className="space-y-4">
              {solutions.map((sol, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-white border border-emerald-100 hover:border-emerald-200 transition-all shadow-sm flex items-start space-x-4"
                >
                  <div className="p-2.5 bg-emerald-50 rounded-xl text-mint mt-1 shrink-0">
                    <sol.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-forest mb-1">{sol.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
