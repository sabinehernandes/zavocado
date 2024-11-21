import { getAvocados } from "@/services/api";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";

interface Avocado {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductsPage() {
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

  return (
    <>
      <main className="bg-white border-b-lime-700/50 border-b-2 text-center h-96 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-5xl font-bold text-stone-600 tracking-wide">
          Enjoy our finest avocado selection
        </h1>
      </main>
      <h2 className="text-center text-3xl font-light mt-10 text-slate-600">
        Shop here
      </h2>
      <section className="grid m-10 justify-items-center items-center grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 gap-8">
        {avocados?.map((avocado) => (
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
