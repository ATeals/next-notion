import { createBrowserRouter, RouterProvider as Provider, Link } from "react-router-dom";
import { Layout } from "./pages/Layout";

const PATH = {
  ROOT: "",
  HOME: "/",
  EDITOR: "/editor",
};

const route = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: <Layout />,
    children: [
      {
        path: PATH.HOME,
        element: <div>home</div>,
      },
      {
        path: PATH.EDITOR,
        element: <div>editor</div>,
      },
    ],
  },
]);

export const RouterProvider = () => {
  return <Provider router={route} />;
};
