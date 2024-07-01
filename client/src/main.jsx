import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

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
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
