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
      <nav className="border-b-lime-700/50 border-b-2 text-stone-600 px-4 py-3 flex items-center justify-between h-14">
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
            className="px-2 rounded hover:text-white hover:bg-lime-800 hover:border-lime-800 hover:rounded-2 transition duration-200"
          >
            Products
          </Link>
          <SignedOut>
            <SignInButton mode="redirect" forceRedirectUrl={"/admin"}>
              <button className="px-2 hover:text-lime-800 transition duration-200">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link
              to="/admin"
              className="hover:text-lime-800 transition duration-200"
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
