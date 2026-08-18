import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { createBooking } from "../api/bookingApi";
import PassengerForm from "../components/passenger/PassengerForm";

function PassengerDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state || !state.selectedSeats?.length) {
      toast.error("No seats selected. Please start again.");
      navigate("/", { replace: true });
    }
  }, [state, navigate]);

  if (!state || !state.selectedSeats?.length) {
    return null;
  }

  const { busId, selectedSeats, fare } = state;

  const [passengers, setPassengers] = useState(
    selectedSeats.map(() => ({
      name: "",
      age: "",
      gender: "",
    }))
  );

  const handleChange = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    setPassengers(updated);
  };

const handleContinue = async () => {
  const isValid = passengers.every(
    (p) => p.name && p.age && p.gender
  );

  if (!isValid) {
    toast.error("Please fill all passenger details.");
    return;
  }

  try {
    const bookingData = {
      busId,
      passengers: passengers.map((p, index) => ({
        seatNumber: selectedSeats[index],
        name: p.name,
        age: Number(p.age),
        gender: p.gender,
      })),
      selectedSeats,
      totalAmount: fare * selectedSeats.length,
      journeyDate: new Date(),
    };

    const response = await createBooking(bookingData);

    navigate("/payment", {
      state: {
        bookingId: response.booking._id,
        busId,
        selectedSeats,
        passengers,
        fare,
      },
    });

  } catch (error) {
    console.error(error);

    toast.error(
      error.response?.data?.message ||
      "Booking failed"
    );
  }
};

  return (
    <div className="max-w-6xl mx-auto py-10 px-5">

      <h1 className="text-4xl font-bold text-center mb-10">
        Passenger Details
      </h1>

      <PassengerForm
        seats={selectedSeats}
        passengers={passengers}
        handleChange={handleChange}
      />

      <div className="text-right mt-8">
        <button
          onClick={handleContinue}
          className="ember-glow bg-gradient-to-r from-ember to-ember-light text-white px-8 py-3 rounded-xl"
        >
          Continue to Payment
        </button>
      </div>

    </div>
  );
}

export default PassengerDetails;