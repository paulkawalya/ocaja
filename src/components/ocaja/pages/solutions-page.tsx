"use client";

import { ArrowUpRight } from "lucide-react";
import { Icon } from "../icon";
import { Reveal, CtaBand } from "../ui-bits";
import { PageHeroSplit } from "../page-hero-split";
import { TeamPhotoShowcase } from "../team-photo-showcase";
import { HERO_PEOPLE_IMAGES } from "@/lib/page-images";
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
      <article className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1685f8]/30 hover:shadow-xl">
        <div className="flex items-start justify-between gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#E9EEF7] text-[#021a40] transition-colors duration-300 group-hover:bg-[#021a40] group-hover:text-white">
            <Icon name={item.icon} className="h-6 w-6" />
          </span>
          <span
            className={`rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider ${
              item.type === "Product"
                ? "bg-[#E9EEF7] text-[#1685f8]"
                : "bg-[#02183c] text-white"
            }`}
          >
            {item.type}
          </span>
        </div>
        <h3 className="mt-5 flex items-center gap-1.5 font-heading text-lg font-bold text-[#021a40]">
          {item.name}
          <ArrowUpRight className="h-4 w-4 text-[#1685f8] opacity-0 transition-all duration-300 group-hover:opacity-100" />
        </h3>
        <p className="mt-2.5 flex-1 text-xs leading-relaxed text-slate-600">{item.text}</p>
      </article>
    </Reveal>
  );
}

export function SolutionsPage({ navigate }: { navigate: (r: Route) => void }) {
  const heroPeople = HERO_PEOPLE_IMAGES.solutions;

  return (
    <>
      <PageHeroSplit
        badge="Proven Products &amp; Deployments"
        title="Proprietary Platforms & Enterprise Track Record"
        description="A robust portfolio of scalable platforms and mission-critical products designed, built, and supported by OCAJA Technologies across fleet telematics, cross-border payments, customer relationship management, and financial switches."
        buttonLabel="Talk to a Solutions Architect"
        onButtonClick={() => navigate({ name: "contact" })}
        heroImage={heroPeople}
      />

      {/* Products */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1685f8]">
            Proprietary Products
          </p>
          <h2 className="mt-3 max-w-xl font-heading text-2xl font-bold leading-tight tracking-tight text-[#021a40] sm:text-3xl">
            Platforms built and maintained by OCAJA
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((s, i) => (
            <SolutionCard key={s.name} item={s} index={i} />
          ))}
        </div>
      </section>

      {/* African IoT & Telematics Engineering Showcase */}
      <TeamPhotoShowcase
        kicker="IoT & Payment Rails Engineering"
        title="Field-Tested Telematics & Switching Architecture"
        subtitle={`${heroPeople.tag} supporting haulers across the Northern and Trans-Kalahari corridors`}
        imageUrl={heroPeople.imageUrl}
        imageAlt="African hardware and IoT systems engineer testing sensor calibration"
        badgeLabel="Kampala & Lusaka Transit Corridors"
        bullets={[
          "Custom CAN-Bus decoders, ultrasonic fuel sensors, and live GPS tracking for 142+ haulers",
          "OneNode switch routing mobile money, cards, and tax fiscalization at sub-50ms latency",
          "Dedicated field telemetry engineers stationed along Northern and Trans-Kalahari corridors",
        ]}
      />

      {/* Featured projects */}
      <section className="border-t border-slate-200 bg-slate-50/70 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1685f8]">
              Featured Projects
            </p>
            <h2 className="mt-3 max-w-xl font-heading text-2xl font-bold leading-tight tracking-tight text-[#021a40] sm:text-3xl">
              Delivered across fintech, payments, telematics &amp; Web3
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {FEATURED_PROJECTS.map((s, i) => (
              <SolutionCard key={s.name} item={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Have a platform of your own in mind?"
        text="Tell us what you are trying to achieve and our engineering leads will design a practical implementation path."
        buttonLabel="Request a Technical Consultation"
        onNavigate={navigate}
      />
    </>
  );
}
