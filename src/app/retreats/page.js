"use client";
import Layout from "@/components/Layout";
import RetreatsImage from "@/assets/retreats/retreats.webp";
import Retreats4 from "@/assets/retreats/retreats-4.webp";
import Retreats5 from "@/assets/retreats/retreats-5.webp";
import Retreats6 from "@/assets/retreats/retreats-6.webp";
import Retreats1 from "@/assets/retreats/retreats-1.webp";
import Retreats2 from "@/assets/retreats/retreats-2.webp";
import Retreats3 from "@/assets/retreats/retreats-3.webp";
import FollowupIcon from "@/assets/retreats/followup-icon.svg";
import BeachIcon from "@/assets/retreats/beach-icon.svg";
import BedIcon from "@/assets/retreats/bed-icon.svg";
import CarIcon from "@/assets/retreats/car-icon.svg";
import FoodIcon from "@/assets/retreats/food-icon.svg";
import WhatsApp from "@/assets/santa-teresa/whatsapp-icon.svg";
import { useState } from "react";
import Faqs from "@/components/Faqs";
export default function Retreats() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    kindOfRetreat: "",
    participants: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          kindOfRetreat: "",
          participants: "",
        });
      }, 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout title="Wellness Retreats">
      <div
        className="min-h-[680px] md:min-h-[600px] md:h-[100dvh] relative max-h-[850px]  flex flex-col justify-center items-center"
        style={{
          background: `linear-gradient(359.9deg, rgba(0, 0, 0, 0.6) 2.16%, rgba(0, 0, 0, 0) 61.44%),  url("${RetreatsImage.src}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="myH1 text-center text-white "> Retreats</h2>
        </div>
        <p className="body1 text-center text-white mx-5 md:mx-0 max-w-[450px] absolute bottom-16">
          Rejuvenate your mind, body, and soul with our carefully designed
          wellness retreats and programs.
        </p>
      </div>

      <div className=" mx-auto md:mt-[130px] md:mb-[130px] mt-[50px] mb-[50px] text-center flex items-center flex-col gap-10 px-4">
        <h3 className="myH2 max-w-[600px]">
          Host your retreat or group getaway in &nbsp;
          <span className="text-[#5AB012]">paradise </span>
        </h3>
        <p className="body1 max-w-[560px] text-darkGrey">
          Looking for the perfect venue to host your next retreat? Our beautiful
          lodge offers an ideal space for connecting with nature, soaking up
          warm, sunny weather, and enjoying the stunning, endless white sand
          beach of Santa Teresa, home to world-class surf.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-[70px]  mx-auto">
        <div className="bg-white rounded-[16px] shadow-lg overflow-hidden h-[400px] md:h-[450px] lg:h-[500px]">
          <div className="h-[60%] relative">
            <img
              src={Retreats1.src}
              alt="Surf"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[40%] p-6 flex flex-col justify-center">
            <h4 className="subH1 mb-3">Yoga & meditation</h4>
            <p className="body1 text-darkGrey">
              Breathe, stretch, and reset in a space made for slowing down and
              tuning in.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[16px] shadow-lg overflow-hidden h-[400px] md:h-[450px] lg:h-[500px]">
          <div className="h-[60%] relative">
            <img
              src={Retreats2.src}
              alt="Jungle"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[40%] p-6 flex flex-col justify-center">
            <h4 className="subH1 mb-3">Surf</h4>
            <p className="body1 text-darkGrey">
              Learn, improve, and have fun with warm water and ideal conditions
              year-round.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[16px] shadow-lg overflow-hidden h-[400px] md:h-[450px] lg:h-[500px]">
          <div className="h-[60%] relative">
            <img
              src={Retreats3.src}
              alt="Laid"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[40%] p-6 flex flex-col justify-center">
            <h4 className="subH1 mb-3">Aerial & movements</h4>
            <p className="body1 text-darkGrey">
              Fly, dance & flow with space to explore your acrobatic side above
              the jungle.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[16px] shadow-lg overflow-hidden h-[400px] md:h-[450px] lg:h-[500px]">
          <div className="h-[60%] relative">
            <img
              src={Retreats4.src}
              alt="Magic"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[40%] p-6 flex flex-col justify-center">
            <h4 className="subH1 mb-3">Holistic & healing </h4>
            <p className="body1 text-darkGrey">
              Nourish mind, body, and soul with nature, intention, and good
              company.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[16px] shadow-lg overflow-hidden h-[400px] md:h-[450px] lg:h-[500px]">
          <div className="h-[60%] relative">
            <img
              src={Retreats5.src}
              alt="Worlds"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[40%] p-6 flex flex-col justify-center">
            <h4 className="subH1 mb-3">Special celebrations</h4>
            <p className="body1 text-darkGrey">
              From birthdays to just-because moments, make memories in paradise.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[16px] shadow-lg overflow-hidden h-[400px] md:h-[450px] lg:h-[500px]">
          <div className="h-[60%] relative">
            <img
              src={Retreats6.src}
              alt="Pura Vida"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[40%] p-6 flex flex-col justify-center">
            <h4 className="subH1 mb-3">Executive & business</h4>
            <p className="body1 text-darkGrey">
              Gather the crew and celebrate with style, sun, and a little wild.
            </p>
          </div>
        </div>
      </div>
      <div className=" mx-auto md:mt-[130px] md:mb-[130px] mt-[50px] mb-[0px] text-center flex items-center flex-col gap-10 px-4">
        <h3 className="myH2 max-w-[692px]">
          Your retreat, our space.
          <br />
          <span className="text-[#5AB012]">Why Funky Monkey Lodge? </span>
        </h3>
        <div className="max-w-7xl mx-auto px-4 mt-8 lg:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 sm:[&>*:nth-child(3)]:col-start-1 sm:[&>*:nth-child(4)]:col-start-2 sm:[&>*:nth-child(5)]:col-start-1 sm:[&>*:nth-child(5)]:col-span-2 sm:[&>*:nth-child(5)]:justify-self-center lg:[&>*:nth-child(3)]:col-auto lg:[&>*:nth-child(4)]:col-auto lg:[&>*:nth-child(5)]:col-auto lg:[&>*:nth-child(5)]:col-span-1 lg:[&>*:nth-child(5)]:justify-self-auto xl:[&>*:nth-child(3)]:col-auto xl:[&>*:nth-child(4)]:col-auto xl:[&>*:nth-child(5)]:col-auto xl:[&>*:nth-child(5)]:col-span-1 xl:[&>*:nth-child(5)]:justify-self-auto">
            <div className="flex flex-col items-center text-center">
              <img
                src={BeachIcon.src}
                alt="Beach Icon"
                className="mb-4 w-12 h-12"
              />
              <p className="body1 text-darkGrey">
                A peaceful, inspiring environment surrounded by jungle and
                ocean.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={BedIcon.src}
                alt="Bed Icon"
                className="mb-4 w-12 h-12"
              />
              <p className="body1 text-darkGrey">
                Cozy and comfortable accommodation for every budget
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={FoodIcon.src}
                alt="Food Icon"
                className="mb-4 w-12 h-12"
              />
              <p className="body1 text-darkGrey">
                Personalized menu for your group, half board or full board, all
                inclusive.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={CarIcon.src}
                alt="Car Icon"
                className="mb-4 w-12 h-12"
              />
              <p className="body1 text-darkGrey">
                Support with organizing transportation and logistics.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src={FollowupIcon.src}
                alt="Followup Icon"
                className="mb-4 w-12 h-12"
              />
              <p className="body1 text-darkGrey">
                Assistance with planning activities, excursions, meals and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 sm:mx-8 lg:mx-[70px]">
        <div className=" overflow-hidden bg-blue rounded-[16px]  my-[100px]">
          <div className="flex flex-col lg:flex-row items-center py-6 px-6 md:py-20 md:px-8 mg:px-[64px] justify-between">
            <div className="w-full lg:w-[40%] lg:mr-10 ">
              <h4 className="myH2 text-white">
                Let&apos;s plan your retreat or event in Santa Teresa
              </h4>
              <p className="body1 text-grey2 mt-4 mb-6 lg:mb-[50px]">
                Let us help you bring your vision to life in one of Costa
                Rica&apos;s most magical locations.
              </p>
              <div className="bgreen-gradient2 text-white text-center py-4 px-6 rounded-[58px] md:max-w-[200px] flex items-center gap-2 justify-center font-bold">
                <img src={WhatsApp.src} alt="WhatsApp" /> WhatsApp us
              </div>
            </div>
            <div className="w-full lg:w-[60%] mt-6 lg:mt-0 ">
              <form
                onSubmit={handleSubmit}
                className="lg:max-w-[520px] ml-auto "
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
                      className="w-full px-4 py-3 rounded-lg bg-[#FFFFFF1A]  text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 rounded-lg bg-[#FFFFFF1A]  text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Kind of retreat */}
                <div>
                  <label
                    htmlFor="kindOfRetreat"
                    className="block text-white text-base font-bold mb-2 mt-4"
                  >
                    Kind of retreat:*
                  </label>
                  <textarea
                    id="kindOfRetreat"
                    name="kindOfRetreat"
                    value={formData.kindOfRetreat}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    required
                    rows={2}
                    className="w-full px-4 py-3 rounded-lg bg-[#FFFFFF1A]  text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>

                {/* Amount of participants */}
                <div>
                  <label
                    htmlFor="participants"
                    className="block text-white text-base font-bold mb-2 mt-4"
                  >
                    Amount of participants:*
                  </label>
                  <textarea
                    id="participants"
                    name="participants"
                    value={formData.participants}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    required
                    rows={1}
                    className="w-full px-4 py-3 rounded-lg bg-[#FFFFFF1A]  text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>

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
        </div>
      </div>
      <Faqs category="retreats" showFilters={false} showViewMore={true} />
    </Layout>
  );
}
