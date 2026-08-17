import Booking from "../models/Booking.js";
import Bus from "../models/Bus.js";
import generateBookingId from "../utils/generateBookingId.js";

// CREATE BOOKING
export const createBooking = async (req, res) => {
  try {
    const {
      busId,
      journeyDate,
      passengers,
      selectedSeats,
      totalAmount,
    } = req.body;

    // Logged in user
    const userId = req.user.id;

    // Check bus exists
    const bus = await Bus.findById(busId);

    if (!bus) {
      return res.status(404).json({
        success: false,
        message: "Bus not found",
      });
    }

    // Check if any selected seat is already booked
    const alreadyBooked = bus.seats.filter(
      (seat) =>
        selectedSeats.includes(seat.seatNumber) &&
        seat.isBooked
    );

    if (alreadyBooked.length > 0) {
      return res.status(400).json({
        success: false,
        message: "One or more seats are already booked.",
      });
    }

    // Mark seats as booked
    bus.seats.forEach((seat) => {
      if (selectedSeats.includes(seat.seatNumber)) {
        seat.isBooked = true;
      }
    });

    await bus.save();

    // Create booking
    const booking = await Booking.create({
      bookingId: generateBookingId(),
      user: userId,
      bus: busId,
      journeyDate,
      passengers,
      selectedSeats,
      totalAmount,
      paymentStatus: "Pending",
      bookingStatus: "Booked",
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully.",
      booking,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// GET MY BOOKINGS
export const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.user.id,
    })
      .populate("bus")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      bookings,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SINGLE BOOKING
export const getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("bus")
      .populate("user");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.json({
      success: true,
      booking,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// CANCEL BOOKING
export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    booking.bookingStatus = "Cancelled";

    await booking.save();

    // Release seats
    const bus = await Bus.findById(booking.bus);

    if (bus) {
      bus.seats.forEach((seat) => {
        if (booking.selectedSeats.includes(seat.seatNumber)) {
          seat.isBooked = false;
        }
      });

      await bus.save();
    }

    res.json({
      success: true,
      message: "Booking cancelled successfully.",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// GET ALL BOOKINGS (Admin)
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("bus")
      .populate("user", "name email phone")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      bookings,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
