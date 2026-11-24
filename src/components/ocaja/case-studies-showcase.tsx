"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BENCHMARK_CASE_STUDIES, type CaseStudyItem } from "@/data/benchmark-data";
import { SectionHeading, Reveal } from "./ui-bits";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, Layers } from "lucide-react";
import type { Route } from "@/lib/ocaja-data";
import { cn } from "@/lib/utils";

const FILTER_CATEGORIES = [
  "All Projects",
  "Fintech & Payments",
  "Fleet & Logistics",
  "Enterprise CRM",
  "Blockchain & Web3",
] as const;

export function CaseStudiesShowcase({ navigate }: { navigate: (r: Route) => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");
  const [activeStudy, setActiveStudy] = useState<CaseStudyItem>(BENCHMARK_CASE_STUDIES[0]);

  const filteredStudies =
    selectedCategory === "All Projects"
      ? BENCHMARK_CASE_STUDIES
      : BENCHMARK_CASE_STUDIES.filter((item) => item.category === selectedCategory);

  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white sm:py-32">
      {/* Background ambient tech glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Track Record & Impact"
          title="Beyond Solutions: Real-World Impact, Tangible Growth"
          text="Explore enterprise platforms designed, built, and supported by OCAJA across fintech, logistics telematics, CRM, and digital vouchers."
          align="center"
          light
        />

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "cursor-pointer rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all",
                selectedCategory === cat
                  ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/25"
                  : "border border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Case Study Hero Showcase */}
        <Reveal delay={0.15} className="mt-12">
          <div className="overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent p-6 shadow-2xl backdrop-blur-xl sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Details & Narrative */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
                    {activeStudy.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-white/60">
                    <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                    {activeStudy.highlight}
                  </span>
                </div>

                <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {activeStudy.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {activeStudy.description}
                </p>

                {/* Challenge & Solution Grid */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <span className="text-[0.72rem] font-bold uppercase tracking-wider text-rose-300">
                      Operational Challenge
                    </span>
                    <p className="mt-1 text-xs text-white/75 leading-relaxed">
                      {activeStudy.challenge}
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <span className="text-[0.72rem] font-bold uppercase tracking-wider text-emerald-300">
                      OCAJA Solution
                    </span>
                    <p className="mt-1 text-xs text-white/75 leading-relaxed">
                      {activeStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Metric Cards (Talentelgia Benchmark) */}
                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-5">
                  <div className="flex items-center gap-2">
                    <div className="font-heading text-2xl font-extrabold text-cyan-300">
                      {activeStudy.performanceIndex}
                    </div>
                    <div className="text-[0.68rem] font-semibold uppercase tracking-wider text-white/70">
                      Performance
                      <br />
                      Index
                    </div>
                  </div>

                  <span className="h-6 w-px bg-white/20" />

                  <div className="flex items-center gap-2">
                    <div className="font-heading text-2xl font-extrabold text-cyan-300">
                      {activeStudy.satisfactionIndex}
                    </div>
                    <div className="text-[0.68rem] font-semibold uppercase tracking-wider text-white/70">
                      Satisfaction
                      <br />
                      Index
                    </div>
                  </div>

                  <span className="h-6 w-px bg-white/20" />

                  <div className="flex items-center gap-2">
                    <div className="font-heading text-2xl font-extrabold text-cyan-300">
                      {activeStudy.deliveryRate}
                    </div>
                    <div className="text-[0.68rem] font-semibold uppercase tracking-wider text-white/70">
                      On-Time
                      <br />
                      Delivery
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button
                    onClick={() => navigate({ name: "solutions" })}
                    className="h-11 cursor-pointer rounded-full bg-cyan-400 px-6 text-xs font-bold uppercase tracking-wider text-slate-950 hover:bg-cyan-300"
                  >
                    View All Case Studies
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => navigate({ name: "contact" })}
                    variant="outline"
                    className="h-11 cursor-pointer rounded-full border-white/25 bg-white/5 px-6 text-xs font-semibold text-white hover:bg-white/15"
                  >
                    Discuss Your Requirements
                  </Button>
                </div>
              </div>

              {/* Right Column: Case study selector list */}
              <div className="space-y-3 lg:col-span-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Select Featured Case Study:
                </span>
                <div className="space-y-2.5">
                  {filteredStudies.map((study) => {
                    const isSelected = activeStudy.id === study.id;
                    return (
                      <button
                        key={study.id}
                        type="button"
                        onClick={() => setActiveStudy(study)}
                        className={cn(
                          "w-full cursor-pointer rounded-2xl p-4 text-left transition-all duration-200",
                          isSelected
                            ? "border border-cyan-400/60 bg-white/10 shadow-lg shadow-cyan-500/10"
                            : "border border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-heading text-sm font-bold text-white">
                            {study.name}
                          </span>
                          <span
                            className={cn(
                              "text-xs font-bold",
                              isSelected ? "text-cyan-300" : "text-white/40"
                            )}
                          >
                            Index: {study.performanceIndex}
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-white/60 line-clamp-1">
                          {study.highlight}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
