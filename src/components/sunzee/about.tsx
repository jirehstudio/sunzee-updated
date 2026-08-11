"use client";

import { CheckCircle2, MapPin, Users, Plane, Award } from "lucide-react";
import { SITE } from "./data";
import { SectionLabel, Ornament } from "./ornaments";
import { Reveal } from "./reveal";
import { Counter } from "./counter";

const STATS = [
  { icon: Award, value: "30 Yrs", label: "Experience" },
  { icon: MapPin, value: "6+", label: "Destinations" },
  { icon: Users, value: "B2B", label: "Specialist" },
];

const POINTS = [
  "Widest selection of hotels globally",
  "Authentic & tropical experiences",
  "Specialists in the B2B space",
  "Expert firsthand assistance",
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Soft sand background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--sand)]/40 via-transparent to-[var(--sky)]/30 pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: image collage — bright, multi-image */}
          <Reveal y={50}>
            <div className="relative">
              {/* Main image with rounded frame */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
                  alt="Tropical island getaway"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ocean-deep)]/30 to-transparent" />
              </div>

              {/* Small overlapping image 1 — top right */}
              <div className="hidden md:block absolute -top-8 -right-6 w-44 h-56 rounded-2xl overflow-hidden border-4 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80"
                  alt="Safari experience"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Small overlapping image 2 — bottom left */}
              <div className="hidden md:block absolute -bottom-10 -left-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80"
                  alt="Zanzibar beach"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 -left-3 md:-left-10 rounded-2xl bg-gradient-to-br from-[var(--coral)] to-[var(--coral-deep)] text-[var(--ink)] px-5 py-3.5 shadow-2xl rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="h-4 w-4" />
                  <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Specialists in</span>
                </div>
                <div className="text-2xl font-semibold leading-none">East Africa</div>
                <div className="text-[10px] tracking-[0.2em] uppercase opacity-80 mt-1">&amp; Indian Ocean</div>
              </div>
            </div>
          </Reveal>

          {/* Right: content */}
          <div>
            <Reveal>
              <SectionLabel>
                <span className="text-[var(--coral-deep)]">About Sunzee Holidays</span>
              </SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--ink)] leading-[1.05] mt-5">
                The Best Destination
                <span className="block italic text-gradient-ocean">Management Company</span>
                <span className="block">in East Africa</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Ornament className="my-7 justify-start" />
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-[var(--ink)]/75 text-base md:text-lg leading-relaxed font-light">
                Sunzee Holidays opens its doors to travel agents and travellers,
                providing them with an authentic and tropical experience.
                Specializing in the B2B segment, Sunzee Holidays strives to make
                itself the ultimate travel superstore with the widest selection of
                hotels and the best online product ranges in the B2B space across the globe.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="mt-4 text-[var(--ink)]/75 text-base md:text-lg leading-relaxed font-light">
                Our father-daughter partnership brings decades of experience
                in the travel and tourism industry, firmly believing in the
                principle that servicing with a smile reflects the true spirit of an
                organization and validates its promise.
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm md:text-[15px] text-[var(--ink)]/85">
                    <CheckCircle2 className="h-5 w-5 text-[var(--ocean)] shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-[var(--ocean)]/20 bg-[var(--sand)]/60 backdrop-blur p-5 text-center"
                  >
                    <s.icon className="h-5 w-5 text-[var(--coral)] mx-auto mb-2" />
                    <div className="text-3xl md:text-4xl font-semibold text-[var(--ocean-deep)]">
                      <Counter value={s.value} />
                    </div>
                    <div className="text-[11px] md:text-xs text-[var(--ink)]/60 mt-1 tracking-wide">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
