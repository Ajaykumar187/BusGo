const generateSeats = (totalSeats = 40) => {
  const seats = [];

  for (let i = 1; i <= totalSeats; i++) {
    seats.push({
      seatNumber: i,
      seatType:
        i % 4 === 1 || i % 4 === 0
          ? "Window"
          : "Aisle",
      gender: "None",
      isBooked: false,
      bookedBy: null,
    });
  }

  return seats;
};

export default generateSeats;