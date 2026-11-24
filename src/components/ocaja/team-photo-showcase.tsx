"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, MapPin, Users } from "lucide-react";
import { Reveal } from "./ui-bits";

interface TeamPhotoShowcaseProps {
  kicker?: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  badgeLabel?: string;
  bullets?: string[];
  reverse?: boolean;
}

export function TeamPhotoShowcase({
  kicker = "In-House African Engineering",
  title,
  subtitle,
  imageUrl,
  imageAlt,
  badgeLabel = "Kampala HQ · Lusaka Hub",
  bullets = [
    "100% In-house African software engineers and cybersecurity specialists",
    "Bespoke architectures built for East & Southern African regulatory realities",
    "On-the-ground support with direct access to senior solutions architects",
  ],
  reverse = false,
}: TeamPhotoShowcaseProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
      <div
        className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-14 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image Frame Column */}
        <Reveal className="lg:col-span-6">
          <div className="relative group">
            {/* Ambient Cyan/Navy Glow */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#1685f8]/20 to-[#2AE6FB]/20 blur-xl opacity-75 transition duration-500 group-hover:opacity-100"
            />

            {/* Main Picture Card */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-900 shadow-xl">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[420px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02183c]/90 via-[#02183c]/30 to-transparent" />

              {/* Bottom Badge Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-slate-950/80 p-3.5 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#2AE6FB]/20 text-[#2AE6FB]">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-xs font-bold text-white">{badgeLabel}</span>
                    <span className="block text-[10px] text-slate-300">Active Regional Engineering Pods</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-bold text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="h-3 w-3" /> In-House Talent
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Narrative Column */}
        <Reveal className="lg:col-span-6">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#1685f8]">
            {kicker}
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold leading-tight text-[#021a40] sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {subtitle}
          </p>

          <ul className="mt-6 space-y-3.5">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#E9EEF7] text-[#1685f8]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs leading-relaxed text-slate-700 sm:text-sm">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
