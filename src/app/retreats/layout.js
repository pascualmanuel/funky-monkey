import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title:
    "Retreats, Groups & Events in Santa Teresa, Costa Rica | Funky Monkey Lodge",
  description:
    "Host your retreat, family reunion, celebration or team trip in Santa Teresa. Rent rooms or the whole lodge for up to 30 guests, with yoga shala, pool and group meal plans.",
  path: "/retreats",
});

export default function RetreatsLayout({ children }) {
  return children;
}
