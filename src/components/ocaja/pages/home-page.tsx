"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "../icon";
import {
  Reveal,
  SectionHeading,
  PillarCard,
  CtaBand,
  TextLink,
} from "../ui-bits";
import { MapPin } from "lucide-react";
import {
  PILLARS,
  STAGES,
  PRODUCTS,
  WHY_OCAJA,
  SECTORS,
  OFFICES,
  HOME,
  type Route,
} from "@/lib/ocaja-data";

/* ================= Hero ================= */

function Hero({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(150deg,#0C1F4A_0%,#17336B_45%,#20438F_78%,#2C51A3_100%)]">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-[#3D5CA3]/40 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 right-[8%] h-[420px] w-[420px] rounded-full bg-white/10 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-0 pt-32 sm:px-8 md:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Copy */}
          <div className="pb-10 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.07] px-4 py-1.5 text-[0.75rem] font-medium tracking-wide text-white/85"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              {HOME.heroKicker}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-6 max-w-xl font-heading text-[2.6rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl"
            >
              Six Pillars.
              <br />
              <span className="text-white/60">One Technology Partner.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-white/80"
            >
              {HOME.heroSub}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.9rem] font-medium text-white/65"
            >
              {["Secure.", "Scalable.", "Practical technology solutions built for the way organisations operate."].map(
                (t) => (
                  <span key={t} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-white/50" />
                    {t}
                  </span>
                )
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-9 flex flex-wrap items-center gap-3.5"
            >
              <Button
                onClick={() => navigate({ name: "services" })}
                className="h-12 cursor-pointer rounded-full bg-white px-7 text-[0.92rem] font-semibold text-navy-deep shadow-xl shadow-navy-deep/40 transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => navigate({ name: "contact" })}
                variant="outline"
                className="h-12 cursor-pointer rounded-full border-white/35 bg-white/5 px-7 text-[0.92rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/15 hover:text-white"
              >
                Talk to Our Team
              </Button>
            </motion.div>
          </div>

          {/* Six-numbered-unit motif */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative hidden pb-16 lg:block"
            aria-hidden="true"
          >
            <div className="grid grid-cols-2 gap-4">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.id}
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 4.5 + (i % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.35,
                  }}
                  className={`rounded-2xl border border-white/15 bg-white/[0.07] p-4 backdrop-blur-sm ${
                    i % 2 === 1 ? "translate-y-5" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-white">
                      <Icon name={p.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <span className="num-outline-light font-heading text-2xl font-extrabold">
                      {p.num}
                    </span>
                  </div>
                  <p className="mt-3 text-[0.85rem] font-semibold leading-snug text-white/90">
                    {p.menuTitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 gap-y-6 border-t border-white/10 py-8 md:grid-cols-4"
        >
          {[
            ["6", "Specialist practices"],
            ["2", "Offices — Kampala & Lusaka"],
            ["5", "Client sectors supported"],
            ["24/7", "Security monitoring"],
          ].map(([v, l]) => (
            <div key={l} className="text-center md:text-left">
              <dt className="sr-only">{l}</dt>
              <dd className="font-heading text-3xl font-extrabold text-white">{v}</dd>
              <dd className="mt-1 text-[0.8rem] font-medium text-white/55">{l}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

/* ================= Intro ================= */

function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
      <div className="grid items-start gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <Reveal>
          <h2 className="max-w-2xl font-heading text-[1.75rem] font-bold leading-[1.2] tracking-tight text-navy-deep sm:text-[2.3rem]">
            {HOME.introHeading}
          </h2>
          <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-ojagray">
            {HOME.intro}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="space-y-3.5">
            {OFFICES.map((o) => (
              <div
                key={o.country}
                className="flex items-center gap-4 rounded-2xl border border-[#E7E9F0] bg-white p-5 shadow-[0_10px_30px_-18px_rgba(12,31,74,0.25)]"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-tint text-navy">
                  <MapPin className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-[0.95rem] font-semibold text-navy-deep">
                    {o.city}, {o.country}
                    {o.note ? (
                      <span className="ml-2 rounded-full bg-navy-tint px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider text-navy">
                        {o.note}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-0.5 text-[0.82rem] text-ojagray">{o.address}</p>
                </div>
              </div>
            ))}
            <p className="px-1 text-[0.8rem] leading-relaxed text-ojagray">
              Serving organisations across Uganda and Zambia, with an understanding of the
              wider East and Southern African operating environment.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= Six pillars ================= */

function Pillars({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <section className="bg-mist py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="What we do"
          title={HOME.pillarsHeading}
          text="Six complementary practices, one accountable partner — delivered through the same engagement and support model."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.id} delay={0.06 * i} className="h-full">
              <PillarCard
                num={p.num}
                title={p.title}
                text={p.tagline}
                iconNode={<Icon name={p.icon} className="h-[22px] w-[22px]" />}
                onClick={() => navigate({ name: "pillar", pillarId: p.id })}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= How we work ================= */

function HowWeWork({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
      <SectionHeading
        kicker="How we work"
        title={HOME.howHeading}
        text="Every engagement follows four practical stages that align requirements, manage delivery risk and create a clear path to ongoing support."
      />
      <div className="relative mt-12">
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-7 hidden border-t-2 border-dashed border-navy/15 lg:block"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STAGES.map((s, i) => (
            <Reveal key={s.num} delay={0.08 * i}>
              <div className="relative">
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-navy font-heading text-lg font-bold text-white shadow-lg shadow-navy/25">
                  {s.num}
                </span>
                <h3 className="mt-5 font-heading text-[1.1rem] font-semibold text-navy-deep">
                  {s.title}
                </h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-ojagray">{s.what}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <Reveal className="mt-10">
        <TextLink onClick={() => navigate({ name: "how-we-work" })}>
          See what each stage delivers
        </TextLink>
      </Reveal>
    </section>
  );
}

/* ================= Featured solutions ================= */

function FeaturedSolutions({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <section className="bg-navy-deep py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            light
            kicker="Featured solutions"
            title={HOME.featuredHeading}
            text="Products designed and built by OCAJA, in use across fleet management, logistics and customer relationship management."
          />
          <Reveal delay={0.1}>
            <Button
              onClick={() => navigate({ name: "solutions" })}
              variant="outline"
              className="h-11 cursor-pointer rounded-full border-white/30 bg-transparent px-6 text-[0.88rem] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
            >
              See All Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PRODUCTS.map((s, i) => (
            <Reveal key={s.name} delay={0.08 * i} className="h-full">
              <button
                type="button"
                onClick={() => navigate({ name: "solutions" })}
                className="group flex h-full w-full cursor-pointer flex-col rounded-2xl border border-white/12 bg-white/[0.06] p-7 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/[0.1]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-white">
                  <Icon name={s.icon} className="h-[22px] w-[22px]" />
                </span>
                <h3 className="mt-5 font-heading text-[1.15rem] font-semibold text-white">
                  {s.name}
                </h3>
                <p className="mt-2.5 flex-1 text-[0.9rem] leading-relaxed text-white/65">
                  {s.text}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-white/80">
                  View solution
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Why OCAJA ================= */

function WhyOcaja() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
      <SectionHeading
        kicker="Why OCAJA"
        title="Why organisations choose OCAJA"
        text="One partner that understands the region, stays independent and stays accountable from first workshop to ongoing support."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_OCAJA.map((w, i) => (
          <Reveal key={w.title} delay={0.05 * i} className="h-full">
            <div className="flex h-full gap-4 rounded-2xl border border-[#E7E9F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy/25 hover:shadow-[0_20px_40px_-18px_rgba(32,67,143,0.2)]">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-tint text-navy">
                <Icon name={w.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-heading text-[0.98rem] font-semibold leading-snug text-navy-deep">
                  {w.title}
                </h3>
                <p className="mt-1.5 text-[0.86rem] leading-relaxed text-ojagray">{w.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ================= Sectors ================= */

function Sectors({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <section className="border-y border-navy-tint bg-mist py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Sectors"
          title="Sectors we support"
          text="Our services adapt to different operating environments and organisational sizes."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SECTORS.map((s, i) => (
            <Reveal key={s.name} delay={0.05 * i} className="h-full">
              <button
                type="button"
                onClick={() => navigate({ name: "sectors" })}
                className="group flex h-full w-full cursor-pointer flex-col rounded-2xl border border-[#E7E9F0] bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_18px_36px_-16px_rgba(32,67,143,0.18)]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-navy-tint text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                  <Icon name={s.icon} className="h-[18px] w-[18px]" />
                </span>
                <h3 className="mt-4 font-heading text-[0.92rem] font-semibold leading-snug text-navy-deep">
                  {s.name}
                </h3>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Page ================= */

export function HomePage({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <>
      <Hero navigate={navigate} />
      <Intro />
      <Pillars navigate={navigate} />
      <HowWeWork navigate={navigate} />
      <FeaturedSolutions navigate={navigate} />
      <WhyOcaja />
      <Sectors navigate={navigate} />
      <CtaBand
        title={HOME.ctaHeading}
        text={HOME.ctaText}
        buttonLabel="Contact Us"
        onNavigate={navigate}
      />
    </>
  );
}
