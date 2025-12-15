import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import HeroImagePreloader from "@/components/HeroImagePreloader";
import WhatsAppButton from "@/components/WhatsAppButton";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata = {
  title: "Funky Monkey - Adventure & Wellness Destination",
  description:
    "Funky Monkey Lodge in Santa Teresa, Costa Rica, offers adventure, surf & yoga retreats, luxury accommodations, and a relaxing jungle-beach experience.",
  metadataBase: new URL("https://funkymonkeylodge.com/"),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Funky Monkey - Adventure & Wellness Destination",
    description:
      "Funky Monkey Lodge in Santa Teresa, Costa Rica, offers adventure, surf & yoga retreats, luxury accommodations, and a relaxing jungle-beach experience.",
    url: "https://funkymonkeylodge.com/",
    siteName: "Funky Monkey Lodge",
    images: [
      {
        url: "/assets/funky-logo-og.webp",
        width: 1200,
        height: 630,
        alt: "Funky Monkey Lodge",
        type: "image/webp",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funky Monkey - Adventure & Wellness Destination",
    description:
      "Funky Monkey Lodge in Santa Teresa, Costa Rica, offers adventure, surf & yoga retreats, luxury accommodations, and a relaxing jungle-beach experience.",
    images: ["/assets/funky-logo-og.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        {/* Google Analytics - Script de gtag.js
            Se carga después de que la página sea interactiva (afterInteractive)
            para no bloquear el renderizado inicial y mejorar el rendimiento */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-189470251103793"
          strategy="afterInteractive"
        />

        {/* Google Analytics - Inicialización
            Script inline que configura gtag con el ID de medición.
            Se ejecuta después de que el script de gtag.js se haya cargado.
            Este script se ejecuta en todas las páginas automáticamente gracias
            a que está en el RootLayout, que envuelve toda la aplicación. */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-189470251103793');
          `}
        </Script>

        <HeroImagePreloader />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
