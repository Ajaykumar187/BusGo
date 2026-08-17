import { adminCancelBooking } from "../../api/adminApi";

function BookingTable({ bookings, refresh }) {

  const handleCancel = async (id) => {

    const confirmCancel = window.confirm(
      "Cancel this booking?"
    );

    if (!confirmCancel) return;

    try {

      await adminCancelBooking(id);

      alert("Booking cancelled.");

      refresh();

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      <table className="w-full">

        <thead className="bg-blue-700 text-white">

          <tr>

            <th className="p-4">Booking ID</th>

            <th className="p-4">Passenger</th>

            <th className="p-4">Bus</th>

            <th className="p-4">Seats</th>

            <th className="p-4">Amount</th>

            <th className="p-4">Payment</th>

            <th className="p-4">Status</th>

            <th className="p-4">Action</th>

          </tr>

        </thead>

        <tbody>

          {bookings.map((booking) => (

            <tr
              key={booking._id}
              className="border-b"
            >

              <td className="p-4">

                {booking.bookingId}

              </td>

              <td className="p-4">

                {booking.passengers[0]?.name}

              </td>

              <td className="p-4">

                {booking.bus.busName}

              </td>

              <td className="p-4">

                {booking.selectedSeats.join(", ")}

              </td>

              <td className="p-4">

                ₹{booking.totalAmount}

              </td>

              <td className="p-4">

                {booking.paymentStatus}

              </td>

              <td className="p-4">

                {booking.bookingStatus}

              </td>

              <td className="p-4">

                <button
                  onClick={() =>
                    handleCancel(booking._id)
                  }
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default BookingTable;