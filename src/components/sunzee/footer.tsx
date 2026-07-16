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
  Send,
  Globe2,
  Compass,
} from "lucide-react";
import { SITE, TOUR_PACKAGES, IMPORTANT_LINKS, DESTINATIONS } from "./data";

export function Footer() {
  return (
    <footer id="contact" className="bg-[var(--ocean-ink)] text-white relative overflow-hidden">
      {/* Decorative top wave — ocean flowing into the footer */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Decorative compass watermark */}
      <div className="absolute -bottom-32 -left-32 opacity-[0.04] pointer-events-none text-white">
        <svg viewBox="0 0 200 200" className="w-[500px] h-[500px]" fill="currentColor" aria-hidden="true">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M100 10 L110 90 L190 100 L110 110 L100 190 L90 110 L10 100 L90 90 Z" fill="currentColor" />
        </svg>
      </div>

      {/* ============ TOP CTA BAND ============ */}
      <div className="relative border-b border-white/10">
        <div className="container mx-auto max-w-7xl px-6 py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[var(--ocean)] to-[var(--ocean-deep)] shadow-lg shrink-0">
                <Compass className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight">
                  Ready to wander somewhere new?
                </h3>
                <p className="text-sm text-white/65 mt-1 font-light">
                  Our destination specialists craft tailor-made journeys — start yours today.
                </p>
              </div>
            </div>
            <a
              href="/#enquiry"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[var(--ocean)] to-[var(--ocean-deep)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_36px_-10px_rgba(28,80,170,0.7)] hover:shadow-[0_18px_46px_-10px_rgba(28,80,170,0.9)] hover:-translate-y-0.5 transition-all shrink-0"
            >
              <span>Plan My Trip</span>
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ============ MAIN FOOTER GRID ============ */}
      <div className="relative container mx-auto max-w-7xl px-6 pt-14 pb-8 md:pt-16 md:pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand col */}
          <div>
            <div className="flex items-center mb-5">
              <div className="relative h-14 w-14 shrink-0 rounded-full overflow-hidden shadow-md ring-2 ring-[var(--gold)]/40 bg-white">
                <img
                  src="/sunzee/logo.png"
                  alt={`${SITE.name} logo`}
                  className="h-full w-full object-contain p-0.5"
                />
              </div>
            </div>
            <p className="font-display italic text-lg text-[var(--gold)] mb-3 leading-tight">
              Sun &amp; Zee — Sun &amp; Sea
            </p>
            <p className="text-sm text-white/70 leading-relaxed mb-6 font-light">
              {SITE.tagline}. Crafting tailor-made journeys across East Africa and the Indian Ocean.
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-3 text-sm hover:text-[var(--gold)] transition-colors group"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/8 group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-colors">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-white/45">Call us</span>
                    {SITE.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-sm hover:text-[var(--gold)] transition-colors group break-all"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/8 group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)] transition-colors shrink-0">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-white/45">Email us</span>
                    {SITE.email}
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/8 shrink-0">
                    <Globe2 className="h-4 w-4 text-[var(--gold)]" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-white/45">Coverage</span>
                    East Africa &amp; Indian Ocean
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Browse tour */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-5 text-white flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--gold)]" />
              Browse Tour
            </h3>
            <ul className="space-y-2.5">
              {TOUR_PACKAGES.map((t) => (
                <li key={t.label}>
                  <a
                    href={t.href}
                    className="group flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[var(--gold)] transition-transform group-hover:translate-x-1" />
                    <span className="group-hover:translate-x-0.5 transition-transform">{t.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important links */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-5 text-white flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--gold)]" />
              Important Links
            </h3>
            <ul className="space-y-2.5">
              {IMPORTANT_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[var(--gold)] transition-transform group-hover:translate-x-1" />
                    <span className="group-hover:translate-x-0.5 transition-transform">{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Destinations quick chips */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/45 mb-3 font-semibold">Destinations</div>
              <div className="flex flex-wrap gap-1.5">
                {DESTINATIONS.map((d) => (
                  <a
                    key={d.name}
                    href={d.href}
                    className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-white/70 hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-[var(--ink)] transition-all"
                  >
                    {d.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Connect + newsletter */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-5 text-white flex items-center gap-2">
              <span className="h-px w-6 bg-[var(--gold)]" />
              Stay Inspired
            </h3>
            <p className="text-sm text-white/65 mb-4 leading-relaxed font-light">
              Get travel inspiration, seasonal offers and insider tips — delivered monthly.
            </p>
            <form
              className="rounded-2xl bg-white/8 backdrop-blur border border-white/12 p-1.5 flex items-center gap-1.5 mb-5 focus-within:border-[var(--gold)]/40 transition-colors"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-white/45 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[var(--ocean)] to-[var(--ocean-deep)] text-white hover:shadow-lg transition-all"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/45 mb-3 font-semibold">Follow us</div>
            <div className="flex items-center gap-2">
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

      {/* ============ COPYRIGHT BAR ============ */}
      <div className="relative border-t border-white/10 bg-[var(--ink)]/45">
        <div className="container mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/70">
          <p className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[var(--gold)]" />
            {SITE.copyright}
          </p>
          <p className="text-xs text-white/55 font-display italic">
            Sun &amp; Zee · Sun &amp; Sea · Crafted for travellers &amp; agents everywhere
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
      className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/75 hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-[var(--ink)] hover:-translate-y-0.5 transition-all"
    >
      {children}
    </a>
  );
}
