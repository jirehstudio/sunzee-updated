"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, MapPin, ArrowDown } from "lucide-react";
import { HERO_SLIDES } from "./data";

const SLIDE_DURATION = 6000;

// Per-slide: just the place name + a tiny evocative caption.
// The big headline stays the same — what changes is *where* you are.
const SLIDE_CAPTIONS = [
  { place: "Mauritius", caption: "Lagoon days, island nights" },
  { place: "Egypt", caption: "Walk with pharaohs" },
  { place: "Reunion", caption: "Chase the volcano" },
  { place: "Madagascar", caption: "Meet the baobabs" },
  { place: "Kenya", caption: "The wild awaits" },
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
      <div className="relative h-screen min-h-[600px] max-h-[920px] w-full overflow-hidden bg-[var(--ocean-ink)]">
        {/* Slides with Ken Burns effect — the photos ARE the hero */}
        {HERO_SLIDES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1800ms] ease-out ${
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
            {/* Very light overlay — just a soft bottom gradient so text is readable,
                the rest of the image breathes (stlucia.org approach) */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/25 via-transparent to-[var(--ink)]/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/30 via-transparent to-transparent" />
          </div>
        ))}

        {/* Top-left small label — just the region, no corporate tagline */}
        <div className="absolute top-6 md:top-8 left-6 md:left-10 z-10">
          <div className="inline-flex items-center gap-2 text-white/85 text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--coral)] animate-pulse" />
            East Africa &amp; Indian Ocean
          </div>
        </div>

        {/* Top-right slide counter — magazine-style */}
        <div className="absolute top-6 md:top-8 right-6 md:right-10 z-10 hidden md:flex items-center gap-2 text-white/70 text-xs tracking-[0.2em] font-display">
          <span className="text-white text-base font-semibold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px w-8 bg-white/40" />
          <span>{String(count).padStart(2, "0")}</span>
        </div>

        {/* Main content — bottom-left, minimal, image-forward */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="container mx-auto max-w-7xl px-6 md:px-10 pb-28 md:pb-32">
            {/* Per-slide place name */}
            <div
              key={`place-${index}`}
              className="inline-flex items-center gap-2 mb-4 md:mb-5 animate-[fadeInUp_700ms_ease-out]"
            >
              <MapPin className="h-4 w-4 text-[var(--gold)]" />
              <span className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-[var(--gold)]">
                {cap.place}
              </span>
            </div>

            {/* Unified headline — doesn't change per slide */}
            <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[8rem] font-medium leading-[0.92] text-white drop-shadow-xl tracking-tight">
              Find your
              <span className="block italic text-shimmer">somewhere</span>
            </h1>

            {/* Per-slide evocative caption */}
            <p
              key={`caption-${index}`}
              className="mt-4 md:mt-5 font-display italic text-white/90 text-lg md:text-2xl font-light animate-[fadeInUp_700ms_ease-out_150ms_both]"
            >
              {cap.caption}
            </p>

            {/* Two simple CTAs — exploration first, booking second */}
            <div className="mt-7 md:mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#destinations"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[var(--coral)] to-[var(--coral-deep)] px-6 md:px-7 py-3 md:py-3.5 text-sm font-semibold text-[var(--ink)] shadow-[0_12px_36px_-10px_rgba(180,140,40,0.7)] hover:shadow-[0_18px_46px_-10px_rgba(180,140,40,0.9)] hover:-translate-y-0.5 transition-all"
              >
                <span>Explore destinations</span>
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/10 backdrop-blur px-5 md:px-6 py-3 md:py-3.5 text-sm font-semibold text-white hover:bg-white/20 hover:border-[var(--gold)] transition-all"
              >
                Plan my trip
              </a>
            </div>
          </div>
        </div>

        {/* Slide controls — minimal, only on desktop */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="hidden md:grid absolute left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur text-white/80 hover:bg-[var(--coral)] hover:text-white hover:border-[var(--coral)] transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next slide"
          className="hidden md:grid absolute right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/10 backdrop-blur text-white/80 hover:bg-[var(--coral)] hover:text-white hover:border-[var(--coral)] transition-all"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots — minimal, bottom-left next to content */}
        <div className="absolute bottom-10 md:bottom-12 right-6 md:right-10 z-20 flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all rounded-full ${
                i === index
                  ? "w-8 h-1.5 bg-[var(--gold)]"
                  : "w-1.5 h-1.5 bg-white/45 hover:bg-white/80"
              }`}
            />
          ))}
        </div>

        {/* Scroll-to-explore hint — invites roaming, not searching */}
        <a
          href="#destinations"
          className="hidden md:flex absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 text-white/55 hover:text-white transition-colors group"
          aria-label="Scroll to explore"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Scroll</span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce group-hover:text-[var(--gold)]" />
        </a>
      </div>
    </section>
  );
}
