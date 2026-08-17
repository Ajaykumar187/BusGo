import { FaMapMarkerAlt, FaCalendarAlt, FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <section className="-mt-20 relative z-20 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center mb-8">
          Search Your Bus
        </h2>

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-5">

          <div>
            <label className="font-semibold">From</label>

            <div className="flex items-center border rounded-lg mt-2 px-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <input
                type="text"
                placeholder="Delhi"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold">To</label>

            <div className="flex items-center border rounded-lg mt-2 px-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <input
                type="text"
                placeholder="Jaipur"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold">
              Journey Date
            </label>

            <div className="flex items-center border rounded-lg mt-2 px-3">
              <FaCalendarAlt className="text-blue-600" />
              <input
                type="date"
                className="w-full p-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold">
              Bus Type
            </label>

            <select className="w-full border rounded-lg mt-2 p-3">
              <option>All</option>
              <option>AC Sleeper</option>
              <option>Non AC</option>
              <option>Volvo</option>
            </select>
          </div>

          <div className="flex items-end">
            <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-lg w-full py-3 flex items-center justify-center gap-2">
              <FaSearch />
              Search Bus
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SearchBar;