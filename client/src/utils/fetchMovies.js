import axios from "axios";

export default async function fetchMovies(setMovies) {
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&language=fr-FR&page=${Math.floor(Math.random() * 5)}`;
  const randomValue = Math.floor(Math.random() * 16);
  axios.get(apiUrl).then((response) => {
    setMovies(response.data.results.slice(randomValue, randomValue + 4));
  });
}
