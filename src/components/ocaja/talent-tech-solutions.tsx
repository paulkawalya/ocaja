"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Landmark,
  Truck,
  Building2,
  Users2,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Layers,
} from "lucide-react";
import type { Route } from "@/lib/ocaja-data";
import { cn } from "@/lib/utils";

interface IndustrySolution {
  id: string;
  title: string;
  subtitle: string;
  icon: typeof Landmark;
  desc: string;
  tag: string;
  metric: {
    value: string;
    label: string;
  };
  benefits: string[];
  compliance: string[];
  bgGradient: string;
}

const SOLUTIONS: IndustrySolution[] = [
  {
    id: "fintech",
    title: "FinTech & Banking",
    subtitle: "Digital banking, payments & middleware",
    icon: Landmark,
    desc: "Creating secure, scalable fintech platforms, mobile wallets, and multi-currency payment switches that empower commercial banks, SACCOs, and payment service providers across East & Southern Africa.",
    tag: "High Volume · URA & KYC Ready",
    metric: {
      value: "12.4M+",
      label: "Monthly Transactions Processed",
    },
    benefits: [
      "OneNode universal middleware & payment switch",
      "Instant mobile money settlements (MTN & Airtel)",
      "Automated e-tax fiscalization & real-time KYC verification",
      "99.99% high-availability core transaction routing",
    ],
    compliance: ["Bank of Uganda NPS", "Bank of Zambia Switch", "PCI-DSS Aligned", "ISO 8583"],
    bgGradient: "from-[#02183c] via-[#05265d] to-[#0a3479]",
  },
  {
    id: "logistics",
    title: "Logistics & Fleet",
    subtitle: "Telematics, fuel auditing & dispatch",
    icon: Truck,
    desc: "Delivering IoT sensor integration, real-time fleet telematics, automated fuel anti-siphon tracking, and cross-border transport dispatch platforms engineered for African transit corridors.",
    tag: "IoT & GPS Telematics",
    metric: {
      value: "142+",
      label: "Haulers & Fleet Units Monitored Live",
    },
    benefits: [
      "28% average fuel shrinkage & siphon loss reduction",
      "Offline dispatch caching for remote corridor deadzones",
      "Predictive maintenance alerts & driver safety scoring",
      "Ultrasonic fuel sensors and temperature cold-chain IoT",
    ],
    compliance: ["Northern Corridor Transit", "CAN-Bus J1939", "GPS/GLONASS Dual Lock", "GDP Pharma Cold Chain"],
    bgGradient: "from-[#031c44] via-[#083577] to-[#124d9e]",
  },
  {
    id: "public",
    title: "Public Sector & Gov",
    subtitle: "Accountability, portals & service delivery",
    icon: Building2,
    desc: "Supporting government ministries, agencies, and parastatals with robust electronic document management, citizen service portals, automated workflows, and auditable revenue systems.",
    tag: "Accountable & Auditable",
    metric: {
      value: "100%",
      label: "Audit Trail Integrity & DPPA Alignment",
    },
    benefits: [
      "Seamless integration with NIRA, URA EFRIS, and ZRA Smart Invoice",
      "Role-based access security with biometric multi-factor authentication",
      "High-throughput public citizen portals with mobile responsiveness",
      "Tamper-proof audit logging and immutable archive storage",
    ],
    compliance: ["DPPA Uganda 2019", "ZICTA Data Protection", "NITA-U Certified", "Public Procurement PPDA"],
    bgGradient: "from-[#021a40] via-[#072d6b] to-[#0d3f8f]",
  },
  {
    id: "ngo",
    title: "NGOs & Development",
    subtitle: "Supportable systems for distributed teams",
    icon: Users2,
    desc: "Deploying resilient digital platforms, offline-first field data collection tools, and managed IT infrastructure aligned with operational realities and grant donor reporting standards.",
    tag: "Field-Ready & Resilient",
    metric: {
      value: "99.8%",
      label: "Remote Field Operational Uptime",
    },
    benefits: [
      "Offline-first mobile survey & beneficiary verification tools",
      "Transparent software license optimization and donor budget tracking",
      "Low-bandwidth data synchronization over 2G/3G regional networks",
      "Responsive on-the-ground technical support in Kampala and Lusaka",
    ],
    compliance: ["USAID / EU Reporting Ready", "Offline SQLite Sync", "End-to-End Encryption", "GDPR / DPPA"],
    bgGradient: "from-[#04204d] via-[#093577] to-[#154fa7]",
  },
  {
    id: "sme",
    title: "Commercial & SMEs",
    subtitle: "ERP, CRM, cloud & cybersecurity",
    icon: Briefcase,
    desc: "Helping growing commercial enterprises streamline business operations, migrate to modern cloud platforms (Microsoft 365 / Google Workspace), and safeguard digital assets with 24/7 managed SOC defense.",
    tag: "Enterprise Modernization",
    metric: {
      value: "3.4x",
      label: "Average Digital Transformation ROI",
    },
    benefits: [
      "Centralized CRM sales pipelines and inventory tracking",
      "Managed multi-cloud migration with automated daily backups",
      "24/7 SOC endpoint monitoring and ransomware mitigation",
      "Predictable monthly SLA billing with dedicated account engineers",
    ],
    compliance: ["ISO 27001 Aligned", "Microsoft Cloud Partner", "Zero Trust Architecture", "Automated DR"],
    bgGradient: "from-[#02183c] via-[#0b3372] to-[#1a55b3]",
  },
];

export function TalentTechSolutions({ navigate }: { navigate: (r: Route) => void }) {
  const [activeId, setActiveId] = useState<string>("fintech");
  const activeSolution = SOLUTIONS.find((s) => s.id === activeId) ?? SOLUTIONS[0];
  const IconComponent = activeSolution.icon;

  return (
    <section className="bg-slate-50/70 py-24 sm:py-32 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1685f8]">
            Industry Focus &amp; Deployments
          </p>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-[#021a40] sm:text-4xl">
            Comprehensive Solutions For a Digital-First World
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Select an industry sector to inspect our tailored architectures, compliance baselines, and proven regional impact.
          </p>
        </div>

        {/* 5-Item Navigation Tabs (Balanced, Professional, Responsive) */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {SOLUTIONS.map((item) => {
            const isActive = activeId === item.id;
            const TabIcon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                className={cn(
                  "group flex cursor-pointer items-center gap-2.5 rounded-full px-5 py-3 text-xs font-bold transition-all duration-300",
                  isActive
                    ? "bg-[#021a40] text-white shadow-lg shadow-[#021a40]/25 ring-2 ring-[#2AE6FB]/60"
                    : "bg-white text-slate-700 hover:bg-slate-100 hover:text-[#021a40] border border-slate-200/90 shadow-xs"
                )}
              >
                <span
                  className={cn(
                    "grid h-6 w-6 place-items-center rounded-lg transition-colors",
                    isActive
                      ? "bg-[#2AE6FB]/20 text-[#2AE6FB]"
                      : "bg-slate-100 text-slate-500 group-hover:bg-[#1685f8]/10 group-hover:text-[#1685f8]"
                  )}
                >
                  <TabIcon className="h-3.5 w-3.5" />
                </span>
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Spotlight Enterprise Solution Card (Balanced 2-Column Layout) */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolution.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className={cn(
                "relative overflow-hidden rounded-3xl p-7 text-white shadow-2xl sm:p-10 lg:p-12",
                `bg-gradient-to-br ${activeSolution.bgGradient}`
              )}
            >
              {/* Subtle ambient lighting */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#2AE6FB]/15 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#1685f8]/20 blur-3xl"
              />

              <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
                {/* Left Column: Narrative, Capabilities & CTA */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#2AE6FB]/40 bg-[#2AE6FB]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2AE6FB]">
                    <Sparkles className="h-3 w-3" />
                    <span>{activeSolution.tag}</span>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-[#2AE6FB] border border-white/10">
                      <IconComponent className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {activeSolution.title}
                      </h3>
                      <p className="text-xs text-white/70">{activeSolution.subtitle}</p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-white/85 sm:text-base">
                    {activeSolution.desc}
                  </p>

                  {/* Key Capabilities */}
                  <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {activeSolution.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-2.5 text-xs text-white/90">
                        <CheckCircle2 className="h-4 w-4 text-[#2AE6FB] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => navigate({ name: "sectors" })}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-[#00b4db] to-[#0083b0] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#00b4db]/30 transition-all hover:brightness-110"
                    >
                      <span>Explore Sector Solutions</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate({ name: "contact" })}
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
                    >
                      <span>Talk to Sector Lead</span>
                    </button>
                  </div>
                </div>

                {/* Right Column: Key Performance Indicator & Compliance Matrix */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  {/* Metric Card */}
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs text-white/70">
                      <span>Proven Regional Performance</span>
                      <TrendingUp className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div className="mt-2 text-3xl font-extrabold text-white sm:text-4xl font-heading">
                      {activeSolution.metric.value}
                    </div>
                    <p className="mt-1 text-xs text-white/80">{activeSolution.metric.label}</p>
                  </div>

                  {/* Standards & Compliance */}
                  <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#2AE6FB] uppercase tracking-wider mb-3">
                      <ShieldCheck className="h-4 w-4" />
                      <span>Regulatory Standards Aligned</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeSolution.compliance.map((c) => (
                        <span
                          key={c}
                          className="rounded-lg bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/90 border border-white/10"
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/70">
                      <span>Deployment Footprint:</span>
                      <span className="font-semibold text-emerald-300">Uganda &amp; Zambia</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 5-Card Overview Row (Balanced Thumbnail Previews) */}
        <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {SOLUTIONS.map((s) => {
            const isSelected = activeId === s.id;
            const CardIcon = s.icon;

            return (
              <div
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={cn(
                  "cursor-pointer rounded-2xl p-4 transition-all duration-300 border text-left flex flex-col justify-between",
                  isSelected
                    ? "bg-[#02183c] border-[#2AE6FB]/60 text-white shadow-md ring-2 ring-[#2AE6FB]/40"
                    : "bg-white border-slate-200/90 text-slate-800 hover:border-[#1685f8]/40 hover:shadow-md"
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span
                      className={cn(
                        "grid h-8 w-8 place-items-center rounded-lg",
                        isSelected
                          ? "bg-[#2AE6FB]/20 text-[#2AE6FB]"
                          : "bg-[#E9EEF7] text-[#021a40]"
                      )}
                    >
                      <CardIcon className="h-4 w-4" />
                    </span>
                    {isSelected ? (
                      <span className="h-2 w-2 rounded-full bg-[#2AE6FB] animate-pulse" />
                    ) : null}
                  </div>
                  <h4
                    className={cn(
                      "font-heading text-sm font-bold leading-tight",
                      isSelected ? "text-white" : "text-[#021a40]"
                    )}
                  >
                    {s.title}
                  </h4>
                  <p
                    className={cn(
                      "mt-1 text-[11px] line-clamp-2",
                      isSelected ? "text-white/70" : "text-slate-500"
                    )}
                  >
                    {s.subtitle}
                  </p>
                </div>
                <div
                  className={cn(
                    "mt-3 pt-2 text-[10px] font-bold uppercase tracking-wider flex items-center justify-between border-t",
                    isSelected
                      ? "border-white/10 text-[#2AE6FB]"
                      : "border-slate-100 text-[#1685f8]"
                  )}
                >
                  <span>{isSelected ? "Active View" : "Select"}</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
