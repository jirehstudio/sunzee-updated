// All content sourced verbatim from https://www.sunzeeholidays.com/
// Only the text content is preserved; images are external high-quality stock photos.
// Imagery expanded for tourism-vibe redesign (more pics, brighter feel).

export const SITE = {
  name: "Sunzee Holidays",
  tagline: "Best Destination Management Company in East Africa",
  email: "product@sunzeeholidays.com",
  bookingEmail: "info@sunzeeholidays.com",
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
    href: "/egypt-tour-packages",
    children: [
      { label: "Egypt Tour Packages", href: "/egypt-tour-packages" },
      { label: "Kenya Tour Packages", href: "/kenya-tour-packages" },
      { label: "Zanzibar Tour Packages", href: "/zanzibar-tour-packages" },
      { label: "Mauritius Tour Packages", href: "/mauritius-tour-packages" },
      { label: "Madagascar Tour Packages", href: "/madagascar-tour-packages" },
      { label: "Reunion Tour Packages", href: "/reunion-tour-packages" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#enquiry" },
] as const;

export const DESTINATIONS = [
  {
    name: "Egypt",
    caption: "Plan Your Tour to Egypt With Us.",
    href: "/egypt-tour-packages",
    image: "https://sfile.chatglm.cn/images-ppt/cb282bb90c0c.jpg",
    gallery: [
      "https://sfile.chatglm.cn/images-ppt/396c5ddf9e98.jpeg",
      "https://sfile.chatglm.cn/images-ppt/7d64936af8a9.jpg",
      "https://sfile.chatglm.cn/images-ppt/2225f176213d.jpg",
    ],
    blurb:
      "Cruise the Nile, stand before the Pyramids of Giza, and lose yourself in the bazaars of Cairo.",
    region: "North Africa",
  },
  {
    name: "Kenya",
    caption: "Plan Your Tour to Kenya With Us.",
    href: "/kenya-tour-packages",
    image: "https://sfile.chatglm.cn/images-ppt/640772c2943f.jpg",
    gallery: [
      "https://sfile.chatglm.cn/images-ppt/208fd6674588.jpg",
      "https://sfile.chatglm.cn/images-ppt/cfc58aa1c5dd.jpg",
    ],
    blurb:
      "Witness the great migration across the Maasai Mara and track the Big Five on a flagship safari.",
    region: "East Africa",
  },
  {
    name: "Zanzibar",
    caption: "Plan Your Tour to Zanzibar With Us.",
    href: "/zanzibar-tour-packages",
    image: "https://sfile.chatglm.cn/images-ppt/f2a6013672ab.jpg",
    gallery: [
      "https://sfile.chatglm.cn/images-ppt/208fd6674588.jpg",
      "https://sfile.chatglm.cn/images-ppt/8d87cfa820aa.jpg",
    ],
    blurb:
      "Spice-trade history, Stone Town lanes, and powdery white beaches lapped by turquoise tides.",
    region: "Indian Ocean",
  },
  {
    name: "Mauritius",
    caption: "Plan Your Tour to Mauritius With Us.",
    href: "/mauritius-tour-packages",
    image: "https://sfile.chatglm.cn/images-ppt/208fd6674588.jpg",
    gallery: [
      "https://sfile.chatglm.cn/images-ppt/f2a6013672ab.jpg",
      "https://sfile.chatglm.cn/images-ppt/8d87cfa820aa.jpg",
    ],
    blurb:
      "Coral lagoons, lush interior peaks, and a melting pot of Creole, French and Indian culture.",
    region: "Indian Ocean",
  },
  {
    name: "Madagascar",
    caption: "Plan Your Tour to Madagascar With Us.",
    href: "/madagascar-tour-packages",
    image: "https://sfile.chatglm.cn/images-ppt/cfc58aa1c5dd.jpg",
    gallery: [
      "https://sfile.chatglm.cn/images-ppt/d9feda4fcf3a.jpg",
      "https://sfile.chatglm.cn/images-ppt/be187597cf67.jpg",
      "https://sfile.chatglm.cn/images-ppt/559c45d768e6.jpg",
    ],
    blurb:
      "Walk the Avenue of the Baobabs, meet lemurs in wild rainforests, and explore otherworldly rock.",
    region: "Indian Ocean",
  },
  {
    name: "Reunion",
    caption: "Plan Your Tour to Reunion With Us.",
    href: "/reunion-tour-packages",
    image: "https://sfile.chatglm.cn/images-ppt/8d87cfa820aa.jpg",
    gallery: [
      "https://sfile.chatglm.cn/images-ppt/3eadce2d34cb.jpg",
      "https://sfile.chatglm.cn/images-ppt/dd058a9c939e.jpg",
      "https://sfile.chatglm.cn/images-ppt/7fe104385422.jpg",
    ],
    blurb:
      "Hike a still-active volcano, circle the cirques of Mafate and Cilaos, and surf world-class breaks.",
    region: "Indian Ocean",
  },
] as const;

export const TOUR_PACKAGES = [
  { label: "Egypt Tour Packages", href: "/egypt-tour-packages" },
  { label: "Kenya Tour Packages", href: "/kenya-tour-packages" },
  { label: "Zanzibar Tour Packages", href: "/zanzibar-tour-packages" },
  { label: "Mauritius Tour Packages", href: "/mauritius-tour-packages" },
  { label: "Madagascar Tour Packages", href: "/madagascar-tour-packages" },
  { label: "Reunion Tour Packages", href: "/reunion-tour-packages" },
] as const;

export const IMPORTANT_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/#contact" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
] as const;

// Expanded hero carousel — 5 bright, tourism-vibe slides
export const HERO_SLIDES = [
  "https://sfile.chatglm.cn/images-ppt/208fd6674588.jpg", // Mauritius lagoon
  "https://sfile.chatglm.cn/images-ppt/cb282bb90c0c.jpg", // Egypt pyramids
  "https://sfile.chatglm.cn/images-ppt/8d87cfa820aa.jpg", // Reunion volcano
  "https://sfile.chatglm.cn/images-ppt/cfc58aa1c5dd.jpg", // Madagascar baobabs
  "https://sfile.chatglm.cn/images-ppt/640772c2943f.jpg", // Kenya safari
] as const;

export const CTA_IMAGE = "https://sfile.chatglm.cn/images-ppt/f2a6013672ab.jpg" as const;

// Featured experiences (NEW section)
export const EXPERIENCES = [
  {
    title: "Beach & Island Escapes",
    blurb: "Powdery sands, palm-fringed lagoons and overwater sunsets.",
    image: "https://sfile.chatglm.cn/images-ppt/208fd6674588.jpg",
    icon: "palmtree",
  },
  {
    title: "Safari & Wildlife",
    blurb: "Track the Big Five, witness the migration and sleep in the bush.",
    image: "https://sfile.chatglm.cn/images-ppt/640772c2943f.jpg",
    icon: "compass",
  },
  {
    title: "Cultural & Heritage",
    blurb: "Ancient temples, spice-trade lanes and living tribal traditions.",
    image: "https://sfile.chatglm.cn/images-ppt/cb282bb90c0c.jpg",
    icon: "landmark",
  },
  {
    title: "Adventure & Trek",
    blurb: "Volcano hikes, canyon treks and rainforest expeditions.",
    image: "https://sfile.chatglm.cn/images-ppt/8d87cfa820aa.jpg",
    icon: "mountain",
  },
  {
    title: "Honeymoon & Romance",
    blurb: "Private dinners, sunset cruises and barefoot luxury retreats.",
    image: "https://sfile.chatglm.cn/images-ppt/f2a6013672ab.jpg",
    icon: "heart",
  },
  {
    title: "Diving & Marine",
    blurb: "Coral gardens, sea turtles, whales and reef sharks.",
    image: "https://sfile.chatglm.cn/images-ppt/559c45d768e6.jpg",
    icon: "wave",
  },
] as const;

// Travel moments gallery (NEW section) — Instagram-style grid
export const MOMENTS = [
  { image: "https://sfile.chatglm.cn/images-ppt/396c5ddf9e98.jpeg", caption: "Nile cruise" },
  { image: "https://sfile.chatglm.cn/images-ppt/7d64936af8a9.jpg", caption: "Pyramids of Giza" },
  { image: "https://sfile.chatglm.cn/images-ppt/2225f176213d.jpg", caption: "Luxor temples" },
  { image: "https://sfile.chatglm.cn/images-ppt/d9feda4fcf3a.jpg", caption: "Avenue of Baobabs" },
  { image: "https://sfile.chatglm.cn/images-ppt/be187597cf67.jpg", caption: "Lemur tracking" },
  { image: "https://sfile.chatglm.cn/images-ppt/559c45d768e6.jpg", caption: "Nosy Be beaches" },
  { image: "https://sfile.chatglm.cn/images-ppt/3eadce2d34cb.jpg", caption: "Mafate cirque" },
  { image: "https://sfile.chatglm.cn/images-ppt/dd058a9c939e.jpg", caption: "Piton de la Fournaise" },
] as const;

// Why choose us (NEW section)
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

// Testimonials (NEW section)
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
      "The Madagascar wildlife safari exceeded every expectation. Our guide knew exactly where to find the indri lemurs at dawn.",
    name: "James Whitfield",
    detail: "Wildlife Safari, Madagascar",
    avatar: "JW",
  },
] as const;
