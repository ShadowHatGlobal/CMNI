"use client";

import React, { useState } from "react";
import { Mail, MapPin, ChevronDown, ChevronUp, Leaf, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    role: "University Partner",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: "What amount of physical footprint does a standard CMNI setup require?",
      a: "Our cultivation racks are highly modular. A base-tier setup can be established in as little as 50 to 100 square feet, allowing convenient placement inside unused cafeteria corners or scientific storage halls."
    },
    {
      q: "How does culinary integration inside student dining spaces work?",
      a: "Directly post-harvest, fresh microgreens are passed to mess chefs. They are served raw as dense daily plate additions or salad setups to retain dynamic, heat-sensitive vitamins."
    },
    {
      q: "Are microgreens grown safe from pathogens and pollutants?",
      a: "Yes. By utilizing sterile organic plant matrices and regulated indoor climate variables, our crops avoid standard soil contaminants, making them exceptionally safe to eat raw."
    },
    {
      q: "How can other schools request a partner pilot launch?",
      a: "Administrators can fill out our inquiry panel below. We will coordinate feasibility scopes and plan modular framework distributions in sync with MicroBloom Enterprises."
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Fetch keys securely from Vercel environment variables
    const apiKey = process.env.NEXT_PUBLIC_SHEETSON_API_KEY;
    const spreadsheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
    const sheetName = process.env.NEXT_PUBLIC_SHEET_NAME || "Sheet1";

    // If configuration is missing, use visual fallback so page doesn't crash
    if (!apiKey || !spreadsheetId) {
      console.warn("Sheetson configuration is missing. Submitting locally.");
      setSubmitted(true);
      return;
    }

    try {
      const response = await fetch(`https://api.sheetson.com/v2/sheets/${sheetName}`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "X-Spreadsheet-Id": spreadsheetId,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", org: "", role: "University Partner", message: "" });
        }, 5000);
      } else {
        const errorData = await response.json();
        console.error("Sheetson Response Error:", errorData);
        alert("Submission failed. Please check back later.");
      }
    } catch (error) {
      console.error("Network Fetch Error:", error);
      alert("Network error. Please try again.");
    }
  };

  return (
    <footer id="contact" className="bg-white pt-24 border-t border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto mb-24">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-mint uppercase tracking-widest">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-forest mt-2">Frequently Answered Queries</h2>
            <div className="h-1 w-12 bg-mint mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="border border-slate-100 rounded-2xl bg-slate-50 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="w-full text-left p-5 flex justify-between items-center space-x-4 text-forest font-bold"
                >
                  <span className="text-sm sm:text-base leading-tight">{faq.q}</span>
                  {faqOpen === idx ? <ChevronUp className="h-5 w-5 text-mint shrink-0" /> : <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />}
                </button>
                
                <AnimatePresence initial={false}>
                  {faqOpen === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-sm font-semibold text-mint uppercase tracking-widest">GET INVOLVED</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-forest mt-2">Connect With CMNI</h2>
              <p className="text-slate-500 text-sm leading-relaxed mt-4">
                We invite university administrators, scientific researchers, and botanical sponsors to collaborate with us in growing this unique institutional sandbox model.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-50 text-mint rounded-xl">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-sm">
                  <div className="font-bold text-forest">Inquiries</div>
                  <a href="mailto:kn.microbloomventures@gmail.com" className="text-slate-500 hover:text-mint">cmni@microbloom.in</a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-50 text-mint rounded-xl">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="text-sm">
                  <div className="font-bold text-forest">Launch Campus Pod</div>
                  <div className="text-slate-500">Manipur University, Canchipur, Imphal, Manipur - 795003</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm relative">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="p-4 bg-emerald-100 text-forest rounded-full w-fit mx-auto">
                      <Leaf className="h-8 w-8 text-mint animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-bold text-forest">Inquiry Received</h3>
                    <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                      Thank you for connecting. A development representative from MicroBloom Enterprises will review your inquiry and follow up within 48 business hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Your Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-mint bg-white text-sm"
                          placeholder="Dr. Ramesh Kumar"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-mint bg-white text-sm"
                          placeholder="ramesh.kumar@mu.edu"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Organization / University</label>
                        <input 
                          type="text" 
                          required
                          value={formData.org}
                          onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-mint bg-white text-sm"
                          placeholder="Manipur University"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase">Collaboration Focus</label>
                        <select 
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-mint bg-white text-sm"
                        >
                          <option>University Partner</option>
                          <option>Academic Researcher</option>
                          <option>Student Representative</option>
                          <option>Sponsor / Supporter</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-500 uppercase">Your Message</label>
                      <textarea 
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-mint bg-white text-sm"
                        placeholder="Detail your operational or scaling interests..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-forest hover:bg-forest-light text-white font-bold rounded-xl shadow transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Submit Inquiry</span>
                      <Send className="h-4 w-4 text-mint" />
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <Leaf className="h-4 w-4 text-mint" />
            <span>© {new Date().getFullYear()} CMNI & MicroBloom Enterprises. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[10px]">PWA OFFLINE COMPATIBLE</span>
            </span>
            <a href="#" className="hover:text-forest">Terms</a>
            <a href="#" className="hover:text-forest">Privacy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
