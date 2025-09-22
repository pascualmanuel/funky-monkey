import Layout from "@/components/Layout";

export default function Rooms() {
  return (
    <Layout title="Our Rooms">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">Luxury Accommodations</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully designed rooms and suites, each offering
            comfort, style, and breathtaking views.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Standard Room Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Standard Room</h3>
              <p className="text-gray-600 mb-4">
                Comfortable and modern room perfect for solo travelers or
                couples.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">
                  $120/night
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Deluxe Room Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Deluxe Room</h3>
              <p className="text-gray-600 mb-4">
                Spacious room with premium amenities and stunning views.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">
                  $180/night
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Suite Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Executive Suite</h3>
              <p className="text-gray-600 mb-4">
                Luxury suite with separate living area and premium services.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">
                  $280/night
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
