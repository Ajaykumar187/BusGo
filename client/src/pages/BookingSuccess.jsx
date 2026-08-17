import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getBooking } from "../api/bookingApi";

import BookingInfo from "../components/booking/BookingInfo";
import TicketActions from "../components/booking/TicketActions";
import SuccessAnimation from "../components/booking/SuccessAnimation";

function BookingSuccess() {
  const [searchParams] = useSearchParams();

  const bookingId = searchParams.get("bookingId");

  const [booking, setBooking] = useState(null);

  useEffect(() => {
    loadBooking();
  }, []);

  const loadBooking = async () => {
    try {
      const data = await getBooking(bookingId);
      setBooking(data.booking);
    } catch (error) {
      console.log(error);
    }
  };

  if (!booking) {
    return (
      <h1 className="text-center mt-20 text-3xl">
        Loading...
      </h1>
    );
  }

  return (
    <div className="bg-green-50 min-h-screen py-10">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="text-center">

            <SuccessAnimation />

            <h1 className="text-4xl font-bold mt-5 text-green-700">
              Booking Confirmed
            </h1>

            <p className="mt-3 text-gray-600">
              Thank you for choosing BusGo.
            </p>

          </div>

          <BookingInfo booking={booking} />

          <TicketActions booking={booking} />

        </div>

      </div>

    </div>
  );
}

export default BookingSuccess;