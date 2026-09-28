import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap() {
  const routes = [
    "",
    "/hotel",
    "/rooms",
    "/retreats",
    "/santa-teresa",
    "/activities",
    "/offers",
    "/faq",
    "/contact",
    "/general-policy",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }));
}
