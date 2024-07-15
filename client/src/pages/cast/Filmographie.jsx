import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import LineFilm from "./LineFilm";
import "../../styles/cast/Cast.css";
import "../../styles/cast/Filmographie.css";

export default function Filmographie() {
  const { credit } = useLoaderData();
  const films = credit.cast.sort(
    (a, b) => b.release_date.split("-")[0] - a.release_date.split("-")[0]
  );
  const filmsReduce = films.filter(
    (actor) =>
      !actor.character.includes("(uncredited)") &&
      !actor.character.includes("(performer)")
  );

  const filmsSorted = filmsReduce.reduce((acc, film) => {
    const date = film.release_date.split("-")[0];
    if (!acc[date]) acc[date] = [];
    acc[date].push(film);
    return acc;
  }, {});

  const [visibleCount, setVisibleCount] = useState(3);

  const handleClick = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const years = Object.keys(filmsSorted).reverse();

  return (
    <section className="filmographie">
      {years.slice(0, visibleCount).map((year) => (
        <div key={year}>
          <u>{year || "Prochainement"}</u>
          {filmsSorted[year].map((film) => (
            <LineFilm
              key={film.id}
              title={film.title}
              character={film.character}
            />
          ))}
          <hr />
        </div>
      ))}
      {visibleCount < years.length && (
        <button type="button" onClick={handleClick}>
          Afficher Plus
        </button>
      )}
    </section>
  );
}
