import api from "./api";

export const downloadTicket = async (id) => {
  const response = await api.get(
    `/ticket/${id}`,
    {
      responseType: "blob",
    }
  );

  return response.data;
};