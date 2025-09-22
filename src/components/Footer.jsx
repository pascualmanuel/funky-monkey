import Link from "next/link";
import FooterBg from "../assets/footer-bg.webp";
import Logo from "../assets/f-monkey-logo.svg";
import Button from "./Button";
import GoogleReviews from "../assets/google-review.svg";
import TripReviews from "../assets/trip-review.svg";
export default function Footer() {
  // background: rgba(255, 255, 255, 0.1);
  // backdrop-filter: blur(22px);
  // border-radius: 16px;
  return (
    <footer
      className="bg-gray-800 text-white"
      style={{
        backgroundImage: `url(${FooterBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="  py-12 px-4 sm:px-6 lg:px-8 my-[155px] mx-[70px]"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(22px)",
          borderRadius: "16px",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <img src={Logo.src} alt="Logo" className="w-[160px]" />
            </Link>

            <p className="text-grey3 body2 max-w-[430px] mt-4 mb-10">
              A vibrant boutique hotel in the heart of Santa Teresa, Costa Rica.
              Experience the perfect blend of surf, nature, and good vibes.
            </p>
          </div>

          <div>
            <Button width="325px" height="54px" link="/contact">
              Book your stay
            </Button>
            <div className="flex gap-[10px] mt-4">
              <img src={GoogleReviews.src} alt="Google Reviews" />
              <img src={TripReviews.src} alt="Trip Reviews" />
            </div>
          </div>

          {/* Quick Links */}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © 2024 Funkey Monkey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
