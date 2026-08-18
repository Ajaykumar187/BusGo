import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { searchBuses } from "../api/busApi";

import BusHeader from "../components/bus/BusHeader";
import BusCard from "../components/bus/BusCard";
import SortBar from "../components/bus/SortBar";
import FilterSidebar from "../components/bus/FilterSidebar";
import EmptyState from "../components/bus/EmptyState";

function BusSearchResult() {
  const [searchParams] = useSearchParams();

  const from = searchParams.get("from") || "";
  const to = searchParams.get("to") || "";
  const date = searchParams.get("date") || "";

  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [sortBy, setSortBy] = useState("");

  const [filters, setFilters] = useState({
    ac: false,
    sleeper: false,
    volvo: false,
    maxPrice: 10000,
    departure: "",
    rating: 0,
    operators: [],
  });

  useEffect(() => {
    loadBuses();
  }, [from, to]);

  const loadBuses = async () => {
    try {
      setLoading(true);

      const data = await searchBuses(from, to);

      setBuses(data.buses || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBuses = useMemo(() => {
    let result = [...buses];

    // Price Filter
    result = result.filter(
      (bus) => bus.fare <= filters.maxPrice
    );

    // AC Filter
    if (filters.ac) {
      result = result.filter((bus) =>
        bus.busType?.toLowerCase().includes("ac")
      );
    }

    // Sleeper Filter
    if (filters.sleeper) {
      result = result.filter((bus) =>
        bus.busType?.toLowerCase().includes("sleeper")
      );
    }

    // Volvo Filter
    if (filters.volvo) {
      result = result.filter((bus) =>
        bus.busType?.toLowerCase().includes("volvo")
      );
    }

    // Rating Filter
    if (filters.rating > 0) {
      result = result.filter(
        (bus) => bus.rating >= filters.rating
      );
    }

    // Operator Filter
    if (filters.operators?.length > 0) {
      result = result.filter((bus) =>
        filters.operators.includes(bus.operator)
      );
    }

    return result;
  }, [buses, filters]);

  const sortedBuses = useMemo(() => {
    const sorted = [...filteredBuses];

    switch (sortBy) {
      case "price":
        sorted.sort((a, b) => a.fare - b.fare);
        break;

      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;

      case "departure":
        sorted.sort((a, b) =>
          a.departureTime.localeCompare(b.departureTime)
        );
        break;

      case "arrival":
        sorted.sort((a, b) =>
          a.arrivalTime.localeCompare(b.arrivalTime)
        );
        break;

      default:
        break;
    }

    return sorted;
  }, [filteredBuses, sortBy]);

  const operators = useMemo(() => {
    const unique = new Set(buses.map((bus) => bus.operator).filter(Boolean));
    return [...unique];
  }, [buses]);

  if (loading) {
    return (
      <div className="text-center mt-24 text-3xl font-bold">
        Loading Buses...
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10">

      <div className="max-w-7xl mx-auto px-5">

        <BusHeader
          from={from}
          to={to}
          date={date}
          totalBuses={sortedBuses.length}
        />

        <div className="grid lg:grid-cols-4 gap-8">

          {/* Sidebar */}

          <div>

            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              operators={operators}
            />

          </div>

          {/* Bus List */}

          <div className="lg:col-span-3">

            <SortBar
              sortBy={sortBy}
              setSortBy={setSortBy}
            />

            {sortedBuses.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="space-y-6">

                {sortedBuses.map((bus) => (
                  <BusCard
                    key={bus._id}
                    bus={bus}
                  />
                ))}

              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default BusSearchResult;