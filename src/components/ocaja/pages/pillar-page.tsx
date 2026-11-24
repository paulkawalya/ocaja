"use client";

import { Check } from "lucide-react";
import { Icon } from "../icon";
import { Reveal, Kicker, CtaBand } from "../ui-bits";
import { PageHeroSplit } from "../page-hero-split";
import { TeamPhotoShowcase } from "../team-photo-showcase";
import { HERO_PEOPLE_IMAGES } from "@/lib/page-images";
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
  const heroPeople =
    HERO_PEOPLE_IMAGES[pillar.id] ?? HERO_PEOPLE_IMAGES["software-apps"];

  // Select content titles
  let heroTitle = `${pillar.title} Development Company`;
  let heroDesc = pillar.intro;
  let heroButton = `Talk to a ${pillar.menuTitle} Expert`;

  if (pillar.id === "digital-financial-services") {
    heroTitle = "FinTech App Development Company";
    heroDesc =
      "Develop financial applications with secure workflows, regulatory-ready architecture, intelligent automation, and AI-powered capabilities built into the product from the start. Our fintech app development services cover product engineering, financial integrations, ISO-aligned practices, and standards-driven security to support reliable applications across payments, lending, investments, and other financial services.";
    heroButton = "Talk to a Fintech Expert";
  } else if (pillar.id === "cybersecurity") {
    heroTitle = "Managed Cybersecurity & SOC Company";
    heroDesc =
      "Protect your enterprise with continuous 24/7 threat monitoring, automated SIEM defense, ethical hacking assessments, and rapid incident response protocols engineered for financial institutions and commercial enterprises.";
    heroButton = "Talk to a Cybersecurity Expert";
  } else if (pillar.id === "cloud-infrastructure") {
    heroTitle = "Cloud & Infrastructure Engineering Company";
    heroDesc =
      "Architect scalable, resilient cloud and hybrid infrastructure across AWS, Microsoft Azure, and Google Cloud with automated backups, disaster recovery, and regional low-latency connectivity.";
    heroButton = "Talk to a Cloud Architect";
  } else if (pillar.id === "software-apps") {
    heroTitle = "Custom Software & App Development Company";
    heroDesc =
      "Engineer bespoke enterprise applications, ERP and CRM systems, progressive web apps, and native mobile platforms designed for high operational velocity and offline resilience across Africa.";
    heroButton = "Talk to a Software Engineer";
  } else if (pillar.id === "ai-data-analytics") {
    heroTitle = "AI, Data & Analytics Engineering Company";
    heroDesc =
      "Practical AI and machine learning solutions that solve real operational problems: finding automation opportunities, intelligent document extraction, dynamic reporting dashboards, and IoT asset telematics.";
    heroButton = "Talk to an AI Specialist";
  } else if (pillar.id === "it-consulting-training") {
    heroTitle = "IT Consulting & Advisory Company";
    heroDesc =
      "Independent, vendor-neutral technology strategy, outsourced engineering support, cybersecurity awareness training, and digital transformation roadmaps for public institutions and growing enterprises.";
    heroButton = "Talk to an IT Consultant";
  }

  return (
    <>
      {/* Split Landing Hero featuring Black African IT Professionals */}
      <PageHeroSplit
        badge={`Practice ${pillar.num} · ${pillar.label}`}
        title={heroTitle}
        description={heroDesc}
        buttonLabel={heroButton}
        onButtonClick={() => navigate({ name: "contact" })}
        heroImage={heroPeople}
      />

      {/* Service blocks */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <Reveal>
          <Kicker>What we deliver</Kicker>
          <h2 className="max-w-xl font-heading text-2xl font-bold leading-tight tracking-tight text-[#021a40] sm:text-3xl">
            Inside this practice
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {pillar.blocks.map((b, i) => (
            <Reveal key={b.title} delay={0.05 * i} className="h-full">
              <div className="flex h-full gap-4 rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1685f8]/30 hover:shadow-lg">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#E9EEF7] text-[#021a40]">
                  <Icon name={b.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#021a40]">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{b.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* African Engineering Pod Spotlight */}
      <TeamPhotoShowcase
        kicker={`${pillar.menuTitle} Engineering Pod`}
        title={`In-House African Engineering for ${pillar.title}`}
        subtitle={`${heroPeople.tag} delivering enterprise solutions out of ${heroPeople.hubLocation}`}
        imageUrl={heroPeople.imageUrl}
        imageAlt={heroPeople.imageAlt}
        badgeLabel={`${heroPeople.specialistName} · ${heroPeople.hubLocation}`}
        bullets={[
          `Dedicated African IT specialists and senior architects in ${pillar.menuTitle}`,
          "Engineered locally for regional African banking, telecom, and public sector compliance",
          "Direct engineer access with guaranteed SLA response times and dedicated pods",
        ]}
      />

      {/* Client benefits */}
      <section className="bg-[#02183c] py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <Reveal>
              <Kicker light>Client benefits</Kicker>
              <h2 className="font-heading text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                What clients gain
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {pillar.title} is delivered under the same rigorous engineering model as every OCAJA
                practice — with staged check-ins and support that continues after go-live.
              </p>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {pillar.benefits.map((b, i) => (
                <Reveal key={b} delay={0.06 * i}>
                  <li className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#2AE6FB]/20 text-[#2AE6FB]">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-xs leading-relaxed text-white/85">{b}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Other pillars */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#1685f8]">
            Explore other pillars
          </p>
        </Reveal>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {others.map((p, i) => (
            <Reveal key={p.id} delay={0.04 * i}>
              <button
                type="button"
                onClick={() => navigate({ name: "pillar", pillarId: p.id })}
                className="group flex cursor-pointer items-center gap-2.5 rounded-full border border-slate-200 bg-white py-2.5 pl-4 pr-5 text-xs font-bold text-[#021a40] transition-all hover:-translate-y-0.5 hover:border-[#1685f8] hover:shadow-md"
              >
                <span className="font-heading text-xs font-bold text-[#1685f8]">
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
        text="Our senior technology consultants will recommend a practical roadmap for your organisation."
        buttonLabel="Request a Consultation"
        onNavigate={navigate}
      />
    </>
  );
}
