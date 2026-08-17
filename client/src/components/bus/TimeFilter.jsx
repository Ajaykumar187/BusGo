function TimeFilter({
  departure,
  setDeparture,
}) {
  const timings = [
    "Morning",
    "Afternoon",
    "Evening",
    "Night",
  ];

  return (
    <div className="space-y-3">

      {timings.map((time) => (

        <label
          key={time}
          className="flex items-center gap-3 cursor-pointer"
        >

          <input
            type="radio"
            name="departure"
            checked={departure === time}
            onChange={() =>
              setDeparture(time)
            }
          />

          {time}

        </label>

      ))}

    </div>
  );
}

export default TimeFilter;