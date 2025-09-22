import Layout from "@/components/Layout";

export default function FAQ() {
  return (
    <Layout title="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to the most common questions about Funkey Monkey Hotel
            and our services.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              What time is check-in and check-out?
            </h3>
            <p className="text-gray-600">
              Check-in is at 3:00 PM and check-out is at 11:00 AM. Early
              check-in and late check-out may be available upon request, subject
              to availability and additional charges.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              Is Wi-Fi available throughout the property?
            </h3>
            <p className="text-gray-600">
              Yes, we provide complimentary high-speed Wi-Fi throughout the
              entire property, including all rooms, common areas, and outdoor
              spaces.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              Do you offer airport transportation?
            </h3>
            <p className="text-gray-600">
              Yes, we provide complimentary airport shuttle service for all our
              guests. Please inform us of your flight details at least 24 hours
              in advance.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">Are pets allowed?</h3>
            <p className="text-gray-600">
              We welcome well-behaved pets in designated pet-friendly rooms. A
              pet fee of $25 per night applies, and advance notice is required.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              What activities are included in the room rate?
            </h3>
            <p className="text-gray-600">
              Basic activities like hiking trails, swimming pool, and fitness
              center are included. Specialized activities like guided tours,
              adventure sports, and spa treatments are available for an
              additional fee.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              Is there a minimum age requirement for activities?
            </h3>
            <p className="text-gray-600">
              Most activities are suitable for all ages, but some adventure
              activities have minimum age requirements (usually 12+ years).
              Please check with our activity desk for specific requirements.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              What is your cancellation policy?
            </h3>
            <p className="text-gray-600">
              Free cancellation up to 48 hours before check-in. Cancellations
              within 48 hours will be charged one night&apos;s rate. Special
              packages may have different cancellation terms.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              Do you have parking available?
            </h3>
            <p className="text-gray-600">
              Yes, we provide complimentary self-parking for all guests. Valet
              parking is also available for an additional fee of $15 per night.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              Are there dining options on-site?
            </h3>
            <p className="text-gray-600">
              Yes, we have multiple dining options including our main
              restaurant, poolside bar & grill, and coffee shop. Room service is
              also available 24/7.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              What should I pack for my stay?
            </h3>
            <p className="text-gray-600">
              We recommend comfortable outdoor clothing, hiking boots, swimwear,
              and layers for changing weather. Don&apos;t forget sunscreen, a
              hat, and a reusable water bottle!
            </p>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            Our friendly staff is here to help! Contact us directly for
            personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Call Us: (123) 456-7890
            </a>
            <a
              href="mailto:info@funkeymonkey.com"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Email Us: info@funkeymonkey.com
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
