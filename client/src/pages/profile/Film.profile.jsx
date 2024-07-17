import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import baseImageUrl from "../../utils/baseImageUrl";

export default function FilmProfile({ film }) {
  return (
    <Link to={`/film/${film.id}`}>
      <motion.img
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        src={baseImageUrl + film.poster_path}
        alt={film.title}
      />
    </Link>
  );
}

FilmProfile.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};
