import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import ProductsPage from "../components/products-page/ProductsPage";

export const Route = createFileRoute("/products")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <ProductsPage />
    </>
  );
}
