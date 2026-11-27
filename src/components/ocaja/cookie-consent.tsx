"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been stored
    try {
      const consent = localStorage.getItem("ocaja_cookie_consent");
      if (!consent) {
        // Small delay so it smoothly appears after initial page load
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage fallback
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("ocaja_cookie_consent", "accepted");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  const handleReject = () => {
    try {
      localStorage.setItem("ocaja_cookie_consent", "rejected");
    } catch {
      // ignore
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          role="region"
          aria-label="Cookie consent banner"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 inset-x-0 z-50 mx-auto w-[92%] max-w-xl px-2 sm:bottom-6"
        >
          <div className="flex flex-col items-center justify-between gap-2.5 rounded-2xl border border-slate-200/90 bg-white/95 px-4 py-2 shadow-[0_12px_35px_-8px_rgba(2,26,64,0.18)] backdrop-blur-xl sm:flex-row sm:gap-4 sm:rounded-full sm:px-5 sm:py-2">
            {/* Left: Cookie Icon & Description */}
            <div className="flex items-center gap-2.5 text-left">
              {/* Cyan Cookie Badge */}
              <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#1fc8db]/15 text-[#00b4db]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#00b4db]"
                >
                  <circle cx="12" cy="12" r="9.5" fill="#2AE6FB" stroke="#0094b8" strokeWidth="1.4" />
                  <circle cx="8.5" cy="9.5" r="1.3" fill="#005d7a" />
                  <circle cx="15.5" cy="9" r="1.1" fill="#005d7a" />
                  <circle cx="10" cy="15" r="1.4" fill="#005d7a" />
                  <circle cx="15.5" cy="14.5" r="1.2" fill="#005d7a" />
                  <circle cx="12.5" cy="11.5" r="0.9" fill="#005d7a" />
                </svg>
              </div>

              <p className="text-[11px] leading-snug text-slate-600 sm:text-xs">
                We use cookies to analyze site traffic and enhance your browsing experience.
              </p>
            </div>

            {/* Right: Actions */}
            <div className="flex shrink-0 items-center gap-2 self-end sm:self-center">
              <button
                type="button"
                onClick={handleReject}
                className="cursor-pointer rounded-full bg-slate-100 px-3.5 py-1.5 text-[11px] font-semibold text-slate-600 transition-colors hover:bg-slate-200"
              >
                Reject all
              </button>

              <button
                type="button"
                onClick={handleAccept}
                className="cursor-pointer rounded-full bg-gradient-to-r from-[#00b4db] to-[#0083b0] px-4 py-1.5 text-[11px] font-semibold text-white shadow-sm transition-all hover:brightness-105 hover:shadow-md"
              >
                Accept all
              </button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
