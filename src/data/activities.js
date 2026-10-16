import surfImage from "@/assets/activities/activity-8.webp";
import surfGroupImage from "@/assets/retreats/retreats-2.webp";
import yogaImage from "@/assets/retreats/retreats.webp";
import aerialImage from "@/assets/retreats/retreats-3.webp";
import islandImage from "@/assets/activities/activity-1.webp";
import glowImage from "@/assets/activities/activity-2.webp";
import paddleImage from "@/assets/activities/activity-9.webp";

// Gaby's activity brief, edited for the web. Prices are USD per person unless
// another unit is specified. Update this date when the information changes.
export const ACTIVITIES_UPDATED = "2026-10-16";
export const WHATSAPP_URL = "https://wa.me/50683922295";

export function activityWhatsApp(message) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

const surf = {
  slug: "surf-lessons-santa-teresa",
  name: "Surf Lessons",
  title: "Surf Lessons in Santa Teresa, Costa Rica | Funky Monkey Lodge",
  description: "Learn to surf with an ISA-certified coach in Santa Teresa. 90-minute group lessons from USD 80, board and rash guard included. Book through Funky Monkey Lodge.",
  heading: "Surf Lessons in Santa Teresa, Costa Rica",
  eyebrow: "Catch your next wave",
  intro: "Learn the basics or work on your next turn with Nacho, ISA-certified founder and head coach of Monkey Adventures – SUP & Surf School. Funky Monkey Lodge is a 5-minute walk from the main break; your coach chooses the beach and session time to suit your level and the day's conditions.",
  hero: surfImage,
  heroAlt: "Surfer with a yellow board entering the waves",
  heroPosition: "center 60%",
  summary: [
    ["Duration", "90-minute lesson"],
    ["Location", "5-minute walk from the main break"],
    ["Equipment", "Surfboard & rash guard included"],
  ],
  cta: "Book your surf lesson",
  message: "Hi Funky Monkey! I'd like to book a surf lesson. Could you help me choose a lesson and a time?",
  optionsHeading: "Find your kind of lesson",
  optionsIntro: "Choose how you learn. Lessons include a board and rash guard; surf guiding is a separate option for surfers with their own equipment.",
  options: [
    { id: "group", name: "Group lesson", price: 80, from: true, duration: "90 minutes", text: "A social way to learn, whether you're traveling solo or with friends.", includes: ["ISA-certified coaching", "Board and rash guard", "Beach briefing, water practice and feedback"] },
    { id: "semi-private", name: "Semi-private lesson", priceLabel: "Ask for rates", duration: "90 minutes", text: "Learn together as a couple, a family or a small group of friends.", includes: ["Coaching adapted to your group", "Board and rash guard", "Beach and time selected for your level"] },
    { id: "private", name: "Private lesson", price: 120, duration: "90 minutes", text: "One-to-one coaching focused on your goals, technique and confidence.", includes: ["Individual instruction", "Board and rash guard", "Personal feedback"] },
  ],
  sections: [
    {
      id: "your-session", title: "From the sand to the lineup", image: surfGroupImage, alt: "Surf group standing on the beach with their boards",
      text: "Funky Monkey Lodge has welcomed surfers since 2001. Each session starts with ocean safety and technique on the beach. Practice on the sand, take those skills into the water, then finish with feedback from your coach.",
      items: ["Beginners: board control, paddling, standing up and reading the water.", "Intermediate and advanced surfers: take-offs, wave selection, turns and positioning.", "Beach and timing follow the tide, swell and your experience."],
    },
    {
      id: "kids", title: "Surf lessons for kids",
      text: "Children's sessions depend on swimming ability, confidence and ocean conditions rather than a strict minimum age. Kids under 12 usually take a 60-minute private lesson with one-to-one instruction. Tell us your child's age when you get in touch so we can arrange the right session.",
    },
    {
      id: "seasons", title: "When to surf",
      cards: [
        { title: "December–April", text: "The dry season often brings smaller, cleaner waves and morning offshore winds, making it a good time to learn." },
        { title: "May–November", text: "The green season brings more powerful swells. Experienced surfers have room to progress; beginner lessons use suitable spots and smaller days." },
      ],
      text: "Surfing is possible year-round. Your coach chooses the session time around the tide and the day's conditions.",
    },
    {
      id: "rentals", title: "Keep surfing after your lesson",
      cards: [
        { title: "Surfboard rental", text: "From USD 20 per day. Softboards and boards for different levels are available." },
        { title: "Surf guiding", text: "From USD 50. Equipment and transportation are not included; ask us about the right session for your experience." },
      ],
    },
  ],
  preparation: { title: "What to bring", items: ["Swimwear", "Reef-safe sunscreen", "Water bottle"], note: "You should be comfortable swimming in the ocean. A surfboard and rash guard are provided; the warm water usually means no wetsuit is needed." },
  faqs: [
    { question: "Can I join if I'm not staying at the lodge?", answer: "Yes. You can book a lesson through Funky Monkey Lodge even if you're staying elsewhere." },
    { question: "How far ahead should I book?", answer: "You can arrange a session at reception or through WhatsApp. During high season, December to April, booking a few days ahead is recommended." },
  ],
  related: [{ label: "Stretch out after surfing with yoga on our deck", slug: "yoga-aerial-silk-santa-teresa" }, { label: "Find a room for your surf stay", href: "/rooms" }],
  service: { name: "Surf lessons arranged through Funky Monkey Lodge", type: "Surf instruction", provider: "Monkey Adventures – SUP & Surf School" },
};

const yoga = {
  slug: "yoga-aerial-silk-santa-teresa",
  name: "Yoga & Aerial Silk",
  title: "Yoga & Aerial Silk Classes in Santa Teresa | Funky Monkey Lodge",
  description: "Yoga from USD 18 and aerial silk from USD 20 on Funky Monkey Lodge's open-air deck. Explore classes, private sessions and self-practice in Santa Teresa.",
  heading: "Yoga & Aerial Silk in Santa Teresa, Costa Rica",
  eyebrow: "Move, stretch & reconnect",
  intro: "Join a yoga or aerial silk class on the open-air deck at Funky Monkey Lodge. Practice among the trees with experienced teachers, or book a private session for more individual attention. Classes welcome beginners and experienced practitioners, including visitors staying elsewhere.",
  hero: yogaImage,
  heroAlt: "Yoga class on Funky Monkey Lodge's open-air wooden deck",
  summary: [["Setting", "Open-air studio at the lodge"], ["Schedule", "Seasonal — ask for this week's classes"], ["Studio capacity", "Up to 20 people"]],
  cta: "Check the class schedule",
  message: "Hi Funky Monkey! Could you send me this week's yoga and aerial silk class schedule?",
  optionsHeading: "Classes & private sessions",
  optionsIntro: "Mats and blocks are provided. Class packages are available; message us for the current options and class duration.",
  options: [
    { id: "yoga", name: "Drop-in yoga", price: 18, from: true, text: "Teachers adapt the practice to the group's experience and needs rather than following just one style.", includes: ["Guided group practice", "Yoga mat and blocks", "Beginners welcome"] },
    { id: "aerial", name: "Drop-in aerial silk", price: 20, from: true, text: "Explore climbs, wraps and supported movement on two long fabrics suspended from the studio's high ceiling.", includes: ["Instructor-led progression", "Strength and flexibility work", "No previous aerial experience needed"] },
  ],
  rates: {
    title: "More ways to practice",
    rows: [
      ["Private yoga (1:1)", "From USD 45 for hotel guests"],
      ["Private aerial silk (1:1)", "From USD 65 for hotel guests"],
      ["Private sessions for visitors", "Ask us for rates"],
      ["Guest self-practice", "Free outside scheduled classes and events"],
      ["Visitor self-practice", "USD 10 per person per hour"],
      ["Class packages & studio rental", "Ask for current options and availability"],
    ],
  },
  sections: [
    {
      id: "aerial-silk", title: "Aerial silk is its own practice", image: aerialImage, alt: "Aerial silk practitioner wrapped in red fabrics on the lodge's deck", imagePosition: "center 35%",
      text: "Aerial silk, also called aerial dance, uses two long fabrics for climbing, wraps and acrobatic movement. It differs from aerial yoga, which uses a low hammock to support yoga poses. Instructors guide you step by step, starting at your level.",
    },
    {
      id: "schedule", title: "A schedule that follows the season",
      text: "Class times change with the season and the retreats we host. Message us for this week's yoga and aerial silk schedule, class duration and availability before you visit.",
      action: { label: "Ask about this week's classes", whatsapp: true },
    },
    {
      id: "self-practice", title: "Make space for your own practice",
      text: "Hotel guests can use the studio free of charge when no class or event is scheduled. Classes are paid separately. Visitors can book self-practice time at USD 10 per person per hour; contact us first to check availability.",
    },
    {
      id: "studio-rental", title: "A studio for your group", text: "Rent the open-air shala by the hour, day or as part of a retreat. The high-ceilinged space accommodates up to 20 people, with mats and blocks available. It works for classes, movement workshops, meditation and teacher trainings.",
      action: { label: "Plan a retreat at Funky Monkey Lodge", href: "/retreats" },
    },
  ],
  faqs: [
    { question: "Do I need to choose a specific yoga style?", answer: "Our teachers adapt each class to the group. Ask for the current schedule if you have a particular practice or level in mind." },
    { question: "Can I book the studio for my own class?", answer: "Yes. Teachers and facilitators can contact the lodge for rental rates and available times. Group rental is separate from individual self-practice." },
    { question: "Can I combine classes with accommodation?", answer: "Yes. Stay at the lodge and book the classes that fit your visit, or contact us through the Retreats page to plan a group stay." },
  ],
  related: [{ label: "Take your practice to the water with a surf lesson", slug: "surf-lessons-santa-teresa" }],
  service: { name: "Yoga and aerial silk classes at Funky Monkey Lodge", type: "Yoga and aerial silk classes" },
};

const tortuga = {
  slug: "tortuga-island-tour-santa-teresa",
  name: "Tortuga Island",
  title: "Tortuga Island Tours from Santa Teresa | Funky Monkey Lodge",
  description: "Visit Tortuga Island from Santa Teresa from USD 105 per person. Compare a full-day snorkeling and beach trip with the afternoon island and bioluminescence option.",
  heading: "Tortuga Island Tours from Santa Teresa",
  eyebrow: "An island day, your way",
  intro: "Take a boat trip to Tortuga Island in the Gulf of Nicoya for snorkeling, a white-sand beach and time by the water. Choose a full-day visit with a Costa Rican lunch, or an afternoon island trip that continues into sunset and bioluminescence. Funky Monkey Lodge arranges your booking with local tour providers.",
  hero: islandImage,
  heroAlt: "Boats beside the palm-lined beach at Tortuga Island",
  summary: [["Full-day trip", "About 8 hours"], ["Departure", "Pickup in Santa Teresa"], ["Day-trip transport", "Lodge ↔ Montezuma included"]],
  cta: "Book your island tour",
  message: "Hi Funky Monkey! I'd like to visit Tortuga Island. Could you help me choose between the full-day and afternoon tours?",
  optionsHeading: "Choose your island trip",
  optionsIntro: "Both options start from USD 105 per person. The day trip focuses on snorkeling and beach time; the afternoon option adds a night experience on selected dates.",
  options: [
    {
      id: "full-day", name: "Full-day Tortuga Island", price: 105, from: true, duration: "About 8 hours", departure: "Early morning; pickup time confirmed when booking", return: "Around sunset", transport: "Round-trip lodge transfer; boat from Montezuma",
      text: "A full island day with snorkeling, a cooked lunch and time to enjoy the beach.",
      includes: ["Transport from the lodge to Montezuma and back", "Boat ride and snorkeling gear", "Costa Rican lunch: fish, chicken or vegetarian", "Fresh fruit and drinks"],
      excludes: "Banana boat rides and gift shop purchases cost extra.",
    },
    {
      id: "afternoon", name: "Island + bioluminescence", price: 105, from: true, duration: "About 8 hours including the return transfer", departure: "12 noon from Santa Teresa", return: "Around 7 pm in Pochote, then about 60 minutes by minibus", transport: "Return minibus to Santa Teresa; pickup details confirmed when booking",
      text: "Snorkel for about 45 minutes, enjoy the beach and sandwiches around 2:30 pm, then leave the island at 4 pm. Sunset in Tambor Bay is followed by bioluminescence: swim with a life jacket or watch from the boat. Available on select moonless nights.",
      includes: ["All gear", "Sandwich lunch: chicken, ham and cheese, or avocado", "Fresh fruit and a sunset snack", "Beer and soda"],
    },
  ],
  sections: [
    {
      id: "itinerary", title: "Your full-day island itinerary", text: "Meet at the lodge for pickup. We confirm the exact time when you book; the boat leaves from Montezuma.",
      steps: [
        ["Across the peninsula", "Travel from Funky Monkey Lodge to Montezuma, then board the boat for a cruise along the Nicoya Peninsula."],
        ["Snorkel before the beach", "Stop to explore the water with snorkeling gear provided. You can skip snorkeling if you prefer."],
        ["Lunch on Tortuga Island", "Choose fish, chicken or a vegetarian dish, then settle into the island's white-sand beach."],
        ["Time to do your own thing", "Swim, relax, play beach volleyball or browse the gift shop. Banana boat rides are an optional extra."],
        ["Back to the lodge", "Return by boat to Montezuma, with transport back to Santa Teresa around sunset."],
      ],
    },
    {
      id: "wildlife", title: "Keep an eye on the water",
      text: "Dolphins, sea turtles and manta rays may appear on the boat journey, with occasional whale sightings depending on the season. Snorkeling offers a closer look at tropical fish. Wildlife sightings and water visibility vary and cannot be guaranteed.",
    },
    {
      id: "night-alternative", title: "Prefer an evening focused on the glow?",
      text: "The afternoon island trip is the option for combining Tortuga with a night experience. If visiting the island isn't your priority, compare our dedicated bioluminescence boat and SUP tours instead.",
      action: { label: "Explore the bioluminescence tours", slug: "bioluminescence-tour-santa-teresa" },
    },
  ],
  preparation: { title: "Pack for an island day", items: ["Swimwear and a towel", "Reef-safe sunscreen, hat and sunglasses", "Dry clothes for the journey back", "Cash for optional extras", "Waterproof bag or phone case"], note: "Tell us about dietary needs and young children when you book. Snorkeling is optional." },
  faqs: [
    { question: "Can children join the island tour?", answer: "Yes, children are welcome. Let us know if you're traveling with very young children so we can help you plan the trip." },
    { question: "How far ahead should I reserve?", answer: "Book a few days ahead during high season, December to April. The afternoon combination runs on select moonless nights, so ask about dates early." },
    { question: "Can I book if I'm staying somewhere else?", answer: "Yes. Message Funky Monkey Lodge to reserve and arrange your pickup details." },
  ],
  service: { name: "Tortuga Island tour booking through Funky Monkey Lodge", type: "Island excursion booking" },
};

const bioluminescence = {
  slug: "bioluminescence-tour-santa-teresa",
  name: "Bioluminescence Tour",
  title: "Bioluminescence Tour from Santa Teresa | Funky Monkey Lodge",
  description: "Compare bioluminescence tours from Santa Teresa: a boat tour from USD 80 with return transport, or sunset SUP for USD 125 per person. Book through the lodge.",
  heading: "Bioluminescence Tour from Santa Teresa",
  eyebrow: "From sunset to a glowing sea",
  intro: "Watch tiny marine organisms light up as the water moves. Choose an evening boat trip with transport from Santa Teresa, or paddle into the night on a sunset SUP tour. Funky Monkey Lodge helps you choose a date and arranges your booking with local providers.",
  // Use the full-resolution sunset SUP asset for the hero. The smaller glow
  // image is deliberately confined to a supporting image further down.
  hero: paddleImage,
  heroAlt: "Two people on stand-up paddleboards at sunset",
  heroPosition: "center 55%",
  summary: [["Boat experience", "5–6 hours including transport"], ["SUP experience", "About 3 hours"], ["Visibility", "Varies with moon, weather & sea"]],
  cta: "Book your bioluminescence tour",
  message: "Hi Funky Monkey! I'd like to see the bioluminescence. Which boat or SUP tours and dates would you recommend during my stay?",
  optionsHeading: "Boat or paddleboard?",
  optionsIntro: "Choose the boat for a relaxed evening with return transport included, or SUP if you'd like a more active experience on the water.",
  options: [
    {
      id: "boat", name: "Bioluminescence boat tour", price: 80, from: true, duration: "About 5–6 hours in total", departure: "3 pm pickup in Santa Teresa", transport: "Round-trip transportation from Santa Teresa included",
      text: "Sunset by the coast, followed by about 40 minutes experiencing the bioluminescence. Swim with a life jacket, move your hands through the water or watch from the boat.",
      includes: ["Guided bioluminescence experience", "Sunset time, fresh fruit and snacks", "Water, juices and soft drinks", "Life jackets"],
    },
    {
      id: "sup", name: "SUP & bioluminescence", price: 125, duration: "About 3 hours", transport: "Ask us for the meeting point and transport arrangements", payment: "Cash only",
      text: "Paddle at sunset and continue after dark, watching for light with each stroke. No previous SUP experience is needed; your guide provides basic instruction.",
      includes: ["SUP board, paddle and leash", "Professional guide and basic instruction", "Sunset and night paddling", "Water and a light snack"],
    },
  ],
  sections: [
    {
      id: "what-is-bioluminescence", title: "What makes the water glow?", image: glowImage, alt: "Blue bioluminescent glow in coastal water after dark", compactImage: true,
      text: "Bioluminescence is light produced by living organisms. In the ocean, tiny organisms can emit flashes of blue light when disturbed, so a hand, paddle or swimmer can leave a glowing trail. The light you see depends on the conditions that night.",
    },
    {
      id: "evening", title: "How the boat evening unfolds",
      steps: [
        ["Pickup at 3 pm", "Travel from Santa Teresa to the coast near Montezuma. Your booking includes the return journey."],
        ["Slow down at sunset", "Enjoy fruit and snacks by the Pacific coast: tortilla chips, pico de gallo and refried beans."],
        ["Experience the glow", "After dark, spend about 40 minutes watching the water or swimming with a life jacket. Timing depends on sea and environmental conditions."],
        ["Ride back to Santa Teresa", "Transport takes you back after the experience. Return time varies with conditions and your drop-off location."],
      ],
    },
    {
      id: "best-time", title: "When is bioluminescence easiest to see?",
      text: "Darker nights usually make the glow easier to see. Moonlight, weather and sea conditions affect its visibility and intensity, so a bright display cannot be guaranteed. We can recommend dates during your stay; the itinerary may change for conditions and safety.",
      action: { label: "Find a night during your stay", whatsapp: true },
    },
    {
      id: "island-alternative", title: "Want to add Tortuga Island?",
      text: "For snorkeling and beach time before the night experience, choose the Tortuga Island + bioluminescence combination, from USD 105 per person. See the island page for its separate itinerary and available dates.",
      action: { label: "See the Tortuga Island combination", slug: "tortuga-island-tour-santa-teresa", anchor: "afternoon" },
    },
  ],
  preparation: { title: "What to bring after sunset", items: ["Swimwear and a towel", "Dry clothes for the ride back", "A light layer for after sunset", "Cash — required for the SUP tour", "Waterproof bag or phone case"], note: "The boat tour includes round-trip transportation. For the SUP tour, contact us to confirm the meeting point and transport options." },
  faqs: [
    { question: "Can I book without staying at the lodge?", answer: "Yes. Both guests and visitors can arrange an experience through Funky Monkey Lodge." },
    { question: "Will the boat tour visit Tortuga Island?", answer: "The dedicated evening boat tour focuses on sunset and bioluminescence. To visit the island as well, choose the separate Tortuga Island + bioluminescence tour." },
  ],
  service: { name: "Bioluminescence tour booking through Funky Monkey Lodge", type: "Bioluminescence excursion booking" },
};

export const activities = [surf, yoga, tortuga, bioluminescence].map((activity) => ({
  ...activity,
  path: `/activities/${activity.slug}`,
  updatedAt: ACTIVITIES_UPDATED,
}));

export function getActivity(slug) {
  return activities.find((activity) => activity.slug === slug);
}

export function priceText(option) {
  if (option.price == null) return option.priceLabel;
  return `${option.from ? "From " : ""}USD ${option.price}`;
}

// Hub entries use the same facts and options as their detail page.
export function activityHubEntry(slug, optionId) {
  const activity = getActivity(slug);
  const option = activity.options.find((item) => item.id === optionId) || activity.options[0];
  const isCombination = optionId === "afternoon";
  let description = isCombination ? option.text : activity.intro;
  if (activity.slug === "bioluminescence-tour-santa-teresa") {
    const sup = activity.options.find((item) => item.id === "sup");
    description = `Watch the ocean glow after sunset. The boat tour includes round-trip transport from Santa Teresa; swim with a life jacket or watch from the boat. Prefer something more active? Choose the sunset SUP & bioluminescence tour for ${priceText(sup)} per person.`;
  }
  return {
    img: isCombination ? glowImage.src : activity.hero.src,
    alt: isCombination ? "Blue bioluminescent glow in coastal water after dark" : activity.heroAlt,
    text: isCombination ? "Tortuga Island + Bioluminescence Experience" : optionId === "full-day" ? "Full Day Tour to Tortuga Island" : activity.name,
    duration: option.duration,
    departure: option.departure,
    price: `${priceText(option)} per person`,
    description,
    href: `${activity.path}${isCombination ? "#afternoon" : ""}`,
  };
}
