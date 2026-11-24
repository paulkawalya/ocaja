"use client";

import { MapPin, Target, Telescope, ShieldCheck } from "lucide-react";
import { Icon } from "../icon";
import { Reveal, SectionHeading, CtaBand, Kicker } from "../ui-bits";
import { PageHeroSplit } from "../page-hero-split";
import { TeamPhotoShowcase } from "../team-photo-showcase";
import { HERO_PEOPLE_IMAGES, AFRICAN_TECH_SPECIALISTS } from "@/lib/page-images";
import { ABOUT, OFFICES, WHY_OCAJA, type Route } from "@/lib/ocaja-data";

export function AboutPage({ navigate }: { navigate: (r: Route) => void }) {
  const heroPeople = HERO_PEOPLE_IMAGES.about;

  return (
    <>
      <PageHeroSplit
        badge="About OCAJA Technologies · Uganda &amp; Zambia"
        title="One Regional Technology Partner. Six Specialised Practices."
        description="OCAJA Technologies is a privately held technology solutions and advisory firm serving organisations across Uganda and Zambia. We design, build, secure, integrate, and support digital solutions that help organisations work efficiently and strengthen resilience."
        buttonLabel="Talk to Our Leadership Team"
        onButtonClick={() => navigate({ name: "contact" })}
        heroImage={heroPeople}
      />

      {/* Who we are */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <Reveal>
            <Kicker>Who we are</Kicker>
            <p className="font-heading text-2xl font-bold leading-snug text-[#021a40]">
              A technology solutions and advisory company, accountable from initial discovery to continuous improvement.
            </p>
          </Reveal>
          <div className="space-y-5">
            {ABOUT.whoWeAre.map((p, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach + vision/mission */}
      <section className="bg-slate-50/70 py-20 md:py-24 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal className="h-full">
              <div className="h-full rounded-2xl bg-[#02183c] p-8 text-white shadow-lg">
                <Icon name="compass" className="h-7 w-7 text-[#2AE6FB]" />
                <h2 className="mt-5 font-heading text-xl font-bold">Our Approach</h2>
                <p className="mt-3 text-xs leading-relaxed text-white/75">
                  {ABOUT.approach}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="h-full">
              <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm">
                <Telescope className="h-7 w-7 text-[#1685f8]" strokeWidth={1.6} />
                <h2 className="mt-5 font-heading text-xl font-bold text-[#021a40]">
                  Vision
                </h2>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {ABOUT.vision}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16} className="h-full">
              <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-8 shadow-sm">
                <Target className="h-7 w-7 text-[#1685f8]" strokeWidth={1.6} />
                <h2 className="mt-5 font-heading text-xl font-bold text-[#021a40]">
                  Mission
                </h2>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  {ABOUT.mission}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <SectionHeading
          kicker="Core values"
          title="What we stand for"
          text="These values guide how we work with clients, how we design solutions and how we support systems over the long term."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ABOUT.values.map((v, i) => (
            <Reveal key={v.title} delay={0.07 * i} className="h-full">
              <div className="h-full rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#1685f8]/30 hover:shadow-lg">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#E9EEF7] text-[#021a40]">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#021a40]">
                  {v.title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-600">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* African Engineering Pods Showcase */}
      <TeamPhotoShowcase
        kicker="Our Regional Engineering Teams"
        title="10+ Years of In-House African Technology Stewardship"
        subtitle="Over a decade of trusted regional enterprise technology stewardship across Uganda and Zambia"
        imageUrl={heroPeople.imageUrl}
        imageAlt="African executive technology leaders and senior architects at OCAJA"
        badgeLabel="Dual Hubs: Crested Towers (UG) & Mass Media (ZM)"
        bullets={[
          "Over 45 permanent software engineers, DevOps practitioners, and ethical hackers",
          "Decade-long partnerships with regional financial institutions and logistics networks",
          "Zero outsourcing of core architecture, client data, or cybersecurity operations",
        ]}
      />

      {/* Senior African Practice Leads Grid */}
      <section className="bg-slate-50/80 py-20 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker="Practice Leadership"
            title="Meet Our Senior Architects & Directors"
            text="Experienced African technologists heading our six core engineering and advisory divisions across Kampala and Lusaka."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AFRICAN_TECH_SPECIALISTS.map((spec, i) => (
              <Reveal key={spec.name} delay={0.06 * i} className="h-full">
                <div className="group flex h-full items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1685f8]/30 hover:shadow-lg">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                    <img
                      src={spec.avatarUrl}
                      alt={spec.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="truncate font-heading text-sm font-bold text-[#021a40]">{spec.name}</h4>
                      <span className="rounded-full bg-[#E9EEF7] px-2 py-0.5 text-[9px] font-bold text-[#1685f8]">
                        {spec.location}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-600 line-clamp-1">{spec.role}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                      <ShieldCheck className="h-3 w-3" /> Practice Lead
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regional presence & offices */}
      <section className="border-t border-slate-200 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker="Offices"
            title="Kampala & Lusaka"
            text="Direct physical presence in East and Southern Africa, giving clients accessible, responsive local teams."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {OFFICES.map((o, i) => (
              <Reveal key={o.country} delay={0.08 * i}>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-8 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-2 font-heading text-lg font-bold text-[#021a40]">
                      <MapPin className="h-5 w-5 text-[#1685f8]" />
                      {o.city}, {o.country}
                    </p>
                    {o.note ? (
                      <span className="rounded-full bg-[#E9EEF7] px-3 py-1 text-xs font-bold uppercase text-[#1685f8]">
                        {o.note}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-600">{o.address}</p>
                  <p className="mt-2 text-xs font-semibold text-[#021a40]">{o.phones.join(" · ")}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={ABOUT.cta}
        text="Tell us what you are trying to achieve and we will recommend a practical path."
        buttonLabel="Contact Our Team"
        onNavigate={navigate}
      />
    </>
  );
}
