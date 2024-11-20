import axios from "axios";
import toast from "react-hot-toast";

const base_url = import.meta.env.VITE_BASE_URL;

export const getAvocados = async () => {
  try {
    const response = await axios.get(base_url);
    return response.data;
  } catch (error) {
    toast.error("Error fetching items. Please try again later");
  }
};

export const deleteAvocado = async (id: string) => {
  try {
    const response = await axios.delete(`${base_url}/${id}`);
    toast.success("Item successfully deleted");
    return response.data;
  } catch (error) {
    toast.error("Error deleting item. Please try again later");
  }
};

interface CreateAvocadoParams {
  name: string;
  price: number;
  description: string;
  image: string;
}

export const createAvocado = async ({
  name,
  price,
  description,
  image,
}: CreateAvocadoParams) => {
  try {
    const response = await axios.post(base_url, {
      name,
      price,
      description,
      image,
    });
    toast.success("Item successfully created  🥑");
    return response.data;
  } catch (error) {
    toast.error("Error creating item. Please try again later");
  }
};

export const updateAvocado = async (
  id: string,
  name: string,
  price: number,
  description: string,
  image: string
) => {
  try {
    const response = await axios.put(`${base_url}/${id}`, {
      name,
      price,
      description,
      image,
    });
    toast.success("Item successfully updated 🥑");
    return response.data;
  } catch (error) {
    toast.error("Error updating item. Please try again later");
  }
};
