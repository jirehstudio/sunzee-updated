"use client";

import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { SITE, TOUR_PACKAGES, IMPORTANT_LINKS } from "./data";

export function Footer() {
  return (
    <footer id="contact" className="bg-[var(--ocean-deep)] text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-[var(--ocean)] via-[var(--coral)] to-[var(--gold)]" />

      <div className="container mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-20 md:pb-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative h-14 w-14 shrink-0 rounded-full bg-gradient-to-br from-[var(--coral)] to-[var(--coral-deep)] grid place-items-center shadow-md ring-2 ring-white/15">
                <span className="font-display text-2xl font-semibold text-white leading-none">S</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold text-white">
                  Sunzee
                </span>
                <span className="font-display text-xl font-semibold text-[var(--gold)] italic">
                  Holidays
                </span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-5 font-light">
              {SITE.tagline}. Crafting tailor-made journeys across Egypt,
              Kenya, Zanzibar, Mauritius, Madagascar and Reunion.
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-3 text-sm hover:text-[var(--gold)] transition-colors group"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-colors">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-sm hover:text-[var(--gold)] transition-colors group break-all"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-colors shrink-0">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  {SITE.email}
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 shrink-0">
                    <MapPin className="h-3.5 w-3.5 text-[var(--gold)]" />
                  </span>
                  East Africa &amp; Indian Ocean
                </div>
              </li>
            </ul>
          </div>

          {/* Browse tour */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-5 text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--coral)]" />
              Browse Tour
            </h3>
            <ul className="space-y-3">
              {TOUR_PACKAGES.map((t) => (
                <li key={t.label}>
                  <a
                    href={t.href}
                    className="flex items-center gap-1.5 text-sm text-white/70 hover:text-[var(--gold)] transition-colors group"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[var(--coral)] transition-transform group-hover:translate-x-1" />
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important links */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-5 text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--coral)]" />
              Important Links
            </h3>
            <ul className="space-y-3">
              {IMPORTANT_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="flex items-center gap-1.5 text-sm text-white/70 hover:text-[var(--gold)] transition-colors group"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[var(--coral)] transition-transform group-hover:translate-x-1" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect + newsletter */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-5 text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--coral)]" />
              Connect with us
            </h3>
            <p className="text-sm text-white/65 mb-4 leading-relaxed font-light">
              Get travel inspiration and seasonal offers, delivered to your inbox.
            </p>
            <form
              className="rounded-2xl bg-white/10 backdrop-blur border border-white/15 p-2 flex items-center gap-2 mb-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-[var(--coral)] to-[var(--coral-deep)] px-4 py-2 text-xs font-semibold text-white hover:shadow-lg transition-all"
              >
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-2.5">
              <SocialIcon href={SITE.facebook} label="Facebook">
                <Facebook className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={SITE.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={SITE.twitter} label="Twitter">
                <Twitter className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={SITE.youtube} label="YouTube">
                <Youtube className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={SITE.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10 bg-[var(--ink)]/40">
        <div className="container mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/75">
          <p className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />
            {SITE.copyright}
          </p>
          <p className="text-xs text-white/55">
            Crafted with <span className="text-[var(--coral)]">♥</span> for travellers &amp; agents everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 hover:bg-[var(--coral)] hover:border-[var(--coral)] hover:text-white transition-all"
    >
      {children}
    </a>
  );
}
