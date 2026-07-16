"use client";

import { Mail, Phone } from "lucide-react";
import { SITE, CTA_IMAGE } from "./data";
import { Ornament } from "./ornaments";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image — bright beach/sunset (replaces dark emerald) */}
      <div className="absolute inset-0">
        <img
          src={CTA_IMAGE}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover scale-105"
        />
        {/* Lighter overlay — keeps the photo visible (tourism vibe) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ocean-deep)]/85 via-[var(--ocean-deep)]/55 to-[var(--ocean-deep)]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/45 to-transparent" />
      </div>

      <div className="relative container mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 backdrop-blur px-4 py-2 mb-7">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--gold)] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--gold)]" />
          </span>
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase text-white">
            Limited slots for the season
          </span>
        </div>

        <h2 className="font-display text-xl sm:text-4xl md:text-5xl lg:text-7xl font-medium uppercase leading-[1.15] text-white tracking-tight drop-shadow-lg">
          Relax And Enjoy Your
          <br />
          <span className="italic text-shimmer">Holiday With Sunzee Holidays</span>
        </h2>

        <Ornament className="my-8" />

        <p className="text-xl md:text-2xl text-white/90 font-display italic font-light">
          Luxury Hotel &amp; Best Resort
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${SITE.bookingEmail}`}
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--ocean)] to-[var(--ocean-deep)] px-9 py-4 text-sm font-semibold text-white shadow-[0_12px_40px_-10px_rgba(28,80,170,0.85)] hover:shadow-[0_18px_50px_-10px_rgba(28,80,170,1)] hover:-translate-y-1 transition-all"
          >
            <Mail className="h-4 w-4" />
            <span className="tracking-wide">BOOK NOW</span>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/15 backdrop-blur px-8 py-4 text-sm font-semibold text-white hover:bg-white/25 hover:border-[var(--gold)] transition-all"
          >
            <Phone className="h-4 w-4" />
            or call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
