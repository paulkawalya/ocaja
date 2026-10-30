"use client";

import { Icon } from "../icon";
import { Reveal, SectionHeading, PageHero, CtaBand, PillarCard } from "../ui-bits";
import { PILLARS, SEO, type Route } from "@/lib/ocaja-data";

export function ServicesPage({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <>
      <PageHero
        kicker="Services"
        title={SEO.services.title.split(" – ")[0]}
        tagline="OCAJA brings together six complementary technology practices so you can address software, security, infrastructure, data, financial technology and advisory needs through one coordinated partner. Each pillar has a distinct role while staying connected to the same engagement and support model."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <SectionHeading
          kicker="The six pillars"
          title="Choose a practice — or combine them"
          text="Every pillar is delivered by a dedicated team, connected to the same project governance, security standards and support model."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.id} delay={0.06 * i} className="h-full">
              <PillarCard
                num={p.num}
                title={p.title}
                text={p.tagline}
                iconNode={<Icon name={p.icon} className="h-[22px] w-[22px]" />}
                badge={p.label}
                onClick={() => navigate({ name: "pillar", pillarId: p.id })}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Not sure which pillar you need?"
        text="Tell us what you are trying to achieve and we will recommend a practical path through the right mix of practices."
        buttonLabel="Request a Consultation"
        onNavigate={navigate}
      />
    </>
  );
}
