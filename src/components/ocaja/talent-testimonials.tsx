"use client";

import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { CLIENT_REVIEWS } from "@/data/benchmark-data";
import { Reveal } from "./ui-bits";

export function TalentTestimonials() {
  return (
    <section className="bg-slate-50/70 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1685f8]">
            Client Endorsements &amp; Regional Trust
          </p>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-[#021a40] sm:text-4xl">
            Let’s Hear What Our Clients Say
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Trusted by leading financial institutions, commercial conglomerates, and development partners across Uganda and Zambia.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {CLIENT_REVIEWS.map((r, idx) => (
            <Reveal key={r.id} delay={idx * 0.1} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#1685f8]/30 hover:shadow-lg">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    <span className="rounded-full bg-[#E9EEF7] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[#1685f8]">
                      {r.pillar}
                    </span>
                  </div>

                  <p className="mt-6 text-sm italic leading-relaxed text-slate-700">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
                  <div>
                    <h4 className="font-heading text-sm font-bold text-[#021a40]">
                      {r.name}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {r.role} · <strong className="font-semibold text-slate-700">{r.organization}</strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-[0.7rem] font-semibold text-slate-500">
                    <MapPin className="h-3.5 w-3.5 text-[#1685f8]" />
                    <span>{r.location}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
