import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import fetchMovies from "../utils/fetchMovies";
import baseImageUrl from "../utils/baseImageUrl";
import "../styles/HomeImages.css";

export default function HomeImages() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMovies(setMovies);
  }, []);

  return (
    <section className="home-image">
      {movies
        ? movies.map((movie, index) => (
            <motion.img
              key={movie.id}
              src={baseImageUrl + movie.poster_path}
              alt={movie.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            />
          ))
        : null}
    </section>
  );
}
