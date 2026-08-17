import {
  FaSortAmountDown,
  FaMoneyBillWave,
  FaClock,
  FaStar,
} from "react-icons/fa";

function SortBar({ sortBy, setSortBy }) {
  const options = [
    {
      label: "Price",
      value: "price",
      icon: <FaMoneyBillWave />,
    },
    {
      label: "Departure",
      value: "departure",
      icon: <FaClock />,
    },
    {
      label: "Arrival",
      value: "arrival",
      icon: <FaClock />,
    },
    {
      label: "Rating",
      value: "rating",
      icon: <FaStar />,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 mb-6">

      <div className="flex items-center gap-3 mb-4">

        <FaSortAmountDown className="text-blue-600" />

        <h2 className="text-xl font-bold">
          Sort By
        </h2>

      </div>

      <div className="flex flex-wrap gap-3">

        {options.map((item) => (

          <button
            key={item.value}
            onClick={() => setSortBy(item.value)}
            className={`

            px-5 py-2 rounded-full border transition

            ${
              sortBy === item.value
                ? "bg-blue-700 text-white border-blue-700"
                : "bg-white hover:bg-blue-50"
            }

            `}
          >

            <span className="flex items-center gap-2">

              {item.icon}

              {item.label}

            </span>

          </button>

        ))}

      </div>

    </div>
  );
}

export default SortBar;