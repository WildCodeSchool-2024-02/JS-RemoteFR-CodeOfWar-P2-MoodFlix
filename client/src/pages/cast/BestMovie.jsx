import { useLoaderData } from "react-router-dom";
import baseImageUrl from "../../utils/baseImageUrl";
import "../../styles/cast/BestMovie.css";

export default function BestMovie() {
  const { credit } = useLoaderData();
  const importantFilm = credit.cast.slice(0, 3);
  return (
    <div className="bestMovie">
      {importantFilm.map((film) => (
        <div className="poster" key={film.id}>
          <img src={baseImageUrl + film.poster_path} alt={film.title} />
        </div>
      ))}
    </div>
  );
}
