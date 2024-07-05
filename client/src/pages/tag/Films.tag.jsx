import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

export default function FilmsTag() {
  const data = useLoaderData();

  return (
    <section>
      {"results" in data
        ? data.results.map((film, index) => (
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
                animate={{ opacity: 1, transition: { delay: index * 0.2 } }}
              />
              <h4>{film.title}</h4>
            </Link>
          ))
        : null}
    </section>
  );
}
