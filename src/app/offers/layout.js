import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Special Offers & Hotel Deals | Funky Monkey Lodge",
  description:
    "Current deals and special offers at Funky Monkey Lodge in Santa Teresa, Costa Rica. Book direct for the best rate on your stay.",
  path: "/offers",
});

export default function OffersLayout({ children }) {
  return children;
}
