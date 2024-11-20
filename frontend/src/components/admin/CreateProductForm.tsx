import { createAvocado } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

interface IFormInput {
  name: string;
  price: number;
  description: string;
  image: FileList;
}

export default function CreateProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const queryClient = useQueryClient();

  const createAvocadoMutation = useMutation({
    mutationFn: createAvocado,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["avocados"] });
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && price && description && image) {
      createAvocadoMutation.mutate({
        name,
        price: Number(price),
        description,
        image,
      });
    }
  };

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit} className="space-y-4 mt-5">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="price" className="block font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value ? Number(e.target.value) : 0)
            }
            className="mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full h-12 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="image" className="block font-medium text-gray-700">
            Image
          </label>
          <input
            type="file"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1 block w-full h-auto border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </>
  );
}
