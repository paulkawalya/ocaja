"use client";

import { ArrowDown } from "lucide-react";
import { Reveal, CtaBand } from "../ui-bits";
import { PageHeroSplit } from "../page-hero-split";
import { TeamPhotoShowcase } from "../team-photo-showcase";
import { HERO_PEOPLE_IMAGES } from "@/lib/page-images";
import { STAGES, type Route } from "@/lib/ocaja-data";

export function HowWeWorkPage({ navigate }: { navigate: (r: Route) => void }) {
  const heroPeople = HERO_PEOPLE_IMAGES["how-we-work"];

  return (
    <>
      <PageHeroSplit
        badge="Proven 4-Stage Delivery Framework"
        title="From Discovery to Continuous Support in 4 Practical Stages"
        description="Every engagement follows four structured stages that align requirements, eliminate scope surprises, enforce enterprise security baselines, and guarantee ongoing support after deployment."
        buttonLabel="Start Stage 01: Discovery"
        onButtonClick={() => navigate({ name: "contact" })}
        heroImage={heroPeople}
      />

      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-24">
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
                  <span className="absolute left-0 top-6 z-10 hidden h-14 w-14 place-items-center rounded-2xl bg-[#021a40] font-heading text-lg font-bold text-white shadow-lg shadow-[#021a40]/25 sm:grid">
                    {s.num}
                  </span>
                  <div className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#1685f8]/30 hover:shadow-xl sm:p-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#E9EEF7] font-heading text-xs font-bold text-[#021a40] sm:hidden">
                        {s.num}
                      </span>
                      <h2 className="font-heading text-xl font-bold text-[#021a40]">
                        Stage {s.num}: {s.title}
                      </h2>
                    </div>
                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                      <div className="rounded-xl bg-slate-50 p-5 border border-slate-100">
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-slate-500">
                          What happens
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-slate-700">
                          {s.what}
                        </p>
                      </div>
                      <div className="rounded-xl bg-emerald-50/60 p-5 border border-emerald-500/20">
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-emerald-800">
                          Key Deliverable
                        </p>
                        <p className="mt-2 text-xs font-bold leading-relaxed text-emerald-950">
                          {s.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                  {i < STAGES.length - 1 ? (
                    <div className="mt-6 hidden justify-start pl-2 sm:flex">
                      <ArrowDown className="h-5 w-5 text-slate-300" aria-hidden="true" />
                    </div>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* African Agile Sprint Delivery Showcase */}
      <TeamPhotoShowcase
        kicker="Agile Engineering Culture"
        title="Predictable Sprints, Daily Standups & Continuous Delivery"
        subtitle="Our engineering pods operate on disciplined two-week sprint cadences with automated CI/CD pipelines, strict code reviews, and direct client demo sessions."
        imageUrl={heroPeople.imageUrl}
        imageAlt="African software developers in an agile sprint planning standup"
        badgeLabel="Agile Pods · Kampala HQ & Lusaka Hub"
        bullets={[
          "Bi-weekly sprint planning and working demos with real system prototypes",
          "Automated linting, integration testing, and zero-CVE security gates before merging",
          "Dedicated technical account managers and sprint progress tracking in Jira",
        ]}
      />

      <CtaBand
        title="Ready to start at stage one?"
        text="Tell us what you are trying to achieve and we will recommend a practical path."
        buttonLabel="Request a Consultation"
        onNavigate={navigate}
      />
    </>
  );
}
