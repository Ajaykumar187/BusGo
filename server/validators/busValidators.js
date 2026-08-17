import { body } from "express-validator";

export const busValidator = [
  body("busName").trim().notEmpty().withMessage("Bus name is required"),

  body("busNumber").trim().notEmpty().withMessage("Bus number is required"),

  body("operator").trim().notEmpty().withMessage("Operator name is required"),

  body("busType").trim().notEmpty().withMessage("Bus type is required"),

  body("source").trim().notEmpty().withMessage("Source city is required"),

  body("destination")
    .trim()
    .notEmpty()
    .withMessage("Destination city is required")
    .custom((value, { req }) => {
      if (
        value.trim().toLowerCase() === req.body.source?.trim().toLowerCase()
      ) {
        throw new Error("Source and destination cannot be the same");
      }
      return true;
    }),

  body("departureTime").trim().notEmpty().withMessage("Departure time is required"),

  body("arrivalTime").trim().notEmpty().withMessage("Arrival time is required"),

  body("fare")
    .notEmpty()
    .withMessage("Fare is required")
    .isFloat({ min: 1 })
    .withMessage("Fare must be a positive number"),

  body("totalSeats")
    .optional()
    .isInt({ min: 1, max: 60 })
    .withMessage("Total seats must be between 1 and 60"),
];
