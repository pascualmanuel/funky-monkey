import "./globals.css";

export const metadata = {
  title: "Funkey Monkey - Adventure & Wellness Destination",
  description:
    "Your ultimate destination for adventure, relaxation, and unforgettable experiences. Luxury accommodations, exciting activities, and wellness retreats await you at Funkey Monkey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
