"use client";
import Layout from "@/components/Layout";
import FooterBg from "@/assets/footer-bg.webp";
import Link from "next/link";
import Arrow from "@/assets/arrow.svg";
import WpIcon from "@/assets/contact/wp-icon.svg";
import FbIcon from "@/assets/contact/fb-icon.svg";
import InstagramIcon from "@/assets/contact/instagram-icon.png";
import MailIcon from "@/assets/contact/mail-icon.svg";
import PhoneIcon from "@/assets/contact/phone-icon.svg";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    participants: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout title="Contact Us" showFooter={false}>
      <footer
        className="bg-gray-800 text-white"
        style={{
          backgroundImage: `url(${FooterBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 mt-[155px] mx-4 sm:mx-8 lg:mx-[70px]"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(22px)",
            borderRadius: "16px",
          }}
        >
          <div className="flex flex-col md:flex-row items-start md:justify-between md:gap-8 ">
            <div className="col-span-1 md:col-span-2 lg:w-1/2">
              <p className="myH2">Get in touch</p>

              <p className="text-grey3 body1  max-w-[430px] mt-4 md:mb-10 mb-4">
                Whether you have questions about our accommodations, want to
                book an experience, or need help planning your trip to Santa
                Teresa, our friendly team is here to assist you.
              </p>
              <div>
                <div>
                  <p className="mb-2 text-grey3 text-base font-medium">Email</p>
                  <Link
                    href="mailto:office@funkymonkeylodge.com"
                    className="w-full ssm:w-fit justify-center text-white text-base font-bold rounded-full flex items-center gap-2 px-5 py-2"
                    style={{
                      background: "rgba(0, 0, 0, 0.25)",
                      border: "1px solid rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <img src={MailIcon.src} alt="Mail" />{" "}
                    office@funkymonkeylodge.com
                  </Link>
                </div>
                <div className="mt-6 flex gap-2 lm:flex-row flex-col">
                  <div>
                    <p className="mb-2 text-grey3 text-base font-medium">
                      Phone
                    </p>
                    <Link
                      href="tel:+50626400272"
                      className=" w-full justify-center ssm:w-[200px] lm:w-fit text-white text-base font-bold rounded-full flex items-center gap-2 px-5 py-2"
                      style={{
                        background: "rgba(0, 0, 0, 0.25)",
                        border: "1px solid rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <img src={PhoneIcon.src} alt="Phone" /> +506 2640 0272
                    </Link>
                  </div>
                  <div className="mt-1 lm:mt-0 ">
                    <p className="mb-2 text-grey3 text-base font-medium lm:block hidden ">
                      &nbsp;
                    </p>
                    <Link
                      href="https://wa.me/50683922295"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full justify-center ssm:w-[200px] lm:w-fit text-white text-base font-bold rounded-full flex items-center gap-2 px-5 py-2"
                      style={{
                        background:
                          "linear-gradient(139.26deg, #25d366 6.28%, #136d35 223.69%)",
                        border: "1px solid rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <img src={WpIcon.src} alt="WhatsApp" /> WhatsApp us
                    </Link>
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <div className="w-full ssm:w-fit justify-center">
                    <p className="mb-2 text-grey3 text-base font-medium">
                      Follow us
                    </p>
                    <Link
                      href="https://www.instagram.com/funkymonkeysurfyoga"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full ssm:w-fit justify-center text-white text-base font-bold rounded-full flex items-center gap-2 px-5 py-2"
                      style={{
                        background: "rgba(0, 0, 0, 0.25)",
                        border: "1px solid rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <img src={InstagramIcon.src} alt="Instagram" /> Instagram
                    </Link>
                  </div>
                  <div className="w-full ssm:w-fit justify-center">
                    <p className="mb-2 text-grey3 text-base font-medium">
                      &nbsp;
                    </p>
                    <Link
                      href="https://www.facebook.com/funkymonkeylodge/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full ssm:w-fit justify-center text-white text-base font-bold rounded-full flex items-center gap-2 px-5 py-2"
                      style={{
                        background: "rgba(0, 0, 0, 0.25)",
                        border: "1px solid rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <img src={FbIcon.src} alt="Facebook" /> Facebook
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col items-center md:items-end w-full">
              <Button
                classNames="w-[100%] md:w-[325px]"
                height="54px"
                link="/contact"
              >
                Book your stay
              </Button>
              <div className="flex gap-[10px] mt-4">
                <img src={GoogleReviews.src} alt="Google Reviews" />
                <img src={TripReviews.src} alt="Trip Reviews" />
              </div>
            </div> */}
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-1/2 mt-8 lg:mt-0 "
            >
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white text-base font-bold mb-2"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name..."
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#FFFFFF1A]  text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:text-[#176221] focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white text-base font-bold mb-2"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email..."
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#FFFFFF1A]  text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:text-[#176221] focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              {/* Kind of retreat */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white text-base font-bold mb-2 mt-4"
                >
                  Message:*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-[#FFFFFF1A]  text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:text-[#176221] focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              {/* Amount of participants */}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-300 transform mt-6 ${
                  isSuccess
                    ? "bg-green scale-101"
                    : isSubmitting
                    ? "bg-green opacity-75 cursor-not-allowed"
                    : "bg-green cursor-pointer hover:bg-[#176221] hover:scale-101 active:scale-99"
                }`}
              >
                {isSuccess ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Message Sent!
                  </span>
                ) : isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </div>
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
            <Link
              href="/"
              className="text-center sm:text-left text-grey3 body3"
            >
              Privacidad
            </Link>
            <Link
              href="/"
              className="text-center sm:text-left text-grey3 body3"
            >
              Términos y condiciones
            </Link>
            <div className="flex ml-auto gap-6">
              <Link
                href="https://www.instagram.com/funkymonkeysurfyoga"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={InstagramIcon.src} alt="Instagram" />
              </Link>
              <Link
                href="https://www.facebook.com/funkymonkeylodge/"
                target="_blank"
                rel="noopener noreferrer"
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
                    rel="noopener noreferrer"
                  >
                    <img src={InstagramIcon.src} alt="Instagram" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/funkymonkeylodge/"
                    target="_blank"
                    rel="noopener noreferrer"
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
                <div className="flex flex-row gap-2">
                  <Link
                    href="/"
                    className="text-center sm:text-left text-grey3 body3"
                  >
                    Privacidad
                  </Link>
                  <Link
                    href="/"
                    className="text-center sm:text-left text-grey3 body3"
                  >
                    Términos y condiciones
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
