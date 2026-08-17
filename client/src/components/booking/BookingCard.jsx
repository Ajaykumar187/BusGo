import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { cancelBooking } from "../../api/bookingApi";
import Modal from "../common/Modal";
import Badge from "../common/Badge";

const statusColor = (status) => {
  if (status === "Confirmed" || status === "Paid") return "success";
  if (status === "Cancelled") return "danger";
  return "warning";
};

function BookingCard({ booking, refreshBookings }) {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [cancelling, setCancelling] = useState(false);

  const handleCancel = async () => {
    setCancelling(true);

    try {
      await cancelBooking(booking._id);

      toast.success("Booking cancelled successfully.");

      setShowConfirm(false);
      refreshBookings();
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Could not cancel booking."
      );
    } finally {
      setCancelling(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex justify-between items-start flex-wrap gap-4">

        <div>

          <h2 className="text-2xl font-bold">
            {booking.bus?.busName}
          </h2>

          <p className="text-gray-500">
            {booking.bus?.source} → {booking.bus?.destination}
          </p>

          <p className="mt-2">
            Seats: {booking.selectedSeats?.join(", ")}
          </p>

          <p>
            Amount: ₹{booking.totalAmount}
          </p>

          <div className="mt-2 flex gap-2">
            <Badge color={statusColor(booking.paymentStatus)}>
              Payment: {booking.paymentStatus}
            </Badge>

            <Badge color={statusColor(booking.bookingStatus)}>
              Booking: {booking.bookingStatus}
            </Badge>
          </div>

        </div>

        <div className="flex flex-col gap-3">

          <button
            onClick={() =>
              navigate(`/ticket/${booking._id}`)
            }
            className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg transition-colors"
          >
            View Ticket
          </button>

          {booking.bookingStatus !== "Cancelled" && (
            <button
              onClick={() => setShowConfirm(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition-colors"
            >
              Cancel
            </button>
          )}

        </div>

      </div>

      <Modal
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        title="Cancel Booking"
      >
        <p className="text-gray-600 mb-6">
          Are you sure you want to cancel this booking? This action cannot be undone.
        </p>

        <div className="flex gap-3">

          <button
            onClick={() => setShowConfirm(false)}
            className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50"
          >
            Keep Booking
          </button>

          <button
            onClick={handleCancel}
            disabled={cancelling}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg disabled:opacity-60"
          >
            {cancelling ? "Cancelling..." : "Yes, Cancel"}
          </button>

        </div>
      </Modal>

    </div>
  );
}

export default BookingCard;
