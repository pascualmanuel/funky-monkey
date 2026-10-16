import { notFound } from "next/navigation";
import ActivityLanding from "@/components/ActivityLanding";
import { activities, getActivity } from "@/data/activities";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return activities.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const activity = getActivity(slug);
  if (!activity) notFound();
  return pageMetadata({
    title: activity.title,
    description: activity.description,
    path: activity.path,
    image: { url: activity.hero.src, width: activity.hero.width, height: activity.hero.height, alt: activity.heroAlt, type: "image/webp" },
  });
}

export default async function ActivityPage({ params }) {
  const { slug } = await params;
  const activity = getActivity(slug);
  if (!activity) notFound();
  const url = `${SITE_URL}${activity.path}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Funky Monkey Lodge", url: SITE_URL, telephone: "+50683922295" },
      {
        "@type": "BreadcrumbList", "@id": `${url}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Activities", item: `${SITE_URL}/activities` },
          { "@type": "ListItem", position: 3, name: activity.name, item: url },
        ],
      },
      {
        "@type": "WebPage", "@id": `${url}#webpage`, url, name: activity.heading,
        description: activity.description, inLanguage: "en", dateModified: activity.updatedAt,
        publisher: { "@id": `${SITE_URL}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumbs` }, mainEntity: { "@id": `${url}#service` },
        primaryImageOfPage: { "@type": "ImageObject", url: new URL(activity.hero.src, SITE_URL).href, caption: activity.heroAlt },
      },
      {
        "@type": "Service", "@id": `${url}#service`, name: activity.service.name,
        serviceType: activity.service.type, url, description: activity.intro,
        areaServed: { "@type": "Place", name: "Santa Teresa, Puntarenas, Costa Rica" },
        // The lodge arranges bookings. An actual operator is named only where
        // the client identifies one; do not claim the lodge operates the tours.
        broker: { "@id": `${SITE_URL}/#organization` },
        ...(activity.service.provider ? { provider: { "@type": "Organization", name: activity.service.provider } } : {}),
      },
    ],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><ActivityLanding activity={activity} /></>;
}
