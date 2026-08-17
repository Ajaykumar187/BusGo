import { useNavigate } from "react-router-dom";

function BusDetailsCard({ bus }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-3xl font-bold text-blue-700 mb-4">
        {bus?.busName}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <p>
          <strong>Operator:</strong> {bus?.operator}
        </p>

        <p>
          <strong>Bus Type:</strong> {bus?.busType}
        </p>

        <p>
          <strong>From:</strong> {bus?.source}
        </p>

        <p>
          <strong>To:</strong> {bus?.destination}
        </p>

        <p>
          <strong>Departure:</strong> {bus?.departureTime}
        </p>

        <p>
          <strong>Arrival:</strong> {bus?.arrivalTime}
        </p>

        <p>
          <strong>Available Seats:</strong> {bus?.availableSeats}
        </p>

        <p className="text-xl font-bold text-green-600">
          ₹ {bus?.fare}
        </p>

      </div>

      <button
        onClick={() => navigate(`/booking/${bus?._id}`)}
        disabled={!bus?.availableSeats}
        className={`mt-6 w-full py-3 rounded-xl text-white font-semibold transition-colors ${
          !bus?.availableSeats
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-700 hover:bg-blue-800"
        }`}
      >
        {bus?.availableSeats ? "Book Now" : "Sold Out"}
      </button>

    </div>
  );
}

export default BusDetailsCard;
