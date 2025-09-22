import Layout from "@/components/Layout";

export default function Hotel() {
  return (
    <Layout title="Our Hotel">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            About Funkey Monkey Hotel
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experience luxury and comfort in our beautifully designed hotel,
            featuring world-class amenities and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Hotel Features</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Free Wi-Fi throughout the property
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                24/7 concierge service
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Fitness center and spa
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Multiple dining options
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Swimming pool and outdoor areas
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Business center and meeting rooms
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Dining Options</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">Main Restaurant</h4>
                <p className="text-gray-600">
                  Fine dining with local and international cuisine
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">Poolside Bar & Grill</h4>
                <p className="text-gray-600">
                  Casual dining and refreshing drinks by the pool
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">Coffee Shop</h4>
                <p className="text-gray-600">
                  Fresh coffee, pastries, and light meals
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Guest Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🚗</div>
              <h4 className="font-semibold mb-2">Transportation</h4>
              <p className="text-gray-600">
                Airport shuttle and local transportation services
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🧳</div>
              <h4 className="font-semibold mb-2">Concierge</h4>
              <p className="text-gray-600">
                Personal assistance with bookings and recommendations
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🏃</div>
              <h4 className="font-semibold mb-2">Activities</h4>
              <p className="text-gray-600">
                Organized tours and adventure activities
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
