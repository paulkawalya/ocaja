"use client";

import { Check } from "lucide-react";
import { Icon } from "../icon";
import { Reveal, Kicker, CtaBand } from "../ui-bits";
import { PILLARS, type Route } from "@/lib/ocaja-data";

export function PillarPage({
  pillarId,
  navigate,
}: {
  pillarId: string;
  navigate: (r: Route) => void;
}) {
  const pillar = PILLARS.find((p) => p.id === pillarId) ?? PILLARS[0];
  const others = PILLARS.filter((p) => p.id !== pillar.id);

  return (
    <>
      {/* Pillar hero */}
      <section className="relative overflow-hidden border-b border-navy-tint bg-mist">
        <span
          aria-hidden="true"
          className="num-outline pointer-events-none absolute -right-4 -top-12 hidden select-none font-heading text-[13rem] font-extrabold leading-none md:block lg:text-[17rem]"
        >
          {pillar.num}
        </span>
        <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-32 sm:px-8 md:pb-20 md:pt-40">
          <Reveal>
            <Kicker>Service {pillar.num} · {pillar.label}</Kicker>
            <div className="flex items-start gap-5">
              <span className="mt-1 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy text-white shadow-lg shadow-navy/25">
                <Icon name={pillar.icon} className="h-7 w-7" />
              </span>
              <h1 className="max-w-2xl font-heading text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-deep sm:text-[2.9rem]">
                {pillar.title}
              </h1>
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ojagray">
              {pillar.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service blocks */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal>
          <Kicker>What we deliver</Kicker>
          <h2 className="max-w-xl font-heading text-[1.7rem] font-bold leading-tight tracking-tight text-navy-deep sm:text-3xl">
            Inside this practice
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {pillar.blocks.map((b, i) => (
            <Reveal key={b.title} delay={0.05 * i} className="h-full">
              <div className="flex h-full gap-4 rounded-2xl border border-[#E7E9F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy/25 hover:shadow-[0_20px_40px_-18px_rgba(32,67,143,0.2)] sm:p-7">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-tint text-navy">
                  <Icon name={b.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-[1.02rem] font-semibold text-navy-deep">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-ojagray">{b.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Client benefits */}
      <section className="bg-navy-deep py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <Reveal>
              <Kicker light>Client benefits</Kicker>
              <h2 className="font-heading text-[1.7rem] font-bold leading-tight tracking-tight text-white sm:text-3xl">
                What clients gain
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-white/65">
                {pillar.title} is delivered under the same engagement model as every OCAJA
                practice — with staged check-ins and support that continues after go-live.
              </p>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {pillar.benefits.map((b, i) => (
                <Reveal key={b} delay={0.06 * i}>
                  <li className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/15">
                      <Check className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="text-[0.9rem] leading-relaxed text-white/85">{b}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Other pillars */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ojagray">
            Explore other pillars
          </p>
        </Reveal>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {others.map((p, i) => (
            <Reveal key={p.id} delay={0.04 * i}>
              <button
                type="button"
                onClick={() => navigate({ name: "pillar", pillarId: p.id })}
                className="group flex cursor-pointer items-center gap-2.5 rounded-full border border-[#E7E9F0] bg-white py-2.5 pl-4 pr-5 text-[0.85rem] font-medium text-navy-deep transition-all hover:-translate-y-0.5 hover:border-navy/30 hover:shadow-md"
              >
                <span className="font-heading text-[0.8rem] font-bold text-navy/35">
                  {p.num}
                </span>
                {p.menuTitle}
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title={`Want to discuss ${pillar.menuTitle}?`}
        text="Our team will recommend a practical approach for your organisation."
        buttonLabel="Request a Consultation"
        onNavigate={navigate}
      />
    </>
  );
}
