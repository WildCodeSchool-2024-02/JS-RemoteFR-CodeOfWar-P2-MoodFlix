import axios from "axios";

export default function fetchFilm(id) {
  const apiUrlMovie = `https://api.themoviedb.org/3/movie/${id}?language=fr-FR&api_key=${import.meta.env.VITE_API_KEY}`;
  return axios.get(apiUrlMovie).then((reponse) => reponse.data);
}

export function fetchCrew(id) {
  const apiUrlMovie = `https://api.themoviedb.org/3/movie/${id}/credits?language=fr-FR&api_key=${import.meta.env.VITE_API_KEY}`;
  return axios.get(apiUrlMovie).then((reponse) => reponse.data);
}

export function fetchImage(id) {
  const apiUrlMovie = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_API_KEY}`;
  return axios.get(apiUrlMovie).then((reponse) => reponse.data);
}
