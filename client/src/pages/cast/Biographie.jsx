import { useLoaderData } from "react-router-dom";
import baseImageUrl from "../../utils/baseImageUrl";

export default function Biographie() {
  const { cast, credit } = useLoaderData();
  const importantFilm = credit.cast.slice(0, 3);
  return (
    <section className="biographie">
      <div className="bio">
        <h1>{cast.name}</h1>
        <h2>Biographie</h2>
        <p>{cast.biography}</p>
      </div>
      <div>
        {importantFilm.map((film) => (
          <p key={film.id}>
            <img src={baseImageUrl + film.poster_path} alt={film.title} />
            {film.title}
          </p>
        ))}
      </div>
    </section>
  );
}
