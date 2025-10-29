export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://funkymonkeylodge.com";

  const routes = [
    "",
    "/hotel",
    "/rooms",
    "/retreats",
    "/santa-teresa",
    "/activities",
    "/offers",
    "/location",
    "/faq",
    "/contact",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1.0 : 0.7,
  }));
}
