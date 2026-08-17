function BookingInfo({ booking }) {
  return (
    <div className="mt-10 space-y-4">

      <h2 className="text-2xl font-bold">
        Booking Details
      </h2>

      <p>
        <strong>Booking ID:</strong> {booking.bookingId}
      </p>

      <p>
        <strong>Bus:</strong> {booking.bus.busName}
      </p>

      <p>
        <strong>Route:</strong>{" "}
        {booking.bus.source} → {booking.bus.destination}
      </p>

      <p>
        <strong>Seats:</strong>{" "}
        {booking.selectedSeats.join(", ")}
      </p>

      <p>
        <strong>Total Paid:</strong> ₹{booking.totalAmount}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        <span className="text-green-600 font-bold">
          {booking.paymentStatus}
        </span>
      </p>

    </div>
  );
}

export default BookingInfo;