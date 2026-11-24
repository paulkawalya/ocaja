"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Layers, ExternalLink } from "lucide-react";
import type { Route } from "@/lib/ocaja-data";
import { BENCHMARK_CASE_STUDIES, type CaseStudyItem } from "@/data/benchmark-data";

export function TalentCaseStudies({ navigate }: { navigate: (r: Route) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + BENCHMARK_CASE_STUDIES.length) % BENCHMARK_CASE_STUDIES.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % BENCHMARK_CASE_STUDIES.length);
  };

  const study = BENCHMARK_CASE_STUDIES[currentIndex];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1685f8]">
            Explore how our IT solutions helped businesses achieve measurable growth
          </p>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-[#021a40] sm:text-4xl">
            Beyond Solutions: Real-World Impact, Tangible Growth
          </h2>
        </div>

        {/* Talentelgia stories-section Carousel Item */}
        <div className="mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={study.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#02183c] via-[#05265d] to-[#0a3479] p-8 text-white shadow-2xl sm:p-12 lg:p-16"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* Left Column */}
                <div className="lg:col-span-7">
                  <span className="inline-block rounded-full border border-[#2AE6FB]/40 bg-[#2AE6FB]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#2AE6FB]">
                    {study.category}
                  </span>

                  <h3 className="mt-4 font-heading text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                    {study.name}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
                    {study.description}
                  </p>

                  {/* Talentelgia team-performance stats row with vertical lines */}
                  <div className="stories-performance-divider mt-8 flex flex-wrap items-center gap-8 sm:gap-12 border-t border-white/20 pt-6">
                    <span className="relative flex flex-col gap-1">
                      <h6 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                        {study.performanceIndex}
                      </h6>
                      <strong className="text-xs font-normal text-white/80">
                        Performance Index
                      </strong>
                    </span>

                    <span className="relative flex flex-col gap-1">
                      <h6 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                        {study.satisfactionIndex}
                      </h6>
                      <strong className="text-xs font-normal text-white/80">
                        Satisfaction Index
                      </strong>
                    </span>

                    <span className="relative flex flex-col gap-1">
                      <h6 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
                        {study.deliveryRate}
                      </h6>
                      <strong className="text-xs font-normal text-white/80">
                        On-Time Delivery Rate
                      </strong>
                    </span>
                  </div>

                  {/* Talentelgia cyan link with SVG */}
                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={() => navigate({ name: "solutions" })}
                      className="inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-white hover:text-[#2AE6FB] transition-colors"
                    >
                      <span>View Full Case Study</span>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform hover:translate-x-1"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 12C6 11.5858 6.33579 11.25 6.75 11.25H15.4393L12.2197 8.03033C11.9268 7.73744 11.9268 7.26256 12.2197 6.96967C12.5126 6.67678 12.9874 6.67678 13.2803 6.96967L17.7803 11.4697C18.0732 11.7626 18.0732 12.2374 17.7803 12.5303L13.2803 17.0303C12.9874 17.3232 12.5126 17.3232 12.2197 17.0303C11.9268 16.7374 11.9268 16.2626 12.2197 15.9697L15.4393 12.75H6.75C6.33579 12.75 6 12.4142 6 12Z"
                          fill="#2AE6FB"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Right Column: Visual Showcase Preview */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#2AE6FB]">
                        Live Deployment
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-white/70">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        Operational
                      </span>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="rounded-xl bg-white/5 p-3.5">
                        <span className="text-[0.68rem] font-bold uppercase tracking-wider text-white/60">
                          Operational Challenge
                        </span>
                        <p className="mt-1 text-xs text-white/80 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="rounded-xl bg-white/5 p-3.5">
                        <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#2AE6FB]">
                          Engineered Outcome
                        </span>
                        <p className="mt-1 text-xs text-white/90 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {study.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white/10 px-2 py-0.5 text-[0.65rem] font-medium text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="mt-8 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Case Study {currentIndex + 1} of {BENCHMARK_CASE_STUDIES.length}
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous case study"
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition-all hover:border-[#1685f8] hover:bg-slate-50 hover:text-[#1685f8]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next case study"
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition-all hover:border-[#1685f8] hover:bg-slate-50 hover:text-[#1685f8]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
