function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-12 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Side */}
          <div className="flex-1">
            <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-medium mb-4">
            🚀 Limited Seats Available
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI & Robotics Summer Workshop
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              A hands-on 4-week online workshop designed for children aged 8–14
              to explore Artificial Intelligence, Robotics, Automation, and
               Real-World Problem Solving.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition"
              >
                Enroll Now
              </a>

              <button className="border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                View Curriculum
              </button>
            </div>

            <div className="flex flex-wrap gap-6 mt-8 text-sm font-medium text-gray-600">
              <span>⭐ 500+ Students</span>
              <span>🏆 Certificate Included</span>
              <span>🤖 Hands-on Projects</span>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <span className="bg-white px-4 py-2 rounded-lg shadow">
                Age 8–14
              </span>

              <span className="bg-white px-4 py-2 rounded-lg shadow">
                4 Weeks
              </span>

              <span className="bg-white px-4 py-2 rounded-lg shadow">
                Online
              </span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm text-center">
              <div className="text-7xl mb-4">🤖</div>

              <h2 className="text-2xl font-bold mb-6">
                AI & Robotics
              </h2>

              <p className="text-gray-500 mb-6">
                Summer Workshop 2026
              </p>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm">
                    Start Date
                  </p>
                  <p className="font-semibold">
                    15 July 2026
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Fee
                  </p>
                  <p className="font-semibold text-green-600">
                    ₹2,999
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Mode
                  </p>
                  <p className="font-semibold">
                    Online
                  </p>
                  
                </div>
                
              </div>
              <div className="mt-6 bg-blue-50 p-3 rounded-lg">
  <p className="text-sm text-blue-700 font-medium">
    🎯 Beginner Friendly
  </p>
</div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;