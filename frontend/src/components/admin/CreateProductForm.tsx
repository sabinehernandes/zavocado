import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-5">
      <div>
        <label htmlFor="name" className="block font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
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
          {...register("price", { required: true })}
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
          {...register("description", { required: true })}
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
          {...register("image", { required: true })}
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
  );
}
