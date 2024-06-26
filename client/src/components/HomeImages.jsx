import { useState, useEffect } from "react";
import "../style/homeImages.css";
import fetchMovies from "../utils/fetchMovies";
import baseImageUrl from "../utils/baseImageUrl";

export default function HomeImages() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMovies(setMovies);
  }, []);

  return (
    <section className="home-image">
      {movies
        ? movies.map((movie) => (
            <img
              key={movie.id}
              src={baseImageUrl + movie.poster_path}
              alt={movie.title}
            />
          ))
        : null}
    </section>
  );
}
