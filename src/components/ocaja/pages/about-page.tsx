"use client";

import { MapPin, Target, Telescope } from "lucide-react";
import { Icon } from "../icon";
import { Reveal, SectionHeading, PageHero, CtaBand, Kicker } from "../ui-bits";
import { ABOUT, OFFICES, WHY_OCAJA, type Route } from "@/lib/ocaja-data";

export function AboutPage({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <>
      <PageHero
        kicker="About us"
        title="About OCAJA"
        tagline={ABOUT.tagline}
      />

      {/* Who we are */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <Kicker>Who we are</Kicker>
            <p className="font-heading text-[1.4rem] font-semibold leading-snug text-navy-deep">
              A technology solutions and advisory company, accountable from discovery to
              continuous improvement.
            </p>
          </Reveal>
          <div className="space-y-5">
            {ABOUT.whoWeAre.map((p, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <p className="text-[1.02rem] leading-relaxed text-ojagray">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach + vision/mission */}
      <section className="bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            <Reveal className="h-full">
              <div className="h-full rounded-2xl bg-navy p-8 text-white">
                <Icon name="compass" className="h-7 w-7 text-white/80" />
                <h2 className="mt-5 font-heading text-[1.3rem] font-semibold">Our approach</h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-white/75">
                  {ABOUT.approach}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="h-full">
              <div className="h-full rounded-2xl border border-[#E7E9F0] bg-white p-8">
                <Telescope className="h-7 w-7 text-navy" strokeWidth={1.6} />
                <h2 className="mt-5 font-heading text-[1.3rem] font-semibold text-navy-deep">
                  Vision
                </h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ojagray">
                  {ABOUT.vision}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16} className="h-full">
              <div className="h-full rounded-2xl border border-[#E7E9F0] bg-white p-8">
                <Target className="h-7 w-7 text-navy" strokeWidth={1.6} />
                <h2 className="mt-5 font-heading text-[1.3rem] font-semibold text-navy-deep">
                  Mission
                </h2>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ojagray">
                  {ABOUT.mission}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <SectionHeading
          kicker="Core values"
          title="What we stand for"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {ABOUT.values.map((v, i) => (
            <Reveal key={v.title} delay={0.07 * i} className="h-full">
              <div className="h-full rounded-2xl border border-[#E7E9F0] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy/25 hover:shadow-[0_20px_40px_-18px_rgba(32,67,143,0.2)]">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-tint text-navy">
                  <Icon name={v.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-heading text-[1.05rem] font-semibold text-navy-deep">
                  {v.title}
                </h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-ojagray">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Where we operate */}
      <section className="border-y border-navy-tint bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker="Where we operate"
            title="Offices in Kampala and Lusaka"
            text="Regional presence with regional understanding — close to our clients and to the environments their technology must perform in."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {OFFICES.map((o, i) => (
              <Reveal key={o.country} delay={0.08 * i}>
                <div className="rounded-2xl border border-[#E7E9F0] bg-white p-7">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-white">
                      <MapPin className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="font-heading text-[1.05rem] font-semibold text-navy-deep">
                        {o.city}, {o.country}
                      </p>
                      {o.note ? (
                        <p className="text-[0.75rem] font-medium uppercase tracking-wider text-navy">
                          {o.note}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <p className="mt-4 text-[0.92rem] leading-relaxed text-ojagray">{o.address}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why OCAJA compact list */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <SectionHeading kicker="Why OCAJA" title="Why a regional partner beats a patchwork of vendors" />
        <div className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_OCAJA.map((w, i) => (
            <Reveal key={w.title} delay={0.05 * i}>
              <div className="flex items-start gap-3.5 border-l-2 border-navy-tint pl-5">
                <div>
                  <p className="font-heading text-[0.95rem] font-semibold text-navy-deep">
                    {w.title}
                  </p>
                  <p className="mt-1 text-[0.86rem] leading-relaxed text-ojagray">{w.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title={ABOUT.cta}
        text="Tell us what your organisation needs and we will recommend a practical path."
        buttonLabel="Contact Us"
        onNavigate={navigate}
      />
    </>
  );
}
