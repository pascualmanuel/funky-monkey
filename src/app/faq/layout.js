import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ | Funky Monkey Lodge Santa Teresa",
  description:
    "Answers to common questions about Funky Monkey Lodge, our rooms, activities, retreats and traveling to Santa Teresa, Costa Rica.",
  path: "/faq",
});

export default function FaqLayout({ children }) {
  return children;
}
