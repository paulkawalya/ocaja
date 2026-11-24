"use client";

import { Icon } from "../icon";
import { Reveal, SectionHeading, CtaBand, PillarCard } from "../ui-bits";
import { PageHeroSplit } from "../page-hero-split";
import { TeamPhotoShowcase } from "../team-photo-showcase";
import { HERO_PEOPLE_IMAGES } from "@/lib/page-images";
import { PILLARS, type Route } from "@/lib/ocaja-data";

export function ServicesPage({ navigate }: { navigate: (r: Route) => void }) {
  const heroPeople = HERO_PEOPLE_IMAGES.services;

  return (
    <>
      <PageHeroSplit
        badge="Six Specialist Practices · Uganda & Zambia"
        title="Enterprise IT Services & Engineering Solutions"
        description="OCAJA brings together six complementary technology practices so you can address software, cybersecurity, infrastructure, AI data, financial technology and advisory needs through one accountable partner. Engineered with enterprise security standards and proven across East & Southern Africa."
        buttonLabel="Talk to a Technology Consultant"
        onButtonClick={() => navigate({ name: "contact" })}
        heroImage={heroPeople}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <SectionHeading
          kicker="The Six Pillars"
          title="Choose a practice — or combine them"
          text="Every pillar is delivered by a dedicated team, connected to the same project governance, security standards and support model."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* African Engineering Teams Showcase */}
      <TeamPhotoShowcase
        kicker="Pan-African Engineering Excellence"
        title="Multidisciplinary IT Specialists Under One Roof"
        subtitle="Our engineering pods in Kampala and Lusaka combine senior software architects, certified cybersecurity analysts, and cloud infrastructure engineers with deep local domain expertise."
        imageUrl={heroPeople.imageUrl}
        imageAlt="African software developers and IT engineers collaborating at OCAJA"
        badgeLabel="Kampala Crested Towers & Lusaka Hub"
        bullets={[
          "45+ In-house African software developers, DevOps and security analysts",
          "Decade-long track record serving telecom, banking, and public enterprise",
          "Seamless collaboration across time zones with local EAT and CAT response desks",
        ]}
      />

      <CtaBand
        title="Not sure which pillar you need?"
        text="Tell us what your organization is trying to achieve and we will recommend a practical path through the right mix of practices."
        buttonLabel="Request a Consultation"
        onNavigate={navigate}
      />
    </>
  );
}
