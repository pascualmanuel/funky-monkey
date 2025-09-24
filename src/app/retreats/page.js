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

export default function Retreats() {
  return (
    <Layout title="Wellness Retreats">
      <div
        className="min-h-[530px] md:min-h-[600px] md:h-[100dvh] relativemax-h-[850px]  flex flex-col justify-center items-center"
        style={{
          background: `linear-gradient(359.9deg, rgba(0, 0, 0, 0.6) 2.16%, rgba(0, 0, 0, 0) 61.44%),  url("${RetreatsImage.src}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="myH1 text-center text-white "> Retreats</h2>
        </div>
        <p className="body1 text-center text-white max-w-[450px] absolute bottom-16">
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
      <div className=" mx-auto md:mt-[130px] md:mb-[130px] mt-[50px] mb-[50px] text-center flex items-center flex-col gap-10 px-4">
        <h3 className="myH2 max-w-[692px]">
          Your retreat, our space.
          <br />
          <span className="text-[#5AB012]">Why Funky Monkey Lodge? </span>
        </h3>
        <div className="max-w-7xl mx-auto px-4 mt-20">
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
    </Layout>
  );
}
