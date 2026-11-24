"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CONSULTATION_BENEFITS } from "@/data/benchmark-data";
import { SectionHeading, Reveal } from "./ui-bits";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Send, Check, ShieldCheck, Sparkles, Loader2 } from "lucide-react";
import { PILLARS } from "@/lib/ocaja-data";

export function ConsultationSection() {
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(PILLARS[0].title);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          organisation,
          email,
          phone,
          service,
          message: message || "Requesting Free IT Solutions & Architecture Framework Review",
        }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        setSubmitted(true);
      } else {
        setError(data.error || "Unable to send your request. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultation" className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-navy/15 bg-white shadow-2xl">
          <div className="grid lg:grid-cols-12">
            {/* Left information column */}
            <div className="bg-[linear-gradient(150deg,#0C1F4A_0%,#17336B_50%,#20438F_100%)] p-8 text-white sm:p-12 lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                <Sparkles className="h-3.5 w-3.5" />
                Free Architecture Assessment
              </span>

              <h3 className="mt-6 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Get Your Free IT Solutions & Architecture Framework
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/80">
                Schedule a confidential consultation with our principal technology consultants. We evaluate your current systems, integration dependencies, and provide a clear implementation roadmap.
              </p>

              <div className="mt-8 space-y-3.5">
                {CONSULTATION_BENEFITS.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2.5 text-xs text-white/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-xs text-white/70">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>Strict NDA & Data Confidentiality</span>
                </div>
                <p className="mt-1 text-[0.7rem] text-white/60">
                  Your project scope and technical requirements are kept strictly confidential under professional engineering standards.
                </p>
              </div>
            </div>

            {/* Right form column */}
            <div className="p-8 sm:p-12 lg:col-span-7">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="h-8 w-8" />
                  </div>
                  <h4 className="mt-5 font-heading text-2xl font-bold text-navy-deep">
                    Request Received
                  </h4>
                  <p className="mt-2 max-w-md text-sm text-slate-600">
                    Thank you. One of our senior technology advisors will review your requirements and reach out within 24 business hours to schedule your session.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setPhone("");
                      setOrganisation("");
                      setMessage("");
                    }}
                    className="mt-6 rounded-full bg-navy text-xs font-semibold uppercase tracking-wider text-white"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="font-heading text-xl font-bold text-navy-deep">
                    Tell Us About Your Project
                  </h4>
                  <p className="text-xs text-slate-500">
                    Fill out the form below to receive expert recommendations tailored to your operational budget and technical goals.
                  </p>

                  {error ? (
                    <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs font-medium text-rose-700">
                      {error}
                    </div>
                  ) : null}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-[0.72rem] font-bold uppercase tracking-wider text-slate-600">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. David Mukasa"
                        className="mt-1 h-11 rounded-xl text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[0.72rem] font-bold uppercase tracking-wider text-slate-600">
                        Work Email *
                      </label>
                      <Input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="david@company.com"
                        className="mt-1 h-11 rounded-xl text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-[0.72rem] font-bold uppercase tracking-wider text-slate-600">
                        Phone Number
                      </label>
                      <Input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+256 700 000000"
                        className="mt-1 h-11 rounded-xl text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[0.72rem] font-bold uppercase tracking-wider text-slate-600">
                        Organisation / Company
                      </label>
                      <Input
                        value={organisation}
                        onChange={(e) => setOrganisation(e.target.value)}
                        placeholder="Company Ltd"
                        className="mt-1 h-11 rounded-xl text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[0.72rem] font-bold uppercase tracking-wider text-slate-600">
                      Primary Service Pillar of Interest
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="mt-1 flex h-11 w-full rounded-xl border border-input bg-transparent px-3 py-2 text-xs shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      {PILLARS.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[0.72rem] font-bold uppercase tracking-wider text-slate-600">
                      Project Overview & Current Challenges
                    </label>
                    <Textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe what your organization is seeking to build, integrate, migrate, or secure..."
                      className="mt-1 rounded-xl text-xs"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="h-12 w-full cursor-pointer rounded-xl bg-navy text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-navy-dark"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="h-4 w-4" />
                        Request Free Solutions Framework
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
