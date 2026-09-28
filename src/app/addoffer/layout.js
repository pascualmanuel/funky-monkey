import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Add Offer | Funky Monkey Lodge",
  description:
    "Admin page.",
  path: "/addoffer",
  noindex: true,
});

export default function AddofferLayout({ children }) {
  return children;
}
