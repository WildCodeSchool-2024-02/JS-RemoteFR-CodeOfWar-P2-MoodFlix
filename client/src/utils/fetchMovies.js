import axios from "axios";

export default function fetchMovies(setMovies) {
  const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR&page=${Math.floor(Math.random() * 5) + 1}`;

  axios.get(apiUrl).then((response) => {
    const film = response.data.results.slice(0, 8);
    setMovies(film);
  });
}
