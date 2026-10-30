"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { Icon } from "./icon";
import { PILLARS, type Route } from "@/lib/ocaja-data";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  route: Route;
  key: string;
}

const NAV: NavItem[] = [
  { label: "Home", route: { name: "home" }, key: "home" },
  { label: "About", route: { name: "about" }, key: "about" },
  { label: "Services", route: { name: "services" }, key: "services" },
  { label: "Solutions", route: { name: "solutions" }, key: "solutions" },
  { label: "Sectors", route: { name: "sectors" }, key: "sectors" },
  { label: "How We Work", route: { name: "how-we-work" }, key: "how-we-work" },
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
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeKey =
    view.name === "pillar" ? "services" : (view.name as string);

  const go = (r: Route) => {
    setOpen(false);
    navigate(r);
  };

  const isActive = (item: NavItem) => activeKey === item.key;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 sm:pt-4">
        <div
          className={cn(
            "flex h-16 items-center justify-between gap-3 rounded-full border bg-white/85 pl-5 pr-3 backdrop-blur-xl transition-shadow duration-300",
            scrolled
              ? "border-navy/10 shadow-[0_12px_40px_-12px_rgba(12,31,74,0.25)]"
              : "border-black/[0.06] shadow-sm"
          )}
        >
          <button
            type="button"
            onClick={() => go({ name: "home" })}
            className="cursor-pointer"
            aria-label="OCAJA Technologies — home"
          >
            <Logo />
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {NAV.map((item) =>
              item.key === "services" ? (
                <DropdownMenu key={item.key}>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "flex cursor-pointer items-center gap-1 rounded-full px-3.5 py-2 text-[0.86rem] font-medium transition-colors",
                        isActive(item)
                          ? "bg-navy-tint text-navy-deep"
                          : "text-navy-deep/75 hover:bg-mist hover:text-navy-deep"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    sideOffset={12}
                    className="w-[560px] rounded-2xl border-[#E7E9F0] p-3 shadow-[0_24px_60px_-16px_rgba(12,31,74,0.28)]"
                  >
                    <div className="mb-2 px-3 pt-1">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ojagray">
                        Six specialist practices
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      {PILLARS.map((p) => (
                        <DropdownMenuItem
                          key={p.id}
                          asChild
                          className="rounded-xl px-3 py-2.5 focus:bg-navy-tint/70"
                        >
                          <button
                            type="button"
                            onClick={() => go({ name: "pillar", pillarId: p.id })}
                            className="w-full cursor-pointer text-left"
                          >
                            <span className="flex min-w-0 items-center gap-3">
                              <span className="font-heading text-sm font-bold text-navy/30">
                                {p.num}
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="block text-[0.88rem] font-semibold text-navy-deep">
                                  {p.menuTitle}
                                </span>
                                <span className="mt-0.5 block truncate text-[0.75rem] text-ojagray">
                                  {p.tagline}
                                </span>
                              </span>
                            </span>
                          </button>
                        </DropdownMenuItem>
                      ))}
                    </div>
                    <div className="mt-2 border-t border-[#EEF0F5] px-3 pt-3 pb-1">
                      <button
                        type="button"
                        onClick={() => go({ name: "services" })}
                        className="group flex cursor-pointer items-center gap-1.5 text-[0.85rem] font-semibold text-navy"
                      >
                        View all services
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => go(item.route)}
                  className={cn(
                    "cursor-pointer rounded-full px-3.5 py-2 text-[0.86rem] font-medium transition-colors",
                    isActive(item)
                      ? "bg-navy-tint text-navy-deep"
                      : "text-navy-deep/75 hover:bg-mist hover:text-navy-deep"
                  )}
                >
                  {item.label}
                </button>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => go({ name: "contact" })}
              className="hidden h-10 cursor-pointer rounded-full bg-navy px-5 text-[0.85rem] font-semibold text-white shadow-md shadow-navy/20 transition-all hover:-translate-y-0.5 hover:bg-navy-deep md:inline-flex"
            >
              Request a Consultation
            </Button>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full border-navy/15 lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5 text-navy-deep" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="slim-scroll w-[85vw] max-w-sm overflow-y-auto border-l-0 bg-white p-0 sm:rounded-l-2xl"
              >
                <SheetHeader className="border-b border-[#EEF0F5] px-5 py-4 text-left">
                  <SheetTitle asChild>
                    <div>
                      <Logo />
                    </div>
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    OCAJA Technologies site navigation
                  </SheetDescription>
                </SheetHeader>
                <div className="px-3 py-4">
                  {NAV.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => go(item.route)}
                      className={cn(
                        "flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-left text-[0.95rem] font-medium transition-colors",
                        isActive(item)
                          ? "bg-navy-tint text-navy-deep"
                          : "text-navy-deep/80 hover:bg-mist"
                      )}
                    >
                      {item.label}
                      {item.key === "services" ? (
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      ) : null}
                    </button>
                  ))}

                  <div className="mt-4 rounded-2xl bg-mist p-3">
                    <p className="px-2 pb-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-ojagray">
                      Our six pillars
                    </p>
                    {PILLARS.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => go({ name: "pillar", pillarId: p.id })}
                        className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-2 py-2.5 text-left transition-colors hover:bg-white"
                      >
                        <span className="font-heading text-sm font-bold text-navy/30">
                          {p.num}
                        </span>
                        <Icon name={p.icon} className="h-4 w-4 text-navy" />
                        <span className="text-[0.88rem] font-medium text-navy-deep">
                          {p.menuTitle}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="p-2">
                    <Button
                      onClick={() => go({ name: "contact" })}
                      className="h-11 w-full cursor-pointer rounded-full bg-navy text-[0.9rem] font-semibold text-white"
                    >
                      Request a Consultation
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
