import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <>
      <nav className="bg-lime-900/70 font-light text-gray-50 px-4 py-3 flex items-center justify-between h-14">
        <div className="flex items-center space-x-2">
          <img
            src="public/half-avocado.svg"
            alt="Avocado logo"
            className="w-5 h-5"
          />
          <Link to="/" className="text-lg font-bold">
            ZAVOCADO
          </Link>
        </div>
        <div className="flex space-x-4 font-light">
          <Link
            to="/products"
            className="px-2 rounded hover:bg-gray-50 hover:text-lime-900/70 transition duration-300 ease-in-out"
          >
            Products
          </Link>
          <SignedOut>
            <SignInButton mode="redirect" forceRedirectUrl={"/admin"}>
              <button className="px-2 rounded hover:bg-gray-50 hover:text-lime-900/70 transition duration-300 ease-in-out">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link
              to="/admin"
              className="px-2 rounded hover:bg-gray-50 hover:text-lime-900/70 transition duration-300 ease-in-out"
            >
              Dashboard
            </Link>
            <SignOutButton>
              <UserButton />
            </SignOutButton>
          </SignedIn>
        </div>
      </nav>
    </>
  );
}
