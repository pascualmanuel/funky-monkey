import Link from "next/link";
import FooterBg from "../assets/footer-bg.webp";
import Logo from "../assets/f-monkey-logo.svg";
import Button from "./Button";
import GoogleReviews from "../assets/google-review.svg";
import TripReviews from "../assets/trip-review.svg";
import Arrow from "../assets/arrow.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";

export default function Footer() {
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
        className="py-12 px-4 sm:px-6 lg:px-8 my-[155px] mx-4 sm:mx-8 lg:mx-[70px]"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(22px)",
          borderRadius: "16px",
        }}
      >
        <div className="flex flex-col md:flex-row items-start md:justify-between md:gap-8 md:mb-0 mb-10">
          <div className="col-span-1 md:col-span-2 w-full">
            <Link href="/">
              <img src={Logo.src} alt="Logo" className="w-[160px]" />
            </Link>

            <p className="text-grey3 body2  max-w-[430px] mt-4 md:mb-10 mb-4">
              A vibrant boutique hotel in the heart of Santa Teresa, Costa Rica.
              Experience the perfect blend of surf, nature, and good vibes.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end w-full">
            <Button
              classNames="w-[100%] md:w-[325px]"
              height="54px"
              link="https://beds24.com/booking2.php?propid=63844"
              target="_blank"
              rel="noopener"
            >
              Book your stay
            </Button>
            <div className="flex gap-[10px] mt-4">
              <Link
                href="https://www.google.com/maps/place/Funky+Monkey+Surf+%26+Yoga+Lodge/@9.6418962,-85.164389,19z/data=!4m11!3m10!1s0x8f9f6ef470246bab:0xb6dc84e5f6aa0ffc!5m2!4m1!1i2!8m2!3d9.6418183!4d-85.163506!9m1!1b1!16s%2Fg%2F1hc764zf7?hl=es-419&entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener"
              >
                {" "}
                <img src={GoogleReviews.src} alt="Google Reviews" />
              </Link>
              <Link
                href="https://www.tripadvisor.com/Hotel_Review-g635538-d648431-Reviews-Funky_Monkey_Lodge-Santa_Teresa_Province_of_Puntarenas.html"
                target="_blank"
                rel="noopener"
              >
                <img src={TripReviews.src} alt="Trip Reviews" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-4 lg:justify-between lg:flex lg:flex-row">
            <Link
              href="/santa-teresa"
              className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-bold group relative overflow-hidden h-8"
            >
              <div className="flex items-center transition-transform duration-300 group-hover:-translate-y-8">
                Santa Teresa
                <img
                  src={Arrow.src}
                  alt="Arrow"
                  className="inline-block ml-3 "
                />
              </div>
              <div className="flex items-center transition-transform duration-300 group-hover:translate-y-0 translate-y-8 absolute top-0 left-0">
                Santa Teresa
                <img
                  src={Arrow.src}
                  alt="Arrow"
                  className="inline-block ml-3"
                />
              </div>
            </Link>
            <Link
              href="/hotel"
              className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-bold group relative overflow-hidden h-8"
            >
              <div className="flex items-center transition-transform duration-300 group-hover:-translate-y-8">
                The hotel
                <img
                  src={Arrow.src}
                  alt="Arrow"
                  className="inline-block ml-3"
                />
              </div>
              <div className="flex items-center transition-transform duration-300 group-hover:translate-y-0 translate-y-8 absolute top-0 left-0">
                The hotel
                <img
                  src={Arrow.src}
                  alt="Arrow"
                  className="inline-block ml-3"
                />
              </div>
            </Link>
            <Link
              href="/rooms"
              className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-bold group relative overflow-hidden h-8"
            >
              <div className="flex items-center transition-transform duration-300 group-hover:-translate-y-8">
                Rooms
                <img
                  src={Arrow.src}
                  alt="Arrow"
                  className="inline-block ml-3"
                />
              </div>
              <div className="flex items-center transition-transform duration-300 group-hover:translate-y-0 translate-y-8 absolute top-0 left-0">
                Rooms
                <img
                  src={Arrow.src}
                  alt="Arrow"
                  className="inline-block ml-3"
                />
              </div>
            </Link>
            <Link
              href="/activities"
              className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-bold group relative overflow-hidden h-8"
            >
              <div className="flex items-center transition-transform duration-300 group-hover:-translate-y-8">
                Activities
                <img
                  src={Arrow.src}
                  alt="Arrow"
                  className="inline-block ml-3"
                />
              </div>
              <div className="flex items-center transition-transform duration-300 group-hover:translate-y-0 translate-y-8 absolute top-0 left-0">
                Activities
                <img
                  src={Arrow.src}
                  alt="Arrow"
                  className="inline-block ml-3"
                />
              </div>
            </Link>
            <Link
              href="/retreats"
              className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-bold group relative overflow-hidden h-8"
            >
              <div className="flex items-center transition-transform duration-300 group-hover:-translate-y-8">
                Retreats
                <img
                  src={Arrow.src}
                  alt="Arrow"
                  className="inline-block ml-3"
                />
              </div>
              <div className="flex items-center transition-transform duration-300 group-hover:translate-y-0 translate-y-8 absolute top-0 left-0">
                Retreats
                <img
                  src={Arrow.src}
                  alt="Arrow"
                  className="inline-block ml-3"
                />
              </div>
            </Link>
            <Link
              href="/offers"
              className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-bold group relative overflow-hidden h-8"
            >
              <div className="flex items-center transition-transform duration-300 group-hover:-translate-y-8">
                Offers
                <img
                  src={Arrow.src}
                  alt="Arrow"
                  className="inline-block ml-3"
                />
              </div>
              <div className="flex items-center transition-transform duration-300 group-hover:translate-y-0 translate-y-8 absolute top-0 left-0">
                Offers
                <img
                  src={Arrow.src}
                  alt="Arrow"
                  className="inline-block ml-3"
                />
              </div>
            </Link>
            <Link
              href="/contact"
              className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-bold group relative overflow-hidden h-8"
            >
              <div className="flex items-center transition-transform duration-300 group-hover:-translate-y-8">
                Contact
                <img
                  src={Arrow.src}
                  alt="Arrow"
                  className="inline-block ml-3"
                />
              </div>
              <div className="flex items-center transition-transform duration-300 group-hover:translate-y-0 translate-y-8 absolute top-0 left-0">
                Contact
                <img
                  src={Arrow.src}
                  alt="Arrow"
                  className="inline-block ml-3"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-darkGrey  flex-col sm:flex-row gap-2 sm:gap-4 justify-start hidden md:flex">
          <p className="text-center sm:text-left text-grey3 body3">
            © {new Date().getFullYear()} Funky Monkey.
          </p>
          <Link
            href="/general-policy"
            className="text-center sm:text-left text-grey3 body3"
          >
            General policy
          </Link>
          <Link
            href="https://labba.studio"
            target="_blank"
            className="text-center sm:text-left text-grey3 body3"
          >
            Made by Labba Studio
          </Link>
          {/* <Link href="/" className="text-center sm:text-left text-grey3 body3">
            Términos y condiciones
          </Link> */}
          <div className="flex ml-auto gap-6">
            <Link
              href="https://www.instagram.com/funkymonkeysurfyoga"
              target="_blank"
              rel="noopener"
            >
              <img src={Instagram.src} alt="Instagram" />
            </Link>
            <Link
              href="https://www.facebook.com/funkymonkeylodge"
              target="_blank"
              rel="noopener"
            >
              <img src={Facebook.src} alt="Facebook" />
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-darkGrey  flex-col sm:flex-row gap-2 sm:gap-4 justify-start flex md:hidden">
          <div className="flex flex-col w-full justify-center items-center gap-2">
            <div className="flex gap-6 mb-4">
              <Link
                target="_blank"
                href="https://www.instagram.com/funkymonkeysurfyoga"
              >
                <img src={Instagram.src} alt="Instagram" />
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/funkymonkeylodge"
              >
                <img src={Facebook.src} alt="Facebook" />
              </Link>
            </div>
            <p className="text-center sm:text-left text-grey3 body3">
              © {new Date().getFullYear()} Funky Monkey.
            </p>
            <Link
              href="/general-policy"
              className="text-center sm:text-left text-grey3 body3"
            >
              General policy
            </Link>
            <div className="flex flex-row gap-2">
              <Link
                href="https://labba.studio"
                target="_blank"
                className="text-center sm:text-left text-grey3 body3"
              >
                Made by Labba Studio
              </Link>

              {/* <Link
                href="/"
                className="text-center sm:text-left text-grey3 body3"
              >
                Términos y condiciones
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
