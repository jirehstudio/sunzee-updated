"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, MapPin, Calendar, Compass, Search } from "lucide-react";
import { HERO_SLIDES, SITE, DESTINATIONS } from "./data";
import { Ornament } from "./ornaments";

const SLIDE_DURATION = 6500;

const SLIDE_CAPTIONS = [
  { place: "Mauritius", title: "Where the", accent: "lagoon meets", tail: "the luxury" },
  { place: "Egypt", title: "Walk among", accent: "pharaohs", tail: "& pyramids" },
  { place: "Reunion", title: "Chase the", accent: "volcano's", tail: "edge" },
  { place: "Madagascar", title: "Stand beneath", accent: "the baobab", tail: "giants" },
  { place: "Kenya", title: "Witness the", accent: "great", tail: "migration" },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const count = HERO_SLIDES.length;

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % count), SLIDE_DURATION);
    return () => clearInterval(t);
  }, [count]);

  const cap = SLIDE_CAPTIONS[index];

  return (
    <section id="home" className="relative">
      <div className="relative h-[calc(100vh-120px)] min-h-[560px] md:h-[calc(100vh-160px)] md:min-h-[640px] md:max-h-[860px] w-full overflow-hidden bg-[var(--ocean-deep)]">
        {/* Slides with Ken Burns effect */}
        {HERO_SLIDES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            <img
              src={src}
              alt=""
              className={`h-full w-full object-cover ${i === index ? "animate-ken-burns" : ""}`}
              loading={i === 0 ? "eager" : "lazy"}
            />
            {/* Lighter, warmer gradient overlays (brighter tourism vibe) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/30 via-[var(--ink)]/10 to-[var(--ink)]/65" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/55 via-[var(--ink)]/15 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ocean-deep)]/45 to-transparent" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 container mx-auto max-w-7xl px-6 h-full flex items-center pb-24 md:pb-28 pt-6">
          <div className="max-w-3xl">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/15 backdrop-blur px-4 py-2 mb-4 md:mb-5">
              <MapPin className="h-3.5 w-3.5 text-[var(--gold)]" />
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase text-white">
                {SITE.tagline}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-medium leading-[0.95] text-white drop-shadow-lg">
              {cap.title}
              <span className="block italic text-shimmer mt-0.5">
                {cap.accent}
              </span>
              <span className="block text-[var(--gold)] mt-0.5">{cap.tail}</span>
            </h1>

            {/* Ornament divider */}
            <Ornament className="my-4 md:my-5 justify-start" />

            <p className="max-w-xl text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-light">
              From the timeless pyramids of Egypt to the baobabs of Madagascar,
              we craft bespoke journeys across East Africa and the Indian Ocean,
              where every sunrise feels like the first.
            </p>

            <div className="mt-6 md:mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#destinations"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--coral)] to-[var(--coral-deep)] px-6 md:px-8 py-3 md:py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(231,111,81,0.6)] hover:shadow-[0_14px_40px_-8px_rgba(231,111,81,0.85)] hover:-translate-y-0.5 transition-all"
              >
                <span>Begin the Journey</span>
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href={`mailto:${SITE.bookingEmail}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/15 backdrop-blur px-5 md:px-7 py-3 md:py-3.5 text-sm font-semibold text-white hover:bg-white/25 hover:border-[var(--gold)] transition-all"
              >
                <Calendar className="h-4 w-4" />
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Quick search/enquiry bar (THG-style tourism pattern) */}
        <div className="absolute bottom-0 inset-x-0 z-10 hidden md:block">
          <div className="container mx-auto max-w-7xl px-6 pb-6">
            <div className="rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl ring-1 ring-[var(--ocean)]/10 p-3 md:p-4">
              <div className="grid grid-cols-12 gap-2 md:gap-3">
                <QuickField
                  className="col-span-4"
                  icon={<MapPin className="h-4 w-4 text-[var(--coral)]" />}
                  label="Destination"
                >
                  <select className="w-full bg-transparent text-sm font-medium text-[var(--ink)] focus:outline-none cursor-pointer">
                    <option>Any destination</option>
                    {DESTINATIONS.map((d) => (
                      <option key={d.name}>{d.name}</option>
                    ))}
                  </select>
                </QuickField>
                <QuickField
                  className="col-span-3"
                  icon={<Compass className="h-4 w-4 text-[var(--coral)]" />}
                  label="Experience"
                >
                  <select className="w-full bg-transparent text-sm font-medium text-[var(--ink)] focus:outline-none cursor-pointer">
                    <option>Any experience</option>
                    <option>Beach &amp; Island</option>
                    <option>Safari &amp; Wildlife</option>
                    <option>Cultural &amp; Heritage</option>
                    <option>Honeymoon</option>
                  </select>
                </QuickField>
                <QuickField
                  className="col-span-3"
                  icon={<Calendar className="h-4 w-4 text-[var(--coral)]" />}
                  label="Travel dates"
                >
                  <input
                    type="text"
                    placeholder="When?"
                    className="w-full bg-transparent text-sm font-medium text-[var(--ink)] placeholder:text-[var(--ink)]/50 focus:outline-none"
                  />
                </QuickField>
                <a
                  href="#enquiry"
                  className="col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--ocean)] to-[var(--ocean-deep)] px-4 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <Search className="h-4 w-4" />
                  Search
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slide controls */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="hidden md:grid absolute left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 place-items-center rounded-full border border-white/40 bg-white/15 backdrop-blur text-white hover:bg-[var(--coral)] hover:text-white hover:border-[var(--coral)] transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="hidden md:grid absolute right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 place-items-center rounded-full border border-white/40 bg-white/15 backdrop-blur text-white hover:bg-[var(--coral)] hover:text-white hover:border-[var(--coral)] transition-all"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 md:bottom-[140px] left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all rounded-full ${
                i === index
                  ? "w-10 h-1.5 bg-[var(--gold)]"
                  : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Marquee strip — bright accent strip */}
      <div className="bg-gradient-to-r from-[var(--ocean)] to-[var(--ocean-deep)] text-white py-3.5 overflow-hidden border-b border-[var(--gold)]/25">
        <div className="flex w-max items-center gap-12 whitespace-nowrap animate-[marquee_40s_linear_infinite]">
          {Array.from({ length: 3 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 text-sm tracking-[0.2em] uppercase font-display">
              <span>Egypt</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
              <span>Kenya</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
              <span>Zanzibar</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
              <span>Mauritius</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
              <span>Madagascar</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
              <span>Reunion</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickField({
  className = "",
  icon,
  label,
  children,
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`flex items-center gap-2.5 rounded-xl bg-[var(--sand)]/70 px-3.5 py-2.5 ${className}`}>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-white shadow-sm shrink-0">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-[9px] font-semibold tracking-[0.2em] uppercase text-[var(--ink)]/55 mb-0.5">
          {label}
        </div>
        {children}
      </div>
    </div>
  );
}
