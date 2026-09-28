import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import HeroImagePreloader from "@/components/HeroImagePreloader";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_URL, pageMetadata } from "@/lib/seo";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    title: "Funky Monkey Lodge | Boutique Hotel in Santa Teresa, Costa Rica",
    description:
      "Boutique hotel in Santa Teresa, Costa Rica, steps from the beach. Surf, yoga, pool and jungle vibes at Funky Monkey Lodge since 2001. Book direct.",
    path: "/",
  }),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  other: {
    "preload-css": "true",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-189470251103793"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-189470251103793');
          `}
        </Script> */}

        {/* Meta Pixel - Loaded lazily to improve initial page performance */}
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '189470251103793');
    fbq('track', 'PageView');
  `}
        </Script>

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=189470251103793&ev=PageView&noscript=1"
          />
        </noscript>

        <HeroImagePreloader />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
