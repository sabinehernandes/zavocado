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
      <main className="bg-slate-100 text-center h-96 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-5xl font-bold text-stone-600 tracking-wide bg-slate-100">
          Enjoy our finest avocado selection
        </h1>
      </main>
      <section className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 gap-3 m-10">
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
