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
