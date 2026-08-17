import api from "./api";

// Get all buses
export const getAllBuses = async () => {
  const response = await api.get("/admin/buses");
  return response.data;
};

// Add bus
export const addBus = async (busData) => {
  const response = await api.post("/admin/buses", busData);
  return response.data;
};

// Update bus
export const updateBus = async (id, busData) => {
  const response = await api.put(`/admin/buses/${id}`, busData);
  return response.data;
};

// Delete bus
export const deleteBus = async (id) => {
  const response = await api.delete(`/admin/buses/${id}`);
  return response.data;
};

// Get Single Bus
export const getBusById = async (id) => {
  const response = await api.get(`/admin/buses/${id}`);
  return response.data;
};

// Get All Bookings
export const getAllBookings = async () => {
  const response = await api.get("/admin/bookings");
  return response.data;
};

// Cancel Booking
export const adminCancelBooking = async (id) => {
  const response = await api.put(`/admin/bookings/${id}/cancel`);
  return response.data;
};

// Get All Users
export const getAllUsers = async () => {
  const response = await api.get("/admin/users");
  return response.data;
};

// Delete User
export const deleteUser = async (id) => {
  const response = await api.delete(`/admin/users/${id}`);
  return response.data;
};