import { FaStar, FaBusAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function BusCard({ bus }) {
  const navigate = useNavigate();

  return (
    <div className="glass-light rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all">

      <div className="p-6">

        <div className="flex items-start justify-between mb-4">

          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-dusk to-ember text-white shrink-0">
              <FaBusAlt size={18} />
            </span>

            <div>
              <h2 className="text-lg font-bold text-ink">
                {bus.busName}
              </h2>

              <p className="text-ink/50 text-sm">
                {bus.operator} • {bus.busType}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm shrink-0">
            <FaStar className="text-amber-400" />
            <span className="font-semibold">{bus.rating || "—"}</span>
          </div>

        </div>

        <div className="flex items-center justify-between font-mono">

          <div>
            <p className="text-xl font-semibold text-ink">
              {bus.departureTime}
            </p>
            <p className="text-xs text-ink/50 mt-0.5">
              {bus.source}
            </p>
          </div>

          <div className="flex-1 flex items-center px-4">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent" />
            <span className="text-xs text-ink/40 px-2 whitespace-nowrap">
              {bus.journeyDuration}
            </span>
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-ink/20 to-transparent" />
          </div>

          <div className="text-right">
            <p className="text-xl font-semibold text-ink">
              {bus.arrivalTime}
            </p>
            <p className="text-xs text-ink/50 mt-0.5">
              {bus.destination}
            </p>
          </div>

        </div>

        <div className="mt-6 flex justify-between items-center">

          <div>
            <p className="text-xs text-ink/40">Starting from</p>
            <span className="font-display font-bold text-2xl text-ember">
              ₹{bus.fare}
            </span>
          </div>

          <button
            onClick={() => navigate(`/buses/${bus._id}`)}
            className="ember-glow bg-gradient-to-r from-ember to-ember-light text-white px-6 py-3 rounded-xl font-semibold"
          >
            Book Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default BusCard;
