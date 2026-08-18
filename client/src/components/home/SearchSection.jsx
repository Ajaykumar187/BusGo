import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaCalendarAlt, FaExchangeAlt } from "react-icons/fa";
import toast from "react-hot-toast";

function SearchSection() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const swapCities = () => {
    setFormData({
      ...formData,
      source: formData.destination,
      destination: formData.source,
    });
  };

  const handleSearch = () => {
    if (!formData.source || !formData.destination) {
      toast.error("Please enter both source and destination.");
      return;
    }

    const params = new URLSearchParams({
      from: formData.source,
      to: formData.destination,
      date: formData.date,
    });

    navigate(`/bus-search?${params.toString()}`);
  };

  return (
    <div className="glass-light rounded-2xl p-6 max-w-6xl mx-auto shadow-2xl">

      <div className="grid lg:grid-cols-[1fr_auto_1fr_1fr_auto] md:grid-cols-2 gap-4 items-center">

        <div className="relative">
          <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-ember" />
          <input
            type="text"
            name="source"
            placeholder="From"
            value={formData.source}
            onChange={handleChange}
            className="w-full border border-ink/10 bg-white/70 rounded-xl p-4 pl-11 focus:outline-none focus:ring-2 focus:ring-ember"
          />
        </div>

        <button
          type="button"
          onClick={swapCities}
          aria-label="Swap source and destination"
          className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full border border-ink/10 bg-white/70 hover:bg-white text-ink/60 hover:text-ember transition-colors"
        >
          <FaExchangeAlt size={14} />
        </button>

        <div className="relative">
          <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-route" />
          <input
            type="text"
            name="destination"
            placeholder="To"
            value={formData.destination}
            onChange={handleChange}
            className="w-full border border-ink/10 bg-white/70 rounded-xl p-4 pl-11 focus:outline-none focus:ring-2 focus:ring-route"
          />
        </div>

        <div className="relative">
          <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-ink/10 bg-white/70 rounded-xl p-4 pl-11 focus:outline-none focus:ring-2 focus:ring-ember"
          />
        </div>

        <button
          onClick={handleSearch}
          className="ember-glow bg-gradient-to-r from-ember to-ember-light text-white rounded-xl font-semibold px-8 py-4 whitespace-nowrap"
        >
          Search Bus
        </button>

      </div>

    </div>
  );
}

export default SearchSection;
