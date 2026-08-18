import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

import PaymentSummary from "../components/payment/PaymentSummary";
import { createOrder, verifyPayment } from "../api/paymentApi";
import { useAuth } from "../context/AuthContext";

function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { user } = useAuth();

  // If someone lands here directly (page refresh, back button, bad link)
  // there is no booking to pay for — send them back instead of crashing.
  useEffect(() => {
    if (!state || !state.bookingId) {
      toast.error("No booking found. Please start again.");
      navigate("/", { replace: true });
    }
  }, [state, navigate]);

  if (!state || !state.bookingId) {
    return null;
  }

  const { fare, passengers, selectedSeats, bookingId } = state;

  const handlePayment = async (amount) => {
    if (!window.Razorpay) {
      toast.error(
        "Payment service failed to load. Check your internet connection and try again."
      );
      return;
    }

    if (!import.meta.env.VITE_RAZORPAY_KEY_ID) {
      toast.error(
        "Payment is not configured yet. Please contact support."
      );
      return;
    }

    let order;

    try {
      const response = await createOrder(amount);
      order = response.order;
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
        "Could not start payment. Please try again."
      );
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,

      amount: order.amount,

      currency: order.currency,

      name: "BusGo",

      description: "Bus Ticket Booking",

      order_id: order.id,

      handler: async function (paymentResponse) {
        try {
          await verifyPayment({
            ...paymentResponse,
            bookingId,
          });

          toast.success("Booking Confirmed!");

          navigate(`/booking-success?bookingId=${bookingId}`);
        } catch (error) {
          toast.error(
            error.response?.data?.message ||
            "Payment could not be verified. If money was deducted, contact support."
          );
        }
      },

      modal: {
        ondismiss: function () {
          toast("Payment cancelled.");
        },
      },

      prefill: {
        name: user?.name || "",
        email: user?.email || "",
        contact: user?.phone || "",
      },

      theme: {
        color: "#2563eb",
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.on("payment.failed", function (response) {
      toast.error(
        response.error?.description || "Payment failed. Please try again."
      );
    });

    razorpay.open();
  };

  return (
    <div className="min-h-screen py-10">

      <div className="max-w-4xl mx-auto">

        <PaymentSummary
          fare={fare}
          passengers={passengers}
          selectedSeats={selectedSeats}
          onPay={handlePayment}
        />

      </div>

    </div>
  );
}

export default Payment;
