import { RouteObject } from "react-router-dom";
import Home from "./pages/home";
import { routes as QuizzRoutes } from "./pages/quizz/routes";
import Layout from "./components/Layout";

const routes: RouteObject[] = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/quizz",
    children: QuizzRoutes,
  },
];

export function getRoutes(): RouteObject[] {
  return [{ path: "/", element: <Layout />, children: routes }];
}
