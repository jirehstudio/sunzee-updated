"use client";

import {
  Phone,
  Mail,
  MapPin,
  Compass,
  Award,
  Heart,
  Target,
  Quote,
  Globe2,
  Plane,
  Hotel,
  Ship,
  Car,
  Calendar,
  Users,
  Briefcase,
  Home,
} from "lucide-react";
import { SITE } from "./data";
import { Ornament, SectionLabel } from "./ornaments";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

export function AboutPage() {
  return (
    <main className="flex-1">
      {/* HERO BANNER — bright */}
      <section className="relative h-[50vh] min-h-[380px] max-h-[520px] overflow-hidden bg-[var(--ocean-ink)]">
        <img
          src="https://sfile.chatglm.cn/images-ppt/aefc9acf92b7.png"
          alt="About Sunzee Holidays"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Lighter overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/40 via-[var(--ink)]/35 to-[var(--ink)]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ocean-deep)]/55 via-transparent to-[var(--ocean-deep)]/30" />

        <div className="relative z-10 container mx-auto max-w-7xl px-6 h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 backdrop-blur px-4 py-1.5 mb-5">
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.32em] uppercase text-white">
              Our Story
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05] drop-shadow-lg">
            About
            <span className="italic text-[var(--gold)]"> Us</span>
          </h1>
          <Ornament className="my-5" />
          <p className="text-base md:text-lg text-white/90 font-light italic">
            Crafting journeys, building partnerships
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="bg-[var(--ocean-ink)] text-white border-b border-[var(--gold)]/20">
        <div className="container mx-auto max-w-7xl px-6 py-3 flex items-center text-xs">
          <nav className="flex items-center gap-1.5 text-white/75">
            <a href="/" className="hover:text-[var(--gold)] transition-colors">Home</a>
            <span className="text-[var(--gold)]">›</span>
            <span className="text-[var(--gold)]">About</span>
          </nav>
        </div>
      </div>

      {/* INTRODUCTION — bright with image collage */}
      <section className="py-20 md:py-28 bg-paper relative overflow-hidden">
        {/* Decorative compass watermark */}
        <div className="absolute -top-20 -right-20 opacity-[0.05] pointer-events-none text-[var(--ocean)]">
          <svg viewBox="0 0 200 200" className="w-[400px] h-[400px]" fill="currentColor" aria-hidden="true">
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M100 10 L110 90 L190 100 L110 110 L100 190 L90 110 L10 100 L90 90 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image collage (left) */}
            <Reveal y={50}>
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://sfile.chatglm.cn/images-ppt/208fd6674588.jpg"
                    alt="Sunzee travellers"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ocean-deep)]/30 to-transparent" />
                </div>
                {/* Small overlapping images */}
                <div className="hidden md:block absolute -top-6 -right-6 w-40 h-52 rounded-2xl overflow-hidden border-4 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://sfile.chatglm.cn/images-ppt/640772c2943f.jpg"
                    alt="Safari"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="hidden md:block absolute -bottom-8 -left-6 w-44 h-44 rounded-2xl overflow-hidden border-4 border-white shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://sfile.chatglm.cn/images-ppt/f2a6013672ab.jpg"
                    alt="Beach"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>

            {/* Text (right) */}
            <div>
              <Reveal>
                <SectionLabel>Welcome to Sunzee</SectionLabel>
                <h2 className="text-4xl md:text-5xl font-medium text-[var(--ink)] mt-5 leading-tight">
                  A bridge between
                  <span className="italic text-gradient-ocean"> travel agents &amp; travellers</span>
                </h2>
                <Ornament className="mt-6 justify-start" />
              </Reveal>

              <Reveal delay={0.15}>
                <p className="text-base md:text-lg text-[var(--ink)]/75 leading-relaxed mb-5 font-light mt-6">
                  Sunzee Holidays opens its doors to travel agents and travellers, providing them with an authentic and tropical experience. Specializing in the B2B segment, Sunzee Holidays strives to be the ultimate travel superstore, offering the widest selection of hotels and the best online product ranges in the B2B space across the globe.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="text-base md:text-lg text-[var(--ink)]/75 leading-relaxed font-light">
                  The father-daughter duo takes their relationship to a new horizon by becoming partners and co-founders of Sunzee Holidays. Having been in the travel and tourism industry for decades, they firmly believe in the principle that &ldquo;servicing with a smile&rdquo; reflects the true spirit of an organization, as it is a validation of its brand promise.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS — bright sky-tint section */}
      <section className="py-20 md:py-28 bg-sky-tint relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--ocean) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container mx-auto max-w-7xl px-6 relative">
          <Reveal className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel>
              <span className="text-[var(--coral-deep)]">Leadership</span>
            </SectionLabel>
            <h2 className="text-4xl md:text-5xl font-medium mt-5 leading-tight text-[var(--ink)]">
              The people behind
              <span className="block italic text-gradient-ocean">Sunzee Holidays</span>
            </h2>
            <Ornament className="mt-6" />
          </Reveal>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10" stagger={0.2}>
            {/* Founder */}
            <RevealItem>
              <div className="relative rounded-3xl border border-[var(--ocean)]/15 bg-white p-8 md:p-10 h-full group hover:shadow-xl card-lift">
                {/* Coral corner accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--coral)]/60 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[var(--coral)]/60 rounded-br-3xl" />

                {/* Avatar */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="relative shrink-0">
                    <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[var(--ocean-deep)] to-[var(--ocean-ink)] text-white text-3xl font-semibold shadow-lg">
                      IA
                    </div>
                    <div className="absolute -inset-1.5 rounded-full border border-[var(--coral)]/40 -z-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] leading-tight">
                      Imran Ally Kanowah
                    </h3>
                    <p className="text-sm text-[var(--coral-deep)] mt-1 tracking-wide italic">
                      Founder &amp; President
                    </p>
                  </div>
                </div>

                <p className="text-sm md:text-base text-[var(--ink)]/75 leading-relaxed font-light">
                  Enriched with 30 years of experience in the tourism sector, and having handled clients and groups from various destinations such as France, the UK, South Africa, India, the UAE, and the GCC, Imran wishes to assist agents and tourists with his expertise. Having worked as a General Manager and Director in his previous roles, he thoroughly understands the intricacies of client servicing. Willing to go the extra mile to ensure complete satisfaction for his valued clientele, this dedication has always been his forte. He is extremely passionate and committed to continually achieving a higher level of performance alongside his team.
                </p>

                {/* Stats */}
                <div className="mt-6 pt-5 border-t border-[var(--ocean)]/12 grid grid-cols-3 gap-3 text-center">
                  <Stat icon={Award} value="30 Yrs" label="Experience" />
                  <Stat icon={Globe2} value="6+" label="Destinations" />
                  <Stat icon={Users} value="GM & Dir" label="Former Roles" />
                </div>
              </div>
            </RevealItem>

            {/* Co-founder */}
            <RevealItem>
              <div className="relative rounded-3xl border border-[var(--ocean)]/15 bg-white p-8 md:p-10 h-full group hover:shadow-xl card-lift">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--coral)]/60 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[var(--coral)]/60 rounded-br-3xl" />

                <div className="flex items-start gap-5 mb-6">
                  <div className="relative shrink-0">
                    <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-[var(--ocean)] to-[var(--ocean-deep)] text-white text-3xl font-semibold shadow-lg">
                      ZK
                    </div>
                    <div className="absolute -inset-1.5 rounded-full border border-[var(--coral)]/40 -z-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-[var(--ink)] leading-tight">
                      Zaynah Kanowah
                    </h3>
                    <p className="text-sm text-[var(--coral-deep)] mt-1 tracking-wide italic">
                      Co-Founder &amp; CEO
                    </p>
                  </div>
                </div>

                <p className="text-sm md:text-base text-[var(--ink)]/75 leading-relaxed font-light">
                  Qualified in Business and Tourism Management and specializing in Business-to-Business (B2B), MICE/events, and travel technology, Zaynah strongly believes that her passion for the industry was passed down by her father. Like him, she believes in listening to and understanding a client&apos;s needs, recognizing that a journey is a memory of a lifetime. In her previous roles, she has enhanced processes, driven innovation, and initiated changes that foster future business growth. Her belief in strong trade partnerships consistently leads to better outcomes, a value she brings to all her upcoming projects. Her mantra is: &ldquo;You will be judged by what you do, not what you say.&rdquo;
                </p>

                <div className="mt-6 pt-5 border-t border-[var(--ocean)]/12 grid grid-cols-3 gap-3 text-center">
                  <Stat icon={Briefcase} value="B2B" label="Specialist" />
                  <Stat icon={Calendar} value="MICE" label="Events" />
                  <Stat icon={Compass} value="Tech" label="Innovation" />
                </div>
              </div>
            </RevealItem>
          </RevealStagger>
        </div>
      </section>

      {/* MEANING OF SUNZEE — bright */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-5xl px-6">
          <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* Left: Sun + Sea visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[var(--coral)]/20 via-[var(--gold)]/15 to-[var(--ocean)]/20 p-10 flex items-center justify-center relative">
                {/* Decorative ring */}
                <div className="absolute inset-6 rounded-full border border-[var(--coral)]/40" />
                <div className="absolute inset-10 rounded-full border border-[var(--ocean)]/20" />

                <div className="relative text-center">
                  <div className="text-7xl md:text-8xl font-light text-[var(--coral-deep)] leading-none">
                    Sun
                  </div>
                  <div className="text-2xl italic text-[var(--ink)]/40 my-3">
                    &amp;
                  </div>
                  <div className="text-7xl md:text-8xl font-light text-[var(--ocean-deep)] leading-none">
                    Zee
                  </div>
                  <div className="mt-5 text-xs tracking-[0.3em] uppercase text-[var(--ink)]/50">
                    Sun &amp; Sea
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 rounded-2xl bg-gradient-to-br from-[var(--coral)] to-[var(--coral-deep)] text-[var(--ink)] px-4 py-2 shadow-lg rotate-3">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Sun + Zee</span>
              </div>
            </div>

            {/* Right: text */}
            <div>
              <SectionLabel>Etymology</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-medium text-[var(--ink)] mt-5 leading-tight">
                What is the meaning of
                <span className="block italic text-gradient-ocean">Sunzee?</span>
              </h2>
              <Ornament className="my-6 justify-start" />
              <p className="text-base md:text-lg text-[var(--ink)]/75 leading-relaxed font-light">
                Sunzee is a combination of two words: &ldquo;Sun&rdquo;, the English word for sunlight, and &ldquo;Zee&rdquo;, the Dutch word for sea. Thus, &ldquo;Sun &amp; Zee&rdquo; becomes the perfect combination.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT WE OFFER + WHAT WE ASSIST FOR — bright */}
      <section className="py-20 md:py-28 bg-sand-tint relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--ocean) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="container mx-auto max-w-7xl px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            {/* What we offer */}
            <Reveal>
              <div className="rounded-3xl border border-[var(--ocean)]/15 bg-white p-8 md:p-10 h-full shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--ocean-deep)] to-[var(--ocean-ink)] text-white shadow-md">
                    <Plane className="h-5 w-5" />
                  </div>
                  <h3 className="text-3xl font-semibold text-[var(--ink)]">
                    What we offer?
                  </h3>
                </div>
                <div className="h-px w-16 bg-[var(--coral)]/60 mb-6" />
                <ul className="space-y-4">
                  {[
                    "High-quality vacations in Mauritius, other Indian Ocean islands, and neighbouring countries",
                    "Leisure, cultural, and physical adventure holidays",
                    "Business and MICE (Meetings, Incentives, Conferences, and Exhibitions) travel",
                    "Day trips and urban excursions",
                    "Special interest tours, theme tours, honeymoon/wedding packages, and photo shoots",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[var(--coral)]/15 text-[var(--coral-deep)] text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm md:text-base text-[var(--ink)]/80 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* What we assist for */}
            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-[var(--ocean)]/15 bg-white p-8 md:p-10 h-full shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--ocean)] to-[var(--ocean-deep)] text-white shadow-md">
                    <Compass className="h-5 w-5" />
                  </div>
                  <h3 className="text-3xl font-semibold text-[var(--ink)]">
                    What do we assist for?
                  </h3>
                </div>
                <div className="h-px w-16 bg-[var(--coral)]/60 mb-6" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: Hotel, label: "Hotel and resort bookings" },
                    { icon: Home, label: "Private villas and apartments" },
                    { icon: Car, label: "Ground services and transfers" },
                    { icon: MapPin, label: "Tour guide services" },
                    { icon: Compass, label: "Event management" },
                    { icon: Car, label: "Car rentals" },
                    { icon: Globe2, label: "Land and water activities" },
                  ].map(({ icon: Icon, label }, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 rounded-xl border border-[var(--ocean)]/12 bg-[var(--sand)]/50 px-3.5 py-2.5 hover:bg-[var(--ocean)]/10 hover:border-[var(--ocean)]/30 transition-all"
                    >
                      <Icon className="h-4 w-4 text-[var(--coral)] shrink-0" />
                      <span className="text-xs md:text-sm text-[var(--ink)]/85 leading-tight">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* AIM & MOTTO — bright */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Decorative compass watermark */}
        <div className="absolute -bottom-20 -left-20 opacity-[0.05] pointer-events-none text-[var(--ocean)]">
          <svg viewBox="0 0 200 200" className="w-[400px] h-[400px]" fill="currentColor" aria-hidden="true">
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M100 10 L110 90 L190 100 L110 110 L100 190 L90 110 L10 100 L90 90 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto max-w-5xl px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Our Aim */}
            <Reveal>
              <div className="relative rounded-3xl border border-[var(--ocean)]/15 bg-white p-8 md:p-10 h-full shadow-md hover:shadow-xl card-lift">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[var(--ocean)]/50 rounded-tl-3xl" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[var(--ocean-deep)] to-[var(--ocean-ink)] text-white shadow-md">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-3xl font-semibold text-[var(--ink)]">
                    Our aim
                  </h3>
                </div>
                <div className="h-px w-16 bg-[var(--coral)]/60 mb-6" />
                <p className="text-base md:text-lg text-[var(--ink)]/75 leading-relaxed font-light">
                  To be a reliable partner to our agents throughout the world and to provide our guests with unforgettable experiences, supported by our skilled professional team who deliver firsthand assistance with passion and dedication.
                </p>
              </div>
            </Reveal>

            {/* Our Motto */}
            <Reveal delay={0.15}>
              <div className="relative rounded-3xl bg-gradient-to-br from-[var(--coral)] to-[var(--coral-deep)] text-[var(--ink)] p-8 md:p-10 h-full shadow-lg overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.08] pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="absolute -top-6 -right-6 text-white/15">
                  <Quote className="h-24 w-24" />
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 text-white">
                      <Heart className="h-6 w-6" />
                    </div>
                    <h3 className="text-3xl font-semibold text-white">
                      Our Motto
                    </h3>
                  </div>
                  <div className="h-px w-16 bg-white/60 mb-6" />
                  <p className="text-2xl md:text-3xl italic font-light leading-tight text-white">
                    &ldquo;Our guests&apos; satisfaction is our achievement.&rdquo;
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA — bright */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-[var(--ocean-deep)] to-[var(--ocean-ink)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="container mx-auto max-w-4xl px-6 relative text-center">
          <SectionLabel>
            <span className="text-[var(--gold)]">Begin your journey</span>
          </SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mt-5 leading-[1.05]">
            Partner with
            <span className="block italic text-[var(--gold)]">Sunzee Holidays</span>
          </h2>
          <Ornament className="my-7" />
          <p className="text-white/85 text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            Whether you&apos;re a travel agent seeking a reliable B2B partner or a traveller dreaming of the Indian Ocean, our team is ready to craft your next chapter.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/#enquiry"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--ocean)] to-[var(--ocean-deep)] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(28,80,170,0.7)] hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="h-4 w-4" />
              Get in touch
            </a>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 backdrop-blur px-7 py-4 text-sm font-semibold text-white hover:bg-white/25 hover:border-[var(--gold)] transition-all"
            >
              <Phone className="h-4 w-4" />
              or call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-[var(--ocean)]/15 bg-[var(--sand)]/50 px-2 py-3">
      <Icon className="h-4 w-4 text-[var(--coral)] mx-auto mb-1" />
      <div className="text-xl font-semibold text-[var(--ocean-deep)] leading-none">
        {value}
      </div>
      <div className="text-[10px] text-[var(--ink)]/55 mt-1 tracking-wide">
        {label}
      </div>
    </div>
  );
}
