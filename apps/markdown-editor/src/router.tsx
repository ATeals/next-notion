import { createBrowserRouter, RouterProvider as Provider } from "react-router-dom";

import { Layout } from "./pages/Layout";

import { EditorPage, HomePage } from "./pages";
import { Suspense } from "react";

export const PATH = {
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
        element: (
          <Suspense>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: PATH.EDITOR,
        element: (
          <Suspense>
            {" "}
            <EditorPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export const RouterProvider = () => {
  return <Provider router={route} />;
};
