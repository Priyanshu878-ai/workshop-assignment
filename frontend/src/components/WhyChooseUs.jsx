function WhyChooseUs() {
  const features = [
    {
      icon: "🚀",
      title: "Hands-on Projects",
      description:
        "Students learn by building real AI and robotics projects.",
    },
    {
      icon: "👨‍🏫",
      title: "Expert Mentors",
      description:
        "Guidance from experienced instructors throughout the workshop.",
    },
    {
      icon: "🏆",
      title: "Certificate",
      description:
        "Receive a certificate upon successful completion.",
    },
    {
      icon: "🤖",
      title: "Future-Ready Skills",
      description:
        "Explore technologies shaping the future of innovation.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose This Workshop?
        </h2>

        <p className="text-center text-gray-600 mb-12">
          A carefully designed program that combines learning, creativity,
          and practical experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                bg-white
                p-6
                rounded-2xl
                shadow-md
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                text-center
              "
            >
              <div className="text-4xl mb-4">
                {feature.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;