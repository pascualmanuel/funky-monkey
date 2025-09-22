import Layout from "@/components/Layout";

export default function Activities() {
  return (
    <Layout title="Activities">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Adventure & Activities
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover a wide range of exciting activities and adventures designed
            to create unforgettable memories during your stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white text-4xl">🏔️</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Mountain Hiking</h3>
              <p className="text-gray-600 mb-4">
                Explore scenic mountain trails with experienced guides. Perfect
                for all skill levels.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Duration: 4-6 hours
                </span>
                <span className="font-semibold text-blue-600">$75/person</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <span className="text-white text-4xl">🚣</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">River Rafting</h3>
              <p className="text-gray-600 mb-4">
                Experience thrilling white-water rafting on our local rivers.
                Safety equipment included.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Duration: 3-4 hours
                </span>
                <span className="font-semibold text-blue-600">$95/person</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <span className="text-white text-4xl">🚁</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Helicopter Tours</h3>
              <p className="text-gray-600 mb-4">
                Soar above the landscape and enjoy breathtaking aerial views of
                the surrounding area.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Duration: 1 hour</span>
                <span className="font-semibold text-blue-600">$200/person</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
              <span className="text-white text-4xl">🧘</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Yoga Sessions</h3>
              <p className="text-gray-600 mb-4">
                Relax and rejuvenate with outdoor yoga sessions in beautiful
                natural settings.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Duration: 1 hour</span>
                <span className="font-semibold text-blue-600">$35/person</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
              <span className="text-white text-4xl">🐎</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Horseback Riding</h3>
              <p className="text-gray-600 mb-4">
                Explore the countryside on horseback with guided tours through
                scenic trails.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Duration: 2-3 hours
                </span>
                <span className="font-semibold text-blue-600">$65/person</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center">
              <span className="text-white text-4xl">🔥</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Campfire Evenings</h3>
              <p className="text-gray-600 mb-4">
                Enjoy cozy campfire evenings with storytelling, music, and
                traditional marshmallow roasting.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Duration: 2 hours</span>
                <span className="font-semibold text-blue-600">$25/person</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
