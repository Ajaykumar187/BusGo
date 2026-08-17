import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const handleSearch = () => {
    if (!formData.source || !formData.destination) {
      alert("Please enter both source and destination.");
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
    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-6xl mx-auto">

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5">

        <input
          type="text"
          name="source"
          placeholder="From"
          value={formData.source}
          onChange={handleChange}
          className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="text"
          name="destination"
          placeholder="To"
          value={formData.destination}
          onChange={handleChange}
          className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-700 hover:bg-blue-800 text-white rounded-xl font-semibold"
        >
          Search Bus
        </button>

      </div>

    </div>
  );
}

export default SearchSection;