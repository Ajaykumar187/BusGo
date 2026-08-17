import PDFDocument from "pdfkit";

const generateTicket = (booking, qrCode, res) => {
  const doc = new PDFDocument({
    margin: 40,
    size: "A4",
  });

  res.setHeader("Content-Type", "application/pdf");

  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${booking.bookingId}.pdf`
  );

  doc.pipe(res);

  // Title
  doc
    .fontSize(26)
    .fillColor("#2563eb")
    .text("BusGo Ticket", {
      align: "center",
    });

  doc.moveDown();

  doc
    .fontSize(18)
    .fillColor("black")
    .text(`Booking ID: ${booking.bookingId}`);

  doc.text(`Bus: ${booking.bus.busName}`);
  doc.text(
    `Route: ${booking.bus.source} → ${booking.bus.destination}`
  );

  doc.text(
    `Departure: ${booking.bus.departureTime}`
  );

  doc.text(
    `Arrival: ${booking.bus.arrivalTime}`
  );

  doc.text(
    `Seats: ${booking.selectedSeats.join(", ")}`
  );

  doc.text(
    `Passengers: ${booking.passengers.length}`
  );

  doc.text(
    `Amount Paid: ₹${booking.totalAmount}`
  );

  doc.text(
    `Payment Status: ${booking.paymentStatus}`
  );

  doc.moveDown();

  // Passenger Details
  doc.fontSize(18).text("Passenger Details");

  booking.passengers.forEach((passenger, index) => {
    doc.text(
      `${index + 1}. ${passenger.name} | Age: ${passenger.age} | Gender: ${passenger.gender} | Seat: ${passenger.seatNumber}`
    );
  });

  doc.moveDown();

  // QR Code
  if (qrCode) {
    doc
      .fontSize(18)
      .text("QR Code", {
        align: "center",
      });

    doc.image(qrCode, {
      fit: [150, 150],
      align: "center",
    });
  }

  doc.moveDown();

  doc
    .fontSize(12)
    .fillColor("gray")
    .text(
      "Thank you for choosing BusGo. Have a safe journey!",
      {
        align: "center",
      }
    );

  doc.end();
};

export default generateTicket;