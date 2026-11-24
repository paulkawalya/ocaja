"use client";

import { TalentHero } from "../talent-hero";
import { CraftingDigital } from "../crafting-digital";
import { TalentServices } from "../talent-services";
import { TalentWhyChoose } from "../talent-why-choose";
import { TalentTechSolutions } from "../talent-tech-solutions";
import { TalentTechStack } from "../talent-techstack";
import { TalentRoadmap } from "../talent-roadmap";
import { TalentCaseStudies } from "../talent-case-studies";
import { TalentTestimonials } from "../talent-testimonials";
import { ConsultationSection } from "../consultation-section";
import type { Route } from "@/lib/ocaja-data";

export function HomePage({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <>
      {/* 1. Talentelgia Banner Section with multi-slide carousel */}
      <TalentHero navigate={navigate} />

      {/* 2. Crafting Digital Section with EXCELLENCE watermark & 3 counter metrics */}
      <CraftingDigital />

      {/* 3. Services Section ("Innovate, Scale, Succeed") */}
      <TalentServices navigate={navigate} />

      {/* 4. Why Choose Section in Dark Navy with 4 Core Cards */}
      <TalentWhyChoose navigate={navigate} />

      {/* 5. Comprehensive Solutions Expanding Accordion */}
      <TalentTechSolutions navigate={navigate} />

      {/* 6. Core TechStack Used with Category Switcher & Featured Narrative */}
      <TalentTechStack />

      {/* 7. Roadmap Section ("Get Your Free IT Solutions Framework") */}
      <TalentRoadmap navigate={navigate} />

      {/* 8. Success Stories with Performance Index, Satisfaction Index & Delivery Rate */}
      <TalentCaseStudies navigate={navigate} />

      {/* 9. Client Testimonials ("Let’s Hear What Our Clients Say") */}
      <TalentTestimonials />

      {/* 10. Interactive Consultation & Architecture Framework Form */}
      <ConsultationSection />
    </>
  );
}
