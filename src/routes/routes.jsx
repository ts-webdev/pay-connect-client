import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Bills from "../pages/Bills";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/bills",
        Component: Bills,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
