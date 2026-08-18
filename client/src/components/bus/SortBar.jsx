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
    <div className="glass-light rounded-2xl p-5 mb-6">

      <div className="flex items-center gap-3 mb-4">

        <FaSortAmountDown className="text-ember" />

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
                ? "bg-gradient-to-r from-ember to-ember-light text-white border-transparent"
                : "bg-white/60 hover:bg-white text-ink/70 border-ink/10"
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