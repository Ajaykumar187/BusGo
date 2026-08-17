import express from "express";

import {
  createBooking,
  getMyBookings,
  getBooking,
  cancelBooking,
} from "../controllers/bookingController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import { bookingValidator } from "../validators/bookingValidators.js";
import validate from "../middleware/validate.js";

const router = express.Router();

// Create Booking
router.post("/", authMiddleware, bookingValidator, validate, createBooking);

// Get Logged-in User Bookings
router.get("/", authMiddleware, getMyBookings);

// Get Single Booking
router.get("/:id", authMiddleware, getBooking);

// Cancel Booking
router.put("/:id/cancel", authMiddleware, cancelBooking);

export default router;
