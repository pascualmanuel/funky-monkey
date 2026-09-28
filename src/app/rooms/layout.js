import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Rooms & Suites | Funky Monkey Lodge Santa Teresa",
  description:
    "Rooms and suites in Santa Teresa, Costa Rica, with daily cleaning and access to our pool, yoga studio and restaurant. Find your room and book direct.",
  path: "/rooms",
});

export default function RoomsLayout({ children }) {
  return children;
}
