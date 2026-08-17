import { getAllBuses } from "../api/busApi";

export const fetchFeaturedBuses = async () => {
  try {
    const response = await getAllBuses();

    return response.buses.slice(0, 6);
  } catch (error) {
    console.log(error);

    return [];
  }
};