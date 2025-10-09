"use client";
// faqs.jsx
import { useState } from "react";
import Button from "@/components/Button";
import Link from "next/link";
const faqsData = [
  {
    question: "Is the town safe?",
    answer:
      "Santa Teresa is generally very safe. It's a small town where everyone knows everyone. Use common sense, don't flash expensive stuff, and you'll be fine. The biggest danger is probably falling off your surfboard.",
    category: "location",
  },
  {
    question: "Do I need to know Spanish?",
    answer:
      'Nope! English is widely spoken, especially in surf shops, restaurants, and hotels. That said, learning "¡Pura vida!" and "¡Gracias!" will earn you instant smiles and maybe a free beer.',
    category: "location",
  },
  {
    question: "What kind of travelers come here?",
    answer:
      "Everyone! Surfers, yogis, digital nomads, families, couples, solo adventurers, and people having quarter-life or mid-life revelations. The common thread? Everyone's here to unplug and reconnect with what matters.",
    category: "location",
  },
  {
    question: "Is it good for solo travelers?",
    answer:
      "Absolutely! Santa Teresa has this magical way of turning strangers into friends. Whether you're sharing waves, joining a beach yoga class, or just grabbing a beer at sunset, you'll find your tribe quickly.",
    category: "location",
  },
  {
    question: "Are there ATMs in town?",
    answer:
      "Yes. There are atms in Town to withdraw money. Please note there is a daily limit on the amount to withdraw.",
    category: "location",
  },
  {
    question: "Can I pay in usd?",
    answer:
      "The local currency is colones, however everyone accepts US dollars. Make sure you pay with smaller bills as the exchange rate is not always very convenient. Our room prices are in US$ so paying with US$ is just fine!",
    category: "location",
  },
  {
    question: "Do I need to bring cash?",
    answer:
      "You can pay by credit card mostly everywhere but we do recommend you to bring some cash for excursions and activities.",
    category: "activities",
  },
  {
    question: "Are there mosquitos, spiders, monkeys, iguanas, snakes...?",
    answer:
      "Please consider you will be coming to tropics, so yes, you may get a mosquito bite and you will definitively see a spider and other bugs. You will hear monkeys howling for sure, especially in the early morning. You may be lucky to see the whole family as well. Iguanas are very common. It is very rare to see a snake.",
    category: "location",
  },
  {
    question: "Do I need to rent a car?",
    answer:
      "There is no need to have a car in Town. Santa Teresa is a small town and you can walk around once you arrive. If you do want to get between places and explore the surrounding areas we do recommend to rent an ATV or motorbike.",
    category: "location",
  },
  {
    question: "Is there a gas station in Town?",
    answer:
      "Please make sure that you fill your tank in Cobano. There is no gas station in Santa Teresa.",
    category: "location",
  },
  {
    question: "What is your check-in/check-out time?",
    answer:
      "Check-in is from 2:00 PM, and check-out is by 11:00 AM. If you arrive earlier or need to stay a bit after check-out, you're welcome to leave your luggage at reception and relax in our common areas while you wait for your room to be ready or for your transport to come.",
    category: "hotel",
  },
  {
    question: "Do you have Wi-Fi?",
    answer:
      "Yes, we offer complimentary high-speed Wi-Fi throughout the property, including in all rooms and common areas.",
    category: "hotel",
  },
  {
    question: "Is breakfast included?",
    answer:
      "We offer daily complimentary light tropical and delicious breakfast.",
    category: "hotel",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "To confirm a reservation, we require a deposit. This deposit is non-refundable in case of cancellation. We recommend reviewing your travel plans carefully before booking.",
    category: "hotel",
  },
  {
    question: "Are towels and linens provided?",
    answer:
      "Yes, all our rooms include fresh linens and towels. We also provide basic toiletries.",
    category: "hotel",
  },
  {
    question: "Do you offer daily housekeeping?",
    answer: "Yes, daily housekeeping is available for all our rooms.",
    category: "hotel",
  },
  {
    question: "Are pets allowed in the rooms?",
    answer:
      "We are a pet-friendly hotel in some of our rooms. Please contact us in advance if you plan to travel with your pet.",
    category: "hotel",
  },
  {
    question: "Is smoking allowed in the rooms?",
    answer:
      "All rooms are non-smoking. However, we have designated outdoor smoking areas.",
    category: "hotel",
  },
  {
    question: "Do you have private parking?",
    answer: "Yes, we offer private parking for all our guests, free of charge.",
    category: "hotel",
  },
  {
    question: "Is the area safe?",
    answer:
      "Yes, Santa Teresa is generally a safe place, and our hotel is located in a particularly quiet and peaceful area. The property is fully enclosed and access is exclusive to hotel guests.",
    category: "hotel",
  },
  {
    question: "Is the hotel noisy at night?",
    answer:
      "Not at all. We have a quiet time policy starting at 10:30 PM and deeply respect our guests' rest. The atmosphere is peaceful and relaxed.",
    category: "hotel",
  },
  {
    question: "Can I use the yoga studio when there's no class scheduled?",
    answer:
      "Absolutely! We want you to feel right at home. The yoga studio is open for all our guests to use freely whenever there are no scheduled classes or activities.",
    category: "hotel",
  },
  {
    question: "Do you provide beach and pool towels?",
    answer:
      "Yes, we do! Beach and pool towels are available upon request at the reception.",
    category: "hotel",
  },
  {
    question: "Do I need to book my activities in advance?",
    answer:
      "You're welcome to book your activities directly with us once you arrive. However, during high season, we recommend booking popular options like ATV rentals, Tortuga Island, bioluminescence, and fishing tours in advance — they tend to fill up quickly!",
    category: "activities",
  },
  {
    question: "How do I book a tour or activity?",
    answer:
      "Just come see us at reception! We'll help you choose and book your activities, give you all the details, and connect you with trusted local providers.",
    category: "activities",
  },
  {
    question: "Can I join activities if I'm not staying at the lodge?",
    answer:
      "Absolutely! Everyone's welcome to join, whether you're staying with us or just passing through.",
    category: "activities",
  },
  {
    question: "Are the classes and tours suitable for all levels?",
    answer:
      "Yes! From total beginners to experienced adventurers, our guides and instructors adapt everything to your pace and experience level.",
    category: "activities",
  },
  {
    question: "Can you organize private or group sessions?",
    answer:
      "Of course! We're happy to organize custom experiences for couples, families, groups of friends, or retreat participants.",
    category: "activities",
  },
  {
    question: "What should I bring?",
    answer:
      "It depends on the activity, but generally speaking, pack like you're going on an outdoor adventure: sunscreen, swimwear, towel, hat, water bottle, and comfy shoes. We'll let you know if anything special is needed.",
    category: "activities",
  },
  {
    question: "Do I need to pay in cash or can I use a card?",
    answer:
      "Some tour operators accept credit cards, but it's always a good idea to bring cash. Many local providers and extra services (like tips or snacks) prefer it.",
    category: "activities",
  },
  {
    question: "Are activities suitable for kids or families?",
    answer:
      "Yes! Many tours and experiences are great for families — especially beach days, boat trips, zip lining, horseback riding, and nature walks. Let us know what you're looking for, and we'll help you choose what fits best.",
    category: "activities",
  },
  {
    question: "What if the weather is bad?",
    answer:
      "Costa Rica's weather can change quickly, especially during the rainy season. Most tours run rain or shine, but if conditions become unsafe, the tour will be rescheduled or refunded. We'll always keep you updated.",
    category: "activities",
  },
  {
    question: "Do you offer transportation to the activities?",
    answer:
      "Many activities include transportation or offer it as an option. We'll confirm that when you book and make sure everything's arranged for you.",
    category: "activities",
  },
  {
    question: "Can I host my own retreat at your hotel?",
    answer:
      "Absolutely. We love partnering with teachers, facilitators, and brands to create unique retreat experiences. Our space is designed to support wellness, creativity, and connection.",
    category: "retreats",
  },
  {
    question: "Do you have experience hosting retreats?",
    answer:
      "Yes, we do — plenty! We've been one of the pioneer hotels in the area and have hosted retreats and group experiences of all kinds over the years. Your group couldn't be in better hands — we know what it takes to create a smooth, inspiring, and unforgettable retreat.",
    category: "retreats",
  },
  {
    question: "What's included when I host a retreat?",
    answer:
      "We offer exclusive or semi-exclusive accommodation packages, daily use of the yoga shala or other communal areas, healthy meals, assistance with logistics, and optional add-ons like excursions or massage services. We can tailor the package to fit your needs.",
    category: "retreats",
  },
  {
    question: "How many people can I bring?",
    answer:
      "Our retreat capacity depends on the room configuration and the level of privacy you're looking for. Max 40 pp. Reach out to discuss your ideal group size.",
    category: "retreats",
  },
  {
    question: "Do you provide yoga mats and props?",
    answer:
      "Yes, we have yoga mats and blocks available for your group. You're also welcome to bring your own gear if you prefer.",
    category: "retreats",
  },
  {
    question: "Is there a minimum stay or number of participants required?",
    answer:
      "Typically, we ask for a minimum stay of 5 days and a minimum group size of 5 pp, but we're flexible depending on the season and availability. Let's talk!",
    category: "retreats",
  },
  {
    question: "Can you help us organize additional experiences?",
    answer:
      "Definitely. We can coordinate surf lessons, nature tours, massages, local excursions, bonfires, or anything else you'd like to include in your program.",
    category: "retreats",
  },
  {
    question: "What kind of food do you offer?",
    answer:
      "Our kitchen can provide fresh, nourishing meals tailored to your group's preferences upon request — vegetarian, vegan, gluten-free, or a mix.",
    category: "retreats",
  },
  {
    question: "Do you help with promotion or bookings?",
    answer:
      "We're here to support you! While the retreat organization and promotion are your responsibility, we're happy to share content, photos, and practical info, and in some cases can help promote your retreat through our channels.",
    category: "retreats",
  },
  {
    question: "How do I reserve dates or get more information?",
    answer:
      "Just send us a message through our contact form or email us directly. We'll be happy to send you a retreat info pack with pricing, availability, and all the details you need.",
    category: "retreats",
  },
];

export default function Faqs({
  category = "all",
  showFilters = true,
  showViewMore = false,
}) {
  const [openFaqs, setOpenFaqs] = useState({});
  const [activeFilter, setActiveFilter] = useState(category);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleFilter = (filter) => {
    if (filter === activeFilter) return; // Prevent unnecessary transitions

    setIsTransitioning(true);
    setOpenFaqs({}); // Close all FAQs when changing filter

    // Add a small delay to create a smooth transition effect
    setTimeout(() => {
      setActiveFilter(filter);
      setIsTransitioning(false);
    }, 150);
  };

  const filteredFaqs = showFilters
    ? activeFilter === "all"
      ? faqsData
      : faqsData.filter((faq) => faq.category === activeFilter)
    : faqsData.filter((faq) => faq.category === category);

  const filters = [
    { key: "all", label: "All" },
    { key: "hotel", label: "Rooms/Hotel" },
    { key: "activities", label: "Activities" },
    { key: "retreats", label: "Retreats" },
    { key: "location", label: "Location" },
  ];

  return (
    <div className="flex flex-col gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 bg-[#F6F8F6]">
      {/* {showFilters && ( */}
      <div
        className={`mx-4 sm:mx-8 lg:mx-[70px]  lg:mt-[160px] pb-10 ${
          showFilters ? "mt-40" : "mt-10"
        }`}
      >
        <h2 className="myH3 text-[#211F20] text-center">
          Frequently Asked Questions
        </h2>
      </div>
      {/* //   )} */}
      {showFilters && (
        <div className="flex flex-wrap gap-3 sm:gap-6 text-left justify-start max-w-[1000px] mx-auto w-full">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => handleFilter(filter.key)}
              className={`body3 cursor-pointer transition-all duration-300 ease-in-out ${
                activeFilter === filter.key
                  ? "!text-[#002422]  scale-105"
                  : "text-darkGrey hover:text-black hover:scale-105"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isTransitioning
            ? "opacity-0 transform translate-y-4"
            : "opacity-100 transform translate-y-0"
        }`}
      >
        {filteredFaqs.map((faq, index) => (
          <div
            key={`${activeFilter}-${index}`}
            onClick={() => toggleFaq(index)}
            className="flex cursor-pointer mx-auto flex-col bg-[#ffffff] rounded-[12px] sm:rounded-[16px] p-7 md:p-9 max-w-[1000px] w-full shadow-[0px_9px_15px_2px_rgba(0,0,0,0.05)] mb-4 sm:mb-6"
          >
            <div className="flex flex-row justify-between items-start cursor-pointer h-full">
              <div className="flex flex-col justify-between h-full flex-1 md:pr-4">
                <p
                  className="subH2 text-black leading-tight select-none
"
                >
                  {faq.question}
                </p>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaqs[index] ? " opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className=" !leading-[24px] body2 select-none text-darkGrey  mt-2 sm:mt-3 lg:mt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 flex items-start pt-1">
                <svg
                  className={`w-[11px] h-[11px] sm:w-[13px] sm:h-[13px] lg:w-[15px] lg:h-[15px] cursor-pointer transition-transform duration-300 ${
                    openFaqs[index] ? "rotate-45" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 11.11 11.11"
                  fill="#211f20"
                >
                  <path d="M6.73,4.38h4.38v2.35h-4.38v4.38h-2.35v-4.38H0v-2.35h4.38V0h2.35v4.38Z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showViewMore && (
        <div className="flex justify-center mb-8">
          <Link href="/faq">
            <div className="flex justify-center text-[#211F20] font-bold text-base border border-[#211F20] rounded-[8px] px-5 py-4">
              View more
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
