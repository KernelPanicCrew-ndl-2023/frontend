import { RouteObject } from "react-router-dom";
import Home from "./pages/home";
import { routes as QuizzRoutes } from "./pages/quizz/routes";
import Layout from "./components/Layout";
import Page404 from "./pages/404";

const routes: RouteObject[] = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/quizz",
    children: QuizzRoutes,
  },
  {
    path: "*",
    element: <Page404 />,
  },
];

export function getRoutes(): RouteObject[] {
  return [{ path: "/", element: <Layout />, children: routes }];
}
