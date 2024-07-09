import React from "react";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Film from "./pages/film/Film";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import SignUp from "./pages/sign-up/SignUp";
import Tag from "./pages/tag/Tag";
import fetchFilm, { fetchCrew, fetchImage } from "./utils/fetchFilm";
import getMoviesByMood from "./services/getMoviesByMood";
import "./styles/profileCard.css";

function loaderFilm({ params }) {
  const { id } = params;
  return Promise.all([fetchFilm(id), fetchCrew(id), fetchImage(id)]).then(
    (responses) => {
      const [responseFilm, responseCrew, responseImage] = responses;
      return {
        film: responseFilm,
        crew: responseCrew,
        image: responseImage,
      };
    }
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/film/:id",
    element: <Film />,
    loader: loaderFilm,
  },
  {
    path: "/profile",
    element: <Profile />,
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
