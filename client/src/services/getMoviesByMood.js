import tmdb from "./tmdb";

export const moodTable = {
  happy: 35,
  sad: 18,
};

export default function getMoviesByMood(mood) {
  return tmdb
    .get("/discover/movie", {
      params: {
        with_genres: moodTable[mood] || 28,
      },
    })
    .then((response) => response.data);
}
