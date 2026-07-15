"use client";

import { Award, Users, Compass, Headset } from "lucide-react";
import { WHY_CHOOSE_US } from "./data";
import { SectionLabel, Ornament } from "./ornaments";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

const ICONS: Record<string, React.ElementType> = {
  award: Award,
  users: Users,
  compass: Compass,
  headset: Headset,
};

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-sky-tint relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--ocean) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto max-w-7xl px-6 relative">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <SectionLabel>Why travel with us</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--ink)] mt-5 leading-[1.05]">
            The Sunzee <span className="italic text-gradient-coral">difference</span>
          </h2>
          <Ornament className="mt-6" />
          <p className="mt-6 text-[var(--ink)]/65 text-base md:text-lg leading-relaxed font-light">
            Three decades of local expertise, a B2B-focused team and a genuine
            love for these islands and savannahs — that&apos;s what we put to work for every guest.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Compass;
            return (
              <RevealItem key={item.title}>
                <div className="group h-full rounded-3xl bg-white border border-[var(--ocean)]/12 shadow-sm hover:shadow-xl card-lift p-7 md:p-8 relative overflow-hidden">
                  {/* Coral accent corner */}
                  <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[var(--coral)]/10 group-hover:bg-[var(--coral)]/20 transition-colors" />

                  <div className="relative">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[var(--ocean-deep)] to-[var(--ocean-ink)] text-white shadow-lg mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[var(--coral-deep)] mb-2">
                      0{i + 1}
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-[var(--ink)] leading-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--ink)]/65 leading-relaxed font-light">
                      {item.blurb}
                    </p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
