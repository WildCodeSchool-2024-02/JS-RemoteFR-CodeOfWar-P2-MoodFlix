import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: "fr-FR",
  },
});

export default tmdb;
