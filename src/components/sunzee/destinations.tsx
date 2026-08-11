"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { DESTINATIONS } from "./data";
import { SectionLabel, Ornament } from "./ornaments";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

export function Destinations() {
  return (
    <section
      id="destinations"
      className="pt-12 pb-20 md:pt-16 md:pb-28 bg-paper relative overflow-hidden"
    >
      {/* Decorative compass watermark */}
      <div className="absolute -top-20 -right-20 opacity-[0.05] pointer-events-none text-[var(--ocean)]">
        <svg viewBox="0 0 200 200" className="w-[400px] h-[400px]" fill="currentColor" aria-hidden="true">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M100 10 L110 90 L190 100 L110 110 L100 190 L90 110 L10 100 L90 90 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative">
        {/* Section header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <SectionLabel>Where we travel</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--ink)] mt-5 leading-[1.05]">
            Top <span className="italic text-gradient-ocean">Destinations</span>
          </h2>
          <Ornament className="mt-6" />
          <p className="mt-6 text-[var(--ink)]/65 text-base md:text-lg leading-relaxed font-light">
            Six signature corners of East Africa and the Indian Ocean, each
            curated by our local specialists. Choose your dream, and we&apos;ll
            shape the rest.
          </p>
        </Reveal>

        {/* Magazine-style mixed layout: featured (big, 2-col, landscape) + non-featured (small, 1-col, portrait).
            items-start so each card is its natural height — no stretching, no empty space inside cards. */}
        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 items-start">
          {DESTINATIONS.map((d, i) => {
            const featured = i === 0 || i === 3 || i === 4;
            return (
              <RevealItem
                key={d.name}
                className={featured ? "lg:col-span-2" : ""}
              >
                <a
                  href={d.href}
                  className="group relative block overflow-hidden rounded-2xl shadow-md hover:shadow-2xl card-lift bg-white"
                >
                  {/* Main image — natural aspect ratio (big landscape for featured, portrait for non-featured) */}
                  <div className={`relative w-full overflow-hidden bg-[var(--ocean-deep)] ${
                    featured
                      ? "aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]"
                      : "aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/5]"
                  }`}>
                    <img
                      src={d.image}
                      alt={d.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                    {/* Gradient overlays — lighter for tourism vibe */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/90 via-[var(--ink)]/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--ocean)]/30 via-transparent to-[var(--coral)]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Coral frame on hover */}
                    <div className="absolute inset-3 border border-[var(--gold)]/0 group-hover:border-[var(--gold)]/70 rounded-xl transition-all duration-500" />

                    {/* Top right arrow */}
                    <div className="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-white/20 backdrop-blur border border-white/40 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-0 -rotate-45">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>

                    {/* Number badge */}
                    <div className="absolute top-5 left-5 flex items-center gap-2">
                      <span className="text-4xl md:text-5xl font-light text-[var(--gold)]/95 leading-none drop-shadow-md">
                        0{i + 1}
                      </span>
                      <span className="h-px w-8 bg-[var(--gold)]/70" />
                    </div>

                    {/* Bottom content overlaid on image */}
                    <div className={`absolute inset-x-0 bottom-0 p-6 md:p-7 text-white ${featured ? "lg:p-9" : ""}`}>
                      <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.32em] uppercase text-[var(--gold)] mb-2">
                        <MapPin className="h-3 w-3" />
                        {d.region}
                      </div>
                      <h3 className={`font-medium leading-tight mb-2 ${
                        featured
                          ? "text-2xl md:text-3xl lg:text-5xl"
                          : "text-2xl md:text-3xl"
                      }`}>
                        {d.name}
                      </h3>
                      <p className={`text-white/85 leading-relaxed max-w-md ${
                        featured
                          ? "text-sm lg:text-lg"
                          : "text-sm"
                      }`}>
                        {d.blurb}
                      </p>
                      <p className="mt-3 text-xs md:text-sm font-medium text-[var(--gold)] italic">
                        {d.caption}
                      </p>
                    </div>
                  </div>

                  {/* Thumbnail strip — clean modern design, high visibility, spacious layout */}
                  {d.gallery && d.gallery.length > 0 && (
                    <div className="p-3.5 sm:p-4 bg-white border-t border-slate-100 shrink-0">
                      {/* Label & CTA Header */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[var(--ink)]/60 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--ocean)]" />
                          MORE PHOTOS
                        </span>
                        <div className="inline-flex items-center gap-1 rounded-full bg-[var(--ocean)]/10 px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-[var(--ocean-deep)] group-hover:bg-[var(--ocean)] group-hover:text-white transition-all">
                          View
                          <ArrowUpRight className="h-3 w-3" />
                        </div>
                      </div>

                      {/* 3-Column Large Thumbnail Grid */}
                      <div className="grid grid-cols-3 gap-2">
                        {d.gallery.slice(0, 3).map((g, gi) => (
                          <div
                            key={gi}
                            className="relative h-16 sm:h-20 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs transition-all duration-300 hover:shadow-md hover:border-[var(--ocean)]/40"
                          >
                            <img
                              src={g}
                              alt={`${d.name} highlight ${gi + 1}`}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              onError={(e) => {
                                const parent = e.currentTarget.parentElement;
                                if (parent) parent.style.display = "none";
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </a>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
