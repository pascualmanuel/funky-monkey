import Layout from "@/components/Layout";

export default function Offers() {
  return (
    <Layout title="Special Offers">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Exclusive Offers & Packages
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Take advantage of our special deals and packages designed to make
            your stay even more memorable and affordable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-2 border-red-200">
            <div className="bg-red-500 text-white p-4 text-center">
              <span className="text-sm font-semibold">LIMITED TIME</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Early Bird Special</h3>
              <p className="text-gray-600 mb-4">
                Book 30 days in advance and save 25% on your stay. Perfect for
                planning ahead!
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Original Price:</span>
                  <span className="line-through">$200/night</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Your Price:</span>
                  <span className="text-green-600">$150/night</span>
                </div>
              </div>
              <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
                Book Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-2 border-blue-200">
            <div className="bg-blue-500 text-white p-4 text-center">
              <span className="text-sm font-semibold">POPULAR</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Adventure Package</h3>
              <p className="text-gray-600 mb-4">
                3 nights accommodation + 2 adventure activities + breakfast
                included. Best value for adventure seekers!
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Package Value:</span>
                  <span className="line-through">$450</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Package Price:</span>
                  <span className="text-green-600">$350</span>
                </div>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Book Package
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-2 border-green-200">
            <div className="bg-green-500 text-white p-4 text-center">
              <span className="text-sm font-semibold">WELLNESS</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Wellness Retreat</h3>
              <p className="text-gray-600 mb-4">
                5 days of wellness activities, healthy meals, spa treatments,
                and accommodation included.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Retreat Value:</span>
                  <span className="line-through">$800</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Retreat Price:</span>
                  <span className="text-green-600">$650</span>
                </div>
              </div>
              <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                Book Retreat
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-2 border-purple-200">
            <div className="bg-purple-500 text-white p-4 text-center">
              <span className="text-sm font-semibold">ROMANTIC</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Honeymoon Package</h3>
              <p className="text-gray-600 mb-4">
                Romantic suite, champagne, couples massage, and candlelight
                dinner for two.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Package Value:</span>
                  <span className="line-through">$600</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Package Price:</span>
                  <span className="text-green-600">$450</span>
                </div>
              </div>
              <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
                Book Package
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-2 border-yellow-200">
            <div className="bg-yellow-500 text-white p-4 text-center">
              <span className="text-sm font-semibold">FAMILY</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Family Fun Package</h3>
              <p className="text-gray-600 mb-4">
                Family room, kids activities, family meals, and entertainment
                for the whole family.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Package Value:</span>
                  <span className="line-through">$400</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Package Price:</span>
                  <span className="text-green-600">$320</span>
                </div>
              </div>
              <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
                Book Package
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border-2 border-indigo-200">
            <div className="bg-indigo-500 text-white p-4 text-center">
              <span className="text-sm font-semibold">LONG STAY</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Extended Stay</h3>
              <p className="text-gray-600 mb-4">
                Stay 7+ nights and get 20% off your entire stay. Perfect for
                longer getaways!
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">7+ nights:</span>
                  <span className="text-green-600">20% OFF</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Minimum:</span>
                  <span>7 nights</span>
                </div>
              </div>
              <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600">
                Book Extended Stay
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact us to create a custom package tailored to your specific
            needs and preferences.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Contact Us for Custom Package
          </button>
        </div>
      </div>
    </Layout>
  );
}
