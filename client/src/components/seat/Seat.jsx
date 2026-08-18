function Seat({ seat, selected, onSelect }) {

  const seatClass = seat.isBooked
    ? "bg-rose-400 text-white cursor-not-allowed"
    : selected
    ? "bg-gradient-to-br from-ember to-ember-light text-white shadow-lg shadow-ember/30"
    : "bg-white border-2 border-emerald-300 text-emerald-700 hover:border-ember hover:text-ember";

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