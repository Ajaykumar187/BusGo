import api from "./api";

export const getAllBuses = async () => {
  const response = await api.get("/buses");
  return response.data;
};

export const getBusById = async (id) => {
  const response = await api.get(`/buses/${id}`);
  return response.data;
};

export const searchBuses = async (from, to) => {
  const response = await api.get("/buses/search", {
    params: {
      from,
      to,
    },
  });

  return response.data;
};

export const getSeats = async (id) => {
  const response = await api.get(`/buses/${id}/seats`);
  return response.data;
};