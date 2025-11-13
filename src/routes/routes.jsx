import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Bills from "../pages/Bills";
import SeeDetails from "../pages/SeeDetails";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import MyPayBills from "../pages/MyPayBills";

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
        path: "/see-details/:id",
        element: (
          <PrivateRoute>
            <SeeDetails></SeeDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-pay-bills",
        element: <PrivateRoute>
          <MyPayBills></MyPayBills>
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
