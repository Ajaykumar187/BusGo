import heroImage from "../../assets/images/hero-bus.jpg";
import SearchSection from "./SearchSection";

function Hero() {
  const cities = [
    "Delhi",
    "Mumbai",
    "Jaipur",
    "Patna",
    "Lucknow",
    "Bangalore",
  ];

  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}

      <div className="relative z-10 flex flex-col justify-center h-full">

        <div className="text-center text-white px-5">

          <h1 className="text-5xl md:text-6xl font-bold mb-5">
            Book Bus Tickets Across India
          </h1>

          <p className="text-xl text-gray-200 mb-12">
            Safe, Secure and Affordable Bus Travel
          </p>

        </div>

        <SearchSection />

        <div className="mt-10 flex flex-wrap justify-center gap-3">

          {cities.map((city) => (
            <span
              key={city}
              className="bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full border border-white/30"
            >
              {city}
            </span>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Hero;