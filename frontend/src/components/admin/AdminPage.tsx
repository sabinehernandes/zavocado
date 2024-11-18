import { RevenueChart } from "@/components/admin/RevenueChart";
import { ItemsSoldChart } from "./ItemsSoldChart";

export default function AdminPage() {
  return (
    <>
      <main className="bg-slate-100 text-center h-40 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-bold text-stone-600 tracking-wide bg-slate-100">
          Welcome back, Zava!
        </h1>
        <p className="text-stone-600 bg-slate-100">
          This is the admin dashboard. You can manage all the content here.
        </p>
      </main>
      <section className="flex m-10 gap-4">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold text-stone-600 tracking-wide mb-4">
            Revenue
          </h2>
          <RevenueChart />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold text-stone-600 tracking-wide mb-4">
            Top products
          </h2>
          <ItemsSoldChart />
        </div>
      </section>
      <section>
        <div className="">
          <h2 className="text-2xl font-bold text-stone-600 tracking-wide">
            Your products
          </h2>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold text-stone-600 tracking-wide">
            Add new product
          </h2>
        </div>
      </section>
    </>
  );
}
