import { useState, useEffect } from "react";
import PropTypes from "prop-types"; 
import axios from "axios";

export default function Movie({ id }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: import.meta.env.VITE_API_KEY,
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <>
      {movie ? (
        <img
          className="favMovies"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt="poster"
        />
      ) : null}
      <p>&nbsp;</p>
    </>
  );
}

Movie.propTypes={
    id:PropTypes.string.isRequired
}