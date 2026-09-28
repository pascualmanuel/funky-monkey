import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Surf, Yoga & Activities in Santa Teresa | Funky Monkey Lodge",
  description:
    "Surf lessons, yoga, tours and local adventures in Santa Teresa, Costa Rica. Plan your activities during your stay at Funky Monkey Lodge.",
  path: "/activities",
});

export default function ActivitiesLayout({ children }) {
  return children;
}
