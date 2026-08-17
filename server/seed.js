import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import Bus from "./models/Bus.js";
import User from "./models/User.js";
import generateSeats from "./utils/generateSeats.js";

dotenv.config();

const buses = [
  {
    busName: "BusGo Volvo Sleeper",
    busNumber: "BG1001",
    operator: "BusGo Travels",
    busType: "AC Sleeper",
    source: "Delhi",
    destination: "Jaipur",
    departureTime: "22:00",
    arrivalTime: "05:00",
    journeyDuration: "7h",
    totalSeats: 40,
    availableSeats: 40,
    fare: 899,
    amenities: ["WiFi", "Charging Point", "Blanket", "Water Bottle"],
    boardingPoints: ["Kashmere Gate", "Dhaula Kuan", "Rajokri"],
    droppingPoints: ["Jaipur Bus Stand", "Vaishali Nagar"],
    rating: 4.6,
    totalReviews: 132,
    status: "Active",
  },
  {
    busName: "BusGo Scania Luxury",
    busNumber: "BG1002",
    operator: "Shree Travels",
    busType: "Volvo",
    source: "Lucknow",
    destination: "Agra",
    departureTime: "21:30",
    arrivalTime: "04:30",
    journeyDuration: "7h",
    totalSeats: 40,
    availableSeats: 40,
    fare: 1099,
    amenities: ["WiFi", "Charging Point", "Movie", "Blanket"],
    boardingPoints: ["Alambagh", "Charbagh"],
    droppingPoints: ["Idgah Bus Stand", "ISBT Agra"],
    rating: 4.9,
    totalReviews: 210,
    status: "Active",
  },
  {
    busName: "BusGo Mercedes Express",
    busNumber: "BG1003",
    operator: "Patna Express",
    busType: "AC Seater",
    source: "Patna",
    destination: "Ranchi",
    departureTime: "09:00",
    arrivalTime: "16:00",
    journeyDuration: "7h",
    totalSeats: 40,
    availableSeats: 40,
    fare: 799,
    amenities: ["Charging Point", "Water Bottle"],
    boardingPoints: ["Patna Junction", "Danapur"],
    droppingPoints: ["Ranchi Bus Stand"],
    rating: 4.7,
    totalReviews: 98,
    status: "Active",
  },
  {
    busName: "BusGo City Connect",
    busNumber: "BG1004",
    operator: "Mumbai Pune Travels",
    busType: "Non AC Seater",
    source: "Mumbai",
    destination: "Pune",
    departureTime: "07:00",
    arrivalTime: "10:30",
    journeyDuration: "3h 30m",
    totalSeats: 40,
    availableSeats: 40,
    fare: 399,
    amenities: ["Charging Point"],
    boardingPoints: ["Dadar", "Borivali"],
    droppingPoints: ["Swargate", "Shivajinagar"],
    rating: 4.5,
    totalReviews: 64,
    status: "Active",
  },
  {
    busName: "BusGo South Star",
    busNumber: "BG1005",
    operator: "South Star Travels",
    busType: "AC Sleeper",
    source: "Bangalore",
    destination: "Hyderabad",
    departureTime: "20:00",
    arrivalTime: "06:00",
    journeyDuration: "10h",
    totalSeats: 40,
    availableSeats: 40,
    fare: 1299,
    amenities: ["WiFi", "Charging Point", "Blanket", "Water Bottle"],
    boardingPoints: ["Majestic", "Electronic City"],
    droppingPoints: ["Mehdipatnam", "Secunderabad"],
    rating: 4.8,
    totalReviews: 177,
    status: "Active",
  },
  {
    busName: "BusGo Royal Cruiser",
    busNumber: "BG1006",
    operator: "Royal Travels",
    busType: "Luxury",
    source: "Jaipur",
    destination: "Delhi",
    departureTime: "23:00",
    arrivalTime: "06:00",
    journeyDuration: "7h",
    totalSeats: 40,
    availableSeats: 40,
    fare: 949,
    amenities: ["WiFi", "Charging Point", "Blanket", "Movie"],
    boardingPoints: ["Sindhi Camp", "Vaishali Nagar"],
    droppingPoints: ["Kashmere Gate", "Dhaula Kuan"],
    rating: 4.6,
    totalReviews: 87,
    status: "Active",
  },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    // --- Seed Buses ---
    await Bus.deleteMany({});

    const busesWithSeats = buses.map((bus) => ({
      ...bus,
      seats: generateSeats(bus.totalSeats),
    }));

    await Bus.insertMany(busesWithSeats);

    console.log(`🚌 ${busesWithSeats.length} buses added`);

    // --- Seed Admin User ---
    const adminEmail = "admin@busgo.com";
    const adminPassword = "Admin@123";

    const existingAdmin = await User.findOne({ email: adminEmail });

    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);

      await User.create({
        name: "BusGo Admin",
        email: adminEmail,
        password: hashedPassword,
        phone: "9999999999",
        role: "admin",
      });

      console.log(`👤 Admin user created -> email: ${adminEmail} | password: ${adminPassword}`);
    } else {
      console.log("👤 Admin user already exists, skipped");
    }

    console.log("🎉 Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
};

seedDatabase();
