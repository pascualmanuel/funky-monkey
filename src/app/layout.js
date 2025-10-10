import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
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
  metadataBase: new URL("https://funky-monkey.onrender.com/"),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Funky Monkey - Adventure & Wellness Destination",
    description:
      "Funky Monkey Lodge in Santa Teresa, Costa Rica, offers adventure, surf & yoga retreats, luxury accommodations, and a relaxing jungle-beach experience.",
    url: "https://funky-monkey.onrender.com/",
    siteName: "Funky Monkey Lodge",
    images: [
      {
        url: "/assets/funky-logo-og.png",
        width: 1200,
        height: 630,
        alt: "Funky Monkey Lodge",
        type: "image/png",
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
    images: ["/assets/funky-logo-og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <HeroImagePreloader />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
