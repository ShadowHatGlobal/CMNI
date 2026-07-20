"use client";

import React, { useState, useEffect } from "react";
import { ArrowDownToLine, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Installation user response: ${outcome}`);
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-50 max-w-sm"
        >
          <div className="bg-forest-dark border border-forest-light/40 rounded-2xl p-4 text-white shadow-2xl glass flex items-start space-x-4">
            <div className="p-2.5 bg-mint/10 text-mint rounded-xl shrink-0">
              <Sparkles className="h-5 w-5" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-sm leading-snug">Add CMNI to Home Screen</h4>
              <p className="text-[11px] text-slate-300 leading-normal mt-0.5">
                Install our PWA for simple offline accessibility and rapid metric tracking capabilities.
              </p>
              
              <div className="flex items-center space-x-3 mt-3">
                <button
                  onClick={handleInstallClick}
                  className="px-3 py-1.5 bg-mint hover:bg-mint-dark text-white text-xs font-bold rounded-lg shadow flex items-center space-x-1.5 transition-all"
                >
                  <ArrowDownToLine className="h-3.5 w-3.5" />
                  <span>Install App</span>
                </button>
                <button
                  onClick={() => setShowPrompt(false)}
                  className="text-xs text-slate-300 hover:text-white"
                >
                  Dismiss
                </button>
              </div>
            </div>

            <button 
              onClick={() => setShowPrompt(false)} 
              className="text-slate-300 hover:text-white shrink-0 p-0.5"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
