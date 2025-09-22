import Layout from "@/components/Layout";

export default function Retreats() {
  return (
    <Layout title="Wellness Retreats">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Wellness & Retreat Programs
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Rejuvenate your mind, body, and soul with our carefully designed
            wellness retreats and programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6">Mindfulness Retreat</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 className="font-semibold">Daily Meditation Sessions</h4>
                  <p className="text-gray-600">
                    Guided meditation and mindfulness practices
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 className="font-semibold">Yoga & Movement</h4>
                  <p className="text-gray-600">
                    Gentle yoga and mindful movement classes
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 className="font-semibold">Nature Immersion</h4>
                  <p className="text-gray-600">
                    Forest bathing and outdoor mindfulness
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 className="font-semibold">Healthy Cuisine</h4>
                  <p className="text-gray-600">Nutritious, plant-based meals</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-blue-600">
                $450/3 days
              </span>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Book Retreat
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6">Adventure Wellness</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 className="font-semibold">Rock Climbing</h4>
                  <p className="text-gray-600">
                    Build strength and confidence on the rocks
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 className="font-semibold">Mountain Biking</h4>
                  <p className="text-gray-600">
                    Explore trails and build endurance
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 className="font-semibold">Team Building</h4>
                  <p className="text-gray-600">
                    Group challenges and trust exercises
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-500 mr-3 mt-1">✓</span>
                <div>
                  <h4 className="font-semibold">Recovery Sessions</h4>
                  <p className="text-gray-600">
                    Massage therapy and relaxation techniques
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-blue-600">
                $650/5 days
              </span>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Book Retreat
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Custom Retreat Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-semibold mb-2">Corporate Retreats</h4>
              <p className="text-gray-600">
                Team building and leadership development programs for businesses
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h4 className="text-lg font-semibold mb-2">Family Retreats</h4>
              <p className="text-gray-600">
                Bonding experiences and activities designed for all family
                members
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💑</div>
              <h4 className="text-lg font-semibold mb-2">Couples Retreats</h4>
              <p className="text-gray-600">
                Romantic getaways with wellness activities and intimate
                experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
