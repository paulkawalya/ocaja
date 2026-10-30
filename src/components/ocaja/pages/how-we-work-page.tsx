"use client";

import { ArrowDown } from "lucide-react";
import { Reveal, PageHero, CtaBand } from "../ui-bits";
import { STAGES, type Route } from "@/lib/ocaja-data";

export function HowWeWorkPage({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <>
      <PageHero
        kicker="Process"
        title="How We Work"
        tagline="Every engagement follows four practical stages that align requirements, manage delivery risk and create a clear path from idea to ongoing support."
      />

      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-20">
        <div className="relative">
          {/* connecting line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[27px] top-8 hidden w-px bg-[repeating-linear-gradient(to_bottom,rgba(32,67,143,0.3)_0_6px,transparent_6px_12px)] sm:block"
          />
          <div className="space-y-6">
            {STAGES.map((s, i) => (
              <Reveal key={s.num} delay={0.05 * i}>
                <div className="relative sm:pl-24">
                  <span className="absolute left-0 top-6 z-10 hidden h-14 w-14 place-items-center rounded-2xl bg-navy font-heading text-lg font-bold text-white shadow-lg shadow-navy/25 sm:grid">
                    {s.num}
                  </span>
                  <div className="rounded-2xl border border-[#E7E9F0] bg-white p-7 transition-all duration-300 hover:border-navy/25 hover:shadow-[0_20px_40px_-18px_rgba(32,67,143,0.2)] sm:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-tint font-heading text-[0.9rem] font-bold text-navy sm:hidden">
                        {s.num}
                      </span>
                      <h2 className="font-heading text-[1.35rem] font-semibold text-navy-deep">
                        {s.title}
                      </h2>
                    </div>
                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                      <div className="rounded-xl bg-mist p-5">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ojagray">
                          What happens
                        </p>
                        <p className="mt-2 text-[0.92rem] leading-relaxed text-navy-deep/85">
                          {s.what}
                        </p>
                      </div>
                      <div className="rounded-xl bg-navy-tint/60 p-5">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-navy">
                          What you get
                        </p>
                        <p className="mt-2 text-[0.92rem] font-medium leading-relaxed text-navy-deep">
                          {s.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                  {i < STAGES.length - 1 ? (
                    <div className="mt-6 hidden justify-start pl-2 sm:flex">
                      <ArrowDown className="h-5 w-5 text-navy/30" aria-hidden="true" />
                    </div>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to start at stage one?"
        text="Tell us what you are trying to achieve and we will recommend a practical path."
        buttonLabel="Request a Consultation"
        onNavigate={navigate}
      />
    </>
  );
}
