import { FaBusAlt, FaDownload } from "react-icons/fa";
import toast from "react-hot-toast";

import { downloadTicket } from "../../api/ticketApi";

function TicketCard({ booking }) {
  if (!booking) return null;

  const handleDownload = async () => {
    try {
      const blob = await downloadTicket(booking._id);

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${booking.bookingId || booking._id}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      toast.error("Could not download ticket. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-dashed border-gray-300">

      <div className="bg-blue-700 text-white p-6 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <FaBusAlt size={28} />

          <div>
            <h2 className="text-xl font-bold">BusGo</h2>
            <p className="text-blue-100 text-sm">E-Ticket</p>
          </div>
        </div>

        <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
          {booking.bookingStatus}
        </span>

      </div>

      <div className="p-6 space-y-4">

        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <p className="text-sm text-gray-500">Booking ID</p>
            <p className="font-semibold">{booking.bookingId || booking._id}</p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">Journey Date</p>
            <p className="font-semibold">
              {new Date(booking.journeyDate).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Bus</p>
            <p className="font-semibold">{booking.bus?.busName}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Route</p>
            <p className="font-semibold">
              {booking.bus?.source} → {booking.bus?.destination}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Departure</p>
            <p className="font-semibold">{booking.bus?.departureTime}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Seats</p>
            <p className="font-semibold">
              {booking.selectedSeats?.join(", ")}
            </p>
          </div>
        </div>

        <div className="border-t pt-4">
          <p className="text-sm text-gray-500 mb-2">Passengers</p>

          <div className="space-y-1">
            {booking.passengers?.map((p, index) => (
              <p key={index} className="text-sm">
                {p.name} • Seat {p.seatNumber} • {p.age} yrs • {p.gender}
              </p>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center border-t pt-4">
          <div>
            <p className="text-sm text-gray-500">Amount Paid</p>
            <p className="text-2xl font-bold text-green-600">
              ₹{booking.totalAmount}
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-3 rounded-xl transition-colors"
          >
            <FaDownload />
            Download PDF
          </button>
        </div>

      </div>

    </div>
  );
}

export default TicketCard;
