"use client";

import { motion } from "framer-motion";
import { Reveal } from "./ui-bits";

export function CraftingDigital() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Large watermark text like Talentelgia's EXCELLENCE */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 select-none text-center font-heading text-6xl font-black uppercase tracking-widest text-slate-100/90 sm:text-8xl lg:text-9xl"
        >
          EXCELLENCE
        </div>

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1685f8]">
            Driven by Code. Defined by Innovation
          </p>

          <h2 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Building the Digital Future with Innovation and Precision
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
            We are a technology company passionate about delivering innovative solutions in AI/ML, web and mobile app development, 24/7 cybersecurity, cloud infrastructure, and digital financial integrations. We build scalable digital platforms that drive sustainable growth and create lasting value for organisations across Uganda, Zambia, and the wider East &amp; Southern African region.
          </p>
        </div>

        {/* 3 Metric Counter Boxes (Talentelgia style) */}
        <div className="relative z-10 mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Reveal delay={0.1}>
            <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#1685f8]/30 hover:bg-white hover:shadow-xl">
              <span className="font-heading text-4xl font-extrabold tracking-tight text-[#021a40] sm:text-5xl group-hover:text-[#1685f8] transition-colors">
                100+
              </span>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                Projects Delivered
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Enterprise software, mobile apps &amp; integrations
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#1685f8]/30 hover:bg-white hover:shadow-xl">
              <span className="font-heading text-4xl font-extrabold tracking-tight text-[#021a40] sm:text-5xl group-hover:text-[#1685f8] transition-colors">
                98%
              </span>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                Client Retention
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Long-term advisory &amp; managed engineering partners
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/60 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#1685f8]/30 hover:bg-white hover:shadow-xl">
              <span className="font-heading text-4xl font-extrabold tracking-tight text-[#021a40] sm:text-5xl group-hover:text-[#1685f8] transition-colors">
                10+
              </span>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-700">
                Years Regional Experience
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Kampala Head Office &amp; Lusaka Regional Office
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
