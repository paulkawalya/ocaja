"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { Route } from "@/lib/ocaja-data";

interface Slide {
  id: number;
  badge: string;
  heading: string;
  subheading: string;
  image: string;
  alt: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    badge: "Websites & Applications",
    heading: "Websites That Attract, Engage, Convert",
    subheading:
      "Elevate your brand with fast, seamless websites and enterprise platforms crafted to engage and impress your audience from the first click.",
    image: "/hero/websites-apps.jpg",
    alt: "African software developer engineering web applications and digital platforms",
  },
  {
    id: 2,
    badge: "AI & Machine Learning",
    heading: "AI/ML Solutions Turning Data into Decisions",
    subheading:
      "Leverage AI and machine learning algorithms to enhance efficiency, automate complex documentation, and generate real-time predictive insights.",
    image: "/hero/ai-data-decisions.jpg",
    alt: "African data scientist analyzing predictive machine learning models and neural networks",
  },
  {
    id: 3,
    badge: "Mobile Engineering",
    heading: "Intuitive Apps That Connect and Perform",
    subheading:
      "Build mobile applications optimized for performance, user experience, and scalable growth tailored to your product goals across Africa.",
    image: "/hero/mobile-apps.jpg",
    alt: "African mobile engineers designing and testing enterprise and fintech smartphone apps",
  },
  {
    id: 4,
    badge: "Enterprise Modernization",
    heading: "Streamline Operations With Cloud & CRM",
    subheading:
      "Implement tailored cloud infrastructure, automated workflows, and CRM systems to streamline customer interactions, boost satisfaction, and scale retention.",
    image: "/hero/cloud-operations.jpg",
    alt: "African cloud systems architect deploying scalable enterprise cloud infrastructure",
  },
  {
    id: 5,
    badge: "Managed Defense",
    heading: "24/7 Managed Cybersecurity & SOC Defense",
    subheading:
      "Protect critical digital assets, prevent cyber disruptions, and ensure rigorous regulatory compliance with continuous monitoring and rapid response.",
    image: "/hero/cybersecurity-soc.jpg",
    alt: "African cybersecurity specialist monitoring real-time security operations center defense maps",
  },
];

export function TalentHero({ navigate }: { navigate: (r: Route) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#021a40] pt-32 pb-20 text-white sm:pt-36 sm:pb-24">
      {/* Background Dynamic Image Cross-Fade Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-full w-full object-cover object-center filter brightness-[0.42] contrast-[1.12] saturate-[1.15]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Talentelgia Dark Navy Gradients & Color Overlays for Flawless Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#02183c]/92 via-[#021a40]/78 to-[#021a40]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02183c]/90 via-[#021a40]/60 to-[#02183c]/90" />
        <div className="talentelgia-dot-pattern absolute inset-0 opacity-25" />

        {/* Ambient Glow Orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/4 h-[550px] w-[550px] rounded-full bg-[#1685f8]/20 blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#2AE6FB]/15 blur-[150px]"
        />

        {/* Top and Bottom Fading Gradients */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#02183c] to-transparent z-1" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#021a40] to-transparent z-1" />
      </div>

      {/* Main Content Container (Full Cover Width & Length Alignment) */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl"
          >
            <span className="inline-block rounded-full border border-[#2AE6FB]/40 bg-[#2AE6FB]/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-[#2AE6FB]">
              {slide.badge} · Uganda &amp; Zambia
            </span>

            <h1 className="mt-6 font-heading text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {slide.heading}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {slide.subheading}
            </p>

            {/* Talentelgia Dual Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <div className="shadow-bg">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("consultation");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    else navigate({ name: "contact" });
                  }}
                  className="btn-talent-primary inline-flex cursor-pointer items-center gap-2 rounded-full px-8 py-3.5 text-sm uppercase tracking-wider"
                >
                  <span>Consult Our Experts</span>
                  <ArrowRight className="h-4 w-4 text-[#2AE6FB]" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => navigate({ name: "solutions" })}
                className="btn-talent-outline inline-flex cursor-pointer items-center rounded-full px-8 py-3.5 text-sm uppercase tracking-wider"
              >
                View Portfolio
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Arrows and Dot Indicators */}
        <div className="mt-14 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-white/20 bg-white/5 text-white/80 transition-all hover:border-[#2AE6FB] hover:bg-white/15 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2">
            {SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx
                    ? "w-8 bg-[#2AE6FB]"
                    : "w-2.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-white/20 bg-white/5 text-white/80 transition-all hover:border-[#2AE6FB] hover:bg-white/15 hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
