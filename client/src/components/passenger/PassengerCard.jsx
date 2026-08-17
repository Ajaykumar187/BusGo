function PassengerCard({
  index,
  seat,
  passenger,
  handleChange,
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">

      <h2 className="text-2xl font-bold mb-5">
        Passenger {index + 1} (Seat {seat})
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <input
          type="text"
          placeholder="Full Name"
          value={passenger.name}
          onChange={(e) =>
            handleChange(index, "name", e.target.value)
          }
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Age"
          value={passenger.age}
          onChange={(e) =>
            handleChange(index, "age", e.target.value)
          }
          className="border rounded-lg p-3"
        />

        <select
          value={passenger.gender}
          onChange={(e) =>
            handleChange(index, "gender", e.target.value)
          }
          className="border rounded-lg p-3"
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

      </div>

    </div>
  );
}

export default PassengerCard;