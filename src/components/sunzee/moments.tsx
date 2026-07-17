"use client";

import { Camera, ArrowUpRight } from "lucide-react";
import { MOMENTS } from "./data";
import { SectionLabel, Ornament } from "./ornaments";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

export function Moments() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <SectionLabel>Travel moments</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--ink)] mt-5 leading-[1.05]">
            Postcards from <span className="italic text-gradient-ocean">our travellers</span>
          </h2>
          <Ornament className="mt-6" />
          <p className="mt-6 text-[var(--ink)]/65 text-base md:text-lg leading-relaxed font-light">
            A glimpse of the sunsets, the silhouettes and the unforgettable
            mornings our guests have lived across East Africa and the Indian Ocean.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" stagger={0.08}>
          {MOMENTS.map((m, i) => (
            <RevealItem
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-2xl card-lift ${
                i === 0 || i === 5 ? "row-span-2 aspect-[1/2]" : "aspect-square"
              }`}
            >
              <img
                src={m.image}
                alt={m.caption}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-[var(--ink)]/15 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              {/* Top-right camera badge */}
              <div className="absolute top-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-white/20 backdrop-blur border border-white/40 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Camera className="h-4 w-4" />
              </div>

              {/* Bottom caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <div className="text-[9px] font-semibold tracking-[0.25em] uppercase text-[var(--gold)] mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Sunzee Moment
                </div>
                <div className="text-base md:text-lg font-medium leading-tight flex items-center gap-1.5">
                  {m.caption}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-12 text-center" delay={0.1}>
          <a
            href={SITE_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--ocean)]/30 px-6 py-3 text-sm font-semibold text-[var(--ocean-deep)] hover:bg-[var(--ocean)] hover:text-white transition-all"
          >
            <Camera className="h-4 w-4" />
            Follow our journey on Instagram
          </a>
        </Reveal>
      </div>
    </section>
  );
}

const SITE_INSTAGRAM = "https://www.instagram.com/sunzeeholidays_official/";
