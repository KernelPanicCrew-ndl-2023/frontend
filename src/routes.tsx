import { RouteObject } from "react-router-dom";
import Home from "./pages/home";
import { routes as QuizzRoutes } from "./pages/quizz/routes";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quizz",
    children: QuizzRoutes,
  },
];

export function getRoutes(): RouteObject[] {
  return routes;
}
