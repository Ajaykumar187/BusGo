import { FaArrowRight, FaBusAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function RouteCard({ route }) {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(
      `/bus-search?from=${route.from}&to=${route.to}`
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      <img
        src={route.image}
        alt={route.from}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-bold">
            {route.from}
          </h2>

          <FaArrowRight className="text-blue-600" />

          <h2 className="text-xl font-bold">
            {route.to}
          </h2>

        </div>

        <div className="mt-5 space-y-2">

          <p className="text-green-600 font-semibold">
            Starting From ₹{route.price}
          </p>

          <p className="text-gray-600 flex items-center gap-2">
            <FaBusAlt />
            {route.buses} Buses Daily
          </p>

        </div>

        <button
          onClick={handleSearch}
          className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl"
        >
          View Buses
        </button>

      </div>

    </div>
  );
}

export default RouteCard;