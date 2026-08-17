function BookingSummary({
  selectedSeats,
  fare,
  onContinue,
}) {
  const subtotal = selectedSeats.length * fare;
  const gst = subtotal * 0.05;
  const total = subtotal + gst;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-5">

      <h2 className="text-2xl font-bold mb-6">
        Booking Summary
      </h2>

      <div className="space-y-3">

        <p>
          <strong>Selected Seats:</strong>{" "}
          {selectedSeats.length
            ? selectedSeats.join(", ")
            : "None"}
        </p>

        <p>
          <strong>Passengers:</strong>{" "}
          {selectedSeats.length}
        </p>

        <p>
          <strong>Fare / Seat:</strong> ₹{fare}
        </p>

        <hr />

        <p>
          <strong>Subtotal:</strong> ₹{subtotal}
        </p>

        <p>
          <strong>GST (5%):</strong> ₹{gst.toFixed(2)}
        </p>

        <h3 className="text-3xl font-bold text-blue-700">
          ₹{total.toFixed(2)}
        </h3>

        <button
          disabled={selectedSeats.length === 0}
          onClick={onContinue}
          className={`w-full py-3 rounded-xl text-white font-semibold ${
            selectedSeats.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-700 hover:bg-blue-800"
          }`}
        >
          Continue
        </button>

      </div>
    </div>
  );
}

export default BookingSummary;