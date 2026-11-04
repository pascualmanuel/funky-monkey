import { SITE_URL } from "@/lib/seo";

// Name and address confirmed by the client. Phone and coordinates taken from
// the public Google Business Profile, so they match the Maps listing.
export const hotelSchema = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  // Same @id the activity landings use for the publisher, so every page
  // points to this one entity.
  "@id": `${SITE_URL}/#organization`,
  name: "Funky Monkey Lodge",
  description:
    "Family-owned boutique surf and yoga lodge in Santa Teresa, Costa Rica, steps from the beach and welcoming travelers since 2001.",
  url: `${SITE_URL}/`,
  telephone: "+50683922295",
  email: "office@funkymonkeylodge.com",
  logo: `${SITE_URL}/assets/funky-logo-og.webp`,
  image: [
    `${SITE_URL}/assets/home/home-hero.webp`,
    `${SITE_URL}/assets/home/the-hotel-1200w.webp`,
    `${SITE_URL}/assets/home/rooms-1200w.webp`,
    `${SITE_URL}/assets/home/retreats-1200w.webp`,
    `${SITE_URL}/assets/home/activities-1200w.webp`,
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Classy Palms Road 200",
    addressLocality: "Santa Teresa",
    addressRegion: "Puntarenas",
    postalCode: "60111",
    addressCountry: "CR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 9.6415464,
    longitude: -85.1633398,
  },
  hasMap: "https://maps.google.com/?cid=13176552732999946236",
  checkinTime: "14:00",
  checkoutTime: "11:00",
  amenityFeature: [
    "Swimming pool",
    "Yoga studio",
    "Complimentary breakfast",
    "Free Wi-Fi",
    "Co-working area",
    "Communal kitchen",
    "Free parking",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  sameAs: [
    "https://www.instagram.com/funkymonkeysurfyoga",
    "https://www.facebook.com/funkymonkeylodge",
  ],
};
