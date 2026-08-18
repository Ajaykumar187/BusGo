import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";

import { getBooking } from "../api/bookingApi";
import TicketCard from "../components/ticket/TicketCard";

function Ticket() {
  const { id } = useParams();

  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBooking();
  }, [id]);

  const loadBooking = async () => {
    try {
      const data = await getBooking(id);
      setBooking(data.booking);
    } catch (error) {
      toast.error("Could not load this ticket.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-24 text-2xl font-semibold">
        Loading Ticket...
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="text-center mt-24 space-y-4">
        <p className="text-2xl font-semibold">Ticket not found.</p>
        <Link to="/my-bookings" className="text-ember font-semibold">
          Back to My Bookings
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4">

      <div className="max-w-2xl mx-auto">

        <TicketCard booking={booking} />

        <div className="text-center mt-6">
          <Link to="/my-bookings" className="text-ember font-semibold">
            ← Back to My Bookings
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Ticket;
