import React from "react";
import { useLoaderData } from "react-router-dom";
import LineFilm from "./LineFilm";

export default function Filmographie() {
  const { credit } = useLoaderData();
  const films = credit.cast.sort(
    (a, b) => b.release_date.split("-")[0] - a.release_date.split("-")[0]
  );
  const filmsSorted = films.reduce((acc, film) => {
    const date = film.release_date.split("-")[0];

    // Si pas dedans
    if (!acc[date]) acc[date] = [];

    acc[date].push(film);
    return acc;
  }, {});

  return (
    <section>
      {Object.keys(filmsSorted)
        .reverse()
        .map((year) => (
          <React.Fragment key={year}>
            <u>{year || "Prochainement"}</u>
            {filmsSorted[year].map((film) => (
              <LineFilm
                key={film.id}
                title={film.title}
                character={film.character}
              />
            ))}
            <hr />
          </React.Fragment>
        ))}
    </section>
  );
}

// <p key={film.id}>{film.release_date.split("-")[0]},{film.title},{film.character}</p>
/*

            {films.map((film) =>
                <LineFilm key={film.id} title={film.title} date={film.release_date} character={film.character} />
            )}
            */
