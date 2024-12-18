// Developer: Roderick Bernardo
// Purpose: React quiz app

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./Admin";
import Layout from "./Layout";
import Login from "./Login";
import NotFound from "./NotFound";
import Quiz from "./Quiz";
import Authenticator from "../lib/Authenticator";

function Entry() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: getQuiz(),
        },
        {
          path: "Quiz",
          element: getQuiz(),
        },
        {
          path: "Admin",
          element: getAdmin(),
        },
        {
          path: "Login",
          element: getQuiz(),
        },
        { path: "NotFound", element: <NotFound /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

function getQuiz() {
  let page = <Login></Login>;

  if (Authenticator.isAuthenticated()) {
    page = <Quiz></Quiz>;
  }

  return page;
}

function getAdmin() {
  let page = <NotFound></NotFound>;

  if (Authenticator.isAuthenticated() && Authenticator.isAdmin() === "y") {
    page = <Admin></Admin>;
  }

  return page;
}

export default Entry;
