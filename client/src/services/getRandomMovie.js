import tmdb from "./tmdb";

export default async function getRandomMovie() {
  const randomPage = Math.floor(Math.random() * 9) + 1;
  const response = await tmdb.get("/movie/popular", {
    params: {
      page: randomPage,
    },
  });
  return response.data.results;
}
