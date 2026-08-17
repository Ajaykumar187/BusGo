function Seat({ seat, selected, onSelect }) {

  const seatClass = seat.isBooked
    ? "bg-red-500 text-white"
    : selected
    ? "bg-blue-600 text-white"
    : "bg-green-500 text-white hover:bg-green-600";

  return (
    <button
      disabled={seat.isBooked}
      onClick={() => onSelect(seat)}
      className={`
        w-14
        h-14
        rounded-t-xl
        rounded-b-md
        font-bold
        shadow
        transition
        ${seatClass}
      `}
    >
      {seat.seatNumber}
    </button>
  );
}

export default Seat;