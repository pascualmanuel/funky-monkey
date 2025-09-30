"use client";
import { useState } from "react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import ArrowCarousel from "@/assets/carousel-arrow.svg";
import CarouselImage from "@/assets/offers/offers.webp";
import CarouselImage1 from "@/assets/activities/activity-11.webp";
import CarouselImage2 from "@/assets/activities/activity-9.webp";
import InstagramBg from "@/assets/offers/instagram-bg.png";
export default function Offers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  const carouselData = [
    {
      image: CarouselImage,
      title: "From 50% OFF month",
      description:
        "Long term stays - 30 nights + relax to the max enjoy free high speed internet in each room",
      voucher: "Use voucher: 50MONTH",
      buttonText: "Get this offer",
      buttonLink: "/contact",
    },
    {
      image: CarouselImage1,
      title: "Weekend Getaway Special",
      description:
        "Book 2 nights and get the 3rd night free. Perfect for a relaxing weekend escape.",
      voucher: "Use voucher: WEEKEND3",
      buttonText: "Book Now",
      buttonLink: "/contact",
    },
    {
      image: CarouselImage2,
      title: "Early Bird Discount",
      description:
        "Book 30 days in advance and save up to 30% on your stay. Limited time offer.",
      voucher: "Use voucher: EARLY30",
      buttonText: "Reserve Today",
      buttonLink: "/contact",
    },
  ];

  const nextSlide = () => {
    setSlideDirection("right");
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setSlideDirection("left");
    setCurrentSlide(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  const goToSlide = (index) => {
    if (index > currentSlide) {
      setSlideDirection("right");
    } else if (index < currentSlide) {
      setSlideDirection("left");
    }
    setCurrentSlide(index);
  };
  const currentData = carouselData[currentSlide];

  return (
    <Layout title="Special Offers">
      <div className="min-h-[530px] md:min-h-[600px] md:h-[100dvh] relativemax-h-[850px] relative overflow-hidden">
        <div
          key={`slide-${currentSlide}`}
          className={`min-h-[530px] md:min-h-[600px] md:h-[100dvh] relativemax-h-[850px] flex flex-col justify-center items-center w-full absolute inset-0 ${
            slideDirection === "right"
              ? "animate-slide-in-right"
              : "animate-slide-in-left"
          }`}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 127.49%), url("${currentData.image.src}")`,
            backgroundPosition: "center bottom",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <h2 className="myH1 text-center text-white max-w-[600px]">
              {currentData.title}
            </h2>
            <p className="body1 text-center text-white max-w-[650px] mt-10">
              {currentData.description}
            </p>
            <p className="body1 text-center text-white max-w-[650px] mt-6">
              {currentData.voucher}
            </p>
            <Button
              variant="primary"
              classNames="w-[155px] h-[50px] mt-10"
              link={currentData.buttonLink}
            >
              {currentData.buttonText}
            </Button>
          </div>
        </div>
        <div className="body1 text-center text-white max-w-[450px] absolute bottom-16 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-10">
          <button
            onClick={prevSlide}
            className="mr-10 hover:opacity-70 cursor-pointer transition-opacity"
          >
            <img src={ArrowCarousel.src} alt="Previous" />
          </button>
          <div className="flex items-center gap-3">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-[7px] h-[7px] rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white" : "bg-white opacity-30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="rotate-180 ml-10 hover:opacity-70 cursor-pointer transition-opacity"
          >
            <img src={ArrowCarousel.src} alt="Next" />
          </button>
        </div>
      </div>
      <div className="mx-4 sm:mx-8 lg:mx-[70px]">
        <h3 className="myH2 text-center mt-[80px]"> Don't miss any offer</h3>
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 mx-auto max-w-[770px]">
          <div>
            <p className="subH2 mb-6">Suscribe to our newsletter</p>
            <input
              type="email"
              className="bg-[#9797971A] rounded-md px-4 py-3"
              placeholder="Enter your email..."
            />
            <button className="bg-green text-white font-bold px-4 py-3 rounded-md ml-2">
              Subscribe
            </button>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="subH2">Follow us</p>
            <div className="flex items-center gap-3 mt-6">
              <div
                className="bg-[#9797971A] rounded-md px-10 py-4 text-center text-white font-bold"
                style={{
                  backgroundImage: `url(${InstagramBg.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                Instagram
              </div>
              <div className="bg-[#0766FF] rounded-md px-10 py-4 text-center text-white font-bold">
                Facebook
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 sm:mx-8 lg:mx-[70px]">
        <div className=" overflow-hidden bgreen-gradient rounded-[16px]  my-[100px]">
          <div className="flex flex-col items-center justify-center gap-6 py-[55px]">
            <p className="myH3 h-full text-white text-center z-10  max-w-[200px] sm:max-w-[520px] mx-auto">
              Ready for a Costa Rican adventure?
            </p>
            <Button variant="greenBlue" classNames="w-[155px] h-[50px]">
              Book your stay
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
