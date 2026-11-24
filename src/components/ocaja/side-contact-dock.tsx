"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, ExternalLink, MapPin } from "lucide-react";

export function SideContactDock() {
  const [phoneOpen, setPhoneOpen] = useState(false);

  return (
    <>
      {/* Floating Side Dock on Right Edge */}
      <div className="fixed right-0 top-1/2 z-40 -translate-y-1/2 flex flex-col shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
        {/* WhatsApp Button (Top, Green) */}
        <a
          href="https://wa.me/256772418560?text=Hello%20OCAJA%20Technologies,%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-center bg-[#45d165] transition-all duration-200 hover:w-16 hover:bg-[#3ec25d]"
          title="Chat with us on WhatsApp"
        >
          {/* WhatsApp SVG Icon */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white drop-shadow-sm transition-transform duration-200 group-hover:scale-110"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12C2 13.82 2.487 15.527 3.336 17L2 22L7.16 20.692C8.6 21.517 10.25 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 20.3C10.45 20.3 8.995 19.86 7.747 19.098L7.452 18.917L4.417 19.686L5.207 16.732L5.006 16.425C4.204 15.148 3.7 13.633 3.7 12C3.7 7.422 7.422 3.7 12 3.7C16.578 3.7 20.3 7.422 20.3 12C20.3 16.578 16.578 20.3 12 20.3ZM16.32 14.475C16.083 14.357 14.922 13.784 14.705 13.705C14.488 13.626 14.33 13.587 14.172 13.823C14.014 14.06 13.561 14.593 13.423 14.75C13.285 14.908 13.147 14.928 12.91 14.81C12.673 14.692 11.91 14.442 11.005 13.635C10.3 13.007 9.822 12.232 9.684 11.995C9.546 11.758 9.669 11.63 9.788 11.512C9.894 11.406 10.025 11.235 10.143 11.097C10.262 10.959 10.301 10.86 10.38 10.702C10.459 10.545 10.42 10.407 10.36 10.288C10.301 10.17 9.828 9.006 9.63 8.533C9.438 8.073 9.243 8.136 9.096 8.128C8.956 8.12 8.798 8.12 8.64 8.12C8.482 8.12 8.225 8.179 8.008 8.416C7.791 8.653 7.179 9.225 7.179 10.388C7.179 11.551 8.028 12.674 8.146 12.832C8.265 12.989 9.813 15.373 12.186 16.398C12.751 16.642 13.189 16.786 13.534 16.896C14.103 17.076 14.622 17.051 15.032 16.99C15.489 16.921 16.442 16.413 16.639 15.861C16.836 15.309 16.836 14.836 16.777 14.737C16.718 14.639 16.557 14.593 16.32 14.475Z"
              fill="white"
            />
          </svg>

          {/* Hover Slide-out Label */}
          <span className="pointer-events-none absolute right-full mr-2 hidden whitespace-nowrap rounded-lg bg-[#02183c] px-3 py-1.5 text-xs font-semibold text-white shadow-lg group-hover:block">
            Chat on WhatsApp
          </span>
        </a>

        {/* Phone Button (Bottom, Cyan) */}
        <button
          type="button"
          onClick={() => setPhoneOpen((prev) => !prev)}
          aria-label="Call OCAJA Regional Offices"
          className="group relative flex h-14 w-14 cursor-pointer items-center justify-center bg-[#00c5df] transition-all duration-200 hover:w-16 hover:bg-[#00b4cc]"
          title="Call our offices"
        >
          {/* Phone Receiver SVG Icon */}
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white drop-shadow-sm transition-transform duration-200 group-hover:scale-110"
          >
            <path
              d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z"
              fill="white"
            />
          </svg>

          {/* Hover Slide-out Label */}
          <span className="pointer-events-none absolute right-full mr-2 hidden whitespace-nowrap rounded-lg bg-[#02183c] px-3 py-1.5 text-xs font-semibold text-white shadow-lg group-hover:block">
            Call Our Offices
          </span>
        </button>
      </div>

      {/* Quick Phone Modal / Popover */}
      <AnimatePresence>
        {phoneOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed right-16 top-1/2 z-50 -translate-y-1/2 w-80 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#00c5df]/15 text-[#00b4db]">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="font-heading text-sm font-bold text-[#021a40]">
                    Direct Call Access
                  </h4>
                  <p className="text-[0.68rem] text-slate-500">
                    Connect directly to our regional desks
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setPhoneOpen(false)}
                className="grid h-7 w-7 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 space-y-3">
              {/* Uganda Office */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-[#021a40]">
                    <MapPin className="h-3 w-3 text-[#1685f8]" />
                    Uganda (Kampala Head Office)
                  </span>
                  <span className="rounded bg-[#E9EEF7] px-1.5 py-0.5 text-[0.62rem] font-bold text-[#1685f8]">
                    HQ
                  </span>
                </div>
                <div className="mt-2 space-y-1">
                  <a
                    href="tel:+256772418560"
                    className="flex items-center justify-between text-xs text-slate-700 hover:text-[#1685f8] font-medium"
                  >
                    <span>+256 772 418 560</span>
                    <span className="text-[0.68rem] text-slate-400">Call &rarr;</span>
                  </a>
                  <a
                    href="tel:+256774523181"
                    className="flex items-center justify-between text-xs text-slate-700 hover:text-[#1685f8] font-medium"
                  >
                    <span>+256 774 523 181</span>
                    <span className="text-[0.68rem] text-slate-400">Call &rarr;</span>
                  </a>
                </div>
              </div>

              {/* Zambia Office */}
              <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-[#021a40]">
                    <MapPin className="h-3 w-3 text-[#1685f8]" />
                    Zambia (Lusaka Office)
                  </span>
                  <span className="rounded bg-slate-200 px-1.5 py-0.5 text-[0.62rem] font-bold text-slate-600">
                    ZM
                  </span>
                </div>
                <div className="mt-2 space-y-1">
                  <a
                    href="tel:+260976335914"
                    className="flex items-center justify-between text-xs text-slate-700 hover:text-[#1685f8] font-medium"
                  >
                    <span>+260 976 335 914</span>
                    <span className="text-[0.68rem] text-slate-400">Call &rarr;</span>
                  </a>
                  <a
                    href="tel:+260763355702"
                    className="flex items-center justify-between text-xs text-slate-700 hover:text-[#1685f8] font-medium"
                  >
                    <span>+260 763 355 702</span>
                    <span className="text-[0.68rem] text-slate-400">Call &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-3 text-center">
              <span className="text-[0.68rem] text-slate-400">
                Mon - Fri, 8:00 AM - 5:00 PM EAT / CAT
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
