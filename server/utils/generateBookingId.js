const generateBookingId = () => {
  const random = Math.floor(
    100000 + Math.random() * 900000
  );

  return `BG${Date.now()}${random}`;
};

export default generateBookingId;