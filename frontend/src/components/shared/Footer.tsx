export default function Footer() {
  return (
    <footer className="footer footer-center bg-slate-100 font-light text-stone-600 p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Zavocado
        </p>
        <p>Created by Sabine Hernandes</p>
      </aside>
    </footer>
  );
}
