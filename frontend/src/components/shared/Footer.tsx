export default function Footer() {
  return (
    <footer className="footer footer-center bg-lime-900/70 font-light text-gray-50 p-4">
      <aside>
        <p className="font-bold">
          © {new Date().getFullYear()} Copyright Zava Farms
        </p>
        <p className="-m-1">Created by Sabine Hernandes</p>
      </aside>
    </footer>
  );
}
