import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function BusCard({ bus }) {

  const navigate = useNavigate();

  return (

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      <img
        src={
          bus.image ||
          "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957"
        }
        alt={bus.busName}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h2 className="text-xl font-bold">

          {bus.busName}

        </h2>

        <p className="text-gray-500">

          {bus.operator}

        </p>

        <div className="mt-5 flex justify-between">

          <div>

            <h3 className="font-semibold">

              {bus.source}

            </h3>

            <p>{bus.departureTime}</p>

          </div>

          <div className="text-center">

            →

          </div>

          <div>

            <h3 className="font-semibold">

              {bus.destination}

            </h3>

            <p>{bus.arrivalTime}</p>

          </div>

        </div>

        <div className="mt-5 flex justify-between items-center">

          <div className="flex items-center gap-2">

            <FaStar className="text-yellow-500"/>

            {bus.rating}

          </div>

          <div>

            <span className="font-bold text-green-600">

              ₹{bus.fare}

            </span>

          </div>

        </div>

        <button

          onClick={()=>navigate(`/buses/${bus._id}`)}

          className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl"

        >

          Book Now

        </button>

      </div>

    </div>

  );

}

export default BusCard;