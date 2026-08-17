import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import PopularRoutes from "../components/home/PopularRoutes";
import Features from "../components/home/Features";
import Testimonials from "../components/home/Testimonials";
import AppDownload from "../components/home/AppDownload";

import FeaturedBuses from "../components/bus/FeaturedBuses";

function Home() {
  return (
    <>
      <Hero />

      <Stats />

      <PopularRoutes />

      <FeaturedBuses />

      <Features />

      <Testimonials />

      <AppDownload />
    </>
  );
}

export default Home;