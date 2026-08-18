function BookingSummary({
  selectedSeats,
  fare,
  onContinue,
}) {
  const subtotal = selectedSeats.length * fare;
  const gst = subtotal * 0.05;
  const total = subtotal + gst;

  return (
    <div className="glass-light rounded-2xl p-6 sticky top-24">

      <h2 className="font-display text-2xl font-bold mb-6 text-ink">
        Booking Summary
      </h2>

      <div className="space-y-3 text-ink/70">

        <p>
          <strong className="text-ink">Selected Seats:</strong>{" "}
          <span className="font-mono">
            {selectedSeats.length
              ? selectedSeats.join(", ")
              : "None"}
          </span>
        </p>

        <p>
          <strong className="text-ink">Passengers:</strong>{" "}
          {selectedSeats.length}
        </p>

        <p>
          <strong className="text-ink">Fare / Seat:</strong> ₹{fare}
        </p>

        <hr className="border-ink/10" />

        <p>
          <strong className="text-ink">Subtotal:</strong> ₹{subtotal}
        </p>

        <p>
          <strong className="text-ink">GST (5%):</strong> ₹{gst.toFixed(2)}
        </p>

        <h3 className="font-display text-3xl font-bold text-ember">
          ₹{total.toFixed(2)}
        </h3>

        <button
          disabled={selectedSeats.length === 0}
          onClick={onContinue}
          className={`w-full py-3 rounded-xl text-white font-semibold transition-colors ${
            selectedSeats.length === 0
              ? "bg-ink/20 cursor-not-allowed"
              : "ember-glow bg-gradient-to-r from-ember to-ember-light"
          }`}
        >
          Continue
        </button>

      </div>
    </div>
  );
}

export default BookingSummary;
