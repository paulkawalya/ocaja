"use client";

import { useCallback, useEffect, useState } from "react";
import { SiteHeader } from "@/components/ocaja/site-header";
import { SiteFooter } from "@/components/ocaja/site-footer";
import { CookieConsent } from "@/components/ocaja/cookie-consent";
import { SideContactDock } from "@/components/ocaja/side-contact-dock";
import { HomePage } from "@/components/ocaja/pages/home-page";
import { AboutPage } from "@/components/ocaja/pages/about-page";
import { ServicesPage } from "@/components/ocaja/pages/services-page";
import { PillarPage } from "@/components/ocaja/pages/pillar-page";
import { SolutionsPage } from "@/components/ocaja/pages/solutions-page";
import { SectorsPage } from "@/components/ocaja/pages/sectors-page";
import { HowWeWorkPage } from "@/components/ocaja/pages/how-we-work-page";
import { ContactPage } from "@/components/ocaja/pages/contact-page";
import {
  PILLARS,
  SEO,
  type Route,
} from "@/lib/ocaja-data";

function seoFor(route: Route): { title: string; desc: string } {
  switch (route.name) {
    case "pillar": {
      const p = PILLARS.find((x) => x.id === route.pillarId);
      return p ? { title: p.seoTitle, desc: p.seoDesc } : SEO.services;
    }
    default:
      return SEO[route.name];
  }
}

export default function Page() {
  const [view, setView] = useState<Route>({ name: "home" });

  const navigate = useCallback((r: Route) => {
    setView(r);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  // Per-view SEO (title tags & meta descriptions from the content document)
  useEffect(() => {
    const seo = seoFor(view);
    document.title = seo.title;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = seo.desc;
  }, [view]);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader view={view} navigate={navigate} />
      <main className="flex-1">
        {view.name === "home" ? <HomePage navigate={navigate} /> : null}
        {view.name === "about" ? <AboutPage navigate={navigate} /> : null}
        {view.name === "services" ? <ServicesPage navigate={navigate} /> : null}
        {view.name === "pillar" ? (
          <PillarPage key={view.pillarId} pillarId={view.pillarId} navigate={navigate} />
        ) : null}
        {view.name === "solutions" ? <SolutionsPage navigate={navigate} /> : null}
        {view.name === "sectors" ? <SectorsPage navigate={navigate} /> : null}
        {view.name === "how-we-work" ? <HowWeWorkPage navigate={navigate} /> : null}
        {view.name === "contact" ? <ContactPage navigate={navigate} /> : null}
      </main>
      <SiteFooter navigate={navigate} />
      <CookieConsent />
      <SideContactDock />
    </div>
  );
}
