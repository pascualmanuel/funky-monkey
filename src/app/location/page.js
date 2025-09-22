import Layout from "@/components/Layout";

export default function Location() {
  return (
    <Layout title="Our Location">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Discover Our Beautiful Location
          </h2>
          <p className="text-gray-600 mb-6">
            Funkey Monkey is strategically located in one of the most beautiful
            and accessible destinations, offering easy access to nature,
            adventure, and relaxation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Getting Here</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 30 minutes from the nearest airport</li>
                <li>• 15 minutes from the city center</li>
                <li>• Free shuttle service available</li>
                <li>• Ample parking for guests</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Nearby Attractions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• National Park (5 minutes)</li>
                <li>• Beach (10 minutes)</li>
                <li>• Shopping District (15 minutes)</li>
                <li>• Cultural Center (20 minutes)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
