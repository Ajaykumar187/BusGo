function PaymentSummary({ fare, passengers, selectedSeats, onPay }) {
  const passengerCount = passengers?.length || selectedSeats?.length || 0;
  const totalAmount = fare ? fare * (selectedSeats?.length || 1) : 0;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">

      <h2 className="text-2xl font-bold border-b pb-4">
        Payment Summary
      </h2>

      <div className="space-y-3">

        <div className="flex justify-between text-gray-600">
          <span>Selected Seats</span>
          <span className="font-medium text-gray-900">
            {selectedSeats?.join(", ") || "-"}
          </span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Passengers</span>
          <span className="font-medium text-gray-900">
            {passengerCount}
          </span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Fare per Seat</span>
          <span className="font-medium text-gray-900">
            ₹{fare}
          </span>
        </div>

        <div className="flex justify-between text-xl font-bold border-t pt-4">
          <span>Total Amount</span>
          <span className="text-blue-600">₹{totalAmount}</span>
        </div>

      </div>

      <button
        onClick={() => onPay(totalAmount)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
      >
        Pay ₹{totalAmount}
      </button>

    </div>
  );
}

export default PaymentSummary;
