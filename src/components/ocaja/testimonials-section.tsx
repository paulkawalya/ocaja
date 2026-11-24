"use client";

import { motion } from "framer-motion";
import { CLIENT_REVIEWS } from "@/data/benchmark-data";
import { SectionHeading, Reveal } from "./ui-bits";
import { Star, Quote, MapPin } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Client Trust & Evidence"
          title="What Regional Leaders Say About OCAJA"
          text="Trusted by financial institutions, logistics carriers, NGOs, and enterprises across East and Southern Africa."
          align="center"
          light
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {CLIENT_REVIEWS.map((review, idx) => (
            <Reveal
              key={review.id}
              delay={idx * 0.1}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.07]"
            >
              <div>
                <div className="flex items-center justify-between">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span className="rounded-full bg-cyan-400/10 border border-cyan-400/30 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-cyan-300">
                    {review.pillar}
                  </span>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-white/85 italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">
                    {review.name}
                  </h4>
                  <p className="text-xs text-white/60">
                    {review.role} · <span className="text-white/80">{review.organization}</span>
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[0.72rem] text-cyan-300">
                  <MapPin className="h-3 w-3" />
                  <span>{review.location}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
