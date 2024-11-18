import ProductCard from "./ProductCard";

export default function ProductsPage() {
  return (
    <>
      <main className="bg-slate-100 text-center h-96 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-5xl font-bold text-stone-600 tracking-wide bg-slate-100">
          Enjoy our finest avocado selection
        </h1>
      </main>
      <section className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3 gap-3 m-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </>
  );
}
