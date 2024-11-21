import { getAvocados } from "@/services/api";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface Avocado {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductsPage() {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const {
    data: avocados,
    error,
    isLoading,
  } = useQuery<Avocado[]>({
    queryKey: ["avocados"],
    queryFn: getAvocados,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading avocados</p>;

  const sortedAvocados = avocados?.slice().sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <>
      <main className="bg-white bg-lime-700/60 text-center h-96 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-50 tracking-wide">
          Enjoy our finest avocado selection
        </h1>
      </main>
      <h2 className="text-center text-3xl font-semibold mt-10 text-stone-600">
        Shop here
      </h2>
      <div className="flex justify-start my-4 mx-10">
        <button
          onClick={toggleSortOrder}
          className="px-4 py-2 bg-white text-stone-600 font-light"
        >
          ↓ Sort by Price ({sortOrder === "asc" ? "ascending" : "descending"})
        </button>
      </div>
      <section className="grid m-10 font-light  text-stone-600 justify-items-center items-center grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 gap-8">
        {sortedAvocados?.map((avocado) => (
          <ProductCard
            key={avocado.id}
            name={avocado.name}
            price={avocado.price}
            description={avocado.description}
            imageUrl={avocado.image}
          />
        ))}
      </section>
    </>
  );
}
