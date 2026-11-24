"use client";

import { MessageSquare, PhoneCall, Mail, Clock, CheckCircle2, ShieldCheck, Headphones } from "lucide-react";

/**
 * High-fidelity Solutions Architecture Intake & Contact Dashboard
 * Showcases rapid inquiry response, live consultation queue, and direct engineer escalation
 */
export function ContactIntakeDashboard() {
  return (
    <div className="flex h-[360px] w-full select-none bg-slate-900 text-[10px] leading-tight text-slate-200 sm:h-[440px] sm:text-xs font-sans">
      {/* Sidebar */}
      <div className="flex w-28 flex-col justify-between border-r border-slate-800 bg-[#061224] p-2.5 sm:w-36 sm:p-3.5">
        <div>
          <div className="flex items-center gap-1.5 pb-3 border-b border-slate-800">
            <span className="grid h-6 w-6 place-items-center rounded-lg bg-[#2AE6FB] text-[#02183c] font-bold text-xs shadow-md">
              <Headphones className="h-3.5 w-3.5" />
            </span>
            <div>
              <span className="block font-bold text-white">DirectDesk</span>
              <span className="block text-[8px] text-[#2AE6FB]">Solutions Intake</span>
            </div>
          </div>

          <div className="mt-3 space-y-1">
            {[
              { label: "Intake Queue", active: true },
              { label: "Arch Review", active: false },
              { label: "WhatsApp Desk", active: false },
              { label: "Phone Queue", active: false },
              { label: "SLA Escalation", active: false },
              { label: "Proposal Hub", active: false },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 font-medium transition-colors ${
                  item.active
                    ? "bg-[#2AE6FB]/20 text-[#2AE6FB] font-bold"
                    : "text-slate-400 hover:bg-slate-800"
                }`}
              >
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-lg bg-emerald-500/10 p-2 border border-emerald-500/30 text-[9px] text-emerald-300">
          <Clock className="h-3 w-3 text-emerald-400 animate-pulse" />
          <span>&lt; 2 Hr SLA Guaranteed</span>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex flex-1 flex-col overflow-hidden bg-[#09172f] p-3 sm:p-4">
        {/* Top bar */}
        <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
          <div>
            <h4 className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5">
              Live Architecture Consultation & Intake Desk
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[9px] font-semibold text-emerald-400 border border-emerald-500/30">
                14m Avg Response
              </span>
            </h4>
            <p className="text-[9px] text-slate-400">Direct escalation to Senior Solutions Architects and Practice Leads</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-[#2AE6FB]/10 px-2 py-1 font-mono text-[9px] text-[#2AE6FB] border border-[#2AE6FB]/30">
              Hotlines: Online 24/7
            </span>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="mt-3 grid grid-cols-4 gap-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Avg Response Time</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">14 Mins</span>
              <span className="text-[8px] font-semibold text-emerald-400">Well under SLA</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Free Assessment</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">100% Free</span>
              <span className="text-[8px] font-semibold text-[#2AE6FB]">No Obligation</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">NDA Protection</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">Standard</span>
              <span className="text-[8px] font-semibold text-emerald-400">Mutual NDA</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-2 sm:p-2.5">
            <span className="text-[9px] text-slate-400">Client Satisfaction</span>
            <div className="mt-0.5 flex items-baseline justify-between">
              <span className="font-bold text-white text-xs sm:text-sm">99.4%</span>
              <span className="text-[8px] font-semibold text-emerald-400">First Contact</span>
            </div>
          </div>
        </div>

        {/* Middle: Live Inquiries & Escalation channels */}
        <div className="mt-3 grid grid-cols-3 gap-2 flex-1 min-h-0">
          {/* Active Intake Streams */}
          <div className="col-span-2 rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white text-[10px] sm:text-xs">Active Architecture Intake Queue</span>
                <span className="text-[9px] text-[#2AE6FB] font-mono">Assigned to Lead Architects</span>
              </div>
              <div className="space-y-1.5 text-[9px]">
                {[
                  { title: "Core Banking Cloud Migration", client: "Regional SACCO", assigned: "Cloud Lead", status: "Reviewing Architecture" },
                  { title: "Cross-Border Fleet Telematics", client: "Logistics Fleet (60 Trucks)", assigned: "IoT Lead", status: "Scoping Sensors" },
                  { title: "ISO 27001 Security Audit", client: "FinTech Gateway", assigned: "CISO Practice", status: "Call Booked" },
                  { title: "URA EFRIS Integration Bridge", client: "FMCG Manufacturer", assigned: "Tax Specialist", status: "Specs Dispatched" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center justify-between rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1.5">
                    <div>
                      <span className="font-bold text-white">{item.title}</span>
                      <span className="block text-[8px] text-slate-400">{item.client} • {item.assigned}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-[#2AE6FB]/10 px-1.5 py-0.5 text-[8px] font-semibold text-[#2AE6FB] border border-[#2AE6FB]/20">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response guarantee note */}
            <div className="mt-1.5 pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px]">
              <span className="text-slate-400">Every message receives an engineer review within 2 hours</span>
              <span className="text-emerald-400 font-medium">Direct WhatsApp & phone lines routed to duty engineer</span>
            </div>
          </div>

          {/* Direct Contact Points Mini Panel */}
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 flex flex-col justify-between">
            <span className="font-bold text-white text-[10px] sm:text-xs">Direct Hotlines</span>
            <div className="mt-1 space-y-1.5 text-[9px]">
              <div className="rounded-lg bg-slate-900 p-2 border border-slate-800">
                <div className="flex items-center gap-1.5 font-bold text-emerald-400 mb-0.5">
                  <PhoneCall className="h-3 w-3" />
                  <span>Uganda Direct</span>
                </div>
                <span className="font-mono text-white text-[10px] font-bold block">+256 700 373 706</span>
                <span className="text-[8px] text-slate-400">WhatsApp & Direct Voice</span>
              </div>

              <div className="rounded-lg bg-slate-900 p-2 border border-slate-800">
                <div className="flex items-center gap-1.5 font-bold text-sky-400 mb-0.5">
                  <PhoneCall className="h-3 w-3" />
                  <span>Zambia Direct</span>
                </div>
                <span className="font-mono text-white text-[10px] font-bold block">+260 763 328 111</span>
                <span className="text-[8px] text-slate-400">WhatsApp & Direct Voice</span>
              </div>
            </div>

            <div className="mt-1 rounded-lg bg-[#2AE6FB]/10 p-1.5 border border-[#2AE6FB]/20 text-center">
              <span className="text-[8px] font-semibold text-[#2AE6FB]">info@ocajagroup.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Channels Chips */}
        <div className="mt-2.5 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/40 px-3 py-1.5 text-[9px]">
          <span className="font-medium text-slate-400">Intake Protocol:</span>
          <div className="flex flex-wrap gap-1.5">
            {["Mutual NDA", "Zero-Cost Audit", "Direct Engineer Access", "2-Hour SLA", "Kampala & Lusaka Time (EAT/CAT)"].map((tech) => (
              <span key={tech} className="rounded-md bg-[#2AE6FB]/10 px-1.5 py-0.5 text-cyan-200 border border-[#2AE6FB]/30">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
