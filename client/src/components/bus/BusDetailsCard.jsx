import { useNavigate } from "react-router-dom";

function BusDetailsCard({ bus }) {
  const navigate = useNavigate();

  return (
    <div className="glass-light rounded-2xl p-6">

      <h2 className="font-display text-3xl font-bold text-ink mb-4">
        {bus?.busName}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-ink/70">

        <p>
          <strong className="text-ink">Operator:</strong> {bus?.operator}
        </p>

        <p>
          <strong className="text-ink">Bus Type:</strong> {bus?.busType}
        </p>

        <p>
          <strong className="text-ink">From:</strong> {bus?.source}
        </p>

        <p>
          <strong className="text-ink">To:</strong> {bus?.destination}
        </p>

        <p>
          <strong className="text-ink">Departure:</strong> {bus?.departureTime}
        </p>

        <p>
          <strong className="text-ink">Arrival:</strong> {bus?.arrivalTime}
        </p>

        <p>
          <strong className="text-ink">Available Seats:</strong> {bus?.availableSeats}
        </p>

        <p className="text-xl font-bold text-ember">
          ₹ {bus?.fare}
        </p>

      </div>

      <button
        onClick={() => navigate(`/booking/${bus?._id}`)}
        disabled={!bus?.availableSeats}
        className={`mt-6 w-full py-3 rounded-xl text-white font-semibold transition-colors ${
          !bus?.availableSeats
            ? "bg-ink/20 cursor-not-allowed"
            : "ember-glow bg-gradient-to-r from-ember to-ember-light"
        }`}
      >
        {bus?.availableSeats ? "Book Now" : "Sold Out"}
      </button>

    </div>
  );
}

export default BusDetailsCard;
