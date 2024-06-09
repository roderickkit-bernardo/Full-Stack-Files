// Developer: Roderick Bernardo
// Purpose: React quiz app

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Quiz from "./Quiz";
import Login from "./Login";
import NotFound from "./NotFound";
import Autheticator from "../lib/Autheticator";

function Entry() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: Autheticator.isAuthenticated() ? <Quiz /> : <Login />,
        },
        {
          path: "Quiz",
          element: Autheticator.isAuthenticated() ? <Quiz /> : <Login />,
        },
        {
          path: "Login",
          element: Autheticator.isAuthenticated() ? <Quiz /> : <Login />,
        },
        { path: "NotFound", element: <NotFound /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Entry;
