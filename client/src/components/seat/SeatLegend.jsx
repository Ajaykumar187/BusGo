function SeatLegend() {
  return (
    <div className="flex justify-center gap-8 mt-8">

      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-white border-2 border-emerald-300 rounded"></div>
        <span className="text-ink/70">Available</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-gradient-to-br from-ember to-ember-light rounded"></div>
        <span className="text-ink/70">Selected</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-rose-400 rounded"></div>
        <span className="text-ink/70">Booked</span>
      </div>

    </div>
  );
}

export default SeatLegend;