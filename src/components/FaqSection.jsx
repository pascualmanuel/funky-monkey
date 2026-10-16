export default function FaqSection({
  children,
  mainHeading = false,
  headingId = "faq-heading",
}) {
  const Heading = mainHeading ? "h1" : "h2";

  return (
    <section
      aria-labelledby={headingId}
      className="flex flex-col gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 bg-[#F6F8F6]"
    >
      <div
        className={`mx-4 sm:mx-8 lg:mx-[70px] lg:mt-[160px] pb-10 ${
          mainHeading ? "mt-40" : "mt-10"
        }`}
      >
        <Heading id={headingId} className="myH3 text-[#211F20] text-center">
          Frequently Asked Questions
        </Heading>
      </div>
      {children}
    </section>
  );
}

export function FaqAccordion({ items }) {
  return items.map((faq) => (
    <details
      key={faq.question}
      className="group mx-auto bg-[#ffffff] rounded-[12px] sm:rounded-[16px] p-7 md:p-9 max-w-[1000px] w-full shadow-[0px_9px_15px_2px_rgba(0,0,0,0.05)] mb-4 sm:mb-6"
    >
      <summary className="flex cursor-pointer list-none justify-between items-start gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green [&::-webkit-details-marker]:hidden">
        <span className="subH2 text-black leading-tight">{faq.question}</span>
        <span className="shrink-0 pt-1" aria-hidden="true">
          <svg
            className="w-[11px] h-[11px] sm:w-[13px] sm:h-[13px] lg:w-[15px] lg:h-[15px] transition-transform duration-300 group-open:rotate-45"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 11.11 11.11"
            fill="#211f20"
          >
            <path d="M6.73,4.38h4.38v2.35h-4.38v4.38h-2.35v-4.38H0v-2.35h4.38V0h2.35v4.38Z" />
          </svg>
        </span>
      </summary>
      <p className="!leading-[24px] body2 text-darkGrey mt-2 sm:mt-3 lg:mt-4 md:pr-4">
        {faq.answer}
      </p>
    </details>
  ));
}
