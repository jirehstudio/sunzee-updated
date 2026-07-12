"use client";

import { ArrowUpRight, MapPin } from "lucide-react";
import { DESTINATIONS } from "./data";
import { SectionLabel, Ornament } from "./ornaments";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

export function Destinations() {
  return (
    <section
      id="destinations"
      className="py-20 md:py-28 bg-paper relative overflow-hidden"
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
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--ink)] mt-5 leading-[1.05]">
            Top <span className="italic text-gradient-ocean">Destinations</span>
          </h2>
          <Ornament className="mt-6" />
          <p className="mt-6 text-[var(--ink)]/65 text-base md:text-lg leading-relaxed font-light">
            Six signature corners of East Africa and the Indian Ocean, each
            curated by our local specialists. Choose your dream, and we&apos;ll
            shape the rest.
          </p>
        </Reveal>

        {/* Uniform 3-column grid — all cards same size, no empty space */}
        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {DESTINATIONS.map((d, i) => (
            <RevealItem key={d.name} className="h-full">
              <a
                href={d.href}
                className="group relative block overflow-hidden rounded-2xl shadow-md hover:shadow-2xl card-lift h-full bg-white"
              >
                {/* Compact, uniform image — landscape 4/3 for all cards */}
                <div className="relative w-full overflow-hidden bg-[var(--ocean-deep)] aspect-[4/3]">
                  <img
                    src={d.image}
                    alt={d.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  {/* Gradient overlay — text sits at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/90 via-[var(--ink)]/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--ocean)]/30 via-transparent to-[var(--coral)]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Coral frame on hover */}
                  <div className="absolute inset-3 border border-[var(--gold)]/0 group-hover:border-[var(--gold)]/70 rounded-xl transition-all duration-500" />

                  {/* Top right arrow */}
                  <div className="absolute top-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-white/20 backdrop-blur border border-white/40 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-0 -rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>

                  {/* Number badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="font-display text-3xl md:text-4xl font-light text-[var(--gold)]/95 leading-none drop-shadow-md">
                      0{i + 1}
                    </span>
                    <span className="h-px w-6 bg-[var(--gold)]/70" />
                  </div>

                  {/* Bottom content — fills the image bottom, no empty space */}
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-white">
                    <div className="flex items-center gap-1.5 text-[9px] font-semibold tracking-[0.3em] uppercase text-[var(--gold)] mb-1.5">
                      <MapPin className="h-3 w-3" />
                      {d.region}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-medium leading-tight mb-1">
                      {d.name}
                    </h3>
                    <p className="text-white/85 leading-snug text-xs md:text-sm line-clamp-2 max-w-md">
                      {d.blurb}
                    </p>
                  </div>
                </div>

                {/* Tight thumbnail strip — fixed height so all cards match */}
                {d.gallery && d.gallery.length > 0 && (
                  <div className="flex items-stretch gap-1.5 px-2.5 py-2 bg-white h-14">
                    <div className="text-[8px] font-semibold tracking-[0.2em] uppercase text-[var(--ink)]/50 mr-0.5 shrink-0 self-center">
                      More
                    </div>
                    {d.gallery.slice(0, 3).map((g, gi) => (
                      <div
                        key={gi}
                        className="relative flex-1 h-full rounded-md overflow-hidden bg-[var(--sand)]"
                      >
                        <img
                          src={g}
                          alt={`${d.name} ${gi + 1}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    ))}
                    <div className="ml-0.5 inline-flex items-center gap-1 rounded-full bg-[var(--ocean)]/10 px-2.5 py-1.5 text-[9px] font-semibold tracking-[0.2em] uppercase text-[var(--ocean-deep)] group-hover:bg-[var(--ocean)] group-hover:text-white transition-colors shrink-0 self-center">
                      View
                      <ArrowUpRight className="h-2.5 w-2.5" />
                    </div>
                  </div>
                )}
              </a>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
