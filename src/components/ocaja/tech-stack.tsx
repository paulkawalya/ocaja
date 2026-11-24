"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TECH_CATEGORIES, TECH_STACK_ITEMS } from "@/data/benchmark-data";
import { Reveal, SectionHeading } from "./ui-bits";
import {
  Code2,
  Server,
  Cloud,
  BrainCircuit,
  CreditCard,
  ShieldCheck,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "web-mobile": Code2,
  backend: Server,
  "cloud-devops": Cloud,
  "ai-data": BrainCircuit,
  fintech: CreditCard,
  security: ShieldCheck,
};

export function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>("web-mobile");

  const filteredItems = TECH_STACK_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Engineering Excellence"
          title="Core Technology Stack"
          text="We architect high-resilience digital ecosystems using battle-tested frameworks, modern cloud platforms, enterprise security standards, and local African payment rails."
          align="center"
        />

        {/* Categories Tab Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {TECH_CATEGORIES.map((cat) => {
            const IconComp = CATEGORY_ICONS[cat.id] || Code2;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-200",
                  isActive
                    ? "bg-navy-deep text-white shadow-md shadow-navy-deep/20 scale-105"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-navy/40 hover:bg-slate-50"
                )}
              >
                <IconComp className={cn("h-4 w-4", isActive ? "text-cyan-400" : "text-navy")} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Stack Cards Grid */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredItems.map((tech) => (
                <div
                  key={tech.name}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy/40 hover:shadow-[0_16px_36px_-12px_rgba(32,67,143,0.14)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="inline-block rounded-md bg-navy-tint px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-navy">
                        {tech.tag}
                      </span>
                      <h4 className="mt-2.5 font-heading text-lg font-bold text-navy-deep group-hover:text-navy transition-colors">
                        {tech.name}
                      </h4>
                    </div>
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-50 text-emerald-600 border border-slate-100 group-hover:bg-emerald-50 transition-colors">
                      <Check className="h-4 w-4" />
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {tech.desc}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 text-[0.7rem] font-medium text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Production Grade · Enterprise Standard</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Trust banner */}
        <Reveal delay={0.2} className="mt-12 rounded-2xl border border-navy/10 bg-navy-tint/50 p-6 text-center sm:p-8">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 sm:flex-row text-left">
            <div>
              <h4 className="font-heading text-base font-bold text-navy-deep sm:text-lg">
                Need a custom enterprise architecture evaluation?
              </h4>
              <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                Our technology consultants assess legacy codebases, cloud migration feasibility, and integration blueprints.
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white shadow-sm">
              Vendor-Neutral Advisory
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
