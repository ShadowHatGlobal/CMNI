"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProblemSolution from "@/components/ProblemSolution";
import WhyMicrogreens from "@/components/WhyMicrogreens";
import Ecosystem from "@/components/Ecosystem";
import Innovation from "@/components/Innovation";
import MarketResearch from "@/components/MarketResearch";
import ImpactSDG from "@/components/ImpactSDG";
import FounderRoadmap from "@/components/FounderRoadmap";
import ContactFooter from "@/components/ContactFooter";
import PWAInstall from "@/components/PWAInstall";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((reg) => {
          console.log("Service Worker registered on scope:", reg.scope);
        })
        .catch((err) => {
          console.error("Service Worker registration failed:", err);
        });
    }
  }, []);

  return (
    <div className="relative min-h-screen gradient-bg selection:bg-mint selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProblemSolution />
        <WhyMicrogreens />
        <Ecosystem />
        <Innovation />
        <MarketResearch />
        <ImpactSDG />
        <FounderRoadmap />
        <ContactFooter />
      </main>
      <PWAInstall />
    </div>
  );
}
