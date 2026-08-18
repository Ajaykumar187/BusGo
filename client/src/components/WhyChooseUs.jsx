import {
  FaBus,
  FaShieldAlt,
  FaCreditCard,
  FaHeadset,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaBus size={40} />,
      title: "5000+ Routes",
      desc: "Travel across India with thousands of routes.",
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Safe Journey",
      desc: "Verified buses with professional operators.",
    },
    {
      icon: <FaCreditCard size={40} />,
      title: "Secure Payment",
      desc: "Fast and secure online payment gateway.",
    },
    {
      icon: <FaHeadset size={40} />,
      title: "24/7 Support",
      desc: "Our support team is always available.",
    },
  ];

  return (
    <section className="bg-mist/60 py-20 mt-10">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="font-display text-4xl font-bold text-center mb-14 text-ink">
          Why Choose BusGo?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="glass-light rounded-2xl p-8 text-center hover:-translate-y-2 transition"
            >
              <div className="text-ember flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="font-display text-xl font-bold mb-3 text-ink">
                {item.title}
              </h3>

              <p className="text-ink/60">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;