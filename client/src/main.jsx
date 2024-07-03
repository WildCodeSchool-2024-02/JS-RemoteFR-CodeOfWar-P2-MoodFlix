import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Film from "./pages/film/Film";
import fetchFilm, { fetchCrew, fetchImage } from "./utils/fetchFilm";

function loaderFilm({ params }) {
  const { id } = params;
  return Promise.all([
    fetchFilm(id),
    fetchCrew(id),
    fetchImage(id),
  ]).then(responses => {
    const [responseFilm, responseCrew, responseImage] = responses;
    return {
      film: responseFilm,
      crew: responseCrew,
      image: responseImage,
    }
  })
}

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
    element: <Film />,
    loader: loaderFilm,
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

