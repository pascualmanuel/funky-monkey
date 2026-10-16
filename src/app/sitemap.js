import { SITE_URL } from "@/lib/seo";
import { activities, ACTIVITIES_UPDATED } from "@/data/activities";

export const dynamic = "force-static";

export default function sitemap() {
  // Dates reflect content edits, not the time of each build. Existing dates
  // come from the latest committed page/layout changes.
  const routes = [
    ["", "2026-09-29"],
    ["/hotel", "2026-09-28"],
    ["/rooms", "2026-09-28"],
    ["/retreats", ACTIVITIES_UPDATED],
    ["/santa-teresa", ACTIVITIES_UPDATED],
    ["/activities", ACTIVITIES_UPDATED],
    ["/offers", "2026-09-28"],
    ["/faq", "2026-09-28"],
    ["/contact", "2026-09-28"],
    ["/general-policy", "2026-09-28"],
    ...activities.map(({ path, updatedAt }) => [path, updatedAt]),
  ];

  return routes.map(([path, lastModified]) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
}
