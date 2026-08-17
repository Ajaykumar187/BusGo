import express from "express";
import {
  getBuses,
  searchBus,
  getBusById,
  getBusSeats
} from "../controllers/busController.js";

const router = express.Router();

// Public read-only routes.
// Bus creation/update/deletion lives under /api/admin/buses (auth + admin required).
router.get("/search", searchBus);
router.get("/", getBuses);
router.get("/:id/seats", getBusSeats);
router.get("/:id", getBusById);

export default router;
