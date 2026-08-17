import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getSeats, getBusById } from "../../api/busApi";

import DriverCabin from "./DriverCabin";
import SeatRow from "./SeatRow";
import SeatLegend from "./SeatLegend";
import BookingSummary from "./BookingSummary";
import BusInfo from "../bus/BusInfo";

function SeatLayout({ busId }) {
  const navigate = useNavigate();

  const [bus, setBus] = useState(null);
  const [seats, setSeats] = useState([]);
  const [fare, setFare] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSeats();
    loadBus();
  }, [busId]);

  const loadBus = async () => {
    try {
      const data = await getBusById(busId);
      setBus(data.bus);
    } catch (error) {
      console.error(error);
    }
  };

  const loadSeats = async () => {
    try {
      const data = await getSeats(busId);

      setSeats(data.seats);
      setFare(data.fare);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleSeat = (seat) => {
    if (seat.isBooked) return;

    if (selectedSeats.includes(seat.seatNumber)) {
      setSelectedSeats(
        selectedSeats.filter((s) => s !== seat.seatNumber)
      );
    } else {
      setSelectedSeats([...selectedSeats, seat.seatNumber]);
    }
  };

  // Convert 40 seats into rows of 4
  const rows = [];

  for (let i = 0; i < seats.length; i += 4) {
    rows.push(seats.slice(i, i + 4));
  }

  const handleContinue = () => {
    navigate("/passenger-details", {
      state: {
        busId,
        selectedSeats,
        fare,
      },
    });
  };

  if (loading) {
    return (
      <div className="text-center text-3xl mt-20">
        Loading Seats...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">

      <div className="max-w-7xl mx-auto">

        <BusInfo bus={bus} />

      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

        {/* Left Side */}

        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8">

          <DriverCabin />

          <div className="border-2 rounded-3xl p-8 bg-gray-50">

            {rows.map((row, index) => (
              <SeatRow
                key={index}
                row={row}
                selectedSeats={selectedSeats}
                toggleSeat={toggleSeat}
              />
            ))}

          </div>

          <SeatLegend />

        </div>

        {/* Right Side */}

        <BookingSummary
          selectedSeats={selectedSeats}
          fare={fare}
          onContinue={handleContinue}
        />

      </div>

    </div>
  );
}

export default SeatLayout;