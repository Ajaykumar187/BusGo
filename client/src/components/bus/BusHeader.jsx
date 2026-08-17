import { FaArrowRight, FaCalendarAlt, FaBus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function BusHeader({
  from,
  to,
  date,
  totalBuses,
}) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        {/* Left */}

        <div>

          <div className="flex items-center gap-3">

            <h1 className="text-3xl font-bold">
              {from}
            </h1>

            <FaArrowRight className="text-blue-600" />

            <h1 className="text-3xl font-bold">
              {to}
            </h1>

          </div>

          <div className="flex flex-wrap gap-6 mt-4 text-gray-600">

            <div className="flex items-center gap-2">

              <FaCalendarAlt />

              <span>{date}</span>

            </div>

            <div className="flex items-center gap-2">

              <FaBus />

              <span>{totalBuses} Buses Available</span>

            </div>

          </div>

        </div>

        {/* Right */}

        <button
          onClick={() => navigate("/")}
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl"
        >
          Modify Search
        </button>

      </div>

    </div>
  );
}

export default BusHeader;