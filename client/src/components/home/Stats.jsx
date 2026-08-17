import {
  FaRoute,
  FaBusAlt,
  FaUsers,
  FaHeadset,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaRoute size={40} />,
      number: "12,000+",
      title: "Routes",
    },
    {
      icon: <FaBusAlt size={40} />,
      number: "3,500+",
      title: "Buses",
    },
    {
      icon: <FaUsers size={40} />,
      number: "1 Million+",
      title: "Happy Customers",
    },
    {
      icon: <FaHeadset size={40} />,
      number: "24×7",
      title: "Customer Support",
    },
  ];

  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-blue-700 flex justify-center mb-5">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold text-gray-800">
                {item.number}
              </h2>

              <p className="text-gray-600 mt-2">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;