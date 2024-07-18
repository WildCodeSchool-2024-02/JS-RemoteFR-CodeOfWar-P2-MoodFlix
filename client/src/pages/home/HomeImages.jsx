import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import fetchMovies from "../../utils/fetchMovies";
import baseImageUrl from "../../utils/baseImageUrl";
import "../../styles/HomeImages.css";

export default function HomeImages() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMovies(setMovies);
  }, []);

  return (
    <section className="home-image">
      {movies
        ? movies.map((movie, index) => (
            <Link key={movie.id} to={`/film/${movie.id}`}>
              <motion.img
                src={baseImageUrl + movie.poster_path}
                alt={movie.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: index * 0.2 },
                }}
              />
            </Link>
          ))
        : null}
    </section>
  );
}
