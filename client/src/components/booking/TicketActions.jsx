import { useNavigate } from "react-router-dom";
import { downloadTicket } from "../../api/ticketApi";

function TicketActions({ booking }) {
  const navigate = useNavigate();

  const handleDownload = async () => {
    try {
      const pdf = await downloadTicket(booking._id);

      const url = window.URL.createObjectURL(pdf);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${booking.bookingId}.pdf`;

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Failed to download ticket.");
    }
  };

  return (
    <div className="flex flex-wrap gap-4 mt-8">

      <button
        onClick={handleDownload}
        className="ember-glow bg-gradient-to-r from-ember to-ember-light text-white px-6 py-3 rounded-xl"
      >
        Download Ticket
      </button>

      <button
        onClick={() => navigate("/my-bookings")}
        className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl"
      >
        My Bookings
      </button>

      <button
        onClick={() => navigate("/")}
        className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-xl"
      >
        Home
      </button>

    </div>
  );
}

export default TicketActions;