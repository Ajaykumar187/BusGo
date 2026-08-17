import { useEffect, useState } from "react";
import BusCard from "./BusCard";
import { fetchFeaturedBuses } from "../../services/busService";

function FeaturedBuses() {

  const [buses, setBuses] = useState([]);

  useEffect(() => {

    loadBuses();

  }, []);

  const loadBuses = async () => {

    const data = await fetchFeaturedBuses();

    setBuses(data);

  };

  return (

    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold">

            Featured Buses

          </h2>

          <p className="text-gray-500 mt-3">

            Choose from our top-rated buses.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {buses.map((bus) => (

            <BusCard

              key={bus._id}

              bus={bus}

            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default FeaturedBuses;