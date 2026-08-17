import express from "express";
import { downloadTicket } from "../controllers/ticketController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/:id",
  authMiddleware,
  downloadTicket
);

export default router;