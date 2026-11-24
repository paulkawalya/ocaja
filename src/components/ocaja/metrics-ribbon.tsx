"use client";

import { motion } from "framer-motion";
import { BENCHMARK_METRICS } from "@/data/benchmark-data";
import { Award, CheckCircle2, TrendingUp, Shield, Globe2 } from "lucide-react";

const ICONS = [TrendingUp, CheckCircle2, Award, Shield, Globe2];

export function MetricsRibbon() {
  return (
    <section className="relative -mt-8 z-20 mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-3 rounded-2xl border border-navy/15 bg-white/95 p-4 shadow-[0_20px_50px_-15px_rgba(12,31,74,0.18)] backdrop-blur-md sm:gap-4 md:grid-cols-5 md:p-6">
        {BENCHMARK_METRICS.map((item, idx) => {
          const IconComp = ICONS[idx % ICONS.length];
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col items-center justify-center rounded-xl p-3 text-center transition-all hover:bg-slate-50/80"
            >
              <div className="mb-2 grid h-9 w-9 place-items-center rounded-lg bg-navy-tint text-navy">
                <IconComp className="h-4 w-4" />
              </div>
              <span className="font-heading text-2xl font-extrabold tracking-tight text-navy-deep sm:text-3xl">
                {item.value}
              </span>
              <span className="mt-1 text-xs font-bold uppercase tracking-wider text-navy">
                {item.label}
              </span>
              <span className="mt-0.5 text-[0.72rem] text-ojagray/80 line-clamp-1">
                {item.sublabel}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
