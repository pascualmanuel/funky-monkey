import Layout from "@/components/Layout";
import ActivitiesImage from "@/assets/activities/activities.webp";
import Img3 from "@/assets/activities/activity-3.webp";
import Img4 from "@/assets/activities/activity-4.webp";
import Img5 from "@/assets/activities/activity-5.webp";
import Img6 from "@/assets/activities/activity-6.webp";
import Img7 from "@/assets/activities/activity-7.webp";
import Img9 from "@/assets/activities/activity-9.webp";
import Img11 from "@/assets/activities/activity-11.webp";
import Img12 from "@/assets/activities/activity-12.webp";
import Img13 from "@/assets/activities/activity-13.webp";
import Faqs from "@/components/Faqs";
import PreFooter from "@/components/PreFooter";
import Button from "@/components/Button";
import { activityHubEntry } from "@/data/activities";
export default function Activities() {
  const sections = [
    activityHubEntry("surf-lessons-santa-teresa", "group"),
    activityHubEntry("yoga-aerial-silk-santa-teresa", "yoga"),
    {
      ...activityHubEntry("tortuga-island-tour-santa-teresa", "full-day"),
    },
    {
      ...activityHubEntry("tortuga-island-tour-santa-teresa", "afternoon"),
    },
    {
      ...activityHubEntry("bioluminescence-tour-santa-teresa", "boat"),
    },
    {
      img: Img3.src,
      text: "ATV Adventure & Montezuma Waterfalls",
      description:
        "Explore the Nicoya Peninsula with an ATV rental — the best way to enjoy nature and beauty. Ride jungle trails, spot wildlife, and visit charming fishing villages like Cabuya and Montezuma. In Montezuma, hike to the famous waterfall for a refreshing swim. This is a self-driven adventure to connect with Costa Rica's wild side.",
    },
    {
      img: Img4.src,
      text: "Half Day Fishing Tour",
      duration: "3 hours",
      description:
        "Ideal for casual anglers or families, this 3-hour tour includes fishing gear, drinks, and fruit. We’ll fish the coastal waters of the Nicoya Peninsula, where yellowfin tuna and mahi mahi are caught. You can take your catch to cook later. The boat fits up to 5 people for a fun outing.",
    },
    {
      img: Img5.src,
      text: "Full Day Fishing Tour",
      duration: "8 hours",
      description:
        "This 8-hour adventure takes you into deeper waters for blue marlin, sailfish, and giant tuna. The tour includes gear, drinks, fresh fruit, and lunch on the boat. Keep an eye out for dolphins, sea turtles, and whales during the journey.",
    },
    {
      img: Img6.src,
      text: "Horseback Riding on the Beach",
      duration: "2 hours (morning or afternoon)",
      description:
        "Enjoy a 2-hour horseback ride along the beautiful coastline. Choose a morning ride for cooler air and serenity, or an afternoon tour for stunning sunsets. Led by a friendly guide, this tour suits all experience levels. The well-trained horses ensure a safe and relaxed ride by the sea.",
    },

    {
      img: Img7.src,
      text: "Zipline Adventure in the Jungle",
      duration: "1.5 hours",
      description:
        "Experience the thrill of ziplining through the treetops on the peninsula. Choose between two options: one in Malpaís near Cabo Blanco Nature Reserve and another in Montezuma's lush jungle. Both offer stunning views and wildlife sightings. Each zipline is unique and recommended. Transportation is needed; consider renting an ATV for a complete jungle adventure.",
    },


    {
      img: Img9.src,
      text: "Stand Up Paddle Tour",
      duration: "3 hours (morning or sunset, depending on conditions)",
      description:
        "Join our Stand Up Paddle (SUP) Tour for a peaceful yet adventurous experience. Departing from Malpaís, this 3-hour tour offers chances to spot marine wildlife like sea turtles and dolphins. Tours are scheduled in the morning or at sunset, depending on conditions.",
    },


    {
      img: Img11.src,
      text: "Wellness",
      description:
        "Unwind with our wellness offerings designed to help you relax and recover. We provide a variety of massages, from full-body treatments to focused sports recovery sessions. For deeper care, we offer acupuncture and cupping therapy for pain relief and energy balance. Recharge in the jungle with skilled therapists.",
    },

    {
      img: Img12.src,
      text: "Cabo Blanco Natural Reserve",
      open: " Wednesday to Sunday, 8:00 am – 4:00 pm (last entry 2:00 pm)",
      description:
        "Cabo Blanco, Costa Rica’s first nature reserve, is a must-visit. Hike through lush forests, spot wildlife, and discover a hidden beach. Rent an ATV for easy access and combine with nearby activities for a full day of adventure.",
    },

    {
      img: Img13.src,
      text: "Curú Wildlife Refuge",
      open: "Daily, 7:00 am – 3:00 pm (last entry 2:00 pm)",
      description:
        "Curú Wildlife Refuge on the Nicoya Peninsula is a haven for nature lovers. It hosts diverse wildlife, including monkeys, deer, and over 230 bird species. Scenic trails wind through forests and mangroves, perfect for a day of exploration. We recommend visiting by car or taxi for comfort, as it's best enjoyed as a dedicated nature day.",
    },
  ];
  return (
    <Layout title="Activities">
      <div
        className="min-h-[680px] md:min-h-[600px] md:h-[100dvh] relative max-h-[850px]  flex flex-col justify-center items-center"
        style={{
          background: `linear-gradient(359.9deg, #000000 2.16%, rgba(0, 0, 0, 0) 61.44%), url("${ActivitiesImage.src}")`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="myH1 text-center text-white ">Activities</h1>
        </div>
        <p className="body1 text-center text-white mx-5 md:mx-0 max-w-[450px] absolute bottom-16">
          Discover a wide range of exciting activities and adventures designed
          to create unforgettable memories during your stay.
        </p>
      </div>
      <div className=" mx-auto md:mt-[130px] md:mb-[130px] mt-[50px] mb-[50px] text-center flex items-center flex-col gap-10 px-4">
        <h2 className="myH2 max-w-[600px]">
          Adventure, relaxation & local flavor&nbsp;
          <span className="text-[#5AB012]">in Funky Monkey Lodge </span>
        </h2>
        <p className="body1 max-w-[560px] text-darkGrey">
          From surfing world-class waves to rejuvenating yoga sessions, our
          activities are designed to connect you with the nature, culture, and
          energy of Santa Teresa. Whether you seek adventure or downtime, we’ve
          got you covered.
        </p>
      </div>
      <div className="pb-[170px] bg-[#ffffff]">
        {sections.map(
          (
            { img, alt, text, description, duration, departure, open, price, href },
            idx
          ) => {
            const reverse = idx % 2 === 0;
            return (
            <div
              key={idx}
              className={`parallax-section flex ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
              } flex-col justify-center items-center p-6 lg:px-20 lg:pt-16 gap-6 sm:mt-0 `}
              
            >
              {/* CONTENEDOR FIJO */}
              <div className="relative md:w-1/2 w-full h-[300px] sm:h-[390px] lg:h-[390px] rounded-[24px] overflow-hidden">
                <img
                  src={img}
                  alt={alt || `${text} in Santa Teresa, Costa Rica`}
                  loading="lazy"
                  className="parallax-img absolute inset-0 w-full h-full object-cover will-change-transform"
                  style={{ transform: "translateY(0%)", scale: 1.12 }}
                />
              </div>

              {/* TEXTO */}
              <div className="md:w-1/2 w-full flex flex-col  items-start  lg:min-h-[400px] md:pr-10">
                <div
                  className={` lg:pb-10 text-darkGrey ${
                    reverse ? "lg:px-0 " : "lg:px-10"
                  }`}
                >
                  <h2 className="myH3 pb-6 text-black">{text}</h2>
                  {price && <p className="subH2 mb-4 text-green">{price}</p>}
                  {duration && (
                    <p className="body1">
                      <span className="subH2">Duration:</span> {duration}
                    </p>
                  )}
                  {departure && (
                    <p className="body1 pb-6">
                      <span className="subH2">Departure:</span> {departure}
                    </p>
                  )}
                  {open && (
                    <p className="body1 pb-6">
                      <span className="subH2">Open:</span> {open}
                    </p>
                  )}
                  <p className="body1">{description}</p>
                  {href && <Button link={href} className="mt-6 px-6 py-3 focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-4" aria-label={`Read more about ${text}`}>Read more</Button>}
                </div>
              </div>
            </div>
            );
          }
        )}
      </div>
      <Faqs category="activities" showFilters={false} showViewMore={true} />
      <PreFooter />
    </Layout>
  );
}
