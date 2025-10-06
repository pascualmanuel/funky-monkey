import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import HeroImagePreloader from "@/components/HeroImagePreloader";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata = {
  title: "Funkey Monkey - Adventure & Wellness Destination",
  description:
    "Your ultimate destination for adventure, relaxation, and unforgettable experiences. Luxury accommodations, exciting activities, and wellness retreats await you at Funkey Monkey.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Funkey Monkey - Adventure & Wellness Destination",
    description:
      "Your ultimate destination for adventure, relaxation, and unforgettable experiences. Luxury accommodations, exciting activities, and wellness retreats await you at Funkey Monkey.",
    images: [
      {
        url: "/assets/funkey-logo.png",
        width: 1200,
        height: 630,
        alt: "Funkey Monkey Lodge",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funkey Monkey - Adventure & Wellness Destination",
    description:
      "Your ultimate destination for adventure, relaxation, and unforgettable experiences. Luxury accommodations, exciting activities, and wellness retreats await you at Funkey Monkey.",
    images: ["/assets/funkey-logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <HeroImagePreloader />
        {children}
      </body>
    </html>
  );
}
