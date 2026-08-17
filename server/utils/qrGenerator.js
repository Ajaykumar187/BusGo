import QRCode from "qrcode";

const generateQRCode = async (booking) => {
  const qrData = JSON.stringify({
    bookingId: booking.bookingId,
    passengerCount: booking.passengers.length,
    bus: booking.bus.busName,
    route: `${booking.bus.source} → ${booking.bus.destination}`,
    seats: booking.selectedSeats,
    amount: booking.totalAmount,
  });

  return await QRCode.toDataURL(qrData);
};

export default generateQRCode;