// All content sourced verbatim from https://www.sunzeeholidays.com/
// Only the text content is preserved; images are external high-quality stock photos.
// Imagery expanded for tourism-vibe redesign (more pics, brighter feel).

export const SITE = {
  name: "Sunzee Holidays",
  tagline: "Best Destination Management Company in East Africa",
  email: "product@sunzeeholidays.com",
  bookingEmail: "product@sunzeeholidays.com",
  phone: "+23058374275",
  phoneRaw: "23058374275",
  copyright: "Copyright © 2026 Sunzee Holidays.",
  maintainedBy: "Infinityweb",
  maintainedByUrl: "https://www.infinityweb.in",
  facebook: "https://www.facebook.com/sunzeeholidays",
  instagram: "https://www.instagram.com/sunzeeholidays_official/",
  youtube: "https://www.youtube.com/channel/UCcydb-PEbQLeGlAYbmAg6ag",
  twitter: "#",
  linkedin: "#",
  pinterest: "#",
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  {
    label: "Tour Packages",
    href: "/mauritius-tour-packages",
    children: [
      { label: "Mauritius Packages", href: "/mauritius-tour-packages" },
      { label: "Seychelles Packages", href: "/seychelles-tour-packages" },
      { label: "Maldives Packages", href: "/maldives-tour-packages" },
      { label: "Zanzibar Packages", href: "/zanzibar-tour-packages" },
      { label: "Reunion Packages", href: "/reunion-tour-packages" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#enquiry" },
] as const;

export const DESTINATIONS = [
  {
    name: "Mauritius",
    caption: "Plan Your Tour to Mauritius With Us.",
    href: "/mauritius-tour-packages",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=600&q=80",
    ],
    blurb:
      "Coral lagoons, lush interior peaks, and a melting pot of Creole, French and Indian culture.",
    region: "Indian Ocean",
  },
  {
    name: "Seychelles",
    caption: "Plan Your Tour to Seychelles With Us.",
    href: "/seychelles-tour-packages",
    image: "/sunzee/seychelles.png",
    gallery: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600&q=80",
    ],
    blurb:
      "Iconic granite boulders, pristine beaches, Coco de Mer palms, and serene turquoise waters.",
    region: "Indian Ocean",
  },
  {
    name: "Maldives",
    caption: "Plan Your Tour to Maldives With Us.",
    href: "/maldives-tour-packages",
    image: "/sunzee/maldives.png",
    gallery: [
      "/sunzee/maldives.png",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
    ],
    blurb:
      "The ultimate overwater paradise. Unwind in crystal-clear lagoons and discover world-class coral reefs.",
    region: "Indian Ocean",
  },
  {
    name: "Zanzibar",
    caption: "Plan Your Tour to Zanzibar With Us.",
    href: "/zanzibar-tour-packages",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    ],
    blurb:
      "Spice-trade history, Stone Town lanes, and powdery white beaches lapped by turquoise tides.",
    region: "Indian Ocean",
  },
  {
    name: "Reunion Island",
    caption: "Plan Your Tour to Reunion Island With Us.",
    href: "/reunion-tour-packages",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
    ],
    blurb:
      "Hike a still-active volcano, circle the cirques of Mafate and Cilaos, and surf world-class breaks.",
    region: "Indian Ocean",
  },
] as const;

export const TOUR_PACKAGES = [
  { label: "Mauritius Tour Packages", href: "/mauritius-tour-packages" },
  { label: "Seychelles Tour Packages", href: "/seychelles-tour-packages" },
  { label: "Maldives Tour Packages", href: "/maldives-tour-packages" },
  { label: "Zanzibar Tour Packages", href: "/zanzibar-tour-packages" },
  { label: "Reunion Tour Packages", href: "/reunion-tour-packages" },
] as const;

export const IMPORTANT_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/#contact" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
] as const;

export const HERO_SLIDES = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2560&q=90",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2560&q=90",
  "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=2560&q=90",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2560&q=90",
  "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=2560&q=90",
] as const;

export const CTA_IMAGE = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" as const;

export const EXPERIENCES = [
  {
    title: "Beach & Island Escapes",
    blurb: "Powdery sands, palm-fringed lagoons and overwater sunsets.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    icon: "palmtree",
  },
  {
    title: "Safari & Wildlife",
    blurb: "Track the Big Five, witness the migration and sleep in the bush.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80",
    icon: "compass",
  },
  {
    title: "Cultural & Heritage",
    blurb: "Ancient temples, spice-trade lanes and living tribal traditions.",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80",
    icon: "landmark",
  },
  {
    title: "Adventure & Trek",
    blurb: "Volcano hikes, canyon treks and rainforest expeditions.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    icon: "mountain",
  },
  {
    title: "Honeymoon & Romance",
    blurb: "Private dinners, sunset cruises and barefoot luxury retreats.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    icon: "heart",
  },
  {
    title: "Diving & Marine",
    blurb: "Coral gardens, sea turtles, whales and reef sharks.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    icon: "wave",
  },
] as const;

export const MOMENTS = [
  { image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80", caption: "Mauritius lagoon" },
  { image: "/sunzee/seychelles.png", caption: "Seychelles granites" },
  { image: "/sunzee/maldives.png", caption: "Maldives overwater" },
  { image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80", caption: "Zanzibar dhow" },
  { image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80", caption: "Reunion volcano" },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "30 Years of Expertise",
    blurb:
      "Three decades of crafting journeys across East Africa and the Indian Ocean, with firsthand destination knowledge.",
    icon: "award",
  },
  {
    title: "B2B Specialists",
    blurb:
      "Trusted by travel agents worldwide for the widest selection of hotels, resorts and ground services.",
    icon: "users",
  },
  {
    title: "Authentic Experiences",
    blurb:
      "Tropical, cultural and adventurous journeys curated by local specialists who call these places home.",
    icon: "compass",
  },
  {
    title: "24/7 On-Trip Support",
    blurb:
      "From touchdown to takeoff, our team is one call away — anytime, anywhere across your journey.",
    icon: "headset",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Sunzee turned our honeymoon into a dream — every transfer, every dinner, every sunset was perfect. We didn't lift a finger.",
    name: "Amélie & Romain",
    detail: "Honeymoon in Mauritius",
    avatar: "AR",
  },
  {
    quote:
      "As a B2B agent, I trust Sunzee with my most demanding clients. Their response time and on-the-ground knowledge are unmatched.",
    name: "Priya Sharma",
    detail: "Travel Agent, Mumbai",
    avatar: "PS",
  },
  {
    quote:
      "The Seychelles getaway exceeded every expectation. The island transfers and private excursions were flawless.",
    name: "James Whitfield",
    detail: "Luxury Vacation, Seychelles",
    avatar: "JW",
  },
] as const;
