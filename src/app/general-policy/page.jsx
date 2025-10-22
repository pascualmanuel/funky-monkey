import Layout from "@/components/Layout";
import FooterBg from "@/assets/footer-bg.webp";
import Link from "next/link";
import Arrow from "@/assets/arrow.svg";
import FbIcon from "@/assets/contact/fb-icon.svg";
import InstagramIcon from "@/assets/contact/instagram-icon.png";

export default function GeneralPolicy() {
  return (
    <Layout title="General Policy" showFooter={false}>
      {/* Hero Section */}
      <div
        className="min-h-[680px] md:min-h-[600px] md:h-[100dvh] relative max-h-[850px] flex flex-col justify-center items-center"
        style={{
          background: `linear-gradient(1.26deg, #000000 10.01%, rgba(0, 0, 0, 0) 80.21%), url("${FooterBg.src}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="myH1 text-center text-white">General Policy</h2>
        </div>
        <p className="body1 text-center text-white mx-5 md:mx-0 max-w-[450px] absolute bottom-16">
          Important information about our policies, cancellation terms, and general guidelines for your stay.
        </p>
      </div>

      {/* Policy Content */}
      <div className="bg-[#F6F8F6] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Cancellation Policy Section */}
          <div className="mb-16">
            <h3 className="myH2 text-[#211F20] mb-8">Cancellation Policy</h3>
            <div className="bg-white rounded-[16px] p-8 shadow-[0px_9px_15px_2px_rgba(0,0,0,0.05)]">
              <ul className="space-y-4">
                <li className="body1 text-darkGrey">
                  <strong className="text-[#211F20]">No-shows:</strong> Will be charged the full booking amount including days not used resulting from late arrival or premature departure.
                </li>
                <li className="body1 text-darkGrey">
                  <strong className="text-[#211F20]">Payment:</strong> We charge the balance of your reservation upon arrival, unless you made a full deposit.
                </li>
                <li className="body1 text-darkGrey">
                  <strong className="text-[#211F20]">Deposit:</strong> A 30% non-refundable reservation deposit will be charged on the day of booking.
                </li>
                <li className="body1 text-darkGrey">
                  <strong className="text-[#211F20]">Refunds:</strong> For any exceptional requests for refunds a 10% administration fee will be applied.
                </li>
                <li className="body1 text-darkGrey">
                  <strong className="text-[#211F20]">Group Reservations:</strong> All group reservations (10 people and more) are required to pay a 50% deposit at the time of booking (no refunds accepted).
                </li>
              </ul>
            </div>
          </div>

          {/* General Policy Section */}
          <div className="mb-16">
            <h3 className="myH2 text-[#211F20] mb-8">General Policy</h3>
            
            {/* Check-in/Check-out */}
            <div className="bg-white rounded-[16px] p-8 shadow-[0px_9px_15px_2px_rgba(0,0,0,0.05)] mb-6">
              <h4 className="subH2 text-[#211F20] mb-4">Check-in & Check-out</h4>
              <ul className="space-y-3">
                <li className="body1 text-darkGrey">
                  <strong className="text-[#211F20]">Check-in:</strong> from 14:00 - 22:00 / earlier or later check in possible upon request
                </li>
                <li className="body1 text-darkGrey">
                  <strong className="text-[#211F20]">Check-out:</strong> before 11:00 / late check out extra charge from $30 / free luggage storage is available
                </li>
              </ul>
            </div>

            {/* Payment Policy */}
            <div className="bg-white rounded-[16px] p-8 shadow-[0px_9px_15px_2px_rgba(0,0,0,0.05)] mb-6">
              <h4 className="subH2 text-[#211F20] mb-4">Payment Policy</h4>
              <ul className="space-y-3">
                <li className="body1 text-darkGrey">
                  <strong className="text-[#211F20]">Prepayment:</strong> The Deposit of the reservation will be charged on the day of booking.
                </li>
                <li className="body1 text-darkGrey">
                  Please note, if cancelled, modified or in case of no-show, the Deposit of the reservation is not refundable.
                </li>
                <li className="body1 text-darkGrey">
                  <strong className="text-[#211F20]">Payment:</strong> The balance of the reservation will be charged upon arrival preferably cash in USD or local currency.
                </li>
                <li className="body1 text-darkGrey">
                  Prices of accommodation do not include any meal or extra activities except complimentary breakfast.
                </li>
              </ul>
            </div>

            {/* Children and Extra Beds */}
            <div className="bg-white rounded-[16px] p-8 shadow-[0px_9px_15px_2px_rgba(0,0,0,0.05)] mb-6">
              <h4 className="subH2 text-[#211F20] mb-4">Children and Extra Beds</h4>
              <p className="body1 text-darkGrey">
                <strong className="text-[#211F20]">Free!</strong> One child under 2 years stays free of charge in a child's cot/crib, upon request.
              </p>
            </div>

            {/* Damage Policy */}
            <div className="bg-white rounded-[16px] p-8 shadow-[0px_9px_15px_2px_rgba(0,0,0,0.05)] mb-6">
              <h4 className="subH2 text-[#211F20] mb-4">Damage to Hotel Property</h4>
              <p className="body1 text-darkGrey">
                The Hotel reserves the right to charge guests the cost of rectifying damage or soiling, caused by accidental, deliberate, negligent or reckless act of the guest to the Hotel's property or structure.
              </p>
            </div>

            {/* Safety and Security */}
            <div className="bg-white rounded-[16px] p-8 shadow-[0px_9px_15px_2px_rgba(0,0,0,0.05)]">
              <h4 className="subH2 text-[#211F20] mb-4">Safety and Security</h4>
              <p className="body1 text-darkGrey">
                For the convenience of the Guest safety safe is provided in the room to store any valuables and each room has a lock.
              </p>
              <p className="body1 text-darkGrey mt-4">
                The Management will not in any way whatsoever be responsible for any loss / or damage to the Guest's belongings or any other property from either the hotel room or the locker or any other part of the hotel for any cause whatsoever including theft of pilferage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer
        className="bg-gray-800 text-white"
        style={{
          backgroundImage: `url(${FooterBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 my-4 mx-4 sm:mx-8 lg:mx-[70px]"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(22px)",
            borderRadius: "16px",
          }}
        >
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
          <div className="mt-8 pt-8 border-t border-darkGrey  flex-col sm:flex-row gap-2 sm:gap-4 justify-start hidden md:flex">
            <p className="text-center sm:text-left text-grey3 body3">
              © {new Date().getFullYear()} Funky Monkey.
            </p>
            <Link
              href="https://labba.studio"
              target="_blank"
              className="text-center sm:text-left text-grey3 body3"
            >
              Made by Labba Studio
            </Link>
            <div className="flex ml-auto gap-6">
              <Link
                href="https://www.instagram.com/funkymonkeysurfyoga"
                target="_blank"
                rel="noopener"
              >
                <img src={InstagramIcon.src} alt="Instagram" />
              </Link>
              <Link
                href="https://www.facebook.com/funkymonkeylodge/"
                target="_blank"
                rel="noopener"
              >
                <img src={FbIcon.src} alt="Facebook" />
              </Link>
            </div>
          </div>
          <div>
            <div className="mt-8 pt-8 border-t border-darkGrey  flex-col sm:flex-row gap-2 sm:gap-4 justify-start flex md:hidden">
              <div className="flex flex-col w-full justify-center items-center gap-2">
                <div className="flex gap-6 mb-4">
                  <Link
                    href="https://www.instagram.com/funkymonkeysurfyoga"
                    target="_blank"
                    rel="noopener"
                  >
                    <img src={InstagramIcon.src} alt="Instagram" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/funkymonkeylodge/"
                    target="_blank"
                    rel="noopener"
                  >
                    <img src={FbIcon.src} alt="Facebook" />
                  </Link>
                </div>
                <p className="text-center sm:text-left text-grey3 body3">
                  © {new Date().getFullYear()} Funky Monkey.
                </p>
                <Link
                  href="https://labba.studio"
                  target="_blank"
                  className="text-center sm:text-left text-grey3 body3"
                >
                  Made by Labba Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
