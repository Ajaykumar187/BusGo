import { useEffect, useState } from "react";

import { getAllBookings } from "../../api/adminApi";

import BookingTable from "../../components/admin/Bookingtable";

function ManageBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {

      const data = await getAllBookings();

      setBookings(data.bookings);

    } catch (error) {

      console.error(error);

    }
  };

  return (

    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">

        Manage Bookings

      </h1>

      <BookingTable
        bookings={bookings}
        refresh={loadBookings}
      />

    </div>

  );

}

export default ManageBookings;