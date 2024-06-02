import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Lectures from "./components/Lectures";
import Labs from "./components/Labs";
import Quizzes from "./components/Quizzes";
import Campus from "./components/Campus";
import NotFound from "./components/NotFound";

function AppV6(props) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout version={props.version}></Layout>,
      children: [
        { index: true, element: <Home /> },
        { path: "Home", element: <Home /> },
        { path: "Lectures", element: <Lectures /> },
        { path: "Labs", element: <Labs /> },
        { path: "Quizzes", element: <Quizzes /> },
        { path: "Campus/:campusId", element: <Campus /> },
        { path: "NotFound", element: <NotFound /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppV6;
