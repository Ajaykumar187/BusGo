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
    <section className="py-20 page-wash">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="glass-light rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-ember flex justify-center mb-5">
                {item.icon}
              </div>

              <h2 className="font-display text-4xl font-bold text-ink">
                {item.number}
              </h2>

              <p className="text-ink/60 mt-2">
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