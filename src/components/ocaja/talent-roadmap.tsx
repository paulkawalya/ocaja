"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Route } from "@/lib/ocaja-data";

export function TalentRoadmap({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <section className="talentelgia-hero-bg relative overflow-hidden py-20 text-white sm:py-28">
      {/* Background dot pattern */}
      <div className="talentelgia-dot-pattern absolute inset-0 opacity-15 pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Get Your Free IT Solutions Framework
        </h2>

        {/* 3 Pills (Talentelgia signature) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full border border-[#2AE6FB]/30 bg-white/10 px-4 py-1.5 text-xs font-semibold text-[#2AE6FB] backdrop-blur-sm">
            Free Consultation Offer
          </span>
          <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm">
            Industry-Specific Resources
          </span>
          <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm">
            Technology Assessment Tools
          </span>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
          Our senior technology advisors provide a tailored IT roadmap to modernize your business, covering systems architecture, integration feasibility, and phased delivery. Gain actionable insights for sustainable digital growth.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="shadow-bg">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("consultation");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                else navigate({ name: "contact" });
              }}
              className="btn-talent-primary inline-flex cursor-pointer items-center gap-2 rounded-full px-9 py-3.5 text-sm uppercase tracking-wider"
            >
              <span>Consult Our Expert</span>
              <ArrowRight className="h-4 w-4 text-[#2AE6FB]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
