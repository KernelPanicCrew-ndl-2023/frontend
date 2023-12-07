import { RouteObject } from "react-router-dom";
import Home from "./pages/home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export function getRoutes(): RouteObject[] {
  return routes;
}