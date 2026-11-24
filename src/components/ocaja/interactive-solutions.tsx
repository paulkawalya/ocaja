"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PILLARS, type Route, type Pillar } from "@/lib/ocaja-data";
import { SectionHeading, Reveal } from "./ui-bits";
import { Icon } from "./icon";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function InteractiveSolutions({ navigate }: { navigate: (r: Route) => void }) {
  const [activePillarId, setActivePillarId] = useState<string>(PILLARS[0].id);

  const activePillar = PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Our Core Practices"
          title="Comprehensive Solutions for a Digital-First Africa"
          text="Six specialist practices delivered through one accountable regional partner. Each practice combines technical depth with practical African market realities."
          align="center"
        />

        {/* Pillar Navigation Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {PILLARS.map((p) => {
            const isActive = activePillarId === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePillarId(p.id)}
                className={cn(
                  "flex cursor-pointer items-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-200",
                  isActive
                    ? "bg-navy text-white shadow-md shadow-navy/25 scale-105"
                    : "border border-slate-200 bg-slate-50/70 text-slate-700 hover:border-navy/40 hover:bg-white"
                )}
              >
                <Icon
                  name={p.icon}
                  className={cn("h-4 w-4", isActive ? "text-cyan-300" : "text-navy")}
                />
                <span>{p.menuTitle}</span>
                {p.label ? (
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[0.62rem] font-bold uppercase",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-navy-tint text-navy"
                    )}
                  >
                    {p.label}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card Breakdown */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden rounded-3xl border border-navy/15 bg-gradient-to-br from-slate-50 via-white to-navy-tint/30 p-6 shadow-xl sm:p-10"
            >
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                {/* Left description & benefits */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-white shadow-md">
                      <Icon name={activePillar.icon} className="h-6 w-6" />
                    </span>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-navy">
                        Pillar {activePillar.num}
                      </span>
                      <h3 className="font-heading text-2xl font-bold text-navy-deep sm:text-3xl">
                        {activePillar.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-slate-700">
                    {activePillar.intro}
                  </p>

                  <div className="mt-6 rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy">
                      Core Value & Benefits:
                    </span>
                    <ul className="mt-3 space-y-2">
                      {activePillar.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Button
                      onClick={() => navigate({ name: "pillar", pillarId: activePillar.id })}
                      className="h-11 cursor-pointer rounded-full bg-navy px-6 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-navy-dark"
                    >
                      Explore {activePillar.menuTitle}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      onClick={() => navigate({ name: "contact" })}
                      variant="outline"
                      className="h-11 cursor-pointer rounded-full border-navy/30 text-xs font-semibold text-navy hover:bg-navy-tint"
                    >
                      Request Architecture Consultation
                    </Button>
                  </div>
                </div>

                {/* Right: Service capability blocks */}
                <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                  {activePillar.blocks.map((block) => (
                    <div
                      key={block.title}
                      className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-navy/40 hover:shadow-md"
                    >
                      <div>
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-tint text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                          <Icon name={block.icon} className="h-5 w-5" />
                        </span>
                        <h4 className="mt-3.5 font-heading text-base font-bold text-navy-deep">
                          {block.title}
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-slate-600">
                          {block.text}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[0.7rem] font-semibold text-navy">
                        <span>Enterprise Managed</span>
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
