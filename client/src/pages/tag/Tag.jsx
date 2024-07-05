import { useLoaderData, useParams } from "react-router-dom";

export default function Tag() {
  const { mood } = useParams();
  const data = useLoaderData();
  console.info(data);
  console.info(mood);

  return (
    <div>
      {"results" in data
        ? data.results.map((film) => (
            <img
              src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
              alt={film.title}
              key={film.id}
            />
          ))
        : null}
    </div>
  );
}
