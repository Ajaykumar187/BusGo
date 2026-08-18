import { useState } from "react";

function BusForm({ onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    busName: initialData.busName || "",
    operator: initialData.operator || "",
    source: initialData.source || "",
    destination: initialData.destination || "",
    departureTime: initialData.departureTime || "",
    arrivalTime: initialData.arrivalTime || "",
    fare: initialData.fare || "",
    busType: initialData.busType || "",
    rating: initialData.rating || 4.5,
    totalSeats: initialData.totalSeats || 40,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-light rounded-2xl p-8"
    >
      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          name="busName"
          placeholder="Bus Name"
          value={formData.busName}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="operator"
          placeholder="Operator"
          value={formData.operator}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="source"
          placeholder="Source"
          value={formData.source}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formData.destination}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="time"
          name="departureTime"
          value={formData.departureTime}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="time"
          name="arrivalTime"
          value={formData.arrivalTime}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="number"
          name="fare"
          placeholder="Fare"
          value={formData.fare}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="busType"
          placeholder="Bus Type (AC Sleeper, Volvo...)"
          value={formData.busType}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          step="0.1"
          min="0"
          max="5"
          value={formData.rating}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <input
          type="number"
          name="totalSeats"
          placeholder="Total Seats"
          value={formData.totalSeats}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

      </div>

      <button
        type="submit"
        className="mt-8 ember-glow bg-gradient-to-r from-ember to-ember-light text-white px-8 py-3 rounded-lg"
      >
        Save Bus
      </button>
    </form>
  );
}

export default BusForm;