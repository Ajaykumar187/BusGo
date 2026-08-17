import { useEffect, useMemo, useState } from "react";

import { getAllBuses } from "../api/busApi";

import BusFilter from "../components/bus/BusFilter";
import BusList from "../components/bus/BusList";

function BusListPage() {
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    loadBuses();
  }, []);

  const loadBuses = async () => {
    try {
      const data = await getAllBuses();
      setBuses(data.buses || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBuses = useMemo(() => {
    if (activeFilter === "All") return buses;

    return buses.filter((bus) =>
      bus.busType?.toLowerCase().includes(activeFilter.toLowerCase())
    );
  }, [buses, activeFilter]);

  return (
    <div className="bg-gray-100 min-h-screen py-10">

      <div className="max-w-7xl mx-auto px-5">

        <h1 className="text-4xl font-bold mb-8">
          All Buses
        </h1>

        <BusFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {loading ? (
          <div className="text-center mt-20 text-2xl font-semibold">
            Loading Buses...
          </div>
        ) : (
          <BusList buses={filteredBuses} />
        )}

      </div>

    </div>
  );
}

export default BusListPage;
