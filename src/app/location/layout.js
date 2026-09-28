import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Location | Funky Monkey Lodge",
  description:
    "How to get to Funky Monkey Lodge in Santa Teresa, Costa Rica.",
  path: "/location",
  noindex: true,
});

export default function LocationLayout({ children }) {
  return children;
}
