import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Manage Offers | Funky Monkey Lodge",
  description:
    "Admin page.",
  path: "/manage-offers",
  noindex: true,
});

export default function ManageOffersLayout({ children }) {
  return children;
}
