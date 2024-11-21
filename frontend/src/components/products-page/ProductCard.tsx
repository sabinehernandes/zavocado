import React from "react";
import toast, { Toaster } from "react-hot-toast";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: number;
  description: string;
}

const handleBuy = () => {
  console.log("Buying avocados...");
  toast.success("Avocados are on their way! 🥑");
};

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  name,
  price,
  description,
}) => {
  const fullImageUrl = `${import.meta.env.VITE_IMAGE_BASE_URL}/${imageUrl}`;

  return (
    <>
      <Toaster toastOptions={{ duration: 7000 }} />
      <div className="flex border border-zinc-200 rounded-xl bg-white p-4 w-96 h-80">
        <div className="w-32 h-32 flex-shrink-0 flex items-center">
          <img src={fullImageUrl} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 pl-4 flex flex-col justify-between bg-white">
          <div>
            <h1 className="text-xl font-bold bg-white">{name}</h1>
            <p className="text-lg text-gray-700 bg-white">
              €{price.toFixed(2)}
            </p>
            <p className="text-gray-600 bg-white">{description}</p>
          </div>
          <div className="mt-2 bg-white">
            <label htmlFor="quantity" className="mr-2 bg-white">
              Quantity (kg)
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              className="border border-zinc-200 rounded p-1 w-full bg-white"
            />
          </div>
          <button
            onClick={() => handleBuy()}
            className="mt-4 px-4 py-2 bg-lime-700/70 text-white rounded hover:bg-lime-900/70 w-full"
          >
            Buy
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
