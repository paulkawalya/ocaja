"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
import type { PageHeroImage } from "@/lib/page-images";

interface PageHeroSplitProps {
  badge?: string;
  title: string;
  description: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  heroImage: PageHeroImage;
}

export function PageHeroSplit({
  badge,
  title,
  description,
  buttonLabel = "Talk to an Expert",
  onButtonClick,
  heroImage,
}: PageHeroSplitProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(155deg,#021433_0%,#021a40_40%,#05265d_75%,#0a3479_100%)] pt-32 pb-16 text-white sm:pt-40 sm:pb-24 lg:min-h-[640px] flex items-center">
      {/* Background Dot Pattern & Ambient Glows (Clean - NO photo overlay on header background) */}
      <div className="talentelgia-dot-pattern absolute inset-0 opacity-15 pointer-events-none" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-[550px] w-[550px] rounded-full bg-[#1685f8]/20 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-[500px] w-[500px] rounded-full bg-[#2AE6FB]/15 blur-[140px]"
      />

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Headline, Narrative & Button */}
          <div className="lg:col-span-6 xl:col-span-5">
            {badge ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#2AE6FB]/40 bg-[#2AE6FB]/10 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-[#2AE6FB]"
              >
                <Sparkles className="h-3 w-3" />
                <span>{badge}</span>
              </motion.div>
            ) : null}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 font-heading text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-6 text-sm leading-relaxed text-white/85 sm:text-base"
            >
              {description}
            </motion.p>

            {/* Gradient CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                type="button"
                onClick={onButtonClick}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-gradient-to-r from-[#00b4db] to-[#0083b0] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-[#00b4db]/30 transition-all hover:brightness-110 hover:shadow-2xl"
              >
                <span>{buttonLabel}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: High-Quality Framed Photograph Featuring Black African IT Professionals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 xl:col-span-7"
          >
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Ambient Glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#1685f8]/30 via-[#2AE6FB]/25 to-transparent blur-2xl opacity-75"
              />

              {/* Window Frame Container */}
              <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-slate-900/90 shadow-2xl backdrop-blur-md">
                {/* Window Header Bar */}
                <div className="flex items-center justify-between border-b border-white/10 bg-[#02183c]/90 px-4 py-2.5 backdrop-blur-md">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1 text-[11px] font-medium text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2AE6FB] animate-pulse" />
                    <span>{heroImage.tag}</span>
                  </div>
                  <span className="text-[10px] text-white/60 font-mono">Kampala · Lusaka</span>
                </div>

                {/* The Photograph of Black African Professionals */}
                <div className="relative aspect-[16/11] w-full overflow-hidden sm:aspect-[16/10]">
                  <img
                    src={heroImage.imageUrl}
                    alt={heroImage.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02183c]/95 via-[#02183c]/25 to-transparent" />

                  {/* Floating Specialist Pill (Bottom) */}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-slate-950/90 p-2.5 backdrop-blur-md border border-white/15 text-white sm:bottom-4 sm:left-4 sm:right-4 sm:p-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-[#2AE6FB]/50 shadow-sm">
                        <img
                          src={heroImage.specialistAvatar}
                          alt={heroImage.specialistName}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="block truncate text-xs font-bold text-white">
                          {heroImage.specialistName}
                        </span>
                        <span className="block truncate text-[10px] text-[#2AE6FB] font-medium">
                          {heroImage.specialistRole}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-500/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {heroImage.hubLocation}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
