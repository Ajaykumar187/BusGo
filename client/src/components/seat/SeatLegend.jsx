function SeatLegend() {
  return (
    <div className="flex justify-center gap-8 mt-8">

      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-white border-2 border-green-500 rounded"></div>
        <span>Available</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-blue-600 rounded"></div>
        <span>Selected</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-red-500 rounded"></div>
        <span>Booked</span>
      </div>

    </div>
  );
}

export default SeatLegend;