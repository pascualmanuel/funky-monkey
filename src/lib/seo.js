export const SITE_URL = "https://www.funkymonkeylodge.com";
const SITE_NAME = "Funky Monkey Lodge";
const OG_IMAGE = {
  url: "/assets/funky-logo-og.webp",
  width: 1200,
  height: 630,
  alt: "Funky Monkey Lodge",
  type: "image/webp",
};

// Builds the full metadata for a page. Next.js replaces nested objects like
// openGraph instead of merging them, so every page needs the complete set.
export function pageMetadata({ title, description, path, noindex = false }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noindex && { robots: { index: false, follow: true } }),
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      images: [OG_IMAGE],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
