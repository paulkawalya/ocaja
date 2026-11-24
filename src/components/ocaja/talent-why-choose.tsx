"use client";

import { motion } from "framer-motion";
import { Reveal } from "./ui-bits";
import { Diamond, Cpu, ShieldCheck, Users2 } from "lucide-react";
import type { Route } from "@/lib/ocaja-data";

const REASONS = [
  {
    icon: Diamond,
    title: "Custom Solutions",
    text: "We create unique software to fit your specific operational needs, ensuring your project is architected and built just for you without forced vendor lock-in.",
  },
  {
    icon: Cpu,
    title: "Innovative Approach",
    text: "Our team stays ahead of technology curves, applying practical AI automation, event-driven architectures, and modern cloud microservices.",
  },
  {
    icon: ShieldCheck,
    title: "Scalability & Resilience",
    text: "We develop resilient systems engineered to perform reliably across distributed branches, mobile-money rails, and low-connectivity environments.",
  },
  {
    icon: Users2,
    title: "Dedicated Experts & 24/7 SOC",
    text: "Access dedicated senior software engineers, cybersecurity threat hunters, and IT strategists operating out of Kampala and Lusaka.",
  },
];

export function TalentWhyChoose({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <section className="relative overflow-hidden bg-[#02183c] py-24 text-white sm:py-32">
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-0 h-96 w-96 rounded-full bg-[#1685f8]/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 h-96 w-96 rounded-full bg-[#2AE6FB]/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2AE6FB]">
            Designing scalable, secure, and future-ready IT solutions
          </p>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
            Why Choose OCAJA?
          </h2>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            One regional partner combining technical depth with accountability from initial discovery workshops through ongoing support.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, idx) => {
            const IconComp = r.icon;
            return (
              <Reveal key={r.title} delay={idx * 0.1} className="h-full">
                <div className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2AE6FB]/40 hover:bg-white/[0.08]">
                  <div>
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-[#2AE6FB] transition-colors group-hover:bg-[#2AE6FB] group-hover:text-[#02183c]">
                      <IconComp className="h-6 w-6" />
                    </span>

                    <h3 className="mt-6 font-heading text-lg font-bold text-white group-hover:text-[#2AE6FB] transition-colors">
                      {r.title}
                    </h3>

                    <p className="mt-3 text-xs leading-relaxed text-white/70">
                      {r.text}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => navigate({ name: "contact" })}
                      className="inline-flex cursor-pointer items-center gap-2 text-xs font-bold text-white group-hover:text-[#2AE6FB] transition-colors"
                    >
                      <span>Contact Us Now</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform group-hover:translate-x-1"
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
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
