import axios from "axios";

function fetchFilm(id) {
  const apiUrlMovie = `https://api.themoviedb.org/3/movie/${id}?language=fr-FR&api_key=${import.meta.env.VITE_API_KEY}`;
  return axios.get(apiUrlMovie).then((reponse) => reponse.data);
}

export default fetchFilm
