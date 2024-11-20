import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;

export const getAvocados = async () => {
  try {
    const response = await axios.get(base_url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error getting avocados: ${error}`);
  }
};

export const deleteAvocado = async (id: string) => {
  try {
    const response = await axios.delete(`${base_url}/${id}`);
    console.log(`Avocado deleted id: ${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting avocado id: ${id}`);
  }
};

export const createAvocado = async (
  name: string,
  price: number,
  description: string,
  image: string
) => {
  try {
    const response = await axios.post(base_url, {
      name,
      price,
      description,
      image,
    });
    console.log(`Avocado created successfully.`);
    return response.data;
  } catch (error) {
    console.error(`Error creating avocado: ${error}`);
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
    console.log(`Avocado with ID ${id} updated successfully.`);
    return response.data;
  } catch (error) {
    console.error(`Error updating avocado with ID ${id}:`, error);
  }
};

// updateAvocado(
//   "87dc32b4-7e95-4c17-a298-5c57146842da",
//   "updated Hass Avocado",
//   2.0,
//   "A rich and creamy avocado.",
//   "image_url"
// );
//getAvocados();
//deleteAvocado("7f80ba08-abf8-4688-ab2a-aa7cb9ae393c");
