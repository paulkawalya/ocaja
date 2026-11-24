"use client";

import { Icon } from "../icon";
import { Reveal, CtaBand, SectionHeading } from "../ui-bits";
import { PageHeroSplit } from "../page-hero-split";
import { TeamPhotoShowcase } from "../team-photo-showcase";
import { HERO_PEOPLE_IMAGES } from "@/lib/page-images";
import { SECTORS, SECTORS_INTRO, type Route } from "@/lib/ocaja-data";

export function SectorsPage({ navigate }: { navigate: (r: Route) => void }) {
  const heroPeople = HERO_PEOPLE_IMAGES.sectors;

  return (
    <>
      <PageHeroSplit
        badge="Cross-Industry Digital Engineering"
        title="Sectors We Support Across East &amp; Southern Africa"
        description="Our services adapt to different regulatory environments, mobile-first consumer ecosystems, and varying organizational sizes. From fintech pioneers and logistics fleets to government agencies and development partners."
        buttonLabel="Discuss Your Sector Requirements"
        onButtonClick={() => navigate({ name: "contact" })}
        heroImage={heroPeople}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((s, i) => (
            <Reveal key={s.name} delay={0.06 * i} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1685f8]/30 hover:shadow-xl">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#E9EEF7] text-[#021a40]">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-heading text-lg font-bold leading-snug text-[#021a40]">
                  {s.name}
                </h2>
                <p className="mt-2.5 flex-1 text-xs leading-relaxed text-slate-600">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}

          {/* Additional Custom Sector Inquiries Card */}
          <Reveal delay={0.3} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-[#02183c] via-[#05265d] to-[#0a3479] p-7 text-white shadow-lg">
              <div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-[#2AE6FB]">
                  Custom Inquiries
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-white">
                  Don&#39;t see your specific sector?
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-white/75">
                  Our portfolio and delivery framework adapt seamlessly to unique operational challenges and data regulations. Talk to our systems architects about your scenario.
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate({ name: "contact" })}
                className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-full bg-[#2AE6FB] py-2.5 text-xs font-bold uppercase tracking-wider text-[#02183c] hover:bg-white transition-colors"
              >
                Inquire With Our Team
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* African Sector Solutions Leadership Showcase */}
      <TeamPhotoShowcase
        kicker="Pan-African Industry Domain Knowledge"
        title="Engineered for African Regulatory Environments"
        subtitle="From central bank payment guidelines in Kampala and Lusaka to URA and ZRA automated fiscalization, our solutions are built to comply with local laws while unlocking regional scale."
        imageUrl={heroPeople.imageUrl}
        imageAlt="African healthcare and technology professionals collaborating on digital records"
        badgeLabel="Uganda & Zambia Sector Compliance"
        bullets={[
          "Deep integration with Bank of Uganda NPS and Bank of Zambia national switches",
          "Automated electronic tax invoicing ensuring 100% statutory tax compliance",
          "Encrypted health records and financial databases fully aligned with regional Data Protection Acts (DPPA)",
        ]}
      />

      <CtaBand
        title="Ready to transform your sector operations?"
        text="Tell us what you are trying to achieve and we will recommend a practical path."
        buttonLabel="Request a Consultation"
        onNavigate={navigate}
      />
    </>
  );
}
