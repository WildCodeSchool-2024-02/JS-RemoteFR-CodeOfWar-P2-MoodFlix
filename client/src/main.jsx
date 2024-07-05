import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

// page components

import Profile from "./pages/profile/Profile";

// page styles

import "./styles/profileCard.css";

// router creation

import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";
import getMoviesByMood from "./services/getMoviesByMood";
import Tag from "./pages/tag/Tag";

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
    element: <App />,
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
