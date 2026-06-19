function LearningOutcomes() {
  const outcomes = [
    {
      icon: "🤖",
      title: "AI Fundamentals",
      description:
        "Understand the core concepts of Artificial Intelligence and how it powers modern technology.",
    },
    {
      icon: "⚙️",
      title: "Robotics Basics",
      description:
        "Learn how robots work, interact with sensors, and perform automated tasks.",
    },
    {
      icon: "📡",
      title: "Sensors & Automation",
      description:
        "Explore sensors, automation systems, and their real-world applications.",
    },
    {
      icon: "🚀",
      title: "Hands-on Projects",
      description:
        "Build exciting mini AI and robotics projects throughout the workshop.",
    },
    {
      icon: "🧩",
      title: "Problem Solving",
      description:
        "Develop logical thinking, creativity, and analytical skills through practical challenges.",
    },
    {
      icon: "🏆",
      title: "Certificate of Completion",
      description:
        "Receive a certificate after successfully completing the workshop.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Learning Outcomes
        </h2>

        <p className="text-center text-gray-600 mb-12">
          By the end of this workshop, students will gain practical knowledge
          and hands-on experience in AI and Robotics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, index) => (
            <div
              key={index}
              className="
                bg-gray-50
                p-6
                rounded-2xl
                shadow-md
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="text-4xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningOutcomes;