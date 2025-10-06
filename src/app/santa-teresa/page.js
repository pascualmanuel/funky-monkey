import Layout from "@/components/Layout";
import SantaTeresa from "@/assets/santa-teresa/santa-teresa.webp";

import Surf from "@/assets/santa-teresa/surf.webp";
import Jungle from "@/assets/santa-teresa/jungle.webp";
import Magic from "@/assets/santa-teresa/magic.webp";
import Worlds from "@/assets/santa-teresa/worlds.webp";
import Laid from "@/assets/santa-teresa/laid.webp";
import PuraVida from "@/assets/santa-teresa/pura-vida.webp";
import Button from "@/components/Button";
import Wave from "@/assets/santa-teresa/waves.webp";
import Yellow from "@/assets/santa-teresa/yellow-bg.webp";
import Green from "@/assets/santa-teresa/green-bg.webp";
import Map from "@/assets/santa-teresa/map.svg";
import Plane from "@/assets/santa-teresa/airplane.svg";
import Car from "@/assets/santa-teresa/car.svg";
import Bus from "@/assets/santa-teresa/bus.svg";
import GreenAirways from "@/assets/santa-teresa/green-airways.svg";
import Sansa from "@/assets/santa-teresa/sansa.svg";
import Link from "next/link";
import WhatsApp from "@/assets/santa-teresa/whatsapp-icon.svg";
import Phone from "@/assets/santa-teresa/phone-icon.svg";
export default function Activities() {
  return (
    <Layout title="Santa Teresa">
      <div
        className="min-h-[680px] md:min-h-[600px] md:h-[100dvh] relative max-h-[850px]  flex flex-col justify-center items-center"
        style={{
          background: `linear-gradient(359.9deg, #000000 2.16%, rgba(0, 0, 0, 0) 61.44%), url("${SantaTeresa.src}")`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h2 className="myH1 text-center text-white ">Santa Teresa</h2>
        </div>
        <p className="body1 text-center text-white max-w-[450px] absolute bottom-16">
          A laid-back beach town where the jungle meets the ocean and adventure
          begins.
        </p>
      </div>

      <div className=" mx-auto md:mt-[130px] md:mb-[130px] mt-[50px] mb-[50px] text-center flex items-center flex-col gap-10 px-4">
        <h3 className="myH2 max-w-[776px]">
          Why is Santa Teresa
          <span className="text-[#5AB012]">so special </span>
        </h3>
        <p className="body1 max-w-[560px] text-darkGrey">
          This isn’t just another beach town. Santa Teresa carries a quiet pull
          — one that turns travelers into locals, moments into stories, and
          strangers into family.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-[70px]  mx-auto">
        <div className="bg-white rounded-[16px] shadow-lg overflow-hidden h-[400px] md:h-[450px] lg:h-[500px]">
          <div className="h-[60%] relative">
            <img
              src={Surf.src}
              alt="Surf"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[40%] p-6 flex flex-col justify-center">
            <h4 className="subH1 mb-3">World-Class surf</h4>
            <p className="body1 text-darkGrey">
              Year-round waves, easy beach breaks for beginners, and exciting
              peaks for pros in warm tropical waters.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[16px] shadow-lg overflow-hidden h-[400px] md:h-[450px] lg:h-[500px]">
          <div className="h-[60%] relative">
            <img
              src={Jungle.src}
              alt="Jungle"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[40%] p-6 flex flex-col justify-center">
            <h4 className="subH1 mb-3">Jungle meets ocean</h4>
            <p className="body1 text-darkGrey">
              Costa Rica&apos;s biodiversity shines in every corner, from
              birds&apos; songs to the soothing waves that mark the day&apos;s
              rhythm.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[16px] shadow-lg overflow-hidden h-[400px] md:h-[450px] lg:h-[500px]">
          <div className="h-[60%] relative">
            <img
              src={Laid.src}
              alt="Laid"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[40%] p-6 flex flex-col justify-center">
            <h4 className="subH1 mb-3">Magic sunsets</h4>
            <p className="body1 text-darkGrey">
              Santa Teresa&apos;s sunsets paint the sky with vibrant colors,
              creating unforgettable, magical evenings by the ocean.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[16px] shadow-lg overflow-hidden h-[400px] md:h-[450px] lg:h-[500px]">
          <div className="h-[60%] relative">
            <img
              src={Magic.src}
              alt="Magic"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[40%] p-6 flex flex-col justify-center">
            <h4 className="subH1 mb-3">Worlds Connect Here</h4>
            <p className="body1 text-darkGrey">
              Digital nomads, surfers, artists, and locals creating a vibrant,
              welcoming culture.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[16px] shadow-lg overflow-hidden h-[400px] md:h-[450px] lg:h-[500px]">
          <div className="h-[60%] relative">
            <img
              src={Worlds.src}
              alt="Worlds"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[40%] p-6 flex flex-col justify-center">
            <h4 className="subH1 mb-3">Laid-Back freedom</h4>
            <p className="body1 text-darkGrey">
              No rush, no stress. Time moves differently here, and that&apos;s
              exactly the point.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[16px] shadow-lg overflow-hidden h-[400px] md:h-[450px] lg:h-[500px]">
          <div className="h-[60%] relative">
            <img
              src={PuraVida.src}
              alt="Pura Vida"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[40%] p-6 flex flex-col justify-center">
            <h4 className="subH1 mb-3">Pura Vida spirit</h4>
            <p className="body1 text-darkGrey">
              In a Blue Zone, people live longer due to a balanced lifestyle
              with nature.
            </p>
          </div>
        </div>
      </div>
      <div
        className="mt-[100px]"
        style={{
          background: `linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #000000 169.74%), url(${Wave.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-4 sm:mx-8 lg:mx-[70px] my-[100px] flex md:flex-row flex-col md:justify-between justify-center items-center">
          <div className="max-w-[350px] mr-4 mb-10 md:mb-0">
            <h2 className="myH2 text-white">When to visit Santa Teresa</h2>
            <p className="body1 text-grey2 my-4">
              Santa Teresa is beautiful year-round, but each season brings its
              own magic and surf conditions.
            </p>
            <Button variant="primary" classNames="w-[100%] h-[50px]">
              Surf report
            </Button>
          </div>
          <div className="flex mg:flex-row flex-col gap-4 text-white text">
            <div
              className="flex flex-col  p-6 max-w-[440px] text-center rounded-[16px]"
              style={{
                background: "rgba(251, 251, 251, 0.05)",
                backdropFilter: "blur(42px)",
              }}
            >
              <img
                src={Yellow.src}
                className="w-full h-[66px] rounded-lg object-cover"
                alt="Dry"
              />
              <p className=" subH1 mt-4">Dry Season (Dec - Apr)</p>
              <p className="body2 my-6">
                With perfect blue skies and warm weather, this is peak season
                with the most reliable surf conditions and the liveliest social
                scene. Real paradise.
              </p>
              <p>• Consistent 3-6ft waves</p>
              <p>• Warm, sunny days (26° to 34°C)</p>
              <p>• Busy but vibrant atmosphere</p>
            </div>
            <div
              className="flex flex-col  p-6 max-w-[440px] text-center rounded-[16px]"
              style={{
                background: "rgba(251, 251, 251, 0.05)",
                backdropFilter: "blur(42px)",
              }}
            >
              <img
                src={Green.src}
                className="w-full h-[66px] rounded-lg object-cover"
                alt="Green"
              />
              <p className="subH1 mt-4">Green Season (May - Nov)</p>
              <p className="body2 my-6">
                Lush landscapes, afternoon rains, and fewer crowds. The surf can
                be bigger and more powerful, perfect for experienced surfers
                seeking adventure.
              </p>

              <p>• Bigger swells (4-8ft+)</p>
              <p>• Tropical afternoon rains</p>
              <p>• Peaceful, intimate vibe</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto md:mt-[130px] md:mb-[130px] mt-[50px] mb-[50px] text-center flex items-center flex-col gap-10 px-4">
        <h3 className="myH2 ">
          How to get to
          <span className="text-[#5AB012]"> Santa Teresa </span>
        </h3>
        <p className="body1 max-w-[560px] text-darkGrey">
          Wondering what’s the best way to get to Santa Teresa? There are many
          ways to arrive, depending on your travel style, time, and budget.
        </p>
      </div>

      <div className="mx-4 sm:mx-8 lg:mx-[70px] flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-8 lg:gap-0">
        {/* Map Section */}
        <div className="lg:mr-8 flex flex-col gap-4 justify-center lg:justify-start">
          <img
            src={Map.src}
            alt="Map"
            className="w-full max-w-[400px] lg:max-w-none"
          />
          <Link
            href="/"
            className=" lg:w-fit w-full text-center text-green border border-green font-bold text-base rounded-[8px] p-3"
          >
            View in Google Maps
          </Link>
        </div>

        {/* Transportation Options */}
        <div className="w-full lg:w-auto">
          <div className="flex flex-col gap-2 bg-grey1 rounded-[16px] p-4 sm:p-7 w-full lg:max-w-[665px]">
            <div className="chip bg-[white] w-fit p-[6px] rounded-full body3 text-[#6B7280] border border-[#EEF1F0]">
              Fast way
            </div>
            <div className="flex flex-row gap-2">
              <img src={Plane.src} alt="Plane" />{" "}
              <p className="subH2">Fast & Comfortable</p>
            </div>
            <p className="body2 ml-8 text-darkGrey">
              Domestic Flight + Transfer: Fly from San José or Liberia to
              Cóbano. Then, take a 25 min taxi ride to the Lodge. Get in touch
              with us to arrange the taxi to get you here. Fastest but priciest
              option.
            </p>
            <div className="flex flex-row gap-2 ml-8">
              <img src={Sansa.src} className="h-[40px]" alt="Sansa" />
              <img
                src={GreenAirways.src}
                className="h-[40px]"
                alt="GreenAirways"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 bg-grey1 rounded-[16px] p-4 sm:p-7 w-full lg:max-w-[665px] my-4">
            <div className="chip bg-[white] w-fit p-[6px] rounded-full body3 text-[#6B7280] border border-[#EEF1F0]">
              Comfortable way
            </div>
            <div className="flex flex-row gap-2">
              <img src={Bus.src} alt="Bus" />{" "}
              <p className="subH2">Affordable way</p>
            </div>
            <p className="body2 ml-8 text-darkGrey">
              Bus from San José: Take a direct bus from San José to Santa
              Teresa. The journey takes about 5-6 hours and costs around $10-15.
              Most comfortable and budget-friendly option for backpackers.
            </p>
          </div>

          <div className="flex flex-col gap-2 bg-grey1 rounded-[16px] p-4 sm:p-7 w-full lg:max-w-[665px]">
            <div className="chip bg-[white] w-fit p-[6px] rounded-full body3 text-[#6B7280] border border-[#EEF1F0]">
              Adventure way
            </div>
            <div className="flex flex-row gap-2">
              <img src={Car.src} alt="Car" />{" "}
              <p className="subH2">Rental Car + Ferry Adventure</p>
            </div>
            <p className="body2 ml-8 text-darkGrey">
              Drive from San José: Rent a car and drive to Puntarenas, take the
              ferry to Paquera, then drive to Santa Teresa. About 4-5 hours
              total. Perfect for exploring the area at your own pace.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-12 lg:mt-20">
            <h3 className="myH3 text-center">Need help getting here?</h3>
            <p className="body2 text-darkGrey text-center my-6 max-w-[540px] mx-auto">
              We are happy to help organizing shared or private transportation
              to the lodge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-[50px] lg:mb-[100px]">
              <Link
                href="https://wa.me/50626400272"
                className="w-full h-[50px] text-white flex flex-row gap-4 items-center justify-center text-base font-bold"
                target="_blank"
                style={{
                  background:
                    "linear-gradient(139.26deg, #25D366 6.28%, #136D35 223.69%)",
                  borderRadius: "8px",
                }}
              >
                <img src={WhatsApp.src} alt="WhatsApp" /> WhatsApp
              </Link>

              <Link
                href="https://wa.me/50626400272"
                className="w-full h-[50px] text-white flex flex-row gap-4 items-center justify-center text-base font-bold"
                target="_blank"
                style={{
                  background: " #002422",
                  borderRadius: "8px",
                }}
              >
                <img src={Phone.src} alt="Phone" /> +(506) 2640-0272
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
