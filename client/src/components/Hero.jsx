import bg from "../assets/images/bg1.jpg";

function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative text-center text-white">
        <h1 className="text-6xl font-bold">
          Book Your Bus Journey
        </h1>

        <p className="mt-4 text-xl">
          Safe • Comfortable • Affordable
        </p>
      </div>
    </div>
  );
}

export default Hero;