import { body } from "express-validator";

export const bookingValidator = [
  body("busId")
    .notEmpty()
    .withMessage("Bus id is required")
    .isMongoId()
    .withMessage("Invalid bus id"),

  body("journeyDate")
    .notEmpty()
    .withMessage("Journey date is required"),

  body("selectedSeats")
    .isArray({ min: 1 })
    .withMessage("Select at least one seat"),

  body("passengers")
    .isArray({ min: 1 })
    .withMessage("Passenger details are required"),

  body("totalAmount")
    .notEmpty()
    .withMessage("Total amount is required")
    .isFloat({ min: 1 })
    .withMessage("Total amount must be a positive number"),
];
