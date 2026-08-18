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
    <div className="glass-light rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">

      <img
        src={route.image}
        alt={route.from}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">

        <div className="flex items-center justify-between font-mono">

          <h2 className="font-sans text-xl font-bold text-ink">
            {route.from}
          </h2>

          <FaArrowRight className="text-ember" />

          <h2 className="font-sans text-xl font-bold text-ink">
            {route.to}
          </h2>

        </div>

        <div className="mt-5 space-y-2">

          <p className="text-emerald-600 font-semibold">
            Starting From ₹{route.price}
          </p>

          <p className="text-ink/60 flex items-center gap-2">
            <FaBusAlt />
            {route.buses} Buses Daily
          </p>

        </div>

        <button
          onClick={handleSearch}
          className="ember-glow mt-6 w-full bg-gradient-to-r from-ember to-ember-light text-white py-3 rounded-xl font-semibold"
        >
          View Buses
        </button>

      </div>

    </div>
  );
}

export default RouteCard;