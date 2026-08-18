import LightStreaks from "../common/LightStreaks";
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
    <section className="relative overflow-hidden hero-gradient pb-28 pt-24 md:pt-32">

      <LightStreaks count={8} />

      {/* Content */}

      <div className="relative z-10 px-5">

        <div className="text-center text-white max-w-3xl mx-auto">

          <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase glass-dark text-ember-light">
            Trusted by 2M+ travellers
          </span>

          <h1 className="font-display text-5xl md:text-6xl font-bold mb-5 leading-tight">
            Your journey,{" "}
            <span className="bg-gradient-to-r from-ember to-route bg-clip-text text-transparent">
              on time.
            </span>
          </h1>

          <p className="text-lg text-white/70 mb-14">
            Search, compare and book bus tickets across India — safe, secure and affordable.
          </p>

        </div>

        <SearchSection />

        <div className="mt-12 flex flex-wrap justify-center gap-3">

          {cities.map((city) => (
            <span
              key={city}
              className="glass-dark text-white/90 px-5 py-2 rounded-full text-sm font-medium"
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
