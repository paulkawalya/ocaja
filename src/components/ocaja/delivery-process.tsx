"use client";

import { motion } from "framer-motion";
import { STAGES, type Route } from "@/lib/ocaja-data";
import { SectionHeading, Reveal } from "./ui-bits";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DeliveryProcess({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Delivery Lifecycle"
          title="From Discovery to Continuous Support in 4 Practical Stages"
          text="A structured, transparent delivery methodology ensuring predictable timelines, transparent budget controls, and zero disruption to active business operations."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((stage, idx) => (
            <Reveal
              key={stage.num}
              delay={idx * 0.1}
              className="relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-navy/40 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="font-heading text-3xl font-extrabold text-navy/20">
                    {stage.num}
                  </span>
                  <span className="rounded-full bg-navy-tint px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-navy">
                    Stage {stage.num}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-lg font-bold text-navy-deep">
                  {stage.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {stage.what}
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-3.5">
                <span className="flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-wider text-emerald-800">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  Key Deliverable
                </span>
                <p className="mt-1 text-xs font-medium text-emerald-900 leading-snug">
                  {stage.outcome}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            onClick={() => navigate({ name: "how-we-work" })}
            className="h-12 cursor-pointer rounded-full bg-navy px-8 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-navy-dark"
          >
            Learn More About Our Process
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
