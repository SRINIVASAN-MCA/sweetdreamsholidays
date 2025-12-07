import Goaimage from "../images/Best-Places-to-visit-in-Goa-in-3-Days-Tour.jpg";
import Ootyimage from "../images/maxresdefault.jpg";
import Keralaimage from "../images/CochinMunnarAlleppeyPrivateMulti-DayTour.jpg";
import GoldenTriangleImg from "../images/Golden-Triangle-Delhi-Agra-Jaipur-Tour.jpg";
import YelagiriImg from "../images/10-Fascinating-Facts-About-Yelagiri-Hill-Station-You-Didnt-Know.jpg";
import KeralaPackageImg from "../images/3-Nights-4-Days-Kerala-Tour-Package-1-2048.webp";
import GoaVacationImg from "../images/Goa-Vacation.webp";
import OotyKodaiImg from "../images/ooty-or-kodaikanal.jpg";


export const tourPackages = [
  {
    slug: "kerala-backwaters-hills",
    title: "Kerala Backwaters & Hills",
    duration: "6 Days / 5 Nights",
    price: "₹19,999",
    rating: 4.8,
    reviews: 245,
    category: "Bestseller",
    shortDesc: "Experience houseboat stays, tea plantations, and serene backwaters of God's Own Country.",
    description: "Discover the enchanting beauty of Kerala with this comprehensive tour package. Experience the lush tea plantations of Munnar, the aromatic spice gardens of Thekkady, and the tranquil backwaters of Alleppey on a traditional houseboat. This carefully curated itinerary combines natural beauty, cultural experiences, and authentic Kerala cuisine for an unforgettable journey through God's Own Country.",
    image: Keralaimage,
    highlights: [
      "Overnight stay in  traditional Kerala houseboat",
      "Visit scenic tea plantations and tea museum",
      "Wildlife spotting at Periyar Lake",
      "Spice plantation tour",
      "Fort Kochi heritage walk"
    ],
    inclusions: [
      "5 nights accommodation (3-star hotels + houseboat)",
      "Daily breakfast and dinner",
      "All transfers in AC vehicle",
      "Houseboat with all meals",
      "Sightseeing as per itinerary",
      "Professional tour guide"
    ],
    exclusions: [
      "Airfare/train tickets",
      "Lunch on non-houseboat days",
      "Entry fees to monuments",
      "Personal expenses",
      "Travel insurance"
    ],
    transport: {
      type: "AC Sedan/SUV",
      details: "Comfortable AC vehicle for all transfers and sightseeing. Vehicle type depends on group size."
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cochin & Transfer to Munnar",
        details: "Arrive at Cochin airport, scenic drive to Munnar (130 km, 4 hours) visiting waterfalls en route, check-in at hotel. Evening at leisure to explore local markets.",
        meals: "Dinner"
      },
      {
        day: 2,
        title: "Munnar Full Day Sightseeing",
        details: "Visit Tea Museum, Mattupetty Dam, Echo Point, Kundala Lake, and sprawling tea plantations. Learn about tea production and enjoy panoramic mountain views.",
        meals: "Breakfast, Dinner"
      },
      {
        day: 3,
        title: "Munnar to Thekkady",
        details: "Drive to Thekkady (95 km, 3 hours), visit spice plantations, evening boat ride at Periyar Lake to spot elephants, bison, and birds in their natural habitat.",
        meals: "Breakfast, Dinner"
      },
      {
        day: 4,
        title: "Thekkady to Alleppey Houseboat",
        details: "Transfer to Alleppey (140 km, 4 hours), board traditional Kerala houseboat for overnight backwater cruise. Enjoy freshly prepared Kerala meals onboard while cruising through serene canals.",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 5,
        title: "Alleppey to Cochin",
        details: "Disembark houseboat after breakfast, drive to Cochin (55 km, 1.5 hours). Visit Chinese Fishing Nets, Fort Kochi, Mattancherry Palace, and spice markets.",
        meals: "Breakfast, Dinner"
      },
      {
        day: 6,
        title: "Departure from Cochin",
        details: "Breakfast at hotel, last-minute shopping in MG Road or Broadway market, transfer to Cochin airport/railway station for departure.",
        meals: "Breakfast"
      }
    ]
  },
  {
    slug: "golden-triangle-6-days",
    title: "Golden Triangle - Delhi, Agra, Jaipur",
    duration: "6 Days / 5 Nights",
    price: "₹18,999",
    rating: 4.9,
    reviews: 312,
    category: "Trending",
    shortDesc: "India's classic cultural heritage trail covering iconic monuments.",
    description: "Explore India's most famous tourist circuit visiting the iconic cities of Delhi, Agra, and Jaipur. Witness the majestic Taj Mahal, explore ancient forts and palaces, and immerse yourself in the rich Mughal and Rajput heritage. This tour perfectly combines history, architecture, culture, and shopping experiences.",
    image: GoldenTriangleImg,
    highlights: [
      "Sunrise visit to Taj Mahal",
      "Elephant ride at Amber Fort",
      "Sound & Light show at Red Fort",
      "UNESCO World Heritage Sites",
      "Traditional Rajasthani dinner"
    ],
    inclusions: [
      "5 nights hotel accommodation",
      "Daily breakfast",
      "AC vehicle for all transfers",
      "Monument entrance fees",
      "English-speaking guide",
      "Fatehpur Sikri visit"
    ],
    exclusions: [
      "Airfare/train tickets",
      "Lunch and dinner  ",
      "Camera fees at monuments",
      "Tips and gratuities",
      "Optional activities"
    ],
    transport: {
      type: "AC Innova/Tempo Traveller",
      details: "Spacious AC vehicle with experienced driver for comfortable long-distance travel between cities."
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        details: "Airport pickup, hotel check-in. Evening visit to India Gate, Rashtrapati Bhavan (drive-by), and Connaught Place for shopping and dinner.",
        meals: "None"
      },
      {
        day: 2,
        title: "Delhi Sightseeing",
        details: "Full day Delhi tour visiting Red Fort, Jama Masjid, Raj Ghat, Qutub Minar, Humayun's Tomb, Lotus Temple, and markets of Chandni Chowk with rickshaw ride.",
        meals: "Breakfast"
      },
      {
        day: 3,
        title: "Delhi to Agra",
        details: "Drive to Agra (230 km, 4 hours). Afternoon visit to Taj Mahal at sunset, Agra Fort, and Mehtab Bagh for sunset views of Taj from across the river.",
        meals: "Breakfast"
      },
      {
        day: 4,
        title: "Agra to Jaipur via Fatehpur Sikri",
        details: "Early morning optional Taj Mahal visit at sunrise. Drive to Jaipur (240 km, 5 hours) visiting the abandoned Mughal city of Fatehpur Sikri en route.",
        meals: "Breakfast"
      },
      {
        day: 5,
        title: "Jaipur Full Day",
        details: "Visit Amber Fort with elephant/jeep ride, City Palace museum, Jantar Mantar observatory, Hawa Mahal (photo stop), and local bazaars for shopping. Evening: traditional Rajasthani dinner with cultural show.",
        meals: "Breakfast, Dinner"
      },
      {
        day: 6,
        title: "Departure from Jaipur",
        details: "Breakfast, optional visit to Birla Temple, shopping at Johari Bazaar for gems and textiles, transfer to airport/railway station for departure to Delhi or onward journey.",
        meals: "Breakfast"
      }
    ]
  },
  {
    slug: "goa-3-days",
    title: "Goa Beach Paradise",
    duration: "3 Days / 2 Nights",
    price: "₹12,999",
    rating: 4.7,
    reviews: 428,
    category: "Hot Deal",
    shortDesc: "Beaches, nightlife, water sports and island tours - perfect beach getaway.",
    description: "Escape to Goa's pristine beaches and vibrant culture with this action-packed 3-day tour. Enjoy water sports, beach hopping, fort exploration, and vibrant nightlife. Perfect for couples, friends, and solo travelers looking for a quick beach break with adventure and relaxation.",
    image: Goaimage,
    highlights: [
      "Water sports package at Calangute",
      "Sunset beach party",
      "Fort Aguada exploration",
      "Anjuna flea market shopping",
      "Goan seafood dining"
    ],
    inclusions: [
      "2 nights beach resort stay",
      "Daily breakfast",
      "Airport/station transfers",
      "North Goa sightseeing",
      "Water sports package (1 activity)"
    ],
    exclusions: [
      "Airfare/train tickets",
      "Lunch and dinner",
      "Additional water sports",
      "Nightclub entry fees",
      "Scooter/bike rentals"
    ],
    transport: {
      type: "AC Hatchback",
      details: "AC car for transfers. Scooter/bike rentals available on request for beach hopping."
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa & Beach Time",
        details: "Arrive at Goa airport/station, hotel check-in. Afternoon at Calangute/Baga Beach with water sports (jet ski, parasailing, banana ride). Evening at local beach shacks with live music.",
        meals: "None"
      },
      {
        day: 2,
        title: "North Goa Sightseeing",
        details: "Visit Fort Aguada, Candolim Beach, Vagator Beach, Chapora Fort (Dil Chahta Hai fame), Anjuna Beach. Evening: Anjuna flea market shopping and beachside dinner. Optional: nightclub/casino visit.",
        meals: "Breakfast"
      },
      {
        day: 3,
        title: "Checkout & Departure",
        details: "Leisurely breakfast, morning beach time for swimming and relaxation. Last-minute shopping at local markets, transfer to airport/railway station for departure.",
        meals: "Breakfast"
      }
    ]
  },
  {
    slug: "ooty-kodaikanal-5-days",
    title: "Ooty – Kodaikanal Delight",
    duration: "5 Days / 4 Nights",
    price: "₹16,499",
    rating: 4.6,
    reviews: 189,
    category: "Popular",
    shortDesc: "Beautiful hill stations with tea gardens, lakes, and pleasant weather.",
    description: "Experience the charm of South India's  most beautiful hill stations. Enjoy the colonial-era architecture of Ooty, ride the Nilgiri Mountain Railway, explore tea estates, and discover Kodaikanal's pristine lakes and valleys. Perfect for families and couples seeking cool weather and natural beauty.",
    image: OotyKodaiImg,
    highlights: [
      "Nilgiri Mountain Railway (Toy Train) ride",
      "Boating in Ooty & Kodai lakes",
      "Tea plantation & factory visit",
      "Coaker's Walk sunset views",
      "Chocolate and homemade cheese shopping"
    ],
    inclusions: [
      "4 nights hotel accommodation",
      "Daily breakfast",
      "All transfers in AC vehicle",
      "Toy train tickets",
      "Sightseeing as per itinerary"
    ],
    exclusions: [
      "Airfare/train tickets to Coimbatore",
      "Lunch and dinner",
      "Boating charges",
      "Entry fees",
      "Horse riding charges"
    ],
    transport: {
      type: "AC Sedan",
      details: "Comfortable AC car for hill station travel with experienced local driver."
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Ooty",
        details: "Arrive in Ooty (from Coimbatore 90 km, 3 hours), hotel check-in. Evening visit to Ooty Lake for boating and Botanical Gardens. Explore commercial street for local products.",
        meals: "Dinner"
      },
      {
        day: 2,
        title: "Ooty Full Day Sightseeing",
        details: "Ride Nilgiri Toy Train from Ooty to Coonoor (or reverse). Visit Doddabetta Peak (highest point), Tea Factory & Museum, Rose Garden, and Pykara Lake & Falls. Shopping for homemade chocolates.",
        meals: "Breakfast, Dinner"
      },
      {
        day: 3,
        title: "Ooty to Kodaikanal",
        details: "Scenic drive to Kodaikanal (175 km, 5 hours) through winding ghats and tea estates. Check-in, evening at Coaker's Walk for panoramic valley views and sunset.",
        meals: "Breakfast, Dinner"
      },
      {
        day: 4,
        title: "Kodaikanal Sightseeing",
        details: "Visit Kodai Lake (boating), Bryant Park, Pillar Rocks, Green Valley View (Suicide Point), Bear Shola Falls, and local markets. Optional trekking to Dolphin's Nose.",
        meals: "Breakfast, Dinner"
      },
      {
        day: 5,
        title: "Departure",
        details: "Breakfast, last-minute shopping for eucalyptus oil and handmade crafts, check-out and transfer to Madurai (120 km) or Coimbatore (175 km) for railway station/airport.",
        meals: "Breakfast"
      }
    ]
  },
  {
    slug: "kerala-4-days",
    title: "Kerala Express Tour",
    duration: "4 Days / 3 Nights",
    price: "₹17,999",
    rating: 4.7,
    reviews: 203,
    category: "Exclusive",
    shortDesc: "Quick Kerala experience covering Munnar hills and Alleppey backwaters.",
    description: "Perfect for travelers with limited time, this express Kerala tour covers the top highlights - Munnar's tea gardens and Alleppey's backwaters. Experience authentic Kerala culture, cuisine, and natural beauty in just 4 days.",
    image: KeralaPackageImg,
    highlights: [
      "Tea plantation walks",
      "Houseboat overnight stay",
      "Kathakali dance performance",
      "Traditional Kerala meals",
      "Scenic valley views"
    ],
    inclusions: [
      "3 nights accommodation",
      "Daily breakfast & dinner",
      "Houseboat with all meals",
      "AC vehicle transfers",
      "All sightseeing"
    ],
    exclusions: [
      "Airfare to Cochin",
      "Lunch (except on houseboat)",
      "Ayurvedic massages",
      "Shopping",
      "Tips"
    ],
    transport: {
      type: "AC Sedan",
      details: "AC car for all transfers between Cochin, Munnar, and Alleppey."
    },
    itinerary: [
      {
        day: 1,
        title: "Cochin – Munnar Transfer",
        details: "Arrive at Cochin airport, drive to Munnar (130 km, 4 hours) with waterfalls en route, evening at leisure in Munnar town.",
        meals: "Dinner"
      },
      {
        day: 2,
        title: "Munnar Sightseeing",
        details: "Visit Tea Museum, Mattupetty Dam, Echo Point and scenic viewpoints with tea plantation walks.",
        meals: "Breakfast, Dinner"
      },
      {
        day: 3,
        title: "Munnar – Alleppey Houseboat",
        details: "Drive to Alleppey (170 km, 5 hours), check-in to houseboat, enjoy backwater cruise with onboard meals.",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 4,
        title: "Departure from Alleppey / Cochin",
        details: "Check-out from houseboat after breakfast, transfer to Cochin airport/railway station (55 km, 1.5 hours) for departure.",
        meals: "Breakfast"
      }
    ]
  },
  // INTERNATIONAL PACKAGES
  {
    slug: "thailand-bangkok-pattaya",
    title: "Thailand - Bangkok & Pattaya",
    duration: "5 Days / 4 Nights",
    price: "₹32,999",
    rating: 4.8,
    reviews: 567,
    category: "Bestseller",
    shortDesc: "Experience vibrant Bangkok and beach paradise Pattaya with temples, markets, and island tours.",
    description: "Discover the perfect blend of culture and beach life in Thailand. Explore Bangkok's magnificent temples, vibrant floating markets, and bustling nightlife. Relax on Pattaya's beautiful beaches, enjoy thrilling water sports, and visit the stunning Coral Island. This package offers the best of both worlds - spiritual enlightenment and tropical relaxation.",
    image: Keralaimage, // Placeholder - would use Thailand image
    highlights: [
      "Grand Palace and Emerald Buddha Temple",
      "Coral Island day trip with water sports",
      "Floating Market experience",
      "Alcazar Cabaret Show",
      "Bangkok city tour",
      "Pattaya beach leisure time"
    ],
    inclusions: [
      "4 nights accommodation (3-4 star hotels)",
      "Daily breakfast",
      "Return airport transfers",
      "Bangkok city tour",
      "Coral Island tour with lunch",
      "Alcazar Show tickets"
    ],
    exclusions: [
      "India-Thailand flight tickets",
      "Lunch and dinner (except Coral Island)",
      "Thailand visa fees",
      "Optional tours",
      "Personal expenses",
      "Travel insurance"
    ],
    transport: {
      type: "AC Coach/Minivan",
      details: "Comfortable AC vehicles for all transfers and sightseeing. Speedboat for Coral Island trip."
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bangkok - Transfer to Pattaya",
        details: "Arrive at Bangkok Suvarnabhumi Airport, meet and greet by tour representative. Transfer to Pattaya (150 km, 2.5 hours). Check-in at hotel, evening free for beach walk or optional Pattaya Walking Street visit.",
        meals: "None"
      },
      {
        day: 2,
        title: "Pattaya - Coral Island Tour",
        details: "After breakfast, full day excursion to Coral Island by speedboat. Enjoy water sports like parasailing, jet skiing, banana boat rides, and underwater sea walking. Lunch at island restaurant. Evening return to Pattaya. Night: Alcazar Cabaret Show.",
        meals: "Breakfast, Lunch"
      },
      {
        day: 3,
        title: "Pattaya to Bangkok - City Tour",
        details: "Check-out and drive to Bangkok. Visit Grand Palace (Palace of Kings), Temple of Emerald Buddha, Reclining Buddha Temple (Wat Pho). Evening visit to floating market. Check-in to Bangkok hotel.",
        meals: "Breakfast"
      },
      {
        day: 4,
        title: "Bangkok - Free Day for Shopping",
        details: "Free day for shopping at MBK Center, Platinum Mall, or Chatuchak Weekend Market. Optional tours: Safari World, Dream World, or Chao Phraya River Cruise. Evening explore Asiatique Night Market.",
        meals: "Breakfast"
      },
      {
        day: 5,
        title: "Departure from Bangkok",
        details: "Breakfast at hotel, last-minute shopping, check-out and transfer to Suvarnabhumi Airport for flight back to India.",
        meals: "Breakfast"
      }
    ]
  },
  {
    slug: "singapore-gardens",
    title: "Singapore - Lion City Gardens",
    duration: "4 Days / 3 Nights",
    price: "₹42,999",
    rating: 4.9,
    reviews: 423,
    category: "Premium",
    shortDesc: "Explore futuristic Singapore - Gardens by the Bay, Sentosa Island, and Marina Bay Sands.",
    description: "Experience the perfect fusion of nature, technology, and culture in Singapore. Visit the iconic Gardens by the Bay, explore Sentosa Island's attractions, enjoy world-class shopping on Orchard Road, and marvel at Marina Bay's skyline. This cosmopolitan city-state offers unforgettable experiences for all ages.",
    image: GoaVacationImg, // Placeholder
    highlights: [
      "Gardens by the Bay with Cloud Forest & Flower Dome",
      "Sentosa Island attractions (Universal Studios option)",
      "Marina Bay Sands viewing deck",
      "Night Safari experience",
      "Clarke Quay river cruise",
      "Orchard Road shopping"
    ],
    inclusions: [
      "3 nights hotel accommodation",
      "Daily breakfast",
      "Airport transfers",
      "City tour with Gardens by the Bay entry",
      "Sentosa Island tour",
      "Night Safari tickets"
    ],
    exclusions: [
      "India-Singapore flights",
      "Lunch and dinner",
      "Universal Studios tickets",
      "Cable car rides",
      "Shopping expenses",
      "Travel insurance"
    ],
    transport: {
      type: "AC Coach",
      details: "Modern AC coach for city tours. MRT (Metro) passes available for self-exploration."
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Singapore - City Orientation",
        details: "Arrive at Changi Airport, transfer to hotel. Evening orientation tour: Merlion Park, Marina Bay Sands (exterior), Helix Bridge, Esplanade. Dinner at hawker center (own expense). Night walk around Clarke Quay.",
        meals: "None"
      },
      {
        day: 2,
        title: "Gardens by the Bay & Sentosa Island",
        details: "Morning visit to Gardens by the Bay - Cloud Forest, Flower Dome, Supertree Grove. Afternoon trip to Sentosa Island via cable car. Visit Siloso Beach, Palawan Beach. Evening: Wings of Time show. Optional: Universal Studios (additional cost).",
        meals: "Breakfast"
      },
      {
        day: 3,
        title: "Singapore City Tour & Night Safari",
        details: "Full day Singapore highlights: Little India, Kampong Glam (Arab Street), Chinatown, Orchard Road shopping. Visit Sri Mariamman Temple and Buddha Tooth Relic Temple. Evening: World-famous Night Safari with tram ride.",
        meals: "Breakfast"
      },
      {
        day: 4,
        title: "Departure",
        details: "Leisure morning for last-minute shopping at Mustafa Centre or Bugis Street. Check-out and airport transfer for return flight.",
        meals: "Breakfast"
      }
    ]
  },
  {
    slug: "bali-island-paradise",
    title: "Bali - Island of Gods",
    duration: "6 Days / 5 Nights",
    price: "₹38,999",
    rating: 4.7,
    reviews: 389,
    category: "Trending",
    shortDesc: "Discover Bali's temples, rice terraces, beaches, and rich Balinese culture.",
    description: "Immerse yourself in Bali's enchanting beauty and spiritual culture. Explore ancient temples perched on cliffs, walk through emerald rice terraces, relax on pristine beaches, and witness traditional Balinese dances. This Indonesian paradise offers the perfect mix of adventure, culture, and relaxation.",
    image: OotyKodaiImg, // Placeholder
    highlights: [
      "Tanah Lot sunset temple visit",
      "Ubud Rice Terraces and Monkey Forest",
      "Traditional Kecak Fire Dance",
      "Water sports at Tanjung Benoa",
      "Uluwatu Temple cliff views",
      "Balinese spa and massage"
    ],
    inclusions: [
      "5 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Full-day Ubud tour",
      "Tanah Lot & Uluwatu temple tours",
      "Kecak dance show tickets"
    ],
    exclusions: [
      "India-Bali flights",
      "Lunch and dinner",
      "Water sports charges",
      "Spa and massage",
      "Tips to driver/guide",
      "Travel insurance"
    ],
    transport: {
      type: "AC Private Car",
      details: "Private AC car with driver for all tours and transfers."
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali - Seminyak Beach",
        details: "Arrive at Ngurah Rai International Airport, transfer to Seminyak hotel. Evening leisure at Seminyak Beach, explore Seminyak Square for shopping and dining. Sunset at beach cafe.",
        meals: "None"
      },
      {
        day: 2,
        title: "Tanah Lot Temple & Tanjung Benoa Water Sports",
        details: "Morning visit to Tanjung Benoa Beach for water sports (jet ski, parasailing, banana boat - optional). Afternoon: Tanah Lot Temple for spectacular sunset views over the ocean. Traditional Balinese dinner (optional).",
        meals: "Breakfast"
      },
      {
        day: 3,
        title: "Ubud Cultural Tour",
        details: "Full day Ubud tour: Tegalalang Rice Terraces, lunch overlooking rice fields, Ubud Monkey Forest, Ubud Palace and Market, traditional Balinese coffee plantation. Evening: Kecak Fire Dance performance.",
        meals: "Breakfast"
      },
      {
        day: 4,
        title: "Uluwatu Temple & Jimbaran Beach",
        details: "Visit Garuda Wisnu Kencana cultural park, Uluwatu Temple perched on cliff (90m above sea level). Watch traditional dance performance at temple. Evening seafood BBQ dinner at Jimbaran Beach (optional).",
        meals: "Breakfast"
      },
      {
        day: 5,
        title: "Free Day - Beach & Spa",
        details: "Leisure day for beach relaxation or optional tours: Mount Batur sunrise trek, white water rafting, or ATV adventures. Recommended: Traditional Balinese spa treatment and massage.",
        meals: "Breakfast"
      },
      {
        day: 6,
        title: "Departure",
        details: "Breakfast, last-minute shopping for Balinese handicrafts and souvenirs. Transfer to airport for return flight.",
        meals: "Breakfast"
      }
    ]
  },
  {
    slug: "malaysia-kuala-lumpur",
    title: "Malaysia - KL & Genting Highlands",
    duration: "5 Days / 4 Nights",
    price: "₹29,999",
    rating: 4.6,
    reviews: 312,
    category: "Popular",
    shortDesc: "Experience Kuala Lumpur's iconic towers, Genting Highlands cable car, and Batu Caves.",
    description: "Discover Malaysia's vibrant capital and mountain resort. Stand atop the Petronas Twin Towers, ride Southeast Asia's longest cable car to Genting Highlands, explore the sacred Batu Caves, and shop till you drop in modern malls. Malaysia offers diverse experiences from city sophistication to hill station charm.",
    image: YelagiriImg, // Placeholder
    highlights: [
      "Petronas Twin Towers & Sky Bridge",
      "Genting Highlands cable car ride",
      "Batu Caves with 272 steps",
      "Putrajaya city tour",
      "KL Tower observation deck",
      "Shopping at Pavilion & KLCC"
    ],
    inclusions: [
      "4 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "KL city tour with Batu Caves",
      "Genting Highlands day trip",
      "Petronas Towers tickets"
    ],
    exclusions: [
      "India-Malaysia flights",
      "Lunch and dinner",
      "Genting casino chips",
      "Optional tours",
      "Personal expenses",
      "Travel insurance"
    ],
    transport: {
      type: "AC Coach",
      details: "AC coach for group tours, cable car for Genting Highlands."
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kuala Lumpur",
        details: "Arrive at KLIA, transfer to hotel. Evening visit to Petronas Twin Towers (photo stop), KLCC Park, and Suria KLCC mall for shopping and dinner. Night fountain show at KLCC park.",
        meals: "None"
      },
      {
        day: 2,
        title: "KL Cityitinerary Tour",
        details: "Half-day city tour: National Monument, King's Palace (photo stop), Independence Square, KL Tower with observation deck, Central Market for handicrafts. Afternoon free for shopping at Pavilion or Bukit Bintang.",
        meals: "Breakfast"
      },
      {
        day: 3,
        title: "Genting Highlands Excursion",
        details: "Full day trip to Genting Highlands (60 km). Scenic cable car ride with mountain views. Visit Genting Premium Outlets, indoor theme park, casino (optional). Cool mountain weather. Evening return to KL.",
        meals: "Breakfast"
      },
      {
        day: 4,
        title: "Batu Caves & Putrajaya",
        details: "Morning visit to Batu Caves - climb 272 colorful steps to Hindu temple cave. Afternoon: Putrajaya tour - Putra Mosque, Perdana Putra, Putrajaya Lake. Evening free for Jalan Alor food street.",
        meals: "Breakfast"
      },
      {
        day: 5,
        title: "Departure",
        details: "Breakfast, free time for last-minute shopping. Transfer to KLIA for departure flight.",
        meals: "Breakfast"
      }
    ]
  },
  {
    slug: "dubai-luxury-experience",
    title: "Dubai - Luxury & Desert Adventure",
    duration: "5 Days / 4 Nights",
    price: "₹52,999",
    rating: 4.9,
    reviews: 678,
    category: "Premium",
    shortDesc: "Experience Dubai's luxury - Burj Khalifa, desert safari, Dubai Mall, and gold souks.",
    description: "Experience the epitome of luxury and modernity in Dubai. Ascend the world's tallest building at Burj Khalifa, cruise along Dubai Creek, explore traditional souks, enjoy thrilling desert safari with BBQ dinner, and shop at the world's largest mall. Dubai offers unmatched luxury and entertainment.",
    image: GoldenTriangleImg, // Placeholder
    highlights: [
      "Burj Khalifa At the Top (124th floor)",
      "Desert Safari with BBQ dinner & shows",
      "Dubai Marina Dhow Cruise with dinner",
      "Dubai Mall & Gold Souk visits",
      "Palm Jumeirah monorail ride",
      "Miracle Garden or Global Village"
    ],
    inclusions: [
      "4 nights 4-star hotel stay",
      "Daily breakfast",
      "Airport transfers",
      "Half-day Dubai city tour",
      "Burj Khalifa tickets (124th floor)",
      "Desert safari with dinner & entertainment"
    ],
    exclusions: [
      "India-Dubai flights",
      "UAE visa fees",
      "Lunch and dinner (except safari & cruise)",
      "Burj Al Arab visit",
      "Shopping expenses",
      "Travel insurance"
    ],
    transport: {
      type: "AC Sedan/SUV",
      details: "Private AC vehicle for transfers, 4x4 for desert safari."
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dubai",
        details: "Arrive at Dubai International Airport, visa formalities, transfer to hotel. Evening visit to Dubai Mall, witness Dubai Fountain show. Optional: At the Top Burj Khalifa visit (can be done any evening).",
        meals: "None"
      },
      {
        day: 2,
        title: "Dubai City Tour & Creek Cruise",
        details: "Half-day tour: Jumeirah Mosque (photo), Burj Al Arab (photo), Palm Jumeirah monorail, Dubai Marina. Visit Gold Souk and Spice Souk. Evening: Traditional Dhow Cruise at Dubai Creek with dinner buffet.",
        meals: "Breakfast, Dinner"
      },
      {
        day: 3,
        title: "Desert Safari Adventure",
        details: "Full day free for shopping at Dubai Mall, Mall of Emirates. Afternoon: Pick up for Desert Safari - dune bashing in 4x4, camel ride, sandboarding, henna painting. Evening: BBQ dinner with belly dance and Tanoura show under the stars.",
        meals: "Breakfast, Dinner"
      },
      {
        day: 4,
        title: "Leisure Day - Atlantis or Global Village",
        details: "Free day for optional activities: Atlantis Aquaventure, Dubai Miracle Garden (seasonal), Ski Dubai, or Global Village (evening, seasonal). Shopping at outlets. Evening: La Perle show or Dubai Fountain Boardwalk.",
        meals: "Breakfast"
      },
      {
        day: 5,
        title: "Departure",
        details: "Breakfast and check-out. Last-minute shopping if time permits. Transfer to Dubai International Airport for return flight.",
        meals: "Breakfast"
      }
    ]
  },
  {
    slug: "vietnam-halong-hanoi",
    title: "Vietnam - Hanoi & Halong Bay",
    duration: "5 Days / 4 Nights",
    price: "₹34,999",
    rating: 4.8,
    reviews: 289,
    category: "Trending",
    shortDesc: "Explore Vietnam's capital Hanoi and UNESCO World Heritage Halong Bay cruise.",
    description: "Discover Vietnam's rich history and natural beauty. Explore Hanoi's ancient temples and French colonial architecture, cruise through the magical limestone karsts of Halong Bay, visit traditional villages, and savor authentic Vietnamese cuisine. This tour combines cultural immersion with breathtaking scenery.",
    image: KeralaPackageImg, // Placeholder
    highlights: [
      "Overnight Halong Bay cruise on junk boat",
      "Hanoi Old Quarter cyclo ride",
      "Water Puppet Show",
      "Visit to Bat Trang pottery village",
      "Thien Mu Pagoda visit",
      "Vietnamese cooking class (optional)"
    ],
    inclusions: [
      "4 nights accommodation (3 nights hotel + 1 night cruise)",
      "Daily breakfast, cruise meals",
      "Airport transfers",
      "Hanoi city tour",
      "2D/1N Halong Bay cruise",
      "Water Puppet Show tickets"
    ],
    exclusions: [
      "India-Vietnam flights",
      "Vietnam visa fees",
      "Lunch in Hanoi",
      "Drinks on cruise",
      "Tips for crew",
      "Travel insurance"
    ],
    transport: {
      type: "AC Minivan",
      details: "AC minivan for transfers, traditional junk boat for Halong Bay cruise."
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Hanoi",
        details: "Arrive at Noi Bai Airport, transfer to hotel (45 km). Evening cyclo ride through Hanoi Old Quarter (36 streets). Visit Hoan Kiem Lake and Ngoc Son Temple. Dinner at local restaurant. Night: Water Puppet Show.",
        meals: "Dinner"
      },
      {
        day: 2,
        title: "Hanoi City Full Day Tour",
        details: "Full day tour: Ho Chi Minh Mausoleum (exterior), One Pillar Pagoda, Temple of Literature, Hoa Lo Prison Museum, Bat Trang pottery village. Afternoon: Train Street for photos. Evening: Egg coffee at cafe.",
        meals: "Breakfast"
      },
      {
        day: 3,
        title: "Hanoi to Halong Bay Cruise",
        details: "Morning drive to Halong Bay (160 km, 3.5 hours). Board traditional junk boat at noon. Lunch onboard while cruising through limestone karsts. Visit Sung Sot Cave, kayaking or bamboo boat ride. Sunset party on deck. Dinner and overnight on boat.",
        meals: "Breakfast, Lunch, Dinner"
      },
      {
        day: 4,
        title: "Halong Bay to Hanoi",
        details: "Early Tai Chi session on deck. Breakfast while cruising. Visit floating fishing village or pearl farm. Brunch onboard. Disembark at noon, drive back to Hanoi. Evening free for shopping at Dong Xuan Market or Hang Gai Street.",
        meals: "Breakfast, Brunch"
      },
      {
        day: 5,
        title: "Departure from Hanoi",
        details: "Breakfast, free time for last-minute shopping at local markets (silk, lacquerware, coffee). Transfer to airport for departure flight.",
        meals: "Breakfast"
      }
    ]
  },
  {
    slug: "sri-lanka-pearl-indian-ocean",
    title: "Sri Lanka - Pearl of Indian Ocean",
    duration: "6 Days / 5 Nights",
    price: "₹27,999",
    rating: 4.7,
    reviews: 234,
    category: "New",
    shortDesc: "Explore Sri Lanka's beaches, tea plantations, wildlife, and ancient temples.",
    description: "Discover the diverse beauty of Sri Lanka. Visit ancient Sigiriya Rock Fortress, safari in wildlife-rich national parks, explore Buddhist temples in Kandy, stroll through lush tea plantations in Nuwara Eliya, and relax on pristine southern beaches. Perfect blend of culture, nature, and beach relaxation.",
    image: Ootyimage, // Placeholder
    highlights: [
      "Sigiriya Rock Fortress climb",
      "Elephant safari at Minneriya/Kaudulla",
      "Temple of Tooth Relic in Kandy",
      "Scenic train ride to Nuwara Eliya",
      "Tea plantation and factory visit",
      "Beach time at Bentota/Hikkaduwa"
    ],
    inclusions: [
      "5 nights accommodation",
      "Daily breakfast",
      "Airport transfers",
      "AC vehicle for all tours",
      "Sigiriya & Temple of Tooth entry",
      "Elephant safari"
    ],
    exclusions: [
      "India-Sri Lanka flights",
      "Sri Lanka ETA visa",
      "Lunch and dinner",
      "Scenic train tickets",
      "Water sports",
      "Travel insurance"
    ],
    transport: {
      type: "AC Van",
      details: "Comfortable AC van with driver for all transfers and sightseeing."
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Colombo - Transfer to Sigiriya",
        details: "Arrive at Bandaranaike Airport, drive to Sigiriya (150 km, 4 hours). En route visit Dambulla Cave Temple (Golden Temple). Check-in at Sigiriya hotel. Evening leisure or optional Ayurveda massage.",
        meals: "Dinner"
      },
      {
        day: 2,
        title: "Sigiriya & Minneriya Safari",
        details: "Early morning climb Sigiriya Rock Fortress (5th-century palace, 1200 steps). Late afternoon: Jeep safari at Minneriya or Kaudulla National Park to see elephants, deer, and birds. Evening: Village tour with bullock cart ride and traditional cooking.",
        meals: "Breakfast, Dinner"
      },
      {
        day: 3,
        title: "Sigiriya to Kandy via Spice Garden",
        details: "Drive to Kandy (100 km, 3 hours) visiting spice garden en route. Afternoon: Temple of the Sacred Tooth Relic, Kandy Lake walk. Evening: Cultural dance show at Kandy Cultural Centre.",
        meals: "Breakfast"
      },
      {
        day: 4,
        title: "Kandy to Nuwara Eliya - Tea Country",
        details: "Scenic drive to Nuwara Eliya (75 km) through tea estates. Visit tea plantation and factory, learn tea-making process, tea tasting. Visit Lake Gregory, post office, Victoria Park. Optional: book tickets for scenic train journey next day.",
        meals: "Breakfast"
      },
      {
        day: 5,
        title: "Nuwara Eliya to Beach (Bentota/Hikkaduwa)",
        details: "Optional scenic train ride from Nanu Oya to Ella (most beautiful train journey) then drive, OR direct drive to beach resort (200 km, 5 hours). Evening: relax on golden beach, sunset views. Optional: turtle hatchery visit.",
        meals: "Breakfast"
      },
      {
        day: 6,
        title: "Beach to Colombo - Departure",
        details: "Leisure morning at beach. Drive to Colombo (120 km, 2.5 hours), brief city tour: Galle Face Green, Independence Square. Shopping at Odel or local markets. Transfer to airport for departure.",
        meals: "Breakfast"
      }
    ]
  }
];

