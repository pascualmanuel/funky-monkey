import Link from "next/link";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import JungleImage from "@/assets/santa-teresa/jungle.webp";

export const metadata = {
  title: "Page not found | Funky Monkey Lodge",
  description:
    "This page doesn't exist anymore. Find your way back to Funky Monkey Lodge in Santa Teresa, Costa Rica.",
};

const links = [
  { href: "/rooms", label: "Rooms" },
  { href: "/activities", label: "Activities" },
  { href: "/retreats", label: "Retreats" },
  { href: "/santa-teresa", label: "Santa Teresa" },
  { href: "/offers", label: "Offers" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <Layout title="Page not found">
      <div
        className="min-h-[680px] h-[100dvh] max-h-[900px] relative flex flex-col justify-end"
        style={{
          background: `linear-gradient(1.26deg, rgba(0, 0, 0, 0.9) 10.01%, rgba(0, 0, 0, 0.1) 80.21%), url("${JungleImage.src}")`,
          // Keep the shoreline in frame: the copy sends people "back to the beach"
          backgroundPosition: "center 85%",
          backgroundSize: "cover",
        }}
      >
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto p-6 md:p-22 lg:px-28 pb-[110px] md:pb-[80px] text-white">
          <p className="text-sm md:text-base font-semibold uppercase tracking-[0.12em] mb-3 lg:mb-4">
            Error 404
          </p>
          <h1 className="myH1 mb-6 lg:mb-8 md:max-w-[720px]">
            This monkey swung a little too far
          </h1>
          <p className="body1 max-w-[520px]">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
            Let&apos;s get you back to the beach.
          </p>

          <div className="flex flex-row mt-8 gap-4 max-w-[380px]">
            {/* Button renders a plain <button> when link is "/", so the home link is a Link with the primary styles */}
            <Link
              href="/"
              className="w-[100%] md:w-[325px] h-[54px] text-base font-bold inline-flex items-center justify-center rounded-[8px] bg-green text-white hover:bg-[#176221] transition-all duration-200"
            >
              Back to home
            </Link>
            <Button
              classNames="w-[100%] md:w-[325px]"
              height="54px"
              link="/rooms"
              variant="ghost"
            >
              View rooms
            </Button>
          </div>

          <nav aria-label="Popular pages" className="mt-10 md:mt-14">
            <p className="text-sm text-white/70 mb-3">Or explore:</p>
            <ul className="flex flex-wrap gap-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-[5px] px-4 py-2 text-sm font-semibold hover:border-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </Layout>
  );
}
