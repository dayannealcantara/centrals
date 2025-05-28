import axios from "axios";
import { Central } from "../types/central";

export const createCentral = async (data: Central) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_URL_SERVICE}/centrals`,
    data,
  );
  return response.data;
};

export const updateCentral = async (data: Central) => {
  const response = await axios.put(
    `${process.env.NEXT_PUBLIC_URL_SERVICE}/centrals/${data.id}`,
    data,
  );
  return response.data;
};

export const getCentrals = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_URL_SERVICE}/centrals`,
  );
  return response.data;
};

export const getModels = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_URL_SERVICE}/models`,
  );
  return response.data;
};

export const deleteCentral = async (id: number) => {
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_URL_SERVICE}/centrals/${id}`,
  );
  return response.data;
};
