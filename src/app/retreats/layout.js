import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Yoga & Wellness Retreats in Santa Teresa, Costa Rica",
  description:
    "Host your yoga, wellness or group retreat in Santa Teresa, Costa Rica. A jungle-beach venue with yoga studio, pool and rooms for your group.",
  path: "/retreats",
});

export default function RetreatsLayout({ children }) {
  return children;
}
