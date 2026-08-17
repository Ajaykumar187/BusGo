const TABS = ["All", "AC", "Non AC", "Sleeper", "Seater"];

function BusFilter({ activeFilter, setActiveFilter }) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveFilter(tab)}
          className={`px-5 py-2 rounded-full font-medium transition-colors ${
            activeFilter === tab
              ? "bg-blue-700 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100 shadow"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default BusFilter;
