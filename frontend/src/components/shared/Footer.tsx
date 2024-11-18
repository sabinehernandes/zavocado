export default function Footer() {
  return (
    <footer className="footer footer-center bg-slate-100 font-light text-stone-600 p-4">
      <aside>
        <p className="font-bold">
          © {new Date().getFullYear()} Copyright Zava Farms Zavocado
        </p>
        <p className="-m-1">Created by Sabine Hernandes</p>
      </aside>
    </footer>
  );
}
