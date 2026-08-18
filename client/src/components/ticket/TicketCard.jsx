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
    <div className="glass-light rounded-2xl overflow-hidden border border-dashed border-ink/15">

      <div className="hero-gradient text-white p-6 flex items-center justify-between relative overflow-hidden">

        <div className="flex items-center gap-3 relative z-10">
          <FaBusAlt size={28} className="text-ember-light" />

          <div>
            <h2 className="font-display text-xl font-bold">BusGo</h2>
            <p className="text-white/60 text-sm">E-Ticket</p>
          </div>
        </div>

        <span className="bg-white/15 px-3 py-1 rounded-full text-sm font-semibold relative z-10">
          {booking.bookingStatus}
        </span>

      </div>

      <div className="p-6 space-y-4">

        <div className="flex justify-between items-center border-b border-ink/10 pb-4">
          <div>
            <p className="text-sm text-ink/50">Booking ID</p>
            <p className="font-mono font-semibold text-ink">{booking.bookingId || booking._id}</p>
          </div>

          <div className="text-right">
            <p className="text-sm text-ink/50">Journey Date</p>
            <p className="font-semibold text-ink">
              {new Date(booking.journeyDate).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-ink/50">Bus</p>
            <p className="font-semibold text-ink">{booking.bus?.busName}</p>
          </div>

          <div>
            <p className="text-sm text-ink/50">Route</p>
            <p className="font-semibold text-ink">
              {booking.bus?.source} → {booking.bus?.destination}
            </p>
          </div>

          <div>
            <p className="text-sm text-ink/50">Departure</p>
            <p className="font-semibold text-ink">{booking.bus?.departureTime}</p>
          </div>

          <div>
            <p className="text-sm text-ink/50">Seats</p>
            <p className="font-mono font-semibold text-ink">
              {booking.selectedSeats?.join(", ")}
            </p>
          </div>
        </div>

        <div className="border-t border-ink/10 pt-4">
          <p className="text-sm text-ink/50 mb-2">Passengers</p>

          <div className="space-y-1">
            {booking.passengers?.map((p, index) => (
              <p key={index} className="text-sm text-ink/70">
                {p.name} • Seat {p.seatNumber} • {p.age} yrs • {p.gender}
              </p>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-ink/10 pt-4">
          <div>
            <p className="text-sm text-ink/50">Amount Paid</p>
            <p className="text-2xl font-bold text-emerald-600">
              ₹{booking.totalAmount}
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="ember-glow flex items-center gap-2 bg-gradient-to-r from-ember to-ember-light text-white px-5 py-3 rounded-xl transition-colors"
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
