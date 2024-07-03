import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import getMoviesByMood from "./services/getMoviesByMood";
import Tag from "./pages/tag/Tag";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <App />,
  },
  {
    path: "/signup",
    element: <App />,
  },
  {
    path: "/film/:id",
    element: <App />,
  },
  {
    path: "/profile",
    element: <App />,
  },
  {
    path: "/mood/:mood",
    element: <Tag />,
    loader: ({ params }) => getMoviesByMood(params.mood),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
