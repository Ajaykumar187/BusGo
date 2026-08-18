import {
  FaBusAlt,
  FaShieldAlt,
  FaCreditCard,
  FaHeadset,
} from "react-icons/fa";

function Features() {

  const features = [
    {
      icon: <FaBusAlt size={40} />,
      title: "5000+ Bus Routes",
      description:
        "Travel across India with thousands of daily bus routes.",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Safe Journey",
      description:
        "Verified operators with live tracking and secure travel.",
    },
    {
      icon: <FaCreditCard size={40} />,
      title: "Secure Payments",
      description:
        "100% secure online payments with multiple payment methods.",
    },
    {
      icon: <FaHeadset size={40} />,
      title: "24×7 Support",
      description:
        "Customer support available anytime during your journey.",
    },
  ];

  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="font-display text-4xl font-bold text-ink">
            Why Choose BusGo?
          </h2>

          <p className="text-ink/60 mt-4">
            Trusted by thousands of travelers every day.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="glass-light rounded-2xl hover:shadow-xl p-8 text-center transition-all duration-300 hover:-translate-y-1"
            >

              <div className="text-ember flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="font-display text-xl font-bold mb-3 text-ink">
                {item.title}
              </h3>

              <p className="text-ink/60">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;