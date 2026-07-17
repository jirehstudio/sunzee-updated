"use client";

import { Palmtree, Compass, Landmark, Mountain, Heart, Waves, ArrowUpRight } from "lucide-react";
import { EXPERIENCES } from "./data";
import { SectionLabel, Ornament } from "./ornaments";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

const ICONS: Record<string, React.ElementType> = {
  palmtree: Palmtree,
  compass: Compass,
  landmark: Landmark,
  mountain: Mountain,
  heart: Heart,
  wave: Waves,
};

export function Experiences() {
  return (
    <section className="py-20 md:py-28 bg-sand-tint relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <SectionLabel>What we do</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--ink)] mt-5 leading-[1.05]">
            Curated <span className="italic text-gradient-ocean">Experiences</span>
          </h2>
          <Ornament className="mt-6" />
          <p className="mt-6 text-[var(--ink)]/65 text-base md:text-lg leading-relaxed font-light">
            Every traveller is different. Pick the mood that calls to you, and
            we&apos;ll weave it into a private, tailor-made journey across our islands and savannahs.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {EXPERIENCES.map((exp) => {
            const Icon = ICONS[exp.icon] ?? Compass;
            return (
              <RevealItem key={exp.title} className="h-full">
                <a
                  href="#enquiry"
                  className="group relative block overflow-hidden rounded-3xl shadow-md hover:shadow-2xl card-lift h-full bg-white"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[var(--ocean-deep)]">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                    {/* Lighter overlay — keeps image visible (tourism vibe) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-[var(--ink)]/15 to-transparent" />

                    {/* Icon badge */}
                    <div className="absolute top-4 left-4 grid h-12 w-12 place-items-center rounded-2xl bg-white/20 backdrop-blur border border-white/40 text-white shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Hover arrow */}
                    <div className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-[var(--coral)] text-white opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-1 group-hover:translate-y-0">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>

                    {/* Title + blurb */}
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-white">
                      <h3 className="text-2xl md:text-3xl font-semibold leading-tight mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-white/85 leading-relaxed max-w-md">
                        {exp.blurb}
                      </p>
                    </div>
                  </div>
                </a>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
