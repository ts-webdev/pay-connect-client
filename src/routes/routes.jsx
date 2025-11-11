import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Bills from "../pages/Bills";
import SeeDetails from "../pages/SeeDetails";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";

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
        loader: ()=> fetch("http://localhost:3000/bills")
      },
      {
        path: "see-details/:id",
        element: <PrivateRoute>
          <SeeDetails></SeeDetails>
        </PrivateRoute>
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
