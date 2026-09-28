import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "General Policy & Cancellations | Funky Monkey Lodge",
  description:
    "Cancellation terms, payment policy and general guidelines for your stay at Funky Monkey Lodge in Santa Teresa, Costa Rica.",
  path: "/general-policy",
});

export default function GeneralPolicyLayout({ children }) {
  return children;
}
