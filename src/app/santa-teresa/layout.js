import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Santa Teresa, Costa Rica | Surf, Beaches & Travel Guide",
  description:
    "Discover Santa Teresa, Costa Rica: world-class surf, jungle, sunsets and a laid-back beach town vibe. What to know before your trip.",
  path: "/santa-teresa",
});

export default function SantaTeresaLayout({ children }) {
  return children;
}
