import { useEffect, useState } from "react";

import {
  getMyBookings,
} from "../api/bookingApi";

import BookingCard from "../components/booking/BookingCard";
import EmptyBooking from "../components/booking/EmptyBooking";

function MyBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {

      const data = await getMyBookings();

      setBookings(data.bookings);

    } catch (error) {

      console.log(error);

    }
  };

  if (bookings.length === 0) {
    return <EmptyBooking />;
  }

  return (

    <div className="bg-gray-100 min-h-screen py-10">

      <div className="max-w-6xl mx-auto px-5">

        <h1 className="text-4xl font-bold mb-10">

          My Bookings

        </h1>

        <div className="space-y-6">

          {bookings.map((booking) => (

            <BookingCard
              key={booking._id}
              booking={booking}
              refreshBookings={loadBookings}
            />

          ))}

        </div>

      </div>

    </div>

  );

}

export default MyBookings;