"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, Globe, MapPin, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal, Kicker } from "../ui-bits";
import { PageHeroSplit } from "../page-hero-split";
import { HERO_PEOPLE_IMAGES } from "@/lib/page-images";
import {
  PILLARS,
  OFFICES,
  CONTACT_EMAIL,
  CONTACT_WEB,
  type Route,
} from "@/lib/ocaja-data";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactPage({ navigate }: { navigate: (r: Route) => void }) {
  const heroPeople = HERO_PEOPLE_IMAGES.contact;
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [service, setService] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      organisation: String(fd.get("organisation") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      service,
      message: String(fd.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setErrorMsg("Please fill in your name, email and message.");
      setState("error");
      return;
    }

    setState("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setState("success");
      form.reset();
      setService("");
    } catch {
      setErrorMsg("Something went wrong. Please try again, or email us directly.");
      setState("error");
    }
  }

  return (
    <>
      <PageHeroSplit
        badge="Direct Access · Kampala &amp; Lusaka"
        title="Let's Connect &amp; Architect Your Digital Solution"
        description="Tell us what your organization is trying to achieve. Our senior technology advisors evaluate current systems, integration dependencies, security risks, and budget parameters to recommend a practical path forward."
        buttonLabel="Explore Offices &amp; Form"
        onButtonClick={() => {
          const el = document.getElementById("contact-section");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        heroImage={heroPeople}
      />

      <section id="contact-section" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          {/* Form */}
          <Reveal>
            <div className="rounded-[1.5rem] border border-[#E7E9F0] bg-white p-6 shadow-[0_24px_60px_-30px_rgba(12,31,74,0.3)] sm:p-9">
              {state === "success" ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-navy-tint">
                    <CheckCircle2 className="h-8 w-8 text-navy" strokeWidth={1.75} />
                  </span>
                  <h2 className="mt-6 font-heading text-2xl font-bold text-navy-deep">
                    Message received
                  </h2>
                  <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-ojagray">
                    Thank you for reaching out. Our team will review your enquiry and get back
                    to you shortly.
                  </p>
                  <Button
                    onClick={() => setState("idle")}
                    variant="outline"
                    className="mt-7 h-11 cursor-pointer rounded-full border-navy/25 px-6 text-[0.88rem] font-semibold text-navy hover:bg-navy-tint hover:text-navy-deep"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate={false}>
                  <Kicker>Send us a message</Kicker>
                  <div className="mt-2 grid gap-5 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <Label htmlFor="name">
                        Name <span className="text-navy">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                        className="h-11 rounded-xl border-[#E1E4EC] bg-mist/60 focus-visible:ring-navy/30"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="organisation">Organisation</Label>
                      <Input
                        id="organisation"
                        name="organisation"
                        placeholder="Company or institution"
                        className="h-11 rounded-xl border-[#E1E4EC] bg-mist/60 focus-visible:ring-navy/30"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">
                        Email <span className="text-navy">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@organisation.com"
                        required
                        className="h-11 rounded-xl border-[#E1E4EC] bg-mist/60 focus-visible:ring-navy/30"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+256 ..."
                        className="h-11 rounded-xl border-[#E1E4EC] bg-mist/60 focus-visible:ring-navy/30"
                      />
                    </div>
                    <div className="grid gap-2 sm:col-span-2">
                      <Label>Service of interest</Label>
                      <Select value={service} onValueChange={setService}>
                        <SelectTrigger className="h-11 w-full cursor-pointer rounded-xl border-[#E1E4EC] bg-mist/60 data-[placeholder]:text-muted-foreground">
                          <SelectValue placeholder="Select a pillar (optional)" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-[#E7E9F0]">
                          {PILLARS.map((p) => (
                            <SelectItem
                              key={p.id}
                              value={p.menuTitle}
                              className="cursor-pointer rounded-lg"
                            >
                              {p.num} · {p.menuTitle}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2 sm:col-span-2">
                      <Label htmlFor="message">
                        Message <span className="text-navy">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        placeholder="Tell us what you are trying to achieve…"
                        className="resize-none rounded-xl border-[#E1E4EC] bg-mist/60 focus-visible:ring-navy/30"
                      />
                    </div>
                  </div>

                  {state === "error" ? (
                    <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-[0.85rem] font-medium text-red-700">
                      {errorMsg}
                    </p>
                  ) : null}

                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <Button
                      type="submit"
                      disabled={state === "sending"}
                      className="h-12 cursor-pointer rounded-full bg-navy px-8 text-[0.92rem] font-semibold text-white shadow-lg shadow-navy/25 transition-all hover:-translate-y-0.5 hover:bg-navy-deep disabled:translate-y-0 disabled:opacity-70"
                    >
                      {state === "sending" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <p className="text-[0.78rem] leading-relaxed text-ojagray">
                      We reply to enquiries within one business day.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info panel */}
          <Reveal delay={0.1}>
            <div className="space-y-4">
              {/* On-Duty African Architect Consultation Card */}
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={heroPeople.imageUrl}
                    alt="African Senior Solutions Architect reviewing enterprise systems"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#02183c] via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300 backdrop-blur-md border border-emerald-500/40">
                    ● Direct Engineering Escalation
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-heading text-sm font-bold text-[#021a40]">
                    Direct Access to Senior Solutions Architects
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    No middlemen or sales reps. Your inquiry is reviewed directly by our engineering leads in Kampala and Lusaka.
                  </p>
                </div>
              </div>

              <div className="hero-grid rounded-[1.5rem] bg-[linear-gradient(140deg,#0C1F4A,#20438F)] p-7 text-white">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/55">
                  Reach us directly
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-4 flex items-center gap-3 text-[0.95rem] font-medium text-white transition-opacity hover:opacity-80"
                >
                  <Mail className="h-4.5 w-4.5 text-white/70" />
                  {CONTACT_EMAIL}
                </a>
                <span className="mt-2.5 flex items-center gap-3 text-[0.95rem] font-medium text-white">
                  <Globe className="h-4.5 w-4.5 text-white/70" />
                  {CONTACT_WEB}
                </span>
              </div>

              {OFFICES.map((o) => (
                <div
                  key={o.country}
                  className="rounded-[1.5rem] border border-[#E7E9F0] bg-white p-7"
                >
                  <p className="flex items-center gap-2.5 font-heading text-[1.05rem] font-semibold text-navy-deep">
                    <MapPin className="h-4.5 w-4.5 text-navy" />
                    {o.city}, {o.country}
                    {o.note ? (
                      <span className="rounded-full bg-navy-tint px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wider text-navy">
                        {o.note}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-ojagray">{o.address}</p>
                  <div className="mt-4 space-y-1.5">
                    {o.phones.map((ph) => (
                      <a
                        key={ph}
                        href={`tel:${ph.replace(/\s/g, "")}`}
                        className="flex items-center gap-2.5 text-[0.88rem] font-medium text-navy-deep transition-colors hover:text-navy"
                      >
                        <Phone className="h-3.5 w-3.5 text-navy/50" />
                        {ph}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
