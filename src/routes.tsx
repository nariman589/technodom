import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "./layout/App";
import Auth from "./layout/auth/Auth";
import Register from "./layout/auth/Register";
import Forget from "./layout/auth/Forget";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forget",
        element: <Forget />,
      },
      {
        path: "*",
        element: <Navigate replace to={"/"} />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
