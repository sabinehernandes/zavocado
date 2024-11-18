import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
}
