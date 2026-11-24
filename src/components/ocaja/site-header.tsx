"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, ArrowRight, Phone, Mail } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./logo";
import { Icon } from "./icon";
import { PILLARS, PRODUCTS, FEATURED_PROJECTS, type Route } from "@/lib/ocaja-data";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  route: Route;
  key: string;
}

const NAV: NavItem[] = [
  { label: "Products", route: { name: "solutions" }, key: "solutions" },
  { label: "Industries", route: { name: "sectors" }, key: "sectors" },
  { label: "Services", route: { name: "services" }, key: "services" },
  { label: "How We Work", route: { name: "how-we-work" }, key: "how-we-work" },
  { label: "About Us", route: { name: "about" }, key: "about" },
  { label: "Contact", route: { name: "contact" }, key: "contact" },
];

export function SiteHeader({
  view,
  navigate,
}: {
  view: Route;
  navigate: (r: Route) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = view.name === "home";
  const activeKey =
    view.name === "pillar" ? "services" : (view.name as string);

  const go = (r: Route) => {
    setOpen(false);
    navigate(r);
  };

  const isActive = (item: NavItem) => activeKey === item.key;

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      {/* 1. Signature Accent Gradient Line (Always on Top) */}
      <div className="talentelgia-accent-line w-full" />

      {/* 2. Top Mini-Bar (Dark on Home, Clean White on All Other Pages) */}
      <div
        className={cn(
          "hidden w-full px-4 py-2 text-xs md:block transition-colors duration-300",
          isHome
            ? "border-b border-white/10 bg-[#02183c] text-white/80"
            : "border-b border-slate-200 bg-white text-slate-600 shadow-xs"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-2 sm:px-4">
          <div className="flex items-center gap-4">
            <span
              className={cn(
                "text-xs font-semibold",
                isHome ? "text-[#2AE6FB]" : "text-[#1685f8] font-bold"
              )}
            >
              Driven by Code. Defined by Innovation
            </span>
            <span
              className={cn(
                "h-3 w-px",
                isHome ? "bg-white/20" : "bg-slate-200"
              )}
            />
            <span className={isHome ? "text-white/70" : "text-slate-600"}>
              Offices:{" "}
              <strong className={isHome ? "text-white" : "text-[#021a40]"}>
                Kampala
              </strong>{" "}
              (UG) &amp;{" "}
              <strong className={isHome ? "text-white" : "text-[#021a40]"}>
                Lusaka
              </strong>{" "}
              (ZM)
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="tel:+256772418560"
              className={cn(
                "flex items-center gap-1.5 transition-colors",
                isHome ? "hover:text-white" : "hover:text-[#1685f8]"
              )}
            >
              <Phone
                className={cn(
                  "h-3 w-3",
                  isHome ? "text-[#2AE6FB]" : "text-[#1685f8]"
                )}
              />
              <span>UG: +256 772 418 560</span>
            </a>
            <a
              href="tel:+260976335914"
              className={cn(
                "flex items-center gap-1.5 transition-colors",
                isHome ? "hover:text-white" : "hover:text-[#1685f8]"
              )}
            >
              <Phone
                className={cn(
                  "h-3 w-3",
                  isHome ? "text-[#2AE6FB]" : "text-[#1685f8]"
                )}
              />
              <span>ZM: +260 976 335 914</span>
            </a>
            <a
              href="mailto:info@ocajatech.com"
              className={cn(
                "flex items-center gap-1.5 transition-colors",
                isHome ? "hover:text-white" : "hover:text-[#1685f8]"
              )}
            >
              <Mail
                className={cn(
                  "h-3 w-3",
                  isHome ? "text-[#2AE6FB]" : "text-[#1685f8]"
                )}
              />
              <span>info@ocajatech.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. Main Full-Width Navbar (Always Dark Blue across all pages) */}
      <nav
        className={cn(
          "w-full transition-all duration-300",
          scrolled
            ? "border-b border-white/15 bg-[#021a40]/95 shadow-2xl backdrop-blur-xl"
            : "border-b border-white/10 bg-[#021a40]/80 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <button
            type="button"
            onClick={() => go({ name: "home" })}
            className="cursor-pointer shrink-0"
            aria-label="OCAJA Technologies — home"
          >
            <Logo reversed />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-2 lg:flex" aria-label="Primary">
            {NAV.map((item) => {
              if (item.key === "services") {
                return (
                  <DropdownMenu key={item.key}>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "flex cursor-pointer items-center gap-1 rounded-md px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors",
                          isActive(item)
                            ? "text-[#2AE6FB]"
                            : "text-white/85 hover:text-[#2AE6FB]"
                        )}
                      >
                        {item.label}
                        <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="center"
                      sideOffset={14}
                      className="w-[580px] rounded-2xl border-white/10 bg-[#02183c] p-3 text-white shadow-2xl"
                    >
                      <div className="mb-2 flex items-center justify-between border-b border-white/10 px-3 pt-1 pb-2">
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#2AE6FB]">
                          Six Core Practices
                        </p>
                        <span className="text-[0.68rem] text-white/50">
                          Kampala &amp; Lusaka
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {PILLARS.map((p) => (
                          <DropdownMenuItem
                            key={p.id}
                            asChild
                            className="cursor-pointer rounded-xl px-3 py-2.5 focus:bg-white/10"
                          >
                            <button
                              type="button"
                              onClick={() => go({ name: "pillar", pillarId: p.id })}
                              className="w-full text-left"
                            >
                              <div className="flex items-start gap-2.5">
                                <span className="mt-0.5 grid h-7 w-7 place-items-center rounded-lg bg-white/10 text-[#2AE6FB] shrink-0">
                                  <Icon name={p.icon} className="h-3.5 w-3.5" />
                                </span>
                                <div className="min-w-0 flex-1">
                                  <span className="block text-xs font-bold text-white">
                                    {p.menuTitle}
                                  </span>
                                  <span className="mt-0.5 block truncate text-[0.7rem] text-white/60">
                                    {p.tagline}
                                  </span>
                                </div>
                              </div>
                            </button>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              if (item.key === "solutions") {
                return (
                  <DropdownMenu key={item.key}>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "flex cursor-pointer items-center gap-1 rounded-md px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors",
                          isActive(item)
                            ? "text-[#2AE6FB]"
                            : "text-white/85 hover:text-[#2AE6FB]"
                        )}
                      >
                        {item.label}
                        <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="center"
                      sideOffset={14}
                      className="w-[460px] rounded-2xl border-white/10 bg-[#02183c] p-3 text-white shadow-2xl"
                    >
                      <div className="mb-2 border-b border-white/10 px-3 pt-1 pb-2">
                        <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#2AE6FB]">
                          Platforms &amp; Case Studies
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {[...PRODUCTS, ...FEATURED_PROJECTS.slice(0, 3)].map((sol) => (
                          <DropdownMenuItem
                            key={sol.name}
                            asChild
                            className="cursor-pointer rounded-xl px-3 py-2 focus:bg-white/10"
                          >
                            <button
                              type="button"
                              onClick={() => go({ name: "solutions" })}
                              className="w-full text-left"
                            >
                              <span className="block text-xs font-bold text-white">
                                {sol.name}
                              </span>
                              <span className="block text-[0.65rem] text-white/50">
                                {sol.type}
                              </span>
                            </button>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => go(item.route)}
                  className={cn(
                    "cursor-pointer rounded-md px-3.5 py-2 text-sm font-semibold tracking-wide transition-colors",
                    isActive(item)
                      ? "text-[#2AE6FB]"
                      : "text-white/85 hover:text-[#2AE6FB]"
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Right Action Button: "Let's Connect" button with .shadow-bg */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-block shadow-bg">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("consultation");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else go({ name: "contact" });
                }}
                className="btn-talent-primary inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-wider"
              >
                <span>Let&#39;s Connect</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#2AE6FB]" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg border border-white/20 text-white lg:hidden transition-colors"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="slim-scroll w-[85vw] max-w-sm overflow-y-auto border-l-0 bg-[#02183c] p-0 text-white"
              >
                <SheetHeader className="border-b border-white/10 px-5 py-4 text-left">
                  <SheetTitle asChild>
                    <div>
                      <Logo reversed />
                    </div>
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    OCAJA Technologies site navigation
                  </SheetDescription>
                </SheetHeader>
                <div className="px-3 py-4 space-y-1">
                  {NAV.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => go(item.route)}
                      className={cn(
                        "flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-left text-xs font-bold uppercase tracking-wider transition-colors",
                        isActive(item)
                          ? "bg-white/15 text-[#2AE6FB]"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      )}
                    >
                      {item.label}
                    </button>
                  ))}

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => go({ name: "contact" })}
                      className="w-full rounded-full bg-[#2AE6FB] py-3 text-xs font-bold uppercase tracking-wider text-[#02183c]"
                    >
                      Let&#39;s Connect
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
