"use client";

import { Icon } from "../icon";
import { Reveal, PageHero, CtaBand, SectionHeading } from "../ui-bits";
import { SECTORS, SECTORS_INTRO, type Route } from "@/lib/ocaja-data";

export function SectorsPage({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <>
      <PageHero
        kicker="Sectors"
        title="Sectors We Support"
        tagline={SECTORS_INTRO}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((s, i) => (
            <Reveal key={s.name} delay={0.06 * i} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-[#E7E9F0] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy/25 hover:shadow-[0_20px_40px_-18px_rgba(32,67,143,0.2)]">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-tint text-navy">
                  <Icon name={s.icon} className="h-[22px] w-[22px]" />
                </span>
                <h2 className="mt-5 font-heading text-[1.12rem] font-semibold leading-snug text-navy-deep">
                  {s.name}
                </h2>
                <p className="mt-2.5 flex-1 text-[0.92rem] leading-relaxed text-ojagray">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}

          {/* Filler card pointing to pillars */}
          <Reveal delay={0.3} className="h-full">
            <div className="hero-grid flex h-full flex-col justify-between rounded-2xl bg-[linear-gradient(140deg,#17336B,#20438F)] p-7 text-white">
              <SectionHeading
                light
                title="Don't see your sector?"
                className="max-w-none"
              />
              <p className="mt-3 text-[0.9rem] leading-relaxed text-white/70">
                Our portfolio and track record adapt to different operating environments and
                organisational sizes. Tell us about yours.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="See yourself in this list?"
        text="Tell us what you are trying to achieve and we will recommend a practical path."
        buttonLabel="Contact Us"
        onNavigate={navigate}
      />
    </>
  );
}
