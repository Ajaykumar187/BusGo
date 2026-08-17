function BusInfo({ bus }) {
  if (!bus) return null;

  return (
    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-6 flex flex-wrap items-center justify-between gap-4">

      <div>
        <h2 className="text-xl font-bold text-blue-800">
          {bus.busName}
        </h2>

        <p className="text-gray-600">
          {bus.operator} • {bus.busType}
        </p>
      </div>

      <div className="text-right">
        <p className="font-semibold text-gray-800">
          {bus.source} → {bus.destination}
        </p>

        <p className="text-gray-600">
          {bus.departureTime} - {bus.arrivalTime}
        </p>
      </div>

    </div>
  );
}

export default BusInfo;
