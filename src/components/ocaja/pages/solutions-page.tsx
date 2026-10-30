"use client";

import { ArrowUpRight } from "lucide-react";
import { Icon } from "../icon";
import { Reveal, PageHero, CtaBand } from "../ui-bits";
import {
  PRODUCTS,
  FEATURED_PROJECTS,
  SOLUTIONS_INTRO,
  type Route,
  type SolutionItem,
} from "@/lib/ocaja-data";

function SolutionCard({ item, index }: { item: SolutionItem; index: number }) {
  return (
    <Reveal delay={0.06 * index} className="h-full">
      <article className="group flex h-full flex-col rounded-2xl border border-[#E7E9F0] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-navy/25 hover:shadow-[0_24px_48px_-16px_rgba(32,67,143,0.2)]">
        <div className="flex items-start justify-between gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-tint text-navy transition-colors duration-300 group-hover:bg-navy group-hover:text-white">
            <Icon name={item.icon} className="h-[22px] w-[22px]" />
          </span>
          <span
            className={`rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wider ${
              item.type === "Product"
                ? "bg-navy-tint text-navy"
                : "bg-navy-deep text-white"
            }`}
          >
            {item.type}
          </span>
        </div>
        <h3 className="mt-5 flex items-center gap-1.5 font-heading text-[1.15rem] font-semibold text-navy-deep">
          {item.name}
          <ArrowUpRight className="h-4 w-4 text-navy/40 opacity-0 transition-all duration-300 group-hover:opacity-100" />
        </h3>
        <p className="mt-2.5 flex-1 text-[0.92rem] leading-relaxed text-ojagray">{item.text}</p>
      </article>
    </Reveal>
  );
}

export function SolutionsPage({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <>
      <PageHero
        kicker="Solutions"
        title="Selected Solutions & Track Record"
        tagline={SOLUTIONS_INTRO}
      />

      {/* Products */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ojagray">
            Products
          </p>
          <h2 className="mt-3 max-w-xl font-heading text-[1.7rem] font-bold leading-tight tracking-tight text-navy-deep sm:text-3xl">
            Platforms built and maintained by OCAJA
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PRODUCTS.map((s, i) => (
            <SolutionCard key={s.name} item={s} index={i} />
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-t border-navy-tint bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-ojagray">
              Featured projects
            </p>
            <h2 className="mt-3 max-w-xl font-heading text-[1.7rem] font-bold leading-tight tracking-tight text-navy-deep sm:text-3xl">
              Delivered across fintech, payments and logistics
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {FEATURED_PROJECTS.map((s, i) => (
              <SolutionCard key={s.name} item={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a platform of your own in mind?"
        text="Tell us what you are trying to achieve and we will recommend a practical path."
        buttonLabel="Contact Us"
        onNavigate={navigate}
      />
    </>
  );
}
