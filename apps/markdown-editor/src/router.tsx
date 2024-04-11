import { createBrowserRouter, RouterProvider as Provider } from "react-router-dom";

import { Layout } from "./pages/Layout";

import { EditorPage, HomePage } from "./pages";

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
        element: <HomePage />,
      },
      {
        path: PATH.EDITOR,
        element: <EditorPage />,
      },
    ],
  },
]);

export const RouterProvider = () => {
  return <Provider router={route} />;
};
