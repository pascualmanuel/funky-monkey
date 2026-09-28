import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us | Funky Monkey Lodge Santa Teresa",
  description:
    "Contact Funky Monkey Lodge in Santa Teresa, Costa Rica, by email, phone or WhatsApp. We'll help you plan your stay.",
  path: "/contact",
});

export default function ContactLayout({ children }) {
  return children;
}
