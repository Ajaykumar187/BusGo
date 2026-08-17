import Booking from "../models/Booking.js";
import generateTicket from "../utils/generateTicket.js";
import generateQRCode from "../utils/qrGenerator.js";

export const downloadTicket = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("bus");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    // Generate QR Code
    const qrCode = await generateQRCode(booking);

    // Generate PDF Ticket
    generateTicket(booking, qrCode, res);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};