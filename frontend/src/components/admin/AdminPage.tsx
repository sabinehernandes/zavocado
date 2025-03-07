import { RevenueChart } from "@/components/admin/RevenueChart";
import { ItemsSoldChart } from "./ItemsSoldChart";
import { ProductsList } from "./ProductsList";
import CreateProductForm from "./CreateProductForm";

export default function AdminPage() {
  return (
    <>
      <main className="bg-white text-center h-40 flex flex-col items-center justify-center space-y-4 -mb-10">
        <h1 className="text-3xl font-bold text-stone-600 tracking-wide bg-white">
          Welcome back, Zava!
        </h1>
        <p className="text-stone-600 bg-white font-light">
          This is the admin dashboard. You can manage all the content here.
        </p>
      </main>
      <section className="flex m-10 gap-4">
        <div className="w-1/2">
          <RevenueChart />
        </div>
        <div className="w-1/2">
          <ItemsSoldChart />
        </div>
      </section>
      <section className="flex m-10 gap-4">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold text-stone-600 tracking-wide text-center m-8">
            Your products
          </h2>
          <ProductsList />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold text-stone-600 tracking-wide text-center m-8">
            Add new product
          </h2>
          <CreateProductForm />
        </div>
      </section>
    </>
  );
}
