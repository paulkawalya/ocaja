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
          className="fixed bottom-5 inset-x-0 z-50 mx-auto w-[94%] max-w-5xl px-2 sm:bottom-7"
        >
          <div className="flex flex-col items-center justify-between gap-4 rounded-full border border-slate-200/90 bg-white/95 px-5 py-3 shadow-[0_16px_45px_-10px_rgba(2,26,64,0.22)] backdrop-blur-xl sm:flex-row sm:gap-6 sm:px-6 sm:py-3.5">
            {/* Left: Cookie Icon & Description */}
            <div className="flex items-center gap-3.5 text-left">
              {/* Cyan Cookie Badge */}
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#1fc8db]/15 text-[#00b4db]">
                <svg
                  width="26"
                  height="26"
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

              <p className="text-xs leading-relaxed text-slate-700 sm:text-[0.84rem]">
                We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking &ldquo;Accept all&rdquo;, you consent to the use of ALL the cookies.
              </p>
            </div>

            {/* Right: Actions */}
            <div className="flex shrink-0 items-center gap-2.5 self-end sm:self-center">
              <button
                type="button"
                onClick={handleReject}
                className="cursor-pointer rounded-full bg-slate-100 px-5 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-200 sm:text-sm"
              >
                Reject all
              </button>

              <button
                type="button"
                onClick={handleAccept}
                className="cursor-pointer rounded-full bg-gradient-to-r from-[#00b4db] to-[#0083b0] px-6 py-2 text-xs font-semibold text-white shadow-md shadow-[#00b4db]/30 transition-all hover:brightness-105 hover:shadow-lg sm:text-sm"
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
