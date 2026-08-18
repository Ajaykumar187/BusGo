function PaymentSummary({ fare, passengers, selectedSeats, onPay }) {
  const passengerCount = passengers?.length || selectedSeats?.length || 0;
  const totalAmount = fare ? fare * (selectedSeats?.length || 1) : 0;

  return (
    <div className="glass-light rounded-3xl shadow-2xl p-8 space-y-6">

      <h2 className="font-display text-2xl font-bold border-b border-ink/10 pb-4 text-ink">
        Payment Summary
      </h2>

      <div className="space-y-3">

        <div className="flex justify-between text-ink/60">
          <span>Selected Seats</span>
          <span className="font-mono font-medium text-ink">
            {selectedSeats?.join(", ") || "-"}
          </span>
        </div>

        <div className="flex justify-between text-ink/60">
          <span>Passengers</span>
          <span className="font-medium text-ink">
            {passengerCount}
          </span>
        </div>

        <div className="flex justify-between text-ink/60">
          <span>Fare per Seat</span>
          <span className="font-medium text-ink">
            ₹{fare}
          </span>
        </div>

        <div className="flex justify-between text-xl font-bold border-t border-ink/10 pt-4">
          <span className="text-ink">Total Amount</span>
          <span className="text-ember">₹{totalAmount}</span>
        </div>

      </div>

      <button
        onClick={() => onPay(totalAmount)}
        className="ember-glow w-full bg-gradient-to-r from-ember to-ember-light text-white font-semibold py-3 rounded-xl transition-colors"
      >
        Pay ₹{totalAmount}
      </button>

    </div>
  );
}

export default PaymentSummary;
