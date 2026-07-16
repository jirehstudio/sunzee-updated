"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, MapPin } from "lucide-react";
import { SITE, NAV, DESTINATIONS } from "./data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-[0_6px_30px_-12px_rgba(11,60,80,0.18)] border-b border-[var(--ocean)]/15"
            : "bg-[var(--background)]/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between gap-6 py-3 md:py-3.5">
            {/* Logo */}
            <a href="/" className="flex items-center group" aria-label={SITE.name}>
              <div className="relative h-12 w-12 md:h-16 md:w-16 shrink-0 rounded-full overflow-hidden shadow-md ring-2 ring-white bg-white">
                <img
                  src="/sunzee/logo.png"
                  alt={`${SITE.name} logo`}
                  className="h-full w-full object-contain p-0.5"
                />
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((item) =>
                "children" in item && item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setPackagesOpen(true)}
                    onMouseLeave={() => setPackagesOpen(false)}
                  >
                    <a
                      href={item.href}
                      className="flex items-center gap-1.5 rounded-full px-4 py-2 text-base font-display font-medium tracking-wide text-[var(--ink)]/80 hover:text-[var(--ocean-deep)] hover:bg-[var(--ocean)]/8 transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${packagesOpen ? "rotate-180" : ""}`}
                      />
                    </a>
                    {packagesOpen && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[640px]">
                        <div className="overflow-hidden rounded-3xl border border-[var(--ocean)]/15 bg-white shadow-2xl">
                          <div className="h-1 bg-gradient-to-r from-[var(--ocean)] via-[var(--coral)] to-[var(--ocean)]" />
                          <div className="p-5">
                            <div className="flex items-center gap-2 mb-4">
                              <MapPin className="h-4 w-4 text-[var(--coral)]" />
                              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[var(--coral-deep)]">
                                Signature Destinations
                              </span>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                              {DESTINATIONS.slice(0, 6).map((d) => (
                                <a
                                  key={d.name}
                                  href={d.href}
                                  className="group relative block rounded-2xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-lg transition-all"
                                >
                                  <img
                                    src={d.image}
                                    alt={d.name}
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-[var(--ink)]/20 to-transparent" />
                                  <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                                    <div className="text-[9px] font-medium tracking-[0.25em] uppercase opacity-80">
                                      {d.region}
                                    </div>
                                    <div className="font-display text-base font-semibold leading-tight">
                                      {d.name}
                                    </div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-full px-4 py-2 text-base font-display font-medium tracking-wide text-[var(--ink)]/80 hover:text-[var(--ocean-deep)] hover:bg-[var(--ocean)]/8 transition-colors"
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="hidden md:inline-flex items-center gap-2 rounded-full border border-[var(--ocean)]/30 px-4 py-1.5 text-sm font-medium text-[var(--ocean-deep)] hover:bg-[var(--ocean)] hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">Call Us</span>
              </a>
              <a
                href="/#enquiry"
                className="group hidden md:inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[var(--ocean)] to-[var(--ocean-deep)] px-6 md:px-7 py-3 md:py-3.5 text-sm font-semibold text-white shadow-[0_12px_36px_-10px_rgba(28,80,170,0.7)] hover:shadow-[0_18px_46px_-10px_rgba(28,80,170,0.9)] hover:-translate-y-0.5 transition-all"
              >
                <span>Plan My Trip</span>
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="lg:hidden grid h-10 w-10 place-items-center rounded-full text-[var(--ocean-deep)] hover:bg-[var(--ocean)]/10 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-[var(--ink)]/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85%] bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[var(--ocean)]/15">
              <div className="flex items-center">
                <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden shadow-md bg-white ring-1 ring-[var(--ocean)]/15">
                  <img
                    src="/sunzee/logo.png"
                    alt={`${SITE.name} logo`}
                    className="h-full w-full object-contain p-0.5"
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full hover:bg-[var(--ocean)]/10"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-[var(--ocean-deep)]" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4">
              {NAV.map((item) => (
                <div key={item.label} className="mb-1">
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-[var(--ink)] hover:bg-[var(--ocean)]/10 hover:text-[var(--ocean-deep)] transition-colors"
                  >
                    {item.label}
                  </a>
                  {"children" in item && item.children && (
                    <div className="ml-4 mt-1 mb-2 border-l border-[var(--coral)]/40 pl-3">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-[var(--ink)]/70 hover:bg-[var(--ocean)]/10 hover:text-[var(--ocean-deep)] transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="p-4 border-t border-[var(--ocean)]/15 space-y-2">
              <a
                href="/#enquiry"
                onClick={() => setMobileOpen(false)}
                className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[var(--ocean)] to-[var(--ocean-deep)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_36px_-10px_rgba(28,80,170,0.7)] transition-all"
              >
                <span>Plan My Trip</span>
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="block w-full rounded-full border border-[var(--ocean)]/30 px-5 py-3 text-center text-sm font-medium text-[var(--ocean-deep)]"
              >
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
