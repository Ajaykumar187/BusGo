import express from "express";

import {
  addBus,
  getBuses,
  getBusById,
  updateBus,
  deleteBus,
} from "../controllers/busController.js";

import {
  getAllBookings,
  cancelBooking,
} from "../controllers/bookingController.js";

import {
  getAllUsers,
  deleteUser,
} from "../controllers/userController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import { busValidator } from "../validators/busValidators.js";
import validate from "../middleware/validate.js";

const router = express.Router();

// All admin routes require login + admin role
router.use(authMiddleware, adminMiddleware);

// Buses
router.get("/buses", getBuses);
router.post("/buses", busValidator, validate, addBus);
router.get("/buses/:id", getBusById);
router.put("/buses/:id", busValidator, validate, updateBus);
router.delete("/buses/:id", deleteBus);

// Bookings
router.get("/bookings", getAllBookings);
router.put("/bookings/:id/cancel", cancelBooking);

// Users
router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);

export default router;
