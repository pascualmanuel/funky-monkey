"use client";

import Head from "next/head";

export default function HeadPreloader() {
  return (
    <Head>
      {/* Preload critical hero images */}
      <link
        rel="preload"
        as="image"
        href="/assets/santa-teresa/santa-teresa.webp"
        type="image/webp"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/the-hotel/the-hotel.webp"
        type="image/webp"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/retreats/retreats.webp"
        type="image/webp"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/activities/activities.webp"
        type="image/webp"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/offers/offers.webp"
        type="image/webp"
      />
      <link
        rel="preload"
        as="image"
        href="/assets/home/rooms.webp"
        type="image/webp"
      />
    </Head>
  );
}
