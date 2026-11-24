"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface TechGroup {
  id: string;
  tabLabel: string;
  headline: string;
  description: string;
  technologies: { name: string; tag: string; detail: string }[];
}

const GROUPS: TechGroup[] = [
  {
    id: "web",
    tabLabel: "Web Development",
    headline: "Web Development That Boosts Conversions Fast",
    description:
      "At OCAJA, we craft custom, high-performance web platforms and progressive web apps powered by future-ready technologies. Our scalable, responsive architectures enhance engagement, elevate conversion rates, and stand up to rigorous security audits.",
    technologies: [
      { name: "Next.js", tag: "Framework", detail: "Server-side rendering & optimized edge caching" },
      { name: "React", tag: "UI Library", detail: "Component-driven responsive architectures" },
      { name: "TypeScript", tag: "Language", detail: "Strict type-safety across client and server" },
      { name: "Tailwind CSS", tag: "Styling", detail: "Utility-first modern design systems" },
      { name: "Progressive Web Apps", tag: "PWA", detail: "Offline support for low-bandwidth zones" },
      { name: "Node.js & Express", tag: "Backend", detail: "High-throughput asynchronous APIs" },
    ],
  },
  {
    id: "mobile",
    tabLabel: "Mobile App Development",
    headline: "Mobile Applications Optimized for Speed & Reliability",
    description:
      "We build seamless iOS and Android applications engineered for fluid user journeys, instant biometric authentication, and offline transactional synchronization across diverse mobile devices in Africa.",
    technologies: [
      { name: "Flutter", tag: "Cross-Platform", detail: "High-speed unified iOS & Android apps" },
      { name: "React Native", tag: "Mobile UI", detail: "Native-feel experiences with shared logic" },
      { name: "Kotlin & Swift", tag: "Native", detail: "Platform-specific deep hardware integration" },
      { name: "SQLite & Room", tag: "Offline Storage", detail: "Local database caching when disconnected" },
      { name: "Push & Firebase", tag: "Notifications", detail: "Instant transactional push alerts" },
      { name: "Biometric Auth", tag: "Security", detail: "Fingerprint & Face ID KYC protection" },
    ],
  },
  {
    id: "ai",
    tabLabel: "AI & ML",
    headline: "AI & ML Solutions Driving Insights and Automation",
    description:
      "We cut through the hype to deliver practical AI: automating high-volume document workflows, building intelligent conversational assistants, and extracting clear operational patterns from historical business data.",
    technologies: [
      { name: "OpenAI & Gemini APIs", tag: "LLMs", detail: "Context-aware enterprise copilots" },
      { name: "LangChain & Vector DBs", tag: "RAG Ops", detail: "Retrieval over proprietary company documents" },
      { name: "Python / PyTorch", tag: "Deep Learning", detail: "Custom predictive models & neural nets" },
      { name: "OCR & Document AI", tag: "Extraction", detail: "Automated invoice & form processing" },
      { name: "Pandas & Scikit-learn", tag: "Analytics", detail: "Cohort analysis & trend forecasting" },
      { name: "Route Optimization AI", tag: "Telematics", detail: "Dynamic fleet routing & fuel savings" },
    ],
  },
  {
    id: "devops",
    tabLabel: "DevOps & Cloud",
    headline: "DevOps Ensuring Faster, Reliable Software Delivery",
    description:
      "Our certified cloud architects migrate legacy workloads, automate CI/CD pipelines, and manage cloud infrastructures across AWS, Azure, and Google Cloud with strict zero-downtime guarantees.",
    technologies: [
      { name: "Amazon Web Services (AWS)", tag: "Cloud", detail: "Multi-AZ VPCs, ECS, S3, & RDS setups" },
      { name: "Microsoft Azure", tag: "Enterprise", detail: "Active Directory, App Services & Hybrid VM" },
      { name: "Google Cloud (GCP)", tag: "Cloud", detail: "BigQuery analytics & GKE clusters" },
      { name: "Docker & Kubernetes", tag: "Containers", detail: "Containerized elastic microservices" },
      { name: "Terraform", tag: "IaC", detail: "Repeatable infrastructure as code" },
      { name: "GitHub Actions", tag: "CI/CD", detail: "Automated testing, linting, & deployments" },
    ],
  },
  {
    id: "fintech",
    tabLabel: "FinTech & Integrations",
    headline: "African Payment Rails with Banking-Grade Security",
    description:
      "We connect enterprises to the African financial ecosystem: direct mobile money APIs, automated URA tax fiscalization, Pesapal, Flutterwave, and multi-currency cross-border settlement switches.",
    technologies: [
      { name: "MTN Mobile Money API", tag: "Telco", detail: "Direct collection & disbursement switch" },
      { name: "Airtel Money API", tag: "Telco", detail: "Automated wallet webhook listeners" },
      { name: "URA EFRIS APIs", tag: "Fiscal", detail: "Real-time electronic fiscal receipting" },
      { name: "Pesapal & Flutterwave", tag: "Gateways", detail: "Multi-card & QR merchant checkouts" },
      { name: "OneNode Switch", tag: "Middleware", detail: "Inter-bank & SACCO routing switch" },
      { name: "USSD & SMS OTP", tag: "Accessibility", detail: "Feature-phone two-factor authentication" },
    ],
  },
  {
    id: "databases",
    tabLabel: "Databases & Security",
    headline: "Database Solutions Ensuring Performance & Compliance",
    description:
      "We architect high-availability relational databases, Redis caching layers, and continuous 24/7 SIEM monitoring ensuring total protection under Uganda DPPA and international data standards.",
    technologies: [
      { name: "PostgreSQL", tag: "Relational", detail: "ACID transactions & enterprise data models" },
      { name: "Redis", tag: "In-Memory", detail: "Microsecond session and cache acceleration" },
      { name: "Prisma ORM", tag: "Type-Safe DB", detail: "Strict schema migrations & query safety" },
      { name: "24/7 SIEM SOC", tag: "Threat Hunter", detail: "Continuous log ingestion & defense" },
      { name: "End-to-End Encryption", tag: "Crypto", detail: "mTLS in transit and AES-256 at rest" },
      { name: "Ethical Pen Testing", tag: "Compliance", detail: "Rigorous vulnerability assessments" },
    ],
  },
];

export function TalentTechStack() {
  const [activeTab, setActiveTab] = useState<string>("web");

  const currentGroup = GROUPS.find((g) => g.id === activeTab) || GROUPS[0];

  return (
    <section className="bg-slate-50/70 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#1685f8]">
            We partner with you to build a smarter future
          </p>
          <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-[#021a40] sm:text-4xl">
            Core TechStack Used
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            Modern, maintainable technologies proven in high-throughput enterprise production environments.
          </p>
        </div>

        {/* Tab Pills (Talentelgia Style) */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {GROUPS.map((g) => {
            const isActive = activeTab === g.id;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => setActiveTab(g.id)}
                className={cn(
                  "cursor-pointer rounded-full px-5 py-2.5 text-xs font-bold tracking-wide transition-all duration-200",
                  isActive
                    ? "bg-[#021a40] text-white shadow-lg shadow-[#021a40]/25 scale-105"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-[#1685f8]/40 hover:bg-slate-50"
                )}
              >
                {g.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentGroup.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xl sm:p-12"
            >
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                {/* Left Description Column */}
                <div className="lg:col-span-5">
                  <span className="rounded-full bg-[#E9EEF7] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-[#1685f8]">
                    {currentGroup.tabLabel}
                  </span>

                  <h3 className="mt-4 font-heading text-2xl font-bold leading-snug text-[#021a40] sm:text-3xl">
                    {currentGroup.headline}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {currentGroup.description}
                  </p>

                  <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Production-Tested Architecture
                    </div>
                    <p className="mt-1 text-xs text-emerald-700">
                      All components deployed with automated security hardening and disaster recovery protocols.
                    </p>
                  </div>
                </div>

                {/* Right Technologies Grid */}
                <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                  {currentGroup.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/60 p-5 transition-all duration-200 hover:border-[#1685f8]/30 hover:bg-white hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-heading text-base font-bold text-[#021a40] group-hover:text-[#1685f8] transition-colors">
                          {tech.name}
                        </h4>
                        <span className="rounded bg-white px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-slate-500 border border-slate-200">
                          {tech.tag}
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600">
                        {tech.detail}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-[0.68rem] font-medium text-emerald-600">
                        <Check className="h-3.5 w-3.5" />
                        <span>Active in production</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
