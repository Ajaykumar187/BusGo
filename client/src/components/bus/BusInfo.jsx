function BusInfo({ bus }) {
  if (!bus) return null;

  return (
    <div className="glass-light rounded-2xl p-5 mb-6 flex flex-wrap items-center justify-between gap-4">

      <div>
        <h2 className="font-display text-xl font-bold text-ink">
          {bus.busName}
        </h2>

        <p className="text-ink/50">
          {bus.operator} • {bus.busType}
        </p>
      </div>

      <div className="text-right font-mono">
        <p className="font-semibold text-ink">
          {bus.source} → {bus.destination}
        </p>

        <p className="text-ink/50">
          {bus.departureTime} - {bus.arrivalTime}
        </p>
      </div>

    </div>
  );
}

export default BusInfo;
