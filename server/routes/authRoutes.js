import express from "express";
import rateLimit from "express-rate-limit";

import { register, login } from "../controllers/authController.js";
import { registerValidator, loginValidator } from "../validators/authValidators.js";
import validate from "../middleware/validate.js";

const router = express.Router();

// Limit brute-force attempts on auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many attempts, please try again later.",
  },
});

router.post("/register", authLimiter, registerValidator, validate, register);
router.post("/login", authLimiter, loginValidator, validate, login);

export default router;
