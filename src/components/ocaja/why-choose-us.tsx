"use client";

import { motion } from "framer-motion";
import { WHY_OCAJA } from "@/lib/ocaja-data";
import { Icon } from "./icon";
import { SectionHeading, Reveal } from "./ui-bits";
import { ShieldCheck, MapPin, Zap, CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Why Partner With Us"
          title="Why Choose OCAJA Technologies?"
          text="We combine global software engineering standards with an on-the-ground understanding of East and Southern African business realities."
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_OCAJA.map((item, idx) => (
            <Reveal
              key={item.title}
              delay={idx * 0.08}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-navy/30 hover:shadow-[0_20px_40px_-15px_rgba(12,31,74,0.12)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-tint text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <span className="font-heading text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-navy/40 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-lg font-bold text-navy-deep group-hover:text-navy transition-colors">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="h-4 w-4" />
                <span>Verified Client Benefit</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
