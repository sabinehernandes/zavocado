import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import App from "../App";

export const Route = createFileRoute("/landing")({
  component: App,
});
