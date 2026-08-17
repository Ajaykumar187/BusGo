import {
  FaWifi,
  FaChargingStation,
  FaSnowflake,
  FaStar,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function BusCard({ bus }) {
  const navigate = useNavigate();

  const duration =
    bus.duration ||
    `${bus.departureTime} - ${bus.arrivalTime}`;

  const seatsLeft =
    bus.availableSeats ??
    (bus.seats
      ? bus.seats.filter((seat) => !seat.isBooked).length
      : 40);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      <div className="grid lg:grid-cols-5">

        {/* Bus Image */}

        <div className="relative">

          <img
            src={
              bus.image ||
              "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop"
            }
            alt={bus.busName}
            className="w-full h-full object-cover min-h-60"
          />

          <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">

            <FaHeart className="text-red-500" />

          </button>

        </div>

        {/* Bus Details */}

        <div className="lg:col-span-4 p-6">

          {/* Top */}

          <div className="flex flex-col lg:flex-row justify-between gap-4">

            <div>

              <h2 className="text-2xl font-bold">

                {bus.busName}

              </h2>

              <p className="text-gray-500">

                {bus.operator}

              </p>

            </div>

            <div className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg h-fit">

              <FaStar />

              <span>

                {bus.rating || 4.5}

              </span>

            </div>

          </div>

          {/* Route */}

          <div className="grid grid-cols-3 items-center mt-8">

            <div>

              <h3 className="text-2xl font-bold">

                {bus.departureTime}

              </h3>

              <p className="text-gray-500">

                {bus.source}

              </p>

            </div>

            <div className="text-center">

              <p className="text-gray-500 mb-2">

                {duration}

              </p>

              <FaArrowRight
                className="mx-auto text-blue-600"
                size={22}
              />

            </div>

            <div className="text-right">

              <h3 className="text-2xl font-bold">

                {bus.arrivalTime}

              </h3>

              <p className="text-gray-500">

                {bus.destination}

              </p>

            </div>

          </div>

          {/* Amenities */}

          <div className="flex flex-wrap gap-4 mt-8 text-gray-600">

            <div className="flex items-center gap-2">

              <FaWifi />

              WiFi

            </div>

            <div className="flex items-center gap-2">

              <FaChargingStation />

              Charging

            </div>

            <div className="flex items-center gap-2">

              <FaSnowflake />

              AC

            </div>

          </div>

          {/* Bottom */}

          <div className="flex flex-col lg:flex-row justify-between items-center mt-8 border-t pt-6">

            <div>

              <p className="text-gray-500">

                Seats Left

              </p>

              <h3 className="text-xl font-bold text-green-600">

                {seatsLeft}

              </h3>

            </div>

            <div className="text-center">

              <p className="text-gray-500">

                Starting From

              </p>

              <h2 className="text-3xl font-bold text-blue-700">

                ₹{bus.fare}

              </h2>

            </div>

            <button
              onClick={() => navigate(`/buses/${bus._id}`)}
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-xl font-semibold"
            >
              View Seats
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BusCard;