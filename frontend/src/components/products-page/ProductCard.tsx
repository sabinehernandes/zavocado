import React from "react";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: number;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = (
  {
    // imageUrl,
    // name,
    // price,
    // description,
  }
) => {
  return (
    <div className="flex border border-gray-300 bg-white p-4 rounded-lg w-96 h-80 items-center justify-center">
      <div className="w-32 h-32 flex-shrink-0">
        <img
          src="public/products-page/bacon.jpg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 pl-4 flex flex-col justify-between bg-white">
        <div>
          <h1 className="text-xl font-bold bg-white">Bacon</h1>
          <p className="text-lg text-gray-700 bg-white">$50</p>
          <p className="text-gray-600 bg-white">
            A smoother-skinned variety with thin, light green skin and a milder,
            less buttery flavor.
          </p>
        </div>
        {/* <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-lg text-gray-700">Price: ${price.toFixed(2)}</p>
        <p className="text-gray-600">{description}</p> */}
        <div className="mt-2 bg-white">
          <label htmlFor="quantity" className="mr-2 bg-white">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            defaultValue="1"
            className="border rounded p-1 w-full bg-white"
          />
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full">
          Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
