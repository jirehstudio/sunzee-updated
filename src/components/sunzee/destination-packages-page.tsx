"use client";

import { useState } from "react";
import {
  Search,
  Clock,
  Star,
  MapPin,
  Calendar,
  Users,
  Filter,
  X,
  ChevronRight,
  Home,
  Globe,
  Sun,
  Coins,
  Utensils,
  Hotel,
  Compass,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import {
  DestinationPackages,
  FILTER_FACILITIES,
} from "./destination-data";
import { SITE } from "./data";
import { Ornament, SectionLabel } from "./ornaments";
import { Reveal, RevealStagger, RevealItem } from "./reveal";

export function DestinationPackagesPage({ data }: { data: DestinationPackages }) {
  const { details } = data;
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [priceMax, setPriceMax] = useState(2500);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeItineraryIndex, setActiveItineraryIndex] = useState(0);

  const availableItineraries = data.itineraries && data.itineraries.length > 0
    ? data.itineraries
    : data.itinerary && data.itinerary.length > 0
    ? [{ title: `${data.name} Signature Itinerary`, duration: data.itineraryDuration || "", days: data.itinerary }]
    : [];

  const activeItinerary = availableItineraries[activeItineraryIndex] || availableItineraries[0];

  const toggleFacility = (f: string) =>
    setSelectedFacilities((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );

  const resetFilters = () => {
    setPriceMax(2500);
    setSelectedFacilities([]);
    setSearchQuery("");
  };

  const filteredPackages = data.packages.filter(
    (p) =>
      p.price <= priceMax &&
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex-1">
      {/* HERO BANNER */}
      <section className="relative h-[48vh] min-h-[350px] max-h-[500px] overflow-hidden bg-[var(--ocean-ink)]">
        <img
          src={data.heroImage}
          alt={data.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/40 via-[var(--ink)]/30 to-[var(--ink)]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ocean-deep)]/55 via-transparent to-[var(--ocean-deep)]/30" />

        <div className="relative z-10 container mx-auto max-w-7xl px-6 h-full flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 backdrop-blur px-4 py-1.5 mb-5">
            <MapPin className="h-3.5 w-3.5 text-[var(--gold)]" />
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.32em] uppercase text-white">
              East Africa &amp; Indian Ocean Portfolio
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05] drop-shadow-lg">
            {data.name}
          </h1>
          <Ornament className="my-5" />
          <p className="text-base md:text-lg text-white/90 font-light italic max-w-2xl">
            {data.subtitle}
          </p>
        </div>
      </section>

      {/* HERO GALLERY STRIP */}
      {data.heroGallery && data.heroGallery.length > 0 && (
        <section className="bg-white border-b border-[var(--ocean)]/10">
          <div className="container mx-auto max-w-7xl px-6 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {data.heroGallery.slice(0, 4).map((img, i) => (
                <div
                  key={i}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg card-lift"
                >
                  <img
                    src={img}
                    alt={`${data.name} ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BREADCRUMB */}
      <div className="bg-[var(--ocean-ink)] text-white border-b border-[var(--gold)]/20">
        <div className="container mx-auto max-w-7xl px-6 py-3 flex items-center justify-between text-xs">
          <nav className="flex items-center gap-1.5 text-white/75">
            <a href="/" className="hover:text-[var(--gold)] flex items-center gap-1.5 transition-colors">
              <Home className="h-3 w-3" />
              Home
            </a>
            <ChevronRight className="h-3 w-3 text-[var(--gold)]" />
            <span className="text-white/60">Destinations</span>
            <ChevronRight className="h-3 w-3 text-[var(--gold)]" />
            <span className="text-[var(--gold)] font-semibold">{data.name}</span>
          </nav>
        </div>
      </div>

      {/* MAIN CONTENT: grid + sidebar */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* LEFT COLUMN: Main Information & Packages */}
            <div className="lg:col-span-8 space-y-12 order-1 lg:order-1">

              {/* Destination Overview */}
              {details && (
                <Reveal>
                  <div className="bg-white border border-[var(--ocean)]/15 rounded-3xl p-6 md:p-8 shadow-sm">
                    <SectionLabel><span className="whitespace-nowrap">Destination Overview</span></SectionLabel>
                    <h2 className="text-3xl md:text-4xl font-medium text-[var(--ink)] mt-3 mb-5 leading-tight">
                      Experience {data.name}
                    </h2>
                    <p className="text-base md:text-lg text-[var(--ink)]/80 leading-relaxed font-light mb-6">
                      {details.idealFor}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-[var(--ocean)]/12">
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--ocean)]/10 text-[var(--ocean-deep)]">
                          <Users className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-[10px] text-[var(--ink)]/50 uppercase tracking-wider">Perfect For</div>
                          <div className="text-sm font-semibold text-[var(--ocean-deep)]">Families &amp; Kids</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--gold)]/15 text-[var(--gold)]">
                          <HeartIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-[10px] text-[var(--ink)]/50 uppercase tracking-wider">Ideal For</div>
                          <div className="text-sm font-semibold text-[var(--ocean-deep)]">Couples &amp; Honeymoons</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[var(--ocean)]/10 text-[var(--ocean-deep)]">
                          <Compass className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-[10px] text-[var(--ink)]/50 uppercase tracking-wider">Great For</div>
                          <div className="text-sm font-semibold text-[var(--ocean-deep)]">Solo Explorers</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Places of Interest / Must-See Attractions */}
              {details && details.mustSee && details.mustSee.length > 0 && (
                <Reveal>
                  <div className="space-y-6">
                    <div>
                      <SectionLabel>Must-See Attractions</SectionLabel>
                      <h2 className="text-3xl md:text-4xl font-medium text-[var(--ink)] mt-3">
                        Places of Interest
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {details.mustSee.map((place, index) => (
                        <div
                          key={place}
                          className="flex items-start gap-3.5 bg-white border border-[var(--ocean)]/15 rounded-2xl p-4 shadow-sm hover:border-[var(--ocean)]/40 transition-all duration-300"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--ocean-deep)] text-white text-xs font-semibold">
                            {index + 1}
                          </span>
                          <p className="text-sm md:text-base text-[var(--ink)]/85 font-medium leading-normal pt-0.5">
                            {place}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Curated Experiences / Top Activities */}
              {details && details.activities && details.activities.length > 0 && (
                <Reveal>
                  <div className="space-y-6">
                    <div>
                      <SectionLabel>Curated Experiences</SectionLabel>
                      <h2 className="text-3xl md:text-4xl font-medium text-[var(--ink)] mt-3">
                        Top Tours &amp; Activities
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {details.activities.map((act) => (
                        <div
                          key={act.title}
                          className="bg-white border border-[var(--ocean)]/15 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-[var(--ocean)]/35 transition-all duration-300 flex flex-col justify-between"
                        >
                          <div className="space-y-2.5">
                            <h3 className="text-lg font-semibold text-[var(--ocean-deep)]">
                              {act.title}
                            </h3>
                            <p className="text-sm text-[var(--ink)]/70 leading-relaxed font-light">
                              {act.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Destination Visual Gallery */}
              {details && details.gallery && details.gallery.length > 0 && (
                <Reveal>
                  <div className="space-y-6">
                    <div>
                      <SectionLabel>Visual Showcase</SectionLabel>
                      <h2 className="text-3xl md:text-4xl font-medium text-[var(--ink)] mt-3">
                        Destination Gallery
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {details.gallery.map((item) => (
                        <div
                          key={item.title}
                          className="group relative overflow-hidden rounded-2xl bg-white border border-[var(--ocean)]/15 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col h-full card-lift"
                        >
                          <div className="relative aspect-[4/3] overflow-hidden bg-[var(--ocean-deep)]">
                            <img
                              src={item.url}
                              alt={item.title}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 via-transparent to-transparent" />
                            <span className="absolute top-3 left-3 rounded-full bg-[var(--gold)] text-[var(--ink)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                              {item.category}
                            </span>
                          </div>
                          <div className="p-4 flex-1 flex flex-col justify-center">
                            <h4 className="text-sm font-semibold text-[var(--ocean-deep)] leading-tight text-center">
                              {item.title}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Vehicle Fleet */}
              {details && details.fleetImage && (
                <Reveal>
                  <div className="bg-white border border-[var(--ocean)]/15 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                    <div>
                      <SectionLabel>Private Transportation</SectionLabel>
                      <h2 className="text-3xl md:text-4xl font-medium text-[var(--ink)] mt-3">
                        Our Premium Vehicle Fleet
                      </h2>
                    </div>

                    <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--ocean)]/15 shadow-md">
                      <img
                        src={details.fleetImage}
                        alt={`${data.name} Vehicle Fleet`}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <p className="text-sm md:text-base text-[var(--ink)]/75 leading-relaxed font-light">
                      For your ultimate comfort and safety, we operate our own premium, fully air-conditioned vehicle fleet. From airport transfers and shuttle runs to private sightseeing excursions, we provide high-quality travel options driven by professional local chauffeurs who prioritize your travel experience.
                    </p>
                  </div>
                </Reveal>
              )}

              {/* Tour Packages & Itineraries Section */}
              <Reveal>
                <div className="space-y-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <SectionLabel>Itineraries &amp; Routes</SectionLabel>
                      <h2 className="text-3xl md:text-4xl font-medium text-[var(--ink)] mt-3">
                        Tour Packages
                      </h2>
                    </div>
                    {filteredPackages.length > 0 && (
                      <p className="text-sm text-[var(--ink)]/55 hidden sm:block">
                        Showing <span className="font-semibold text-[var(--ocean-deep)]">{filteredPackages.length}</span> of {data.packages.length} packages
                      </p>
                    )}
                  </div>

                  {filteredPackages.length > 0 ? (
                    <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                      {filteredPackages.map((pkg) => (
                        <RevealItem key={pkg.name}>
                          <article className="group relative overflow-hidden rounded-3xl bg-white border border-[var(--ocean)]/15 shadow-sm hover:shadow-2xl card-lift h-full flex flex-col">
                            {/* Image */}
                            <div className="relative aspect-[16/11] overflow-hidden bg-[var(--ocean-deep)]">
                              <img
                                src={pkg.image}
                                alt={pkg.name}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/75 via-transparent to-transparent" />
                              <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-white/85 backdrop-blur text-[var(--ink)] px-2.5 py-1 text-[10px] font-semibold tracking-wide">
                                <Clock className="h-3 w-3 text-[var(--gold)]" />
                                {pkg.duration}
                              </div>
                              <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-[var(--gold)] text-[var(--ink)] px-2.5 py-1 text-[10px] font-bold shadow-md">
                                <Star className="h-3 w-3 fill-current" />
                                {pkg.rating}.0
                              </div>
                              <div className="absolute inset-x-0 bottom-0 p-4">
                                <h3 className="text-xl md:text-2xl font-medium text-white leading-tight drop-shadow-md">
                                  {pkg.name}
                                </h3>
                              </div>
                            </div>

                            {/* Body */}
                            <div className="p-5 flex flex-col flex-1">
                              <p className="text-sm text-[var(--ink)]/65 leading-relaxed mb-4 flex-1">
                                {pkg.description}
                              </p>

                              {pkg.gallery && pkg.gallery.length > 1 && (
                                <div className="flex items-center gap-1.5 mb-4">
                                  {pkg.gallery.slice(0, 4).map((g, gi) => (
                                    <div
                                      key={gi}
                                      className="relative flex-1 aspect-[4/3] rounded-lg overflow-hidden bg-[var(--sand)]"
                                    >
                                      <img
                                        src={g}
                                        alt={`${pkg.name} ${gi + 1}`}
                                        loading="lazy"
                                        className="h-full w-full object-cover"
                                      />
                                    </div>
                                  ))}
                                </div>
                              )}

                              <div className="flex items-center justify-between pt-3 border-t border-[var(--ocean)]/12">
                                <div>
                                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/50">
                                    From
                                  </div>
                                  <div className="text-2xl font-semibold text-gradient-ocean">
                                    ${pkg.price}
                                  </div>
                                </div>
                                <a
                                  href={`mailto:${SITE.bookingEmail}?subject=Enquiry: ${pkg.name} (${data.title})`}
                                  className="group/btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--ocean)] to-[var(--ocean-deep)] px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                                >
                                  Book Now
                                  <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20 group-hover/btn:translate-x-0.5 transition-transform">
                                    →
                                  </span>
                                </a>
                              </div>
                            </div>

                            <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[var(--gold)] via-[var(--coral-deep)] to-[var(--gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                          </article>
                        </RevealItem>
                      ))}
                    </RevealStagger>
                  ) : null}

                  {/* Day-by-Day Signature Itinerary Timeline */}
                  {availableItineraries.length > 0 && activeItinerary && (
                    <div className="mt-8 space-y-6">
                      {/* Tab Selector if multiple itineraries */}
                      {availableItineraries.length > 1 && (
                        <div className="flex flex-wrap items-center gap-2 p-2 bg-white rounded-2xl border border-[var(--ocean)]/15 shadow-sm">
                          <span className="text-xs font-semibold text-[var(--ink)]/50 uppercase tracking-wider px-3 hidden sm:inline">
                            Select Option:
                          </span>
                          {availableItineraries.map((it, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setActiveItineraryIndex(idx)}
                              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                activeItineraryIndex === idx
                                  ? "bg-gradient-to-r from-[var(--ocean)] to-[var(--ocean-deep)] text-white shadow-md"
                                  : "bg-gray-50 text-[var(--ink)]/75 border border-transparent hover:border-[var(--ocean)]/20 hover:bg-white"
                              }`}
                            >
                              {it.duration}
                            </button>
                          ))}
                        </div>
                      )}

                      <div className="space-y-8 pb-4">
                        <div className="bg-gradient-to-r from-[var(--ocean)]/10 to-transparent border border-[var(--ocean)]/20 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div>
                            <h4 className="text-lg font-semibold text-[var(--ocean-deep)]">
                              {activeItinerary.title || "Signature Route"}
                            </h4>
                            <p className="text-xs text-[var(--ink)]/50 uppercase tracking-wider mt-0.5">
                              {data.name} Islands Tour Itinerary
                            </p>
                          </div>
                          <div className="bg-[var(--ocean-deep)] text-white px-4 py-2 rounded-xl text-xs md:text-sm font-semibold tracking-wide">
                            {activeItinerary.duration}
                          </div>
                        </div>

                        <RevealStagger key={activeItineraryIndex} className="space-y-6 relative before:absolute before:inset-y-0 before:left-[19px] before:w-0.5 before:bg-[var(--ocean)]/20">
                          {activeItinerary.days.map((item) => (
                            <RevealItem key={item.day}>
                              <div className="relative pl-12 group">
                                <div className="absolute left-0 top-1.5 grid h-10 w-10 place-items-center rounded-full bg-white border-2 border-[var(--ocean-deep)] text-[var(--ocean-deep)] text-sm font-bold shadow-sm group-hover:bg-[var(--ocean-deep)] group-hover:text-white transition-all duration-300">
                                  {item.day}
                                </div>
                                <div className="bg-white border border-[var(--ocean)]/15 rounded-2xl p-6 shadow-sm hover:border-[var(--ocean)]/40 hover:shadow-md transition-all duration-300">
                                  <h3 className="text-lg md:text-xl font-semibold text-[var(--ocean-deep)] group-hover:text-[var(--gold)] transition-colors duration-300 leading-snug">
                                    Day {item.day}: {item.title}
                                  </h3>
                                  <p className="text-sm md:text-base text-[var(--ink)]/75 leading-relaxed font-light mt-3">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            </RevealItem>
                          ))}
                        </RevealStagger>
                      </div>
                    </div>
                  )}

                  {/* Maldives Custom Bespoke Resort Booking Card */}
                  {(!data.packages || data.packages.length === 0) && availableItineraries.length === 0 && data.name === "Maldives" && (
                    <div className="relative overflow-hidden rounded-3xl border border-[var(--ocean)]/20 bg-white p-8 md:p-10 shadow-sm text-center space-y-6">
                      <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--ocean)]/10 text-[var(--ocean-deep)] mx-auto">
                        <Compass className="h-8 w-8 text-[var(--ocean-deep)]" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-[var(--ocean-deep)]">
                          Bespoke Maldives Resort &amp; Beach Bookings
                        </h3>
                        <p className="text-sm md:text-base text-[var(--ink)]/75 max-w-xl mx-auto leading-relaxed font-light">
                          Since the Maldives is a pure resort-island destination, there are no fixed routes. We focus entirely on curating the perfect white-sand beach experiences, private overwater villas, and luxury resort stays tailored directly to your dreams.
                        </p>
                      </div>
                      <div className="pt-2">
                        <a
                          href={`mailto:${SITE.bookingEmail}?subject=Bespoke Maldives Luxury Resort Booking`}
                          className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[var(--ocean)] to-[var(--ocean-deep)] px-6 py-3 text-xs font-semibold text-white shadow-md hover:shadow-lg transition-all"
                        >
                          Request Custom Maldives Booking
                          <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20 group-hover:translate-x-0.5 transition-transform">→</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Fallback when no packages or itineraries present */}
                  {(!data.packages || data.packages.length === 0) && availableItineraries.length === 0 && data.name !== "Maldives" && (
                    <div className="rounded-3xl border-2 border-dashed border-[var(--ocean)]/30 bg-white p-8 text-center space-y-4">
                      <div className="grid h-14 w-14 place-items-center rounded-full bg-[var(--ocean)]/10 text-[var(--ocean-deep)] mx-auto">
                        <Compass className="h-7 w-7 animate-pulse" />
                      </div>
                      <h3 className="text-xl font-semibold text-[var(--ocean-deep)]">
                        Signature Itineraries Coming Soon
                      </h3>
                      <p className="text-sm text-[var(--ink)]/65 max-w-md mx-auto leading-relaxed">
                        Our specialist travel team is currently designing unique, curated itineraries for {data.name}. We are dedicated to providing the highest standards of local assistance, private guides, and tropical travel plans.
                      </p>
                      <div className="pt-2">
                        <a
                          href={`mailto:${SITE.bookingEmail}?subject=Custom ${data.name} Travel Design Request`}
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--ocean)] to-[var(--ocean-deep)] px-6 py-2.5 text-xs font-semibold text-white shadow-sm hover:shadow-md transition-all"
                        >
                          Request Custom Travel Design
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>

              {/* Custom Itinerary CTA Strip */}
              <div className="mt-10 rounded-3xl bg-gradient-to-r from-[var(--ocean-deep)] to-[var(--ocean-ink)] text-white p-7 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5 relative overflow-hidden">
                <div className="relative flex-1">
                  <SectionLabel>
                    <span className="text-[var(--gold)]">Need a custom itinerary?</span>
                  </SectionLabel>
                  <h3 className="text-2xl md:text-3xl font-medium mt-3">
                    Tailor your dream {data.name} journey
                  </h3>
                  <p className="text-sm text-white/80 mt-2 max-w-xl">
                    Every Sunzee journey is private and bespoke. Tell us your dates, interests and budget, and we&apos;ll craft the rest.
                  </p>
                </div>
                <a
                  href="/#enquiry"
                  className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--ocean)] to-[var(--ocean-deep)] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <Calendar className="h-4 w-4" />
                  Enquire Now
                </a>
              </div>

            </div>

            {/* RIGHT COLUMN: Sidebar Quick Facts, Accommodations & Contact */}
            <aside className="lg:col-span-4 order-2 lg:order-2 space-y-5">
              <div className="lg:sticky lg:top-24 space-y-5">

                {/* Quick Facts Card */}
                {details && (
                  <div className="rounded-3xl border border-[var(--ocean)]/15 bg-white p-5 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-[var(--ocean)]/12">
                      <Compass className="h-5 w-5 text-[var(--gold)]" />
                      <h3 className="text-lg font-semibold text-[var(--ocean-deep)]">
                        Quick Facts
                      </h3>
                    </div>

                    <div className="space-y-3.5">
                      {/* Language */}
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--ocean-deep)]">
                          <Globe className="h-3.5 w-3.5" />
                          Language
                        </div>
                        <p className="text-xs md:text-sm text-[var(--ink)]/80 leading-snug pl-5">
                          {details.languages}
                        </p>
                      </div>

                      {/* Weather */}
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--ocean-deep)]">
                          <Sun className="h-3.5 w-3.5 text-[var(--gold)]" />
                          Weather &amp; Climate
                        </div>
                        <p className="text-xs md:text-sm text-[var(--ink)]/80 leading-snug pl-5">
                          {details.weather}
                        </p>
                      </div>

                      {/* Currency */}
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--ocean-deep)]">
                          <Coins className="h-3.5 w-3.5" />
                          Currency Used
                        </div>
                        <p className="text-xs md:text-sm text-[var(--ink)]/80 leading-snug pl-5">
                          {details.currency}
                        </p>
                      </div>

                      {/* Halal Dining */}
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--ocean-deep)]">
                          <Utensils className="h-3.5 w-3.5 text-[var(--gold)]" />
                          Halal Dining
                        </div>
                        <p className="text-xs md:text-sm text-[var(--ink)]/80 leading-snug pl-5">
                          {details.halalFood}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Accommodations Card */}
                {details && details.accommodations && (
                  <div className="rounded-3xl border border-[var(--ocean)]/15 bg-white p-5 shadow-sm space-y-3">
                    <div className="flex items-center gap-2 pb-2.5 border-b border-[var(--ocean)]/12">
                      <Hotel className="h-4 w-4 text-[var(--gold)]" />
                      <h3 className="text-base font-semibold text-[var(--ocean-deep)]">
                        Accommodations
                      </h3>
                    </div>
                    <p className="text-xs md:text-sm text-[var(--ink)]/75 leading-relaxed font-light">
                      {details.accommodations}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--ocean-deep)] font-semibold pt-1">
                      <ShieldCheck className="h-4 w-4 text-[var(--gold)]" />
                      <span>Local &amp; International Chains</span>
                    </div>
                  </div>
                )}

                {/* Filter Card (if packages present) */}
                {data.packages && data.packages.length > 0 && (
                  <div className="rounded-3xl border border-[var(--ocean)]/15 bg-white p-5 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 pb-3 border-b border-[var(--ocean)]/12">
                      <Search className="h-4 w-4 text-[var(--gold)]" />
                      <h3 className="text-base font-semibold text-[var(--ocean-deep)]">Search Packages</h3>
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search packages..."
                      className="w-full rounded-xl border border-[var(--ocean)]/25 bg-[var(--sand)]/40 px-3.5 py-2 text-xs text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--ocean)]/40"
                    />
                    <div>
                      <div className="flex justify-between text-xs text-[var(--ink)]/70 mb-1">
                        <span>Price Range</span>
                        <span className="font-semibold text-[var(--ocean-deep)]">Up to ${priceMax}</span>
                      </div>
                      <input
                        type="range"
                        min={500}
                        max={2500}
                        step={50}
                        value={priceMax}
                        onChange={(e) => setPriceMax(Number(e.target.value))}
                        className="w-full accent-[var(--ocean-deep)]"
                      />
                    </div>
                  </div>
                )}

                {/* Talk to Specialist Card */}
                <div className="rounded-3xl bg-gradient-to-br from-[var(--ocean-deep)] to-[var(--ocean-ink)] text-white p-5 relative overflow-hidden shadow-md">
                  <div className="relative space-y-3">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-[var(--gold)]" />
                      <span className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] font-semibold">
                        Talk to a specialist
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-white/85 leading-relaxed font-light">
                      Our {data.name} experts are one call away to help customize hotels, private transfers and tours.
                    </p>
                    <a
                      href={`tel:${SITE.phoneRaw}`}
                      className="block rounded-xl bg-gradient-to-r from-[var(--ocean)] to-[var(--ocean-deep)] text-white py-2.5 text-center text-xs font-semibold hover:shadow-lg transition-all"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Booking Form Enquiry Section */}
      <section id="enquiry" className="py-20 md:py-24 bg-gradient-to-br from-[var(--ocean-deep)] to-[var(--ocean-ink)] text-white relative overflow-hidden">
        <div className="container mx-auto max-w-4xl px-6 relative text-center">
          <SectionLabel>
            <span className="text-[var(--gold)]">Plan your {data.name} journey</span>
          </SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mt-5 leading-[1.05]">
            Begin your
            <span className="block italic text-[var(--gold)]">extraordinary story</span>
          </h2>
          <Ornament className="my-7" />
          <p className="text-white/85 text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            Tell us your travel dates, preferred hotels and group size. We&apos;ll send a tailor-made proposal within one business day.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${SITE.bookingEmail}?subject=Enquiry: ${data.title}`}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--ocean)] to-[var(--ocean-deep)] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(28,80,170,0.7)] hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="h-4 w-4" />
              BOOK NOW
            </a>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 backdrop-blur px-7 py-4 text-sm font-semibold text-white hover:bg-white/25 hover:border-[var(--gold)] transition-all"
            >
              or call {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-[var(--ink)]/60 backdrop-blur-sm"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85%] bg-white shadow-2xl flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-[var(--ocean)]/15 sticky top-0 bg-white z-10">
              <h3 className="text-lg font-semibold text-[var(--ocean-deep)]">Filters</h3>
              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-full hover:bg-[var(--ocean)]/10"
                aria-label="Close filters"
              >
                <X className="h-5 w-5 text-[var(--ocean-deep)]" />
              </button>
            </div>
            <div className="p-4 space-y-5">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search packages..."
                className="w-full rounded-xl border border-[var(--ocean)]/25 bg-[var(--sand)]/40 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ocean)]/40"
              />
              <div>
                <h4 className="text-base font-semibold text-[var(--ocean-deep)] mb-2">Price Range</h4>
                <input
                  type="range"
                  min={500}
                  max={2500}
                  step={50}
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full accent-[var(--ocean-deep)]"
                />
                <div className="flex justify-between text-xs text-[var(--ink)]/60 mt-1">
                  <span>$500</span>
                  <span className="font-semibold text-[var(--ocean-deep)]">Up to ${priceMax}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  resetFilters();
                  setMobileFilterOpen(false);
                }}
                className="w-full rounded-full border border-[var(--ocean)]/30 px-4 py-2.5 text-sm font-medium text-[var(--ocean-deep)]"
              >
                Reset filters
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
