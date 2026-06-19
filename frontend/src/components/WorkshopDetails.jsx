import {
  FaUsers,
  FaClock,
  FaLaptop,
  FaRupeeSign,
  FaCalendarAlt,
} from "react-icons/fa";

function WorkshopDetails() {
  const details = [
    {
      icon: <FaUsers />,
      title: "Age Group",
      value: "8–14 Years",
    },
    {
      icon: <FaClock />,
      title: "Duration",
      value: "4 Weeks",
    },
    {
      icon: <FaLaptop />,
      title: "Mode",
      value: "Online",
    },
    {
      icon: <FaRupeeSign />,
      title: "Fee",
      value: "₹2,999",
      color: "text-green-600",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Start Date",
      value: "15 July 2026",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Workshop Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {details.map((detail, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                p-8
                text-center
              "
            >
              <div className="text-3xl text-blue-600 mb-4 flex justify-center">
                {detail.icon}
              </div>

              <h3 className="text-gray-500 mb-2">
                {detail.title}
              </h3>

              <p
                className={`text-xl font-bold ${
                  detail.color || "text-black"
                }`}
              >
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkshopDetails;