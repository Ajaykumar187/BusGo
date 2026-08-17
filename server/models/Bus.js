import mongoose from "mongoose";

// Seat Schema
const seatSchema = new mongoose.Schema(
  {
    seatNumber: {
      type: Number,
      required: true,
    },

    seatType: {
      type: String,
      enum: ["Window", "Middle", "Aisle"],
      default: "Window",
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "None"],
      default: "None",
    },

    isBooked: {
      type: Boolean,
      default: false,
    },

    bookedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { _id: false }
);

// Bus Schema
const busSchema = new mongoose.Schema(
  {
    busName: {
      type: String,
      required: true,
      trim: true,
    },

    busNumber: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    operator: {
      type: String,
      required: true,
      trim: true,
    },

    busType: {
      type: String,
      enum: [
        "AC Sleeper",
        "Non AC Sleeper",
        "AC Seater",
        "Non AC Seater",
        "Volvo",
        "Luxury",
      ],
      required: true,
    },

    source: {
      type: String,
      required: true,
      trim: true,
    },

    destination: {
      type: String,
      required: true,
      trim: true,
    },

    departureTime: {
      type: String,
      required: true,
    },

    arrivalTime: {
      type: String,
      required: true,
    },

    journeyDuration: {
      type: String,
    },

    totalSeats: {
      type: Number,
      default: 40,
    },

    availableSeats: {
      type: Number,
      default: 40,
    },

    fare: {
      type: Number,
      required: true,
      min: 0,
    },

    seats: [
  {
    seatNumber: Number,
    isBooked: {
      type: Boolean,
      default: false,
    },
  },
],

    amenities: [
      {
        type: String,
      },
    ],

    boardingPoints: [
      {
        type: String,
      },
    ],

    droppingPoints: [
      {
        type: String,
      },
    ],

    image: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      default: 4.5,
      min: 0,
      max: 5,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Bus", busSchema);