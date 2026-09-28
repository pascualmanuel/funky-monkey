import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "The Hotel | Family-Owned Boutique Lodge in Santa Teresa",
  description:
    "Family-owned boutique hotel in Playa Santa Teresa, Costa Rica, welcoming travelers since 2001. Laid-back, cozy and surrounded by nature, steps from the beach.",
  path: "/hotel",
});

export default function HotelLayout({ children }) {
  return children;
}
