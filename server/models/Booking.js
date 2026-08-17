import mongoose from "mongoose";

const passengerSchema = new mongoose.Schema(
  {
    seatNumber: {
      type: Number,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const bookingSchema = new mongoose.Schema(
  {
    bookingId: {
      type: String,
      unique: true,
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    bus: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bus",
      required: true,
    },

    journeyDate: {
      type: Date,
      required: true,
    },

    passengers: [passengerSchema],

    selectedSeats: [
      {
        type: Number,
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentStatus: {
    type:String,

    enum:[
        "Pending",
        "Paid",
        "Failed"
    ],

    default:"Pending"
},

    bookingStatus: {
      type: String,
      enum: [
        "Pending",
        "Confirmed",
        "Cancelled"
      ],
      default: "Pending"
    },
},
  {
    timestamps: true,
  }
);

export default mongoose.model("Booking", bookingSchema);