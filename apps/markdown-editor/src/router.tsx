import { createBrowserRouter, RouterProvider as Provider } from "react-router-dom";

import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";

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
        element: <Home />,
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
