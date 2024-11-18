import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-50 text-stone-600 px-4 py-3 border-b border-gray-400 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="public/half-avocado.svg"
            alt="Avocado logo"
            className="w-5 h-5 bg-gray-50"
          />
          <Link to="/landing" className="text-lg font-semibold bg-gray-50">
            ZAVOCADO
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link
            to="/products"
            className="px-2 rounded hover:text-white hover:bg-lime-800 hover:border-lime-800 hover:rounded-2 transition duration-200"
          >
            Products
          </Link>
          <Link
            to="/admin"
            className="hover:text-lime-800 transition duration-200"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </>
  );
}
