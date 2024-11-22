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
      setName("");
      setPrice(0);
      setDescription("");
      setImage("");
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
      <Toaster toastOptions={{ duration: 7000 }} />
      <form
        onSubmit={handleSubmit}
        className="space-y-4 mt-5 text-stone-600 border-2 border-gray-200 rounded-xl p-4 shadow-md"
      >
        <div className="border-0 border-gray-900/10">
          <label htmlFor="name" className="block font-bold text-base">
            Name
          </label>
          <div className="flex border rounded-[5px] shadow-sm mt-3">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block border-0 flex-1 rounded-[5px] bg-transparent py-1.5 pl-1 text-gray-900 focus:ring-2 focus:ring-lime-700/50"
            />
          </div>
        </div>
        <div>
          <label htmlFor="price" className="block font-bold text-base">
            Price
          </label>
          <div className="flex border rounded-[5px] shadow-sm mt-3">
            <input
              type="string"
              id="price"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value ? Number(e.target.value) : 0)
              }
              required
              className="block border-0 flex-1 rounded-[5px] bg-transparent py-1.5 pl-1 text-gray-900 focus:ring-2 focus:ring-lime-700/50"
            />
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block font-bold text-base">
            Description
          </label>
          <div className="flex border rounded-[5px] shadow-sm mt-3">
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="block h-40 border-0 flex-1 rounded-[5px] bg-transparent py-1.5 pl-1 focus:ring-2 focus:ring-lime-700/50"
            />
          </div>
        </div>
        <div>
          <label htmlFor="image" className="block font-bold text-base">
            Image
          </label>
          <div className="flex border-0 rounded-[5px] mt-3">
            <input
              type="file"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              className="block border-0 flex-1 rounded-[5px] bg-transparent py-1.5 pl-1 text-stone-600 focus:outline-none
                      file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm
                      file:font-semibold file:bg-lime-500/20 file:text-lime-700 hover:file:bg-lime-600/40"
            />
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-lime-700/70 text-white rounded hover:bg-lime-900/70 min-w-40"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
