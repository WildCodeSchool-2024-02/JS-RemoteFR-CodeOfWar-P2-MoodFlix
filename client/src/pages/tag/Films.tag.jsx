import { Link, useLoaderData, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import getMoviesByMood from "../../services/getMoviesByMood";

export default function FilmsTag() {
  const initialData = useLoaderData();
  const [movies, setMovies] = useState(initialData.results);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const { mood } = useParams();

  useEffect(() => {
    const loadMoreMovies = () => {
      if (!loading) {
        setLoading(true);
        getMoviesByMood(mood, page).then((newData) => {
          setMovies((prevMovies) => [...prevMovies, ...newData.results]);
          setPage((prevPage) => prevPage + 1);
          setLoading(false);
        });
      }
    };

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 500 &&
        !loading
      ) {
        loadMoreMovies();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, page, mood]);

  return (
    <section>
      {movies
        .filter((film) => film.backdrop_path)
        .map((film, index) => (
          <Link to={`/film/${film.id}`} key={film.id}>
            <motion.img
              src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
              alt={film.title}
              key={film.id}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: index < 20 ? index * 0.2 : 0.4 },
              }}
            />
            <h4>{film.title}</h4>
          </Link>
        ))}
      {loading && <p>Loading more movies...</p>}
    </section>
  );
}
