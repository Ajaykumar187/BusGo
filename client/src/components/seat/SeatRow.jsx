import Seat from "./Seat";

function SeatRow({ row, selectedSeats, toggleSeat }) {
  const leftSeats = row.slice(0, 2);
  const rightSeats = row.slice(2, 4);

  return (
    <div className="flex justify-center items-center gap-4 mb-4">

      <div className="flex gap-3">
        {leftSeats.map((seat) => (
          <Seat
            key={seat.seatNumber}
            seat={seat}
            selected={selectedSeats.includes(seat.seatNumber)}
            onSelect={toggleSeat}
          />
        ))}
      </div>

      <div className="w-12"></div>

      <div className="flex gap-3">
        {rightSeats.map((seat) => (
          <Seat
            key={seat.seatNumber}
            seat={seat}
            selected={selectedSeats.includes(seat.seatNumber)}
            onSelect={toggleSeat}
          />
        ))}
      </div>

    </div>
  );
}

export default SeatRow;
