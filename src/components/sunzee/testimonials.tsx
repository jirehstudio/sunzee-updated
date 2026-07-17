"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "./data";
import { SectionLabel, Ornament } from "./ornaments";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <SectionLabel>Traveller stories</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--ink)] mt-5 leading-[1.05]">
            Loved by <span className="italic text-gradient-ocean">travellers &amp; agents</span>
          </h2>
          <Ornament className="mt-6" />
          <p className="mt-6 text-[var(--ink)]/65 text-base md:text-lg leading-relaxed font-light">
            From honeymoon couples to B2B agents around the world — here&apos;s what
            our travellers say after coming home from a Sunzee journey.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" stagger={0.15}>
          {TESTIMONIALS.map((t, i) => (
            <RevealItem key={i}>
              <div className="relative h-full rounded-3xl bg-[var(--sand)]/50 border border-[var(--ocean)]/12 p-7 md:p-8 shadow-sm hover:shadow-lg card-lift overflow-hidden">
                {/* Big quote watermark */}
                <Quote className="absolute -top-2 -right-2 h-20 w-20 text-[var(--coral)]/15" />

                <div className="relative">
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-base md:text-lg text-[var(--ink)]/85 leading-relaxed font-light italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-5 border-t border-[var(--ocean)]/12">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[var(--ocean)] to-[var(--ocean-deep)] text-white text-base font-semibold shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-base font-semibold text-[var(--ink)] leading-tight">
                        {t.name}
                      </div>
                      <div className="text-xs text-[var(--ink)]/55 mt-0.5">
                        {t.detail}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
