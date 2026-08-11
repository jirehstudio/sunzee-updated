// Tour package and destination catalog data.
// Contains complete information for Mauritius, Seychelles, Maldives, Zanzibar, and Reunion Island.

export type TourPackage = {
  name: string;
  price: number;
  duration: string;
  image: string;
  gallery?: string[];
  description: string;
  rating: number;
};

export type GalleryItem = {
  url: string;
  title: string;
  category: "Pristine Beach" | "Luxury Resorts" | "Signature Activity";
};

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type DestinationDetails = {
  idealFor: string;
  mustSee: string[];
  languages: string;
  weather: string;
  accommodations: string;
  halalFood: string;
  currency: string;
  gallery: GalleryItem[];
  fleetImage: string;
  activities?: { title: string; description: string; }[];
};

export type DestinationPackages = {
  slug: string;          // url slug
  name: string;          // "Mauritius"
  title: string;         // "Mauritius Packages"
  subtitle: string;      // hero subtitle
  heroImage: string;
  heroImageMobile: string;
  heroGallery?: string[];
  packages: TourPackage[];
  details?: DestinationDetails;
  itinerary?: ItineraryDay[];
  itineraryDuration?: string;
};

export const MAURITIUS_PACKAGES: DestinationPackages = {
  slug: "mauritius-tour-packages",
  name: "Mauritius",
  title: "Mauritius Packages",
  subtitle: "Sunkissed beaches, turquoise lagoons, and volcanic peaks",
  heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
  heroImageMobile: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
  heroGallery: [
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1540206395-68808572332f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=600&q=80",
  ],
  packages: [],
  details: {
    idealFor: "Mauritius is ideal for family holidays, romantic couples' escapes, and even adventurous solo travellers. Its combination of luxury and adventure has something for everyone.",
    mustSee: [
      "Seven Coloured Earth in Chamarel",
      "Le Morne Brabant (UNESCO World Heritage Site)",
      "Sir Seewoosagur Ramgoolam Botanical Garden",
      "Black River Gorges National Park",
      "Ile aux Cerfs beach and watersports"
    ],
    languages: "English (official), French, and Mauritian Creole",
    weather: "Tropical maritime climate. Warm and dry winter (May to October) and hot, humid summer (November to April).",
    accommodations: "We provide booking and transfer services in a select range of international luxury chains, boutique local hotel chains, and private luxury villas.",
    halalFood: "Widely available across the island. Most luxury resorts offer halal food options, and numerous local restaurants are halal-certified.",
    currency: "Mauritian Rupee (MUR)",
    fleetImage: "/sunzee/mauritius_fleet.png",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        title: "Belle Mare Plage Beach",
        category: "Pristine Beach"
      },
      {
        url: "/sunzee/mauritius_hotel.jpg",
        title: "C Mauritius - Premium Beach Resort",
        category: "Luxury Resorts"
      },
      {
        url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=80",
        title: "Private Catamaran Yacht Cruise",
        category: "Signature Activity"
      }
    ],
    activities: [
      {
        title: "Ile Aux Cerfs Watersports",
        description: "Parasail over clear lagoons, walk on the ocean bed (Undersea Walk), ride a speed tube, or cruise the longest river to see the Grand South-Eastern River waterfalls."
      },
      {
        title: "Casela World of Adventures",
        description: "Embark on an African safari quad bike ride, view lions and cheetahs from platforms, cross the Nepalese bridge, or fly down canyon ziplines."
      },
      {
        title: "Le Morne Seaplane Flight",
        description: "Experience a breathtaking seaplane flight over Le Morne Peninsula to witness the world-famous natural optical illusion of the underwater waterfall."
      },
      {
        title: "Chamarel Dunes & Rum Tasting",
        description: "Explore the unique volcanic sands of the 7-Colored Earth and take a guided rum-tasting tour at the beautiful, local Rhumerie de Chamarel."
      }
    ]
  },
  itineraryDuration: "04 Nights / 05 Days",
  itinerary: [
    {
      day: 1,
      title: "Arrival in Mauritius",
      description: "Begin your Mauritius tour itinerary with a relaxed day in the peaceful Mauritian environment. On landing at the Mauritius International Airport, you will be received by our local representative who will assist you with the transfer to the resort. The rest of the day would be free for you to explore the serene surroundings of the property with your adored and to get to know the idyllic beaches of Mauritius. Overnight at hotel."
    },
    {
      day: 2,
      title: "Ile Aux Cerf Island",
      description: "After breakfast, Drive to the east coast between 08 to 09 AM to enjoy optional (water sport activities as parasailing, undersea walk, tube ride and waterfall visit with trip around Ile Aux Cerf Island at additional cost). Afterwards as from 11.00 am transfer by speed boat to Ile aux Cerfs. The island with the most beautiful beach and the clearest turquoise water. Return back to mainland by speedboat. Back to the hotel between 15.00 to 17.00 hrs. Overnight at hotel."
    },
    {
      day: 3,
      title: "Scenic South",
      description: "After Breakfast, leave hotel between 08 to 09 AM, visit Trou Aux Cerfs the Volcanic Crater (Viewpoint) and Proceed for Grand Bassin- Sacred Lake and Shiva Temple. Drive through Black River gorges National Park and visit The 23-coloured Nature Park which dates back to millions of years following the eruption of the Bassin Blanc volcano - its ashes, which bear witness to that event, are unique in the world. (*Enjoy activities such as zip line & Quad biking at optional cost and subject to availability). Back to the hotel between 15.00 to 17.00 hrs. Overnight at hotel."
    },
    {
      day: 4,
      title: "North tour",
      description: "After breakfast between 08 to 09 AM, check-out from the hotel and drive to Port Louis for a visit of the capital via the Citadel (View Point) & its surrounding area. View the Champ de Mars race course, inaugurated in 1812; it is the oldest horse-racing club in the Southern Hemisphere, and one of the oldest in the world. Afterwards proceed to Le Caudan Waterfront, with some 170 shops. Back to hotel between 15.00 to 17.00 hrs. Overnight at hotel."
    },
    {
      day: 5,
      title: "Departure from Mauritius",
      description: "Wake up to a gourmet breakfast and without letting the departure dampen your spirits, prepare for the flight back home. Post check-out, enjoy the last moments of the Mauritius package at the ocean side or the Resort’s restaurant before getting picked up for the transfer to the airport for your homebound flight. END OF SERVICES."
    }
  ]
};

export const SEYCHELLES_PACKAGES: DestinationPackages = {
  slug: "seychelles-tour-packages",
  name: "Seychelles",
  title: "Seychelles Packages",
  subtitle: "Granite islands, untouched beaches, and tropical sanctuary",
  heroImage: "/sunzee/seychelles.png",
  heroImageMobile: "/sunzee/seychelles.png",
  heroGallery: [
    "/sunzee/seychelles.png",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
  ],
  packages: [],
  details: {
    idealFor: "Seychelles is ideal for honeymooners, romantic couple escapes, and luxury travelers seeking absolute privacy and pristine natural beauty.",
    mustSee: [
      "Anse Source d'Argent (famous granite boulders)",
      "Vallée de Mai (home of the legendary Coco de Mer)",
      "Morne Seychellois National Park on Mahé",
      "Beau Vallon Beach",
      "Aldabra Atoll"
    ],
    languages: "Seychellois Creole, English, and French",
    weather: "Tropical and warm year-round, with temperatures ranging from 24°C to 30°C. Winds change with monsoons.",
    accommodations: "We offer premium bookings in world-renowned international resorts, local boutique Creole guesthouses, and exclusive private island villas.",
    halalFood: "Halal-friendly options can be arranged at major luxury resorts upon request, and halal dining is available in main island towns.",
    currency: "Seychellois Rupee (SCR)",
    fleetImage: "/sunzee/seychelles_fleet.png",
    gallery: [
      {
        url: "/sunzee/seychelles.png",
        title: "Anse Source d'Argent (La Digue)",
        category: "Pristine Beach"
      },
      {
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
        title: "Six Senses Zil Pasyon Luxury Villas",
        category: "Luxury Resorts"
      },
      {
        url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
        title: "Snorkeling with Giant Sea Turtles",
        category: "Signature Activity"
      }
    ]
  },
  itineraryDuration: "06 Nights / 07 Days",
  itinerary: [
    {
      day: 1,
      title: "Arrival in Mahe",
      description: "Welcome to Mahe Island, Seychelles. On arrival at Seychelles International Airport, you will be met by our Airport representative/driver and transferred to your hotel for Check-in. Rest of the day is free at leisure. Overnight in Mahe Island."
    },
    {
      day: 2,
      title: "Mahe (Discover Mahe Island)",
      description: "Today discover Mahe Island - South Side. The Southern side feels less busy and more contemplative, where time takes on its own meaning. Discover the Island’s breath-taking panoramic views, pristine rain forests and the most beautiful and secluded beaches around every cove. OR Discover Mahe Island – North Side. The Northern side of the Island offers a wide variety of hotels, self-catering accommodations and the largest selection of restaurants and nightlife. Not forgetting the famous Beau Vallon Beach. In the evening you will be taken back to hotel. Overnight in Mahe Island."
    },
    {
      day: 3,
      title: "Mahe (Glass Bottom Boat Tour - Reef Safari - St Anne Marine Park)",
      description: "This day enjoy Glass bottom boat tour to The St. Anne Marine National Park. Experience the admiration of Moyenne, Cerf Island and St. Anne Marine Park, departing from Mahe with pick-up & drop-off. Witness the captivating marine life beneath your feet, enjoy fish feeding, and snorkeling at pristine spots. Delicious traditional creole style buffet lunch is served on Cerf Island which was named after the royal French navy frigate Le Cerf, making this tour unforgettable. Back to hotel. Overnight in Mahe Island."
    },
    {
      day: 4,
      title: "Mahe Island - Praslin Island (Ferry)",
      description: "Today you proceed to take your ferry to Praslin Island. On arrival In Praslin Check-in. Overnight in Praslin Island."
    },
    {
      day: 5,
      title: "Praslin Island (Vallee De Mai & Anse Lazio Tour)",
      description: "Begin the tour by visiting the Vallee De Mai World Heritage Site, the heart of Praslin. Home to the Coco De Mer Palm and the Black Parrot, also described as the Garden of Eden due to its mystical nature. You will get the chance to explore the garden and admire the Coco De Mer and the abundance of wildlife. The hiking trails are easy and it takes about 2 hours. Stop to enjoy a lovely creole lunch at a nice restaurant if you desire or we carry on to our next spot which is Anse Lazio. You can spend the rest of the afternoon freely relaxing on this beautiful beach with its fine white sands and crystal-clear water that you can even see the fish swim around you. There is a small shop and two restaurants at each end of the beach if you wish to grab a snack or cold drink. Overnight in Praslin Island."
    },
    {
      day: 6,
      title: "Praslin Island (La Digue Independent Tour)",
      description: "Discover La Digue Island on Independent tour. La Digue is the third most populated Island of the Seychelles. It has a population of 2800 people. The famous mode of transport is the Bicycle or Ox Cart. It is only a 15 minutes ride from Praslin by Ferry. Once you reach La Digue you can collect the bicycle at Kazye café, about 2 minute walk from the jetty, and after you are free to explore the Island as you please. Famous attraction which can be visited are La passé, Veuve Reserve, L’union Estate, Anse Source D’Argent, & Grand Anse Beach. The people of La Digue are very friendly so do not hesitate to ask around for any help or directions if you need. Overnight in Praslin Island."
    },
    {
      day: 7,
      title: "Praslin Island - Depart Mahe",
      description: "Bid farewell to Seychelles Holidays. Check-out of the hotel and take your ferry back to Mahe Island and you will be taken to Seychelles International Airport for Departure back home or onward Journey. END OF SERVICES."
    }
  ]
};

export const MALDIVES_PACKAGES: DestinationPackages = {
  slug: "maldives-tour-packages",
  name: "Maldives",
  title: "Maldives Packages",
  subtitle: "Overwater luxury, vibrant coral reefs, and infinite blue horizons",
  heroImage: "/sunzee/maldives.png",
  heroImageMobile: "/sunzee/maldives.png",
  heroGallery: [
    "/sunzee/maldives.png",
    "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=80",
  ],
  packages: [],
  details: {
    idealFor: "Maldives is ideal for romantic getaways, luxury honeymooners, and scuba diving enthusiasts seeking world-class marine life.",
    mustSee: [
      "Baa Atoll (UNESCO Biosphere Reserve)",
      "Hanifaru Bay manta ray feeding grounds",
      "Male Capital and Local Markets",
      "Glowing Beach on Vaadhoo Island"
    ],
    languages: "Dhivehi (official), with English widely spoken in tourist areas",
    weather: "Tropical monsoon climate. Warm all year round (28°C - 30°C) with dry, sunny weather from November to April.",
    accommodations: "We secure bookings in world-class international luxury resorts, private overwater villas, and cozy guesthouses on local islands.",
    halalFood: "100% Halal environment. As the Maldives is a Muslim-majority nation, all food served across the local islands and luxury resorts is Halal.",
    currency: "Maldivian Rufiyaa (MVR) / US Dollars (USD)",
    fleetImage: "/sunzee/maldives_fleet.png",
    gallery: [
      {
        url: "/sunzee/maldives.png",
        title: "Maldives Sandbar & Turquoise Lagoon",
        category: "Pristine Beach"
      },
      {
        url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=80",
        title: "Soneva Jani Luxury Overwater Villas & Retreat",
        category: "Luxury Resorts"
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        title: "Private Sandbar Dinner & Sunset Cruise",
        category: "Signature Activity"
      }
    ]
  }
};

export const ZANZIBAR_PACKAGES: DestinationPackages = {
  slug: "zanzibar-tour-packages",
  name: "Zanzibar",
  title: "Zanzibar Packages",
  subtitle: "Stone Town culture, aromatic spice tours, and turquoise coastlines",
  heroImage: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1600&q=80",
  heroImageMobile: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
  heroGallery: [
    "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  ],
  packages: [],
  details: {
    idealFor: "Zanzibar is ideal for cultural history buffs, spice lovers, couples, and travelers seeking pristine sandy beaches.",
    mustSee: [
      "Stone Town (UNESCO World Heritage Site)",
      "Spice plantation walking tours",
      "Jozani Forest (red colobus monkeys)",
      "Nungwi and Kendwa beaches",
      "Prison Island"
    ],
    languages: "Swahili (official) and English",
    weather: "Tropical, hot and humid year-round. Best dry weather is from June to October, and January to February.",
    accommodations: "We provide bookings in luxury boutique beach resorts, historic Stone Town heritage hotels, and private oceanfront villas.",
    halalFood: "Halal-friendly destination. With a predominantly Muslim population, almost all restaurants, street vendors, and hotels offer Halal food.",
    currency: "Tanzanian Shilling (TZS) / US Dollars (USD)",
    fleetImage: "/sunzee/zanzibar_fleet.png",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=80",
        title: "Nungwi White Sand Beach",
        category: "Pristine Beach"
      },
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        title: "Baraza Resort & Spa Zanzibar",
        category: "Luxury Resorts"
      },
      {
        url: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=800&q=80",
        title: "Traditional Swahili Dhow Sailing Cruise",
        category: "Signature Activity"
      }
    ]
  }
};

export const REUNION_PACKAGES: DestinationPackages = {
  slug: "reunion-tour-packages",
  name: "Reunion",
  title: "Reunion Tour Packages",
  subtitle: "Volcanic Peaks, Cirques & Indian Ocean Charm",
  heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80",
  heroImageMobile: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
  heroGallery: [
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  ],
  packages: [],
  details: {
    idealFor: "Réunion Island is ideal for active hikers, adventure seekers, nature enthusiasts, and solo explorers.",
    mustSee: [
      "Piton de la Fournaise (active volcano)",
      "Cirque de Mafate (hiking valley)",
      "Cirque de Cilaos",
      "Trou de Fer canyon waterfall",
      "Plage de l'Ermitage"
    ],
    languages: "French (official) and Reunion Creole",
    weather: "Tropical but varies heavily with altitude; winters are cool in the mountains while summers are warm on the coast.",
    accommodations: "We organize stays in authentic Creole guesthouses, local boutique hotel chains, and seaside international resorts.",
    halalFood: "Halal food options are available in major cities like Saint-Denis, and we can arrange halal dining preferences with local hotels.",
    currency: "Euro (EUR)",
    fleetImage: "/sunzee/reunion_fleet.png",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        title: "L'Ermitage Lagoon Beach",
        category: "Pristine Beach"
      },
      {
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
        title: "LUX* Saint Gilles Resort Hotel",
        category: "Luxury Resorts"
      },
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        title: "Volcanic Trekking at Piton de la Fournaise",
        category: "Signature Activity"
      }
    ]
  }
};

export const DESTINATION_PACKAGE_MAP: Record<string, DestinationPackages> = {
  "mauritius-tour-packages": MAURITIUS_PACKAGES,
  "seychelles-tour-packages": SEYCHELLES_PACKAGES,
  "maldives-tour-packages": MALDIVES_PACKAGES,
  "zanzibar-tour-packages": ZANZIBAR_PACKAGES,
  "reunion-tour-packages": REUNION_PACKAGES,
};

export const FILTER_FACILITIES = [
  "Free Wifi",
  "Swimming Pool",
  "Daily Housekeeping",
  "Exclusive Bar and Lounge",
  "Spa & Wellness",
  "Airport Shuttle",
];

export const FILTER_CATEGORIES = [
  "Family Adventure",
  "Honeymoon Special",
  "Wildlife & Safari",
  "Cultural & Heritage",
  "Beach & Island Escape",
];
