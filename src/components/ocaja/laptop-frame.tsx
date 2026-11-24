"use client";

import type { ReactNode } from "react";

export function LaptopFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-2xl select-none lg:max-w-none">
      {/* Laptop Screen Bezel (MacBook Display) */}
      <div className="relative rounded-t-2xl border-[3px] border-[#2d3345] bg-[#0c101d] p-1.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] sm:rounded-t-3xl sm:border-[4px] sm:p-2.5">
        {/* Camera dot & sensor */}
        <div className="relative flex items-center justify-center pb-1">
          <div className="h-1.5 w-1.5 rounded-full bg-slate-800 ring-1 ring-slate-700/60" />
        </div>

        {/* Screen Content Window */}
        <div className="relative overflow-hidden rounded-lg bg-white shadow-inner sm:rounded-xl">
          {children}
        </div>
      </div>

      {/* Laptop Keyboard Base (MacBook Air Aluminum Bottom) */}
      <div className="relative -ml-[3%] w-[106%]">
        {/* Aluminum hinge & lip */}
        <div className="relative flex h-3.5 w-full items-center justify-center rounded-b-xl bg-gradient-to-b from-[#cbd5e1] via-[#94a3b8] to-[#64748b] shadow-[0_20px_35px_-5px_rgba(0,0,0,0.5)] sm:h-4">
          {/* Thumb Notch */}
          <div className="h-1.5 w-20 rounded-b-md bg-[#475569]/80" />
        </div>
        {/* Subtle MacBook Air Text */}
        <div className="mt-1 text-center text-[0.62rem] font-medium tracking-widest uppercase text-white/30">
          MacBook Air
        </div>
      </div>
    </div>
  );
}
